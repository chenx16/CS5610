import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SignupButton from "./SignupButton";

const AuthenticationButton = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <img
        src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg"
        alt="Loading..."
        style={{ height: "40px" }}
      />
    );
  }

  // Show Logout if logged in, otherwise show Login + Signup
  return isAuthenticated ? (
    <LogoutButton />
  ) : (
    <div style={{ display: "flex", gap: "1rem" }}>
      <LoginButton />
      <SignupButton />
    </div>
  );
};

export default AuthenticationButton;
