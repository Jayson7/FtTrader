import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import client from "../../loaders/ax";
import { logout } from "../../redux/actions/logoutAction";
import { useNavigate } from "react-router-dom";
import { setUserIsSuperuserNull } from "../../redux/actions/userPositionAction";
function Logout() {
  const isAuthenticated = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await client.post("logout"); // Replace with your API endpoint for logout
      // Perform any necessary local logout actions (e.g., clearing tokens or sessions)
      dispatch(logout());
      dispatch(setUserIsSuperuserNull(false));

      // Redirect the user to the login page or another appropriate page
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle error, e.g., show an error message
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/"); // Redirect to the home page if authenticated
    }
  });

  return (
    <div className="container d-flex flex-column align-items-center py-5">
      <h1 className="mt-5">Logout Page</h1>
      <p>Are you sure you want to log out?</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
