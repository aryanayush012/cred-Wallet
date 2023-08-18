import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      " https://beautiful-shawl-wasp.cyclic.cloud/api/auth/login",
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
    <div className="row">
      <div className="container text-center">
        <h2>Login To Continue</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container col-lg-6 col-md-12 col-sm-12 text-light">
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
        <div className="container col-lg-6 col-md-12 col-sm-12 text-light">
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
        <div className="container text-light my-3 text-center col-sm-12 col-md-12">
          <button
            type="submit"
            className="btn btn-primary btn-block my-3"
            style={{ width: "48%" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
