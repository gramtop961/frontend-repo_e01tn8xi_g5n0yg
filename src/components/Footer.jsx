import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-[#07090c] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Let’s build something great</h3>
            <p className="mt-2 max-w-lg text-white/70">
              I’m currently open to new opportunities, collaborations, and speaking engagements. Drop a line and
              let’s talk about your next idea.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              Say hello
            </a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 p-2 text-white/80 hover:text-white"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 p-2 text-white/80 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="rounded-xl border border-white/10 p-2 text-white/80 hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>
            Built with React + Tailwind. 3D by Spline. Theme: tech • portfolio • interactive • playful • modern
          </p>
        </div>
      </div>

      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-blue-600/10 blur-2xl" />
      </div>
    </footer>
  );
}
