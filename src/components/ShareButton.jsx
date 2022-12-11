import React, { useCallback, useEffect, useRef } from "react";
import Store from "../store/Store";
import "./ShareButton.css";
import SharingBoxModal from "./SharingBoxModal";

/**
 * @component This is ShareButton component where users can use to share to the other users through links
 * @typedef {function} ShareButton
 * @returns {JSX} it returns a SharingBoxModal component
 */

const ShareButton = () => {
  const sharingBoxModalRef = useRef(null);
  const handleSharingBoxModal = useCallback(() => {
    sharingBoxModalRef.current.openModal();
  }, []);
  useEffect(() => {
    const handleShareBtn = (e) => {
      if (e.code === "Escape") {
        sharingBoxModalRef.current.openModal();
      }
    };
    window.addEventListener("keydown", handleShareBtn);
    return () => {
      window.removeEventListener("keydown", handleShareBtn);
    };
  }, []);
  return (
    <Store>
      <button className="share-button" onClick={handleSharingBoxModal}>
        Share <ion-icon name="share-social-outline"></ion-icon>
      </button>
      <SharingBoxModal ref={sharingBoxModalRef} />
    </Store>
  );
};

export default ShareButton;
