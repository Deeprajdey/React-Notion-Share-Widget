import React, { forwardRef, useImperativeHandle, useState } from "react";
import CopyLink from "./CopyLink";
import MembersBox from "./MembersBox";
import ShareToWeb from "./ShareToWeb";
import "./SharingBoxModal.css";

/**
 * @component This is SharingBoxModal component where users can interact with it.They can search ,create-links. It can add members and also can give access to them
 * @param {props | null} - it can accept props
 * @typedef {Object} ref - it is a reference to the React-Dom element
 * @param {ref} - it accepts ref so that it can be used to implement useImperativeHandle Hook.With the help of this hook we create a method and to use that method we need to pass this component through forwardRef.
 * @typedef {function} SharingBoxModal
 * @returns {JSX} it returns JSX
 */

const SharingBoxModal = (props, ref) => {
  const [showSharingBoxModal, setShowSharingBoxModal] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => {
        setShowSharingBoxModal((open) => !open);
      },
    }),
    []
  );
  return (
    <div
      className={`SharingBoxModal ${
        showSharingBoxModal
          ? "sharing-box-modal-show"
          : "sharing-box-modal-hidden"
      }`}
    >
      <ShareToWeb />
      <MembersBox />

      <CopyLink showLink={true} />
    </div>
  );
};

export default forwardRef(SharingBoxModal);
