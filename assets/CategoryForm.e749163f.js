import{a5 as g,r as u,A as d,e as f,B as m,j as c,C as r,l as x}from"./index.c7f77b87.js";import{C}from"./category.service.b88e00be.js";import{F as E,T as h}from"./TextField.a54a980c.js";import"./requestHandler.service.d6c7f4f1.js";import"./Menu.e7fb0ff7.js";const A=()=>{const{id:e}=g(),[i,a]=u.exports.useState(),l=async t=>{const s=await C.get(t);s&&a(s)},n=async t=>{await C.create(t)&&(o(),a(void 0))},p=async t=>{await C.update(t)&&o()},o=()=>{d.proccesSuccess()};return u.exports.useEffect(()=>{e&&e!=="new"&&l(e)},[]),u.exports.useEffect(()=>()=>{d.reset()}),{category:i,setCategory:a,createCategory:n,updateCategory:p,id:e}},j=()=>{var o;const{category:e,setCategory:i,createCategory:a,updateCategory:l,id:n}=A(),p=t=>s=>{const y={...e&&{...e},[t]:s.target.value};i(y)};return f(m,{children:[c(E,{fullWidth:!0,margin:"normal",children:c(h,{label:r.NAME,value:(o=e==null?void 0:e.name)!=null?o:"",onChange:p(r.NAME)})}),c(m,{display:"flex",justifyContent:"flex-end",children:c(x,{sx:{mt:1},variant:"contained",onClick:()=>n===r.APP.CATEGORY.NEW?a(e):l(e),children:n===r.NEW?r.CREATE:r.EDIT})})]})};export{j as CategoryForm};
