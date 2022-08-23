import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Auth0ProviderWithRedirectCallback,
  ProtectedRoute,
} from "./auth/Auth0Provider";

// Code Spliting
import ErrorBoundary from "./components/ErrorBoundry";
import { fallback } from "./components/SuspenseUI";

// General Pages
const Home = lazy(() => import("./pages/Home"));

// Auth Pages
const Auth = lazy(() => import("./pages/Auth"));

// Error Pages
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback}>
        <Router>
          <Auth0ProviderWithRedirectCallback>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/account"
                element={<ProtectedRoute component={Auth} />}
                onredirecting={fallback}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Auth0ProviderWithRedirectCallback>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
