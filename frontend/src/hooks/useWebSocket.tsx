import { useEffect, useState } from 'react';

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<string[]>([
    'Welcome to the chat!', // Predefined message
  ]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  const sendMessage = (message: string) => {
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(message);
    } else {
      // If WebSocket is not open, just log or simulate sending a message locally
      setMessages((prevMessages) => [...prevMessages, `You: ${message}`]);
    }
  };

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    socket.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket closed');
    };

    // Set WebSocket state
    setWs(socket);

    // Cleanup WebSocket connection on component unmount
    return () => {
      socket.close();
    };
  }, [url]);

  return { messages, sendMessage };
};

export default useWebSocket;
