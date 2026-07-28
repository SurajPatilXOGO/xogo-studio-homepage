import { useState, useEffect } from "react";
import "./Navbar.css";

const links = [
  { title: "Home", href: "#hero" },
  { title: "Games", href: "#games" },
  { title: "Team", href: "#team" },
  { title: "News", href: "#news" },
  { title: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger box effect after scrolling past 80px (or hero height)
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">
        <img src="/src/assets/logo.png" alt="XOGO" height={40} />
      </div>
      <nav className="navbar__links">
        {links.map((item) => (
          <a key={item.title} href={item.href}>
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
}