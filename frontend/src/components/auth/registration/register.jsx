import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import client from "../../loaders/ax";
function Register() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);

  const isSuperuser = useSelector(
    (state) => state.userPositionReducer.isSuperuser
  );

  useEffect(() => {
    if (!isSuperuser) {
      navigate("dashboard");
    }
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.post("register", formData); // Replace with your API endpoint
      console.log("User registered:", response.data);
      setAlert({ type: "success", message: "Registration successful!" });
      // Handle success, e.g., show a success message or redirect the user
    } catch (error) {
      console.error("Registration failed:", error);
      setAlert({
        type: "danger",
        message: "Registration failed. Please check your credentials.",
      });
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card mt-5">
            <div className="card-header display-4 text-center">FtTrade</div>
            <div className="card-header text-center">Register New Trader</div>
            <form onSubmit={handleSubmit} className="py-5 px-4">
              {alert && (
                <div className={`alert alert-${alert.type}`} role="alert">
                  {alert.message}
                </div>
              )}

              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="(min. 8 characters)"
                />
              </div>
              <button type="submit" className="btn btn-primary col-12">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
