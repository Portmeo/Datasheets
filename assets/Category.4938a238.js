import{r as d,g as T,a as f,s as x,b as u,u as h,_ as m,j as r,c as $,d as R,v,a3 as Q,w as S,a4 as V,H as j,F as J,P as Z,e as k,C,I as X,k as ee,A as te,B as O,L as oe,T as ae,l as se}from"./index.c7f77b87.js";import{T as ne,M as re}from"./Modal.0592bb3f.js";import{C as D}from"./category.service.b88e00be.js";import"./requestHandler.service.d6c7f4f1.js";const le=d.exports.createContext(),Y=le;function ie(e){return T("MuiTable",e)}f("MuiTable",["root","stickyHeader"]);const ce=["className","component","padding","size","stickyHeader"],de=e=>{const{classes:t,stickyHeader:o}=e;return R({root:["root",o&&"stickyHeader"]},ie,t)},pe=x("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>u({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":u({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),_="table",ue=d.exports.forwardRef(function(t,o){const s=h({props:t,name:"MuiTable"}),{className:n,component:a=_,padding:c="normal",size:l="medium",stickyHeader:p=!1}=s,i=m(s,ce),b=u({},s,{component:a,padding:c,size:l,stickyHeader:p}),y=de(b),w=d.exports.useMemo(()=>({padding:c,size:l,stickyHeader:p}),[c,l,p]);return r(Y.Provider,{value:w,children:r(pe,u({as:a,role:a===_?null:"table",ref:o,className:$(y.root,n),ownerState:b},i))})}),be=ue,ge=d.exports.createContext(),A=ge;function ye(e){return T("MuiTableBody",e)}f("MuiTableBody",["root"]);const Ce=["className","component"],ve=e=>{const{classes:t}=e;return R({root:["root"]},ye,t)},Te=x("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),fe={variant:"body"},I="tbody",xe=d.exports.forwardRef(function(t,o){const s=h({props:t,name:"MuiTableBody"}),{className:n,component:a=I}=s,c=m(s,Ce),l=u({},s,{component:a}),p=ve(l);return r(A.Provider,{value:fe,children:r(Te,u({className:$(p.root,n),as:a,ref:o,role:a===I?null:"rowgroup",ownerState:l},c))})}),he=xe;function me(e){return T("MuiTableCell",e)}const $e=f("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Re=$e,we=["align","className","component","padding","scope","size","sortDirection","variant"],ke=e=>{const{classes:t,variant:o,align:s,padding:n,size:a,stickyHeader:c}=e,l={root:["root",o,c&&"stickyHeader",s!=="inherit"&&`align${v(s)}`,n!=="normal"&&`padding${v(n)}`,`size${v(a)}`]};return R(l,me,t)},Me=x("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${v(o.size)}`],o.padding!=="normal"&&t[`padding${v(o.padding)}`],o.align!=="inherit"&&t[`align${v(o.align)}`],o.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>u({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?Q(S(e.palette.divider,1),.88):V(S(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},t.variant==="head"&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},t.variant==="body"&&{color:(e.vars||e).palette.text.primary},t.variant==="footer"&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},t.size==="small"&&{padding:"6px 16px",[`&.${Re.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},t.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},t.padding==="none"&&{padding:0},t.align==="left"&&{textAlign:"left"},t.align==="center"&&{textAlign:"center"},t.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},t.align==="justify"&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),He=d.exports.forwardRef(function(t,o){const s=h({props:t,name:"MuiTableCell"}),{align:n="inherit",className:a,component:c,padding:l,scope:p,size:i,sortDirection:b,variant:y}=s,w=m(s,we),g=d.exports.useContext(Y),M=d.exports.useContext(A),U=M&&M.variant==="head";let H;c?H=c:H=U?"th":"td";let z=p;!z&&U&&(z="col");const B=y||M&&M.variant,E=u({},s,{align:n,component:H,padding:l||(g&&g.padding?g.padding:"normal"),size:i||(g&&g.size?g.size:"medium"),sortDirection:b,stickyHeader:B==="head"&&g&&g.stickyHeader,variant:B}),K=ke(E);let P=null;return b&&(P=b==="asc"?"ascending":"descending"),r(Me,u({as:H,ref:o,className:$(K.root,a),"aria-sort":P,scope:z,ownerState:E},w))}),N=He;function Ne(e){return T("MuiTableContainer",e)}f("MuiTableContainer",["root"]);const Se=["className","component"],Ae=e=>{const{classes:t}=e;return R({root:["root"]},Ne,t)},ze=x("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Oe=d.exports.forwardRef(function(t,o){const s=h({props:t,name:"MuiTableContainer"}),{className:n,component:a="div"}=s,c=m(s,Se),l=u({},s,{component:a}),p=Ae(l);return r(ze,u({ref:o,as:a,className:$(p.root,n),ownerState:l},c))}),Ue=Oe;function Be(e){return T("MuiTableHead",e)}f("MuiTableHead",["root"]);const Ee=["className","component"],Pe=e=>{const{classes:t}=e;return R({root:["root"]},Be,t)},je=x("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),De={variant:"head"},L="thead",_e=d.exports.forwardRef(function(t,o){const s=h({props:t,name:"MuiTableHead"}),{className:n,component:a=L}=s,c=m(s,Ee),l=u({},s,{component:a}),p=Pe(l);return r(A.Provider,{value:De,children:r(je,u({as:a,className:$(p.root,n),ref:o,role:a===L?null:"rowgroup",ownerState:l},c))})}),Ie=_e;function Le(e){return T("MuiTableRow",e)}const We=f("MuiTableRow",["root","selected","hover","head","footer"]),W=We,Ge=["className","component","hover","selected"],Fe=e=>{const{classes:t,selected:o,hover:s,head:n,footer:a}=e;return R({root:["root",o&&"selected",s&&"hover",n&&"head",a&&"footer"]},Le,t)},Je=x("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${W.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${W.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:S(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:S(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),G="tr",Xe=d.exports.forwardRef(function(t,o){const s=h({props:t,name:"MuiTableRow"}),{className:n,component:a=G,hover:c=!1,selected:l=!1}=s,p=m(s,Ge),i=d.exports.useContext(A),b=u({},s,{component:a,hover:c,selected:l,head:i&&i.variant==="head",footer:i&&i.variant==="footer"}),y=Fe(b);return r(Je,u({as:a,ref:o,className:$(y.root,n),role:a===G?null:"row",ownerState:b},p))}),F=Xe,q=({rows:e,actions:t})=>{const o=e.length?Object.keys(e[0]):void 0,s=t?Object.keys(t):void 0;return r(J,{children:o&&r(Ue,{component:Z,children:k(be,{sx:{minWidth:650},"aria-label":"table",children:[r(Ie,{children:k(F,{sx:{"& th":{color:"white",backgroundColor:"#1976D2"}},children:[o.map(n=>r(N,{children:n.toUpperCase()},n)),t&&r(N,{align:"right",children:C.ACTIONS.toUpperCase()})]})}),r(he,{children:e.map(n=>k(F,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[o.map(a=>r(N,{children:n[a]},a)),t&&s&&r(N,{align:"right",children:s.map(a=>r(X,{onClick:()=>t[a].action(n.id),children:t[a].icon},a))})]},n.id))})]})})})};q.propTypes={rows:j.exports.array,actions:j.exports.object};const Ye=()=>{const e=ee(),[t,o]=d.exports.useState([]),[s,n]=d.exports.useState(""),a=async()=>{const i=await D.getAll();i&&o(i)},c=async i=>{await D.delete(i)&&(o(y=>y.filter(w=>w.id!==i)),n(""))},l={edit:{icon:C.ICONS.EDIT,action:i=>e(i)},delete:{icon:C.ICONS.DELETE,action:i=>n(i)}},p={cancel:{action:()=>n("")},confirm:{action:i=>c(i)}};return d.exports.useEffect(()=>{a()},[]),d.exports.useEffect(()=>()=>{te.reset()}),{actionsModal:p,actionsTable:l,categories:t,deleteCategory:s}};const Ze=()=>{const{categories:e,deleteCategory:t,actionsTable:o,actionsModal:s}=Ye(),n=e.map(a=>({...a,name:a.name}));return k(J,{children:[r(O,{display:"flex",justifyContent:"flex-end",children:r(oe,{to:"new",children:r(ne,{title:`${C.CREATE}  ${C.CATEGORY}`,children:r(X,{children:C.ICONS.ADD})})})}),r(q,{rows:n,actions:o}),t&&r(re,{isOpen:!!t,handlerClose:s.cancel.action,children:k(O,{children:[r(ae,{component:"div",sx:{flexGrow:1},children:C.MESSAGE_ACTIONS.DELETE}),r(O,{className:"actions-modal",children:s&&Object.keys(s).map(a=>r(se,{variant:"contained",onClick:()=>s[a].action(t),children:a},a))})]})})]})};export{Ze as Category};
