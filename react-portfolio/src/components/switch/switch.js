import React, { useState } from "react";
import "./switch.css";

function Switch({toggleTheme, isDarkTheme}) {
  const [isToggled, setIsToggled] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkTheme} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default Switch;