import React, { useState, useEffect, useRef } from "react";
import "./css/signin.css";

const SignIn = () => {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation or submission logic here
  };

  return (
    <div>
      <div className="container-lg">
        <div className="head">
          <img src="./images/chatbot.png" alt="Hostel Chat Bot Logo" />
          <h1>Hostel Chat Bot</h1>
        </div>
        <div className="signin">
          <h2>Sign In To Your Account</h2>

          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <label htmlFor="enrollmentNumber" className="form-label">
                Enrollment Number
              </label>
              <input
                type="text"
                className="form-control"
                id="enrollmentNumber"
                name="enrollmentnumber"
                placeholder="Enter Your Enrollment Number"
                required
                value={enrollmentNumber}
                onChange={(e) => setEnrollmentNumber(e.target.value)}
              />
            </div>
            <div className="my-5">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
