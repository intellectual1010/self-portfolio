
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MessagingLinks from "./MessagingLinks";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "mannyluzano4@gmail.com",
    href: "mailto:mannyluzano4@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pampanga, Philippines",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      form.subject || "Portfolio Inquiry"
    );

    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}

${form.message}`
    );

    window.location.href =
      `mailto:mannyluzano4@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-slate-900/50 px-6 py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Have a project in mind?
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Get In{" "}
            <span className="text-blue-400">
              Touch
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            I&apos;m open to remote opportunities and
            collaborations. Feel free to reach out
            to discuss your next project.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left: Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-5 text-2xl font-bold text-white">
              Let&apos;s build something great.
            </h3>

            <p className="mb-10 max-w-lg leading-8 text-slate-400">
              Whether you&apos;re looking for a full-stack
              developer, need help building a scalable
              application, or want to discuss an
              interesting project, I&apos;d be happy
              to connect.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon size={23} />
                    </div>

                    <div>
                      <p className="mb-1 text-sm text-slate-400">
                        {item.title}
                      </p>

                      <p className="font-medium text-white">
                        {item.value}
                      </p>
                    </div>

                    {item.href && (
                      <ArrowUpRight
                        size={18}
                        className="ml-auto text-slate-500"
                      />
                    )}
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900 p-5 transition hover:border-blue-500/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900 p-5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
              <CheckCircle2
                size={22}
                className="shrink-0 text-green-400"
              />

              <div>
                <p className="font-semibold text-white">
                  Available for Remote Work
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  Open to international opportunities
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-medium text-slate-400">
                Connect with me
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/intellectual1010"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://linkedin.com/in/manny-luzano-a44856432"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="mailto:mannyluzano4@gmail.com"
                  aria-label="Email"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-slate-300 transition hover:border-blue-500/50 hover:text-blue-400"
                >
                  <Mail size={22} />
                </a>

                <MessagingLinks type={1} />
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl md:p-8"
          >
            <h3 className="mb-2 text-xl font-bold text-white">
              Send me a message
            </h3>

            <p className="mb-8 text-sm text-slate-400">
              Fill out the form to compose an email.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name and email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      subject: e.target.value,
                    })
                  }
                  placeholder="Project inquiry"
                  className="w-full rounded-lg border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                <Send size={18} />
                Compose Email
              </button>

              <p className="text-center text-xs text-slate-500">
                Opens your default email application.
                You must send the email from there.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
