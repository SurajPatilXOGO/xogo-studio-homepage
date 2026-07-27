import React, { useState } from "react";
import "./footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="footer" className="footer-section">
      <div className="footer-container">
        {/* Top Grid Area */}
        <div className="footer-grid">
          {/* Brand & Studio Mission */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-accent">XOGO</span> STUDIO
            </div>
            <p className="footer-tagline">
              Crafting original, high-stakes competitive products and mythological gaming experiences for global players.
            </p>
            <div className="system-status">
              <span className="status-dot">●</span>
              <span className="status-text">XOGO PLATFORM ONLINE</span>
            </div>
          </div>

          {/* Column 1: Updated Featured Games */}
          <div className="footer-col">
            <h4 className="footer-heading">OUR GAMES</h4>
            <ul className="footer-links">
              <li>
                <a href="#games" className="product-link">
                  Arena of Legends <span className="badge-flag">5V5 MOBA</span>
                </a>
              </li>
              <li>
                <a href="#games" className="product-link">
                  Ultimate Domination <span className="badge-flag">SHOOTER</span>
                </a>
              </li>
              <li>
                <a href="#games" className="product-link">
                  Cyber Conquest <span className="badge-flag">SCI-FI RPG</span>
                </a>
              </li>
              <li><a href="#news">Patch 4.2 Release Notes</a></li>
            </ul>
          </div>

          {/* Column 2: Studio Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <ul className="footer-links">
              <li><a href="#games">Games Showcase</a></li>
              <li><a href="#news">Latest News Feed</a></li>
              <li><a href="#team">Studio Leadership</a></li>
              <li><a href="#contact">Contact & Support</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter & Social */}
          <div className="footer-col footer-newsletter-col">
            <h4 className="footer-heading">GET UPDATES</h4>
            <p className="newsletter-desc">
              Subscribe to receive patch alerts, beta invites, and official esports announcements.
            </p>
            
            {subscribed ? (
              <div className="subscribe-success">
                ✓ Thank you! You're on the XOGO inner circle list.
              </div>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  JOIN
                </button>
              </form>
            )}

            <div className="social-row">
              <a href="https://discord.gg" target="_blank" rel="noreferrer" className="social-badge">DISCORD</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="social-badge">TWITTER</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-badge">YOUTUBE</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-badge">INSTAGRAM</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Rights */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            © {new Date().getFullYear()} XOGO Studio. All rights reserved. Built for competitive gaming.
          </div>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">•</span>
            <a href="#terms">Terms of Service</a>
            <span className="divider">•</span>
            <a href="#cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}