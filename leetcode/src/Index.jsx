import React, { useEffect, useState } from "react";

const Index = () => {
  const [inputNum, setInputNum] = useState("");
  const [squ, setSqu] = useState([]);

  // Convert input string to number array (safe)
  const num = inputNum
    .split(",")
    .map(item => Number(item.trim()))
    

  // Generate numbers 1 to 20
  useEffect(() => {
    const temp = [];

    for (let i = 1; i <= 20; i++) {
      temp.push(i);
    }

    setSqu(temp);
  }, []);

  return (
    <div className="flex flex-col items-center  h-screen w-full bg-blue-400 gap-4">
      
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter numbers (e.g. 1,2,3)"
        value={inputNum}
        onChange={(e) => setInputNum(e.target.value)}
        className="p-2 rounded border"
      />

      {/* Numbers Display */}
      <div className="flex gap-2 flex-wrap">
        {squ.map((item, index) => (
          <p
            key={index}
            className={`px-3 py-1 rounded text-white ${
              num.includes(item) ? "bg-green-500" : "bg-blue-600"
            }`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Index;