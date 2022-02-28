import React from "react";

// styling
import "./message.css";

const Message = ({ message, name }) => {
  return (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{name}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{message}</p>
      </div>
    </div>
  );
};

export default Message;
