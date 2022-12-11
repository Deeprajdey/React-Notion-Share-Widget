import React, { useContext, useEffect, useRef } from "react";
import { ContextStore } from "../store/Store";
import "./MembersBoxForm.css";
import MembersBoxSelect from "./MembersBoxSelect";

/**
 * @component This is MembersBoxForm component where users search and invite members
 * @typedef {function} MembersBoxForm
 * @returns {JSX} returns a search bar where you can give access to members and also invite
 */

const MembersBoxForm = () => {
  const [{ inputClicked }, dispatch] = useContext(ContextStore);
  const inputRef = useRef();
  useEffect(() => {
    const handleInputBox = (e) => {
      if (e.key === "/") {
        inputRef.current.focus();
      } else return;
    };
    window.addEventListener("keydown", handleInputBox);
    return () => {
      window.removeEventListener("keydown", handleInputBox);
    };
  }, []);
  return (
    <div>
      {inputClicked ? (
        <MembersBoxSelect
          className={
            inputClicked ? "MembersBoxSelect-show" : "MembersBoxSelect-hidden"
          }
        />
      ) : (
        <div className="MembersBox__form">
          <input
            type="text"
            placeholder="People, emails, groups"
            onFocus={() => dispatch({ type: "INPUT_CLICKED" })}
            ref={inputRef}
          />
          <button>Invite</button>
        </div>
      )}
    </div>
  );
};

export default MembersBoxForm;
