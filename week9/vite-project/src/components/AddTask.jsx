import { useState } from "react";

function AddTask() {
  // State variables for input fields
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // Handle input changes
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Create a task object
    const newTask = {
      title: title,
      date: date,
    };

    console.log("New Task Submitted:", newTask); // Log to console

    // Clear input fields after submission
    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input type="text" value={date} onChange={handleDateChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default AddTask;
