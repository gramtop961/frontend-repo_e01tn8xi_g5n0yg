import Spline from "@splinetool/react-spline";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#07090c] pt-24">
      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles size={14} className="text-cyan-300" />
            Tech • Interactive • Modern
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Your Name</span>
            <br /> I craft delightful digital experiences.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Full‑stack developer focused on building immersive, human‑centered products. I blend
            performance, accessibility, and playful 3D to tell compelling stories.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* 3D Spline */}
        <div className="relative h-[60vh] w-full sm:h-[70vh] md:h-[75vh] lg:h-[80vh]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />

          {/* Decorative gradient, won’t block interactions */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-transparent" />
        </div>
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />
      </div>
    </section>
  );
}
