// src/components/Form.js
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios"; // Install with: npm install axios

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send data to backend
      await axios.post("http://localhost:5000/submit", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", password: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container justify-content-center m5 mb-3">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-outline-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
