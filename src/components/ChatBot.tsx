"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // Add User Message
    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Generate Bot Response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  // Basic Bot Response Logic
  const getBotResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("hello")) return "Hi there! How can I assist you?";
    if (lowerInput.includes("help")) return "Sure! What do you need help with?";
    if (lowerInput.includes("next.js")) return "Next.js is a powerful React framework!";
    return "I'm not sure about that. Could you ask me something else?";
  };

  return (
    <motion.div
      className="fixed bottom-5 right-5 bg-gray-900 text-white w-80 shadow-lg rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="bg-green-600 text-white p-3 font-bold text-center">
        Chat with Us!(Coming Soon)
      </div>

      {/* Messages */}
      <div className="p-4 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-md ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto max-w-[80%]"
                : "bg-gray-700 text-white self-start mr-auto max-w-[80%]"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && <p className="text-gray-400">Bot is typing...</p>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex items-center p-2 border-t border-gray-700">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 bg-gray-800 p-2 rounded-md text-white focus:outline-none"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="ml-2 bg-green-600 p-2 rounded-md">
          <Send className="w-5 h-5 text-white" />
        </button>
      </div>
    </motion.div>
  );
}
