import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ChatInput = ({ sendMessage, inputValue, setInputValue }) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  // Detect when the virtual keyboard is opened on mobile devices
  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight;
      const viewportHeight = document.documentElement.clientHeight;

      // When the viewport height is less than the screen height, assume the keyboard is open
      setIsKeyboardOpen(viewportHeight < screenHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    sendMessage(inputValue, "user");
    setInputValue("");
  };

  return (
    <div
      className={`w-full ${
        isKeyboardOpen ? "absolute bottom-0" : "sticky bottom-0"
      } bg-gray-900 transition-all duration-300 z-50`}
    >
      <form
        onSubmit={handleSubmit}
        className="p-4 border-t border-gray-700 flex items-center space-x-3"
      >
        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-gray-800 text-white p-3 rounded-lg focus:outline-none focus:ring focus:ring-fuchsia-500 transition-all duration-300"
        />
        {/* Send Button */}
        <button
          type="submit"
          className="px-4 py-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send
        </button>
      </form>
    </div>
  );
};

ChatInput.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
};

export default ChatInput;
