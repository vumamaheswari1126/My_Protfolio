import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            <div className="nav-container">
<div className="logo">
    <span className="logo-u">U</span>
    <span className="logo-m">M</span>
</div>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                    <a href="#home" onClick={closeMenu}>Home</a>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#skills" onClick={closeMenu}>Skills</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>

                </div>

                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>

        </nav>
    );
}

export default Navbar;