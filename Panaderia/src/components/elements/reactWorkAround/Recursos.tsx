import harina from '../../../assets/flour-791839_1920.jpg'
import azucar from '../../../assets/sugar-cubes-258116_1920.jpg'
import mantequilla from '../../../assets/food-3179853_1920.jpg'
import leche from '../../../assets/milk-can-1990075_1920.jpg';
import huevos from '../../../assets/eggs-2048476_1920.jpg';
import {HorizontalImgContainer} from '../../../components/elements/HorizontalImgContainer';
import { BarChart } from '@mui/x-charts';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../layouts/Layout.astro';
import { useEffect, useState } from 'react';




export const RecursosComponent =  () => {
  
const [ingredientes, setIngredientes] = useState<Record<string, any> | null>(null);
 

  const fetchData = async () => {
    try {
      const docRef = doc(db, 'panaderia', 'existenciaIngredientes'); 
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
      
        setIngredientes(docSnap.data())
        
      } 
    } catch (error) {
      console.error('Error fetching document from Firestore:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  if (!ingredientes) {
    return <div>Loading...</div>;
  }

   


  return(
    <div className="flex flex-col w-full justify-bewteen gap-[30px] ">
    
		<div className="flex gap-4 w-full h-full bg-background rounded-[25px] px-12 py-6 max-h-[500px] items-center">
			<div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Existencia de harina (kg)</p>
        {/* @ts-ignore */}
        <HorizontalImgContainer current={ingredientes['current'][0]} className:load img={harina}/>
      </div>
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>

      <div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Existencia de harina en la semana</p>
       
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Sabado', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], }]}
          series={[{ data: [ingredientes['sabado'][0],ingredientes['lunes'][0], ingredientes['martes'][0], ingredientes['miercoles'][0], ingredientes['jueves'][0], ingredientes['viernes'][0]] }]}
          width={450}
          height={220}
          colors={['#ffcc73']}
        />
      </div> 
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>
      <div className="flex flex-col gap-12 h-full" >
        <p className="text-tertiary font-medium">Ultimo abastecimiento </p>
         {/* @ts-ignore */}
        <p className="text-tertiary font-bold text-3xl items-center">Dia: {ingredientes['abastecimiento']} </p>
      </div>
      
		</div>

		<div className="flex gap-4 w-full h-full bg-background rounded-[25px] px-12 py-6 max-h-[500px] items-center">
			<div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Existencia de azucar (kg)</p>
          {/* @ts-ignore */}
        <HorizontalImgContainer current={ingredientes['current'][1]} img={azucar}/>
      </div>
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>

      <div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Existencia de harina en la semana</p>
          {/* @ts-ignore */}
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Sabado', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], }]}
          series={[{ data: [ingredientes['sabado'][1],ingredientes['lunes'][1], ingredientes['martes'][1], ingredientes['miercoles'][1], ingredientes['jueves'][1], ingredientes['viernes'][1]]}]}
          width={450}
          height={220}
          colors={['#dc4f43']}
        />
		  </div>
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>
      <div className="flex flex-col gap-12 h-full" >
        <p className="text-tertiary font-medium">Ultimo abastecimiento </p>
          {/* @ts-ignore */}
        <p className="text-tertiary font-bold text-3xl items-center">Dia: {ingredientes['abastecimiento']} </p>
      </div>
     
			
		</div>

    <div className="flex gap-4 w-full h-full bg-background rounded-[25px] px-12 py-6 max-h-[500px] items-center mb-[30px]">
			<div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Existencia de mantequilla (kg)</p>
          {/* @ts-ignore */}
        <HorizontalImgContainer  current={ingredientes['current'][2]} img={mantequilla}/>
      </div>
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>

      <div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Existencia de mantequilla en la semana</p>
  
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Sabado', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], }]}
          series={[{ data: [ingredientes['sabado'][2],ingredientes['lunes'][2], ingredientes['martes'][2], ingredientes['miercoles'][2], ingredientes['jueves'][2], ingredientes['viernes'][2]] }]}
          width={450}
          height={220}
          colors={['#cf005d']}
        />
		</div>
    <div className="h-3/4 w-[2px] mx-8 bg-primary"/>
      <div className="flex flex-col gap-12 h-full" >
        <p className="text-tertiary font-medium">Ultimo abastecimiento </p>
          {/* @ts-ignore */}
        <p className="text-tertiary font-bold text-3xl items-center">Dia: {ingredientes['abastecimiento']} </p>
      </div>
	
	</div>

  <div className="flex gap-4 w-full h-full bg-background rounded-[25px] px-12 py-6 max-h-[500px] items-center mb-[30px]">
    <div className="flex flex-col gap-8 h-full" >
      <p className="text-tertiary font-medium">Existencia de huevos (unidades)</p>
     
      <HorizontalImgContainer  current={ingredientes['current'][3]} img={huevos}/>
    </div>
    <div className="h-3/4 w-[2px] mx-8 bg-primary"/>

    <div className="flex flex-col gap-8 h-full" >
      <p className="text-tertiary font-medium">Existencia de huevos en la semana</p>
        {/* @ts-ignore */}
      <BarChart
        xAxis={[{ scaleType: 'band', data: ['Sabado', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], }]}
        series={[{ data: [ingredientes['sabado'][3],ingredientes['lunes'][3], ingredientes['martes'][3], ingredientes['miercoles'][3], ingredientes['jueves'][3], ingredientes['viernes'][3]]}]}
        width={450}
        height={220}
    
        colors={['#bb109d']}
      />
  </div>
  <div className="h-3/4 w-[2px] mx-8 bg-primary"/>
    <div className="flex flex-col gap-12 h-full" >
      <p className="text-tertiary font-medium">Ultimo abastecimiento </p>
        {/* @ts-ignore */}
      <p className="text-tertiary font-bold text-3xl items-center">Dia: {ingredientes['abastecimiento']}</p>
    </div>

</div>

<div className="flex gap-4 w-full h-full bg-background rounded-[25px] px-12 py-6 max-h-[500px] items-center mb-[30px]">
  <div className="flex flex-col gap-8 h-full" >
    <p className="text-tertiary font-medium">Existencia de leche (litros)</p>
      {/* @ts-ignore */}
    <HorizontalImgContainer  current={ingredientes['current'][4]} img={leche}/>
  </div>
  <div className="h-3/4 w-[2px] mx-8 bg-primary"/>

  <div className="flex flex-col gap-8 h-full" >
    <p className="text-tertiary font-medium">Existencia de leche</p>
      {/* @ts-ignore */}
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Sabado', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], }]}
      series={[{ data: [ingredientes['sabado'][4],ingredientes['lunes'][4], ingredientes['martes'][4], ingredientes['miercoles'][4], ingredientes['jueves'][4], ingredientes['viernes'][4]] }]}
      width={450}
      height={220}
     
      colors={['#9b57cc']}
    />
</div>
<div className="h-3/4 w-[2px] mx-8 bg-primary"/>
  <div className="flex flex-col gap-12 h-full" >
    <p className="text-tertiary font-medium">Ultimo abastecimiento </p>
      {/* @ts-ignore */}
    <p className="text-tertiary font-bold text-3xl items-center">Dia: {ingredientes['abastecimiento']} </p>
  </div>

</div>

  </div>
  )
}