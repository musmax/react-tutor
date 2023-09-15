 import "./App.css";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Clients } from "./pages/Clients";
import { Profile } from './pages/Profile';
import { Navbar } from "./Navbar";
import { useState } from "react";

const App = () => {

  const [username, setusername] = useState("Musa")
  return (
    <div className="App">
     
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/client" element = {<Clients username = {username} setusername = {setusername}/>} />
          <Route path="/profile" element = {<Profile username = {username} setusername = {setusername}/>} />
          <Route path="*" element = {<h2> Page not found </h2>} />
        </Routes>
      </Router>
    </div>

  );
};

export default App;
