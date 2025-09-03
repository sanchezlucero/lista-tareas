import { CiWarning } from "react-icons/ci";
import "./../styles/Modal.css";

const Modal = ({ onCancel, onConfirm }) => {
  const handleCancel = () => {
    onCancel();
  };
  const handleConfirm = () => {
    onConfirm();
  };
  return (
    <>
      <div className="centered-container">
        <div className="modal">
          <div className="modal-icon">
            <button className="icon-warning">
              <CiWarning />
            </button>
          </div>
          <div className="modal-container">
            <div className="modal-title">¿Deseas eliminar esta tarea?</div>
            <div className="modal-body">
              <button className="button-cancel" onClick={handleCancel}>
                Cancelar
              </button>
              <button className="button-confirm" onClick={handleConfirm}>
                Si, eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
