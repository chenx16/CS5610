import { useState } from "react";
import PropTypes from "prop-types";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !date) {
      alert("Please fill in both fields!");
      return;
    }

    // Create a new task object
    const newTask = {
      title,
      date,
    };

    onAddTask(newTask); // Send task to parent (App.jsx)
    
    // Clear input fields
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
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
