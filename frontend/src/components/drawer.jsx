import PropTypes from "prop-types";

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-950 text-white w-64 shadow-lg transform transition-transform z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Drawer Header */}
      <div className="p-4 flex justify-between items-center border-b border-gray-700 ">
        <h2 className="text-lg font-semibold ">Menu</h2>
        <button
          className="text-gray-400 hover:text-white"
          onClick={toggleDrawer}
        >
          ✕
        </button>
      </div>

      {/* Drawer Menu */}
      <ul className="p-4 space-y-4">
        <li>
          <a
            href="#"
            className="block bg-gray-900 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:scale-105 hover:shadow-xl transition-transform  duration-300 ease-in-out p-3 rounded-md"

          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
          className="block bg-gray-900 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:scale-105 hover:shadow-xl transition-transform  duration-300 ease-in-out p-3 rounded-md"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="#"
           className="block bg-gray-900 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:scale-105 hover:shadow-xl transition-transform  duration-300 ease-in-out p-3 rounded-md"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block bg-gray-900 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600 hover:scale-105 hover:shadow-xl transition-transform  duration-300 ease-in-out p-3 rounded-md"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  toggleDrawer: PropTypes.func.isRequired, 
};

export default Drawer;
