import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoInfo from "./components/TodoInfo";
import SearchTodo from "./components/SearchTodo";


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
        todoList={todoList}
      />
      <SearchTodo 
      
      />
      <div>
        { todoList.map((todo, id) => (
          <TodoInfo 
            todo={todo}
            key={id}
            deleteTodo={
              todoId => setTodoList(todoList.filter((todo) => todo !== todoId))}
          />
        ))}
      </div>     
    </div>
  );
};

export default App;
