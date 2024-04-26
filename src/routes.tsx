import App from "./App.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "/about", element: <AboutPage /> },
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
