import React, {
  useCallback,
  useContext,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { usefetchData } from "../customHook/fetchData";
import { ContextStore } from "../store/Store";
import CopyLink from "./CopyLink";
import MembersAccess from "./MembersAccess";
import "./MembersBoxSelect.css";

/**
 * @component This is MembersBoxSelect component where users can select members and whom they want to invite or add to the list
 * @typedef {function} MembersBoxSelect
 * @param {string} className- its provides class styles to the component
 * @returns {JSX} returns a list of members where users can find and select groups and people.
 */

const MembersBoxSelect = ({ className }) => {
  const [_, dispatch] = useContext(ContextStore);
  const [fetchedData, error] = usefetchData();
  const [members, setMembers] = useState([{}]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [clickedMember, setClickedMember] = useState(null);
  const inputRef = useRef();

  const [searchText, setSearchText] = useState("");
  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }, []);
  const deferredSearch = useDeferredValue(searchText);
  const handleClickedMembers = useCallback(
    (e) => {
      if (!e.target.closest(".members-data")) return;
      const ele = e.target.closest(".members-data");
      clickedMember && clickedMember.classList.remove("members-data-select");
      ele.classList.add("members-data-select");
      setClickedMember(ele);
    },
    [clickedMember]
  );
  const handleInviteMember = useCallback(() => {
    const member = fetchedData.filter(
      (member) => member.name === selectedMember.querySelector("h5").innerText
    );
    dispatch({
      type: "MEMBERS",
      payload: { id: member[0]["id"], info: member[0] },
    });
    dispatch({ type: "INPUT_CLOSE" });
  });
  const filteredData = (data) => {
    const filtered = [{ persons: [], groups: [] }];
    data.forEach((info) => {
      filtered[0][info.type].push(info);
    });
    return filtered;
  };
  useEffect(() => {
    if (fetchedData.length === 0) return;

    const filteredInput =
      deferredSearch !== "" &&
      fetchedData.filter((ele) => {
        return ele.name.toLowerCase().includes(searchText.toLowerCase());
      });

    const updatedData =
      deferredSearch === ""
        ? filteredData(fetchedData)
        : filteredData(filteredInput);
    setMembers(updatedData);
  }, [fetchedData, deferredSearch]);
  useEffect(() => {
    const handleMember = (e) => {
      if (e.code === "Enter") {
        setSelectedMember(clickedMember);
      }
    };
    window.addEventListener("keydown", handleMember);
    return () => {
      window.removeEventListener("keydown", handleMember);
    };
  }, [clickedMember]);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className={`MembersBoxSelect ${className}`}>
      <div className="MembersBoxSelect__heading">
        {!selectedMember ? (
          <input
            type="text"
            placeholder="Search emails, names or groups"
            value={searchText}
            onChange={handleSearch}
            ref={inputRef}
          />
        ) : (
          <span
            className="MembersBoxSelect-pill"
            onClick={() => {
              clickedMember &&
                clickedMember.classList.remove("members-data-select");
              dispatch({
                type: "REMOVE_ACCESS_DATA",
                payload: {
                  user: selectedMember.querySelector("h5").innerText,
                },
              });
              setSelectedMember(null);
            }}
          >
            {selectedMember.querySelector("h5").innerText} x
          </span>
        )}
        <div>
          <MembersAccess
            user={
              selectedMember && selectedMember.querySelector("h5").innerText
            }
          />
          <button onClick={handleInviteMember}>Invite</button>
        </div>
      </div>
      {members.length !== 0 && (
        <div className="members-box-select" onClick={handleClickedMembers}>
          {members[0]["persons"] && members[0]["persons"].length !== 0 && (
            <h5>Select a person</h5>
          )}
          {members.map((ele) =>
            ele["persons"]
              ? ele["persons"].map(({ id, img, name }) => (
                  <div key={id} className="members-data">
                    <img src={img} alt="img" />
                    <h5>{name}</h5>
                  </div>
                ))
              : null
          )}
          {members[0]["groups"] && members[0]["groups"].length !== 0 && (
            <h5>Select a group</h5>
          )}
          {members.map((ele) =>
            ele["groups"]
              ? ele["groups"].map(({ id, img, name }) => (
                  <div key={id} className="members-data">
                    <img src={img} alt="img" />
                    <h5>{name}</h5>
                  </div>
                ))
              : null
          )}
        </div>
      )}
      <CopyLink showLink={false} />
    </div>
  );
};

export default MembersBoxSelect;
