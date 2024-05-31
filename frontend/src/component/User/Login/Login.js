import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../Redux/actions/authActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("formData", formData);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(formData, navigate));
    } catch (error) {
      alert("Login failed. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row min-vh-100 d-flex justify-content-center align-items-center ">
        <Header showLogout={false} />
        <form
          onSubmit={handleSubmit}
          className="rounded shadow p-5 user-login needs-validation"
          novalidate
        >
          <h3>Login</h3>
          <div className="form-row">
            <div className="form-group mt-4 has-validation">
              <input
                type="text"
                name="username"
                value={formData.username}
                className="form-control required"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
                placeholder="User Name"
                onChange={handleChange}
              />
              <div class="invalid-feedback">Username is required.</div>
            </div>

            <div className="form-group mt-4 has-validation">
              <input
                type="password"
                name="password"
                value={formData.password}
                className="form-control required"
                id="validationCustomPassword"
                aria-describedby="inputGroupPrepend"
                required
                placeholder="Password"
                autoComplete="false"
                onChange={handleChange}
              />
              <div class="invalid-feedback">Password is required</div>
            </div>
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div
            className="login-link mt-4 mb-4"
            style={{ textAlign: "center", fontSize: "13px" }}
          >
            Don't have an account?{" "}
            <Link
              to="/registration"
              style={{
                textAlign: "center",
                fontSize: "13px",
                marginLeft: "12px",
              }}
              className="text-light"
            >
              Register now !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
