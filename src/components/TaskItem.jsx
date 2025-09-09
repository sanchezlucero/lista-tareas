import { useState } from "react";
import "./../App.css";
import AlertMessage from "./AlertMessage";

const TaskItem = ({ addTask }) => {
  const [input, setInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleAdd = () => {
    if (input.trim()) {
      addTask(input.trim());
      setInput("");
   
    }
       setShowAlert(true)
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
      {showAlert && (
        <AlertMessage
          type="success"
          message="La tarea se agregó correctamente"
          duration={3000} // se cierra en 4 segundos
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default TaskItem;
