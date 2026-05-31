"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 80 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <nav className="fixed left-1/2 top-4 z-50 flex w-[92%] max-w-xl -translate-x-1/2 items-center justify-center gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-3 backdrop-blur-xl sm:top-6 sm:gap-2 sm:px-4">
        {["Home", "Services", "About", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="rounded-full px-3 py-2 text-xs text-zinc-300 transition hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm"
          >
            {item}
          </a>
        ))}
      </nav>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#312e81,_transparent_35%),radial-gradient(circle_at_bottom_right,_#7e22ce,_transparent_30%)] opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div
        className="pointer-events-none fixed z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl transition-all duration-100 sm:h-96 sm:w-96"
        style={{ left: mouse.x, top: mouse.y }}
      />

      <section
        id="home"
        className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl">
            Frontend Developer
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            Building Modern
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Web Experiences
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I create fast, responsive and visually stunning web applications
            using modern technologies like React, Next.js and Tailwind CSS.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </section>

      <motion.section {...fadeUp} className="relative z-10 px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            ["20+", "Completed Projects"],
            ["2+", "Years Experience"],
            ["100%", "Client Satisfaction"],
          ].map(([number, label]) => (
            <motion.div
              key={label}
              whileHover={{ y: -10, scale: 1.03 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <h3 className="mb-2 text-4xl font-bold">{number}</h3>
              <p className="text-zinc-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="services"
        className="relative z-10 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-purple-300">
              Services
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">What I Do</h2>

            <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
              Building modern digital products with a strong focus on
              performance, scalability and user experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              [
                "⚛️",
                "Frontend Development",
                "Creating fast and responsive interfaces using React, Next.js and modern frontend technologies.",
              ],
              [
                "🎨",
                "UI / UX Design",
                "Designing clean and intuitive user experiences that users enjoy interacting with.",
              ],
              [
                "🚀",
                "Performance Optimization",
                "Optimizing websites for speed, SEO and scalability across all devices.",
              ],
            ].map(([icon, title, text]) => (
              <motion.div
                key={title}
                whileHover={{ y: -10, scale: 1.03 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:bg-white/10"
              >
                <div className="mb-6 text-4xl">{icon}</div>
                <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
                <p className="text-zinc-400">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="about"
        className="relative z-10 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-purple-300">
              About
            </p>

            <h2 className="mb-6 text-4xl font-bold md:text-6xl">
              Clean code. Modern design. Better experience.
            </h2>

            <p className="text-lg leading-8 text-zinc-400">
              I am a frontend developer focused on building responsive,
              accessible and visually polished websites. I enjoy turning ideas
              into clean, functional and high-performance digital products.
            </p>
          </div>

          <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="space-y-6">
              {[
                "Responsive layouts for all devices",
                "Reusable React components",
                "Clean UI with Tailwind CSS",
                "Smooth animations with Framer Motion",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                    ✓
                  </div>
                  <p className="text-zinc-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="projects"
        className="relative z-10 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-purple-300">
              Portfolio
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Featured Projects
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                category: "E-Commerce Platform",
                title: "Modern Shopping Experience",
                text: "Built with Next.js and Tailwind CSS focusing on performance, responsiveness and user experience.",
                image: "/images/project-1.jpg",
              },
              {
                category: "Admin Dashboard",
                title: "Analytics & Data Visualization",
                text: "Clean dashboard interface designed for scalability and real-time monitoring.",
                image: "/images/project-2.jpg",
              },
              {
                category: "AI Landing Page",
                title: "Future-Focused Product Website",
                text: "A modern landing page designed with strong visuals, clear sections and smooth user flow.",
                image: "/images/project-3.jpg",
              },
            ].map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-14">
                    <p className="mb-4 text-purple-300">
                      {project.category}
                    </p>

                    <h3 className="mb-6 text-3xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mb-8 text-zinc-400">{project.text}</p>

                    <button className="rounded-full border border-white/20 px-6 py-3 transition hover:bg-white/10">
                      View Case Study
                    </button>
                  </div>

                  <div className="relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        id="contact"
        className="relative z-10 px-6 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-purple-300">
            Contact
          </p>

          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            Let&apos;s build something great together.
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-zinc-400">
            Open to freelance projects, collaboration and frontend development
            opportunities.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:kosea0155@gmail.com"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-zinc-200"
            >
              Send Email
            </a>

            <a
              href="https://github.com/kosea0155-beep"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-10 text-center text-zinc-500">
        © 2026 Adem Köse. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}