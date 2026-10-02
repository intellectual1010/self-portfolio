
"use client";

import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Branding */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold text-white"
            >
              Manny
              <span className="text-blue-500">
                .
              </span>
            </a>

            <p className="mt-2 text-sm text-slate-400">
              Senior Full Stack Engineer
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-slate-400">
            <a
              href="#about"
              className="hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="hover:text-blue-400"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="hover:text-blue-400"
            >
              Contact
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/intellectual1010"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/manny-luzano-a44856432"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition hover:text-blue-400"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Manny Luzano.
            All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            Built with
            <Heart
              size={14}
              className="text-red-400"
            />
            using Next.js
          </div>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex items-center gap-2 transition hover:text-blue-400"
          >
            Back to top
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
