import{ae as $,r as f,A as Y,k as q,e as u,B as p,j as a,C as r,T as Q,I as K,m as Z}from"./index.83f585e7.js";import{D as z,C as ee,i as ae,M as ne}from"./datasheet.service.06a33541.js";import{C as te}from"./category.service.fecd52ac.js";import{F as c,T as m,I as se,S as le,O as re}from"./TextField.8054e60e.js";import"./requestHandler.service.6d238f99.js";const ie=()=>{const{id:t}=$(),[k,x]=f.exports.useState(),[I,h]=f.exports.useState([]),[D,e]=f.exports.useState([]),[g,S]=f.exports.useState({name:"",value:0}),N=async()=>{const i=await te.getAll();i&&h(i)},v=async i=>{const o=await z.get(i);o&&(x(o),e(o.categories.map(w=>w._id)))},C=()=>{x({workmanship:[{name:"Fundicion",value:0},{name:"Repasado",value:0},{name:"Plateado",value:0},{name:"Tallado",value:0}]})},E=async i=>{await z.create(y(i))&&(x(void 0),e([]),S({name:"",value:0}),b(),C())},T=async i=>{await z.update(y(i))&&b()},b=()=>{Y.proccesSuccess()},y=i=>{const o=JSON.parse(JSON.stringify(i));return o.metals.silver.price=+o.metals.silver.price,o.metals.gold&&(o.metals.gold.price=+i.metals.gold.price),o.workmanship.forEach(w=>{w.value=+w.value}),o};return f.exports.useEffect(()=>{N(),t&&t!=="new"&&v(t),t&&t==="new"&&C()},[]),f.exports.useEffect(()=>()=>{Y.reset()},[]),{categoryOptions:I,categorySelect:D,setCategorySelect:e,workmanship:g,setWorkmanship:S,datasheet:k,setDatasheet:x,createDatasheet:E,updateDatasheet:T,id:t}};const oe=t=>t?t.charAt(0).toUpperCase()+t.slice(1):"",ce=48,me=8,pe={PaperProps:{style:{maxHeight:ce*4.5+me,width:250}}},ve=()=>{var M,P,W,A,F,L,R,U,j,G,B,_,H,V,J;const{t}=q(),{categoryOptions:k,categorySelect:x,setCategorySelect:I,workmanship:h,setWorkmanship:D,datasheet:e,setDatasheet:g,createDatasheet:S,updateDatasheet:N,id:v}=ie(),C=n=>s=>{const l={...e&&{...e},[n]:s.target.value};g(l)},E=n=>s=>{const[l,d]=n.split("."),O={...e,metals:{...e.metals,[l]:{[d]:s.target.value}}};g(O)},T=n=>{const{target:{value:s}}=n,l={...e,categories:s};g(l),I(typeof s=="string"?s.split(","):s)},b=n=>{const s={...e,workmanship:e.workmanship.filter(l=>l.name!==n)};g(s)},y=n=>s=>{const l={...h,[n]:n==="value"?s.target.value:oe(s.target.value.toLowerCase())};D(l)},i=n=>s=>{const l=e.workmanship;l[n].value=s.target.value;const d={...e,workmanship:l};g(d)},o=()=>{const n=e.workmanship?[...e.workmanship,h]:[h],s={...e,workmanship:n};D({name:"",value:0}),g(s)},w=n=>new Promise((s,l)=>{const d=new FileReader;d.readAsDataURL(n),d.onload=()=>s(d.result),d.onerror=O=>l(O)}),X=async n=>{const s=n.target.files[0],l=await w(s),d={...e,image:l};g(d)};return u(p,{children:[u(p,{display:"flex",justifyContent:"space-between",alignItems:"center",sx:{gap:2,flexDirection:{xs:"column",md:"row",lg:"row"}},children:[u(p,{display:"flex",sx:{mt:2,flexDirection:"column",alignItems:"center"},children:[a(ee,{sx:{width:300,height:300},component:"img",image:(M=e==null?void 0:e.image)!=null?M:ae,alt:"img"}),a(c,{margin:"normal",children:a(m,{size:"small",type:"file",onChange:X})})]}),u(p,{sx:{mt:1,width:{xs:"100%",md:"30%",lg:"30%"}},children:[a(c,{fullWidth:!0,margin:"normal",children:a(m,{size:"small",label:t(r.CODE),value:(P=e==null?void 0:e.code)!=null?P:"",onChange:C("code")})}),a(c,{fullWidth:!0,margin:"normal",children:a(m,{size:"small",label:t(r.NAME),value:(W=e==null?void 0:e.name)!=null?W:"",onChange:C("name")})}),a(c,{fullWidth:!0,margin:"normal",children:a(m,{size:"small",label:t(r.MODEL),value:(A=e==null?void 0:e.model)!=null?A:"",onChange:C("model")})}),a(c,{fullWidth:!0,margin:"normal",children:a(m,{size:"small",label:t(r.DESCRIPTION),value:(F=e==null?void 0:e.description)!=null?F:"",onChange:C("description")})}),u(c,{fullWidth:!0,margin:"normal",children:[a(se,{size:"small",id:"category-label",children:t(r.CATEGORY)}),a(le,{size:"small",labelId:"category-label",id:"category",multiple:!0,value:x,onChange:T,input:a(re,{label:t(r.CATEGORY)}),MenuProps:pe,children:k.map(n=>a(ne,{value:n._id,children:n.name.toUpperCase()},n._id))})]}),a(c,{sx:{width:"49%",mr:"1%"},margin:"normal",children:a(m,{size:"small",label:t(r.EXPENSES),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(L=e==null?void 0:e.expenses)!=null?L:"",onChange:C("expenses")})}),a(c,{sx:{width:"49%",ml:"1%"},margin:"normal",children:a(m,{size:"small",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},label:t(r.WEIGHT),value:(R=e==null?void 0:e.weight)!=null?R:"",onChange:C("weight")})}),a(c,{sx:{width:"49%",mr:"1%"},margin:"normal",children:a(m,{size:"small",label:t(r.SILVER),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(G=(j=(U=e==null?void 0:e.metals)==null?void 0:U.silver)==null?void 0:j.price)!=null?G:"",onChange:E("silver.price")})}),a(c,{sx:{width:"49%",ml:"1%"},margin:"normal",children:a(m,{size:"small",label:t(r.GOLD),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(H=(_=(B=e==null?void 0:e.metals)==null?void 0:B.gold)==null?void 0:_.price)!=null?H:"",onChange:E("gold.price")})})]}),u(p,{sx:{mt:1,width:{xs:"100%",md:"35%",lg:"35%"}},children:[a(Q,{variant:"h6",component:"div",sx:{flexGrow:1,color:"#1976D2"},children:t(r.WORKMANSHIPS)}),u(p,{display:"flex",justifyContent:"space-between",children:[u(p,{display:"flex",justifyContent:"space-between",sx:{width:"90%"},children:[a(c,{sx:{width:"49%"},margin:"normal",children:a(m,{size:"small",label:t(r.NAME),value:h.name,onChange:y("name")})}),a(c,{sx:{width:"49%"},margin:"normal",size:"small",children:a(m,{size:"small",label:t(r.VALUE),inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(V=h.value)!=null?V:"",onChange:y("value")})})]}),a(K,{disabled:!h.name||!h.value,sx:{width:"10%"},onClick:o,children:r.ICONS.ADD})]}),(J=e==null?void 0:e.workmanship)==null?void 0:J.map((n,s)=>{var l;return u(p,{display:"flex","align-item":"center",children:[u(p,{className:"row",children:[a(p,{className:"column",children:n.name}),a(c,{className:"value",margin:"normal",size:"small",children:a(m,{size:"small",inputProps:{inputMode:"numeric",pattern:"[0-9]*"},value:(l=n.value)!=null?l:"",onChange:i(s)})})]}),a(K,{className:"delete",sx:{padding:0,mb:"10px",width:"10%"},onClick:()=>b(n.name),children:r.ICONS.DELETE},n.name)]},n.name)})]})]}),a(p,{display:"flex",justifyContent:"flex-end",children:a(Z,{disabled:!e,sx:{mt:1},variant:"contained",onClick:()=>(v==null?void 0:v.toUpperCase())===r.NEW.toUpperCase()?S(e):N(e),children:(v==null?void 0:v.toUpperCase())===r.NEW.toUpperCase()?t(r.CREATE):t(r.EDIT)})})]})};export{ve as DatasheetForm};
