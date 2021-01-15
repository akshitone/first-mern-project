import React from "react";
import Map from "./Map";

const ModalOverlay = (props) => {
  return (
    <div className="modal fade" id="exampleModalCenter">
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.placeData.placeAddress}</h5>
            <button type="button" className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Map center={props.placeData.placeCoordinates} zoom={16} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger light"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-primary shadow btn-xs sharp mr-2"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <i className="fa fa-location-arrow"></i>
      </button>
      <ModalOverlay placeData={props} />
    </React.Fragment>
  );
};

export default Modal;
