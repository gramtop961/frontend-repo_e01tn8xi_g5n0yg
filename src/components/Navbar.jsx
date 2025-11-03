import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
          <a href="#home" className="text-xl font-semibold tracking-tight text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">Flames</span>
            .Portfolio
          </a>

          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

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
              href="#contact"
              className="rounded-xl border border-white/10 p-2 text-white/80 hover:text-white"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
