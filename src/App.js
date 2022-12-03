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
] )  
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div> 
    
  );
}

export default App;
