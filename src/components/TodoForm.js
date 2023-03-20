import { useState } from "react";

function TodoForm({ todos, todoList }) {
  const [todoInput, setTodoInput] = useState('');

  //Setting todo Data
  const publishTodo = (event) => {
    event.preventDefault()

    const todoInfo = {
      id: todoList.length + 1,
      todo: todoInput,
      isComplete: false
    }

    todos(todoInfo)
    setTodoInput('')
  }

  return (
    <form className="todo-form" onSubmit={publishTodo}>
      <label>
        <input
          value={todoInput}
          onChange={event => setTodoInput(event.target.value)}
          placeholder="Enter Task"
          className="todo-input"
        />
      </label>
      <input className="submit" type="submit"/>
    </form>
  )
};

export default TodoForm; 