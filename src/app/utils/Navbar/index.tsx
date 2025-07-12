"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-10 py-4 bg-blue-300/30 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-blue-900">AS</h1>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-9 text-xl">
          <li>
            <Link
              className="text-black hover:text-blue-500 hover:scale-110 transition-all"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-black hover:text-blue-500 hover:scale-110 transition-all"
              href="/Academy"
            >
              Academy
            </Link>
          </li>
          
          <li>
            <Link
              className="text-black hover:text-blue-500 hover:scale-110 transition-all"
              href="/about"
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3">
          <ul className="flex flex-col gap-4 text-xl">
            <li>
              <Link
                className="text-black hover:text-blue-500 transition-all"
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-black hover:text-blue-500 transition-all"
                href="/Academy"
                onClick={() => setMenuOpen(false)}
              >
                Academy
              </Link>
            </li>
            <li>
              <Link
                className="text-black hover:text-blue-500 transition-all"
                href="/about"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
