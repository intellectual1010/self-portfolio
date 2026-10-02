
"use client";

import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  location?: string;
  description: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    company: "TrailerCentral / LeadVenture",
    position: "Full Stack Developer",
    period: "Aug 2022 - Dec 2025",
    description: [
      "Built and maintained scalable Laravel REST APIs supporting production web applications and business workflows.",
      "Optimized database queries and backend logic to improve application performance.",
      "Developed reusable Vue.js components, responsive interfaces, and complex form workflows.",
      "Collaborated with engineering, QA, and product teams on feature delivery, debugging, and production releases.",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Vue.js",
      "REST API",
      "SQL",
    ],
  },
  {
    company: "Faye Digital",
    position: "Frontend Developer",
    period: "Jan 2022 - May 2022",
    description: [
      "Developed responsive Zendesk applications and customer-facing interfaces using React and Next.js.",
      "Built reusable UI components with Tailwind CSS and component-driven development practices.",
      "Integrated REST APIs and created Swagger/OpenAPI documentation to improve developer onboarding.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "REST API",
      "Swagger",
    ],
  },
  {
    company: "Bushtracks Africa",
    position: "Full Stack Developer",
    period: "Jan 2021 - Apr 2021",
    description: [
      "Developed administrative dashboards and React-based interfaces for internal business operations.",
      "Implemented backend APIs and connected frontend workflows to server-side services.",
      "Added automated tests and supported debugging and production-ready feature delivery.",
    ],
    technologies: [
      "React",
      "REST API",
      "JavaScript",
      "Automated Testing",
    ],
  },
  {
    company: "USEFULL",
    position: "Frontend Developer",
    period: "May 2019 - Oct 2020",
    description: [
      "Developed React-based administrative interfaces using CoreUI and reusable component patterns.",
      "Created responsive UI templates and data-driven screens for desktop and mobile devices.",
      "Defined and documented API contracts using Swagger to improve frontend and backend collaboration.",
    ],
    technologies: [
      "React",
      "CoreUI",
      "JavaScript",
      "Swagger",
      "Responsive Design",
    ],
  },
  {
    company: "Upwork / Freelancer",
    position: "Full Stack Engineer",
    period: "Mar 2016 - Feb 2019",
    description: [
      "Delivered backend applications and APIs using .NET for different client requirements.",
      "Built full-stack applications with React, Django, and Vue.js.",
      "Developed responsive interfaces and supported debugging, maintenance, and iterative client delivery.",
    ],
    technologies: [
      ".NET",
      "React",
      "Django",
      "Vue.js",
      "HTML",
      "CSS",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 overflow-hidden bg-slate-950 px-6 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            My career journey
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Professional{" "}
            <span className="text-blue-400">
              Experience
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            My professional journey building modern web
            applications and delivering scalable software
            solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical timeline line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500/50 to-transparent md:left-1/2" />

          <div className="space-y-12 md:space-y-20">
            {experiences.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={experience.company}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="relative grid items-start md:grid-cols-2 md:gap-16"
                >

                  {/* Timeline marker */}
                  <div className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-600 text-white shadow-lg shadow-blue-500/30 md:left-1/2">
                    <BriefcaseBusiness size={17} />
                  </div>

                  {/* Experience card */}
                  <div
                    className={`ml-14 min-w-0 md:ml-0 ${
                      isLeft
                        ? "md:col-start-1"
                        : "md:col-start-2"
                    }`}
                  >
                    <div className="group rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 md:p-8">

                      {/* Date */}
                      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-blue-400">
                        <CalendarDays size={16} />
                        {experience.period}
                      </div>

                      {/* Position */}
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {experience.position}
                      </h3>

                      {/* Company */}
                      <h4 className="mb-5 text-lg font-semibold text-slate-300">
                        {experience.company}
                      </h4>

                      {/* Optional location */}
                      {experience.location && (
                        <div className="mb-4 flex items-center gap-2 text-sm text-slate-400">
                          <MapPin size={15} />
                          {experience.location}
                        </div>
                      )}

                      {/* Responsibilities */}
                      <ul className="mb-6 space-y-3">
                        {experience.description.map(
                          (item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                              <span>{item}</span>
                            </li>
                          )
                        )}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
                        {experience.technologies.map(
                          (technology) => (
                            <span
                              key={technology}
                              className="rounded-md border border-blue-500/10 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Resume download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="mb-5 text-slate-400">
            Interested in learning more about my experience?
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl border border-blue-500/40 bg-blue-500/10 px-7 py-3 font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
          >
            Download My Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
