import { arrayUnion, doc, FieldValue, getDoc, increment, updateDoc } from "firebase/firestore";
import { app, db } from "../../layouts/Layout.astro"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";



  

export const Counter  = ()=> {

  const auth = getAuth(app);

  const [dayData, setDayData] = useState<any>(null);
  const [ingredientes, setIngredientes] = useState<any>(null);
  
    const fetchData = async () => {
      try {
        const docRef = doc(db, 'panaderia', 'dia'); 
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          setDayData(docSnap.data());
        } 
      } catch (error) {
        console.error('Error fetching document from Firestore:', error);
    };
  }
  
    useEffect(() => {
      fetchDataIn();
      fetchData();
    }, []);

    const fetchDataIn = async () => {
      try {
        const docRef = doc(db, 'panaderia', 'existenciaIngredientes'); 
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setIngredientes(docSnap.data().current);
        } 
      } catch (error) {
        console.error('Error fetching document from Firestore:', error);
      }
    };


  
  onAuthStateChanged(auth, (user) => {
    if (user) {
    
    } else {
  
      window.location.href = '/login'; 
    }
  });

let realBreadMaded = 100 + Math.floor(Math.random() * 5)
let realCookiesMaded = 150 + Math.floor(Math.random() * 2)
let realCupcakesMaded = 200 + Math.floor(Math.random() * 10)

let realBreadSold = 90 + Math.floor(Math.random() * 10)
let realCookiesSold = 145 + Math.floor(Math.random() * 5)
let realCupcakesSold = 195 + Math.floor(Math.random() * 5)

let DailyFlourUsed = 65 + Math.floor(Math.random() * 1)
let DailySugarUsed = 28 + Math.floor(Math.random() * 2)
let DailyButterUsed = 30 + Math.floor(Math.random() * 2)
let DailyEggsUsed = 100 + Math.floor(Math.random() * 5)
let DailyMilkUsed = 8 + Math.floor(Math.random() * 1)

let weeklyFlourRestock = 330
let weeklySugarRestock = 150
let weeklyButterRestock = 160
let weeklyEggsRestock = 525
let weeklyMilkRestock = 45

  let totalBread = (realBreadMaded - realBreadSold)
  let totalCookies = (realCookiesMaded - realCookiesSold)
  let totalCupcakes = (realCupcakesMaded - realCupcakesSold)

 

const handleClick = async () => {
  let diaSemana;
  if (dayData.semana[6] == 5) {
    diaSemana = 0;
  }
  else{
    diaSemana = dayData.semana[6] + 1;
  }

  if(dayData.dia == "viernes"){
    try{
      await updateDoc(doc(db, 'panaderia', 'dia'), {
      "dia": dayData.semana[diaSemana],
      "numero": increment(1),
      "semana.6": diaSemana
      })
  
    await updateDoc(doc(db, 'panaderia', 'existenciaProductos'), {
      "lunes.0": 0,
      "lunes.1": 0,
      "lunes.2": 0,
      "martes.0": 0,
      "martes.1": 0,
      "martes.2": 0,
      "miercoles.0": 0,
      "miercoles.1": 0,
      "miercoles.2": 0,
      "jueves.0": 0,
      "jueves.1": 0,
      "jueves.2": 0,
      "viernes.0": 0,
      "viernes.1": 0,
      "viernes.2": 0,
      "current.0": 0,
      "current.1": 0,
      "current.2": 0,
      })
  
    await updateDoc(doc(db, 'panaderia', 'produccion'), {
      'pan': increment(totalBread),
      'galletas': increment(totalCookies),
      'ponques': increment(totalCupcakes)
      })
    
  
    await updateDoc(doc(db, 'panaderia', 'existenciaIngredientes'), {
      [`${dayData.semana[diaSemana]}.0`]: (weeklyFlourRestock),
      [`${dayData.semana[diaSemana]}.1`]: (weeklySugarRestock),
      [`${dayData.semana[diaSemana]}.2`]: (weeklyButterRestock),
      [`${dayData.semana[diaSemana]}.3`]: (weeklyEggsRestock),
      [`${dayData.semana[diaSemana]}.4`]: (weeklyMilkRestock),
      'current.0': increment(weeklyFlourRestock - ingredientes["0"] ),
      'current.1': increment(weeklySugarRestock - ingredientes["1"]),
      'current.2': increment(weeklyButterRestock - ingredientes["2"]),
      'current.3': increment(weeklyEggsRestock - ingredientes["3"]),
      'current.4': increment(weeklyMilkRestock - ingredientes["4"]),
      "lunes.0": 0,
      "lunes.1": 0,
      "lunes.2": 0,
      "lunes.3": 0,
      "lunes.4": 0,
      "martes.0": 0,
      "martes.1": 0,
      "martes.2": 0,
      "martes.3": 0,
      "martes.4": 0,
      "miercoles.0": 0,
      "miercoles.1": 0,
      "miercoles.2": 0,
      "miercoles.3": 0,
      "miercoles.4": 0,
      "jueves.0": 0,
      "jueves.1": 0,
      "jueves.2": 0,
      "jueves.3": 0,
      "jueves.4": 0,
      "viernes.0": 0,
      "viernes.1": 0,
      "viernes.2": 0,
      "viernes.3": 0,
      "viernes.4": 0,
      "abastecimiento": (dayData.numero +1)
  
      })
  
      await updateDoc(doc(db, 'panaderia', 'ventas'), {
        'ayer.0': 0,
        'ayer.1': 0,
        'ayer.2': 0,
        'dias': arrayUnion(dayData.numero+1),
        [`totalesPan.${dayData.numero+1}`]: 0,
        [`totalesGalletas.${dayData.numero+1}`]: 0,
        [`totalesPonques.${dayData.numero+1}`]: 0
        })

        
        window.location.reload();
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }
  else{
    try{
        await updateDoc(doc(db, 'panaderia', 'dia'), {
        "dia": dayData.semana[diaSemana],
        "numero": increment(1),
        "semana.6": diaSemana
        })
    
      await updateDoc(doc(db, 'panaderia', 'existenciaProductos'), {
        [`${dayData.semana[diaSemana]}.0`]: realBreadMaded,
        [`${dayData.semana[diaSemana]}.1`]: realCookiesMaded,
        [`${dayData.semana[diaSemana]}.2`]: realCupcakesMaded,
        "current.0": realBreadMaded,
        "current.1": realCookiesMaded,
        "current.2": realCupcakesMaded
        })
    
      await updateDoc(doc(db, 'panaderia', 'produccion'), {
        'pan': increment(totalBread),
        'galletas': increment(totalCookies),
        'ponques': increment(totalCupcakes)
        })
      
    
      await updateDoc(doc(db, 'panaderia', 'existenciaIngredientes'), {
        [`${dayData.semana[diaSemana]}.0`]: (ingredientes["0"] - DailyFlourUsed),
        [`${dayData.semana[diaSemana]}.1`]: (ingredientes["1"] - DailySugarUsed),
        [`${dayData.semana[diaSemana]}.2`]: (ingredientes["2"] - DailyButterUsed),
        [`${dayData.semana[diaSemana]}.3`]: (ingredientes["3"] - DailyEggsUsed),
        [`${dayData.semana[diaSemana]}.4`]: (ingredientes["4"] - DailyMilkUsed),
        'current.0': increment(-DailyFlourUsed),
        'current.1': increment(-DailySugarUsed),
        'current.2': increment(-DailyButterUsed),
        'current.3': increment(-DailyEggsUsed),
        'current.4': increment(-DailyMilkUsed)
    
    
        })
    
        await updateDoc(doc(db, 'panaderia', 'ventas'), {
          'ayer.0': realBreadSold,
          'ayer.1': realCookiesSold,
          'ayer.2': realCupcakesSold,
          'totales.0': increment(realBreadSold),
          'totales.1': increment(realCookiesSold),
          'totales.2': increment(realCupcakesSold),
          'dias': arrayUnion(dayData.numero+1),
          [`totalesPan.${dayData.numero+1}`]: realBreadSold,
          [`totalesGalletas.${dayData.numero+1}`]: realCookiesSold,
          [`totalesPonques.${dayData.numero+1}`]: realCupcakesSold
          })

          window.location.reload();
      } catch (e) {
        console.error("Error updating document: ", e);
      }
  }
 
  
};





  return(
    <button 
      className="rounded-[30px] border font-bold w-4/5 border-3 p-2 border-tertiary bg-tertiary text-background cursor-pointer  active:scale-95" 
      onClick={handleClick}
      >
      Siguiente dia
    </button>
  )
}