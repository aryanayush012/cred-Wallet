import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.handleAlert("Account Successfully created", "success");
    } else {
      props.handleAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="row">
      <div className="mt-3  col-md-4 offset-md-3">
        <h2>Sign Up To Continue</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mb-3 col-6 col-md-4 offset-md-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            // value={credentials.email}
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 mb-3 col-6 col-md-4 offset-md-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            // value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 mb-3 col-6 col-md-4 offset-md-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            // value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
            required
            minLength={5}
          />
        </div>
        <div className="mb-3 mb-3 col-6 col-md-4 offset-md-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            // value={credentials.password}
            onChange={onChange}
            name="cpassword"
            id="cpassword"
            required
            minLength={5}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-3 col-6 col-md-4 offset-md-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
