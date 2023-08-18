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
    const response = await fetch(
      ` https://beautiful-shawl-wasp.cyclic.cloud/api/auth/createuser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
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
      <div className="container text-center">
        <h2>Sign Up To Continue</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container col-lg-6 col-md-12 col-sm-12 text-light">
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
        <div className="container col-lg-6 col-md-12 col-sm-12 text-light">
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
        <div className="container col-lg-6 col-md-12 col-sm-12 text-light">
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
        <div className="container col-lg-6 col-md-12 col-sm-12 text-light">
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
        <div className="container text-center my-3">
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

export default Signup;
