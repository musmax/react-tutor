import './App.css';


const name = <h1>Musa</h1>
const age = <h2>25</h2>
const email = <p>musaojo1710@yahoo.com</p>

const user = (
  <div>
    <h1 className="title">Welcome to React</h1><br/>
    {name}
    {age}
    {email}
  </div>
)


function App() {
  return (
    <div className="App">
         {user}
         {user}
    </div>
  );
}

export default App;
