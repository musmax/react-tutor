import  Axios  from "axios";
import { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    })
  }

  return (
    <div className="App">
      <input placeholder="Ex. Pedro..." onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={fetchData}>Predict User age</button>
      <h1>Predicted Age: {predictedAge?.age} </h1>
      <h1>Count: {predictedAge?.count} </h1>
      <h1>Name: {predictedAge?.name} </h1>
    </div>
  );
}

export default App;
