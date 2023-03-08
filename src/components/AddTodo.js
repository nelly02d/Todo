import { useState } from "react";

function AddTodo({lastId, sendTodo, clear}) {
  //to clear todo

  const [input, setInput] = useState('');
  //Todo function information
  const publishTodo = (e) => {
    e.preventDefault();
    //Send todo information
    sendTodo(input);
    //Set to clear input fiealds
    setInput('')
  }

  return (
    <div className="form-container">
      <form onSubmit={publishTodo}>
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