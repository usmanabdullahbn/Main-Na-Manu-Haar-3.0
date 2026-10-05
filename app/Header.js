"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["#top", "Home"],
  ["#about", "About"],
  ["#categories", "Categories"],
  ["#rules", "Rules"],
  ["#how-to-enter", "How to Enter"],
  ["#prizes", "Prizes"],
  ["#judges", "Judges"],
  ["#organisers", "Organisers"],
];

export default function Header({ formUrl }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the menu item for whichever section is in the middle of the viewport
  useEffect(() => {
    const sections = LINKS.map(([href]) => document.querySelector(href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container">
        <div className="header__inner">
          <a href="#top" className="logo" aria-label="Main Na Mano Haar 3.0 home">
            <span className="logo__badge">MNMH</span>
            <span className="logo__name">Main Na Mano Haar 3.0</span>
          </a>

          <nav className={`nav${open ? " is-open" : ""}`} id="primary-nav" aria-label="Primary">
            <ul className="menu">
              {LINKS.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className={active === href ? "is-current" : undefined}
                    aria-current={active === href ? "location" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a className="btn btn--primary nav__cta" href={formUrl} target="_blank" rel="noopener noreferrer">
              Submit Entry
            </a>
          </nav>

          <div className="header__actions">
            <a className="btn btn--primary header__cta" href={formUrl} target="_blank" rel="noopener noreferrer">
              Submit Entry
            </a>
            <button
              type="button"
              className={`burger${open ? " is-open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="primary-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
