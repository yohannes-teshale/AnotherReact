import React, { useState } from "react";
import Card from "./Card";

const ExpenseItem = (props:any) => {
    const [them,they] =useState(props.title);
    const handler=()=>{
        they("changed bitch!")
    }


    const month :string=props.date.toLocaleString("en-US",{month:'long'});
    const year :string= props.date.toLocaleString("en-US",{year:'numeric'});
    const day :string= props.date.toLocaleString("en-US",{day:"numeric"});
  return (
    <Card className=" grid  grid-cols-5 space-x-8 bg-gray-100  items-center md:px-6 md:py-2 py-1 px-2 rounded-2xl md:text-lg text-sm   border-b-2 border-gray-200 text-white drop-shadow-md">
      <div className=" flex flex-col bg-gray-600 items-center rounded-xl p-1 w-24 border-2 border-gray-300 hover:scale-125 duration-150 ease-in active:hidden">
        <div className=" text-sm  font-bold">
            {month}
        </div>
        <div className=" text-sm">
            {year}
        </div>
        <div className=" text-4xl flex-grow">
            {day}
        </div>
      </div>
      <div className=" col-span-2 text-gray-800">
        <h2>{them}</h2>
      </div>
      <div className=" bg-orange-600 ring-2 ring-orange-800 h-10 flex items-center md:px-3 px-1 rounded-lg justify-center ">
        ${props.amount}
      </div>
      <button onClick={handler} className=" bg-gradient-to-t from-orange-300 to-orange-600 p-1 rounded-lg border-2 border-orange-800">change title</button>
    </Card>
  );
};

export default ExpenseItem;
