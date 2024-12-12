import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.jpg"; 

const SplashScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate(); 

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleSignUpComplete = () => {

    setIsModalVisible(false);
    navigate("/dashboard"); 
  };

  return (
    <div className="relative h-screen bg-black">
      
      <div className="flex flex-col items-center justify-center h-full">
       
        <img
          src={logo}
          alt="Logo"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 animate-splash"
        
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Valet Chat
        </h1>
        <p className="text-gray-400 mt-2 text-sm md:text-base lg:text-lg">
          Stop Searching, Start Asking
        </p>

        {/* Let's Go Button */}
        <button
          onClick={handleOpenModal}
          className="rounded-md absolute bottom-10 left-1/2 transform -translate-x-1/2 h-[30px] w-60 overflow-hidden border border-white bg-black px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-purple-500 before:transition-all before:duration-500 hover:text-white hover:border-white hover:before:left-0 hover:before:w-full"
        >
          <span className="relative z-10">Lets Go</span>
        </button>
      </div>

      {/* Sign-Up Modal */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-500 flex items-end ${
          isModalVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleCloseModal} 
      >
        <div
          className={`bg-white rounded-t-lg p-6 shadow-lg w-full max-w-lg mx-auto transform transition-transform duration-500 ${
            isModalVisible ? "translate-y-0" : "translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()} 
        >
          
          <button
            onClick={handleCloseModal}
            className="text-gray-500 hover:text-gray-800 float-right text-xl"
          >
            &times;
          </button>

          {/* Modal Content */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-4">Sign Up</h2>
            <div className="flex flex-col space-y-4">
         
              <button
                onClick={handleSignUpComplete}
                className="flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100"
              >
                <img
                  src="https://img.icons8.com/color/24/google-logo.png"
                  alt="Google"
                />
                <span>Continue with Google</span>
              </button>
            </div>

     
            <p className="mt-6 text-sm text-gray-500">
              Right now, we only support Gmail, but others are coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
