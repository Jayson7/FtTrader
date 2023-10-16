import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  const isAuthenticated = useSelector((state) => state.auth.email);
  const isSuperuser = useSelector(
    (state) => state.userPositionReducer.isSuperuser
  );

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

            <div className="row">
              <div className="col-6">
                <div className="badge badge-secondary py-4 px-3">
                  Email: {isAuthenticated}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
