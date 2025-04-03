import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log("Auth0 User:", user); // 🐛 Inspect in console

  if (!isAuthenticated) {
    return <p>You need to log in to view your profile.</p>;
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>👤 User Profile</h2>
      <img
        src={user.picture}
        alt="User profile"
        style={{ borderRadius: "50px", height: "80px" }}
      />
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      {/* Display other properties if needed */}
    </div>
  );
};

export default Profile;
