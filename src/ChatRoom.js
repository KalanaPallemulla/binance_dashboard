import React, { Profiler, useState } from "react";
import { useRecoilState } from "recoil";
import { chatRoomState } from "./recoilState";

const ChatRoom = ({ roomId, friendRoomId }) => {
  const [friendChatRoom, setFriendChatRoom] = useRecoilState(
    chatRoomState({ roomId: friendRoomId })
  );
  const [myChats, setMyChats] = useRecoilState(chatRoomState({ roomId }));
  const [text, setText] = useState("");
  const handleSendMessage = () => {
    setFriendChatRoom((prev) => ({
      ...prev,
      messages: [...prev.messages, text],
    }));
    setText("");
  };
  return (
    <Profiler
      id="chatRoomComponent"
      onRender={(id, phase, actualDuration) =>
        console.log(id, phase, actualDuration)
      }
    >
      <div>
        <h2>Chat room {roomId}</h2>
        <ul>
          {myChats.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </Profiler>
  );
};

export default ChatRoom;
