import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { containerVariants, itemVariants } from "../utils/framerMotionUtils";
export const ProjectsSection = () => {
  const projects = [
    {
      title: "MAP SANTE",
      description:
        "La Plateforme Officielle de géolocalisation des établissements sanitaires en RDC.",
      tags: ["Next.js", "NodeJs", "Prisma", "MySql", "DaisyUI/TailwindCSS"],
      image: "/images/mapsante.webp",
      link: "https://mapsante.net",
    },
    {
      title: "ZapChat",
      description: "Une application web de Messagerie Complète.",
      tags: ["React", "Node.js", "MongoDB", "DaisyUI/TailwindCSS"],
      image: "/images/zapchat.webp",
      link: "https://github.com/MoiseAganze/messagerie-frontend",
    },
    {
      title: "ChatGPT Clone",
      description: "Un clone de chatgpt.",
      tags: ["React", "DaisyUI/TailwindCSS"],
      image: "/images/gpt.png",
      link: "https://chatgpt-clone-q5ae.vercel.app/",
    },
    {
      title: "E-learning App",
      description: "Un template d'une application d'enseignement en ligne.",
      tags: ["React", "DaisyUI/TailwindCSS"],
      image: "/images/klaso.png",
      link: "https://eduafrique.vercel.app/",
    },
    {
      title: "VagaBook",
      description: "Une application web pour une Bibliothèque en ligne.",
      tags: ["React", "Django", "MySql", "DaisyUI/TailwindCSS"],
      image: "/images/vagabook.webp",
      link: "https://vagabond-edition.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Mes <span className="text-primary">Projets</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="card bg-base-100 shadow-xl overflow-hidden group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <figure
                  onClick={() => window.open(project.link, "_blank")}
                  className="relative h-48 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-0" />
                </figure>
                <div className="card-body">
                  <a className="card-title" href={project.link}>
                    {project.title}
                  </a>
                  <p>{project.description}</p>
                  <div className="card-actions justify-end mt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="badge badge-outline">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="https://github.com/MoiseAganze"
              target="_blank"
              className="btn btn-primary btn-wide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>{" "}
              Voir tous mes projets
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
