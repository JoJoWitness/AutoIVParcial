
interface Props {
  title: string;
  current: number;
  img: ImageMetadata;
}


export const VerticalImgContainer: React.FC<Props> = ({title, current, img}) => {

  return(

<div className="flex flex-col">
  <div className="bg-primary h-[35px] w-[150px] rounded-t-[30px] flex flex-col items-center justify-center text-lg text-background font-bold">
    <p>{title}</p>
  </div>
  <img src={img.src} alt="barra vertical" className="w-[150px] h-[150px]"/>
  <div className="bg-primary h-[60px] w-[150px] rounded-b-[30px] flex flex-col items-center justify-center text-2xl text-background font-bold">
    <p>{current}</p>
  </div>

</div>
  )
}