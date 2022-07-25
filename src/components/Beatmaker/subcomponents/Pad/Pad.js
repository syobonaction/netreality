import React, { useState, useEffect } from "react";
import "./Pad.scss";

function Pad(props) {
  const [isActive, setIsActive] = useState(false);

  let padStyles = {
    backgroundColor: isActive ? "red" : "white",
  };

  useEffect(() => {}, [isActive]);

  const handlePadClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div className="pad_container">
      <div
        className="pad"
        style={{ ...padStyles }}
        onClick={handlePadClick}
      ></div>
    </div>
  );
}

export default Pad;
