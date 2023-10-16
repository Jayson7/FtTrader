import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  const isAuthenticated = useSelector((state) => state.auth.email);
  const isSuperuser = useSelector(
    (state) => state.userPositionReducer.isSuperuser
  );
  const username = useSelector((state) => state.auth.username);

  return (
    <div>
      {isSuperuser ? (
        <div>
          <div className="container">
            <div className="mt-5 text-center alert bg-info text-light">
              Admin Dashboard
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="container">
            <div className="mt-5 text-center alert bg-info text-light">
              Dashboard
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
