import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Cloud, TestTube, Workflow, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "Vitest", "Playwright"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "Alembic", "Pydantic", "JWT", "WebSockets", "pytest"],
  },
  {
    title: "ML & GenAI",
    icon: Brain,
    skills: ["RAG", "Semantic Search", "pgvector", "LlamaIndex", "Groq", "Gemini", "ElevenLabs", "MCP", "Hugging Face"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "GCP Cloud Run", "Vertex AI", "Cloud SQL", "BigQuery", "AWS EC2", "Kubernetes", "GitHub Actions", "MLflow", "ELK"],
  },
  {
    title: "Architecture",
    icon: Workflow,
    skills: ["Microservices", "Event-Driven", "CI/CD", "Observability", "SLI/SLO", "Incident Management"],
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    skills: ["pytest", "Vitest", "Playwright", "E2E Testing", "Integration Testing", "TDD"],
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Crafting Scalable Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm a Software Engineer with a passion for building robust, 
            scalable systems and AI-powered applications that solve real-world problems.
          </p>
        </motion.div>

        {/* Bio Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10 mb-16 max-w-3xl mx-auto border-glow"
        >
          <p className="text-foreground/90 leading-relaxed text-lg">
            With 7+ years of experience, I specialize in full-stack development with a focus on 
            backend systems, AI/ML integration, and cloud infrastructure. I've secured pilots with 
            organizations like the UN World Food Programme and built systems processing 500K+ documents. 
            I thrive on solving complex problems and delivering high-impact solutions.
          </p>
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="text-center">
                <span className="text-3xl font-display font-bold text-gradient">7+</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center">
                <span className="text-3xl font-display font-bold text-gradient">500K+</span>
                <p className="text-sm text-muted-foreground">Documents Processed</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center">
                <span className="text-3xl font-display font-bold text-gradient">$50K+</span>
                <p className="text-sm text-muted-foreground">Annual Savings Delivered</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
