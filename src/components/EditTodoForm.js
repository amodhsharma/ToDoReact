import React, {useState} from 'react'
//use state - you declare a state variable and provide a way to update it, and React takes care of re-rendering the component whenever the state changes

export const EditTodoForm = ({editTodo, task}) => {
  const [value,setValue] = useState(task.task)
  //syntax - const [state, setState] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    //value set to empty string after submission 
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
        <input type="text" className="todo-input" value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
        <button type="submit" className='todo-btn'>Update Task</button>
    </form>
    
  )
}
export default EditTodoForm;