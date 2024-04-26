import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Page Not Found</h1>
      <Link to="/">Back to the homepage.</Link>
    </>
  );
};
export default ErrorPage;
