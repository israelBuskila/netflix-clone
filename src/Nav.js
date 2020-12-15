import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handlesShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scrall", () => {
      if (window.scrollY > 100) {
        handlesShow(true);
      } else handlesShow(false);
    });
    return () => {
      window.removeEventListener("scrall");
    };
  }, []);

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/124011999041155"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
