"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import ContactButton from "../ContactButton";

interface NavItem {
  name: string;
  link: string;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
}

/**
 * FloatingNav with TextRoll animation for md+ screens and plain text fallback on mobile.
 */
const FloatingNav: React.FC<FloatingNavbarProps> = ({ navItems }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollYRef = useRef<number>(0);

  // Smooth scroll to sections or push external routes
  const handleNavigate = (href: string) => {
    setOpen(false);

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  // Show/hide navbar on scroll
  useEffect(() => {
    const threshold = 10;
    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      const lastY = lastScrollYRef.current;

      if (currentY - lastY > threshold && currentY > 50) {
        setShow(false);
      } else if (lastY - currentY > threshold) {
        setShow(true);
      }
      lastScrollYRef.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 left-0 transition duration-300 ease-in-out backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border-b border-white/10 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            onClick={() => handleNavigate("#hero")}
            src="/nexrah_logo_nav.png"
            alt="Nexrah Logo"
            width={70}
            height={55}
            className="
              h-auto w-auto 
              scale-100
              sm:scale-110 
              md:scale-125 
              lg:scale-140 
              xl:scale-150
              transition-transform duration-300
            "
            priority
          />
        </Link>

        {/* Right controls */}
        <div className="flex md:order-2 items-center gap-3">
          <ContactButton  onClick={() => handleNavigate("#contact")} />

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((s) => !s)}
            aria-controls="navbar-sticky"
            aria-expanded={open}
            aria-label={open ? "Close main menu" : "Open main menu"}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 dark:text-gray-300"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              {open ? (
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 2l13 10M15 2L2 12" />
              ) : (
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              )}
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div
          id="navbar-sticky"
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${open ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-white/5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-transparent dark:bg-gray-900/10 md:dark:bg-transparent">
            {navItems.map((item, idx) => {
              const baseClasses =
                "inline-block py-2 px-3 rounded-md md:p-2 transform transition-all duration-300 ease-out";

              const activeClasses = `text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-[#0cc0df] hover:-translate-y-1 transition-all duration-300`;

              return (
                <li key={item.link ?? idx}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.link);
                    }}
                    href={item.link}
                    className={`${baseClasses} ${activeClasses}`}
                  >
                    <span className="uppercase leading-[0.8] tracking-[-0.03em]">
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FloatingNav;
