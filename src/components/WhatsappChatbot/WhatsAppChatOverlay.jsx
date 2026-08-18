import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './whatsapp-chat-overlay.css';

const WHATSAPP_NUMBER = '919998566337';
const COMMUNITY_URL = 'https://chat.whatsapp.com/YOUR_COMMUNITY_INVITE_LINK';

const faqItems = [
  {
    question: 'When is Arena of Legends launching?',
    answer: 'The roadmap targets closed beta in Q4 2026 and open beta in Q1 2027.',
  },
  {
    question: 'How can I join testing?',
    answer: 'Send us your device details and preferred platform. The team will share beta access updates when slots open.',
  },
  {
    question: 'Is the game coming to Android and iOS?',
    answer: 'Yes. Arena of Legends is planned for both Android and iOS.',
  },
];

function Icon({ name, size = 18 }) {
  const icons = {
    message: <path d="M4.8 15.6 3 21l5.5-1.7a9 9 0 1 0-3.7-3.7Z" />,
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

  const whatsappUrl = useMemo(() => {
    const message = 'Hi XOGO Studios, I have a query about Arena of Legends.';
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            className="whatsapp-backdrop"
            aria-label="Close WhatsApp support panel"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      <aside className={`whatsapp-chat-overlay ${isOpen ? 'is-open' : ''}`} aria-label="WhatsApp support">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="whatsapp-chat-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="whatsapp-chat-title"
              initial={{ y: 36, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 42, opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.72 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 90 || info.velocity.y > 520) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="whatsapp-sheet-drag-zone" aria-hidden="true">
                <div className="whatsapp-sheet-handle" />
              </div>

              <div className="whatsapp-chat-header">
                <span className="whatsapp-chat-kicker">Player Support</span>
                <h2 id="whatsapp-chat-title">Queries & FAQ</h2>
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
            </motion.div>
          )}
        </AnimatePresence>

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
