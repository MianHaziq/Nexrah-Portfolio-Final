"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ContactButton from "../ContactButton";

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
}

const FloatingNav: React.FC<FloatingNavbarProps> = ({ navItems }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollYRef = useRef(0);

  const handleNavigate = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  // hide/show navbar on scroll
  useEffect(() => {
    const threshold = 10;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const lastY = lastScrollYRef.current;
      if (currentY - lastY > threshold && currentY > 50) setShow(false);
      else if (lastY - currentY > threshold) setShow(true);
      lastScrollYRef.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 top-0 left-0 transition-transform duration-300 ease-in-out backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border-b border-white/10 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* LOGO (Left) */}
        <div className="flex items-center gap-3">
          <Image
            src="/nexrah_logo_nav.png"
            alt="Nexrah Logo"
            width={70}
            height={55}
            className="cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => handleNavigate("#hero")}
            priority
          />
        </div>

        {/* NAV LINKS (Center on desktop) */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-8 font-medium text-gray-300">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(item.link);
                }}
                className="uppercase tracking-wide hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-[#0cc0df] transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT BUTTON (Right on desktop) */}
        <div className="hidden md:flex items-center">
          <ContactButton onClick={() => handleNavigate("#contact")} />
        </div>

        {/* HAMBURGER (Mobile only) */}
        <button
          onClick={() => setOpen((s) => !s)}
          aria-controls="navbar-menu"
          aria-expanded={open}
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 text-gray-300 hover:text-white hover:bg-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        id="navbar-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 bg-black/80 backdrop-blur-lg border-t border-white/10 text-gray-300">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(item.link);
                }}
                className="block py-2 px-4 rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-[#0cc0df] transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="w-full flex justify-center">
            <ContactButton onClick={() => handleNavigate("#contact")} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default FloatingNav;
