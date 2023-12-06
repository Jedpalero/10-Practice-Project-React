import React, { useState } from "react";

const ToggleButtonColor = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
    setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white");
  };

  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
        >
          {backgroundColor === "white" ? "White Theme" : "Black Theme"}
        </button>
        <section className="content">
          <h1>Welcome To A Real World</h1>
        </section>
      </section>
    </>
  );
};

export default ToggleButtonColor;