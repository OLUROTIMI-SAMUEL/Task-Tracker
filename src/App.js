///import React from 'react'     // this import statement in for class
import Header from "./component/Header";
import { useState } from "react";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appiontment",
      day: "Feb 5th ay 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 5th ay 3:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "GO out for shoping",
      day: "Feb 6th ay 2:50pm",
      reminder: false,
    },
  ]);
  //  // const name = 'Dami'
  //  // const x = false
  //  //<h2>Hello {x ? 'Yes' : 'No'}</h2>  // this should be inside the div container

  //Add Task
  // const addTask = (task) => {
  //   console.log(task);
  // };
//Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );

    // const onToggle = () => {
    //   console.log('toggle')
    // }
  };

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
}

// here we are trying to create a class after importing class
// class App extends React.Component{
//   render(){
//     return <h1>Hello from the class</h1>
//   }
// }

export default App;
