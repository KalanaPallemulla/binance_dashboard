// WebSocketUI.js
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { websocketState } from "./recoilState";

const WebSocketUI = () => {
  const [message, setMessage] = useState("");
  const [websocket, setWebsocket] = useRecoilState(websocketState);

  const sendMessage = () => {
    if (websocket.connection && message.trim() !== "") {
      websocket.connection.send(message);
      setMessage("");
    }
  };

  return (
    <div>
      <h2>WebSocket UI</h2>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <h3>Received Messages</h3>
        <ul>
          {websocket.messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WebSocketUI;
