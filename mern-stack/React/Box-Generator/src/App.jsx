import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };

  return (
    <>
      <ColorForm onAddBox={addBox} />
      <BoxDisplay boxes={boxes} />
    </>
  );
}

export default App;
