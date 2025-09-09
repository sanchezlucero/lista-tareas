import { useEffect, useState } from "react";
import "../styles/Message.css";
import { FaCheckCircle } from "react-icons/fa";

const AlertMessage = ({ type, message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);
  const alertIcons = {
    success: <FaCheckCircle style={{fontSize:"20px"}}/>,
    // error: <FaTimesCircle />,  // ejemplo si luego agregas más
    // warning: <FaExclamationTriangle />,
    // info: <FaInfoCircle />
  };

  const icon = alertIcons[type];

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={`alert alert-${type}`}>
      {icon}
      <span className="alert-message">{message}</span>
    </div>
  );
};

export default AlertMessage;
