import { useState } from "react";

const CustomCounter = () => {
  const [increment, setIncrement] = useState(0);
  return (
    <>
      <h3>CustomCounter component</h3>
      <div className="flex gap-4 mx-5">
        <button
          onClick={() => setIncrement((prev) => prev + 1)}
          className="custom-button"
        >
          Increment
        </button>
        <button
          onClick={() => setIncrement((prev) => prev - 1)}
          className="custom-button"
        >
          Decrement
        </button>
        <button onClick={() => setIncrement(0)} className="custom-button">
          Reset
        </button>
      </div>
      <h3>Result: {increment}</h3>
    </>
  );
};

export default CustomCounter;
