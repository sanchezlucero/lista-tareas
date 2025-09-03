import { MdCreate, MdDelete } from "react-icons/md";
import "./../index.css";
import React, { useEffect, useState } from "react";
import Drawer from "./Drawer";
import Modal from "./Modal";

const TaskList = ({ tasks }) => {
  const [tareas, setTareas] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editText, setEditText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idSelected, setIdSelected] = useState(0);

  useEffect(() => {
    console.log("tasks: ", tasks);
    const listSaved = JSON.parse(localStorage.getItem("tasks"));
    console.log("listSaved: ", listSaved);
    setTareas(listSaved);
  }, [tasks]);

  const headers = ["Tareas", "Acciones"];

  const handleEditTask = (item) => {
    setSelectedTask(item);
    setEditText(item.text);
    setIsDrawerOpen(true);
  };

  const handleDeleteTask = (item) => {
    setShowModal(true);
    setIdSelected(item.id);
  };
  const saveText = () => {
    console.log("selectedTask: ", selectedTask);
    const listSaved = JSON.parse(localStorage.getItem("tasks"));

    const updatedTasks = listSaved.map((item) => {
      if (item.id === selectedTask.id) {
        return { ...item, text: editText }; // ✅ crea copia modificada
      }
      return item; // ✅ devuelve los que no cambian
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setTareas((prevTareas) =>
      prevTareas.map((t) =>
        t.id === selectedTask.id ? { ...t, text: editText } : t
      )
    );
    setIsDrawerOpen(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    setShowModal(false);

    const listSaved = JSON.parse(localStorage.getItem("tasks"));
    const newList = listSaved.filter((item) => item.id !== idSelected);
    setTareas(newList);
    const addNewList = JSON.stringify(newList);
    localStorage.setItem("tasks", addNewList);
  };

  return (
    <div className="sub-body">
      <div
        style={{
          width: "100%",
        }}
      >
        <div className="tabla-css">
          {headers.map((h, i) => (
            <div key={`header-${i}`} className={`header `}>
              {h}
            </div>
          ))}
          {tareas?.map((item, i) => (
            <React.Fragment key={i}>
              <div className="cell">{item.text}</div>
              <div className="cell">
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "17px",
                    color: "#6C5CE7",
                  }}
                  onClick={() => handleEditTask(item)}
                >
                  <MdCreate />
                </button>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "17px",
                    color: "#e74c3c",
                  }}
                  onClick={() => handleDeleteTask(item)}
                >
                  <MdDelete />
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
        <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          {selectedTask && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <label>Tarea </label>
              <textarea
                style={{
                  height: "24px",
                  border: "1px solid #ccc",
                  borderRadius: "6px",
                  padding: "4px",
                  fontSize: "14px",
                  color: "#000",
                  width: "100%",
                }}
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <button
                className="button-add"
                style={{ marginTop: "5px" }}
                onClick={() => saveText(selectedTask)}
              >
                Guardar
              </button>
            </div>
          )}
        </Drawer>
      </div>
      {showModal && <Modal onCancel={handleCancel} onConfirm={handleConfirm} />}
    </div>
  );
};

export default TaskList;
