import { CiWarning } from "react-icons/ci";
import "./../styles/Modal.css";
import { IoMdClose } from "react-icons/io";

const Modal = ({ onCancel, onConfirm }) => {
  const handleCancel = () => {
    onCancel();
  };
  const handleConfirm = () => {
    onConfirm();
  };
  const handleClose = () => {
    onCancel();
  };
  return (
    <>
      <div className="centered-container">
        <div className="modal">
          <div className="button-close">
            <button className="icon-close" onClick={handleClose}>
              <IoMdClose />
            </button>
          </div>
          <div className="" style={{ display: "flex" }}>
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
      </div>
    </>
  );
};

export default Modal;
