import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="m-auto flex min-h-screen max-w-screen-xl flex-col justify-between p-8 md:px-24">
      <Header />
      <Outlet />
      <div className="mt-6 flex flex-col gap-6">
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
