import { Sparkles, Wallet, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 select-none">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-emerald-400 animate-pulse shadow-[0_0_25px_rgba(168,85,247,0.7)]" />
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 font-extrabold tracking-widest text-xl drop-shadow-[0_0_12px_rgba(34,211,238,0.75)]">
            NEON.NFT
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-cyan-100/80">
          <a href="#explore" className="hover:text-white transition-colors">Explore</a>
          <a href="#trending" className="hover:text-white transition-colors">Trending</a>
          <a href="#artists" className="hover:text-white transition-colors">Artists</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-4 py-2 text-cyan-100/90 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all">
            <Wallet className="h-4 w-4 text-cyan-300" />
            <span>Connect</span>
          </button>
          <button className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-black font-semibold shadow-[0_0_35px_rgba(34,211,238,0.45)] hover:brightness-110 transition-all">
            <Rocket className="h-4 w-4" />
            <span>Mint</span>
          </button>
        </div>
      </div>
    </header>
  );
}
