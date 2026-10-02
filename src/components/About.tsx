
"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  Cloud,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

const strengths = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building scalable applications with React, Next.js, Node.js, Laravel, Python, and .NET.",
  },
  {
    icon: Database,
    title: "Backend & Architecture",
    description:
      "Designing REST APIs, optimizing databases, and developing reliable SaaS applications.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Working with AWS, cloud deployments, CI/CD pipelines, and application monitoring.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Assisted Development",
    description:
      "Leveraging Claude Code, Cursor, and LLM APIs to accelerate modern software development.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-900/50 px-6 py-24 scroll-mt-20"
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
            Get to know me
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            About <span className="text-blue-400">Me</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </motion.div>

        {/* About content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-6 text-3xl font-bold leading-tight text-white">
              Passionate about building
              <span className="text-blue-400">
                {" "}scalable digital solutions.
              </span>
            </h3>

            <p className="mb-5 leading-8 text-slate-400">
              I&apos;m Manny Luzano, a Senior Full Stack Engineer
              with over 10 years in the software industry
              and more than 7 years of hands-on experience
              developing modern web applications.
            </p>

            <p className="mb-5 leading-8 text-slate-400">
              I specialize in building responsive user
              interfaces, robust backend services, and
              scalable SaaS applications using technologies
              such as React, Next.js, TypeScript, Node.js,
              Laravel, Python, and .NET.
            </p>

            <p className="mb-8 leading-8 text-slate-400">
              My experience covers the complete development
              lifecycle, including API design, database
              optimization, cloud deployment, testing,
              and production support. I also integrate
              AI-assisted development tools into my workflow.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Let&apos;s work together
              <ArrowUpRight size={20} />
            </a>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={25} />
                  </div>

                  <h4 className="mb-3 text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Experience statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid gap-6 border-t border-white/10 pt-12 text-center sm:grid-cols-3"
        >
          <div>
            <h3 className="text-4xl font-bold text-blue-400">
              10+
            </h3>
            <p className="mt-2 text-slate-400">
              Years in Software
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-400">
              7+
            </h3>
            <p className="mt-2 text-slate-400">
              Years Hands-on Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-blue-400">
              Full Stack
            </h3>
            <p className="mt-2 text-slate-400">
              End-to-End Development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
