import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatFieldProps {
  messages: string[];
  sendMessage: (message: string) => void;
}

const ChatField: React.FC<ChatFieldProps> = ({ messages, sendMessage }) => {
  const [input, setInput] = useState<string>("");

  const handleSendMessage = () => {
    if (input.trim()) {
      sendMessage(` ${input}`); // "You:" zur Identifikation der Benutzer-Nachricht
      setInput(""); // Eingabefeld leeren
    }
  };

  return (
    <>
      <div className="chat-container flex flex-col flex-1 overflow-y-auto p-4">
        {/* Nachrichtenliste */}
        <div className="chat-messages flex flex-col gap-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-message ${
                message.startsWith("You:")
                  ? "self-end bg-blue-500 text-white"
                  : "self-start bg-white"
              } p-2 rounded-lg shadow-md`}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className="grid w-full gap-2 p-4">
        {/* Eingabefeld */}
        <Textarea
          className="chat-input text-yellow-50"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Type your message here."
        />
        {/* Senden-Button */}
        <Button onClick={handleSendMessage} disabled={!input.trim()}>
          Send message
        </Button>
      </div>
    </>
  );
};

export default ChatField;