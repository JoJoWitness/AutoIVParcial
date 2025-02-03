
interface Props {
  current: number;
  img: ImageMetadata;
}



export const HorizontalImgContainer = ({current, img}: Props) => {



  return(
<div className="flex">
  <img src={img.src} alt="barra vertical" className="w-[150px] h-[150px] rounded-l-[30px]"/>
  <div className="bg-primary h-[150px] w-[75px] rounded-r-[30px] flex flex-col items-center justify-center text-1xl text-background font-bold">
    <p>{current}</p>
  </div>

</div>
  )



}