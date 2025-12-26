import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Technical Founder",
    company: "Tarina AI, Inc.",
    location: "Salt Lake City, UT",
    duration: "Jun 2024 – Oct 2025",
    highlights: [
      "Owned roadmap and cross-functional delivery across product, design, and go-to-market for a React and Python platform on GCP and Vercel",
      "Secured paid pilots with the United Nations World Food Programme and the International Olympic Committee IKL through solution discovery and technical demos",
      "Architected WebSocket video infrastructure with <100ms latency across 3 GCP regions with Redis for caching, pub/sub, presence, and rate limiting",
      "Implemented CI/CD with GitHub Actions to run tests, build Docker images, migrate DB with Alembic, and deploy to Cloud Run and Vercel",
    ],
  },
  {
    role: "Software Engineer",
    company: "Rakonto Inc.",
    location: "Salt Lake City, UT",
    duration: "Jan 2021 – Jun 2024",
    highlights: [
      "Led development of automated transcription, translation, and summarization workflows",
      "Built containerized speech recognition on on-prem Whisper deployment, reducing turnaround from 2.5-4 weeks to ~100 seconds",
      "Saved $50,000/year through automated processing pipeline optimizations",
      "Partnered with product and customer teams to scope solutions and run live demos",
    ],
  },
  {
    role: "Software Engineer (Contract)",
    company: "Liberty Health",
    location: "Remote",
    duration: "Nov 2022 – Jan 2023",
    highlights: [
      "Implemented retrieval-augmented generation with LlamaIndex over 10,000+ pages to improve retrieval quality",
      "Shipped a React testing UI that cut iteration and setup time for the learning and development team",
    ],
  },
  {
    role: "Software Engineer",
    company: "GPFour Inc.",
    location: "Salt Lake City, UT",
    duration: "Dec 2019 – Jan 2021",
    highlights: [
      "Automated video processing with Python, FFmpeg, and SQL, removing a large share of manual edits",
      "Implemented ELK monitoring and React dashboards to reduce incident response time",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "GPFour Inc.",
    location: "Salt Lake City, UT",
    duration: "Jul 2017 – Dec 2019",
    highlights: [
      "Processed 500,000+ transcripts with NLTK and spaCy to reduce manual review time",
    ],
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Where I've Worked
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            7+ years building scalable systems, AI-powered applications,
            and leading engineering teams.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              className={`relative mb-10 md:mb-14 pl-12 md:pl-0 ${
                index % 2 === 0 ? "md:pr-8 md:text-right md:mr-auto md:w-1/2" : "md:pl-8 md:ml-auto md:w-1/2"
              }`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 w-3 h-3 rounded-full bg-primary shadow-glow-sm left-3 md:left-auto ${
                index % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"
              }`} />

              {/* Card */}
              <div className="glass-card p-5 md:p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className={`flex items-start gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <div className={index % 2 === 0 ? "md:text-right" : ""}>
                    <h3 className="font-display font-bold text-lg text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium text-sm">{exp.company}</p>
                    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-xs mt-1 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className={`space-y-1.5 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-muted-foreground text-sm leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <span className="text-primary font-medium mb-4 block">Education</span>
          <div className="glass-card p-6 border-glow">
            <h3 className="font-display font-bold text-xl mb-1">Western Governors University</h3>
            <p className="text-primary font-medium">Bachelor of Science in Computer Science</p>
            <p className="text-muted-foreground text-sm mt-1">Expected March 2026 • Salt Lake City, UT</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
