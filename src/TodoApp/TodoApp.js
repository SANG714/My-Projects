import React, {useState} from 'react'
import AddTask from './AddTask'
import DisplayTask from './DisplayTask'

function TodoApp() {
    const[task, setTask] = useState ("")
    const[tasks, setTasks] = useState([])

    function addTask(){
        if(task.trim()){
        setTasks([...tasks, task])
        setTask("")
        }
    }
  return (
    <div>
      <AddTask task={task} taskChange = {setTask} addTask= {addTask}/>
      <DisplayTask tasks={tasks}/>
    </div>
  )
}

export default TodoApp
