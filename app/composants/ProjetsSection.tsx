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
      title: "VagaBook",
      description: "Une application web pour une Bibliothèque en ligne.",
      tags: ["React", "Django", "MySql", "DaisyUI/TailwindCSS"],
      image: "/images/vagabook.webp",
      link: "",
    },
    {
      title: "ZapChat",
      description: "Une application web de Messagerie Complète.",
      tags: ["React", "Node.js", "MongoDB", "DaisyUI/TailwindCSS"],
      image: "/images/zapchat.webp",
      link: "",
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
                  onClick={() => window.open(project.link, "_self")}
                  className="relative h-48 overflow-hidden"
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
            <Link href="#projects" className="btn btn-primary btn-wide">
              Voir tous mes projets
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
