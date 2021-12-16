import React, { useState, useEffect } from "react";
import "./index.css";

function Nav() {
  const [show, handleShow] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
        className="nav_logo"
      />
      <img
        src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        alt="user"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
