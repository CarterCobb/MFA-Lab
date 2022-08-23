import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { fallback } from "../components/SuspenseUI";

const NotFoundPage = () => {
  const { user, logout, isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return fallback;
  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <div>
      <h1>Account Page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default NotFoundPage;
