import{g as F,a as N,s as _,b as l,r as f,u as D,_ as P,j as a,c as S,d as H,B,k as G,ab as O,l as $,ac as w,ad as A,H as j,G as Q,w as W,F as z,e as m,C as n}from"./index.94a47da9.js";import{T as U}from"./Tooltip.c2d12002.js";import{R as g}from"./requestHandler.service.0d012add.js";function q(e){return F("MuiCardMedia",e)}N("MuiCardMedia",["root","media","img"]);const X=["children","className","component","image","src","style"],J=e=>{const{classes:t,isMediaComponent:s,isImageComponent:o}=e;return H({root:["root",s&&"media",o&&"img"]},q,t)},K=_("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{isMediaComponent:o,isImageComponent:i}=s;return[t.root,o&&t.media,i&&t.img]}})(({ownerState:e})=>l({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),Y=["video","audio","picture","iframe","img"],Z=["picture","img"],ee=f.exports.forwardRef(function(t,s){const o=D({props:t,name:"MuiCardMedia"}),{children:i,className:d,component:r="div",image:c,src:p,style:v}=o,y=P(o,X),u=Y.indexOf(r)!==-1,E=!u&&c?l({backgroundImage:`url("${c}")`},v):v,x=l({},o,{component:r,isMediaComponent:u,isImageComponent:Z.indexOf(r)!==-1}),h=J(x);return a(K,l({className:S(h.root,d),as:r,role:!u&&c?"img":void 0,ref:s,style:E,ownerState:x,src:u?c||p:void 0},y,{children:i}))}),ue=ee,te=N("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),k=te;function ae(e){return F("MuiMenuItem",e)}const se=N("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),b=se,oe=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],ie=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},re=e=>{const{disabled:t,dense:s,divider:o,disableGutters:i,selected:d,classes:r}=e,p=H({root:["root",s&&"dense",t&&"disabled",!i&&"gutters",o&&"divider",d&&"selected"]},ae,r);return l({},r,p)},ne=_(B,{shouldForwardProp:e=>G(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:ie})(({theme:e,ownerState:t})=>l({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${b.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${b.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${b.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${k.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${k.inset}`]:{marginLeft:52},[`& .${w.root}`]:{marginTop:0,marginBottom:0},[`& .${w.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&l({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),ce=f.exports.forwardRef(function(t,s){const o=D({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:d="li",dense:r=!1,divider:c=!1,disableGutters:p=!1,focusVisibleClassName:v,role:y="menuitem",tabIndex:u,className:E}=o,x=P(o,oe),h=f.exports.useContext(A),I=f.exports.useMemo(()=>({dense:r||h.dense||!1,disableGutters:p}),[h.dense,r,p]),T=f.exports.useRef(null);j(()=>{i&&T.current&&T.current.focus()},[i]);const L=l({},o,{dense:I.dense,divider:c,disableGutters:p}),M=re(o),V=Q(T,s);let R;return o.disabled||(R=u!==void 0?u:-1),a(A.Provider,{value:I,children:a(ne,l({ref:V,role:y,tabIndex:R,component:d,focusVisibleClassName:S(M.focusVisible,v),className:S(M.root,E)},x,{ownerState:L,classes:M}))})}),me=ce,ge=""+new URL("imageNotFound.fcc035c1.jpg",import.meta.url).href;const be=({datasheet:e})=>{var o;const{t}=W(),s=()=>{var d;const i=((d=e.workmanship)==null?void 0:d.reduce((r,c)=>+r+ +c.value,0))+e.weight*e.metals.silver.price;return isNaN(i)?0:i};return a(z,{children:e&&a("div",{className:"table-card-datasheet",children:a("table",{children:m("tbody",{children:[m("tr",{className:"table-card-datasheet",children:[a("td",{children:t(n.SILVER)}),a(U,{title:t(n.WEIGHT),followCursor:!0,arrow:!0,children:a("td",{className:"text-rigth",children:e.weight})}),a(U,{title:t(n.PRICE),followCursor:!0,arrow:!0,children:a("td",{className:"text-rigth",children:e.metals.silver.price})}),a("td",{className:"text-rigth",children:(e.metals.silver.price*e.weight).toFixed(2)})]}),(o=e.workmanship)==null?void 0:o.map(i=>m("tr",{className:"table-card-datasheet",children:[a("td",{colSpan:3,children:i.name}),a("td",{className:"text-rigth",children:i.value})]},i.name)),m("tr",{className:"table-card-datasheet",children:[a("td",{colSpan:3,children:t(n.TOTAL)}),a("td",{className:"text-rigth",children:s().toFixed(2)})]}),m("tr",{className:"table-card-datasheet",children:[a("td",{children:t(n.EXPENSES)}),a("td",{className:"text-rigth",children:e.expenses}),a("td",{className:"text-rigth",children:(s()*e.expenses/100).toFixed(2)}),a("td",{className:"text-rigth",children:(s()*e.expenses/100+s()).toFixed(2)})]}),m("tr",{className:"table-card-datasheet",children:[a("td",{colSpan:3,children:t(n.PRICE_SALE)}),a("td",{className:"text-rigth",children:((s()*e.expenses/100+s())*2).toFixed(2)})]})]})})})})},C="https://apidatasheets-production.up.railway.app/api",Ce={getAll:()=>g.fetch(`${C}${n.REQUEST_ROUTES.DATASHEET}`),get:e=>g.fetch(`${C}${n.REQUEST_ROUTES.DATASHEET}/${e}`),create:e=>g.post(`${C}${n.REQUEST_ROUTES.DATASHEET}`,{body:e}),update:e=>g.put(`${C}${n.REQUEST_ROUTES.DATASHEET}/${e._id}`,{body:e}),delete:e=>g.delete(`${C}${n.REQUEST_ROUTES.DATASHEET}/${e}`)};export{ue as C,Ce as D,me as M,be as T,ge as i};
