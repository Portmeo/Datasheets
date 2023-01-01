import{g as A,a as H,s as I,P as ve,r as P,u as W,_ as D,b as c,j as n,c as L,d as U,T as E,e as S,B as ce,f as de,h as O,i as V,k as Ce,l as j,m as xe,n as ye,o as Pe,p as $e,I as pe,q as B,t as ke,A as Re,C as G,v as ue,F as Me,L as Ie,w as Ne}from"./index.45a048bb.js";import{u as Se,M as we}from"./useCategory.c7508a7e.js";import{M as Fe,C as Be,i as Le,T as ze,D as ae}from"./datasheet.service.32925642.js";import{u as Y,f as ge,M as Te,F as Oe,T as De}from"./TextField.d9ee698f.js";import{T as _e}from"./Tooltip.af47ae8f.js";import"./category.service.4ff2c7c9.js";function Ee(e){return A("MuiCard",e)}H("MuiCard",["root"]);const Ae=["className","raised"],He=e=>{const{classes:t}=e;return U({root:["root"]},Ee,t)},Ue=I(ve,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),Ge=P.exports.forwardRef(function(t,o){const a=W({props:t,name:"MuiCard"}),{className:s,raised:i=!1}=a,f=D(a,Ae),r=c({},a,{raised:i}),u=He(r);return n(Ue,c({className:L(u.root,s),elevation:i?8:void 0,ref:o,ownerState:r},f))}),We=Ge;function je(e){return A("MuiCardContent",e)}H("MuiCardContent",["root"]);const Ve=["className","component"],qe=e=>{const{classes:t}=e;return U({root:["root"]},je,t)},Je=I("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Ke=P.exports.forwardRef(function(t,o){const a=W({props:t,name:"MuiCardContent"}),{className:s,component:i="div"}=a,f=D(a,Ve),r=c({},a,{component:i}),u=qe(r);return n(Je,c({as:i,className:L(u.root,s),ownerState:r,ref:o},f))}),Qe=Ke;function Xe(e){return A("MuiCardHeader",e)}const Ye=H("MuiCardHeader",["root","avatar","action","content","title","subheader"]),ne=Ye,Ze=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],et=e=>{const{classes:t}=e;return U({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},Xe,t)},tt=I("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>c({[`& .${ne.title}`]:t.title,[`& .${ne.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),ot=I("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),at=I("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),nt=I("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),st=P.exports.forwardRef(function(t,o){const a=W({props:t,name:"MuiCardHeader"}),{action:s,avatar:i,className:f,component:r="div",disableTypography:u=!1,subheader:p,subheaderTypographyProps:h,title:k,titleTypographyProps:d}=a,m=D(a,Ze),l=c({},a,{component:r,disableTypography:u}),b=et(l);let x=k;x!=null&&x.type!==E&&!u&&(x=n(E,c({variant:i?"body2":"h5",className:b.title,component:"span",display:"block"},d,{children:x})));let v=p;return v!=null&&v.type!==E&&!u&&(v=n(E,c({variant:i?"body2":"body1",className:b.subheader,color:"text.secondary",component:"span",display:"block"},h,{children:v}))),S(tt,c({className:L(b.root,f),as:r,ref:o,ownerState:l},m,{children:[i&&n(ot,{className:b.avatar,ownerState:l,children:i}),S(nt,{className:b.content,ownerState:l,children:[x,v]}),s&&n(at,{className:b.action,ownerState:l,children:s})]}))}),rt=st;function it(e){return A("PrivateSwitchBase",e)}H("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const lt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ct=e=>{const{classes:t,checked:o,disabled:a,edge:s}=e,i={root:["root",o&&"checked",a&&"disabled",s&&`edge${O(s)}`],input:["input"]};return U(i,it,t)},dt=I(ce)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),pt=I("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ut=P.exports.forwardRef(function(t,o){const{autoFocus:a,checked:s,checkedIcon:i,className:f,defaultChecked:r,disabled:u,disableFocusRipple:p=!1,edge:h=!1,icon:k,id:d,inputProps:m,inputRef:l,name:b,onBlur:x,onChange:v,onFocus:R,readOnly:M,required:g,tabIndex:$,type:C,value:N}=t,w=D(t,lt),[y,z]=de({controlled:s,default:Boolean(r),name:"SwitchBase",state:"checked"}),T=Y(),ee=_=>{R&&R(_),T&&T.onFocus&&T.onFocus(_)},K=_=>{x&&x(_),T&&T.onBlur&&T.onBlur(_)},be=_=>{if(_.nativeEvent.defaultPrevented)return;const oe=_.target.checked;z(oe),v&&v(_,oe)};let q=u;T&&typeof q>"u"&&(q=T.disabled);const he=C==="checkbox"||C==="radio",Q=c({},t,{checked:y,disabled:q,disableFocusRipple:p,edge:h}),te=ct(Q);return S(dt,c({component:"span",className:L(te.root,f),centerRipple:!0,focusRipple:!p,disabled:q,tabIndex:null,role:void 0,onFocus:ee,onBlur:K,ownerState:Q,ref:o},w,{children:[n(pt,c({autoFocus:a,checked:s,defaultChecked:r,className:te.input,disabled:q,id:he&&d,name:b,onChange:be,readOnly:M,ref:l,required:g,ownerState:Q,tabIndex:$,type:C},C==="checkbox"&&N===void 0?{}:{value:N},m)),y?i:k]}))}),gt=ut,ft=V(n("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),mt=V(n("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),bt=V(n("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ht(e){return A("MuiCheckbox",e)}const vt=H("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),X=vt,Ct=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],xt=e=>{const{classes:t,indeterminate:o,color:a}=e,s={root:["root",o&&"indeterminate",`color${O(a)}`]},i=U(s,ht,t);return c({},t,i)},yt=I(gt,{shouldForwardProp:e=>Ce(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,o.color!=="default"&&t[`color${O(o.color)}`]]}})(({theme:e,ownerState:t})=>c({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:j(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${X.checked}, &.${X.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${X.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Pt=n(mt,{}),$t=n(ft,{}),kt=n(bt,{}),Rt=P.exports.forwardRef(function(t,o){var a,s;const i=W({props:t,name:"MuiCheckbox"}),{checkedIcon:f=Pt,color:r="primary",icon:u=$t,indeterminate:p=!1,indeterminateIcon:h=kt,inputProps:k,size:d="medium",className:m}=i,l=D(i,Ct),b=p?h:u,x=p?h:f,v=c({},i,{color:r,indeterminate:p,size:d}),R=xt(v);return n(yt,c({type:"checkbox",inputProps:c({"data-indeterminate":p},k),icon:P.exports.cloneElement(b,{fontSize:(a=b.props.fontSize)!=null?a:d}),checkedIcon:P.exports.cloneElement(x,{fontSize:(s=x.props.fontSize)!=null?s:d}),ownerState:v,ref:o,className:L(R.root,m)},l,{classes:R}))}),Mt=Rt;function It(e){return A("MuiFormControlLabel",e)}const Nt=H("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),J=Nt,St=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],wt=e=>{const{classes:t,disabled:o,labelPlacement:a,error:s}=e,i={root:["root",o&&"disabled",`labelPlacement${O(a)}`,s&&"error"],label:["label",o&&"disabled"]};return U(i,It,t)},Ft=I("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${J.label}`]:t.label},t.root,t[`labelPlacement${O(o.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${J.disabled}`]:{cursor:"default"}},t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${J.label}`]:{[`&.${J.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Bt=P.exports.forwardRef(function(t,o){var a;const s=W({props:t,name:"MuiFormControlLabel"}),{className:i,componentsProps:f={},control:r,disabled:u,disableTypography:p,label:h,labelPlacement:k="end",slotProps:d={}}=s,m=D(s,St),l=Y();let b=u;typeof b>"u"&&typeof r.props.disabled<"u"&&(b=r.props.disabled),typeof b>"u"&&l&&(b=l.disabled);const x={disabled:b};["checked","name","onChange","value","inputRef"].forEach(C=>{typeof r.props[C]>"u"&&typeof s[C]<"u"&&(x[C]=s[C])});const v=ge({props:s,muiFormControl:l,states:["error"]}),R=c({},s,{disabled:b,labelPlacement:k,error:v.error}),M=wt(R),g=(a=d.typography)!=null?a:f.typography;let $=h;return $!=null&&$.type!==E&&!p&&($=n(E,c({component:"span"},g,{className:L(M.label,g==null?void 0:g.className),children:$}))),S(Ft,c({className:L(M.root,i),ownerState:R,ref:o},m,{children:[P.exports.cloneElement(r,x),$]}))}),Lt=Bt;function zt(e){return A("MuiFormGroup",e)}H("MuiFormGroup",["root","row","error"]);const Tt=["className","row"],Ot=e=>{const{classes:t,row:o,error:a}=e;return U({root:["root",o&&"row",a&&"error"]},zt,t)},Dt=I("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.row&&t.row]}})(({ownerState:e})=>c({display:"flex",flexDirection:"column",flexWrap:"wrap"},e.row&&{flexDirection:"row"})),_t=P.exports.forwardRef(function(t,o){const a=W({props:t,name:"MuiFormGroup"}),{className:s,row:i=!1}=a,f=D(a,Tt),r=Y(),u=ge({props:a,muiFormControl:r,states:["error"]}),p=c({},a,{row:i,error:u.error}),h=Ot(p);return n(Dt,c({className:L(h.root,s),ownerState:p,ref:o},f))}),Et=_t;function At(e){return A("MuiPagination",e)}H("MuiPagination",["root","ul","outlined","text"]);const Ht=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function Ut(e={}){const{boundaryCount:t=1,componentName:o="usePagination",count:a=1,defaultPage:s=1,disabled:i=!1,hideNextButton:f=!1,hidePrevButton:r=!1,onChange:u,page:p,showFirstButton:h=!1,showLastButton:k=!1,siblingCount:d=1}=e,m=D(e,Ht),[l,b]=de({controlled:p,default:s,name:o,state:"page"}),x=(y,z)=>{p||b(z),u&&u(y,z)},v=(y,z)=>{const T=z-y+1;return Array.from({length:T},(ee,K)=>y+K)},R=v(1,Math.min(t,a)),M=v(Math.max(a-t+1,t+1),a),g=Math.max(Math.min(l-d,a-t-d*2-1),t+2),$=Math.min(Math.max(l+d,t+d*2+2),M.length>0?M[0]-2:a-1),C=[...h?["first"]:[],...r?[]:["previous"],...R,...g>t+2?["start-ellipsis"]:t+1<a-t?[t+1]:[],...v(g,$),...$<a-t-1?["end-ellipsis"]:a-t>t?[a-t]:[],...M,...f?[]:["next"],...k?["last"]:[]],N=y=>{switch(y){case"first":return 1;case"previous":return l-1;case"next":return l+1;case"last":return a;default:return null}},w=C.map(y=>typeof y=="number"?{onClick:z=>{x(z,y)},type:"page",page:y,selected:y===l,disabled:i,"aria-current":y===l?"true":void 0}:{onClick:z=>{x(z,N(y))},type:y,page:N(y),selected:!1,disabled:i||y.indexOf("ellipsis")===-1&&(y==="next"||y==="last"?l>=a:l<=1)});return c({items:w},m)}function Gt(e){return A("MuiPaginationItem",e)}const Wt=H("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),F=Wt,se=V(n("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),re=V(n("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),ie=V(n("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),le=V(n("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),jt=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],fe=(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${O(o.size)}`],o.variant==="text"&&t[`text${O(o.color)}`],o.variant==="outlined"&&t[`outlined${O(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},Vt=e=>{const{classes:t,color:o,disabled:a,selected:s,size:i,shape:f,type:r,variant:u}=e,p={root:["root",`size${O(i)}`,u,f,o!=="standard"&&`${u}${O(o)}`,a&&"disabled",s&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[r]],icon:["icon"]};return U(p,Gt,t)},qt=I("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:fe})(({theme:e,ownerState:t})=>c({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,height:"auto",[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)})),Jt=I(ce,{name:"MuiPaginationItem",slot:"Root",overridesResolver:fe})(({theme:e,ownerState:t})=>c({},e.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(e.vars||e).palette.text.primary,[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${F.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},transition:e.transitions.create(["color","background-color"],{duration:e.transitions.duration.short}),"&:hover":{backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.selected}`]:{backgroundColor:(e.vars||e).palette.action.selected,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(e.vars||e).palette.action.selected}},[`&.${F.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selected} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},[`&.${F.disabled}`]:{opacity:1,color:(e.vars||e).palette.action.disabled,backgroundColor:(e.vars||e).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:e.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius}),({theme:e,ownerState:t})=>c({},t.variant==="text"&&{[`&.${F.selected}`]:c({},t.color!=="standard"&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}},[`&.${F.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}},{[`&.${F.disabled}`]:{color:(e.vars||e).palette.action.disabled}})},t.variant==="outlined"&&{border:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${e.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${F.selected}`]:c({},t.color!=="standard"&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:j(e.palette[t.color].main,.5)}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})`:j(e.palette[t.color].main,e.palette.action.activatedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${F.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))`:j(e.palette[t.color].main,e.palette.action.activatedOpacity+e.palette.action.focusOpacity)}},{[`&.${F.disabled}`]:{borderColor:(e.vars||e).palette.action.disabledBackground,color:(e.vars||e).palette.action.disabled}})})),Kt=I("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})(({theme:e,ownerState:t})=>c({fontSize:e.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:e.typography.pxToRem(18)},t.size==="large"&&{fontSize:e.typography.pxToRem(22)})),Qt=P.exports.forwardRef(function(t,o){const a=W({props:t,name:"MuiPaginationItem"}),{className:s,color:i="standard",component:f,components:r={},disabled:u=!1,page:p,selected:h=!1,shape:k="circular",size:d="medium",slots:m={},type:l="page",variant:b="text"}=a,x=D(a,jt),v=c({},a,{color:i,disabled:u,selected:h,shape:k,size:d,type:l,variant:b}),R=xe(),M=Vt(v),$=(R.direction==="rtl"?{previous:m.next||r.next||le,next:m.previous||r.previous||ie,last:m.first||r.first||se,first:m.last||r.last||re}:{previous:m.previous||r.previous||ie,next:m.next||r.next||le,first:m.first||r.first||se,last:m.last||r.last||re})[l];return l==="start-ellipsis"||l==="end-ellipsis"?n(qt,{ref:o,ownerState:v,className:L(M.root,s),children:"\u2026"}):S(Jt,c({ref:o,ownerState:v,component:f,disabled:u,className:L(M.root,s)},x,{children:[l==="page"&&p,$?n(Kt,{as:$,ownerState:v,className:M.icon}):null]}))}),Xt=Qt,Yt=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Zt=e=>{const{classes:t,variant:o}=e;return U({root:["root",o],ul:["ul"]},At,t)},eo=I("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant]]}})({}),to=I("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function oo(e,t,o){return e==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${e} page`}const ao=P.exports.forwardRef(function(t,o){const a=W({props:t,name:"MuiPagination"}),{boundaryCount:s=1,className:i,color:f="standard",count:r=1,defaultPage:u=1,disabled:p=!1,getItemAriaLabel:h=oo,hideNextButton:k=!1,hidePrevButton:d=!1,renderItem:m=w=>n(Xt,c({},w)),shape:l="circular",showFirstButton:b=!1,showLastButton:x=!1,siblingCount:v=1,size:R="medium",variant:M="text"}=a,g=D(a,Yt),{items:$}=Ut(c({},a,{componentName:"Pagination"})),C=c({},a,{boundaryCount:s,color:f,count:r,defaultPage:u,disabled:p,getItemAriaLabel:h,hideNextButton:k,hidePrevButton:d,renderItem:m,shape:l,showFirstButton:b,showLastButton:x,siblingCount:v,size:R,variant:M}),N=Zt(C);return n(eo,c({"aria-label":"pagination navigation",className:L(N.root,i),ownerState:C,ref:o},g,{children:n(to,{className:N.ul,ownerState:C,children:$.map((w,y)=>n("li",{children:m(c({},w,{color:f,"aria-label":h(w.type,w.page,w.selected),shape:l,size:R,variant:M}))},y))})}))}),no=ao;var Z={},so=Pe.exports;Object.defineProperty(Z,"__esModule",{value:!0});var me=Z.default=void 0,ro=so(ye()),io=$e,lo=(0,ro.default)((0,io.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");me=Z.default=lo;const co=({datasheet:e,actions:t})=>{var p;const o=t?Object.keys(t):void 0,[a,s]=P.exports.useState(null),i=Boolean(a),f=h=>{s(h.currentTarget)},r=()=>{s(null)},u=S("div",{children:[e.model&&n("span",{children:e.model}),n("br",{}),n("span",{className:"code",children:e.code})]});return S(We,{sx:{maxWidth:250},children:[n(rt,{action:n(pe,{"aria-label":"settings","aria-controls":i?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,onClick:f,children:n(me,{})}),title:e.name,titleTypographyProps:{variant:"subtitle1"},subheader:u,subheaderTypographyProps:{variant:"subtitle2"}}),n(Te,{id:"basic-menu",anchorEl:a,open:i,onClose:r,MenuListProps:{"aria-labelledby":"basic-button"},children:t&&o&&o.map(h=>n(Fe,{onClick:()=>{r(),t[h].action(e._id)},children:t[h].icon},h))}),n(B,{display:"flex",flexWrap:"wrap",justifyContent:"center",children:n(Be,{sx:{width:250,height:250},component:"img",image:(p=e.image)!=null?p:Le,alt:"img"})}),n(E,{component:"p",sx:{m:1},children:e==null?void 0:e.description}),n(Qe,{className:"card-datasheet",sx:{p:1,"&:last-child":{pb:1}},children:n(ze,{datasheet:e})})]})},po=()=>{const e=ke(),[t,o]=P.exports.useState([]),[a,s]=P.exports.useState([]),[i,f]=P.exports.useState(""),[r,u]=P.exports.useState([]),[p,h]=P.exports.useState(""),[k,d]=P.exports.useState(1),[m,l]=P.exports.useState(1),b=async()=>{const g=await ae.getAll();g&&(o(g),l(Math.round(g.length/10)),s(g.slice(0,10)))},x=async g=>{await ae.delete(g)&&(o(C=>C.filter(N=>N._id!==g)),s(C=>C.filter(N=>N._id!==g)),f(""))},v={cancel:{action:()=>f("")},confirm:{action:g=>x(g)}},R={edit:{icon:G.ICONS.EDIT,action:g=>e(g)},delete:{icon:G.ICONS.DELETE,action:g=>f(g)}},M=()=>{let g=t.filter($=>{let C=!0;const N=$.categories;return r.forEach(w=>{C=N.includes(w)}),C}).filter($=>{var C;return $.code.toLowerCase().includes(p)||$.name.toLowerCase().includes(p)||((C=$.model)==null?void 0:C.toLowerCase().includes(p))});l(Math.round(g.length/10)),g=g.slice(k,k*10),s(g)};return P.exports.useEffect(()=>{M()},[r,p,k]),P.exports.useEffect(()=>{b()},[]),P.exports.useEffect(()=>()=>{Re.reset()}),{datasheets:t,deleteDatasheet:i,actionsModal:v,actionsCard:R,datasheetsToShow:a,setDatasheetsToShow:s,categoryFilter:r,setCategoryFilter:u,searchFilter:p,setSearchFilter:h,paginationFilter:k,setPaginationFilter:d,countPagination:m}};const uo=({filterAction:e})=>{const{t}=ue(),{categories:o}=Se(),a=s=>{e(s.target.value)};return n(Me,{children:S(B,{display:"flex",flexDirection:"column",children:[n(E,{variant:"h6",component:"div",sx:{color:"#1976D2"},children:t(G.CATEGORIES)}),n(Et,{children:o.map(s=>n(Lt,{control:n(Mt,{}),value:s._id,onChange:a,label:s.name},s._id))})]})})},Co=()=>{const{t:e}=ue(),{deleteDatasheet:t,actionsModal:o,actionsCard:a,datasheetsToShow:s,setCategoryFilter:i,setSearchFilter:f,setPaginationFilter:r,countPagination:u}=po(),p=()=>d=>{var l;const m=(l=d.target.value)==null?void 0:l.toLowerCase();f(m)},h=d=>{i(m=>{let l=[...m];return l.includes(d)?l=l.filter(b=>b!==d):l.push(d),l})},k=d=>{r(d)};return S(B,{display:"flex",flexDirection:"column",children:[n(B,{display:"flex",justifyContent:"flex-end",children:n(Ie,{to:"new",children:n(_e,{title:`${e(G.CREATE)}  ${e(G.DATASHEET)}`,children:n(pe,{children:G.ICONS.ADD})})})}),S(B,{display:"flex",sx:{mt:1,flexDirection:{xs:"column",md:"row",lg:"row"}},children:[n(B,{display:"flex",sx:{mt:3,width:{xs:"100%",md:"20%",lg:"15%"}},children:n(uo,{filterAction:h})}),S(B,{display:"flex",flexDirection:"column",sx:{mt:1,width:{xs:"100%",md:"80%",lg:"85%"}},children:[S(B,{sx:{mt:1,width:{xs:"100%",md:"50%",lg:"50%"}},children:[n(Oe,{fullWidth:!0,margin:"normal",children:n(De,{size:"small",label:e(G.SEARCH),onChange:p()})}),n(no,{count:u,onChange:(d,m)=>k(m)})]}),n(B,{display:"flex",flexWrap:"wrap",sx:{mt:1,justifyContent:{xs:"center",md:"flex-start",lg:"flex-start"}},children:s.map(d=>n(B,{sx:{m:1},children:n(co,{datasheet:d,actions:a})},d._id))}),t&&n(we,{isOpen:!!t,handlerClose:o.cancel.action,children:S(B,{children:[n(E,{component:"div",sx:{flexGrow:1},children:e(G.MESSAGE_ACTIONS.DELETE)}),n(B,{className:"actions-modal",children:o&&Object.keys(o).map(d=>n(Ne,{variant:"contained",onClick:()=>o[d].action(t),children:e(d)},d))})]})})]})]})]})};export{Co as Datasheet};
