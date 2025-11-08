import Spline from "@splinetool/react-spline";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Neon gradient overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.18),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/50 bg-black/30 px-3 py-1 text-fuchsia-200/90 backdrop-blur-md shadow-[0_0_40px_rgba(217,70,239,0.35)]">
            <Sparkles className="h-4 w-4" />
            Neon Futurism NFT Hub
          </div>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.75)]">
              Discover, Collect & Showcase
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-fuchsia-400 to-emerald-300 drop-shadow-[0_0_16px_rgba(217,70,239,0.6)]">
              Next‑Gen Digital Art
            </span>
          </h1>
          <p className="mt-5 text-cyan-100/80 max-w-xl">
            Dive into a cosmic gallery of rare collectibles. Ride the trippy galaxy
            rollercoaster and curate a neon portfolio that glows.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#explore" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-black font-semibold shadow-[0_0_45px_rgba(34,211,238,0.45)] hover:brightness-110 transition-all">
              Explore Drops
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#mint" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-5 py-3 text-cyan-100/90 backdrop-blur-md hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all">
              Start Minting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
