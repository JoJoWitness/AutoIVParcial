import pan from '../../../assets/loaf-7445434_1920.jpg';
import galletas from "../../../assets/cookies-8082386_1920.jpg"
import ponques from "../../../assets/muffin-4430010_1920.jpg"
import {HorizontalImgContainer} from '../HorizontalImgContainer'
import { BarChart } from '@mui/x-charts';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../layouts/Layout.astro';
import { useEffect, useState } from 'react';


export const ProductComponent = () => {

  const [products, setProducts] = useState<Record<string, any> | null>(null);
  const [totalProducts, setTotalProducts] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    

    fetchDataProducts();
    fetchDataTotalProduct();
  }, []);


  const fetchDataProducts = async () => {
    try {
      const docRef = doc(db, 'panaderia', 'existenciaProductos');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProducts(docSnap.data());
      }
    } catch (error) {
      console.error('Error fetching document from Firestore:', error);
    }
  };

  const fetchDataTotalProduct = async () => {
    try {
      const docRef = doc(db, 'panaderia', 'produccion');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
      
        setTotalProducts(docSnap.data());
      }
    } catch (error) {
      console.error('Error fetching document from Firestore:', error);
    }
  };

  if (!products || !totalProducts) {
    
    return <div>Loading...</div>;
  }

  return(
    <div className="flex flex-col w-full justify-bewteen gap-[30px] ">
    
		<div className="flex gap-4 w-full h-full bg-background rounded-[25px] px-12 py-6 max-h-[500px] items-center">
			<div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Producción de pan de ayer</p>
           {/* @ts-ignore */}
        <HorizontalImgContainer current={totalProducts.pan} img={pan}/>
      </div>
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>

      <div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Producción de pan en la semana</p>
        {/* @ts-ignore */}
        <BarChart
        
          xAxis={[{ scaleType: 'band', data: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], }]}
    
          series={[{ data: [products?.['lunes']?.[0] ?? 0, products?.['martes']?.[0] ?? 0, products?.['miercoles']?.[0] ?? 0, products?.['jueves']?.[0] ?? 0, products?.['viernes']?.[0] ?? 0] }]}
          width={450}
          height={220}
          colors={['#ffcc73']}
        />
      </div> 
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>
      <div className="flex flex-col gap-12 h-full" >
        <p className="text-tertiary font-medium">Existencia </p>
        <p className="text-tertiary font-bold text-3xl items-center">
            {/* @ts-ignore */}
             {totalProducts.pan} <br/>
              Unidades 
          </p>
      </div>
		</div>

		<div className="flex gap-4 w-full h-full bg-background rounded-[25px] px-12 py-6 max-h-[500px] items-center">
			<div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Producción de galleta de ayer</p>
          {/* @ts-ignore */}
        <HorizontalImgContainer current={totalProducts.galletas} img={galletas}/>
      </div>
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>

      <div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Producción de galletas en la semana</p>
          {/* @ts-ignore */}
        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], }]}
          series={[{ data: [products?.['lunes']?.[1] ?? 0, products?.['martes']?.[1] ?? 0, products?.['miercoles']?.[1] ?? 0, products?.['jueves']?.[1] ?? 0, products?.['viernes']?.[1] ?? 0] }]}
          width={450}
          height={220}
          colors={['#dc4f43']}
          
        />
		</div>
    <div className="h-3/4 w-[2px] mx-8 bg-primary"/>
      <div className="flex flex-col gap-12 h-full" >
        <p className="text-tertiary font-medium">Existencia </p>
          {/* @ts-ignore */}
        <p className="text-tertiary font-bold text-3xl items-center">{totalProducts.galletas}<br/> docenas </p>
      </div>
     
			
		</div>

    <div className="flex gap-4 w-full h-full bg-background rounded-[25px] px-12 py-6 max-h-[500px] items-center mb-[30px]">
			<div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Producción de galleta de ayer</p>
          {/* @ts-ignore */}
        <HorizontalImgContainer current={totalProducts.ponques} img={ponques}/>
      </div>
      <div className="h-3/4 w-[2px] mx-8 bg-primary"/>

      <div className="flex flex-col gap-8 h-full" >
        <p className="text-tertiary font-medium">Producción de galletas en la semana</p>

        <BarChart
          xAxis={[{ scaleType: 'band', data: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], }]}
        
          series={[{ data: [products?.['lunes']?.[2] ?? 0, products?.['martes']?.[2] ?? 0, products?.['miercoles']?.[2] ?? 0, products?.['jueves']?.[2] ?? 0, products?.['viernes']?.[2] ?? 0] }]}
          width={450}
          height={220}
          colors={['#cf005d']}
        />
		</div>
    <div className="h-3/4 w-[2px] mx-8 bg-primary"/>
      <div className="flex flex-col gap-12 h-full" >
        <p className="text-tertiary font-medium">Existencia </p>
          {/* @ts-ignore */}
        <p className="text-tertiary font-bold text-3xl items-center">{totalProducts.ponques}<br/> Unidades </p>
      </div>
	
	</div>
  </div>
  )
}
