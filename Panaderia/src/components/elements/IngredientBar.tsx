
interface Props {
  text: string;
  total: number;
  current: number;
  unit: string;
}



export const IngredientBar: React.FC<Props> = ({text, total, current, unit}) => {

  let barheight = ((current/total)*100)
  return(


<div className="h-full flex flex-col items-center text-tertiary " >
  <div className="border border-tertiary w-[50px] h-full flex flex-col justify-end">
   <div className="bg-primary  w-full" style={{ height: `${barheight}%` }}></div> 
    </div>
  {text}
  <p>
    {current} {unit}
  </p>
  
</div>
  )
}