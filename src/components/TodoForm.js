import React, {useState} from 'react'
//use state - you declare a state variable and provide a way to update it, and React takes care of re-rendering the component whenever the state changes

export const TodoForm = ({addTodo}) => {
  const [value,setValue] = useState("")
  //syntax - const [state, setState] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);

    setValue("")
    //value set to empty string after submission 
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='What is the task for today?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
    
  )
}
export default TodoForm;
