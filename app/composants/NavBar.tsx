"use client";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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

  return (
    <>
      <nav className="navbar sticky top-0 z-50 bg-base-100/80 backdrop-blur-sm border-b border-base-300">
        <div className="container mx-auto px-4">
          <div className="flex-1">
            <Link
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "#home")}
              className="btn btn-ghost text-xl"
            >
              <span className="text-primary">Port</span>folio
            </Link>
          </div>
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal px-1 gap-1">
              <li>
                <Link
                  href="#home"
                  onClick={(e) => handleSmoothScroll(e, "#home")}
                  className="hover:text-primary"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  onClick={(e) => handleSmoothScroll(e, "#skills")}
                  className="hover:text-primary"
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, "#projects")}
                  className="hover:text-primary"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-none md:hidden">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setIsDrawerOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer pour mobile */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 h-full w-64 bg-base-100 z-50 shadow-2xl"
            >
              <div className="p-4 flex justify-end">
                <button
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
                </button>
              </div>
              <ul className="menu p-4 gap-2">
                <li>
                  <Link
                    href="#home"
                    className="text-lg"
                    onClick={(e) => handleSmoothScroll(e, "#home")}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="#skills"
                    className="text-lg"
                    onClick={(e) => handleSmoothScroll(e, "#skills")}
                  >
                    Compétences
                  </Link>
                </li>
                <li>
                  <Link
                    href="#projects"
                    className="text-lg"
                    onClick={(e) => handleSmoothScroll(e, "#projects")}
                  >
                    Projets
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-lg"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
