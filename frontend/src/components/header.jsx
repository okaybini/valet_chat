import { useState } from "react";
import Drawer from "./drawer"; // Import the Drawer component

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state
  const [isToggled, setIsToggled] = useState(false); // Toggle button state

  // Function to toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to toggle the switch
  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  return (
    <header>
      {/* Header Bar */}
      <div className="flex justify-between items-center bg-gradient-to-r from-gray-800 to-purple-900 text-white py-2 px-4">

        {/* 3-Bar Button */}
        <button
          className="text-2xl cursor-pointer"
          onClick={toggleDrawer} // Toggle the drawer
        >
          ☰
        </button>

        {/* Toggle Switch */}
        <div className="flex items-center space-x-2">
          <span>{isToggled ? "AutoSync On" : "AutoSync Off"}</span>
          <button
            onClick={toggleSwitch} // Toggle the switch
            className={`w-12 h-6 rounded-full ${
              isToggled ? "bg-green-500" : "bg-gray-300"
            } flex items-center transition-colors duration-300`}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                isToggled ? "translate-x-6" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Drawer Component */}
      <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;
