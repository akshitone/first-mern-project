import React from "react";
import PlaceItem from "./PlaceItem";
import { Link } from "react-router-dom";

const PlaceList = (props) => {
  if (props.places.length === 0) {
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
              <h5 class="mt-1 mb-2">No places found!</h5>
              <p class="mb-0">
                Maybe <Link to="/">create one?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return props.places.map((place) => {
    return <PlaceItem key={place.id} place={place} />;
  });
};

export default PlaceList;
