import { useEffect, useMemo, useRef, useState } from 'react';
import { getUserId, hasFirebase, sendMessage, subscribeMessages } from '../lib/guestbook';

const MAX = 300;
// 해외 접속자도 전시 기준 시간(KST)으로 표시
const TZ = 'Asia/Seoul';
const keyFmt = new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' });
const dayFmt = new Intl.DateTimeFormat('ko-KR', { timeZone: TZ, month: 'long', day: 'numeric', weekday: 'long' });
const timeFmt = new Intl.DateTimeFormat('ko-KR', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
const dayKey = (ms) => keyFmt.format(new Date(ms));
const dayLabel = (ms) => dayFmt.format(new Date(ms));
const timeLabel = (ms) => timeFmt.format(new Date(ms));

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [sending, setSending] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const me = useMemo(getUserId, []);

  useEffect(() => subscribeMessages(setMessages), []);

  // 새 메시지가 오면 맨 아래로
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages.length]);

  // 날짜별 그룹
  const groups = useMemo(() => {
    const out = [];
    messages.forEach((m) => {
      const k = dayKey(m.createdAt);
      if (!out.length || out[out.length - 1].key !== k) out.push({ key: k, label: dayLabel(m.createdAt), items: [] });
      out[out.length - 1].items.push(m);
    });
    return out;
  }, [messages]);

  const submit = async (e) => {
    e?.preventDefault();
    const value = text.trim();
    if (!value || sending) return;
    setSending(true);
    try {
      const local = await sendMessage(value.slice(0, MAX));
      if (local) setMessages(local);
      setText('');
    } catch (err) {
      console.error(err);
      alert('메시지를 보내지 못했어요. 잠시 후 다시 시도해 주세요.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="messages">
      {/* 입력창 바깥(대화 영역) 탭 시 키보드 내림 */}
      <div className="messages__list" ref={listRef} onClick={() => inputRef.current?.blur()}>
        {!hasFirebase && (
          <p className="messages__notice">데모 모드: 메시지가 이 브라우저에만 저장됩니다.</p>
        )}
        {groups.length === 0 && <p className="messages__empty">첫 번째 전시 후기를 남겨주세요.</p>}
        {groups.map((g) => (
          <section key={g.key} className="messages__day">
            <h2 className="messages__date">{g.label}</h2>
            {g.items.map((m) => {
              const mine = m.userId === me;
              return (
                <div key={m.id} className={`bubble-row ${mine ? 'is-mine' : ''}`}>
                  <p className="bubble">{m.text}</p>
                  <time className="bubble-time">{timeLabel(m.createdAt)}</time>
                </div>
              );
            })}
          </section>
        ))}
      </div>

      <form className="messages__form" onSubmit={submit}>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="전시 후기를 남겨주세요"
          maxLength={MAX}
          enterKeyHint="send"
          aria-label="전시 후기"
        />
        <button type="submit" disabled={!text.trim() || sending} aria-label="보내기">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M12 19V5M5.5 11.5 12 5l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </form>
    </div>
  );
}
