import App from "./App.tsx";
// import Hero from "./components/Hero.tsx";
// import Projects from "./components/Projects.tsx";
// import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    // children: [
    //   { path: "/", element: <Hero /> },
    //   { path: "projects", element: <Projects /> },
    // ],
    // errorElement: <ErrorPage />,
  },
  {
    path: "/:name",
    element: <App />,
  },
];

export default routes;
