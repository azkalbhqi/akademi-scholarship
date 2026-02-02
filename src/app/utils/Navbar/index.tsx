"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Academy", href: "/academy" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-10 py-4 bg-blue-300/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-900">AS</h1>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-black text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9 text-xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-black hover:text-blue-500 hover:scale-110 transition-all inline-block"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <ul className="flex flex-col gap-4 text-xl">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-black hover:text-blue-500 transition-all block"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;