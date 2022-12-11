import React from "react";
import { ShareButton } from "../components";
import "./NotionShareWidget.css";

/**
 * @component This is NotionShareWidget component which returns a Share button component
 * @typedef {function} NotionShareWidget
 * @returns {JSX} ShareButton component
 */

const NotionShareWidget = () => (
  <div className="NotionShareWidget">
    <ShareButton />
  </div>
);

export default NotionShareWidget;
