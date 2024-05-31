import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../Redux/actions/authActions";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formdata, setFormdata] = useState({
    firstName: "",
    lastName: "",
    username: "",
    role: "ADMIN",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(registerUser(formdata, navigate));
    } catch (error) {
      alert("Registration failed. Please try again.");
      console.error("Error during login:", error);
    }
  };

  const onChangeHandle = (e) => {
    console.log("formdata", formdata);
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row min-vh-100 d-flex justify-content-center align-items-center ">
        <form className="g-3 rounded shadow p-5" onSubmit={handleSubmit}>
          <h3>Registration</h3>
          <div className="form-row">
            <div className="form-group mt-4">
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="inputFirstName"
                placeholder="First Name"
                value={formdata.firstName}
                onChange={onChangeHandle}
                required
              />
            </div>
            <div className="form-group mt-4">
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="inputSecondName"
                placeholder="Last Name"
                value={formdata.lastName}
                onChange={onChangeHandle}
                required
              />
            </div>
            <div className="form-group mt-4">
              <input
                type="text"
                name="username"
                className="form-control"
                id="inputUserName"
                placeholder="User Name"
                value={formdata.username}
                onChange={onChangeHandle}
                required
              />
            </div>
            <div className="form-group mt-4">
              <input
                type="password"
                name="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={formdata.password}
                onChange={onChangeHandle}
                required
              />
            </div>
            <div className="form-group d-flex mt-4">
              <select
                name="role"
                className="form-select form-select rounded"
                aria-label="Default select example"
                value={formdata.role}
                onChange={onChangeHandle}
                required
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
          </div>
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          <div className="login-link mt-4 mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-light">
              Login now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
