import React from "react";
import "./GamePassGrid.css";

const gamesList = [
  {
    id: "aol",
    title: "Arena of Legends",
    genre: "5v5 MOBA",
    version: "v4.2.0",
    subtitle: "Dark mythological action strategy arena",
    rating: "4.9 ★",
    size: "2.4 GB",
    code: "PASS-AOL-2026",
    playStoreUrl: "https://play.google.com/store",
    windowsUrl: "https://store.steampowered.com",
    // Clean SVG QR Code vector sample
    qrSvg: (
      <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h9v9H0zM2 2v5h5V2zm2 2h1v1H4zM0 20h9v9H0zM2 22v5h5V22zm2 2h1v1H4zM20 0h9v9h-9zM22 2v5h5V2zm2 2h1v1H24zM11 0h2v4h-2zm4 0h4v2h-4zm-4 5h5v2h-5zm6-3h2v4h-2zm-2 5h4v2h-4zm-9 6h2v2h-2zm3 0h2v4h-2zm3 0h3v2h-3zm5 0h4v2h-4zm-8 3h2v2h-2zm5 0h2v4h-2zm3 0h3v2h-3zm-13 3h2v5h-2zm3 0h2v2h-2zm3 0h3v3h-3zm4 0h2v2h-2zm3 0h2v5h-2zm-10 3h4v2h-4zm7 0h2v2h-2z" fill="#000"/>
      </svg>
    )
  },
  {
    id: "ud",
    title: "Ultimate Domination",
    genre: "Tactical Shooter",
    version: "v1.0.4",
    subtitle: "High-octane tactical cyber battleground",
    rating: "4.8 ★",
    size: "4.1 GB",
    code: "PASS-UD-2026",
    playStoreUrl: "https://play.google.com/store",
    windowsUrl: "https://store.steampowered.com",
    qrSvg: (
      <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h9v9H0zM2 2v5h5V2zm2 2h1v1H4zM0 20h9v9H0zM2 22v5h5V22zm2 2h1v1H4zM20 0h9v9h-9zM22 2v5h5V2zm2 2h1v1H24zM12 2h2v3h-2zm3 2h3v2h-3zm-3 7h4v2h-4zm6-2h2v4h-2zm-6 5h2v4h-2zm4 0h3v2h-3zm-9 1h2v3h-2zm12 0h2v4h-2zm-3 3h2v2h-2zm-6 2h4v2h-4zm6 0h3v2h-3z" fill="#000"/>
      </svg>
    )
  },
  {
    id: "cx",
    title: "Cyber Conquest",
    genre: "Sci-Fi RPG",
    version: "v2.1.0",
    subtitle: "Open-world futuristic squad adventure",
    rating: "4.7 ★",
    size: "3.8 GB",
    code: "PASS-CC-2026",
    playStoreUrl: "https://play.google.com/store",
    windowsUrl: "https://store.steampowered.com",
    qrSvg: (
      <svg viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h9v9H0zM2 2v5h5V2zm2 2h1v1H4zM0 20h9v9H0zM2 22v5h5V22zm2 2h1v1H4zM20 0h9v9h-9zM22 2v5h5V2zm2 2h1v1H24zM10 1h3v2h-3zm5 1h2v4h-2zm-4 4h3v2h-3zm5 2h4v2h-4zm-6 3h2v2h-2zm4 0h3v3h-3zm-8 2h3v2h-3zm12 0h2v4h-2zm-5 3h3v2h-3zm3 2h3v2h-3z" fill="#000"/>
      </svg>
    )
  }
];

export default function GamePassGrid() {
  return (
    <section id="games" className="games-pass-section">
      <div className="games-pass-container">
        
        {/* Wireframe Section Header */}
        <div className="section-header">
          <span className="section-badge">Access Granted</span>
          <h2 className="section-title">Our Games</h2>
        </div>

        {/* 3-Card Ticket Grid */}
        <div className="cards-grid">
          {gamesList.map((game) => (
            <div key={game.id} className="game-ticket-wrapper">
              <div className="game-ticket">
                
                {/* Main Body */}
                <div className="t-main">
                  <div className="t-content">
                    
                    <div className="t-header">
                      <span className="t-genre">{game.genre}</span>
                      <span className="t-version">{game.version}</span>
                    </div>

                    <h3 className="t-title">{game.title}</h3>
                    <p className="t-subtitle">{game.subtitle}</p>

                    <div className="t-details">
                      <div className="t-detail-item">
                        <span className="t-label">Rating</span>
                        <span className="t-value">{game.rating}</span>
                      </div>
                      <div className="t-detail-item">
                        <span className="t-label">Build Size</span>
                        <span className="t-value">{game.size}</span>
                      </div>
                    </div>

                    {/* Download Buttons with SVG Icons */}
                    <div className="t-actions">
                      <a 
                        href={game.playStoreUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-platform"
                        title="Get on Google Play"
                      >
                        {/* Google Play Icon */}
                        <svg viewBox="0 0 24 24">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        Play Store
                      </a>

                      <a 
                        href={game.windowsUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-platform"
                        title="Download for Windows PC"
                      >
                        {/* Windows Icon */}
                        <svg viewBox="0 0 24 24">
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4h-13.051M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.8" />
                        </svg>
                        Windows PC
                      </a>
                    </div>

                  </div>
                </div>

                {/* Perforation Divider Cutout */}
                <div className="t-perforation">
                  <div className="t-perf-line"></div>
                </div>

                {/* Ticket Stub Footer with QR Code */}
                <div className="t-stub">
                  <div className="t-qr-container">
                    <div className="t-qr-box">
                      {game.qrSvg}
                    </div>
                    <div className="t-stub-meta">
                      <span className="t-stub-code">{game.code}</span>
                      <span className="t-stub-scan">Scan to install</span>
                    </div>
                  </div>

                  <div className="t-status-pill">
                    <span className="t-status-dot"></span>
                    <span className="t-status-text">Live</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}