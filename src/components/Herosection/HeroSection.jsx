import "./HeroSection.css";
import AOLHero from "../../assets/AOL_Hero.mp4";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <video
        className="hero-video"
        src={AOLHero}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        {/* Un-comment if content overlay is needed */}
        {/* <h1 className="hero-title">WELCOME TO XOGO</h1> */}
      </div>
    </section>
  );
}