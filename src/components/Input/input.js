import React from "react";

// styling
import "./input.css";

const Input = ({ setMessage, sendMessage, message }) => {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Xabar matni"
        value={message}
        onChange={({ target: { value } }) => {
          setMessage(value);
        }}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button
        className="sendButton"
        onClick={(e) => {
          sendMessage(e);
        }}
      >
        Yuborish
      </button>
    </form>
  );
};
export default Input;
