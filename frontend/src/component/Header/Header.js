import React from "react";
import Logout from "../User/Logout/Logout";

const Header = ({ showLogout }) => {
  return (
    <div className="container d-flex justify-content-between align-items-center pt-4">
      <span className="app-header fw-bold fs-2 mx-auto">Radio Archive</span>
      {showLogout && <Logout />}
    </div>
  );
};

export default Header;
