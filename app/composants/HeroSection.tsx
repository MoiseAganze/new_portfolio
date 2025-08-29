import { motion } from "framer-motion";
import Link from "next/link";
import { containerVariants, itemVariants } from "../utils/framerMotionUtils";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full pb-5 md:py-10 lg:py-15 pt-1 md:pt-1 lg:pt-1"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64  md:w-80  lg:w-96  rounded-2xl overflow-hidden">
              <img
                src="/images/dev.webp" // Remplacez par votre photo
                alt="Votre Nom"
                className="object-cover"
              />
              <motion.div
                className="absolute -inset-4 border border-base-content/10 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
            variants={containerVariants}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
              variants={itemVariants}
            >
              Bonjour, je suis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-base-content">
                MOÏSE AGANZE
              </span>
            </motion.h1>

            <motion.p
              className="text-md md:text-lg text-base-content/80"
              variants={itemVariants}
            >
              Développeur fullstack passionné, je conçois des solutions
              numériques élégantes et performantes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link
                href="#contact"
                className="btn btn-primary btn-lg font-medium"
              >
                Contactez-moi
              </Link>
              <Link
                href="#projects"
                className="btn btn-outline btn-lg font-medium"
              >
                Mes réalisations
              </Link>
              <Link
                href="https://github.com/MoiseAganze/"
                className="btn btn-outline btn-lg font-medium"
                target="_blank"
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
                Mon github
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-base-content/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
