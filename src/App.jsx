import { useState } from "react";
import { Navbar, Hero } from "./components";

const App = () => {
  const [sections, setSections] = useState([
    "Hero",
    "Parallax",
    "Services",
    "PortFolio1",
    "PortFolio2",
    "PortFolio3",
  ]);
  const sectionClassName = `h-screen snap-center`;
  return (
    <div>
      <section id="Home" className={sectionClassName}>
        <Navbar />
        <Hero />
      </section>
      <section id="Services" className={sectionClassName}>
        Services
      </section>
    </div>
  );
};

export default App;
