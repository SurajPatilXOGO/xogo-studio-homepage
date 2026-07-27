import React, { useState } from "react";
import "./NewsSection.css";

const newsCategories = ["All", "Updates", "Achievements", "Social Media", "Industry"];

const newsCards = [
  {
    id: 1,
    category: "Updates",
    date: "23.05.2026",
    title: "Arena of Legends Patch 4.2",
    description: "Celestial Dawn brings major balance reworks, competitive telemetry enhancements, and brand-new hero skins.",
    linkUrl: "#"
  },
  {
    id: 2,
    category: "Achievements",
    date: "18.05.2026",
    title: "1.2 Million Active Champions",
    description: "A huge studio achievement as Arena of Legends surpasses 1.2M active accounts following our tournament push.",
    linkUrl: "#"
  },
  {
    id: 3,
    category: "Social Media",
    date: "10.05.2026",
    title: "Inside the Art Studio",
    description: "Check out our latest Instagram reel showcasing 3D sculpts and character concept workflows from our Art Director.",
    linkUrl: "#"
  },
  {
    id: 4,
    category: "Industry",
    date: "28.04.2026",
    title: "Shift to Product-First Arch",
    description: "How our engineering team transitioned from service projects to developing high-stakes competitive esports products.",
    linkUrl: "#"
  }
];

export default function NewsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredNews =
    activeCategory === "All"
      ? newsCards
      : newsCards.filter((card) => card.category === activeCategory);

  return (
    <section id="news" className="news-section">
      <div className="news-container">
        {/* Category Filters */}
        <div className="news-filter-bar">
          {newsCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ribbon List Grid */}
        <div className="news-ribbon-list">
          {filteredNews.map((item) => (
            <div key={item.id} className="news-ribbon">
              <span className="ribbon-date">{item.date}</span>
              <div className="ribbon-divider" />
              
              <h3 className="ribbon-title">{item.title}</h3>
              <div className="ribbon-divider" />
              
              <p className="ribbon-desc">{item.description}</p>
              <div className="ribbon-divider" />
              
              <div className="ribbon-action">
                <a
                  href={item.linkUrl}
                  className="ribbon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Button
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom More Link */}
        <div className="news-more-wrapper">
          <a href="#" className="more-link">More...</a>
        </div>
      </div>
    </section>
  );
}