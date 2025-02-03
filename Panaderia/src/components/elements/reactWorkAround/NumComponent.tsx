import { useState } from "react";

interface NumComponentProps {
  number: number;
}

export const NumComponent = ({ number }: NumComponentProps) => {
  
  console.log(number)
  
    return(
        <span className="font-bold">  
          {number}
        </span>
    )
}