import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import { Auth0Provider } from "@auth0/auth0-react";

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

function App() {
  const onRedirectCallback = (appState?: { returnTo?: string }) => {
    console.log("Redirect callback called with appState:", appState);
    window.location.replace(appState?.returnTo || "/dashboard");
  };

  return (
    <Auth0Provider
      domain="dev-da2463l8g0mvkpdx.us.auth0.com"
      clientId="oUlsTOudb2Z0DLs6rYcPgdRyrUuWqqvY"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </Auth0Provider>
  );
}

export default AppWrapper;
