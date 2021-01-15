import React from "react";
import { Link } from "react-router-dom";
import Modal from "../../shared/components/UIElements/Modal";

const PlaceItem = (props) => {
  return (
    <div className="col-xl-6">
      <div className="card mb-3">
        <img
          className="card-img-top img-fluid"
          src="/images/card/4.jpg"
          alt=""
        />
        <div className="card-header">
          <h5 className="card-title">{props.place.title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text text-justify">{props.place.description}</p>
          <p className="card-text small">
            <dt>{props.place.address}</dt>
          </p>
          <div className="card-text">
            {/* <Link to="#" className="btn btn-primary shadow btn-xs sharp mr-2">
              <i className="fa fa-location-arrow"></i>
            </Link> */}
            <Modal
              placeAddress={props.place.address}
              placeCoordinates={props.place.coordinates}
            />
            <Link
              to={`/places/${props.place.id}`}
              className="btn btn-secondary shadow btn-xs sharp mr-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>
            <Link to="#" className="btn btn-danger shadow btn-xs sharp mr-2">
              <i className="fa fa-trash"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
