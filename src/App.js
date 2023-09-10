import { useState } from "react";
import "./App.css";
//  import {Task} from "./Task"

function App() {
 
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

   // function to handle user input
  const hadleUserInput = (event) => {
    setTask( event.target.value);
  }
  // function to store user input
  const handleTask = () => {
    const userTask = {
      id: addTask.length === 0 ? 1 : addTask[addTask.length - 1].id + 1,
      taskName: task,
      isCompleted: false,
    }
    setAddTask([...addTask ,userTask])
  }
  // function to delete a task
  const deleteTask = (id) => {
    setAddTask(
      addTask.filter((item)=> {return item.id !== id}) 
    )
  }
  // function to edit task by changing task background from color white to 
  const editTask = (id) => {
    setAddTask(
      addTask.map((item) => {
        if (item.id === id) {
          return (
            {
              ...item,
              isCompleted: true
            }
          )
        }
        else {
          return item;
        }
      })
    )
  }
  return (
    <div className="App">
    <div className="addList">
      <input placeholder="Enter the activities" onChange={hadleUserInput}/>
      <button onClick={handleTask}>Add</button>
    </div>
    <div className="list">
      {
        addTask.map((item) => {
          return(
            <div style={{ backgroundColor: item.isCompleted ? "green" : "white" }}>
            <h2>{item.taskName}</h2>
            <button onClick={() => deleteTask(item.id)}>X</button>
            <button onClick={() => editTask(item.id)}>Edit</button>
            </div>
          )
        })
      }
    </div>
    </div>
  );
}

export default App;
