import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserIsSuperuser } from "../../redux/actions/userPositionAction";
import client from "../../loaders/ax";
import { login } from "../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await client.post("login", formData);
      console.log("Login successful!", loginResponse.data);
      // Handle successful login, such as redirecting to another page.
      dispatch(login(loginResponse.data.email));
      const userprofile = loginResponse.data.email;

      const checkSuperuserResponse = await client.get(
        `check_superuser/${userprofile}`
      );
      dispatch(setUserIsSuperuser(checkSuperuserResponse.data.is_superuser));
      console.log(checkSuperuserResponse.data);
      navigate("/");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      // Handle login error, e.g., display an error message.
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // Redirect to the home page if authenticated
    }
  });

  return (
    <div className="container mt-5">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card mt-5">
            <div className="card-header display-4 text-center">FtTrade</div>
            <div className="card-header text-center">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password "
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
