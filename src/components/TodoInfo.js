import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

function TodoInfo({todo, id}) {
  return (
    <li key={id} className="todo" > 
      <FontAwesomeIcon icon={faCheckSquare}/> 
        {todo}
      <FontAwesomeIcon icon={faTrashCan} />
    </li>
  )
}

export default TodoInfo;