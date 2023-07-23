import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Stats from "./components/stats/Stats";
import OpenSection from "./components/openSection/OpenSection";
import Cta from "./components/cta/Cta";
import FlowerSection from "./components/flowerSection/FlowerSection";
import Pastries from "./components/pastries/Pastries";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <OpenSection />
      <FlowerSection />
      <Cta />
      <Pastries />
      <Testimonials />
    </>
  );
}

export default App;
