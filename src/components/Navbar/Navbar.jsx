import { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const links = [
  { title: "Home", href: "#hero" },
  { title: "Games", href: "#games" },
  { title: "Insights", href: "#insights" },
  { title: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">
        <img src={logo} alt="XOGO" height={40} />
      </div>

      <button
        className={`navbar__hamburger ${isOpen ? "is-active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
        {links.map((item) => (
          <a key={item.title} href={item.href} onClick={() => setIsOpen(false)}>
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
}