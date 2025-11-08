import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NFTGrid from "./components/NFTGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_600px_at_120%_-10%,rgba(34,211,238,0.15),transparent),radial-gradient(700px_500px_at_-10%_120%,rgba(217,70,239,0.18),transparent)]" />

      <Navbar />
      <Hero />
      <NFTGrid />
      <Footer />
    </div>
  );
}

export default App;
