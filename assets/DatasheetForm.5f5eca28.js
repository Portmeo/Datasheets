import{a6 as V,r as C,A as H,k as Y,e as c,B as o,j as a,C as l,T as X,I as L,m as $}from"./index.e3c54621.js";import{D as k,C as q,i as J,M as Q}from"./datasheet.service.06afcdd5.js";import{C as Z}from"./category.service.64bcd667.js";import{F as p,T as x,I as ee,S as ae,O as te}from"./TextField.5b5971ac.js";import"./requestHandler.service.751a06e3.js";import"./Menu.31726533.js";const se=()=>{const{id:n}=V(),[E,f]=C.exports.useState(),[I,m]=C.exports.useState([]),[y,e]=C.exports.useState([]),[d,v]=C.exports.useState({name:"",value:0}),b=async()=>{const i=await Z.getAll();i&&m(i)},h=async i=>{const u=await k.get(i);u&&(f(u),e(u.categories.map(T=>T._id)))},w=async i=>{await k.create(i)&&(f(void 0),e([]),v({name:"",value:0}),D())},S=async i=>{await k.update(i)&&D()},D=()=>{H.proccesSuccess()};return C.exports.useEffect(()=>{b(),n&&n!=="new"&&h(n)},[]),C.exports.useEffect(()=>()=>{H.reset()},[]),{categoryOptions:I,categorySelect:y,setCategorySelect:e,workmanship:d,setWorkmanship:v,datasheet:E,setDatasheet:f,createDatasheet:w,updateDatasheet:S,id:n}};const ne=48,le=8,re={PaperProps:{style:{maxHeight:ne*4.5+le,width:250}}},he=()=>{var A,N,W,z,F,P,M,R,U,j,G,B;const{t:n}=Y(),{categoryOptions:E,categorySelect:f,setCategorySelect:I,workmanship:m,setWorkmanship:y,datasheet:e,setDatasheet:d,createDatasheet:v,updateDatasheet:b,id:h}=se(),w=t=>s=>{const r={...e&&{...e},[t]:s.target.value};d(r)},S=t=>s=>{const[r,g]=t.split("."),O={...e,metals:{...e.metals,[r]:{[g]:+s.target.value}}};d(O)},D=t=>{const{target:{value:s}}=t,r={...e,categories:s};d(r),I(typeof s=="string"?s.split(","):s)},i=t=>{const s={...e,workmanship:e.workmanship.filter(r=>r.name!==t)};d(s)},u=t=>s=>{const r={...m,[t]:t==="value"?+s.target.value:s.target.value};y(r)},T=()=>{const t=e.workmanship?[...e.workmanship,m]:[m],s={...e,workmanship:t};y({name:"",value:0}),d(s)},_=t=>new Promise((s,r)=>{const g=new FileReader;g.readAsDataURL(t),g.onload=()=>s(g.result),g.onerror=O=>r(O)}),K=async t=>{const s=t.target.files[0],r=await _(s),g={...e,image:r};d(g)};return c(o,{children:[c(o,{display:"flex",justifyContent:"space-between",sx:{gap:2},children:[c(o,{display:"flex",sx:{mt:2,flexDirection:"column",alignItems:"center"},children:[a(q,{sx:{width:300,height:300},component:"img",image:(A=e==null?void 0:e.image)!=null?A:J,alt:"img"}),a(p,{margin:"normal",children:a(x,{size:"small",type:"file",onChange:K})})]}),c(o,{sx:{mt:1,width:"30%"},children:[a(p,{fullWidth:!0,margin:"normal",children:a(x,{size:"small",label:n(l.CODE),value:(W=(N=e==null?void 0:e.code)==null?void 0:N.toUpperCase())!=null?W:"",onChange:w("code")})}),c(p,{fullWidth:!0,margin:"normal",children:[a(ee,{size:"small",id:"category-label",children:n(l.CATEGORY)}),a(ae,{size:"small",labelId:"category-label",id:"category",multiple:!0,value:f,onChange:D,input:a(te,{label:n(l.CATEGORY)}),MenuProps:re,children:E.map(t=>a(Q,{value:t._id,children:t.name.toUpperCase()},t._id))})]}),a(p,{sx:{width:"49%",mr:"1%"},margin:"normal",children:a(x,{size:"small",label:n(l.EXPENSES),value:(z=e==null?void 0:e.expenses)!=null?z:"",onChange:w("expenses")})}),a(p,{sx:{width:"49%",ml:"1%"},margin:"normal",children:a(x,{size:"small",label:n(l.WEIGHT),value:(F=e==null?void 0:e.weight)!=null?F:"",onChange:w("weight")})}),a(p,{sx:{width:"49%",mr:"1%"},margin:"normal",children:a(x,{size:"small",label:n(l.SILVER),value:(R=(M=(P=e==null?void 0:e.metals)==null?void 0:P.silver)==null?void 0:M.price)!=null?R:"",onChange:S("silver.price")})}),a(p,{sx:{width:"49%",ml:"1%"},margin:"normal",children:a(x,{size:"small",label:n(l.GOLD),value:(G=(j=(U=e==null?void 0:e.metals)==null?void 0:U.gold)==null?void 0:j.price)!=null?G:"",onChange:S("gold.price")})})]}),c(o,{sx:{mt:1,width:"35%"},children:[a(X,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2"},children:n(l.WORKMANSHIPS)}),c(o,{display:"flex",justifyContent:"space-between",children:[c(o,{display:"flex",justifyContent:"space-between",sx:{width:"90%"},children:[a(p,{sx:{width:"49%"},margin:"normal",children:a(x,{size:"small",label:n(l.WORKMANSHIP),value:m.name,onChange:u("name")})}),a(p,{sx:{width:"49%"},margin:"normal",size:"small",children:a(x,{size:"small",label:n(l.VALUE),type:"number",value:m.value,onChange:u("value")})})]}),a(L,{disabled:!m.name||!m.value,sx:{width:"10%"},onClick:T,children:l.ICONS.ADD})]}),(B=e==null?void 0:e.workmanship)==null?void 0:B.map(t=>c(o,{display:"flex","align-item":"center",children:[c(o,{className:"row",children:[a(o,{className:"column",children:t.name}),a(o,{className:"column text-rigth",children:t.value})]}),a(L,{sx:{padding:0,mb:"10px",width:"10%"},onClick:()=>i(t.name),children:l.ICONS.DELETE},t.name)]},t.name))]})]}),a(o,{display:"flex",justifyContent:"flex-end",children:a($,{disabled:!e,sx:{mt:1},variant:"contained",onClick:()=>(h==null?void 0:h.toUpperCase())===l.NEW.toUpperCase()?v(e):b(e),children:(h==null?void 0:h.toUpperCase())===l.NEW.toUpperCase()?n(l.CREATE):n(l.EDIT)})})]})};export{he as DatasheetForm};