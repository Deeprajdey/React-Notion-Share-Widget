import React, { useContext } from "react";
import { ContextStore } from "../store/Store";
import "./CopyLink.css";

/**
 * @component This is CopyLink component where you can used it to share links
 * @typedef {function} CopyLink
 * @param {boolean} showLink - Either you can show or hide link
 * @returns {JSX} returns JSX
 */

const CopyLink = ({ showLink }) => {
  const [_, dispatch] = useContext(ContextStore);
  return (
    <div className="CopyLink">
      <div className="CopyLink__left">
        <ion-icon name="help-circle-outline"></ion-icon>
        <p>learn more about sharing</p>
      </div>
      <div className="CopyLink__right">
        {showLink ? (
          <>
            <ion-icon name="link-outline"></ion-icon>
            <h5>Copy link</h5>
          </>
        ) : (
          <button
            className="cancelBtn"
            onClick={() => dispatch({ type: "INPUT_CLOSE" })}
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};

export default CopyLink;
