import React, { useEffect, useState } from "react";

const EvenNumber = () => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const arr = [];

    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        arr.push(i);
      }
    }
    setNumbers(arr);
  }, []);

  return (
    <div className="flex items-center gap-3 justify-center   w-full h-screen flex-wrap">
      {numbers.map((item, index) => (
        <p key={index} className={`w-5.5 h-5 flex items-center justify-center ${ item === 10 ? "bg-green-500" : " bg-red-500"} `}>{item}</p>
      ))}
    </div>
  );
};

export default EvenNumber;
