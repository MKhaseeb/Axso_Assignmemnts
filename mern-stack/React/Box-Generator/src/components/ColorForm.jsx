import React, { useState } from 'react';

const ColorForm = ({ onAddBox }) => {
  const [boxcolor, setBoxColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!boxcolor.trim()) return;
    onAddBox(boxcolor.trim());
    setBoxColor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Color</h1>
      <input
        type="text"
        value={boxcolor}
        onChange={(e) => setBoxColor(e.target.value)}
        placeholder="Enter a color"
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default ColorForm;
