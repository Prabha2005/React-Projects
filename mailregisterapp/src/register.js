import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 
const validate = () => {
  let tempErrors = {};
  if (formData.name.length < 5) {
    tempErrors.name = "Name should have at least 5 characters";
  }
  if (!formData.email.includes('@') || !formData.email.includes('.')) {
    tempErrors.email = "Email should contain @ and .";
  }
  else if (formData.password.length < 8) {
    tempErrors.password = "Password should have at least 8 characters";
  }
  setErrors(tempErrors);
  return Object.keys(tempErrors).length === 0;
};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(
        `Form submitted successfully!`
      );
    } else {
      let errorMsg = "";
      Object.values(errors).forEach(err => {
        errorMsg += `${err}\n`;
      });
      alert(errorMsg);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "250px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {/*errors.name && <p style={{ color: "red" }}>{errors.name}</p>*/}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {/*errors.email && <p style={{ color: "red" }}>{errors.email}</p>*/}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {/*errors.password && <p style={{ color: "red" }}>{errors.password}</p>*/}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
