import React from "react";

const Messages = ({messages }) => {
  
  let chatMessages;
  if (messages) {
    chatMessages = messages.map((chat) => {
      
      return (
        <>
          <p style={{ fontWeight: "bold" }}>{chat.firstname}</p>
          <p style={{ backgroundColor: "ghostwhite"}}>{chat.messages_text}</p>
        </>
      );
    });
  }

  return (
    <div className="col-md-6 pl-0">
      <div className="card card-bordered">
        <div className="card-header">
          <h4 className="card-title">
            <strong>Chat</strong>
          </h4>
        </div>

        <div
          className="ps-container ps-theme-default ps-active-y"
          id="chat-content"
          style={{
            overflow: "scroll !important",
            height: "400px !important",
          }}
        >
          <div>
            <div>
              <p>{chatMessages}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
