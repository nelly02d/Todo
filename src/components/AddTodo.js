import { useState } from "react";

function AddTodo({lastId, sendTodo}) {
  //to clear todo
  const clearTodo = '';

  const [todo, setTodo] = useState(clearTodo);
  //Todo function information
  const publishTodo = () => {
    const todoInfo = {
      id: lastId + 1,
      todos: todo.value
    }
    //Send todo information
    sendTodo(todoInfo);
    //Set to clear input fiealds
    setTodo(clearTodo);
  }

  return (
    <div className="form-container">
      <form onSubmit={publishTodo}>
        <label>
          <input
            name="task" 
            value={todo.value}
            onChange={event => {setTodo({...todo, todos: event.target.value}) }}
            placeholder="Enter Task"
          />
        </label>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AddTodo;