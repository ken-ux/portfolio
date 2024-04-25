import { useParams } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const { name } = useParams();

  return (
    <div className="flex flex-col gap-8">
      <Header />
      {name === undefined && <Hero />}
      {name === "projects" && <Projects />}
      <hr />
      <Footer />
    </div>
  );
}

export default App;
