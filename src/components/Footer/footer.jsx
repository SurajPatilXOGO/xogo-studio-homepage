import React, { useState } from "react";
import "./footer.css";

// Social Icon Imports
import discordIcon from "../../assets/footer/discord.png";
import twitterIcon from "../../assets/footer/twitter.png";
import youtubeIcon from "../../assets/footer/youtube.png";
import facebookIcon from "../../assets/footer/facebook.png";
import tiktokIcon from "../../assets/footer/tik-tok.png";

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
          
          {/* Column 1: Brand & Address */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-accent">XOGO</span> STUDIO
            </div>
            
            <p className="footer-tagline">
              Crafting high-stakes competitive gaming experiences and original mythological worlds.
            </p>

            <address className="footer-address">
              <strong>701, 702 – 7th floor</strong>,<br />
              Prayosha Business House,<br />
              Surat, Gujarat, India – 394210
            </address>

            <div className="social-row">
              <a href="https://discord.gg" target="_blank" rel="noreferrer" className="social-btn" aria-label="Discord">
                <img src={discordIcon} alt="Discord" className="social-icon" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" className="social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="YouTube">
                <img src={youtubeIcon} alt="YouTube" className="social-icon" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="Facebook">
                <img src={facebookIcon} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-btn" aria-label="TikTok">
                <img src={tiktokIcon} alt="TikTok" className="social-icon" />
              </a>
            </div>
          </div>

          {/* Column 2: Our Games */}
          <div className="footer-col">
            <h4 className="footer-heading">OUR GAMES</h4>
            <ul className="footer-links">
              <li><a href="#games">Arena of Legends</a></li>
              <li><a href="#games">Ultimate Domination</a></li>
              <li><a href="#games">Cyber Conquest</a></li>
              <li><a href="#patch-notes">Patch Notes</a></li>
            </ul>
          </div>

          {/* Column 3: Studio Insights */}
          <div className="footer-col">
            <h4 className="footer-heading">STUDIO</h4>
            <ul className="footer-links">
              <li><a href="#insights">Our Insights</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact & Support</a></li>
            </ul>
          </div>

          {/* Column 4: Get Updates */}
          <div className="footer-col footer-newsletter-col">
            <h4 className="footer-heading">GET UPDATES</h4>
            <p className="newsletter-desc">
              Subscribe to receive patch alerts, beta invites, and studio news.
            </p>
            
            {subscribed ? (
              <div className="subscribe-success">
                ✓ Thank you! You're on the XOGO list.
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

            <div className="system-status">
              <span className="status-dot">●</span>
              <span className="status-text">XOGO PLATFORM ONLINE</span>
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