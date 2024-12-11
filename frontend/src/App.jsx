import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SplashScreen from "./pages/homescreen";

const App = () => {
  return (
    <Router>
      <div className="relative h-screen bg-gray-100">
        {/* Routes */}
        <Routes>
          {/* Redirect to SplashScreen */}
          <Route path="*" element={<Navigate to="/" />} />

          {/* SplashScreen Route */}
          <Route path="/" element={<SplashScreen />} />

          {/* Dashboard Route */}
          <Route
            path="/dashboard"
            element={
              <div className="h-screen">
                <Dashboard />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
