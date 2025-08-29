"use client";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Gérer l'état de scroll pour l'effet de blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Observer les sections pour l'état actif
  useEffect(() => {
    const sections = ["home", "skills", "projects", "contact"];
    const observers = sections.map((section) => {
      const element = document.querySelector(`#${section}`);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Fonction pour le défilement fluide
  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsDrawerOpen(false);
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const menuItems = [
    { href: "#home", label: "Accueil", id: "home" },
    { href: "#skills", label: "Compétences", id: "skills" },
    { href: "#projects", label: "Projets", id: "projects" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`navbar sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-base-100/90 backdrop-blur-md border-b border-base-300/50 shadow-lg"
            : "bg-base-100/80 backdrop-blur-sm border-b border-base-300"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex-1">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "#home")}
                className="btn btn-ghost text-xl font-bold group"
              >
                <span className="text-primary group-hover:text-primary-focus transition-colors">
                  Port
                </span>
                <span className="group-hover:text-primary transition-colors">
                  folio
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Menu desktop */}
          <div className="flex-none w-full  hidden md:flex justify-between items-center">
            <ul className="menu menu-horizontal px-1 gap-1">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10"
                        : "hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-primary/10 rounded-lg"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a
              href="https://github.com/MoiseAganze/"
              target="_blank"
              className="p-3 rounded-full bg-base-content/10 hover:bg-primary/10 text-base-content hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Bouton hamburger mobile */}
          <div className="flex-none md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-square btn-ghost"
              onClick={() => setIsDrawerOpen(true)}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
                animate={{ rotate: isDrawerOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Drawer mobile amélioré */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-base-100/95 backdrop-blur-md z-50 shadow-2xl border-l border-base-300/50"
            >
              <div className="p-6 flex justify-between items-center border-b border-base-300/50">
                <h2 className="text-lg font-semibold">
                  <span className="text-primary">Port</span>folio
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn btn-circle btn-ghost btn-sm"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              <ul className="menu p-6 gap-3">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-lg py-3 px-4 rounded-lg transition-all duration-300 ${
                          activeSection === item.id
                            ? "text-primary bg-primary/10 border-l-4 border-primary"
                            : "hover:text-primary hover:bg-primary/5 hover:border-l-4 hover:border-primary/50"
                        }`}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>

              {/* GitHub link mobile */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="px-6 mt-8"
              >
                <motion.a
                  href="https://github.com/MoiseAganze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-base-content/5 hover:bg-primary/10 text-base-content hover:text-primary transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-medium">Voir sur GitHub</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
