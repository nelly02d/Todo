import { useState } from "react";
import AddTodo from "./components/AddTodo";



function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Task Todo</h1>
      </header>
      <AddTodo 
        sendTodo = {myTodo => {
          myTodo.preventDefault()
          setTodoList([...todoList, myTodo])
        }}
      />
    </div>
  );
}

export default App;
