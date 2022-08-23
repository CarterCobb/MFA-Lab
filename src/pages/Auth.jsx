import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { fallback } from "../components/SuspenseUI";
import ReactJson from "@textea/json-viewer";

const NotFoundPage = () => {
  const { user, logout, isLoading, isAuthenticated } = useAuth0();

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
      <div className="footer">
        &copy; Carter Cobb 2022. All rights reserved.
      </div>
    </div>
  );
};

export default NotFoundPage;
