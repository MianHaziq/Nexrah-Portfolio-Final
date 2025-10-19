"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql, 
  SiWordpress,
  SiShopify,
} from "react-icons/si";

const technologies = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600 dark:text-gray-300" /> },
  { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
  { name: "WordPress", icon: <SiWordpress className="text-blue-600" /> },
  { name: "Shopify", icon: <SiShopify className="text-green-500" /> },
];

export default function Technologies() {
  return (
    <section className="w-screen min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 flex flex-col items-center justify-center p-4 sm:p-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 text-center"
      >
        Technologies We Use
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-[3px] w-20 sm:w-24 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mb-6"
      ></motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-md sm:max-w-2xl text-center text-gray-600 dark:text-gray-300 mb-12 text-sm sm:text-base leading-relaxed px-2 sm:px-0"
      >
        At Nexrah, we utilize modern technologies to design and develop powerful, scalable, and
        responsive web solutions. Our stack includes cutting-edge tools for both frontend and
        backend development, ensuring seamless performance and top-quality user experiences.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-6xl">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, y: -4, transition: { duration: 0.15, ease: "easeOut" } }}
            className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg"
          >
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{tech.icon}</div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
