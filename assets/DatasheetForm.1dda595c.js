import{ag as q,r as f,A as K,w as Q,e as d,t as m,j as a,T,C as l,I as X}from"./index.94a47da9.js";import{D as O,C as Z,i as ee,M as ae,T as ne}from"./datasheet.service.a2b9a152.js";import{C as te}from"./category.service.2e9effcc.js";import{F as c,T as p,I as se,S as le,O as re}from"./TextField.00c012f4.js";import{B as ie}from"./requestHandler.service.0d012add.js";import"./Tooltip.c2d12002.js";const oe=()=>{const{id:n}=q(),[I,w]=f.exports.useState(),[k,u]=f.exports.useState([]),[y,e]=f.exports.useState([]),[g,E]=f.exports.useState({name:"",value:0}),N=async()=>{const o=await te.getAll();o&&u(o)},v=async o=>{const i=await O.get(o);i&&(w(i),e(i.categories.map(C=>C._id)))},x=()=>{w({expenses:0,weight:0,workmanship:[{name:"Fundicion",value:0},{name:"Repasado",value:0},{name:"Plateado",value:0},{name:"Tallado",value:0}],metals:{silver:{price:0},gold:{price:0}}})},S=async o=>{await O.create(D(o))&&(w(void 0),e([]),E({name:"",value:0}),b(),x())},A=async o=>{await O.update(D(o))&&b()},b=()=>{K.proccesSuccess()},D=o=>{const i=JSON.parse(JSON.stringify(o));return i.metals.silver.price=+i.metals.silver.price,i.metals.gold&&(i.metals.gold.price=+o.metals.gold.price),i.workmanship.forEach(C=>{C.value=+C.value}),i};return f.exports.useEffect(()=>{N(),n&&n!=="new"&&v(n),n&&n==="new"&&x()},[]),f.exports.useEffect(()=>()=>{K.reset()},[]),{categoryOptions:k,categorySelect:y,setCategorySelect:e,workmanship:g,setWorkmanship:E,datasheet:I,setDatasheet:w,createDatasheet:S,updateDatasheet:A,id:n}};const ce=n=>n?n.charAt(0).toUpperCase()+n.slice(1):"",me=48,pe=8,de={PaperProps:{style:{maxHeight:me*4.5+pe,width:250}}},Ce=()=>{var z,P,W,F,G,L,R,U,j,B,_,H,V,J,Y;const{t:n}=Q(),{categoryOptions:I,categorySelect:w,setCategorySelect:k,workmanship:u,setWorkmanship:y,datasheet:e,setDatasheet:g,createDatasheet:E,updateDatasheet:N,id:v}=oe(),x=t=>s=>{const r={...e&&{...e},[t]:s.target.value};g(r)},S=t=>s=>{const[r,h]=t.split("."),M={...e,metals:{...e.metals,[r]:{[h]:s.target.value}}};g(M)},A=t=>{const{target:{value:s}}=t,r={...e,categories:s};g(r),k(typeof s=="string"?s.split(","):s)},b=t=>{const s={...e,workmanship:e.workmanship.filter(r=>r.name!==t)};g(s)},D=t=>s=>{const r={...u,[t]:t==="value"?s.target.value:ce(s.target.value.toLowerCase())};y(r)},o=t=>s=>{const r=e.workmanship;r[t].value=s.target.value;const h={...e,workmanship:r};g(h)},i=()=>{const t=e.workmanship?[...e.workmanship,u]:[u],s={...e,workmanship:t};y({name:"",value:0}),g(s)},C=t=>new Promise((s,r)=>{const h=new FileReader;h.readAsDataURL(t),h.onload=()=>s(h.result),h.onerror=M=>r(M)}),$=async t=>{const s=t.target.files[0],r=await C(s),h={...e,image:r};g(h)};return d(m,{children:[d(m,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",sx:{gap:2,flexDirection:{xs:"column",md:"row",lg:"row"}},children:[d(m,{display:"flex",sx:{mt:1,flexDirection:"column",alignItems:"center"},children:[a(T,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2",mb:2},children:n(l.IMAGE)}),a(Z,{sx:{width:300,height:300},component:"img",image:(z=e==null?void 0:e.image)!=null?z:ee,alt:"img"}),a(c,{margin:"normal",children:a(p,{size:"small",type:"file",onChange:$})})]}),d(m,{sx:{mt:1,width:{xs:"100%",md:"30%",lg:"30%"}},children:[a(T,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2"},children:n(l.DATA)}),a(c,{fullWidth:!0,margin:"normal",children:a(p,{size:"small",label:n(l.CODE),value:(P=e==null?void 0:e.code)!=null?P:"",onChange:x("code")})}),a(c,{fullWidth:!0,margin:"normal",children:a(p,{size:"small",label:n(l.NAME),value:(W=e==null?void 0:e.name)!=null?W:"",onChange:x("name")})}),a(c,{fullWidth:!0,margin:"normal",children:a(p,{size:"small",label:n(l.MODEL),value:(F=e==null?void 0:e.model)!=null?F:"",onChange:x("model")})}),a(c,{fullWidth:!0,margin:"normal",children:a(p,{size:"small",label:n(l.DESCRIPTION),value:(G=e==null?void 0:e.description)!=null?G:"",onChange:x("description")})}),d(c,{fullWidth:!0,margin:"normal",children:[a(se,{size:"small",id:"category-label",children:n(l.CATEGORY)}),a(le,{size:"small",labelId:"category-label",id:"category",multiple:!0,value:w,onChange:A,input:a(re,{label:n(l.CATEGORY)}),MenuProps:de,children:I.map(t=>a(ae,{value:t._id,children:t.name.toUpperCase()},t._id))})]}),a(c,{sx:{width:"49%",mr:"1%"},margin:"normal",children:a(p,{size:"small",label:n(l.EXPENSES),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(L=e==null?void 0:e.expenses)!=null?L:"",onChange:x("expenses")})}),a(c,{sx:{width:"49%",ml:"1%"},margin:"normal",children:a(p,{size:"small",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},label:n(l.WEIGHT),value:(R=e==null?void 0:e.weight)!=null?R:"",onChange:x("weight")})}),a(c,{sx:{width:"49%",mr:"1%"},margin:"normal",children:a(p,{size:"small",label:n(l.SILVER),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(B=(j=(U=e==null?void 0:e.metals)==null?void 0:U.silver)==null?void 0:j.price)!=null?B:"",onChange:S("silver.price")})}),a(c,{sx:{width:"49%",ml:"1%"},margin:"normal",children:a(p,{size:"small",label:n(l.GOLD),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(V=(H=(_=e==null?void 0:e.metals)==null?void 0:_.gold)==null?void 0:H.price)!=null?V:"",onChange:S("gold.price")})})]}),d(m,{sx:{mt:1,width:{xs:"100%",md:"35%",lg:"35%"}},children:[a(T,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2"},children:n(l.WORKMANSHIPS)}),d(m,{display:"flex",justifyContent:"space-between",children:[d(m,{display:"flex",justifyContent:"space-between",sx:{width:"90%"},children:[a(c,{sx:{width:"49%"},margin:"normal",children:a(p,{size:"small",label:n(l.NAME),value:u.name,onChange:D("name")})}),a(c,{sx:{width:"49%"},margin:"normal",size:"small",children:a(p,{size:"small",label:n(l.VALUE),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(J=u.value)!=null?J:"",onChange:D("value")})})]}),a(X,{disabled:!u.name||!u.value,sx:{width:"10%"},onClick:i,children:l.ICONS.ADD})]}),(Y=e==null?void 0:e.workmanship)==null?void 0:Y.map((t,s)=>{var r;return d(m,{display:"flex","align-item":"center",children:[d(m,{className:"row",children:[a(m,{className:"column",children:t.name}),a(c,{className:"value",margin:"normal",size:"small",children:a(p,{size:"small",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(r=t.value)!=null?r:"",onChange:o(s)})})]}),a(X,{className:"delete",sx:{padding:0,mb:"10px",width:"10%"},onClick:()=>b(t.name),children:l.ICONS.DELETE},t.name)]},t.name)})]}),d(m,{sx:{mt:1,width:{xs:"100%",md:"25%",lg:"25%"}},children:[a(T,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2",mb:2},children:n(l.RESULT)}),a(ne,{datasheet:e})]})]}),a(m,{display:"flex",justifyContent:"flex-end",children:a(ie,{disabled:!e,sx:{mt:1},variant:"contained",onClick:()=>(v==null?void 0:v.toUpperCase())===l.NEW.toUpperCase()?E(e):N(e),children:(v==null?void 0:v.toUpperCase())===l.NEW.toUpperCase()?n(l.CREATE):n(l.EDIT)})})]})};export{Ce as DatasheetForm};
