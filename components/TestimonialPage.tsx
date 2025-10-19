"use client";

import { cn } from "@/src/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star, User } from "lucide-react";

const iconColors = ["text-fuchsia-500", "text-[#0cc0df]"];

const reviews = [
  {
    name: "Bilal Khan",
    location: "Islamabad, Pakistan",
    message:
      "The team at Nexrah was very cooperative and talented. They listened to all my ideas and gave helpful suggestions. My website now looks professional and works great on all devices.",
  },
  {
    name: "Ahmed Raza",
    location: "Lahore, Pakistan",
    message:
      "I’m really impressed by Nexrah’s professionalism. They developed my business site from scratch, explained everything clearly, and delivered before the deadline. Highly recommended!",
  },
  {
    name: "Liam Brown",
    location: "Melbourne, Australia",
    message:
      "Working with Nexrah was a great experience. They delivered a professional website that works perfectly on mobile and looks amazing. I recommend them to anyone starting a new business.",
  },
  {
    name: "Brisbane",
    location: "Australia",
    message:
      "Working with Nexrah to enhance our online presence has been a game-changer. The team took our ideas, listened to what our brand needed, and delivered a website that not only looks great but works seamlessly across devices.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  location,
  message,
  iconColor,
}: {
  name: string;
  location: string;
  message: string;
  iconColor: string;
}) => (
  <figure
    className={cn(
      "relative w-full max-w-[300px] sm:max-w-[320px] md:max-w-[360px] cursor-pointer overflow-hidden rounded-xl border p-4 flex-shrink-0",
      "border-gray-950/[.1] bg-gray-50 dark:bg-gray-900",
      "hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out",
      "dark:border-gray-50/[.1]"
    )}
  >
    <div className="flex items-center gap-2 flex-wrap">
      <User
        size={18}
        className={cn(iconColor, "shrink-0 transition-transform duration-300 hover:scale-110")}
      />
      <div className="flex flex-col">
        <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
          {name}
        </figcaption>
        <p className="text-xs text-gray-600 dark:text-gray-400">{location}</p>
      </div>
    </div>

    <div className="mt-2 flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    <blockquote className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed break-words">
      “{message}”
    </blockquote>
  </figure>
);

export function TestimonialPage() {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center w-full h-auto sm:h-[500px] overflow-hidden">
      {/* Mobile: only show first marquee */}
      <div className="w-full sm:hidden flex justify-center">
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:20s] flex flex-col gap-4"
          style={{ maxHeight: "400px", overflow: "hidden" }} // limit height for 2-3 cards
        >
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} iconColor={iconColors[0]} />
          ))}
        </Marquee>
      </div>

      {/* Desktop: show two marquees */}
      <div className="hidden sm:flex w-full justify-center gap-4">
        <Marquee pauseOnHover vertical className="[--duration:20s] flex flex-col items-center gap-4">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} iconColor={iconColors[0]} />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          vertical
          className="[--duration:20s] flex flex-col items-center gap-4"
        >
          {secondRow.map((review, index) => (
            <ReviewCard key={index} {...review} iconColor={iconColors[1]} />
          ))}
        </Marquee>
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[10%] bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    </div>
  );
}
