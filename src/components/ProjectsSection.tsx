import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, Sparkles, Video, FileText, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Tarina AI Platform",
    description: "AI-powered video platform with real-time WebSocket infrastructure, serving enterprise clients including the UN World Food Programme and International Olympic Committee.",
    tech: ["React", "Python", "FastAPI", "GCP", "Redis", "WebSockets"],
    github: "https://github.com/zacharynapier",
    live: "https://tarina.ai",
    icon: Video,
    featured: true,
  },
  {
    title: "Speech Recognition Pipeline",
    description: "Containerized Whisper deployment automating transcription, translation, and summarization. Reduced turnaround from weeks to ~100 seconds, saving $50K/year.",
    tech: ["Python", "Whisper", "Docker", "PostgreSQL", "FastAPI"],
    github: "https://github.com/zacharynapier",
    live: "#",
    icon: Cpu,
    featured: true,
  },
  {
    title: "RAG Knowledge System",
    description: "Retrieval-augmented generation system with LlamaIndex over 10,000+ pages, improving retrieval quality for enterprise training content.",
    tech: ["Python", "LlamaIndex", "pgvector", "React", "PostgreSQL"],
    github: "https://github.com/zacharynapier",
    live: "#",
    icon: Sparkles,
    featured: true,
  },
  {
    title: "Video Processing Automation",
    description: "Automated video processing pipeline with Python, FFmpeg, and SQL, eliminating manual editing workflows and reducing processing time by 80%.",
    tech: ["Python", "FFmpeg", "PostgreSQL", "ELK Stack"],
    github: "https://github.com/zacharynapier",
    live: "#",
    icon: Video,
    featured: false,
  },
  {
    title: "NLP Transcript Processor",
    description: "Large-scale NLP pipeline processing 500,000+ transcripts with NLTK and spaCy for entity extraction and classification.",
    tech: ["Python", "NLTK", "spaCy", "PostgreSQL"],
    github: "https://github.com/zacharynapier",
    live: "#",
    icon: FileText,
    featured: false,
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "React-based analytics UI with ELK monitoring integration, providing real-time insights and reducing incident response time.",
    tech: ["React", "TypeScript", "ELK Stack", "Grafana"],
    github: "https://github.com/zacharynapier",
    live: "#",
    icon: Cpu,
    featured: false,
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
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
          <span className="text-primary font-medium mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing AI/ML integration, scalable architecture,
            and high-performance systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card group overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Card Content */}
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <project.icon size={24} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    >
                      <Github size={18} />
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-muted-foreground bg-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="hero-outline"
            size="lg"
            asChild
          >
            <a
              href="https://github.com/zacharynapier"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              View All on GitHub
              <ArrowUpRight size={18} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
