import{g as w,a as R,s as _,b as n,r as f,u as D,_ as h,j as T,c as I,d as H,a3 as B,X as F,a4 as U,x as $,a5 as A,a6 as N,q as L,p as j,C as p}from"./index.7873cacd.js";import{R as u}from"./requestHandler.service.baa34922.js";function G(e){return w("MuiCardMedia",e)}R("MuiCardMedia",["root","media","img"]);const Q=["children","className","component","image","src","style"],z=e=>{const{classes:t,isMediaComponent:s,isImageComponent:a}=e;return H({root:["root",s&&"media",a&&"img"]},G,t)},W=_("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e,{isMediaComponent:a,isImageComponent:i}=s;return[t.root,a&&t.media,i&&t.img]}})(({ownerState:e})=>n({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),q=["video","audio","picture","iframe","img"],X=["picture","img"],J=f.exports.forwardRef(function(t,s){const a=D({props:t,name:"MuiCardMedia"}),{children:i,className:l,component:o="div",image:r,src:d,style:C}=a,y=h(a,Q),c=q.indexOf(o)!==-1,M=!c&&r?n({backgroundImage:`url("${r}")`},C):C,b=n({},a,{component:o,isMediaComponent:c,isImageComponent:X.indexOf(o)!==-1}),v=z(b);return T(W,n({className:I(v.root,l),as:o,role:!c&&r?"img":void 0,ref:s,style:M,ownerState:b,src:c?r||d:void 0},y,{children:i}))}),re=J,K=R("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),k=K;function Y(e){return w("MuiMenuItem",e)}const Z=R("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),m=Z,ee=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],te=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.divider&&t.divider,!s.disableGutters&&t.gutters]},ae=e=>{const{disabled:t,dense:s,divider:a,disableGutters:i,selected:l,classes:o}=e,d=H({root:["root",s&&"dense",t&&"disabled",!i&&"gutters",a&&"divider",l&&"selected"]},Y,o);return n({},o,d)},se=_(B,{shouldForwardProp:e=>F(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:te})(({theme:e,ownerState:t})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${m.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${m.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:$(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:$(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${m.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${m.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${k.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${k.inset}`]:{marginLeft:52},[`& .${A.root}`]:{marginTop:0,marginBottom:0},[`& .${A.inset}`]:{paddingLeft:36},[`& .${U.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${U.root} svg`]:{fontSize:"1.25rem"}}))),oe=f.exports.forwardRef(function(t,s){const a=D({props:t,name:"MuiMenuItem"}),{autoFocus:i=!1,component:l="li",dense:o=!1,divider:r=!1,disableGutters:d=!1,focusVisibleClassName:C,role:y="menuitem",tabIndex:c,className:M}=a,b=h(a,ee),v=f.exports.useContext(N),S=f.exports.useMemo(()=>({dense:o||v.dense||!1,disableGutters:d}),[v.dense,o,d]),x=f.exports.useRef(null);L(()=>{i&&x.current&&x.current.focus()},[i]);const P=n({},a,{dense:S.dense,divider:r,disableGutters:d}),E=ae(a),V=j(x,s);let O;return a.disabled||(O=c!==void 0?c:-1),T(N.Provider,{value:S,children:T(se,n({ref:V,role:y,tabIndex:O,component:l,focusVisibleClassName:I(E.focusVisible,C),className:I(E.root,M)},b,{ownerState:P,classes:E}))})}),de=oe,ce=""+new URL("imageNotFound.fcc035c1.jpg",import.meta.url).href,g="https://apidatasheets-production.up.railway.app/api",le={getAll:()=>u.fetch(`${g}${p.REQUEST_ROUTES.DATASHEET}`),get:e=>u.fetch(`${g}${p.REQUEST_ROUTES.DATASHEET}/${e}`),create:e=>u.post(`${g}${p.REQUEST_ROUTES.DATASHEET}`,{body:e}),update:e=>u.put(`${g}${p.REQUEST_ROUTES.DATASHEET}/${e._id}`,{body:e}),delete:e=>u.delete(`${g}${p.REQUEST_ROUTES.DATASHEET}/${e}`)};export{re as C,le as D,de as M,ce as i};
