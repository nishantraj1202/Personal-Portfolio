"use client";

import { useEffect, useState, useCallback } from "react";

const NAV_ITEMS = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const highlightNav = useCallback(() => {
        const sections = document.querySelectorAll("section, footer");
        let current = "";
        sections.forEach((sec) => {
            const top = (sec as HTMLElement).offsetTop - 120;
            if (window.scrollY >= top) current = sec.getAttribute("id") || "";
        });
        setActiveSection(current);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", highlightNav, { passive: true });
        return () => window.removeEventListener("scroll", highlightNav);
    }, [highlightNav]);

    return (
        <nav id="navbar">
            <div className="nav-inner">
                <a href="#hero" className="nav-logo">
                    NRJ
                </a>
                <button
                    className={`nav-toggle ${isOpen ? "active" : ""}`}
                    id="nav-toggle"
                    aria-label="Toggle navigation"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-links ${isOpen ? "open" : ""}`} id="nav-links">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                style={{
                                    color:
                                        `#${activeSection}` === item.href
                                            ? "var(--accent)"
                                            : undefined,
                                }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
