import PropTypes from "prop-types";

const ChatHeader = ({ activeTab, setActiveTab, onClose }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-800 to-purple-950 shadow-md">
      {/* Tab Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setActiveTab("chat")}
          className={`relative px-5 py-2 text-gray-300 transition-all duration-300 ease-in-out ${
            activeTab === "chat"
              ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:rounded-full"
              : "hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-gray-500 hover:after:rounded-full"
          }`}
        >
          Chat
        </button>
        <button
          onClick={() => setActiveTab("receipts")}
          className={`relative px-5 py-2 text-gray-300 transition-all duration-300 ease-in-out ${
            activeTab === "receipts"
              ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-white after:rounded-full"
              : "hover:text-white hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-1 hover:after:bg-gray-500 hover:after:rounded-full"
          }`}
        >
          Receipts
        </button>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose} // Use the onClose function to close the chat panel
        className="text-white text-xl  rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        ✕
      </button>
    </div>
  );
};

ChatHeader.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired, // Add onClose prop validation
};

export default ChatHeader;
