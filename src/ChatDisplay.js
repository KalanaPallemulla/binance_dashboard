// src/ChatDisplay.js
import React from "react";
import { useRecoilValue } from "recoil";
import { messagesState } from "./atoms";

const ChatDisplay = () => {
  const messages = useRecoilValue(messagesState);

  return (
    <div>
      <h2>Chat</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatDisplay;
