import React, { useState } from "react";
import "./OurInsights.css";

// Single reusable image asset
import kapilImg from "../../assets/teams/Kapil_Sir.png";
import teamImg from "../../assets/teams/Xogo_Team.png";

const insightArticles = [
  {
    id: 1,
    title: "Casino Game Development Company || A Complete Guide to Become Casino Game Publisher",
    meta: "XogoStudios · December 7, 2025",
    category: "GUIDE",
    excerpt: "Discover how modern studios build engaging, secure, and scalable casino gaming experiences with cutting-edge engine architecture."
  },
  {
    id: 2,
    title: "Risk Board Game Development Company | How do you play risk the board game",
    meta: "XogoStudios · December 1, 2025",
    category: "TACTICS",
    excerpt: "An architectural overview of building strategy games centered around diplomacy, conquest, and large-scale multiplayer board maps."
  }
];

export default function OurInsights() {
  const [activeArticle, setActiveArticle] = useState(0);

  return (
    <section id="insights" className="insights-section">
      <div className="insights-container">
        
        {/* Centered Header Section */}
        <div className="insights-header-centered">
          <h2 className="insights-section-title">OUR INSIGHTS</h2>
        </div>

        {/* Top Insights Hub: Featured Showcase + News Cards */}
        <div className="insights-grid">
          
          {/* Main Featured Interactive Viewport */}
          <div className="featured-card-hud">
            <div className="featured-media-box">
              <img
                src={kapilImg}
                alt="Crafting a 3D Game Character"
                className="featured-media-img"
              />
              <div className="hud-video-overlay">
                <button className="hud-play-btn" aria-label="Play Video">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              <span className="hud-tag">FEATURED INSIGHT</span>
            </div>

            <div className="featured-body">
              <h3 className="featured-title">
                Crafting a 3D Game Character: Concept to Animation
              </h3>
              <p className="featured-desc">
                Explore the collaborative pipeline between creative directors and 3D character artists, ensuring seamless model topology and rig mechanics match the game's core vision.
              </p>
            </div>
          </div>

          {/* Side Company News & Articles */}
          <div className="news-stack">
            {insightArticles.map((article, idx) => (
              <div
                key={article.id}
                className={`news-hud-card ${activeArticle === idx ? "active" : ""}`}
                onClick={() => setActiveArticle(idx)}
              >
                <div className="news-hud-header">
                  <span className="news-category-badge">{article.category}</span>
                  <span className="news-meta">{article.meta}</span>
                </div>
                <h4 className="news-card-title">{article.title}</h4>
                <p className="news-card-excerpt">{article.excerpt}</p>
                <div className="news-card-footer">
                  <span className="read-more-text">READ ARTICLE →</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* View All Action Button
        <div className="insights-action-wrapper">
          <a href="#all-insights" className="btn-view-all">
            VIEW ALL INSIGHTS
          </a>
        </div> */}

        {/* Bottom Collaboration Banner */}
        <div className="collab-hud-banner">
          <div className="collab-img-frame">
            <img
              src={teamImg}
              alt="Xogo Studios Leadership"
              className="collab-img"
            />
            <div className="frame-border-glow"></div>
          </div>

          <div className="collab-details">
            <h3 className="collab-main-title">COLLABORATE WITH XOGO STUDIOS</h3>
            <span className="collab-highlight">
              LET'S CREATE THE NEXT BIG GAME TOGETHER!
            </span>
            <p className="collab-body-text">
              From <strong>concept & design</strong> to <strong>3D modeling, environment rendering, full QA, and deployment</strong> — our studio delivers end-to-end production pipelines.
            </p>
            <p className="collab-body-text">
              Whether you are aiming for a high-octane mobile title or a cross-platform multiplayer universe, we bring your ideas to life.
            </p>
            <div className="collab-cta">
              <span className="cta-motto">BUILD SOMETHING EXTRAORDINARY</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}