import{j as r}from"./jsx-runtime.CLpGMVip.js";import{w as Pt,D as kt,K as nt,o as c,k as Q,v as q,l as O,L as rt,B as Z,_ as j,M as tt,r as st,N as vt,O as It,P as Lt,n as et,Q as $t,u as jt,S as lt,x as J,T as it,U as wt,E as ct,V as dt,A as Mt,W as St,X as Bt,Y as Rt,R as _t,G as Et,I as Ht,F as Gt,H as zt,J as Dt}from"./ChartsOverlay.DgVG2tJd.js";import{r as L}from"./index.DqsuSE5L.js";const $s=({current:t,img:s})=>r.jsxs("div",{className:"flex",children:[r.jsx("img",{src:s.src,alt:"barra vertical",className:"w-[150px] h-[150px] rounded-l-[30px]"}),r.jsx("div",{className:"bg-primary h-[150px] w-[75px] rounded-r-[30px] flex flex-col items-center justify-center text-1xl text-background font-bold",children:r.jsx("p",{children:t})})]});function ht(t){const s=Pt();if(!t)return{isHighlighted:!1,isFaded:!1};const e=s.isHighlighted(t),i=!e&&s.isFaded(t);return{isHighlighted:e,isFaded:i}}function Ft(){const{chartId:t}=L.useContext(kt);return L.useMemo(()=>t,[t])}function Tt(t){const{id:s,offset:e}=t,{left:i,top:a,width:o,height:n}=nt(),l=c({top:0,right:0,bottom:0,left:0},e);return r.jsx("clipPath",{id:s,children:r.jsx("rect",{x:i-l.left,y:a-l.top,width:o+l.left+l.right,height:n+l.top+l.bottom})})}function Ot(t){return q("MuiChartsGrid",t)}const ot=Q("MuiChartsGrid",["root","line","horizontalLine","verticalLine"]),Ut=O("g",{name:"MuiChartsGrid",slot:"Root",overridesResolver:(t,s)=>[{[`&.${ot.verticalLine}`]:s.verticalLine},{[`&.${ot.horizontalLine}`]:s.horizontalLine},s.root]})({}),xt=O("line",{name:"MuiChartsGrid",slot:"Line",overridesResolver:(t,s)=>s.line})(({theme:t})=>({stroke:(t.vars||t).palette.divider,shapeRendering:"crispEdges",strokeWidth:1}));function Nt(t){const{axis:s,drawingArea:e,classes:i}=t,{scale:a,tickNumber:o,tickInterval:n}=s,l=rt({scale:a,tickNumber:o,tickInterval:n});return r.jsx(L.Fragment,{children:l.map(({value:x,offset:d})=>r.jsx(xt,{y1:e.top,y2:e.top+e.height,x1:d,x2:d,className:i.verticalLine},`vertical-${x}`))})}function Xt(t){const{axis:s,drawingArea:e,classes:i}=t,{scale:a,tickNumber:o,tickInterval:n}=s,l=rt({scale:a,tickNumber:o,tickInterval:n});return r.jsx(L.Fragment,{children:l.map(({value:x,offset:d})=>r.jsx(xt,{y1:d,y2:d,x1:e.left,x2:e.left+e.width,className:i.horizontalLine},`horizontal-${x}`))})}const Kt=["vertical","horizontal"],Vt=({classes:t})=>st({root:["root"],verticalLine:["line","verticalLine"],horizontalLine:["line","horizontalLine"]},Ot,t);function Wt(t){const s=Z({props:t,name:"MuiChartsGrid"}),e=nt(),{vertical:i,horizontal:a}=s,o=j(s,Kt),{xAxis:n,xAxisIds:l,yAxis:x,yAxisIds:d}=tt(),g=Vt(s),p=x[d[0]],u=n[l[0]];return r.jsxs(Ut,c({},o,{className:g.root,children:[i&&r.jsx(Nt,{axis:u,drawingArea:e,classes:g}),a&&r.jsx(Xt,{axis:p,drawingArea:e,classes:g})]}))}function Yt(t){const{onAxisClick:s}=t,e=vt(),i=It(),{axis:a}=L.useContext(Lt),{xAxisIds:o,xAxis:n,yAxisIds:l,yAxis:x}=tt();return L.useEffect(()=>{const d=e.current;if(d===null||!s)return()=>{};const g=p=>{p.preventDefault();const u=a.x&&a.x.index!==-1,f=u?o[0]:l[0],m=u?a.x&&a.x.index:a.y&&a.y.index;if(m==null)return;const h={};Object.keys(i).filter(b=>["bar","line"].includes(b)).forEach(b=>{i[b]?.seriesOrder.forEach(v=>{const I=i[b].series[v],A=I.xAxisId??I.xAxisKey,k=I.yAxisId??I.yAxisKey,$=u?A:k;($===void 0||$===f)&&(h[v]=I.data[m])})});const C=(u?n:x)[f].data?.[m];s(p,{dataIndex:m,axisValue:C,seriesValues:h})};return d.addEventListener("click",g),()=>{d.removeEventListener("click",g)}},[a.x,a.y,s,i,e,n,o,x,l]),r.jsx(L.Fragment,{})}const Jt=["id","dataIndex","classes","color","slots","slotProps","style","onClick"];function Qt(t){return q("MuiBarElement",t)}Q("MuiBarElement",["root"]);const qt=t=>{const{classes:s,id:e}=t,i={root:["root",`series-${e}`]};return st(i,Qt,s)},Zt=O(et.rect,{name:"MuiBarElement",slot:"Root",overridesResolver:(t,s)=>s.root})(({ownerState:t})=>({stroke:"none",fill:t.isHighlighted?$t(t.color).brighter(.5).formatHex():t.color,transition:"opacity 0.2s ease-in, fill 0.2s ease-in",opacity:t.isFaded&&.3||1}));function ts(t){const{id:s,dataIndex:e,classes:i,color:a,slots:o,slotProps:n,style:l,onClick:x}=t,d=j(t,Jt),g=jt(),{isFaded:p,isHighlighted:u}=ht({seriesId:s,dataIndex:e}),f={id:s,dataIndex:e,classes:i,color:a,isFaded:p,isHighlighted:u},m=qt(f),h=o?.bar??Zt,C=lt({elementType:h,externalSlotProps:n?.bar,externalForwardedProps:d,additionalProps:c({},g({type:"bar",seriesId:s,dataIndex:e}),{style:l,onClick:x,cursor:x?"pointer":"unset"}),className:m.root,ownerState:f});return r.jsx(h,c({},C))}const D=(t,{hasNegative:s,hasPositive:e,borderRadius:i,layout:a})=>{if(!i)return 0;const o=a==="vertical";return t==="top-left"&&(o&&e||!o&&s)||t==="top-right"&&(o&&e||!o&&e)||t==="bottom-right"&&(o&&s||!o&&e)||t==="bottom-left"&&(o&&s||!o&&s)?i:0},ss=["style","maskId"],es=t=>`inset(0px round ${t.topLeft}px ${t.topRight}px ${t.bottomRight}px ${t.bottomLeft}px)`;function is(t){const s=t.ownerState;return r.jsx(et.rect,{style:c({},t.style,{clipPath:(t.ownerState.layout==="vertical"?t.style?.height:t.style?.width).to(e=>es({topLeft:Math.min(e,D("top-left",s)),topRight:Math.min(e,D("top-right",s)),bottomRight:Math.min(e,D("bottom-right",s)),bottomLeft:Math.min(e,D("bottom-left",s))}))})})}function os(t){const{style:s,maskId:e}=t,i=j(t,ss);return!t.borderRadius||t.borderRadius<=0?null:r.jsx("clipPath",{id:e,children:r.jsx(is,{ownerState:i,style:s})})}function as(t){return q("MuiBarLabel",t)}const W=Q("MuiBarLabel",["root","highlighted","faded"]),ns=t=>{const{classes:s,seriesId:e,isFaded:i,isHighlighted:a}=t,o={root:["root",`series-${e}`,a&&"highlighted",i&&"faded"]};return st(o,as,s)},rs=t=>{const{barLabel:s,value:e,dataIndex:i,seriesId:a,height:o,width:n}=t;return s==="value"?e?e?.toString():null:s({seriesId:a,dataIndex:i,value:e},{bar:{height:o,width:n}})},ls=["seriesId","dataIndex","color","isFaded","isHighlighted","classes"],cs=O(et.text,{name:"MuiBarLabel",slot:"Root",overridesResolver:(t,s)=>[{[`&.${W.faded}`]:s.faded},{[`&.${W.highlighted}`]:s.highlighted},s.root]})(({theme:t})=>c({},t?.typography?.body2,{stroke:"none",fill:(t.vars||t)?.palette?.text?.primary,transition:"opacity 0.2s ease-in, fill 0.2s ease-in",textAnchor:"middle",dominantBaseline:"central",pointerEvents:"none",opacity:1,[`&.${W.faded}`]:{opacity:.3}}));function ds(t){const s=Z({props:t,name:"MuiBarLabel"}),e=j(s,ls);return r.jsx(cs,c({},e))}const hs=["seriesId","classes","color","style","dataIndex","barLabel","slots","slotProps","height","width","value"],xs=["ownerState"];function us(t){const{seriesId:s,classes:e,color:i,style:a,dataIndex:o,barLabel:n,slots:l,slotProps:x,height:d,width:g,value:p}=t,u=j(t,hs),{isFaded:f,isHighlighted:m}=ht({seriesId:s,dataIndex:o}),h={seriesId:s,classes:e,color:i,isFaded:f,isHighlighted:m,dataIndex:o},C=ns(h),b=l?.barLabel??ds,v=lt({elementType:b,externalSlotProps:x?.barLabel,additionalProps:c({},u,{style:a,className:C.root}),ownerState:h}),{ownerState:I}=v,A=j(v,xs);if(!n)return null;const k=rs({barLabel:n,value:p,dataIndex:o,seriesId:s,height:d,width:g});return k?r.jsx(b,c({},A,I,{children:k})):null}const gs=["bars","skipAnimation"],ps=({layout:t,yOrigin:s,x:e,width:i,y:a,xOrigin:o,height:n})=>c({},t==="vertical"?{y:s,x:e+i/2,height:0,width:i}:{y:a+n/2,x:o,height:n,width:0}),at=({x:t,width:s,y:e,height:i})=>({x:t+s/2,y:e+i/2,height:i,width:s});function ms(t){const{bars:s,skipAnimation:e}=t,i=j(t,gs),a=J(s,{keys:o=>`${o.seriesId}-${o.dataIndex}`,from:ps,leave:null,enter:at,update:at,immediate:e});return r.jsx(L.Fragment,{children:a((o,{seriesId:n,dataIndex:l,color:x,value:d,width:g,height:p})=>r.jsx(us,c({seriesId:n,dataIndex:l,value:d,color:x,width:g,height:p},i,{style:o})))})}const Y=(t,s)=>{const e=`${t}-axis`,i=`${t}Axis`;return s===(t==="x"?ct:dt)?`The first \`${i}\``:`The ${e} with id "${s}"`};function fs(t,s,e,i,a,o){const n=i[e],l=o[a],x=t?n:l,d=t?l:n,g=t?e:a,p=t?a:e,u=t?"x":"y",f=t?"y":"x";if(!it(x))throw new Error(`MUI X: ${Y(u,g)} should be of type "band" to display the bar series of id "${s}".`);if(x.data===void 0)throw new Error(`MUI X: ${Y(u,g)} should have data property.`);if(it(d)||wt(d))throw new Error(`MUI X: ${Y(f,p)} should be a continuous type to display the bar series of id "${s}".`)}const ys=["skipAnimation","onItemClick","borderRadius","barLabel"];function bs({bandWidth:t,numberOfGroups:s,gapRatio:e}){if(e===0)return{barWidth:t/s,offset:0};const i=t/(s+(s-1)*e),a=e*i;return{barWidth:i,offset:a}}const As=()=>{const t=St()??{series:{},stackingGroups:[],seriesOrder:[]},s=tt(),e=Ft(),{series:i,stackingGroups:a}=t,{xAxis:o,yAxis:n,xAxisIds:l,yAxisIds:x}=s,d=l[0],g=x[0],p={};return{completedData:a.flatMap(({ids:f},m)=>f.flatMap(h=>{const C=i[h].xAxisId??i[h].xAxisKey??d,b=i[h].yAxisId??i[h].yAxisKey??g,v=o[C],I=n[b],A=i[h].layout==="vertical";fs(A,h,C,o,b,n);const k=A?v:I,$=v.scale,B=I.scale,E=Bt(i[h],o[C],n[b]),U=k.scale.bandwidth(),{barWidth:_,offset:N}=bs({bandWidth:U,numberOfGroups:a.length,gapRatio:k.barGapRatio}),H=m*(_+N),{stackedData:X}=i[h];return X.map((K,w)=>{const V=K.map(z=>A?B(z):$(z)),M=Math.round(Math.min(...V)),S=Math.round(Math.max(...V)),G=i[h].stack,y={seriesId:h,dataIndex:w,layout:i[h].layout,x:A?$(o[C].data?.[w])+H:M,y:A?M:B(n[b].data?.[w])+H,xOrigin:$(0),yOrigin:B(0),height:A?S-M:_,width:A?_:S-M,color:E(w),value:i[h].data[w],maskId:`${e}_${G||h}_${m}_${w}`};p[y.maskId]||(p[y.maskId]={id:y.maskId,width:0,height:0,hasNegative:!1,hasPositive:!1,layout:y.layout,xOrigin:$(0),yOrigin:B(0),x:0,y:0});const P=p[y.maskId];return P.width=y.layout==="vertical"?y.width:P.width+y.width,P.height=y.layout==="vertical"?P.height+y.height:y.height,P.x=Math.min(P.x===0?1/0:P.x,y.x),P.y=Math.min(P.y===0?1/0:P.y,y.y),P.hasNegative=P.hasNegative||(y.value??0)<0,P.hasPositive=P.hasPositive||(y.value??0)>0,y})})),masksData:Object.values(p)}},F=({layout:t,yOrigin:s,x:e,width:i,y:a,xOrigin:o,height:n})=>c({},t==="vertical"?{y:s,x:e,height:0,width:i}:{y:a,x:o,height:n,width:0}),T=({x:t,width:s,y:e,height:i})=>({y:e,x:t,height:i,width:s});function Cs(t){const{completedData:s,masksData:e}=As(),{skipAnimation:i,onItemClick:a,borderRadius:o,barLabel:n}=t,l=j(t,ys),x=Mt(i),d=!o||o<=0,g=J(s,{keys:u=>`${u.seriesId}-${u.dataIndex}`,from:F,leave:F,enter:T,update:T,immediate:x}),p=J(d?[]:e,{keys:u=>u.id,from:F,leave:F,enter:T,update:T,immediate:x});return r.jsxs(L.Fragment,{children:[!d&&p((u,{id:f,hasPositive:m,hasNegative:h,layout:C})=>r.jsx(os,{maskId:f,borderRadius:o,hasNegative:h,hasPositive:m,layout:C,style:u})),g((u,{seriesId:f,dataIndex:m,color:h,maskId:C})=>{const b=r.jsx(ts,c({id:f,dataIndex:m,color:h},l,{onClick:a&&(v=>{a(v,{type:"bar",seriesId:f,dataIndex:m})}),style:u}));return d?b:r.jsx("g",{clipPath:`url(#${C})`,children:b})}),n&&r.jsx(ms,c({bars:s,skipAnimation:x,barLabel:n},l))]})}const Ps=["xAxis","yAxis","series","width","height","margin","colors","dataset","sx","tooltip","onAxisClick","axisHighlight","legend","grid","topAxis","leftAxis","rightAxis","bottomAxis","children","slots","slotProps","skipAnimation","loading","layout","onItemClick","highlightedItem","onHighlightChange","borderRadius","barLabel","className"],ks=t=>{const{xAxis:s,yAxis:e,series:i,width:a,height:o,margin:n,colors:l,dataset:x,sx:d,tooltip:g,onAxisClick:p,axisHighlight:u,legend:f,grid:m,topAxis:h,leftAxis:C,rightAxis:b,bottomAxis:v,children:I,slots:A,slotProps:k,skipAnimation:$,loading:B,layout:E,onItemClick:U,highlightedItem:_,onHighlightChange:N,borderRadius:H,barLabel:X,className:K}=t,w=j(t,Ps),M=`${Rt()}-clip-path`,S=E==="horizontal"||E===void 0&&i.some(R=>R.layout==="horizontal"),G={scaleType:"band",data:Array.from({length:Math.max(...i.map(R=>(R.data??x??[]).length))},(R,Ct)=>Ct)},y=c({},w,{series:i.map(R=>c({type:"bar"},R,{layout:S?"horizontal":"vertical"})),width:a,height:o,margin:n,colors:l,dataset:x,xAxis:s??(S?void 0:[c({id:ct},G)]),yAxis:e??(S?[c({id:dt},G)]:void 0),sx:d,highlightedItem:_,onHighlightChange:N,disableAxisListener:g?.trigger!=="axis"&&u?.x==="none"&&u?.y==="none"&&!p,className:K,skipAnimation:$}),P={onItemClick:U,slots:A,slotProps:k,borderRadius:H,barLabel:X},z={onAxisClick:p},ut={vertical:m?.vertical,horizontal:m?.horizontal},gt={clipPath:`url(#${M})`},pt={id:M},mt={slots:A,slotProps:k,loading:B},ft={topAxis:h,leftAxis:C,rightAxis:b,bottomAxis:v,slots:A,slotProps:k},yt=c({},S?{y:"band"}:{x:"band"},u),bt=c({},f,{slots:A,slotProps:k}),At=c({},g,{slots:A,slotProps:k});return{chartContainerProps:y,barPlotProps:P,axisClickHandlerProps:z,gridProps:ut,clipPathProps:pt,clipPathGroupProps:gt,overlayProps:mt,chartsAxisProps:ft,axisHighlightProps:yt,legendProps:bt,tooltipProps:At,children:I}},js=L.forwardRef(function(s,e){const i=Z({props:s,name:"MuiBarChart"}),{chartContainerProps:a,barPlotProps:o,axisClickHandlerProps:n,gridProps:l,clipPathProps:x,clipPathGroupProps:d,overlayProps:g,chartsAxisProps:p,axisHighlightProps:u,legendProps:f,tooltipProps:m,children:h}=ks(i);return r.jsxs(_t,c({ref:e},a,{children:[i.onAxisClick&&r.jsx(Yt,c({},n)),r.jsx(Wt,c({},l)),r.jsxs("g",c({},d,{children:[r.jsx(Cs,c({},o)),r.jsx(Et,c({},g)),r.jsx(Ht,c({},u))]})),r.jsx(Gt,c({},p)),r.jsx(zt,c({},f)),!i.loading&&r.jsx(Dt,c({},m)),r.jsx(Tt,c({},x)),h]}))});export{js as B,$s as H};
