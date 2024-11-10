import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    console.log("Checking authentication status...");
    return <div>Loading...</div>; // Optionally show a loading indicator while checking authentication
  }

  if (!isAuthenticated) {
    console.log("User is not authenticated. Redirecting to /login...");
    return <Navigate to="/login" />;
  }

  console.log("User is authenticated. Rendering protected component.");
  return children;
};

export default RequireAuth;
