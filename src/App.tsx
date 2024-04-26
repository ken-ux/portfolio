import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <Outlet />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
