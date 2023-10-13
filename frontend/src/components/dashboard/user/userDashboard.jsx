import React from "react";
import "./user.css";
function UserDashboard() {
  return (
    <div>
      <div className="container">
        <div className="mt-5 text-center alert bg-info text-light">
          User Dashboard
        </div>
        <div className="row">
          {/* display balance */}
          <div className="col-md-8">
            <div className="bal-display-main">
              <div className="bal-display-min">100$</div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="btn btn-success">Trade mode: Active</div>
          </div>
          {/* end display balance */}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
