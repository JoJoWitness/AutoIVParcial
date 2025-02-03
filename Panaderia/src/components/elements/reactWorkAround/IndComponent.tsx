import {VerticalImgContainer} from '../verticalImgContainer';
import {IngredientBar} from '../IngredientBar';
import pan from '../../../assets/loaf-7445434_1920.jpg';
import galletas from "../../../assets/cookies-8082386_1920.jpg"
import ponques from "../../../assets/muffin-4430010_1920.jpg"
import { PieChart } from '@mui/x-charts';
import { collection, doc, getDoc, getDocs } from "firebase/firestore"; 
import { db } from '../../../layouts/Layout.astro';
import { useEffect, useState } from 'react';




export const IndComponent = () => {


  const [ingredientes, setIngredientes] = useState<any>(null);
  const [produccion, setProduccion] = useState<any>(null);
  const [ventas, setVentas] = useState<any>(null);
  const [dias, setDias] = useState<any>(null);


  useEffect(() => {
    fetchDataIngr();
    fetchDataProducts();
    fetchDataVentas();
    fetchDataDias();
  }, []);


  const fetchDataIngr = async () => {
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
  
  const fetchDataProducts = async () => {
    try {
      const docRef = doc(db, 'panaderia', 'produccion'); 
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setProduccion(docSnap.data());
      } 
    } catch (error) {
      console.error('Error fetching document from Firestore:', error);
    }
  };
  
  
  const fetchDataVentas = async () => {
    try {
      const docRef = doc(db, 'panaderia', 'ventas'); 
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setVentas(docSnap.data());
      } 
    } catch (error) {
      console.error('Error fetching document from Firestore:', error);
    }
  };
  
  
  
  
  const fetchDataDias = async () => {
   
    try {
      const docRef = doc(db, 'panaderia', 'dia'); 
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setDias(docSnap.data());
      } 
    } catch (error) {
      console.error('Error fetching document from Firestore:', error);
    }
  };
  
  if (!ingredientes || !produccion || !ventas || !dias) {

    return <div>Loading...</div>;
  }

  return(
    <>
      <div className="flex flex-col w-3/5 justify-bewteen gap-[30px]">
		<div className="flex flex-col gap-4 w-full h-full bg-background rounded-[25px] p-6 max-h-[500px]">
			<p className="text-tertiary font-medium">Materia Prima</p>
			<div className="flex justify-center gap-8 w-full h-full">
			 {/* @ts-ignore */}
			<IngredientBar text='Harina' total={450} current={ingredientes[dias.dia][0]} unit='kg' />
			{/* @ts-ignore */}
			<IngredientBar text='Azucar' total={225} current={ingredientes[dias.dia][1]} unit='kg' />
			{/* @ts-ignore */}
			<IngredientBar text='Mantequilla' total={240} current={ingredientes[dias.dia][2]} unit='kg' />
			{/* @ts-ignore */}
			<IngredientBar text='Huevos' total={600} current={ingredientes[dias.dia][3]} unit='U' />
			{/* @ts-ignore */}
			<IngredientBar text='Leche' total={65} current={ingredientes[dias.dia][4]} unit='L' />
		
		</div>
		</div>
		<div className="flex flex-col gap-4 w-full h-full bg-background rounded-[25px] p-6 max-h-[500px]">
			<p className="text-tertiary font-medium">Existencia de productos</p>
			<div className="flex justify-center gap-8 w-full h-full">
				{/* @ts-ignore */}
				<VerticalImgContainer title={"Pan"} current={produccion.pan} img={pan} />
				{/* @ts-ignore */}
				<VerticalImgContainer title={"Galletas"} current={produccion.galletas} img={galletas} />
				{/* @ts-ignore */}
				<VerticalImgContainer title={"Ponques"} current={produccion.ponques} img={ponques} />
			</div>
			
		</div>
	
	</div>

	<div className="flex flex-col gap-8 w-2/5 h-full bg-background rounded-[25px]  p-6 justify-center">
		<div className="flex flex-col gap-10 ">
			<p className="text-tertiary font-medium">Ventas de ayer</p>
			<PieChart
				series={[
					{
					
						data: [
								// @ts-ignore
							{ id: 0, value: ventas['ayer'][0], label: 'Pan' },
								// @ts-ignore
							{ id: 1, value: ventas['ayer'][1], label: 'Galletas' },
								// @ts-ignore
							{ id: 2, value: ventas['ayer'][2], label: 'Ponque' },
						],
					},
				]}
				colors={['#dc4f43', '#F7924f', '#FFcc73']}
				width={400}
				height={200}
	
		
			/>
		</div>
		<div className="flex flex-col gap-10 ">
			<p className="text-tertiary font-medium">Ventas de Totales</p>
			<PieChart
				series={[
					{
						data: [
								// @ts-ignore
							{ id: 0, value: ventas['totales'][0], label: 'Pan' },
								// @ts-ignore
							{ id: 1, value: ventas['totales'][1], label: 'Galletas' },
								// @ts-ignore
							{ id: 2, value: ventas['totales'][2], label: 'Ponque' },
						],
					},
				]}
				colors={['#00cadc', '#49c3fb', '#65a6fa']}
				width={400}
				height={200}
	
			/>
		</div>
	
		
	</div>

    </>
    

  )
}