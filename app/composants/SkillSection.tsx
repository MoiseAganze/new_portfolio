import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../utils/framerMotionUtils";
export const SkillsSection = () => {
  const skills = [
    {
      category: "Générale",
      items: [
        "Développement Web (Frontend + Backend)",
        "Développement Mobile (cross-platform)",
        "Data Science & Machine Learning (bases)",
        "Assistants IA",
        "DevOps (CI/CD, déploiement)",
        "Administration systèmes Linux (grandes lignes)",
        "Notions en Réseaux informatiques",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Material UI",
        "TailwindCSS (+plugins, DaisyUI..)",
        "Framer Motion",
        "SEO (Search Engine Optimization)",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Next.js",
        "Express",
        "FastAPI (Python)",
        "REST API",
        "Authentification (JWT, OAuth, NextAuth)",
      ],
    },
    {
      category: "Bases de données",
      items: [
        "MySQL",
        "SQLite",
        "PostgreSQL",
        "MongoDB",
        "Prisma (ORM)",
        "Conception de schémas (MCD/MLD)",
      ],
    },
    {
      category: "Mobile",
      items: ["Flutter (iOS, Android, Desktop)", "WebView / Hybrid apps"],
    },
    {
      category: "Data & AI",
      items: [
        "Python (Pandas, NumPy, Scikit-learn)",
        "Analyse exploratoire de données",
        "Chatbots & NLP (LLMs, APIs OpenAI / HuggingFace)",
        "Data Visualization (Matplotlib, Plotly, Seaborn)",
        "Bases en statistiques & probabilités",
      ],
    },
    {
      category: "Réseaux & Systèmes",
      items: [
        "Linux (administration, bash scripting)",
        "Nginx (reverse proxy, hébergement)",
        "DNS, HTTP/HTTPS, SSL/TLS (bases)",
        "Notions en sécurité réseau (firewall, certificats)",
        "Supervision & logs (journalctl, htop, netstat)",
      ],
    },
    {
      category: "DevOps & Outils",
      items: [
        "Git & GitHub",
        "CI/CD (GitHub)",
        "Cloud basics (Vercel)",
        "Testing (Postman)",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-base-200">
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
            Mes <span className="text-primary">Compétences</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="card bg-base-100 shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="card-body">
                  <h3 className="card-title text-xl">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="badge badge-outline hover:badge-primary transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
