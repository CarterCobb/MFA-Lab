import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="home-main">
      <h1>Home </h1>
      <p>
        <b>This is the MFA Lab!!</b>
        <br />
        <br />
        It uses Auth0 to authenticate and keep track of users. To test out the
        flow, login or create an account:
      </p>
      <button
        className="btn"
        onClick={() =>
          loginWithRedirect({
            appState: { returnTo: "/account" },
          })
        }
      >
        Login
      </button>
      <div className="footer">
        &copy; Carter Cobb 2022. All rights reserved.
      </div>
    </div>
  );
};

export default HomePage;
