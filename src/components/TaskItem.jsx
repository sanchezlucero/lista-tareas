import { useState } from "react";
import "./../App.css";

const TaskItem = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
    }
  };

  return (
    <div className="sub-body">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe una tarea..."
        className="input-form"
      />
      <button className="button-add" onClick={handleAdd}>
        Agregar
      </button>
    </div>
  );
};

export default TaskItem;
