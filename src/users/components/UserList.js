import React from "react";

import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <div class="col-xl-12 col-xxl-12 col-lg-12">
        <div class="alert alert-danger left-icon-big alert-dismissible">
          <div class="media">
            <div class="alert-left-icon-big">
              <span>
                <i class="mdi mdi-alert"></i>
              </span>
            </div>
            <div class="media-body">
              <h5 class="mt-1 mb-2">No users found!</h5>
              <p class="mb-0">Again sign up with new user</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return props.users.map((user) => {
    return <UserItem key={user.id} user={user} />;
  });
};

export default UserList;
