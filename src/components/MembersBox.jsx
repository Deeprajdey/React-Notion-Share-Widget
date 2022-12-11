import React, { useContext, useEffect, useState } from "react";
import "./MembersBox.css";
import MembersBoxForm from "./MembersBoxForm";
import MembersAccess from "./MembersAccess";
import { ContextStore } from "../store/Store";

/**
 * @component This is  MembersBox component
 * @typedef {function}   MembersBox
 * @returns {JSX} returns JSX
 */

const MembersBox = () => {
  const [{ members }, dispatch] = useContext(ContextStore);
  const [invitedUsers, setInvitedUsers] = useState(() =>
    Object.values(members)
  );
  useEffect(() => {
    setInvitedUsers(Object.values(members));
  }, [members]);
  return (
    <>
      <MembersBoxForm />
      <div className="MembersBox__desc">
        <div className="MembersBox__desc-left">
          <img
            src="https://global-uploads.webflow.com/60c0cec90f5782a19af55867/61516da7bff77f7a1bdbb25e_32%20x%2032.png"
            alt="logo"
          />
          <div>
            <h5>Everyone at OSlash</h5>
            <p>25 workspace members</p>
          </div>
        </div>
        <MembersAccess user={"Everyone"} />
      </div>

      {invitedUsers.map((ele) => {
        return (
          <div className="MembersBox__desc" key={ele.id}>
            <div className="MembersBox__desc-left">
              <img src={ele.img} alt="logo" />
              <div>
                <h5>{ele.name}</h5>
              </div>
            </div>
            <MembersAccess user={ele.name} />
          </div>
        );
      })}
    </>
  );
};

export default MembersBox;
