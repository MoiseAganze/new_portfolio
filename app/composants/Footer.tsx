import { motion } from "framer-motion";
import Link from "next/link";
import { containerVariants, itemVariants } from "../utils/framerMotionUtils";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 border-t border-base-300">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-12 justify-between"
        >
          {/* Logo et description */}
          <motion.div variants={itemVariants} className="max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-base-content/70 mb-6">
              Créateur d'expériences digitales exceptionnelles. Je transforme
              vos idées en réalité avec des solutions techniques innovantes.
            </p>
          </motion.div>

          {/* Liens rapides */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "#home" },
                { name: "Compétences", href: "#skills" },
                { name: "Projets", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="max-w-md">
            <h3 className="text-lg font-semibold mb-6 text-primary">
              Newsletter
            </h3>
            <p className="text-base-content/70 mb-4">
              Abonnez-vous pour recevoir mes dernières réalisations et articles.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="input input-bordered flex-grow"
                required
              />
              <motion.button
                type="submit"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </motion.button>
            </form>
            <div className="mt-4 text-sm text-base-content/50">
              Nous ne partageons jamais votre email.
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-base-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-base-content/50 mb-4 md:mb-0">
            © {currentYear} Moise Aganze. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-base-content/50 hover:text-primary transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-base-content/50 hover:text-primary transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
