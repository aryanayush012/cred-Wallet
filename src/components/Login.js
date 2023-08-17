import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://cred-wallet.onrender.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      props.handleAlert("Logged in Successfully", "success");
      history.push("/");
    } else {
      props.handleAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="row justify-content-center my-3"
      style={{ paddingLeft: "13%" }}
    >
      <div className="mt-3 col-6 ">
        <h2>Login To Continue</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 col-6 col-md-4 offset-md-3 text-light">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 mb-3 col-6 col-md-4 offset-md-3 text-light">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary col-sm-4 offset-sm-3"
          style={{ marginBottom: "40px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
