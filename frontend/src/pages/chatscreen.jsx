import PropTypes from "prop-types";
import ChatHeader from "../components/chatHeader";
import ChatMessages from "../components/chatMessages";
import ChatInput from "../components/chatInput";
import ReceiptsPanel from "../components/receiptsPanel";
import { useState, useEffect } from "react";

const ChatPanel = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you with your receipts?", sender: "assistant" },
    { id: 2, text: "Can you show me Receipt_01 insights?", sender: "user" },
  ]);
  const [isTyping, setIsTyping] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [files, setFiles] = useState([
    { id: 1, name: "Receipt_01.pdf", synced: true },
    { id: 2, name: "Receipt_02.pdf", synced: false },
    { id: 3, name: "Receipt_03.pdf", synced: true },
  ]);
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    setIsVisible(true); 
  }, []);

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { id: prev.length + 1, text, sender }]);
  };

  const assistantReply = (text) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(text, "assistant");
    }, 1500);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim() === "") return;
    assistantReply(`Searching for receipts related to "${searchInput}".`);
    setSearchInput("");
  };

  return (
    <div
      className={`h-screen flex flex-col transition-all duration-500 transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      {/* Header */}
      <ChatHeader activeTab={activeTab} setActiveTab={setActiveTab} onClose={onClose} />

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeTab === "chat" ? (
          <>
            {/* Messages */}
            <ChatMessages messages={messages} isTyping={isTyping} />

            {/* Chat Input */}
            <ChatInput
              sendMessage={(text, sender) => {
                addMessage(text, sender);
                assistantReply(`Here's what I found for "${text}".`);
              }}
              inputValue={searchInput}
              setInputValue={setSearchInput}
            />
          </>
        ) : (
          <ReceiptsPanel
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            handleSearchSubmit={handleSearchSubmit}
            files={files}
            setFiles={setFiles}
          />
        )}
      </div>
    </div>
  );
};

ChatPanel.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChatPanel;
