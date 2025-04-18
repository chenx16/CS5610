import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
    onClick={() => {
      console.log("Login clicked!");
      loginWithRedirect();
    }}
  >
    Log In
  </button>
  
  );
}

export default LoginButton;
