
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ImageOff,
} from "lucide-react";
import {
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "ELD Trip Planner",
    category: "Full Stack Development",
    description:
      "A full-stack trip planning application featuring route calculation, driver hours-of-service tracking, automated rest stops, and daily electronic logging.",
    image: "/projects/eld-planner.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Django",
      "REST API",
      "OSRM",
    ],
    features: [
      "Route calculation",
      "Driver HOS tracking",
      "Daily ELD logs",
    ],
    // Add your actual public URLs when ready.
    github: "https://github.com/intellectual1010/spotter-eld-trip-planner",
    demo: "https://spotter-eld-trip-planner-nine.vercel.app/",
    featured: true,
  },
  {
    title: "AI Resume Analyzer",
    category: "Full Stack / AI Integration",
    description:
      "Developed a full-stack AI-powered resume analysis application that compares resumes against job descriptions using a locally hosted Llama 3.2 model. Implemented PDF text extraction, structured AI analysis, skills comparison, and downloadable PDF reports.",
    image: "/projects/ai-resume-analyzer.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Ollama",
      "Llama 3.2",
      "PDF.js",
      "jsPDF",
    ],
    features: [
      "Drag-and-drop PDF resume uploading",
      "Local AI analysis without paid APIs",
      "Matching and missing skills identification",
      "Estimated compatibility scoring",
      "Downloadable PDF analysis reports",
    ],
    github:
      "https://github.com/intellectual1010/ai-resume-analyzer",
    demo: "",
    featured: true,
  },
  {
    title: "TrailerTrader — Online Trailer Marketplace",
    category: "Full Stack Development",
    description:
      "Developed and maintained scalable backend APIs and responsive web interfaces for an online trailer marketplace, supporting business workflows and improving application performance.",
    image: "/projects/trailertrader.jpg",
    technologies: [
      "Laravel",
      "PHP",
      "Vue.js",
      "REST APIs",
      "MySQL",
    ],
    features: [],
    github: "",
    demo: "https://trailertrader.com/",
  },
  {
    title: "TaskFlow — Project Management API",
    category: "Backend / .NET",
    description:
      "Developed a RESTful project and task management API using ASP.NET Core and Entity Framework Core, featuring JWT authentication, project and task workflows, filtering, validation, and PostgreSQL persistence.",
    image: "/projects/dotnet-kanban.jpg",
    technologies: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT",
      "Swagger",
    ],
    features: [
      "JWT authentication and authorization",
      "Project and task CRUD operations",
      "Task assignment, priority, status, and due dates",
      "Filtering and search",
      "Entity Framework Core migrations",
      "Swagger API documentation",
    ],
    github:
      "https://github.com/intellectual1010/taskflow",
    demo: "https://taskflow-manny.vercel.app",
    featured: true,
  },
];

function ProjectImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden bg-slate-800">
      {failed ? (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-slate-500">
          <ImageOff size={36} />
          <span className="text-sm">
            Project screenshot coming soon
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

export default function Projects() {
  // Hide placeholder projects until their details are ready.
  const publishedProjects = projects

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-900/50 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            My work
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured{" "}
            <span className="text-blue-400">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            A selection of applications I&apos;ve developed,
            demonstrating full-stack engineering,
            system design, and modern technologies.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {publishedProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition-colors hover:border-blue-500/40"
            >
              {/* Screenshot */}
              <ProjectImage
                src={project.image}
                alt={`${project.title} screenshot`}
              />

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6 space-y-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-slate-800 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-auto flex flex-wrap gap-5 border-t border-white/10 pt-5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-blue-400"
                    >
                      <FaGithub size={18} />
                      Source Code
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                    >
                      Live Demo
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More projects */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-500">
            More projects coming soon
          </p>
        </div>
      </div>
    </section>
  );
}
