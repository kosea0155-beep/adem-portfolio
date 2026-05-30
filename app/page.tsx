"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const profile = {
  name: "Adem Köse",
  title: "Frontend Developer",
  email: "kosea155@gmail.com",
  phone: "05340203373",
  location: "Turkey",
  github: "https://github.com/kosea0155-beep",
  linkedin: "https://linkedin.com/",
  cv: "/cv.pdf",
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Responsive Design",
  "UI Design",
  "Framer Motion",
  "Deployment",
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern personal portfolio website built with Next.js, Tailwind CSS and smooth animations.",
    image: "/images/project-1.jpg",
    tags: ["Next.js", "Tailwind", "Responsive"],
    demo: "#",
    code: "https://github.com/",
  },
  {
    title: "Admin Dashboard",
    description:
      "A clean landing page design focused on layout, typography, spacing and user experience.",
    image: "/images/project-2.jpg",
    tags: ["HTML", "CSS", "UI Design"],
    demo: "#",
    code: "https://github.com/",
  },
  {
    title: "AI Landing Page",
    description:
      "A small React project created to practice components, props, state and reusable UI structures.",
    image: "/images/project-3.jpg",
    tags: ["React", "Components", "State"],
    demo: "#",
    code: "https://github.com/",
  },
];

const gallery = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
];

const learningSteps = [
  "HTML & semantic structure",
  "CSS layouts and responsive design",
  "JavaScript fundamentals",
  "React components and state",
  "Next.js projects and deployment",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1e1b4b,_#000000_45%)] text-white">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute top-96 right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 left-1/2 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      </div>

      <nav className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-5 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            {profile.name}<span className="text-purple-300">.dev</span>
          </a>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-full border border-white/10 px-3 py-2 text-zinc-200"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl px-6 py-4">
            <div className="flex flex-col gap-4 text-sm text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative z-10 min-h-screen flex items-center px-5 sm:px-6 pt-28 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
              ✨ {profile.title}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 bg-gradient-to-r from-white via-zinc-300 to-purple-300 bg-clip-text text-transparent">
              <span className="block">Frontend Developer</span>
              <span className="block">Building Modern Web Experiences</span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg leading-8">
              I am a passionate Frontend Developer specializing in React, Next.js and
              modern web technologies. I focus on creating fast, responsive and visually
              appealing user interfaces that provide seamless user experiences across all
              devices. My goal is to build high-quality web applications that combine
              performance, functionality and modern design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="#projects"
                className="rounded-full bg-white text-black px-8 py-4 font-medium hover:bg-zinc-200 transition inline-flex items-center justify-center gap-2"
              >
                View Projects ↗
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/30 px-8 py-4 font-medium hover:bg-white/10 transition inline-flex items-center justify-center gap-2"
              >
                Contact Me ✉
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <Image
                src="/images/profile.jpg"
                alt={`${profile.name} profile photo`}
                width={700}
                height={850}
                priority
                className="h-[320px] sm:h-[420px] md:h-[520px] w-full rounded-[2rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-24 md:py-28 border-t border-white/10">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-purple-300 mb-4">About</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="text-zinc-400">📍 {profile.location}</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl shadow-2xl">
            <p className="text-zinc-300 text-base sm:text-lg leading-8">
              I am a frontend developer focused on building modern, responsive and
              beautiful websites. I enjoy creating clean interfaces, smooth user
              experiences and projects that look professional on every device.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-24 md:py-28 border-t border-white/10">
        <p className="text-sm uppercase tracking-[0.4em] text-purple-300 mb-4">Skills</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Technologies I Use</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -6, scale: 1.03 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center text-zinc-200 shadow-2xl transition-all duration-300"
            >
              <div className="mb-3 text-2xl">⌘</div>
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-24 md:py-28 border-t border-white/10">
        <p className="text-sm uppercase tracking-[0.4em] text-purple-300 mb-4">Projects</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={700}
                height={460}
                className="h-52 w-full object-cover"
              />

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-zinc-400 leading-7 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  <a href={project.demo} className="text-purple-300 hover:text-white transition">
                    Live Demo
                  </a>
                  <a href={project.code} className="text-purple-300 hover:text-white transition">
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="gallery" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-24 md:py-28 border-t border-white/10">
        <p className="text-sm uppercase tracking-[0.4em] text-purple-300 mb-4">Gallery</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Visual Highlights</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {gallery.map((image, index) => (
            <motion.div
              key={image}
              whileHover={{ scale: 1.04 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={650}
                className="h-72 w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="journey" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-24 md:py-28 border-t border-white/10">
        <p className="text-sm uppercase tracking-[0.4em] text-purple-300 mb-4">Journey</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-10">My Learning Path</h2>

        <div className="space-y-4">
          {learningSteps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black font-semibold">
                {index + 1}
              </div>
              <p className="text-zinc-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-24 md:py-28 border-t border-white/10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-12 backdrop-blur-xl shadow-2xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-purple-300 mb-4">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Let&apos;s Build Something Modern</h2>
          <p className="text-zinc-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            I am open to learning, collaboration and frontend development opportunities.
          </p>

          <p className="text-zinc-400 mb-2 break-words">
            Email: {profile.email}
          </p>

          <p className="text-zinc-400 mb-8">
            Phone: {profile.phone}
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-4 font-medium hover:bg-zinc-200 transition"
            >
              ✉ Send Email
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium hover:bg-white/10 transition"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-medium hover:bg-white/10 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/905340203373"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-xl shadow-2xl hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        💬
      </a>

      <footer className="relative z-10 border-t border-white/10 px-5 sm:px-6 py-10 text-center text-zinc-400">
        <p className="mb-2">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm">
          Built with Next.js, Tailwind CSS and Framer Motion.
        </p>
      </footer>
    </main>
  );
}