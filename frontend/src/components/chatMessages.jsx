import PropTypes from "prop-types";

const ChatMessages = ({ messages, isTyping }) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start space-x-3 ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {/* Profile Icon */}
          {message.sender === "assistant" && (
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
              🤖
            </div>
          )}

          {/* Chat Bubble */}
          <div
            className={`max-w-xs p-3 rounded-lg shadow-md text-white ${
              message.sender === "user"
                ? "bg-blue-600 ml-auto rounded-br-none"
                : "bg-gray-800 mr-auto rounded-bl-none"
            }`}
          >
            {message.text}
          </div>

          {/* User Icon */}
          {message.sender === "user" && (
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              🧑
            </div>
          )}
        </div>
      ))}

      {/* Typing Animation */}
      {isTyping && (
        <div className="flex items-start space-x-3">
          {/* Assistant Icon */}
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white">
            🤖
          </div>

          {/* Typing Indicator */}
          <div className="flex space-x-1 items-center mt-1"> {/* Add mt-1 for slight downward adjustment */}
  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
</div>

        </div>
      )}
    </div>
  );
};

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      sender: PropTypes.oneOf(["user", "assistant"]).isRequired,
    })
  ).isRequired,
  isTyping: PropTypes.bool.isRequired,
};

export default ChatMessages;
