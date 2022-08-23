import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const NotFoundPage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <h1>Home </h1>
      <button
        onClick={() =>
          loginWithRedirect({
            appState: { returnTo: "/account" },
          })
        }
      >
        Login
      </button>
    </div>
  );
};

export default NotFoundPage;
