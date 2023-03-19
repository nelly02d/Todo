import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useReducer } from "react";

function TodoList({ todo, deleteTodo, query }) {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false
  );

  const styles = {
    completed: {
      display: 'flex'
    },
    pending: {
      display: 'flex'
    },
    all: {
      display: 'flex'
    } 
  }
  
  todo.isCompleted = checked

  return (
    <label 
    className={"all " + (checked ? "completed" : "pending")}
    style={query === 'completed' && todo.isCompleted === true ? styles.completed : 
    query === 'pending' && todo.isCompleted === false ? styles.pending : 
    query === 'all' ? styles.all : {display: 'none'}}
    >
      <input 
      type="checkbox"
      onChange={toggle}
      />
      {todo.todo}
      <FontAwesomeIcon icon={faTrashCan} onClick={() => {deleteTodo(todo.id)}}/>
    </label>
  )
};

export default TodoList;