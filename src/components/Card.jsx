import React from "react";

const Card = ({ name, email, id }) => {
  return (
    
      <div className=" bg-green-400 items-center justify-center">
        {/* {Cards} */}
        <div className="bg-green-700 font-semibold text-center rounded-2xl border-green-500 shadow-lg shadow-black p-4 w-[240px] h-[300px] hover:scale-105 duration-300">
          <img
            className="mx-auto"
            src={`https://robohash.org/${id}?200x200`}
            alt="robo1"
          />
          <div>
            <h2 className="text-lg text-gray-700">{name}</h2>
            <p className="text-sm text-gray-400">{email}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
