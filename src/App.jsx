import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#07090c] font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
