import React from "react";
import "./TeamSection.css";
import kapilImg from "../../assets/teams/Kapil_Sir.png"; // Adjust path if needed

const teamMembers = [
  {
    id: "ayush",
    name: "Ayush",
    role: "UX ENGINEER",
    heightPx: 180,
    bio: "Focuses on seamless user flows and interface architecture.",
    image: kapilImg,
  },
  {
    id: "akbar",
    name: "Akbar",
    role: "LEAD UI/UX",
    heightPx: 260,
    bio: "Crafts gaming HUDs and high-fidelity interaction screens.",
    image: kapilImg,
  },
  {
    id: "subhasish",
    name: "Subhasish",
    role: "LEAD UNITY DEV",
    heightPx: 340,
    bio: "Engineers core gameplay systems and graphics pipelines.",
    image: kapilImg,
  },
  {
    id: "kapil",
    name: "Kapil Khatik",
    role: "FOUNDER & CEO",
    heightPx: 440,
    bio: "Directs product vision, studio strategy, and leadership.",
    image: kapilImg,
  },
  {
    id: "neeraj",
    name: "Neeraj",
    role: "FULL-STACK LEAD",
    heightPx: 340,
    bio: "Architects scalable server infrastructure and game APIs.",
    image: kapilImg,
  },
  {
    id: "jeetu",
    name: "Jeetu",
    role: "GAMEPLAY DEV",
    heightPx: 260,
    bio: "Builds physics interactions, character logic, and hitboxes.",
    image: kapilImg,
  },
  {
    id: "shivas",
    name: "Shivas",
    role: "ART DIRECTOR",
    heightPx: 180,
    bio: "Leads character visual design and 3D environment art.",
    image: kapilImg,
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="team-section">
      <div className="team-header">
        <span className="team-section-badge">STUDIO LEADERSHIP</span>
        <h2 className="team-section-title">OUR TEAM</h2>
      </div>

      <div className="wireframe-stage-container">
        <div className="columns-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-column-slot">
              <div
                className="column-box"
                style={{ height: `${member.heightPx}px` }}
              >
                {/* Background Image Layer */}
                {member.image && (
                  <div className="column-image-wrapper">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="column-bg-img"
                    />
                    {/* Shadow overlay to seamlessly blend the bottom edge */}
                    <div className="column-bottom-shadow" />
                  </div>
                )}

                {/* Vertical Boundary Walls */}
                <div className="vertical-wall wall-left" />
                <div className="vertical-wall wall-right" />

                {/* Content Overlay */}
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