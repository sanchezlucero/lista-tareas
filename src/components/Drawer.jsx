import React from "react";
import "./../styles/Drawer.css";

const Drawer = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null;
  return (
    <>
      <div className="drawer-overlay" onClick={onClose}></div>
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <button className="drawer-close" onClick={onClose}>
          ✕
        </button>
        <div className="drawer-header">Editar Tarea</div>
        <div className="drawer-content">{children}</div>
      </div>
    </>
  );
};

export default Drawer;
