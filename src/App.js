import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import "./App.css";

function App() {
  //Holds todolist array
  const [todoList, setTodoList] = useState([]);
  const [query, setQuery] = useState('all')

  // const todoSearch = todoList.filter(todo => {
  //   switch(query) {
  //     case 'completed':
  //       return todo.isComplete === true;
  //     case 'pending': 
  //       return todo.isComplete === false;
  //     default: 
  //       return todo.todo
  //   }
  // });
  
  return (
    <div className="App">
      <header>
        <h1>Task for Today:</h1>
      </header>

      <div className="form-container">
        <TodoForm 
          todos = {myTodo => setTodoList([...todoList, myTodo])}
          todoList = {todoList}
        />
        <TodoFilter 
          selectedValue={(myQuery) => setQuery(myQuery)}
        />
      </div>
        
      <div>
        { todoList.map((todo) => (
          <TodoList 
            todo={todo}
            key={todo.id}
            deleteTodo={
              (todoId) => setTodoList(todoList.filter((todo) => todo.id !== todoId))
            }
            handleFilter={todo.isComplete}
            query={query}
          />
        ))}
      </div>   
    </div>
  );
};

export default App;
