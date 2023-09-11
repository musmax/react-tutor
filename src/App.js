import  Axios  from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.length);
    })
  }, [])





  return (
    <div className="App">
      <button>Generate cat fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
