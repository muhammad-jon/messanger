import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

// styling
import "./chat.css";
import Info from "../Info/info";
import Messages from "../Messages/messages";
import Input from "../Input/input";
import { sendMessage } from "../../socketio.service";

// const messages = [
//   "salom",
//   "dunyo",
//   "salom",
//   "dunyo",
//   "salom",
//   "dunyo",
//   "salom",
//   "dunyo",
//   "salom",
//   "dunyo",
//   "salom",
//   "dunyo",
// ];
const ENDPOINT = "https://guarded-scrubland-57648.herokuapp.com/";

let socket;

export const Chat = ({ location }) => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("salom");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  });
  //   console.log("location ", location);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      //emit
      console.log("message", message);
      socket.emit("sendMessage", message, () => setMessage(""));
      setMessage("");
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <Info room={room} />
        <Messages messages={messages} name={name}></Messages>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
