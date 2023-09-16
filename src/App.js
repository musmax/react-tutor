 import "./App.css";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Clients } from "./pages/Clients";
import { Profile } from './pages/Profile';
import { Navbar } from "./Navbar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const client = new QueryClient({
  defaultOptions:  {
    queries:{
      refetchOnWindowFocus: false,
    }
  }
});

const App = () => {
  return (
    <div className="App">
     <QueryClientProvider client={client}>
     <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/client" element = {<Clients />} />
          <Route path="/profile" element = {<Profile />} />
          <Route path="*" element = {<h2> Page not found </h2>} />
        </Routes>
      </Router>
     </QueryClientProvider>
    </div>
  );
};

export default App;
