import { useState } from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

function AddTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const { getAccessTokenSilently } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !date) {
      alert("Please fill in both fields!");
      return;
    }

    const newTask = { title, date };
    try {
      const token = await getAccessTokenSilently();
      await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newTask),
      });
      setTitle("");
      setDate("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group controlId="formTask">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formDate">
              <Form.Label>Day and time</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" variant="primary">Save Task</Button>
      </Form>
    </Container>
  );
}

AddTask.propTypes = {
  onAddTask: PropTypes.func,
};

export default AddTask;
