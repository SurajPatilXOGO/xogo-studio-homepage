import React, { useState } from "react";
import "./ChampionsSection.css";

// Import your character renders
import ANUBIS from "../../assets/all_character/ANUBIS.png";
import HANUMAN from "../../assets/all_character/HANUMAN.png";
import FREYA from "../../assets/all_character/FREYA.png";
import THOT from "../../assets/all_character/THOT.png";
import KEIMI from "../../assets/all_character/KEIMI.png";
import NEHAZ from "../../assets/all_character/NEHAZ.png";
import PELE from "../../assets/all_character/PELE.png";
import TARKA from "../../assets/all_character/TARKA.png";
import BAHEMOTH from "../../assets/all_character/BAHEMOTH.png";

const champions = [
  {
    id: "anubis",
    name: "ANUBIS",
    title: "Guardian of the Underworld",
    role: "ASSASSIN / MAGE",
    difficulty: "HARD",
    image: ANUBIS,
    stats: { attack: 92, defense: 60, utility: 75 },
    lore: "Commanding the shadows and deathly magic, Anubis harvests enemy souls to empower his abilities and strike down high-value targets."
  },
  {
    id: "hanuman",
    name: "HANUMAN",
    title: "The Unstoppable Vanara",
    role: "TANK / BRUISER",
    difficulty: "MEDIUM",
    image: HANUMAN,
    stats: { attack: 88, defense: 95, utility: 70 },
    lore: "Wielding divine strength and cosmic fire, Hanuman leaps into team fights to shatter enemy formations and shield allies."
  },
  {
    id: "freya",
    name: "FREYA",
    title: "Valkyrie Sovereign",
    role: "MARKSMAN / FIGHTER",
    difficulty: "MEDIUM",
    image: FREYA,
    stats: { attack: 95, defense: 50, utility: 65 },
    lore: "Rain down celestial judgment from above. Freya combines rapid winged mobility with lethal precision ranged attacks."
  },
  {
    id: "thot",
    name: "THOTH",
    title: "Scribe of Cosmic Arcana",
    role: "CONTROL MAGE",
    difficulty: "HARD",
    image: THOT,
    stats: { attack: 90, defense: 40, utility: 98 },
    lore: "Master of runic magic and battlefield manipulation. Thoth controls space and time to cripple incoming assaults."
  },
  {
    id: "keimi",
    name: "KEIMI",
    title: "Apex Predator",
    role: "MELEE FIGHTER",
    difficulty: "EASY",
    image: KEIMI,
    stats: { attack: 94, defense: 75, utility: 45 },
    lore: "A fierce primal tiger warrior built for relentless close-quarters combat and execute attacks."
  },
  {
    id: "pele",
    name: "PELE",
    title: "Goddess of Volcanic Flame",
    role: "BURST MAGE",
    difficulty: "MEDIUM",
    image: PELE,
    stats: { attack: 96, defense: 45, utility: 60 },
    lore: "Harnessing elemental lava, Pele burns through entire enemy waves with high-damage flame surges."
  },
  {
    id: "bahemoth",
    name: "BEHEMOTH",
    title: "Ancient Earth Colossus",
    role: "VANGUARD TANK",
    difficulty: "EASY",
    image: BAHEMOTH,
    stats: { attack: 70, defense: 100, utility: 80 },
    lore: "An earthen titan clad in ancient crystals, absorbing massive damage and locking down entire lanes."
  }
];

export default function ChampionsSection() {
  const [selectedHero, setSelectedHero] = useState(champions[1]); // Default: Hanuman

  return (
    <section id="champions" className="champions-section">
      <div className="champions-container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">PLAYABLE HEROES</span>
          <h2 className="section-title">MEET THE CHAMPIONS</h2>
          <p className="section-subtitle">
            Master mythic gods and legendary warriors built for competitive 5v5 MOBA action.
          </p>
        </div>

        {/* Featured Hero Display */}
        <div className="hero-display-card">
          
          {/* Left Column: Hero Intel & Stats */}
          <div className="hero-intel">
            <div className="hero-meta-tags">
              <span className="role-tag">{selectedHero.role}</span>
              <span className="diff-tag">DIFFICULTY: {selectedHero.difficulty}</span>
            </div>

            <h3 className="hero-name">{selectedHero.name}</h3>
            <h4 className="hero-title-sub">{selectedHero.title}</h4>

            <p className="hero-lore">{selectedHero.lore}</p>

            {/* Stat Bars */}
            <div className="hero-stats-box">
              <div className="stat-row">
                <span>OFFENSE</span>
                <div className="stat-bar-track">
                  <div
                    className="stat-bar-fill"
                    style={{ width: `${selectedHero.stats.attack}%` }}
                  ></div>
                </div>
              </div>
              <div className="stat-row">
                <span>DEFENSE</span>
                <div className="stat-bar-track">
                  <div
                    className="stat-bar-fill"
                    style={{ width: `${selectedHero.stats.defense}%` }}
                  ></div>
                </div>
              </div>
              <div className="stat-row">
                <span>UTILITY</span>
                <div className="stat-bar-track">
                  <div
                    className="stat-bar-fill"
                    style={{ width: `${selectedHero.stats.utility}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <button className="select-hero-btn">LOCK IN CHAMPION</button>
          </div>

          {/* Right Column: Full-Body Cutout Visual */}
          <div className="hero-visual-wrapper">
            <div className="hero-aura-glow"></div>
            <img
              src={selectedHero.image}
              alt={selectedHero.name}
              className="hero-render-img"
            />
          </div>
        </div>

        {/* Champion Selection Bar */}
        <div className="hero-selector-bar">
          {champions.map((hero) => (
            <button
              key={hero.id}
              className={`selector-thumb ${
                selectedHero.id === hero.id ? "active" : ""
              }`}
              onClick={() => setSelectedHero(hero)}
            >
              <img src={hero.image} alt={hero.name} />
              <span className="thumb-name">{hero.name}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}