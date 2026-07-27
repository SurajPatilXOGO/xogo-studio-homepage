import "./Navbar.css";

const links = [
  { title: "Home", href: "#hero" },
  { title: "Games", href: "#games" },
  { title: "Team", href: "#team" },
  { title: "News", href: "#news" },
  { title: "Contact", href: "#footer" },
];

export default function Navbar() {
  return (
    <header className="navbar">
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
