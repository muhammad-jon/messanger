import React from "react";

// styling

import "./info.css";
import set from "../../icons/onlineIcon.png";
import close from "../../icons/closeIcon.png";

const Info = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={set} alt="set icon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={close} alt="close icon" />
        </a>
      </div>
    </div>
  );
};

export default Info;
