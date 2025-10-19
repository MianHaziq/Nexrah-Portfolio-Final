// import { FaLocationArrow } from "react-icons/fa6";

// import { socialMedia } from "@/src/data";
// import MagicButton from "./MagicButton";
// // import ScrollVelocity from './ScrollVelocity';

// const Footer = () => {
//   return (
//     <> 
//        {/* <div className="my-5">
//       <ScrollVelocity
//   texts={['Imagine We Code ✦ ', 'Get It Now ➔']} 
//   velocity={100} 
//   className="custom-scroll-text"
// />
//     </div> */}
//     <footer className="w-full pt-20 pb-10" id="contact">
//       {/* background grid */}
//       <div className="w-full absolute left-0 -bottom-72 min-h-96">
//         <img
//           src="/footer-grid.svg"
//           alt="grid"
//           className="w-full h-full opacity-50 "
//         />
//       </div>

//       <div className="flex flex-col items-center">
//         <h1 className="heading lg:max-w-[45vw]">
//           Ready to take <span className="text-purple">your</span> digital
//           presence to the next level?
//         </h1>
//         <p className="text-white-200 md:mt-10 my-5 text-center">
//           Reach out to me today and let&apos;s discuss how I can help you
//           achieve your goals.
//         </p>
//         <a href="mailto:contact@jsmastery.pro">
//           <MagicButton
//             title="Let's get in touch"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a>
//       </div>
//       <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
//         <p className="md:text-base text-sm md:font-normal font-light">
//           Copyright © 25 NEXRAH
//         </p>

//         <div className="flex items-center md:gap-3 gap-6">
//           {socialMedia.map((info) => (
//             <div
//               key={info.id}
//               className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
//             >
//               <img src={info.img} alt="icons" width={20} height={20} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>

//     </>

//   );
// };

// export default Footer;

"use client";

import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export default function Footer() {
  const router = useRouter();

  const connectItems = [
    { icon: <FaEnvelope size={20} />, label: "salman@nexrah.com", href: "mailto:salman@nexrah.com" },
    { icon: <FaPhone size={20} />, label: "+92-326-7686577", href: "tel:+923267686577" },
    { icon: <FaFacebookF size={24} />, label: "Facebook", href: "https://www.facebook.com/share/1CKq5nNyLW/" },
    { icon: <FaInstagram size={24} />, label: "Instagram", href: "https://www.instagram.com/nexrah.services/" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Smooth scroll or router push navigation like FloatingNav
  const handleNavigate = (href: string) => {
  if (href.startsWith("#")) {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    router.push(href);
  }
};


  return (
    <>
      <footer className="bg-black border-b border-gray-700 py-12 flex justify-between flex-col xl:flex-row">
        <div className="container mx-auto px-4 flex justify-between flex-col xl:flex-row">
          {/* Left Side */}
          <div className="xl:w-5/12 flex flex-col gap-6">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <img src="/nexrah_logo_nav.png" alt="Logo" className="w-2xs" />
            </motion.div>
            <motion.p initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="text-gray-400">
              Design. Beautifully crafted websites that combine functionality, speed, and security effortlessly.
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }} className="flex gap-3">
              {connectItems.slice(2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center border border-gray-700 rounded-full hover:scale-105 transition-all duration-300 ${
                    item.label === "Facebook" ? "hover:bg-blue-900" : "hover:bg-pink-900"
                  }`}
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="xl:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <h6 className="text-white font-medium text-lg mb-6">Quick Links</h6>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(item.link);
                      }}
                      className="text-gray-400 hover:text-blue-500 transition-colors cursor-pointer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
              <h6 className="text-white font-medium text-lg mb-6">Connect With Us</h6>
              <ul className="space-y-3">
                {connectItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span className="text-blue-500">{item.icon}</span>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : "_self"}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <section className="bg-black py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-gray-400">© 2025 All Rights Reserved to Nexrah</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
