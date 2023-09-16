import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Clients } from "./pages/Clients";
import { UserProfile } from "./pages/Profile";
import { Navbar } from "./Navbar";

// Initialize it
export const AppContext = createContext();

const App = () => {
  const [userName, setUserName] = useState("Musa");
  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client" element={<Clients />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="*" element={<h2> Page not found </h2>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
};

export default App;
