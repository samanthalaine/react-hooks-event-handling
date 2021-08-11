import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={handleClick}>First</button>
      <button onClick={handleClick}>Second</button>
      <button onClick={handleClick}>Third</button>
      <button onClick={handleClick}>Fourth</button>
    </div>
  );
}

export default MultiButton;
