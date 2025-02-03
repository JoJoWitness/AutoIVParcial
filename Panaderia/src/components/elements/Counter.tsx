import { arrayUnion, doc, FieldValue, getDoc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../layouts/Layout.astro"

interface CounterProps {
  diaS : number;
  semanaData: Array<number|string>;
  currentDay: number
  dayName: string
  ingredientes: {
    0: number,
    1: number,
    2: number,
    3: number,
    4: number
  }
}


  

export const Counter: React.FC<CounterProps> = ({diaS, semanaData, currentDay, dayName, ingredientes})=> {

(dayName)

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
  if (diaS == 5) {
    diaSemana = 0;
  }
  else{
    diaSemana = diaS + 1;
  }

  if(dayName == "viernes"){
    try{
      await updateDoc(doc(db, 'panaderia', 'dia'), {
      "dia": semanaData[diaSemana],
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
      [`${semanaData[diaSemana]}.0`]: (ingredientes["0"] + weeklyFlourRestock),
      [`${semanaData[diaSemana]}.1`]: (ingredientes["1"] + weeklySugarRestock),
      [`${semanaData[diaSemana]}.2`]: (ingredientes["2"] + weeklyButterRestock),
      [`${semanaData[diaSemana]}.3`]: (ingredientes["3"] + weeklyEggsRestock),
      [`${semanaData[diaSemana]}.4`]: (ingredientes["4"] + weeklyMilkRestock),
      'current.0': increment(weeklyFlourRestock),
      'current.1': increment(weeklySugarRestock),
      'current.2': increment(weeklyButterRestock),
      'current.3': increment(weeklyEggsRestock),
      'current.4': increment(weeklyMilkRestock),
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
      "abastecimiento": (currentDay+1)
  
      })
  
      await updateDoc(doc(db, 'panaderia', 'ventas'), {
        'ayer.0': 0,
        'ayer.1': 0,
        'ayer.2': 0,
        'dias': arrayUnion(currentDay+1),
        [`totalesPan.${currentDay+1}`]: 0,
        [`totalesGalletas.${currentDay+1}`]: 0,
        [`totalesPonques.${currentDay+1}`]: 0
        })

        
        window.location.reload();
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  }
  else{
    try{
        await updateDoc(doc(db, 'panaderia', 'dia'), {
        "dia": semanaData[diaSemana],
        "numero": increment(1),
        "semana.6": diaSemana
        })
    
      await updateDoc(doc(db, 'panaderia', 'existenciaProductos'), {
        [`${semanaData[diaSemana]}.0`]: increment(realBreadMaded),
        [`${semanaData[diaSemana]}.1`]: increment(realCookiesMaded),
        [`${semanaData[diaSemana]}.2`]: increment(realCupcakesMaded)
        })
    
      await updateDoc(doc(db, 'panaderia', 'produccion'), {
        'pan': increment(totalBread),
        'galletas': increment(totalCookies),
        'ponques': increment(totalCupcakes)
        })
      
    
      await updateDoc(doc(db, 'panaderia', 'existenciaIngredientes'), {
        [`${semanaData[diaSemana]}.0`]: (ingredientes["0"] - DailyFlourUsed),
        [`${semanaData[diaSemana]}.1`]: (ingredientes["1"] - DailySugarUsed),
        [`${semanaData[diaSemana]}.2`]: (ingredientes["2"] - DailyButterUsed),
        [`${semanaData[diaSemana]}.3`]: (ingredientes["3"] - DailyEggsUsed),
        [`${semanaData[diaSemana]}.4`]: (ingredientes["4"] - DailyMilkUsed),
        'current.0': (ingredientes["0"] - DailyFlourUsed),
        'current.1': (ingredientes["1"] - DailySugarUsed),
        'current.2': (ingredientes["2"] - DailyButterUsed),
        'current.3': (ingredientes["3"] - DailyEggsUsed),
        'current.4': (ingredientes["4"] - DailyMilkUsed)
    
    
        })
    
        await updateDoc(doc(db, 'panaderia', 'ventas'), {
          'ayer.0': realBreadSold,
          'ayer.1': realCookiesSold,
          'ayer.2': realCupcakesSold,
          'totales.0': increment(realBreadSold),
          'totales.1': increment(realCookiesSold),
          'totales.2': increment(realCupcakesSold),
          'dias': arrayUnion(currentDay+1),
          [`totalesPan.${currentDay+1}`]: realBreadSold,
          [`totalesGalletas.${currentDay+1}`]: realCookiesSold,
          [`totalesPonques.${currentDay+1}`]: realCupcakesSold
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