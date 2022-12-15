import{g as E,a as D,s as N,P as k,r as x,u as R,_ as H,b as v,j as t,c as A,d as _,T,e as C,f as O,i as U,h as B,k as j,I as L,B as y,C as u,l as W,A as q,F as z,L as G,m as V}from"./index.7873cacd.js";import{T as M,M as X}from"./Modal.63a2c4f2.js";import{M as J,C as K,i as Q,D as $}from"./datasheet.service.284d7fe8.js";import{M as Y,F as Z,T as ee}from"./TextField.5fff4129.js";import"./requestHandler.service.baa34922.js";function te(e){return E("MuiCard",e)}D("MuiCard",["root"]);const ae=["className","raised"],se=e=>{const{classes:a}=e;return _({root:["root"]},te,a)},re=N(k,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({overflow:"hidden"})),oe=x.exports.forwardRef(function(a,s){const r=R({props:a,name:"MuiCard"}),{className:l,raised:i=!1}=r,c=H(r,ae),p=v({},r,{raised:i}),o=se(p);return t(re,v({className:A(o.root,l),elevation:i?8:void 0,ref:s,ownerState:p},c))}),ne=oe;function ie(e){return E("MuiCardContent",e)}D("MuiCardContent",["root"]);const le=["className","component"],ce=e=>{const{classes:a}=e;return _({root:["root"]},ie,a)},de=N("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),pe=x.exports.forwardRef(function(a,s){const r=R({props:a,name:"MuiCardContent"}),{className:l,component:i="div"}=r,c=H(r,le),p=v({},r,{component:i}),o=ce(p);return t(de,v({as:i,className:A(o.root,l),ownerState:p,ref:s},c))}),he=pe;function ue(e){return E("MuiCardHeader",e)}const me=D("MuiCardHeader",["root","avatar","action","content","title","subheader"]),I=me,Ce=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],fe=e=>{const{classes:a}=e;return _({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},ue,a)},xe=N("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>v({[`& .${I.title}`]:a.title,[`& .${I.subheader}`]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),ve=N("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),ge=N("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),ye=N("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),Se=x.exports.forwardRef(function(a,s){const r=R({props:a,name:"MuiCardHeader"}),{action:l,avatar:i,className:c,component:p="div",disableTypography:o=!1,subheader:h,subheaderTypographyProps:f,title:n,titleTypographyProps:d}=r,g=H(r,Ce),m=v({},r,{component:p,disableTypography:o}),S=fe(m);let b=n;b!=null&&b.type!==T&&!o&&(b=t(T,v({variant:i?"body2":"h5",className:S.title,component:"span",display:"block"},d,{children:b})));let w=h;return w!=null&&w.type!==T&&!o&&(w=t(T,v({variant:i?"body2":"body1",className:S.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:w}))),C(xe,v({className:A(S.root,c),as:p,ref:s,ownerState:m},g,{children:[i&&t(ve,{className:S.avatar,ownerState:m,children:i}),C(ye,{className:S.content,ownerState:m,children:[b,w]}),l&&t(ge,{className:S.action,ownerState:m,children:l})]}))}),Ne=Se;var P={},be=U.exports;Object.defineProperty(P,"__esModule",{value:!0});var F=P.default=void 0,we=be(O()),Te=B,Me=(0,we.default)((0,Te.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");F=P.default=Me;const Ee=({datasheet:e,actions:a})=>{var f,n;const{t:s}=j(),r=a?Object.keys(a):void 0,[l,i]=x.exports.useState(null),c=Boolean(l),p=d=>{i(d.currentTarget)},o=()=>{i(null)},h=()=>{var d;return((d=e.workmanship)==null?void 0:d.reduce((g,m)=>g+m.value,0))+e.weight*e.metals.silver.price};return C(ne,{sx:{maxWidth:300},children:[t(Ne,{action:t(L,{"aria-label":"settings","aria-controls":c?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":c?"true":void 0,onClick:p,children:t(F,{})}),title:e.code,titleTypographyProps:{variant:"h6"},subheader:e.name}),t(Y,{id:"basic-menu",anchorEl:l,open:c,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:a&&r&&r.map(d=>t(J,{onClick:()=>{o(),a[d].action(e._id)},children:a[d].icon},d))}),t(y,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:t(K,{sx:{width:200,height:200},component:"img",image:(f=e.image)!=null?f:Q,alt:"img"})}),t(he,{className:"card-datasheet",sx:{p:1},children:t("table",{children:C("tbody",{children:[C("tr",{className:"card-datasheet",children:[t("td",{children:s(u.SILVER)}),t(M,{title:s(u.WEIGHT),followCursor:!0,arrow:!0,children:t("td",{className:"text-rigth",children:e.weight})}),t(M,{title:s(u.PRICE),followCursor:!0,arrow:!0,children:t("td",{className:"text-rigth",children:e.metals.silver.price})}),t("td",{className:"text-rigth",children:(e.metals.silver.price*e.weight).toFixed(2)})]}),(n=e.workmanship)==null?void 0:n.map(d=>C("tr",{className:"card-datasheet",children:[t("td",{colSpan:3,children:d.name}),t("td",{className:"text-rigth",children:d.value})]},d.name)),C("tr",{className:"card-datasheet",children:[t("td",{colSpan:3,children:s(u.TOTAL)}),t("td",{className:"text-rigth",children:h().toFixed(2)})]}),C("tr",{className:"card-datasheet",children:[t("td",{children:s(u.EXPENSES)}),t("td",{className:"text-rigth",children:e.expenses}),t("td",{className:"text-rigth",children:(h()*e.expenses/100).toFixed(2)}),t("td",{className:"text-rigth",children:(h()*e.expenses/100+h()).toFixed(2)})]}),C("tr",{className:"card-datasheet",children:[t("td",{colSpan:3,children:s(u.PRICE_SALE)}),t("td",{className:"text-rigth",children:((h()*e.expenses/100+h())*2).toFixed(2)})]})]})})})]})},De=()=>{const e=W(),[a,s]=x.exports.useState([]),[r,l]=x.exports.useState([]),[i,c]=x.exports.useState(""),p=async()=>{const n=await $.getAll();n&&(s(n),l(n))},o=async n=>{await $.delete(n)&&(s(g=>g.filter(m=>m._id!==n)),l(g=>g.filter(m=>m._id!==n)),c(""))},h={cancel:{action:()=>c("")},confirm:{action:n=>o(n)}},f={edit:{icon:u.ICONS.EDIT,action:n=>e(n)},delete:{icon:u.ICONS.DELETE,action:n=>c(n)}};return x.exports.useEffect(()=>{p()},[]),x.exports.useEffect(()=>()=>{q.reset()}),{datasheets:a,deleteDatasheet:i,actionsModal:h,actionsCard:f,datasheetsToShow:r,setDatasheetsToShow:l}};const $e=()=>{const{t:e}=j(),{datasheets:a,deleteDatasheet:s,actionsModal:r,actionsCard:l,datasheetsToShow:i,setDatasheetsToShow:c}=De(),p=()=>o=>{var f;const h=(f=o.target.value)==null?void 0:f.toLowerCase();c(a.filter(n=>n.name.toLowerCase().includes(h)||n.code.toLowerCase().includes(h)))};return C(z,{children:[t(y,{display:"flex",justifyContent:"flex-end",children:t(G,{to:"new",children:t(M,{title:`${e(u.CREATE)}  ${e(u.DATASHEET)}`,children:t(L,{children:u.ICONS.ADD})})})}),t(y,{sx:{mt:1,width:"30%"},children:t(Z,{fullWidth:!0,margin:"normal",children:t(ee,{size:"small",label:e(u.SEARCH),onChange:p()})})}),t(y,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:i.map(o=>t(y,{sx:{m:1},children:t(Ee,{datasheet:o,actions:l})},o._id))}),s&&t(X,{isOpen:!!s,handlerClose:r.cancel.action,children:C(y,{children:[t(T,{component:"div",sx:{flexGrow:1},children:e(u.MESSAGE_ACTIONS.DELETE)}),t(y,{className:"actions-modal",children:r&&Object.keys(r).map(o=>t(V,{variant:"contained",onClick:()=>r[o].action(s),children:e(o)},o))})]})})]})};export{$e as Datasheet};
