import { useState } from "react";

function AddTodo({ todos }) {
  const clearTodo = ''

  const [input, setInput] = useState(clearTodo);
  //Todo function information
  const submitTodo = (e) => {
    e.preventDefault();
    //Send todo information
    todos(input);
    //Set to clear input fiealds
    setInput(clearTodo)
  }

  return (
    <div className="form-container">
      <form onSubmit={submitTodo}>
        <label>
          <input 
            value={input}
            onChange={event => setInput(event.target.value)}
            placeholder="Enter Task"
          />
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AddTodo;