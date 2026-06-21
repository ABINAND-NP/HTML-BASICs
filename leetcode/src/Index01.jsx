import React, { useEffect, useState } from "react";

const Index01 = () => {
  const [inputvalue, setInputValue] = useState("");
  const [value , setValue] = useState([]);

  const number = inputvalue.split(",").map((item) => Number(item.trim()));

  useEffect(() => {

    let temp = [];

    for(let i = 1 ; i <= 20 ; i++ ){

      temp.push(i)
    
    }

    setValue(temp);

  },[]);

  return (
    <div className="flex gap-3 items-center justify-center w-full h-screen bg-red-500">
      <div>
        <input
          type="text"
          placeholder="enter the number"
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="flex gap-3">{value.map((Num,index) => (

        <p key={index}
            className= {`w-10 h-10 flex items-center justify-center ${ number.includes(Num) ? "bg-green-500" : "bg-blue-600"}`}
        >
          {Num}
        </p>

      ))}</div>
    </div>
  );
};

export default Index01;
