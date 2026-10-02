import { KAKAO_SHARE, SITE } from '../data/site';

function getKakao() {
  const key = import.meta.env.VITE_KAKAO_JS_KEY;
  const Kakao = window.Kakao;
  if (!Kakao || !key) return null;
  if (!Kakao.isInitialized()) Kakao.init(key);
  return Kakao;
}

export function shareInvitation() {
  const origin = window.location.origin || SITE.url;
  const Kakao = getKakao();

  if (!Kakao) {
    // SDK 키가 없거나 로드 실패 시: 링크 복사로 대체
    navigator.clipboard?.writeText(origin).then(
      () => alert('카카오톡 공유를 불러오지 못해 링크를 복사했어요.'),
      () => alert(origin),
    );
    return;
  }

  const link = { mobileWebUrl: origin, webUrl: origin };

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: KAKAO_SHARE.title,
      description: KAKAO_SHARE.description,
      imageUrl: origin + KAKAO_SHARE.imagePath,
      imageWidth: KAKAO_SHARE.imageWidth,
      imageHeight: KAKAO_SHARE.imageHeight,
      link,
    },
    // 카드 상단 "YOU'RE INVITED TO ···" 줄
    itemContent: {
      profileText: KAKAO_SHARE.profileText,
    },
    // 하단 버튼 (클릭 시 content.link 로 이동)
    buttonTitle: KAKAO_SHARE.buttonTitle,
  });
}