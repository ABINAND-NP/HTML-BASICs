import React, { useState } from "react";

const ButtonHide = () => {
  const [buttonA, setButtonA] = useState(true);
  const [buttonB, setButtonB] = useState(false);



  const handleClik = () => {
    console.log("click");
    
    setButtonA((prev) => !prev);
    setButtonB((prev) => !prev);
  };
  
  return (
    <div className="flex gap-4">
      <button
        disabled={buttonB}
        onClick={handleClik}
        className={`w-50 h-10 ${buttonA ? "cursor-pointer bg-green-400 w" : "cursor-not-allowed  "}`}
      >
        Button A
      </button>
      <button
        className={` w-50 h-10 ${buttonB ? "cursor-pointer  bg-green-400 w" : "cursor-not-allowed "} `} 
        onClick={handleClik} 
        disabled={buttonA}
      >
        Button B
      </button>
    </div>
  );
};

export default ButtonHide;
