import React from 'react'

function AddTask({task, taskChange, addTask}) {
    
  return (
    <div>
      <label htmlFor="Task">New Task</label>
      <input type="text"
      value={task} 
      onChange = {(e)=>taskChange(e.target.value)}
      placeholder='Enter Task'/>
      <button onClick={addTask}>Add Task</button>
    </div>
  )
}

export default AddTask
