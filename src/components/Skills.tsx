
"use client";

import { motion } from "motion/react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  BrainCircuit,
  Wrench,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiVuedotjs,
  SiTailwindcss,
  SiStyledcomponents,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiDjango,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiAnthropic,
  SiLangchain,
  SiVercel,
  SiSwagger,
  SiMui,
  SiRedux,
  SiPhp,
  SiPython,
  SiClaudecode,
  SiCursor,
} from "react-icons/si";

import { FaAws } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";

import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

type Skill = {
  name: string;
  icon?: IconType;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Modern, responsive user interfaces",
    icon: Code2,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Styled Components", icon: SiStyledcomponents },
      { name: "Redux", icon: SiRedux },
      { name: "Material UI", icon: SiMui },
    ],
  },
  {
    title: "Backend Development",
    description: "Scalable APIs and server-side systems",
    icon: Server,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "Django", icon: SiDjango },
      { name: ".NET", icon: SiDotnet },
      { name: "REST APIs" },
      { name: "PHP", icon: SiPhp },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Databases",
    description: "Database design and optimization",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL" },
      { name: "Data Modeling" },
      { name: "Query Optimization" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and deployment",
    icon: Cloud,
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "CI/CD" },
      { name: "Cloud Deployment" },
      { name: "Monitoring" },
    ],
  },
  {
    title: "AI Development",
    description: "LLM integrations and AI-assisted workflows",
    icon: BrainCircuit,
    skills: [
      { name: "OpenAI API", icon: FaRobot },
      { name: "Anthropic API", icon: SiAnthropic },
      { name: "LangChain", icon: SiLangchain },
      { name: "Claude Code", icon: SiClaudecode },
      { name: "Cursor", icon: SiCursor },
      { name: "Vercel AI SDK" },
      { name: "Mastra" },
      { name: "Inngest" },
    ],
  },
  {
    title: "Engineering & Tools",
    description: "Software quality and architecture",
    icon: Wrench,
    skills: [
      { name: "Swagger", icon: SiSwagger },
      { name: "OpenAPI" },
      { name: "SaaS Architecture" },
      { name: "API Design" },
      { name: "Automated Testing" },
      { name: "Performance Optimization" },
      { name: "Agile" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-20 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            What I work with
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technical{" "}
            <span className="text-blue-400">Skills</span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Technologies and engineering practices I use
            to build scalable, reliable applications.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-white/10 bg-slate-900/70 p-7 transition-colors duration-300 hover:border-blue-500/40"
              >
                {/* Category heading */}
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <CategoryIcon size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Technology badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800/80 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                      >
                        {SkillIcon && (
                          <SkillIcon
                            size={16}
                            className="text-blue-400"
                          />
                        )}

                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
