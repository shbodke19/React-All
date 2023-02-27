import React, { useState } from "react";

const Child2 = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  };
  return (
    <>
      <input
        type="text"
        id="input"
        aria-label="input"
        onChange={handleChange}
        value={activeColor}
      />
    </>
  );
};

export default Child2;
