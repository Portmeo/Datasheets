import{g as D,a as E,s as N,P as O,r as x,u as R,_ as H,b as v,j as t,c as A,d as _,T as b,e as h,f as F,i as U,h as B,k as j,I as L,B as f,C as m,l as W,A as q,L as z,m as G}from"./index.83f585e7.js";import{T as M,M as V}from"./Modal.4c5684d0.js";import{M as X,C as J,i as K,D as $}from"./datasheet.service.06a33541.js";import{M as Q,F as Y,T as Z}from"./TextField.8054e60e.js";import"./requestHandler.service.6d238f99.js";function ee(e){return D("MuiCard",e)}E("MuiCard",["root"]);const te=["className","raised"],ae=e=>{const{classes:a}=e;return _({root:["root"]},ee,a)},se=N(O,{name:"MuiCard",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({overflow:"hidden"})),re=x.exports.forwardRef(function(a,s){const r=R({props:a,name:"MuiCard"}),{className:c,raised:i=!1}=r,d=H(r,te),p=v({},r,{raised:i}),o=ae(p);return t(se,v({className:A(o.root,c),elevation:i?8:void 0,ref:s,ownerState:p},d))}),oe=re;function ne(e){return D("MuiCardContent",e)}E("MuiCardContent",["root"]);const le=["className","component"],ie=e=>{const{classes:a}=e;return _({root:["root"]},ne,a)},ce=N("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,a)=>a.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),de=x.exports.forwardRef(function(a,s){const r=R({props:a,name:"MuiCardContent"}),{className:c,component:i="div"}=r,d=H(r,le),p=v({},r,{component:i}),o=ie(p);return t(ce,v({as:i,className:A(o.root,c),ownerState:p,ref:s},d))}),pe=de;function ue(e){return D("MuiCardHeader",e)}const he=E("MuiCardHeader",["root","avatar","action","content","title","subheader"]),I=he,me=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],Ce=e=>{const{classes:a}=e;return _({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},ue,a)},fe=N("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,a)=>v({[`& .${I.title}`]:a.title,[`& .${I.subheader}`]:a.subheader},a.root)})({display:"flex",alignItems:"center",padding:16}),xe=N("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,a)=>a.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),ve=N("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,a)=>a.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),ge=N("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,a)=>a.content})({flex:"1 1 auto"}),ye=x.exports.forwardRef(function(a,s){const r=R({props:a,name:"MuiCardHeader"}),{action:c,avatar:i,className:d,component:p="div",disableTypography:o=!1,subheader:u,subheaderTypographyProps:g,title:n,titleTypographyProps:S}=r,l=H(r,me),C=v({},r,{component:p,disableTypography:o}),y=Ce(C);let T=n;T!=null&&T.type!==b&&!o&&(T=t(b,v({variant:i?"body2":"h5",className:y.title,component:"span",display:"block"},S,{children:T})));let w=u;return w!=null&&w.type!==b&&!o&&(w=t(b,v({variant:i?"body2":"body1",className:y.subheader,color:"text.secondary",component:"span",display:"block"},g,{children:w}))),h(fe,v({className:A(y.root,d),as:p,ref:s,ownerState:C},l,{children:[i&&t(xe,{className:y.avatar,ownerState:C,children:i}),h(ge,{className:y.content,ownerState:C,children:[T,w]}),c&&t(ve,{className:y.action,ownerState:C,children:c})]}))}),be=ye;var P={},Ne=U.exports;Object.defineProperty(P,"__esModule",{value:!0});var k=P.default=void 0,Se=Ne(F()),Te=B,we=(0,Se.default)((0,Te.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");k=P.default=we;const Me=({datasheet:e,actions:a})=>{var n,S;const{t:s}=j(),r=a?Object.keys(a):void 0,[c,i]=x.exports.useState(null),d=Boolean(c),p=l=>{i(l.currentTarget)},o=()=>{i(null)},u=()=>{var l;return((l=e.workmanship)==null?void 0:l.reduce((C,y)=>C+y.value,0))+e.weight*e.metals.silver.price},g=h("div",{children:[e.model&&t("span",{children:e.model}),t("br",{}),t("span",{className:"code",children:e.code})]});return h(oe,{sx:{maxWidth:250},children:[t(be,{action:t(L,{"aria-label":"settings","aria-controls":d?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,onClick:p,children:t(k,{})}),title:e.name,titleTypographyProps:{variant:"subtitle1"},subheader:g,subheaderTypographyProps:{variant:"subtitle2"}}),t(Q,{id:"basic-menu",anchorEl:c,open:d,onClose:o,MenuListProps:{"aria-labelledby":"basic-button"},children:a&&r&&r.map(l=>t(X,{onClick:()=>{o(),a[l].action(e._id)},children:a[l].icon},l))}),t(f,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:t(J,{sx:{width:250,height:250},component:"img",image:(n=e.image)!=null?n:K,alt:"img"})}),t(b,{component:"p",sx:{m:1},children:e==null?void 0:e.description}),t(pe,{className:"card-datasheet",sx:{p:1,"&:last-child":{pb:1}},children:t("table",{children:h("tbody",{children:[h("tr",{className:"card-datasheet",children:[t("td",{children:s(m.SILVER)}),t(M,{title:s(m.WEIGHT),followCursor:!0,arrow:!0,children:t("td",{className:"text-rigth",children:e.weight})}),t(M,{title:s(m.PRICE),followCursor:!0,arrow:!0,children:t("td",{className:"text-rigth",children:e.metals.silver.price})}),t("td",{className:"text-rigth",children:(e.metals.silver.price*e.weight).toFixed(2)})]}),(S=e.workmanship)==null?void 0:S.map(l=>h("tr",{className:"card-datasheet",children:[t("td",{colSpan:3,children:l.name}),t("td",{className:"text-rigth",children:l.value})]},l.name)),h("tr",{className:"card-datasheet",children:[t("td",{colSpan:3,children:s(m.TOTAL)}),t("td",{className:"text-rigth",children:u().toFixed(2)})]}),h("tr",{className:"card-datasheet",children:[t("td",{children:s(m.EXPENSES)}),t("td",{className:"text-rigth",children:e.expenses}),t("td",{className:"text-rigth",children:(u()*e.expenses/100).toFixed(2)}),t("td",{className:"text-rigth",children:(u()*e.expenses/100+u()).toFixed(2)})]}),h("tr",{className:"card-datasheet",children:[t("td",{colSpan:3,children:s(m.PRICE_SALE)}),t("td",{className:"text-rigth",children:((u()*e.expenses/100+u())*2).toFixed(2)})]})]})})})]})},De=()=>{const e=W(),[a,s]=x.exports.useState([]),[r,c]=x.exports.useState([]),[i,d]=x.exports.useState(""),p=async()=>{const n=await $.getAll();n&&(s(n),c(n))},o=async n=>{await $.delete(n)&&(s(l=>l.filter(C=>C._id!==n)),c(l=>l.filter(C=>C._id!==n)),d(""))},u={cancel:{action:()=>d("")},confirm:{action:n=>o(n)}},g={edit:{icon:m.ICONS.EDIT,action:n=>e(n)},delete:{icon:m.ICONS.DELETE,action:n=>d(n)}};return x.exports.useEffect(()=>{p()},[]),x.exports.useEffect(()=>()=>{q.reset()}),{datasheets:a,deleteDatasheet:i,actionsModal:u,actionsCard:g,datasheetsToShow:r,setDatasheetsToShow:c}};const Pe=()=>{const{t:e}=j(),{datasheets:a,deleteDatasheet:s,actionsModal:r,actionsCard:c,datasheetsToShow:i,setDatasheetsToShow:d}=De(),p=()=>o=>{var g;const u=(g=o.target.value)==null?void 0:g.toLowerCase();d(a.filter(n=>n.name.toLowerCase().includes(u)||n.code.toLowerCase().includes(u)))};return h(f,{display:"flex",children:[t(f,{display:"flex"}),h(f,{display:"flex",flexDirection:"column",children:[t(f,{display:"flex",justifyContent:"flex-end",children:t(z,{to:"new",children:t(M,{title:`${e(m.CREATE)}  ${e(m.DATASHEET)}`,children:t(L,{children:m.ICONS.ADD})})})}),t(f,{sx:{mt:1,width:{xs:"100%",md:"50%",lg:"50%"}},children:t(Y,{fullWidth:!0,margin:"normal",children:t(Z,{size:"small",label:e(m.SEARCH),onChange:p()})})}),t(f,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:i.map(o=>t(f,{sx:{m:1},children:t(Me,{datasheet:o,actions:c})},o._id))}),s&&t(V,{isOpen:!!s,handlerClose:r.cancel.action,children:h(f,{children:[t(b,{component:"div",sx:{flexGrow:1},children:e(m.MESSAGE_ACTIONS.DELETE)}),t(f,{className:"actions-modal",children:r&&Object.keys(r).map(o=>t(G,{variant:"contained",onClick:()=>r[o].action(s),children:e(o)},o))})]})})]})]})};export{Pe as Datasheet};
