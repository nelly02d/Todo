function TodoFilter({ selectedValue, query }) {

  return (
    <select value={query} onChange={(e) => selectedValue(e.target.value)} >
      <option value="all">All</option>
      <option value="pending">Pending</option>
      <option value="completed">Done</option>
    </select>
  )
};

export default TodoFilter;