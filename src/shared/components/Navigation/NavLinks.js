import React from "react";
import { Link } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <div className="dlabnav">
      <div className="dlabnav-scroll">
        <ul className="metismenu" id="menu">
          <li>
            <Link className="has-arrow ai-icon" to="/weae">
              <i className="flaticon-381-networking"></i>
              <span className="nav-text">Places</span>
            </Link>
            <ul>
              <li>
                <Link to="/places/new">Add places</Link>
              </li>
              <li>
                <Link to="/asd">View places</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="" className="ai-icon">
              <i className="flaticon-381-settings-2"></i>
              <span className="nav-text">All user</span>
            </Link>
          </li>
        </ul>
        <Link
          className="add-menu-sidebar d-block"
          to="/sdasd"
          data-toggle="modal"
          data-target="#addOrderModalside"
        >
          + Add place
        </Link>
        <div className="copyright">
          <p>
            <strong>Akshit Mithaiwala</strong> © 2020 All Rights Reserved
          </p>
          <p>
            Made with <span className="heart"></span> by akshitone
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
