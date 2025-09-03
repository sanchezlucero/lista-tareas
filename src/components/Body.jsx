import { useState } from "react";
import TaskItem from "./TaskItem";
import TaskList from "./TaskList";

const Body = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    const listSaved = JSON.parse(localStorage.getItem("tasks")) || [];

    const listTasks = [
      ...listSaved, // ✅ uso lo que había
      { id: Date.now(), text: task, state: true },
    ];

    localStorage.setItem("tasks", JSON.stringify(listTasks));
    setTasks(listTasks);
  };

  return (
    <>
      <div className="body">
        <TaskItem addTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default Body;
