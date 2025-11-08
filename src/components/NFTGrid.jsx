import { Heart, Sparkles } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Cosmic Drifter #108",
    author: "@astro-noir",
    image:
      "https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=1600&auto=format&fit=crop",
    price: "1.8 ETH",
  },
  {
    id: 2,
    title: "Neon Mirage #42",
    author: "@holo-crafter",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    price: "2.4 ETH",
  },
  {
    id: 3,
    title: "Holographic Bloom #77",
    author: "@liquidlight",
    image:
      "https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=1600&auto=format&fit=crop",
    price: "0.95 ETH",
  },
  {
    id: 4,
    title: "Aurora Circuit #12",
    author: "@plasmatic",
    image:
      "https://images.unsplash.com/photo-1462332420958-a05d1e002413?q=80&w=1600&auto=format&fit=crop",
    price: "1.2 ETH",
  },
];

export default function NFTGrid() {
  return (
    <section id="explore" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-emerald-200">
              Trending NFTs
            </h2>
            <p className="mt-2 text-cyan-100/75">Hand‑picked drops from the neonverse.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-white/5 px-4 py-2 text-fuchsia-100/90 backdrop-blur-md hover:bg-white/10 transition-all">
            <Sparkles className="h-4 w-4" />
            Refresh feed
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((nft) => (
            <article
              key={nft.id}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:shadow-[0_0_50px_rgba(217,70,239,0.25)] transition-all"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white/95">{nft.title}</h3>
                    <p className="text-xs text-cyan-100/70">{nft.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-cyan-100/70">Price</p>
                    <p className="font-semibold text-cyan-200">{nft.price}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-3 py-1.5 text-black text-sm font-semibold shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:brightness-110 transition-all">
                    Collect
                  </button>
                  <button className="inline-flex items-center gap-1 rounded-full border border-cyan-400/30 bg-white/5 px-2.5 py-1 text-cyan-100/80 hover:bg-white/10">
                    <Heart className="h-4 w-4 text-fuchsia-300" />
                    <span className="text-xs">Like</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
