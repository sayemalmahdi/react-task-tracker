import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState} from 'react'

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'December 03 2022 at 09:00 am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'December 03 2022 at 11:00 am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping ',
        day: 'December 04 2022 at 03:00 pm',
        reminder: false,
    }
])

// Delete Task
const deleteTask = (id) => {
  setTasks (tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  // console.log (id)
  setTasks (tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

// Add Task
  const addTask = (task) => {
  const id = Math.floor(Math.random() *1000) +1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask ])
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task Remain'}
    </div> 
    
  );
}

export default App;
