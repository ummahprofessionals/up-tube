import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { slowFetchJson } from "../utilities";
export const Home = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["apiData"],
    queryFn: () => slowFetchJson("/api").then((json) => json.message),
  });

  const renderContent = () => {
    if (isPending) {
      return <p>Loading, please wait...</p>;
    }

    if (error) {
      return (
        <p>
          Got an error: <b>{error.message}</b>
        </p>
      );
    }

    return (
      <p>
        The message from the API is:
        <span className="api-text"> {data}</span>
      </p>
    );
  };

  return (
    <main>
      <h1>Home page</h1>

      {renderContent()}

      <Link to="/about">Go to About page</Link>
      <br></br>
      <br></br>
      <Link to="/settings">Go to Settings page</Link>
    </main>
  );
};
