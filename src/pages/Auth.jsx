import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { fallback } from "../components/SuspenseUI";
import ReactJson from "@textea/json-viewer";

const AuthPage = () => {
  const { user, logout, isLoading, isAuthenticated, getAccessTokenSilently } =
    useAuth0();
  const [token, setToken] = useState("");

  useEffect(() => {
    getAccessTokenSilently().then(setToken);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) return fallback;
  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="auth-main">
      <h1>
        Account{" "}
        <button className="btn right" onClick={logout}>
          Logout
        </button>
      </h1>

      <p>Explore the user object below:</p>
      <ReactJson src={user} />
      <p>API Access Token (valid for 3 min):</p>
      <p>{token}</p>
      <div className="footer">
        &copy; Carter Cobb 2022. All rights reserved.
      </div>
    </div>
  );
};

export default AuthPage;
