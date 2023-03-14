import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoInfo from "./components/TodoInfo";
import QueryTodo from "./components/QueryTodo";
import "./App.css";

function App() {
  //Holds todolist array
  const [todoList, setTodoList] = useState([]);
  const [query, setQuery] = useState(null);

  // const filteredTodo = todoList.filter(item => item.todo)
  
  return (
    <div className="App">
      <header>
        <h1>Task Todo</h1>
      </header>
      <AddTodo 
        todos = {myTodo => setTodoList([...todoList, myTodo])}
        todoList={todoList}
      />
     <QueryTodo 
      query={query}
      onQueryChange={myQuery => setQuery(myQuery)}
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
