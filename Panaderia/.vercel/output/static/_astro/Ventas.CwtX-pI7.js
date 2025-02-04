import{j as e}from"./jsx-runtime.CLpGMVip.js";import{r as c}from"./index.DqsuSE5L.js";import{d as n,g as d}from"./index.esm.CXju6Hys.js";import{d as x}from"./Layout.B0k1BkPy.js";import{P as i}from"./PieChart.Cz5-44fh.js";import"./index-ea1a36e4.AtA5dU3h.js";/* empty css                       */import"./index.bf7787d8.l0sNRNKZ.js";import"./NumComponent.B_azF3oK.js";import"./LogOut.BdCt--6S.js";import"./ChartsOverlay.DgVG2tJd.js";import"./index.BRllCW5G.js";const o=({day:s,venta1:l,venta2:a,venta3:r})=>e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex items-center justify-center w-[100px] h-[50px]  bg-secondary",children:e.jsx("p",{children:s})}),e.jsx("div",{className:"flex items-center justify-center w-[100px] h-[50px]  bg-primary",children:e.jsx("p",{children:l})}),e.jsx("div",{className:"flex items-center justify-center w-[100px] h-[50px]  bg-tertiary",children:e.jsx("p",{children:a})}),e.jsx("div",{className:"flex items-center justify-center w-[100px] h-[50px]  bg-primary",children:e.jsx("p",{children:r})})]}),P=()=>{const[s,l]=c.useState(null),a=async()=>{try{const r=n(x,"panaderia","ventas"),t=await d(r);t.exists()&&l(t.data())}catch(r){console.error("Error fetching document from Firestore:",r)}};return c.useEffect(()=>{a()},[]),s?e.jsxs("div",{className:"flex flex-col w-full justify-bewteen gap-[30px] ",children:[e.jsx("div",{className:"flex gap-3 w-full h-full bg-background rounded-[25px] px-12 py-10 max-h-[500px] items-center",children:e.jsxs("div",{className:"flex flex-col h-full w-full gap-10 ",children:[e.jsx("p",{className:"text-tertiary font-medium",children:"Historial de ventas"}),e.jsxs("div",{className:"text-background font-bold flex flex-col h-4/5 w-full overflow-x-scroll bg-secondary",children:[e.jsxs("div",{className:"flex w-full h-1/4 bg-secondary h-[50px]",children:[e.jsx("div",{className:"flex flex-col items-center justify-center w-[200px] border-r-2 border-background",children:e.jsx("p",{children:"Productos"})}),e.jsx("div",{className:"flex flex-col items-center justify-center flex-1",children:e.jsx("p",{children:"Ventas por dia"})})]}),e.jsxs("div",{className:"flex w-full h-full",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex items-center justify-center w-[200px] h-[50px] border-r-2 border-background bg-secondary"}),e.jsx("div",{className:"flex items-center justify-center w-[200px] h-[50px] border-r-2 border-background bg-primary",children:e.jsx("p",{children:"Pan"})}),e.jsx("div",{className:"flex items-center justify-center w-[200px] h-[50px] border-r-2 border-background bg-tertiary",children:e.jsx("p",{children:"Galletas"})}),e.jsx("div",{className:"flex items-center justify-center w-[200px] h-[50px] border-r-2 border-background bg-primary",children:e.jsx("p",{children:"Ponques"})})]}),s.dias.map(r=>e.jsx(o,{day:r,venta1:s.totalesPan[r],venta2:s.totalesGalletas[r],venta3:s.totalesPonques[r]}))]})]})]})}),e.jsxs("div",{className:"flex gap-4 w-full h-full justify-evenly bg-background rounded-[25px] px-12 py-10 max-h-[500px] items-center",children:[e.jsxs("div",{className:"flex flex-col gap-10 ",children:[e.jsx("p",{className:"text-tertiary font-medium",children:"Ventas de ayer"}),e.jsx(i,{series:[{data:[{id:0,value:s.ayer[0],label:"Pan"},{id:1,value:s.ayer[1],label:"Galletas"},{id:2,value:s.ayer[2],label:"Ponque"}]}],colors:["#dc4f43","#F7924f","#FFcc73"],width:400,height:200})]}),e.jsxs("div",{className:"flex flex-col gap-10 ",children:[e.jsx("p",{className:"text-tertiary font-medium",children:"Ventas de Totales"}),e.jsx(i,{series:[{data:[{id:0,value:s.totales[0],label:"Pan"},{id:1,value:s.totales[1],label:"Galletas"},{id:2,value:s.totales[2],label:"Ponque"}]}],colors:["#00cadc","#49c3fb","#65a6fa"],width:400,height:200})]})]})]}):e.jsx("div",{children:"Loading..."})};export{P as VentasComponent};
