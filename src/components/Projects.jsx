import { ExternalLink, Code2 } from "lucide-react";

const PROJECTS = [
  {
    title: "Interactive 3D Landing",
    description:
      "A WebGL‑driven hero experience with Spline, animated micro‑interactions, and responsive performance optimizations.",
    tech: ["React", "Spline", "Framer Motion", "Vite"],
    link: "#",
  },
  {
    title: "Realtime Chat App",
    description:
      "A full‑stack chat with presence, optimistic UI, and end‑to‑end component design system.",
    tech: ["FastAPI", "WebSockets", "MongoDB", "Tailwind"],
    link: "#",
  },
  {
    title: "E‑commerce Dashboard",
    description:
      "Analytics‑first dashboard with server‑driven charts, role‑based access, and lightning‑fast search.",
    tech: ["React", "FastAPI", "MongoDB", "Charts"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#05070a] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Featured Projects</h2>
            <p className="mt-2 max-w-2xl text-white/60">
              A selection of work spanning interactive experiences, product engineering, and systems design.
            </p>
          </div>
          <Code2 className="hidden text-cyan-400 sm:block" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 transition hover:border-cyan-500/30 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)]"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wider text-white/60">
                {p.tech.slice(0, 3).join(" • ")}
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">{p.description}</p>

              <a
                href={p.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
              >
                View project <ExternalLink size={16} />
              </a>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
