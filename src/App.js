import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react'

function App() {
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

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task Remain'}
    </div> 
    
  );
}

export default App;
