// 방명록 저장소
// - Firebase 환경변수가 있으면 Firestore 'messages' 컬렉션 실시간 구독
// - 없으면 이 브라우저 localStorage 에만 저장되는 데모 모드
const env = import.meta.env;
export const hasFirebase = Boolean(env.VITE_FIREBASE_API_KEY && env.VITE_FIREBASE_PROJECT_ID);

const LOCAL_KEY = 'root2026:messages';
const USER_KEY = 'root2026:userId';

export function getUserId() {
  try {
    let id = localStorage.getItem(USER_KEY);
    if (!id) {
      id = (crypto.randomUUID?.() || String(Date.now()) + Math.random().toString(16).slice(2));
      localStorage.setItem(USER_KEY, id);
    }
    return id;
  } catch {
    return 'anonymous';
  }
}

let fs = null;
async function firestore() {
  if (fs) return fs;
  const [{ initializeApp }, firestoreMod] = await Promise.all([
    import('firebase/app'),
    import('firebase/firestore'),
  ]);
  const app = initializeApp({
    apiKey: env.VITE_FIREBASE_API_KEY,
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.VITE_FIREBASE_APP_ID,
  });
  fs = { db: firestoreMod.getFirestore(app), ...firestoreMod };
  return fs;
}

function readLocal() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]');
  } catch {
    return [];
  }
}

/** 메시지 구독. 반환값: 구독 해제 함수 */
export function subscribeMessages(callback) {
  if (!hasFirebase) {
    callback(readLocal());
    const onStorage = (e) => e.key === LOCAL_KEY && callback(readLocal());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }

  let unsub = () => {};
  let cancelled = false;
  firestore().then(({ db, collection, query, orderBy, onSnapshot }) => {
    if (cancelled) return;
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'));
    unsub = onSnapshot(q, (snap) => {
      callback(
        snap.docs.map((d) => {
          const data = d.data();
          return {
            id: d.id,
            text: data.text,
            userId: data.userId,
            createdAt: data.createdAt?.toMillis?.() ?? Date.now(),
          };
        }),
      );
    });
  });
  return () => {
    cancelled = true;
    unsub();
  };
}

export async function sendMessage(text) {
  const userId = getUserId();
  if (!hasFirebase) {
    const list = readLocal();
    list.push({ id: String(Date.now()), text, userId, createdAt: Date.now() });
    localStorage.setItem(LOCAL_KEY, JSON.stringify(list));
    return list;
  }
  const { db, collection, addDoc, serverTimestamp } = await firestore();
  await addDoc(collection(db, 'messages'), { text, userId, createdAt: serverTimestamp() });
  return null;
}
