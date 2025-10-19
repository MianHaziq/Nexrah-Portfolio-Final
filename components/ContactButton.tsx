"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

const ContactButton: React.FC<Props> = ({
  label = "Contact Us",
  href = "/contact",
  onClick,
  className = "",
}) => {
  const router = useRouter();

  const inner = (
    <>
      <span className="flex items-center gap-1.5 sm:gap-2 relative z-10">
        {/* 🔹 Slightly bigger icons for better balance */}
        <svg
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 sm:w-5 sm:h-5"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeWidth={2}
            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
          />
        </svg>

        {label}

        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-500 group-hover:translate-x-2"
          aria-hidden
        >
          <path
            d="M5 12h14m-7-7l7 7-7 7"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </span>

      {/* Gradient overlay remains same */}
      <div className="absolute inset-0 rounded-md opacity-50 group-hover:opacity-80 transition-opacity duration-300 bg-gradient-to-tl from-yellow-200/40 via-transparent to-transparent" />

      <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
    </>
  );

  // 🔹 Slightly larger padding + fully responsive sizes
  const baseClasses =
    "group relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-md md:rounded-lg " + // 🔹 bigger padding for medium+ screens
    "bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-600 " +
    "text-black font-bold tracking-wide uppercase text-xs sm:text-sm md:text-base " + // 🔹 responsive font sizes
    "hover:from-amber-500 hover:via-yellow-300 hover:to-amber-600 " +
    "transform hover:rotate-1 transition-all duration-300 ease-out " +
    "shadow-[0_5px_20px_rgba(255,191,0,0.25),0_0_8px_rgba(255,173,0,0.2)] " + // 🔹 moderate shadow
    "hover:shadow-[0_8px_30px_rgba(255,191,0,0.35),0_0_12px_rgba(255,173,0,0.35)] " +
    "active:scale-90 overflow-hidden " +
    "before:absolute before:inset-0 before:rounded-md md:before:rounded-lg " +
    "before:border-[1.5px] before:border-yellow-400/50 before:transition-all before:duration-300 " +
    "hover:before:border-yellow-300 hover:before:scale-105";

  if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
        aria-label={label}
      >
        {inner}
      </a>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick();
      return;
    }
    if (!href) return;
    if (href.startsWith("/")) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseClasses} ${className}`}
      aria-label={label}
    >
      {inner}
    </button>
  );
};

export default ContactButton;
