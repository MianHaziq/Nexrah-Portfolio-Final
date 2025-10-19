"use client";

import React, { ReactNode } from "react";
import GlareHover from "../GlareHover"; // adjust path

interface GlareHoverCardProps {
  children: ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string; // optional additional classes
}

const GlareHoverCard: React.FC<GlareHoverCardProps> = ({
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.25,
  glareAngle = -30,
  glareSize = 200,
  transitionDuration = 400,
  playOnce = false,
  className = "",
}) => {
  return (
    <GlareHover
      glareColor={glareColor}
      glareOpacity={glareOpacity}
      glareAngle={glareAngle}
      glareSize={glareSize}
      transitionDuration={transitionDuration}
      playOnce={playOnce}
    >
      <div className={`w-full h-full ${className}`}>{children}</div>
    </GlareHover>
  );
};

export default GlareHoverCard;
