import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!title || !date) {
      alert("Please fill in both fields!");
      return;
    }

    const newTask = { title, date };

    try {
      const token = await getAccessTokenSilently(); // ✅ Get token from Auth0

      await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Add the token here
        },
        body: JSON.stringify(newTask),
      });

      // Optionally reset input fields
      setTitle("");
      setDate("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

// Define PropTypes
AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;
