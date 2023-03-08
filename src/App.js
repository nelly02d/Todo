import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoInfo from "./components/TodoInfo";


function App() {
  //Holds todolist array
  const [todoList, setTodoList] = useState([]);
  // const [query, setQuery] = useState('');

  return (
    <div className="App">
      <header>
        <h1>Task Todo</h1>
      </header>
      <AddTodo 
        todos = {myTodo => setTodoList([...todoList, myTodo])}
      />
      <div>
        <ul>
          { todoList.map((todo, id) => (
            <TodoInfo 
              key={id}
              todo={todo}
              deleteTodo={
                todoId => setTodoList(todoList.filter((todo) => todo  !== todoId))}
            />
          ))}
        </ul>
      </div>     
    </div>
  );
};

export default App;
