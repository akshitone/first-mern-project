import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  return (
    <div className="col-xl-4 col-xxl-6 col-sm-6">
      <div className="card contact-bx">
        <div className="card-body">
          <div className="media">
            <div className="image-bx mr-3">
              <img
                src="/images/users/13.jpg"
                alt=""
                className="rounded-circle"
                width="90"
              />
              <span className="active"></span>
            </div>
            <div className="media-body">
              <h6 className="fs-20 font-w600 mb-0">
                <Link to={`/${props.user.id}/places`} className="text-black">
                  {props.user.name}
                </Link>
              </h6>
              <p className="fs-14">
                {props.user.places}{" "}
                {props.user.places === 1 ? "Place" : "Places"}
              </p>
              <ul>
                <li>
                  <Link to="/fdssd">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/edas">
                    <i className="fa fa-video-camera" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/dsad">
                    <i className="las la-sms"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <li>
  //     <div>
  //       <h1>
  //         {props.user.name}- {props.user.places}
  //       </h1>
  //       <h3>{props.user.places === 1 ? "Place" : "Places"}</h3>
  //     </div>
  //   </li>
  // );
};

export default UserItem;
