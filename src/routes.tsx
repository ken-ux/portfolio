import App from "./App.tsx";
// import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/:name",
    element: <App />,
  },
];

export default routes;
