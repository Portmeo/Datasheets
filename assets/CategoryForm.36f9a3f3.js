import{ae as f,r as C,A as d,t as x,e as h,p as m,j as i,C as o,v as E}from"./index.1fd62262.js";import{C as p}from"./category.service.3b42c934.js";import{F as v,T as S}from"./TextField.ccb8e98e.js";const T=()=>{const{id:t}=f(),[e,r]=C.exports.useState(),l=async s=>{const a=await p.get(s);a&&r(a)},u=async s=>{await p.create(s)&&(c(),r(void 0))},n=async s=>{await p.update(s)&&c()},c=()=>{d.proccesSuccess()};return C.exports.useEffect(()=>{t&&t!=="new"&&l(t)},[]),C.exports.useEffect(()=>()=>{d.reset()},[]),{category:e,setCategory:r,createCategory:u,updateCategory:n,id:t}},N=()=>{var s;const{t}=x(),{category:e,setCategory:r,createCategory:l,updateCategory:u,id:n}=T(),c=a=>y=>{const g={...e&&{...e},[a]:y.target.value};r(g)};return h(m,{children:[i(v,{fullWidth:!0,margin:"normal",children:i(S,{label:t(o.NAME),value:(s=e==null?void 0:e.name)!=null?s:"",onChange:c("name")})}),i(m,{display:"flex",justifyContent:"flex-end",children:i(E,{sx:{mt:1},variant:"contained",onClick:()=>n===o.NEW.toLowerCase()?l(e):u(e),children:n===o.NEW.toLowerCase()?t(o.CREATE):t(o.EDIT)})})]})};export{N as CategoryForm};
