import React from "react";
import "./TeamSection.css";

const teamMembers = [
  {
    id: "ayush",
    name: "Ayush",
    role: "UX ENGINEER",
    heightPx: 180,
    bio: "Focuses on seamless user flows and interface architecture."
  },
  {
    id: "akbar",
    name: "Akbar",
    role: "LEAD UI/UX",
    heightPx: 260,
    bio: "Crafts gaming HUDs and high-fidelity interaction screens."
  },
  {
    id: "subhasish",
    name: "Subhasish",
    role: "LEAD UNITY DEV",
    heightPx: 340,
    bio: "Engineers core gameplay systems and graphics pipelines."
  },
  {
    id: "kapil",
    name: "Kapil Khatik",
    role: "FOUNDER & CEO",
    heightPx: 440,
    bio: "Directs product vision, studio strategy, and leadership."
  },
  {
    id: "neeraj",
    name: "Neeraj",
    role: "FULL-STACK LEAD",
    heightPx: 340,
    bio: "Architects scalable server infrastructure and game APIs."
  },
  {
    id: "jeetu",
    name: "Jeetu",
    role: "GAMEPLAY DEV",
    heightPx: 260,
    bio: "Builds physics interactions, character logic, and hitboxes."
  },
  {
    id: "shivas",
    name: "Shivas",
    role: "ART DIRECTOR",
    heightPx: 180,
    bio: "Leads character visual design and 3D environment art."
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="team-section">
      {/* Header */}
      <div className="team-header">
        <span className="section-badge">STUDIO LEADERSHIP</span>
        <h2 className="section-title">OUR TEAM</h2>
      </div>

      {/* Static Columns Stage Grid */}
      <div className="wireframe-stage-container">
        <div className="columns-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-column-slot">
              {/* Architectural Column Structure */}
              <div
                className="column-box"
                style={{ height: `${member.heightPx}px` }}
              >
                {/* Each column carries its left and right vertical boundary walls */}
                <div className="vertical-wall wall-left" />
                <div className="vertical-wall wall-right" />

                {/* Centered Name & Hover Details */}
                <div className="column-content">
                  <span className="member-name">{member.name}</span>

                  <div className="hover-details">
                    <span className="member-role">{member.role}</span>
                    <p className="member-bio">{member.bio}</p>
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