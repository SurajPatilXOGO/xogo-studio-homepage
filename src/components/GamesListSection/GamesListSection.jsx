import React, { useState } from "react";
import "./GamesListSection.css";

const games = [
  {
    id: "arena-of-legends",
    title: "ARENA OF LEGENDS",
    subtitle: "A Next-Generation 5v5 Mythological MOBA",
    url: "https://aol.xogostudios.com/",
    genre: ["5v5 MOBA", "Cross-Platform", "Action Strategy"],
    stats: {
      players: "1.2M+",
      rating: "4.9★",
      engine: "Unreal Engine 5",
      platforms: "PC / Console / Mobile"
    },
    socials: [
      { name: "Discord", icon: "D", url: "https://discord.gg" },
      { name: "Twitter", icon: "X", url: "https://x.com" },
      { name: "YouTube", icon: "Y", url: "https://youtube.com" },
      { name: "Twitch", icon: "T", url: "https://twitch.tv" }
    ],
    tabs: [
      {
        id: "overview",
        label: "Overview",
        badge: "AAA",
        content:
          "Arena of Legends is XOGO Studio's flagship title—a dark mythological MOBA built on Unreal Engine 5. Experience hyper-responsive combat, real-time strategic objective control, and dynamic battlefield environments designed for high-stakes esports competition."
      },
      {
        id: "features",
        label: "Key Features",
        badge: "01",
        content:
          "• Dynamic Hero Roster with unique tactical roles and celestial abilities.\n• True Cross-Platform Play with unified progression across PC & Console.\n• Low-Latency Global Netcode optimized for competitive esports precision."
      },
      {
        id: "updates",
        label: "Latest Patch",
        badge: "v4.2",
        content:
          "Patch 4.2: 'Celestial Dawn' is now live. Introduces two new divine champions, complete visual overhaul for the pantheon map, and rebalanced hero telemetry for competitive ranked Season 4."
      },
      {
        id: "roadmap",
        label: "Esports & Roadmap",
        badge: "2026",
        content:
          "Q3 2026: World Championship Qualifiers\nQ4 2026: Guild War System & Ranked Season 5\nQ1 2027: Cross-Title Lore Expansion & Mobile Client Beta"
      }
    ]
  }
];

export default function GamesListSection() {
  const game = games[0];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="games" className="games-section">
      <div className="games-container">
        {/* Header Block */}
        <div className="section-header">
          <span className="section-badge">XOGO FLAGSHIP PRODUCT</span>
          <h2 className="section-title">OUR GAMES</h2>
          <p className="section-subtitle">
            Transitioning to original AAA titles crafted for global competitive play.
          </p>
        </div>

        {/* Main Product Showcase Card */}
        <div className="game-card">
          {/* Left Column: Game Meta & Navigation */}
          <div className="game-info">
            <div className="game-header-group">
              <div className="tags-row">
                {game.genre.map((g) => (
                  <span key={g} className="genre-tag">{g}</span>
                ))}
              </div>
              <h3 className="game-title">{game.title}</h3>
              <a
                href={game.url}
                className="game-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {game.url.replace("https://", "")}
                <span className="url-arrow">↗</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-label">Rating</span>
                <span className="stat-value">{game.stats.rating}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Active Players</span>
                <span className="stat-value">{game.stats.players}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Engine</span>
                <span className="stat-value">{game.stats.engine}</span>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="tabs-navigation" role="tablist">
              {game.tabs.map((tab, idx) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === idx}
                  className={`tab-button ${activeTab === idx ? "active" : ""}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Description Display */}
            <div className="tab-content-panel">
              <p>{game.tabs[activeTab].content}</p>
            </div>

            {/* Actions & Social Links */}
            <div className="game-footer">
              <div className="action-buttons">
                <a
                  href={game.url}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play Now
                </a>
                <a href={`${game.url}#trailer`} className="btn-secondary">
                  Watch Trailer
                </a>
              </div>

              <div className="social-links">
                <span className="social-label">Community:</span>
                {game.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    className="social-icon-btn"
                    aria-label={s.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Display */}
          <div className="game-visual-display">
            <div className="product-visual-card">
              <div className="visual-top-bar">
                <span className="visual-badge">{game.tabs[activeTab].badge}</span>
                <span className="visual-status">OFFICIAL PRODUCT</span>
              </div>

              <div className="visual-main-content">
                <div className="hero-title-watermark">XOGO</div>
                <div className="visual-game-info">
                  <h4>{game.title}</h4>
                  <p className="visual-tagline">{game.subtitle}</p>
                  <div className="active-tab-preview">
                    <h5>{game.tabs[activeTab].label} Details</h5>
                    <p>{game.tabs[activeTab].content}</p>
                  </div>
                </div>
              </div>

              <div className="visual-footer-bar">
                <span>Platform: {game.stats.platforms}</span>
                <span className="live-indicator">● SERVER ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}