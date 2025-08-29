import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./styles/Header.module.css";

const links = [
  { name: "About", href: "#about", svg: "" },

  { name: "Schedule", href: "#schedule", svg: "" },
  { name: "FAQ", href: "#faq", svg: "" },
  { name: "Sponsors", href: "#sponsors", svg: "" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    controls.start(isMenuOpen ? "closed" : "open");
  };

  const handleApply = () =>
    window.open("https://dashboard.brhacks.org", "_blank");

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
  }, [isMenuOpen]);

  return (
    <header className="header fixed z-[100] w-full flex flex-row items-center justify-end backdrop-blur-sm bg-gradient-to-b from-[#041D33] to-[#fff0] px-8 py-3 text-white">
      <ul className="space-x-11 hidden min-[820px]:flex">
        {links.map((link, index) => (
          <li key={index} className="flex content-center flex-wrap font-bold">
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
        <li className={styles.apply}>
          <a onClick={handleApply} className="cursor-pointer">
            Apply
          </a>
        </li>
      </ul>
      <div className="min-[820px]:hidden">
        <button
          onClick={toggleMenu}
          className="text-white font-darkline text-[30px] font-normal"
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      <motion.div
        initial="closed"
        animate={controls}
        variants={{
          open: { y: 0 },
          closed: { y: "120%" },
        }}
        transition={{ duration: 1 }}
        className={`min-[820px]:hidden fixed top-0 right-0 h-screen w-full bg-gradient-to-b from-[#014E6F] to-[#041D33] text-white flex justify-center items-center py-[30px]`}
      >
        <div className="flex flex-col items-center justify-center z-[61]">
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[50px] font-bold text-[35px] font-hyperhelix mb-6 flex md:flex-row flex-col justify-center items-center gap-2"
          >
            <img className="w-[100px] h-auto rounded-full" src={"/newlogo.png"} alt="logo" />
            <h1>BRHacks 2025</h1>
          </motion.span>
          {links.map((link, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.2 }}
              href={link.href}
              onClick={toggleMenu}
              className="mb-6 flex flex-row gap-2 justify-center items-center"
            >
              <h1>{link.name}</h1>
            </motion.a>
          ))}
          <motion.button
            onClick={handleApply}
            className={`cursor-pointermb-6 flex flex-row gap-2 justify-center items-center ${styles.apply2}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
          >
            <h1>Apply</h1>
          </motion.button>
          <motion.button
            onClick={toggleMenu}
            className="text-[30px] flex flex-row gap-2 justify-center items-center mt-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
          >
            <div className="invert w-[30px] h-[30px]">
              <img src="/medicons/stethoscope.svg" className="w-full h-full" alt="Stethoscope" />
            </div>
            <h1>Close</h1>
          </motion.button>
        </div>
        <img
          src="/medicons/stethoscope-nobg.svg"
          className="block absolute bottom-10 left-10 h-[60px] animate-bob-med"
          alt="Stethoscope"
        />
      </motion.div>
    </header>
  );
}
