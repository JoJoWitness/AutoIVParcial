import { PieChart } from '@mui/x-charts';
import { DBcolumn } from '../../../components/elements/dbColumn';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../layouts/Layout.astro';
import { useEffect, useState } from 'react';


export const VentasComponent = () => {

  
  const [sales, setSales] = useState<Record<string, any> | null>(null);

  const fetchData = async () => {
  try {
    const docRef = doc(db, 'panaderia', 'ventas'); 
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setSales(docSnap.data());
    } 
  } catch (error) {
    console.error('Error fetching document from Firestore:', error);
  }
};

useEffect(() => {
  fetchData()
},[]);

if (!sales ) {
    
  return <div>Loading...</div>;
}


  return(
    <div className="flex flex-col w-full justify-bewteen gap-[30px] ">

		<div className="flex gap-3 w-full h-full bg-background rounded-[25px] px-12 py-10 max-h-[500px] items-center">
			<div className="flex flex-col h-full w-full gap-10 ">
				<p className="text-tertiary font-medium">Historial de ventas</p>
				<div className="text-background font-bold flex flex-col h-4/5 w-full overflow-x-scroll bg-secondary">
						<div className="flex w-full h-1/4 bg-secondary h-[50px]">
							<div className="flex flex-col items-center justify-center w-[200px] border-r-2 border-background">
								<p>Productos</p>
							</div>
							<div className="flex flex-col items-center justify-center flex-1">
								<p>Ventas por dia</p>
							</div>
						</div>

						<div className="flex w-full h-full">
							<div className="flex flex-col">
								<div className="flex items-center justify-center w-[200px] h-[50px] border-r-2 border-background bg-secondary">
								</div>
								<div className="flex items-center justify-center w-[200px] h-[50px] border-r-2 border-background bg-primary">
									<p>Pan</p>
								</div>
								<div className="flex items-center justify-center w-[200px] h-[50px] border-r-2 border-background bg-tertiary">
									<p>Galletas</p>
								</div>
								<div className="flex items-center justify-center w-[200px] h-[50px] border-r-2 border-background bg-primary">
									<p>Ponques</p>
							</div>
							</div>
								{sales['dias'].map((data: number) => (
			
									<DBcolumn 
										day={data}
										venta1={sales['totalesPan'][data]}
										venta2={sales['totalesGalletas'][data]}
										venta3={sales['totalesPonques'][data]}
									
									/>
							))}
						</div>
						
				</div>
				
			</div>
		</div>


    
		<div className="flex gap-4 w-full h-full justify-evenly bg-background rounded-[25px] px-12 py-10 max-h-[500px] items-center">
			<div className="flex flex-col gap-10 ">
				<p className="text-tertiary font-medium">Ventas de ayer</p>
				 {/* @ts-ignore */}
				<PieChart
				
					series={[
						{
							
							data: [
								// @ts-ignore
							{ id: 0, value: sales['ayer'][0], label: 'Pan' },
							// @ts-ignore
							{ id: 1, value: sales['ayer'][1], label: 'Galletas' },
							// @ts-ignore
							{ id: 2, value: sales['ayer'][2], label: 'Ponque' },
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
				  {/* @ts-ignore */}
				<PieChart
					series={[
						{
							data: [
								// @ts-ignore
							{ id: 0, value: sales['totales'][0], label: 'Pan' },
							// @ts-ignore
							{ id: 1, value: sales['totales'][1], label: 'Galletas' },
							// @ts-ignore
							{ id: 2, value: sales['totales'][2], label: 'Ponque' },
							],
						},
					]}
					colors={['#00cadc', '#49c3fb', '#65a6fa']}
					width={400}
					height={200}
				/>
			</div>
		</div>
		
  </div>
  )
}