// import { useState } from 'react'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
