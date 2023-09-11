
import { useState, useEffect } from "react";
import {Text} from './Text'
import "./App.css";


function App() {
  const [addText, setAddtext] = useState(false);
  useEffect(() => {
    console.log("component mounted")
    return () => {
    console.log("compounted unmounted");
    return () => {
      console.log("component updated");
    }
    }
  }, [])
  return (
    <div className="App">
      <div>
        <button onClick={ () => (setAddtext(!addText))}>Show input box</button>
        {addText && <Text />}
      </div>
    </div>
  );
}

export default App;
