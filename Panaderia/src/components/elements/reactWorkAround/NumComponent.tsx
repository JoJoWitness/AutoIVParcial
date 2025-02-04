import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../../layouts/Layout.astro";


export const NumComponent = () => {
  
  

  const [dayData, setDayData] = useState<any>(null);

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
   
    fetchData();
  }, []);

  if(!dayData){
    return 
  }
  
    return(
        <span className="font-bold">  
          {dayData.numero}
        </span>
    )
}