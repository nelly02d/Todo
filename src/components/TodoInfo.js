import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";

function TodoInfo({ todo, id, deleteTodo, done}) {

  const [checked, setchecked] = useState(false)

  return (
    <label className={"" + (checked ? "strike" : "todo")}>
      <input 
      type="checkbox" 
      key={id} 
      onChange={(e) => setchecked(e.target.checked)}
      value={done}
      />
      {todo}
      <FontAwesomeIcon icon={faTrashCan} onClick={() => {deleteTodo(todo)}}/>
    </label>
  )
}

export default TodoInfo;