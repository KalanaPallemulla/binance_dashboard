import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { socketState } from "./atoms";

const ChatInput = () => {
  const [socket] = useRecoilState(socketState);
  const [messageInput, setMessageInput] = useState("");

  const sendMessage = () => {
    if (socket && messageInput.trim() !== "") {
      socket.send(messageInput);
      setMessageInput("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
