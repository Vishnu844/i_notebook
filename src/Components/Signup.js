import "../App.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  let fullNameInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();

  let collectAndSendToServer = async () => {
    let reqOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        fullname: fullNameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value
      }),
    };

    let rawData = await fetch(
      "http://localhost:3333/api/auth/createuser",
      reqOptions
    );

    let convertedData = await rawData.json();

    console.log(convertedData);
  };
  return (
    <div className="signup-form">
      <form>
        <h2>Sign Up</h2>
        <p>Please fill in this form to create an account!</p>
        <hr />
        <div className="form-group">
          <div className="row">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                name="full_name"
                ref={fullNameInputRef}
                placeholder="Full Name"
                required="required"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            ref={emailInputRef}
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="confirm_password"
            ref={passwordInputRef}
            placeholder="Confirm Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <button
            onClick={() => {
              collectAndSendToServer();
            }}
            type="button"
            className="btn btn-primary btn-lg"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="hint-text">
        Already have an account? <Link to={"/login"}>Login here</Link>
      </div>
    </div>
  );
};

export default Signup;
