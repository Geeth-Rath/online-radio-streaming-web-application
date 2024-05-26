import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser, fetchAllUsers } from "../Redux/Slice/userSlice";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Registration = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const users = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, [dispatch]);

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   const existingUsernames = users.data.map((user) => user.username);
  // const existingEmails = users.data.map((user) => user.email);

  // if (existingUsernames.includes(formdata.username)) {
  //   alert("Username already exists. Please choose a different username.");
  //   return;
  // }

  // if (existingEmails.includes(formdata.email)) {
  //   alert("Email already exists. Please use a different email.");
  //   return;
  // }

  //   dispatch(registerUser(formdata)).then(() => {
  //     alert("Registration successful. You can now login.");
  //     navigate("/login");
  //   })
  //   .catch((error) => {
  //     alert(
  //       "Username already exists. Please choose a different username."
  //     );
  //   });
  // };

  // const [formdata, setFormdata] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const onChangeHandle = (e) => {
  //   setFormdata({
  //     ...formdata,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(formdata);
  // };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="row min-vh-100 d-flex justify-content-center align-items-center ">
        <Header />
        <form
          class=" g-3 rounded shadow p-5"
          // onSubmit={handlesubmit}
        >
          <h3>Registration</h3>
          <div class="form-row ">
            <div class="form-group mt-4">
              <input
                type="text"
                name="name"
                // value={formdata.name}
                class="form-control "
                id="inputName"
                placeholder="Name"
                // onChange={onChangeHandle}
              />
            </div>
            <div class="form-group mt-4">
              <input
                type="text"
                name="username"
                // value={formdata.username}
                class="form-control"
                id="inputUserName"
                placeholder="userName"
                // onChange={onChangeHandle}
              />
            </div>
            <div class="form-group col mt-4">
              <input
                type="email"
                name="email"
                // value={formdata.email}
                class="form-control"
                id="inputEmail4"
                placeholder="email"
                // onChange={onChangeHandle}
              />
            </div>
            <div class="form-group mt-4 ">
              <input
                type="password"
                name="password"
                // value={formdata.password}
                class="form-control"
                id="inputpassword"
                placeholder="Password"
                autocomplete="false"
                // onChange={onChangeHandle}
              />
            </div>
          </div>

          <div class="d-grid mt-4">
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </div>
          <div
            className="login-link mt-4 mb-4"
            style={{ textAlign: "center", fontSize: "13px" }}
          >
            Already have an account?
            <Link
              to="/login"
              style={{
                textAlign: "center",
                fontSize: "13px",
                marginLeft: "12px",
              }}
              className="text-light"
            >
              Login now !
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;