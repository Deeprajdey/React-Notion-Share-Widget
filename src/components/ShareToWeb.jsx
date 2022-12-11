import React, { useState } from "react";
import "./ShareToWeb.css";

/**
 * @component This is ShareToWeb component
 * @typedef {function} ShareToWeb
 * @returns {JSX} it returns JSX
 */

const ShareToWeb = () => {
  const [toggleButton, setToggleButton] = useState(false);
  return (
    <div className="ShareToWeb">
      <div className="ShareToWeb__left">
        <ion-icon name="earth"></ion-icon>
        <div className="ShareToWeb__left-details">
          <h5>Share to web</h5>
          <p>Publish and share link with anyone</p>
        </div>
      </div>

      <button
        className="toggle-btn"
        onClick={() => setToggleButton(!toggleButton)}
      >
        <div
          className={`toggle-pill ${toggleButton ? "toggle-pill-active" : ""} `}
        >
          <div
            className={`toggle-circle ${
              toggleButton ? "toggle-circle-active" : ""
            } `}
          ></div>
        </div>
      </button>
    </div>
  );
};

export default ShareToWeb;
