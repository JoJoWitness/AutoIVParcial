import React from 'react';

interface DBcolumnProps {
  day: number;
  venta1: number;
  venta2: number;
  venta3: number;
}

export const DBcolumn: React.FC<DBcolumnProps> = ({ day, venta1, venta2, venta3 }) => {
  return(
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-[100px] h-[50px]  bg-secondary">
        <p>{day}</p>
      </div>
      <div className="flex items-center justify-center w-[100px] h-[50px]  bg-primary">
        <p>{venta1}</p>
      </div>
      <div className="flex items-center justify-center w-[100px] h-[50px]  bg-tertiary">
        <p>{venta2}</p>
      </div>
      <div className="flex items-center justify-center w-[100px] h-[50px]  bg-primary">
        <p>{venta3}</p>
      </div>
    </div>
  )
}