import React, { useState } from "react";
import { Link } from "react-router-dom";

// styling
import "./join.css";

export const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div className="">
            <input
              className="joinInput"
              type="text"
              placeholder="Ism: ..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="">
            <input
              className="joinInput mt-20"
              type="text"
              placeholder="Guruh: ..."
              onChange={(e) => {
                setRoom(e.target.value);
              }}
            />
          </div>

          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20">Register</button>
          </Link>
        </div>
      </div>
    </>
  );
};
