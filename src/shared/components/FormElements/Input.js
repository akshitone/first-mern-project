import React, { useReducer } from "react";
import { validate } from "../../util/Validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };
  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        className="form-control"
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        className="form-control"
        onChange={changeHandler}
        onBlur={touchHandler}
      >
        {inputState}
      </textarea>
    );
  return (
    <div className="form-group row ">
      <label className="col-sm-2 col-form-label" htmlFor={props.id}>
        {props.label}
      </label>
      <div className="col-sm-10">
        {element}
        <div
          id="val-email-error"
          className="invalid-feedback animated fadeInUp"
          style={{ display: "block" }}
        >
          {!inputState.isValid && inputState.isTouched && props.errorText}
        </div>
      </div>
    </div>
  );
};

export default Input;
