import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      // (e.target.className === container) if you click to any container;
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <>
      <section
        className="container"
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
      >
        {showInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} /> // npm i react-icons --save(FaSearch)
        )}
      </section>
    </>
  );
};

export default HiddenSearchBar;
