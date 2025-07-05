import React from 'react';

const BoxDisplay = ({ boxes }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      {boxes.map((color, i) => (
        <div
          key={i}
          style={{
            backgroundColor: color,
            width: 50,
            height: 50,
            border: "1px solid #000",
            borderRadius: "4px",
          }}
          title={color}
        />
      ))}
    </div>
  );
};

export default BoxDisplay;
