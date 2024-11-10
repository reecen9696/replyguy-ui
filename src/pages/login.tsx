"use client";

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  React.useEffect(() => {
    if (isAuthenticated) {
      console.log("User is already authenticated");
    }
  }, [isAuthenticated]);

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={() => {
          console.log("Redirecting to Auth0 login page...");
          loginWithRedirect().catch((error) => {
            console.error("Login failed:", error);
          });
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
