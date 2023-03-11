import { useState } from "react";

function AddTodo({ todos }) {
  //to clear todo
  const clearTodo = ''

  const [todoInput, setTodoInput] = useState(clearTodo);
  //Todo function information
  const setTodo = (e) => {
    e.preventDefault();
    //Send todo information
    todos(todoInput);
    //Set to clear input fiealds
    setTodoInput(clearTodo)
  }

  return (
    <div className="form-container">
      <form onSubmit={setTodo}>
        <label>
          <input 
            value={todoInput}
            onChange={event => setTodoInput(event.target.value)}
            placeholder="Enter Task"
          />
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AddTodo;