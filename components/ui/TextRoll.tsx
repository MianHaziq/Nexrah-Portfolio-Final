"use client";

import React from "react";
import { motion } from "framer-motion";

const STAGGER = 0.035;
const DEFAULT_DURATION = 0.36;

export const TextRoll: React.FC<{
  children: React.ReactNode;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  // coerce to string and preserve spaces
  const text = typeof children === "string" ? children : String(children ?? "");
  const letters = text.split("");

  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden ${className ?? ""}`}
      style={{ lineHeight: 0.75 }}
    >
      {/* top row (visible initially) */}
      <div aria-hidden>
        {letters.map((l, i) => {
          const delay = center ? STAGGER * Math.abs(i - (letters.length - 1) / 2) : STAGGER * i;
          return (
            <motion.span
              key={`top-${i}-${l}`}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{ ease: "easeInOut", delay, duration: DEFAULT_DURATION }}
              className="inline-block"
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>

      {/* bottom row (slides up on hover) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {letters.map((l, i) => {
          const delay = center ? STAGGER * Math.abs(i - (letters.length - 1) / 2) : STAGGER * i;
          return (
            <motion.span
              key={`bot-${i}-${l}`}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ ease: "easeInOut", delay, duration: DEFAULT_DURATION }}
              className="inline-block"
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </div>
    </motion.span>
  );
};
