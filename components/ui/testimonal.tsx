"use client";

import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { Marquee } from "./marquee";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-[#f0abfc] p-1 py-0.5 font-bold text-[#d946ef] dark:bg-[#f0abfc] dark:text-[#d946ef]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid text-black flex-col items-center justify-between gap-6 rounded-xl p-4",
        // ✅ Card glass effect
        "bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm", // Light mode
        "dark:bg-white/5 dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,0.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]", // Dark mode glass
        className,
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
        {description}
        <div className="flex flex-row py-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />
          ))}
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-5">
        <Image
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full ring-1 ring-border ring-offset-4"
        />

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

// ✅ Testimonials data unchanged
const testimonials = [
  {
    name: "Alex Rivera",
    role: "UI/UX Lead at InnovateTech",
    img: "/exp1.svg",
    description: (
      <p>
        Using EldoraUI has revolutionized our design process.
        <Highlight>
          Its reusable, animated components make it easy to deliver cutting-edge
          designs.
        </Highlight>{" "}
        A must-have for any design team.
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Frontend Engineer at NextGen Solutions",
    img: "/exp1.svg",
    description: (
      <p>
        EldoraUI&apos;s templates have drastically improved our development
        speed.
        <Highlight>
          We&apos;ve reduced project timelines by 70%, delivering high-quality
          UIs effortlessly.
        </Highlight>{" "}
        Highly recommend it to fellow developers.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder at Startup Studio",
    img: "/exp1.svg",
    description: (
      <p>
        As a startup founder, I need tools that help us grow fast without
        sacrificing quality. EldoraUI&apos;s stunning designs and simple
        integration have made it an essential part of our workflow.
        <Highlight>Our clients love our modern interfaces.</Highlight>
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product Designer at Global Systems",
    img: "/exp1.svg",
    description: (
      <p>
        EldoraUI&apos;s prebuilt components have made it so easy to create
        intuitive and compliant designs.
        <Highlight>
          It&apos;s perfect for tackling complex workflows with style.
        </Highlight>{" "}
        A must-have for any product designer.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Creative Director at FinTech Innovations",
    img: "/exp1.svg",
    description: (
      <p>
        EldoraUI&apos;s animations and design elements have elevated our fintech
        app&apos;s user experience.
        <Highlight>
          The feedback on our new design is phenomenal.
        </Highlight>{" "}
        It&apos;s a game-changer for user-centric applications.
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "Web Developer at LogiChain Solutions",
    img: "/exp1.svg",
    description: (
      <p>
        EldoraUI&apos;s component library has simplified web development for our
        logistics dashboard.
        <Highlight>
          Building custom layouts has never been this efficient.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Digital Marketing Specialist at EcoTech",
    img: "/exp1.svg",
    description: (
      <p>
        EldoraUI&apos;s responsive designs have helped us create marketing sites
        that look amazing on every device.
        <Highlight>
          It&apos;s revolutionized how we approach branding online.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "E-commerce Product Manager at FashionForward",
    img: "/exp1.svg",
    description: (
      <p>
        EldoraUI&apos;s beautifully crafted components have completely
        transformed our fashion storefront.
        <Highlight>
          Customers love the dynamic shopping experience.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Healthcare App Designer at HealthTech Solutions",
    img: "/exp1.svg",
    description: (
      <p>
        EldoraUI has made it easy to create user-friendly, accessible interfaces
        for our healthcare apps.
        <Highlight>
          It&apos;s a crucial part of our design system.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "EdTech Founder at EduSafe Innovations",
    img: "/exp1.svg",
    description: (
      <p>
        EldoraUI&apos;s education-focused templates have doubled our
        platform&apos;s usability.
        <Highlight>
          It&apos;s tailor-made for addressing student and teacher needs.
        </Highlight>{" "}
      </p>
    ),
  },
];

export function Testimonials() {
  return (
    // ✅ Section glass effect added here
    <section
      id="testimonials"
      className="container py-10 bg-black text-white dark:bg-black backdrop-blur-lg rounded-2xl border border-white/20 shadow-md"
    >
      <h2 className="mb-4 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying
      </h2>
      <h3 className="mx-auto mb-8 max-w-lg text-balance text-center text-lg font-medium tracking-tight text-foreground/80">
        Don&apos;t just take our word for it. Here&apos;s what{" "}
        <span className="bg-gradient bg-clip-text text-transparent">
          real people
        </span>{" "}
        are saying about{" "}
        <span className="from-fg-onAccent text-purple-600">NEXRAH</span>
      </h3>
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </section>
  );
}
