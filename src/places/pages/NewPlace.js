import React from "react";
import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/Validators";

const NewPlace = () => {
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Place</h4>
              </div>
              <div className="card-body">
                <div className="basic-form">
                  <form>
                    <Input
                      element="input"
                      type="text"
                      label="Place name"
                      placeholder="Enter place name"
                      name="placename"
                      errorText="Please enter a valid place name"
                      validators={[VALIDATOR_REQUIRE()]}
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPlace;
