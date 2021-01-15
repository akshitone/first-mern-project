import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    { id: "u1", name: "Akshit Mithaiwala", image: "01.jpg", places: 3 },
    { id: "u2", name: "Viral Shastri", image: "02.jpg", places: 5 },
    { id: "u3", name: "Shrushti Jagtap", image: "03.jpg", places: 1 },
  ];
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-xxl-12 col-lg-12">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="navpills-1"
                role="tabpanel"
              >
                <div
                  className="row loadmore-content"
                  id="RecentActivitiesContent"
                >
                  <UserList users={USERS} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
