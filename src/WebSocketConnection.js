// WebSocketConnection.js
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { socketState, messagesState } from "./atoms";

// const api =
//   "wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self";
const api = "wss://socketsbay.com/wss/v2/1/demo/";
const WebSocketConnection = () => {
  const [socket, setSocket] = useRecoilState(socketState);
  const [messages, setMessages] = useRecoilState(messagesState);

  useEffect(() => {
    if (!socket) {
      const newSocket = new WebSocket(api);

      newSocket.onopen = () => {
        console.log("WebSocket connection opened");
      };

      newSocket.onmessage = (event) => {
        const message = event.data;
        setMessages((prevMessages) => [...prevMessages, message]);
      };

      newSocket.onclose = () => {
        console.log("WebSocket connection closed");
      };

      setSocket(newSocket);
    }

    // Clean up WebSocket connection when component unmounts
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const handleConnectionStatus = () => {
    console.log("WebSocket state:", socket && socket.readyState);
    if (socket && socket.readyState === WebSocket.OPEN) {
      console.log("WebSocket is open and ready to send messages.");
    } else {
      console.log("WebSocket is not ready to send messages.");
    }
  };

  useEffect(() => {
    handleConnectionStatus();

    return () => {
      handleConnectionStatus();
    };
  }, [socket]);

  return null;
};

export default WebSocketConnection;
