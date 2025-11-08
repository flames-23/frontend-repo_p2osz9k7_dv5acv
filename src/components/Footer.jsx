import { Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-cyan-100/70 text-sm">
            © {new Date().getFullYear()} NEON.NFT — Crafted for the neonverse.
          </p>
          <div className="flex items-center gap-4 text-cyan-100/70">
            <a aria-label="Twitter" href="#" className="hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href="#" className="hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="Github" href="#" className="hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
