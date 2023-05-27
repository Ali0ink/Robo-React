import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className=' bg-green-400 flex items-center justify-center'>
    <div className='w-[1200px] h-full '>
      <div className="bg-green-400 grid item-center justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-[4px]  p-4 gap-4">
        {robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default CardList;
