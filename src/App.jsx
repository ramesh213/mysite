
import React from "react";
import { Home, Navbar, About, Services, Projects, Contact, Footer } from "./components/index";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      {/* Home Section */}
      <section id="home" className=" w-full">
        <Home />
      </section>

      <section id="about" className="w-full">
        <About />
      </section>

      {/* <section id="services">
        <Services />
      </section> */}

      {/* <section id="portfolio">
        <Projects />
      </section> */}

      {/* <section id="contact">
        <Contact />
      </section>  */}

      {/* <section id="footer">
        <Footer />
      </section>  */}
    </div>
  );
}

export default App;
