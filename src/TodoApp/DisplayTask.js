import React from 'react'

function DisplayTask({tasks}) {
  return (
    <div>
        <h3>Task List</h3>
      <ul>
        {tasks.map((task,index)=>(
        <li key = {index}>{task}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default DisplayTask
