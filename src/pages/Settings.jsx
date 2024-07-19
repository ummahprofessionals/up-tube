import { Link } from "react-router-dom";
import { fetchJson } from "../utilities";

export const Settings = () => {
  return (
    <main>
      <h2>Settings Page</h2>
      <p>This is where the settings page will be.</p>
      <Link to="/">Go to the Home page</Link>

      <button
        onClick={() => {
          alert("you have clicked me");
        }}
      >
        Click me
      </button>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const username = formData.get("username");
          const password = formData.get("password");

          fetchJson("/api", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          }).then((data) => {
            console.log(data);
          });
        }}
      >
        <h3>Update your settings</h3>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />

        <br />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
