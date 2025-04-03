import { withAuthenticationRequired } from "@auth0/auth0-react";

export default function ProtectedRoute({ Component }) {
  const WrappedComponent = withAuthenticationRequired(Component, {
    onRedirecting: () => (
      <div style={{ marginTop: "2rem" }}>
        <p>🔒 Redirecting to login...</p>
      </div>
    ),
  });

  return <WrappedComponent />;
}
