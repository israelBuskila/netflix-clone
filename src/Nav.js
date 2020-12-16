import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handlesShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handlesShow(true);
      } else handlesShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    // eslint-disable-next-line no-template-curly-in-string
    <div className={`nav ${show && "nav_black"} `}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
