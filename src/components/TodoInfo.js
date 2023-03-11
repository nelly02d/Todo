import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

function TodoInfo({ todo, id, deleteTodo, done}) {

  const [checked, setchecked] = useState(false)

  const handleChange = () => {
    setchecked(!checked)
  }

  return (
    <label>
      <input 
      type="checkbox" 
      key={id} 
      onChange={handleChange}
      value={done}
      />
      {todo}
      <FontAwesomeIcon icon={faTrashCan} onClick={() => {deleteTodo(todo)}}/>
    </label>
  )
}

export default TodoInfo;