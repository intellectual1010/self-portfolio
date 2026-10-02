
"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import MessagingLinks from "./MessagingLinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-24"
    >
      {/* Background effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Available for remote opportunities
          </div>

          <p className="mb-4 text-lg text-slate-400">
            Hello, I&apos;m
          </p>

          <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Manny
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Luzano.
            </span>
          </h1>

          <h2 className="mb-6 text-2xl font-semibold text-slate-200 sm:text-3xl">
            Senior Full Stack Engineer
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-400">
            I build scalable web applications and modern
            digital experiences using React, Next.js,
            Node.js, Laravel, and AI-powered technologies.
          </p>

          {/* Buttons */}
          <div className="mb-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-blue-400"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 text-slate-400">
            <a
              href="https://github.com/intellectual1010"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-blue-400"
            >
              <FaGithub size={23} />
            </a>

            <a
              href="https://linkedin.com/in/manny-luzano-a44856432"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-blue-400"
            >
              <FaLinkedin size={23} />
            </a>

            <a
              href="mailto:mannyluzano4@gmail.com"
              aria-label="Email"
              className="transition hover:text-blue-400"
            >
              <Mail size={23} />
            </a>

            <MessagingLinks type={0} />
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden items-center justify-center lg:flex"
        >
          <div className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex h-80 w-80 items-center justify-center rounded-3xl border border-blue-500/20 bg-slate-900/80 shadow-2xl shadow-blue-500/10">
            <Code2
              size={150}
              strokeWidth={1}
              className="text-blue-400"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 rounded-xl border border-white/10 bg-slate-900 p-4 shadow-xl">
            <p className="text-sm text-slate-400">
              Experience
            </p>
            <p className="text-2xl font-bold text-white">
              10+ Years
            </p>
          </div>

          <div className="absolute -right-4 top-4 rounded-xl border border-white/10 bg-slate-900 p-4 shadow-xl">
            <p className="text-sm font-semibold text-blue-400">
              Full Stack
            </p>
            <p className="text-sm text-slate-400">
              React • Node • AI
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
