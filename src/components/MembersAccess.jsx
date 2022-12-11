import React, { useCallback, useContext, useState } from "react";
import { ContextStore } from "../store/Store";
import "./MembersAccess.css";

/**
 * @component This is MemberAccess component
 * @typedef {function}  MembersAccess
 * @param {string} user - user is the username of members
 * @returns {JSX} returns JSX
 */



const MembersAccess = ({ user }) => {
  const [clickedAccess, setClickedAccess] = useState(false);
  const [{ accessData }, dispatch] = useContext(ContextStore);

  const handleAccess = useCallback(
    (e) => {
      dispatch({
        type: "ACCESS_DATA",
        payload: { access: e.target.innerText, user: user },
      });
      setClickedAccess(false);
    },
    [user]
  );
  return (
    <div className="MembersAccess">
      <div
        className="MembersAccessBtn"
        onClick={() => setClickedAccess(!clickedAccess)}
      >
        <span>{accessData[user] || "No access"}</span>
        <ion-icon name="chevron-down-outline"></ion-icon>
      </div>
      {clickedAccess && (
        <>
          <div className="Access" onClick={handleAccess}>
            <li>Full access</li>
            <li>Can edit</li>
            <li>Can view</li>
            <li>No access</li>
          </div>
        </>
      )}
    </div>
  );
};

export default MembersAccess;
