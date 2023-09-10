export const Task = (props) => {
    return (
      <div style={{ backgroundColor: props.completed ? "green" : "white" }}>
        <h2>{props.taskName}</h2>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
        <button onClick={() => props.editTask(props.id)}>Completed</button>
      </div>
    );
  };
  