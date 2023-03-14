
function QueryTodo({ query }) {

  return (
    <label>
      <select defaultValue="pending" onChange={(event) => event.target.value}>
        <option value="pending">Pending</option>
        <option value="done">Done</option>
      </select>
    </label>
  )
}

export default QueryTodo;