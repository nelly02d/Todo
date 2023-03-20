import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";

function TodoList({ todo, deleteTodo, query }) {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );
  
  todo.isCompleted = checked


  return (
    <label 
    className={"all " + (checked ? "completed" : "pending")}
    style={
    query === 'completed' && todo.isCompleted === true ? {display: 'flex'} : 
    query === 'pending' && todo.isCompleted === false ? {display: 'flex'} : 
    query === 'all' ? {display: 'flex'} : {display: 'none'}}
    >
      <input type="checkbox"onChange={toggle} />
      <span>{todo.todo}</span>
      <FontAwesomeIcon icon={faTrashCan} onClick={() => {deleteTodo(todo.id)}}/>
    </label>
  )
};

export default TodoList;