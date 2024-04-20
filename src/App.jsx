import { useState } from "react";
import { Navbar, Hero, About, Contact, Projects } from "./components";

const App = () => {
  const sectionClassName = `h-screen snap-center`;
  return (
    <div className="py-3">
      <section id="Home" className={sectionClassName}>
        <Navbar />
        <Hero />
      </section>
      <section
        id="About"
        className={`${sectionClassName} overflow-y-auto no-scrollbar`}
      >
        <div className="mx-5 md:mx-32 py-10">
          <About />
        </div>
      </section>
      <section id="Experiences" className={`${sectionClassName} mx-32 py-10`}>
        Experiences
      </section>
      <section
        id="Projects"
        className={`${sectionClassName} mx-32 py-10 relative overflow-hidden`}
      >
        <div className="absolute w-full h-full overflow-y-auto no-scrollbar">
          <Projects />
        </div>
      </section>
      <section
        id="Contact"
        className={`${sectionClassName} mx-5 md:mx-32 py-10`}
      >
        <Contact />
      </section>
    </div>
  );
};

export default App;
