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
        playsInline /* Prevents iOS auto-fullscreen */
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        {/* Un-comment if content overlay is needed */}
        {/* <h1 className="hero-title">WELCOME TO XOGO</h1> */}
      </div>
    </section>
  );
}