import React from "react";
import { useSelector, useDispatch } from "react-redux";
import client from "../../loaders/ax";
import { LOGOUT } from "../../redux/actions/logoutAction";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await client.post("logout"); // Replace with your API endpoint for logout
      // Perform any necessary local logout actions (e.g., clearing tokens or sessions)
      dispatch(LOGOUT());
      // Redirect the user to the login page or another appropriate page
      navigate("login");
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div className="container">
      <h1>Logout Page</h1>
      <p>Are you sure you want to log out?</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
