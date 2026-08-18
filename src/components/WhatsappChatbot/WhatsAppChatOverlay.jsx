import { useMemo, useRef, useState } from 'react';
import './whatsapp-chat-overlay.css';

const WHATSAPP_NUMBER = '919998566337';
const COMMUNITY_URL = 'https://chat.whatsapp.com/YOUR_COMMUNITY_INVITE_LINK';

const faqItems = [
  {
    question: 'How can I discuss a game project?',
    answer: 'Share your game idea, target platform, timeline, and any references. Our team will help you choose the right production path.',
  },
  {
    question: 'Do you build mobile and PC games?',
    answer: 'Yes. XOGO Studios works across mobile, PC, multiplayer systems, 3D production, QA, and deployment support.',
  },
  {
    question: 'Can I request support for Arena of Legends?',
    answer: 'Yes. Send your query with your device details and the issue you are facing so the team can respond faster.',
  },
];

function Icon({ name, size = 18 }) {
  const icons = {
    message: (
      <path d="M4.8 15.6 3 21l5.5-1.7a9 9 0 1 0-3.7-3.7Z" />
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.7 9.4a2.5 2.5 0 0 1 4.6 1.4c0 1.8-2.3 2.1-2.3 3.7" />
        <path d="M12 17.2h.01" />
      </>
    ),
    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    close: (
      <>
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}

function WhatsAppChatOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const dragStartY = useRef(null);

  const whatsappUrl = useMemo(() => {
    const message = 'Hi XOGO Studios, I want to discuss a game project or support query.';
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, []);

  const handleTouchStart = (event) => {
    dragStartY.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (event) => {
    if (dragStartY.current === null) return;

    const endY = event.changedTouches[0]?.clientY ?? dragStartY.current;
    if (endY - dragStartY.current > 90) {
      setIsOpen(false);
    }

    dragStartY.current = null;
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="whatsapp-backdrop"
          aria-label="Close WhatsApp support panel"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`whatsapp-chat-overlay ${isOpen ? 'is-open' : ''}`} aria-label="WhatsApp support">
        {isOpen && (
          <div
            className="whatsapp-chat-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-chat-title"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="whatsapp-sheet-drag-zone" aria-hidden="true">
              <div className="whatsapp-sheet-handle" />
            </div>

            <div className="whatsapp-chat-header">
              <div>
                <span className="whatsapp-chat-kicker">XOGO Support Link</span>
                <h2 id="whatsapp-chat-title">Queries & FAQ</h2>
              </div>
              <button
                type="button"
                className="whatsapp-chat-close"
                aria-label="Close WhatsApp support panel"
                onClick={() => setIsOpen(false)}
              >
                <Icon name="close" size={18} />
              </button>
            </div>

            <div className="whatsapp-faq-list">
              {faqItems.map((item, index) => (
                <button
                  type="button"
                  key={item.question}
                  className={`whatsapp-faq-item ${activeFaq === index ? 'is-active' : ''}`}
                  onClick={() => setActiveFaq(index)}
                  aria-expanded={activeFaq === index}
                >
                  <span className="whatsapp-faq-question">
                    <Icon name="help" size={16} />
                    {item.question}
                  </span>
                  {activeFaq === index && <span className="whatsapp-faq-answer">{item.answer}</span>}
                </button>
              ))}
            </div>

            <div className="whatsapp-actions-group">
              <a className="whatsapp-chat-action whatsapp-primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
                <Icon name="message" size={18} />
                <span>Chat on WhatsApp</span>
                <Icon name="send" size={15} />
              </a>

              <a className="whatsapp-chat-action whatsapp-secondary-btn" href={COMMUNITY_URL} target="_blank" rel="noreferrer">
                <Icon name="users" size={18} />
                <span>Join Community</span>
              </a>
            </div>
          </div>
        )}

        <button
          type="button"
          className="whatsapp-chat-fab"
          aria-label={isOpen ? 'Close WhatsApp support panel' : 'Open WhatsApp support panel'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <Icon name="close" size={24} /> : <Icon name="message" size={26} />}
        </button>
      </aside>
    </>
  );
}

export default WhatsAppChatOverlay;
