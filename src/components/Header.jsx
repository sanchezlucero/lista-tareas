import { useEffect, useState } from "react";
import "./../styles/Switch.css";
import { CiDark, CiLight } from "react-icons/ci";

const Header = () => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <header style={{ background: dark ? "#353b48" : "" }}>
      <h1 style={{ color: "#fff", flex: "1", display: "flex" }}>
        Lista de Tareas
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CiLight style={{ fontSize: "34px", color: "#f1c40f" }} />
        <label className="switch">
          <input type="checkbox" onChange={toggleDark} checked={dark} />
          <span className="slider" />
        </label>
        <CiDark style={{ fontSize: "32px", color: "#fff" }} />
      </div>
    </header>
  );
};

export default Header;
