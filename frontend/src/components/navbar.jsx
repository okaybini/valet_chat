import PropTypes from "prop-types";
import { HomeIcon, UserIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid"; // Import Heroicons

const Navbar = ({ toggleChat }) => {
  return (
    <div className="flex justify-around items-center bg-gray-800 text-white py-1 fixed bottom-0 w-full">
      {/* Home Button */}
      <button className="flex flex-col items-center text-white">
        <HomeIcon className="h-6 w-6" /> 
        <span>Home</span>
      </button>

      {/* Profile Button */}
      <button className="flex flex-col items-center text-white">
        <UserIcon className="h-6 w-6" /> 
        <span>Profile</span>
      </button>

      {/* Chat Button */}
      <button
        onClick={toggleChat} 
        className="flex flex-col items-center text-white"
      >
        <ChatBubbleLeftEllipsisIcon className="h-6 w-6" /> 
        <span>Chat</span>
      </button>
    </div>
  );
};

Navbar.propTypes = {
  toggleChat: PropTypes.func.isRequired,
};

export default Navbar;
