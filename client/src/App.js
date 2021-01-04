import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Style from "./Style.css";
// import Users from "./components/Users";
// import TypeMessage from "./components/TypeMessage";
// import ChatScreen from "./components/ChatScreen";

// import {
//   Container,
//   Col,
//   Row,
//   InputGroup,
//   Button,
//   Form,
//   FormControl,
// } from "react-bootstrap";

const App = () => {
  const [users, setUsers] = useState([]);

  const [messages, setMessages] = useState([]);

  const fetchUser = async () => {
    const userResponse1 = await axios.get("/api/users");
    console.log(userResponse1.data, "this works")
    setUsers(userResponse1.data);
  };

  const fetchMessage = async () => {
    const messageResponse1 = await axios.get("/api/messages");

    setMessages(messageResponse1.data);
  };

  useEffect(() => {
    fetchUser();
    fetchMessage();
  }, []);

  let textInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessages([{ text: textInputRef.current.value, username: "Maher" }]);
    textInputRef.current.value = "";
  };
  const chatUsers = users.map((user) => {
    return <p>{user.username}</p>;
  });

  const chatMessages = messages.map((chat) => {
    return (
      <p>
        {chat.text}({chat.username})
      </p>
    );
  });

  return (
    <div className="container">
      <div className="user">
        USERS <br />
        {chatUsers}
      </div>
      <div className="row">
        <form className="text-center" onSubmit={handleSubmit}>
          <div className="chatscreen">{chatMessages}</div>
          <input
            ref={textInputRef}
            type="text"
            required
            className="input"
            placeholder="Write a message..."
          ></input>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );

  //

  // return (
  //   <div className="container">
  //     <Users/>
  //     <TypeMessage/>
  //     <ChatScreen/>
  //   </div>
  // );
};
export default App;
