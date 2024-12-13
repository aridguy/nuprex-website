import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <main>
      <div
        className="d-flex align-items-center space-around
      justify-content-between p-4 "
      >
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            width="70"
            className="d-inline-block align-top cursor-pointer"
            alt="nuprex logo"
          />
        </a>
        <button
          className="ml-auto brandFont"
          style={{
            background: "#FF6503",
            color: "white",
            border: "none",
            outline: "none",
            borderRadius: "8px",
            width: "144px",
            height: "46px",
          }}
        >
          Get Started
        </button>
      </div>
    </main>
  );
};

export default Navbar;
