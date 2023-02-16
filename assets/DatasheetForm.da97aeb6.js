import{g as Q,a as Z,s as ee,b as O,r as y,u as ae,_ as ne,j as a,c as te,d as se,ah as oe,A as K,x as re,e as v,v as h,T as k,C as o,I as X}from"./index.7ef38e58.js";import{D as A,i as ie,M as le,T as ce}from"./datasheet.service.d6d1351e.js";import{C as me}from"./category.service.aca4a9c8.js";import{F as p,T as g,I as de,S as pe,O as ue}from"./TextField.84dadeac.js";import{B as he}from"./requestHandler.service.19862998.js";import"./Tooltip.1dd1d633.js";function ge(n){return Q("MuiCardMedia",n)}Z("MuiCardMedia",["root","media","img"]);const Ce=["children","className","component","image","src","style"],xe=n=>{const{classes:C,isMediaComponent:u,isImageComponent:x}=n;return se({root:["root",u&&"media",x&&"img"]},ge,C)},ve=ee("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(n,C)=>{const{ownerState:u}=n,{isMediaComponent:x,isImageComponent:l}=u;return[C.root,x&&C.media,l&&C.img]}})(({ownerState:n})=>O({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},n.isMediaComponent&&{width:"100%"},n.isImageComponent&&{objectFit:"cover"})),fe=["video","audio","picture","iframe","img"],we=["picture","img"],ye=y.exports.forwardRef(function(C,u){const x=ae({props:C,name:"MuiCardMedia"}),{children:l,className:M,component:e="div",image:c,src:S,style:D}=x,f=ne(x,Ce),m=fe.indexOf(e)!==-1,E=!m&&c?O({backgroundImage:`url("${c}")`},D):D,b=O({},x,{component:e,isMediaComponent:m,isImageComponent:we.indexOf(e)!==-1}),I=xe(b);return a(ve,O({className:te(I.root,M),as:e,role:!m&&c?"img":void 0,ref:u,style:E,ownerState:b,src:m?c||S:void 0},f,{children:l}))}),Me=ye,Se=()=>{const{id:n}=oe(),[C,u]=y.exports.useState(),[x,l]=y.exports.useState([]),[M,e]=y.exports.useState([]),[c,S]=y.exports.useState({name:"",value:0}),D=async()=>{const d=await me.getAll();d&&l(d)},f=async d=>{const i=await A.get(d);i&&(u(i),e(i.categories.map(N=>N._id)))},m=()=>{u({expenses:0,weight:0,workmanship:[{name:"Fundicion",value:0},{name:"Repasado",value:0},{name:"Plateado",value:0},{name:"Tallado",value:0}],metals:{silver:{price:0},gold:{price:0}}})},E=async d=>{await A.create(T(d))&&(u(void 0),e([]),S({name:"",value:0}),I(),m())},b=async d=>{await A.update(T(d))&&I()},I=()=>{K.proccesSuccess()},T=d=>{const i=JSON.parse(JSON.stringify(d));return i.metals.silver.price=+i.metals.silver.price,i.metals.gold&&(i.metals.gold.price=+d.metals.gold.price),i.workmanship.forEach(N=>{N.value=+N.value}),i};return y.exports.useEffect(()=>{D(),n&&n!=="new"&&f(n),n&&n==="new"&&m()},[]),y.exports.useEffect(()=>()=>{K.reset()},[]),{categoryOptions:x,categorySelect:M,setCategorySelect:e,workmanship:c,setWorkmanship:S,datasheet:C,setDatasheet:u,createDatasheet:E,updateDatasheet:b,id:n}};const De=n=>n?n.charAt(0).toUpperCase()+n.slice(1):"",Ee=48,be=8,Ie={PaperProps:{style:{maxHeight:Ee*4.5+be,width:250}}},ze=()=>{var z,W,R,F,U,G,_,L,j,B,H,V,$,J,Y;const{t:n}=re(),{categoryOptions:C,categorySelect:u,setCategorySelect:x,workmanship:l,setWorkmanship:M,datasheet:e,setDatasheet:c,createDatasheet:S,updateDatasheet:D,id:f}=Se(),m=t=>s=>{const r={...e&&{...e},[t]:s.target.value};c(r)},E=t=>s=>{const[r,w]=t.split("."),P={...e,metals:{...e.metals,[r]:{[w]:s.target.value}}};c(P)},b=t=>{const{target:{value:s}}=t,r={...e,categories:s};c(r),x(typeof s=="string"?s.split(","):s)},I=t=>{const s={...e,workmanship:e.workmanship.filter(r=>r.name!==t)};c(s)},T=t=>s=>{const r={...l,[t]:t==="value"?s.target.value:De(s.target.value.toLowerCase())};M(r)},d=t=>s=>{const r=e.workmanship;r[t].value=s.target.value;const w={...e,workmanship:r};c(w)},i=()=>{const t=e.workmanship?[...e.workmanship,l]:[l],s={...e,workmanship:t};M({name:"",value:0}),c(s)},N=t=>new Promise((s,r)=>{const w=new FileReader;w.readAsDataURL(t),w.onload=()=>s(w.result),w.onerror=P=>r(P)}),q=async t=>{const s=t.target.files[0],r=await N(s),w={...e,image:r};c(w)};return v(h,{children:[v(h,{display:"flex",justifyContent:"space-between",alignItems:"flex-start",sx:{gap:2,flexDirection:{xs:"column",md:"row",lg:"row"}},children:[v(h,{display:"flex",sx:{mt:1,flexDirection:"column",alignItems:"center"},children:[a(k,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2",mb:2},children:n(o.IMAGE)}),a(Me,{sx:{width:300,height:300},component:"img",image:(z=e==null?void 0:e.image)!=null?z:ie,alt:"img"}),a(p,{margin:"normal",children:a(g,{size:"small",type:"file",onChange:q})})]}),v(h,{sx:{mt:1,width:{xs:"100%",md:"30%",lg:"30%"}},children:[a(k,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2"},children:n(o.DATA)}),a(p,{fullWidth:!0,margin:"normal",children:a(g,{size:"small",label:n(o.CODE),value:(W=e==null?void 0:e.code)!=null?W:"",onChange:m("code")})}),a(p,{fullWidth:!0,margin:"normal",children:a(g,{size:"small",label:n(o.NAME),value:(R=e==null?void 0:e.name)!=null?R:"",onChange:m("name")})}),a(p,{fullWidth:!0,margin:"normal",children:a(g,{size:"small",label:n(o.MODEL),value:(F=e==null?void 0:e.model)!=null?F:"",onChange:m("model")})}),a(p,{fullWidth:!0,margin:"normal",children:a(g,{size:"small",label:n(o.DESCRIPTION),value:(U=e==null?void 0:e.description)!=null?U:"",onChange:m("description")})}),v(p,{fullWidth:!0,margin:"normal",children:[a(de,{size:"small",id:"category-label",children:n(o.CATEGORY)}),a(pe,{size:"small",labelId:"category-label",id:"category",multiple:!0,value:u,onChange:b,input:a(ue,{label:n(o.CATEGORY)}),MenuProps:Ie,children:C.map(t=>a(le,{value:t._id,children:t.name.toUpperCase()},t._id))})]}),a(p,{sx:{width:"49%",mr:"1%"},margin:"normal",children:a(g,{size:"small",label:n(o.EXPENSES),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(G=e==null?void 0:e.expenses)!=null?G:"",onChange:m("expenses")})}),a(p,{sx:{width:"49%",ml:"1%"},margin:"normal",children:a(g,{size:"small",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},label:n(o.WEIGHT),value:(_=e==null?void 0:e.weight)!=null?_:"",onChange:m("weight")})}),a(p,{sx:{width:"49%",mr:"1%"},margin:"normal",children:a(g,{size:"small",label:n(o.SILVER),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(B=(j=(L=e==null?void 0:e.metals)==null?void 0:L.silver)==null?void 0:j.price)!=null?B:"",onChange:E("silver.price")})}),a(p,{sx:{width:"49%",ml:"1%"},margin:"normal",children:a(g,{size:"small",label:n(o.GOLD),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:($=(V=(H=e==null?void 0:e.metals)==null?void 0:H.gold)==null?void 0:V.price)!=null?$:"",onChange:E("gold.price")})})]}),v(h,{sx:{mt:1,width:{xs:"100%",md:"35%",lg:"35%"}},children:[a(k,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2"},children:n(o.WORKMANSHIPS)}),v(h,{display:"flex",justifyContent:"space-between",children:[v(h,{display:"flex",justifyContent:"space-between",sx:{width:"90%"},children:[a(p,{sx:{width:"49%"},margin:"normal",children:a(g,{size:"small",label:n(o.NAME),value:l.name,onChange:T("name")})}),a(p,{sx:{width:"49%"},margin:"normal",size:"small",children:a(g,{size:"small",label:n(o.VALUE),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(J=l.value)!=null?J:"",onChange:T("value")})})]}),a(X,{disabled:!l.name||!l.value,sx:{width:"10%"},onClick:i,children:o.ICONS.ADD})]}),(Y=e==null?void 0:e.workmanship)==null?void 0:Y.map((t,s)=>{var r;return v(h,{display:"flex","align-item":"center",children:[v(h,{className:"row",children:[a(h,{className:"column",children:t.name}),a(p,{className:"value",margin:"normal",size:"small",children:a(g,{size:"small",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(r=t.value)!=null?r:"",onChange:d(s)})})]}),a(X,{className:"delete",sx:{padding:0,mb:"10px",width:"10%"},onClick:()=>I(t.name),children:o.ICONS.DELETE},t.name)]},t.name)})]}),v(h,{sx:{mt:1,width:{xs:"100%",md:"25%",lg:"25%"}},children:[a(k,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2",mb:2},children:n(o.RESULT)}),a(ce,{datasheet:e})]})]}),a(h,{display:"flex",justifyContent:"flex-end",children:a(he,{disabled:!e,sx:{mt:1},variant:"contained",onClick:()=>(f==null?void 0:f.toUpperCase())===o.NEW.toUpperCase()?S(e):D(e),children:(f==null?void 0:f.toUpperCase())===o.NEW.toUpperCase()?n(o.CREATE):n(o.EDIT)})})]})};export{ze as DatasheetForm};
