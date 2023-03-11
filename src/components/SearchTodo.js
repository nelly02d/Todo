import { useState } from "react";

function SearchTodo({ todo }) {
  const [mySearch, setMySearch] = useState("Pending");

  const handleChange = (event) => {
    setMySearch(event.target.value)
  }

  return(
    <form>
      <select value={mySearch} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>
    </form>
  )
}

export default SearchTodo;