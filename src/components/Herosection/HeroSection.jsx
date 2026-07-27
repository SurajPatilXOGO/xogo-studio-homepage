import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <video
        className="hero-video"
        src="/src/assets/AOL_Hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay" />
      {/* <div className="section-container">
        <h1 className="section-title">Welcome to XOGO</h1>
        <p className="section-subtitle">We craft immersive gaming experiences</p>
      </div> */}
    </section>
  );
}
