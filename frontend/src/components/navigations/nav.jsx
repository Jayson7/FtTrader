import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "../auth/loginAuth/login";
import { useSelector } from "react-redux";

import NoPage from "../Nopage/nopage";
import AdminDashboard from "../dashboard/admin/adminDashboard";
import UserDashboard from "../dashboard/user/userDashboard";
import App from "../../App";

function Navigator() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.username);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={"/"}>
          FtTrade
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {isAuthenticated ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"dashboard"}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  Trade
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  Logout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"dashboard"}>
                  {username}
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  About
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="/user_dashboard" element={<UserDashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default Navigator;
