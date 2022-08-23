import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { cookieStorageCache } from "./cacheStore";

export const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

export const Auth0ProviderWithRedirectCallback = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUHT0_AUDIENCE;

  const navigate = useNavigate();

  const onRedirectCallback = (appState) =>
    navigate((appState && appState.returnTo) || window.location.pathname);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      cache={cookieStorageCache}
    >
      {children}
    </Auth0Provider>
  );
};
