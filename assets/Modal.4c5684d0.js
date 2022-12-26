import{g as Gt,a as Kt,r as $,_ as rt,o as Or,j,n as Tr,b as C,p as ft,q as Wt,t as Rr,d as Jt,s as ot,v as Er,u as Qt,w as Zt,x as er,y as Cr,z as $r,D as Ar,E as Mr,F as Dr,c as Ye,G as Ge,e as dt,H as Nt,R as Br,J as Lr,B as Ke,I as Sr,K as kr}from"./index.83f585e7.js";import{G as Ft}from"./requestHandler.service.6d238f99.js";var W="top",U="bottom",H="right",N="left",gt="auto",Fe=[W,U,H,N],xe="start",We="end",jr="clippingParents",tr="viewport",Se="popper",Wr="reference",It=Fe.reduce(function(e,t){return e.concat([t+"-"+xe,t+"-"+We])},[]),rr=[].concat(Fe,[gt]).reduce(function(e,t){return e.concat([t,t+"-"+xe,t+"-"+We])},[]),Nr="beforeRead",Fr="read",Ir="afterRead",Ur="beforeMain",Hr="main",Vr="afterMain",_r="beforeWrite",zr="write",qr="afterWrite",Xr=[Nr,Fr,Ir,Ur,Hr,Vr,_r,zr,qr];function ee(e){return e?(e.nodeName||"").toLowerCase():null}function V(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=V(e).Element;return e instanceof t||e instanceof Element}function I(e){var t=V(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function yt(e){if(typeof ShadowRoot>"u")return!1;var t=V(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Yr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!I(i)||!ee(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(l){var s=n[l];s===!1?i.removeAttribute(l):i.setAttribute(l,s===!0?"":s)}))})}function Gr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=l.reduce(function(a,c){return a[c]="",a},{});!I(n)||!ee(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const Kr={name:"applyStyles",enabled:!0,phase:"write",fn:Yr,effect:Gr,requires:["computeStyles"]};function Z(e){return e.split("-")[0]}var me=Math.max,tt=Math.min,Pe=Math.round;function vt(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function or(){return!/^((?!chrome|android).)*safari/i.test(vt())}function Oe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&I(e)&&(n=e.offsetWidth>0&&Pe(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Pe(o.height)/e.offsetHeight||1);var l=he(e)?V(e):window,s=l.visualViewport,a=!or()&&r,c=(o.left+(a&&s?s.offsetLeft:0))/n,p=(o.top+(a&&s?s.offsetTop:0))/i,m=o.width/n,w=o.height/i;return{width:m,height:w,top:p,right:c+m,bottom:p+w,left:c,x:c,y:p}}function bt(e){var t=Oe(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function nr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&yt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ie(e){return V(e).getComputedStyle(e)}function Jr(e){return["table","td","th"].indexOf(ee(e))>=0}function ue(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function nt(e){return ee(e)==="html"?e:e.assignedSlot||e.parentNode||(yt(e)?e.host:null)||ue(e)}function Ut(e){return!I(e)||ie(e).position==="fixed"?null:e.offsetParent}function Qr(e){var t=/firefox/i.test(vt()),r=/Trident/i.test(vt());if(r&&I(e)){var o=ie(e);if(o.position==="fixed")return null}var n=nt(e);for(yt(n)&&(n=n.host);I(n)&&["html","body"].indexOf(ee(n))<0;){var i=ie(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function Ie(e){for(var t=V(e),r=Ut(e);r&&Jr(r)&&ie(r).position==="static";)r=Ut(r);return r&&(ee(r)==="html"||ee(r)==="body"&&ie(r).position==="static")?t:r||Qr(e)||t}function wt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ke(e,t,r){return me(e,tt(t,r))}function Zr(e,t,r){var o=ke(e,t,r);return o>r?r:o}function ir(){return{top:0,right:0,bottom:0,left:0}}function ar(e){return Object.assign({},ir(),e)}function sr(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var eo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ar(typeof t!="number"?t:sr(t,Fe))};function to(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,s=Z(r.placement),a=wt(s),c=[N,H].indexOf(s)>=0,p=c?"height":"width";if(!(!i||!l)){var m=eo(n.padding,r),w=bt(i),u=a==="y"?W:N,x=a==="y"?U:H,d=r.rects.reference[p]+r.rects.reference[a]-l[a]-r.rects.popper[p],v=l[a]-r.rects.reference[a],b=Ie(i),O=b?a==="y"?b.clientHeight||0:b.clientWidth||0:0,T=d/2-v/2,f=m[u],h=O-w[p]-m[x],g=O/2-w[p]/2+T,R=ke(f,g,h),P=a;r.modifiersData[o]=(t={},t[P]=R,t.centerOffset=R-g,t)}}function ro(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!nr(t.elements.popper,n)||(t.elements.arrow=n))}const oo={name:"arrow",enabled:!0,phase:"main",fn:to,effect:ro,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Te(e){return e.split("-")[1]}var no={top:"auto",right:"auto",bottom:"auto",left:"auto"};function io(e){var t=e.x,r=e.y,o=window,n=o.devicePixelRatio||1;return{x:Pe(t*n)/n||0,y:Pe(r*n)/n||0}}function Ht(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,s=e.position,a=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,m=e.isFixed,w=l.x,u=w===void 0?0:w,x=l.y,d=x===void 0?0:x,v=typeof p=="function"?p({x:u,y:d}):{x:u,y:d};u=v.x,d=v.y;var b=l.hasOwnProperty("x"),O=l.hasOwnProperty("y"),T=N,f=W,h=window;if(c){var g=Ie(r),R="clientHeight",P="clientWidth";if(g===V(r)&&(g=ue(r),ie(g).position!=="static"&&s==="absolute"&&(R="scrollHeight",P="scrollWidth")),g=g,n===W||(n===N||n===H)&&i===We){f=U;var A=m&&g===h&&h.visualViewport?h.visualViewport.height:g[R];d-=A-o.height,d*=a?1:-1}if(n===N||(n===W||n===U)&&i===We){T=H;var E=m&&g===h&&h.visualViewport?h.visualViewport.width:g[P];u-=E-o.width,u*=a?1:-1}}var D=Object.assign({position:s},c&&no),S=p===!0?io({x:u,y:d}):{x:u,y:d};if(u=S.x,d=S.y,a){var B;return Object.assign({},D,(B={},B[f]=O?"0":"",B[T]=b?"0":"",B.transform=(h.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",B))}return Object.assign({},D,(t={},t[f]=O?d+"px":"",t[T]=b?u+"px":"",t.transform="",t))}function ao(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,l=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,c={placement:Z(t.placement),variation:Te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ht(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ht(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const so={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ao,data:{}};var Je={passive:!0};function po(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,l=o.resize,s=l===void 0?!0:l,a=V(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,Je)}),s&&a.addEventListener("resize",r.update,Je),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Je)}),s&&a.removeEventListener("resize",r.update,Je)}}const lo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:po,data:{}};var co={left:"right",right:"left",bottom:"top",top:"bottom"};function et(e){return e.replace(/left|right|bottom|top/g,function(t){return co[t]})}var uo={start:"end",end:"start"};function Vt(e){return e.replace(/start|end/g,function(t){return uo[t]})}function xt(e){var t=V(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Pt(e){return Oe(ue(e)).left+xt(e).scrollLeft}function fo(e,t){var r=V(e),o=ue(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,s=0,a=0;if(n){i=n.width,l=n.height;var c=or();(c||!c&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:l,x:s+Pt(e),y:a}}function vo(e){var t,r=ue(e),o=xt(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=me(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=me(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+Pt(e),a=-o.scrollTop;return ie(n||r).direction==="rtl"&&(s+=me(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:s,y:a}}function Ot(e){var t=ie(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function pr(e){return["html","body","#document"].indexOf(ee(e))>=0?e.ownerDocument.body:I(e)&&Ot(e)?e:pr(nt(e))}function je(e,t){var r;t===void 0&&(t=[]);var o=pr(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=V(o),l=n?[i].concat(i.visualViewport||[],Ot(o)?o:[]):o,s=t.concat(l);return n?s:s.concat(je(nt(l)))}function mt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function mo(e,t){var r=Oe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function _t(e,t,r){return t===tr?mt(fo(e,r)):he(t)?mo(t,r):mt(vo(ue(e)))}function ho(e){var t=je(nt(e)),r=["absolute","fixed"].indexOf(ie(e).position)>=0,o=r&&I(e)?Ie(e):e;return he(o)?t.filter(function(n){return he(n)&&nr(n,o)&&ee(n)!=="body"}):[]}function go(e,t,r,o){var n=t==="clippingParents"?ho(e):[].concat(t),i=[].concat(n,[r]),l=i[0],s=i.reduce(function(a,c){var p=_t(e,c,o);return a.top=me(p.top,a.top),a.right=tt(p.right,a.right),a.bottom=tt(p.bottom,a.bottom),a.left=me(p.left,a.left),a},_t(e,l,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function lr(e){var t=e.reference,r=e.element,o=e.placement,n=o?Z(o):null,i=o?Te(o):null,l=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(n){case W:a={x:l,y:t.y-r.height};break;case U:a={x:l,y:t.y+t.height};break;case H:a={x:t.x+t.width,y:s};break;case N:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var c=n?wt(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case xe:a[c]=a[c]-(t[p]/2-r[p]/2);break;case We:a[c]=a[c]+(t[p]/2-r[p]/2);break}}return a}function Ne(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,l=i===void 0?e.strategy:i,s=r.boundary,a=s===void 0?jr:s,c=r.rootBoundary,p=c===void 0?tr:c,m=r.elementContext,w=m===void 0?Se:m,u=r.altBoundary,x=u===void 0?!1:u,d=r.padding,v=d===void 0?0:d,b=ar(typeof v!="number"?v:sr(v,Fe)),O=w===Se?Wr:Se,T=e.rects.popper,f=e.elements[x?O:w],h=go(he(f)?f:f.contextElement||ue(e.elements.popper),a,p,l),g=Oe(e.elements.reference),R=lr({reference:g,element:T,strategy:"absolute",placement:n}),P=mt(Object.assign({},T,R)),A=w===Se?P:g,E={top:h.top-A.top+b.top,bottom:A.bottom-h.bottom+b.bottom,left:h.left-A.left+b.left,right:A.right-h.right+b.right},D=e.modifiersData.offset;if(w===Se&&D){var S=D[n];Object.keys(E).forEach(function(B){var _=[H,U].indexOf(B)>=0?1:-1,z=[W,U].indexOf(B)>=0?"y":"x";E[B]+=S[z]*_})}return E}function yo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,l=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,c=a===void 0?rr:a,p=Te(o),m=p?s?It:It.filter(function(x){return Te(x)===p}):Fe,w=m.filter(function(x){return c.indexOf(x)>=0});w.length===0&&(w=m);var u=w.reduce(function(x,d){return x[d]=Ne(e,{placement:d,boundary:n,rootBoundary:i,padding:l})[Z(d)],x},{});return Object.keys(u).sort(function(x,d){return u[x]-u[d]})}function bo(e){if(Z(e)===gt)return[];var t=et(e);return[Vt(e),t,Vt(t)]}function wo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!0:l,a=r.fallbackPlacements,c=r.padding,p=r.boundary,m=r.rootBoundary,w=r.altBoundary,u=r.flipVariations,x=u===void 0?!0:u,d=r.allowedAutoPlacements,v=t.options.placement,b=Z(v),O=b===v,T=a||(O||!x?[et(v)]:bo(v)),f=[v].concat(T).reduce(function(te,K){return te.concat(Z(K)===gt?yo(t,{placement:K,boundary:p,rootBoundary:m,padding:c,flipVariations:x,allowedAutoPlacements:d}):K)},[]),h=t.rects.reference,g=t.rects.popper,R=new Map,P=!0,A=f[0],E=0;E<f.length;E++){var D=f[E],S=Z(D),B=Te(D)===xe,_=[W,U].indexOf(S)>=0,z=_?"width":"height",M=Ne(t,{placement:D,boundary:p,rootBoundary:m,altBoundary:w,padding:c}),L=_?B?H:N:B?U:W;h[z]>g[z]&&(L=et(L));var G=et(L),q=[];if(i&&q.push(M[S]<=0),s&&q.push(M[L]<=0,M[G]<=0),q.every(function(te){return te})){A=D,P=!1;break}R.set(D,q)}if(P)for(var ge=x?3:1,ye=function(K){var ae=f.find(function(se){var k=R.get(se);if(k)return k.slice(0,K).every(function(X){return X})});if(ae)return A=ae,"break"},fe=ge;fe>0;fe--){var de=ye(fe);if(de==="break")break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}}const xo={name:"flip",enabled:!0,phase:"main",fn:wo,requiresIfExists:["offset"],data:{_skip:!1}};function zt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function qt(e){return[W,H,U,N].some(function(t){return e[t]>=0})}function Po(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=Ne(t,{elementContext:"reference"}),s=Ne(t,{altBoundary:!0}),a=zt(l,o),c=zt(s,n,i),p=qt(a),m=qt(c);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}const Oo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Po};function To(e,t,r){var o=Z(e),n=[N,W].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],s=i[1];return l=l||0,s=(s||0)*n,[N,H].indexOf(o)>=0?{x:s,y:l}:{x:l,y:s}}function Ro(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,l=rr.reduce(function(p,m){return p[m]=To(m,t.rects,i),p},{}),s=l[t.placement],a=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const Eo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ro};function Co(e){var t=e.state,r=e.name;t.modifiersData[r]=lr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const $o={name:"popperOffsets",enabled:!0,phase:"read",fn:Co,data:{}};function Ao(e){return e==="x"?"y":"x"}function Mo(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!1:l,a=r.boundary,c=r.rootBoundary,p=r.altBoundary,m=r.padding,w=r.tether,u=w===void 0?!0:w,x=r.tetherOffset,d=x===void 0?0:x,v=Ne(t,{boundary:a,rootBoundary:c,padding:m,altBoundary:p}),b=Z(t.placement),O=Te(t.placement),T=!O,f=wt(b),h=Ao(f),g=t.modifiersData.popperOffsets,R=t.rects.reference,P=t.rects.popper,A=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,E=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(!!g){if(i){var B,_=f==="y"?W:N,z=f==="y"?U:H,M=f==="y"?"height":"width",L=g[f],G=L+v[_],q=L-v[z],ge=u?-P[M]/2:0,ye=O===xe?R[M]:P[M],fe=O===xe?-P[M]:-R[M],de=t.elements.arrow,te=u&&de?bt(de):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ir(),ae=K[_],se=K[z],k=ke(0,R[M],te[M]),X=T?R[M]/2-ge-k-ae-E.mainAxis:ye-k-ae-E.mainAxis,be=T?-R[M]/2+ge+k+se+E.mainAxis:fe+k+se+E.mainAxis,J=t.elements.arrow&&Ie(t.elements.arrow),it=J?f==="y"?J.clientTop||0:J.clientLeft||0:0,Ue=(B=D==null?void 0:D[f])!=null?B:0,He=L+X-Ue-it,Re=L+be-Ue,Ve=ke(u?tt(G,He):G,L,u?me(q,Re):q);g[f]=Ve,S[f]=Ve-L}if(s){var pe,_e=f==="x"?W:N,Ee=f==="x"?U:H,re=g[h],oe=h==="y"?"height":"width",we=re+v[_e],ve=re-v[Ee],le=[W,N].indexOf(b)!==-1,Q=(pe=D==null?void 0:D[h])!=null?pe:0,Ce=le?we:re-R[oe]-P[oe]-Q+E.altAxis,ze=le?re+R[oe]+P[oe]-Q-E.altAxis:ve,$e=u&&le?Zr(Ce,re,ze):ke(u?Ce:we,re,u?ze:ve);g[h]=$e,S[h]=$e-re}t.modifiersData[o]=S}}const Do={name:"preventOverflow",enabled:!0,phase:"main",fn:Mo,requiresIfExists:["offset"]};function Bo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Lo(e){return e===V(e)||!I(e)?xt(e):Bo(e)}function So(e){var t=e.getBoundingClientRect(),r=Pe(t.width)/e.offsetWidth||1,o=Pe(t.height)/e.offsetHeight||1;return r!==1||o!==1}function ko(e,t,r){r===void 0&&(r=!1);var o=I(t),n=I(t)&&So(t),i=ue(t),l=Oe(e,n,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((ee(t)!=="body"||Ot(i))&&(s=Lo(t)),I(t)?(a=Oe(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Pt(i))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function jo(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&n(a)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function Wo(e){var t=jo(e);return Xr.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function No(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Fo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var Xt={placement:"bottom",modifiers:[],strategy:"absolute"};function Yt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Io(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?Xt:n;return function(s,a,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xt,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},m=[],w=!1,u={state:p,setOptions:function(b){var O=typeof b=="function"?b(p.options):b;d(),p.options=Object.assign({},i,p.options,O),p.scrollParents={reference:he(s)?je(s):s.contextElement?je(s.contextElement):[],popper:je(a)};var T=Wo(Fo([].concat(o,p.options.modifiers)));return p.orderedModifiers=T.filter(function(f){return f.enabled}),x(),u.update()},forceUpdate:function(){if(!w){var b=p.elements,O=b.reference,T=b.popper;if(!!Yt(O,T)){p.rects={reference:ko(O,Ie(T),p.options.strategy==="fixed"),popper:bt(T)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(E){return p.modifiersData[E.name]=Object.assign({},E.data)});for(var f=0;f<p.orderedModifiers.length;f++){if(p.reset===!0){p.reset=!1,f=-1;continue}var h=p.orderedModifiers[f],g=h.fn,R=h.options,P=R===void 0?{}:R,A=h.name;typeof g=="function"&&(p=g({state:p,options:P,name:A,instance:u})||p)}}}},update:No(function(){return new Promise(function(v){u.forceUpdate(),v(p)})}),destroy:function(){d(),w=!0}};if(!Yt(s,a))return u;u.setOptions(c).then(function(v){!w&&c.onFirstUpdate&&c.onFirstUpdate(v)});function x(){p.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,T=O===void 0?{}:O,f=v.effect;if(typeof f=="function"){var h=f({state:p,name:b,instance:u,options:T}),g=function(){};m.push(h||g)}})}function d(){m.forEach(function(v){return v()}),m=[]}return u}}var Uo=[lo,$o,so,Kr,Eo,xo,Do,oo,Oo],Ho=Io({defaultModifiers:Uo});function Vo(e){return Gt("MuiPopperUnstyled",e)}Kt("MuiPopperUnstyled",["root"]);const _o=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],zo=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function qo(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function ht(e){return typeof e=="function"?e():e}const Xo=()=>Jt({root:["root"]},Vo,{}),Yo={},Go=$.exports.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,component:l,direction:s,disablePortal:a,modifiers:c,open:p,ownerState:m,placement:w,popperOptions:u,popperRef:x,slotProps:d={},slots:v={},TransitionProps:b}=t,O=rt(t,_o),T=$.exports.useRef(null),f=ft(T,r),h=$.exports.useRef(null),g=ft(h,x),R=$.exports.useRef(g);Wt(()=>{R.current=g},[g]),$.exports.useImperativeHandle(x,()=>h.current,[]);const P=qo(w,s),[A,E]=$.exports.useState(P);$.exports.useEffect(()=>{h.current&&h.current.forceUpdate()}),Wt(()=>{if(!n||!p)return;const z=G=>{E(G.placement)};ht(n);let M=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:G})=>{z(G)}}];c!=null&&(M=M.concat(c)),u&&u.modifiers!=null&&(M=M.concat(u.modifiers));const L=Ho(ht(n),T.current,C({placement:P},u,{modifiers:M}));return R.current(L),()=>{L.destroy(),R.current(null)}},[n,a,c,p,u,P]);const D={placement:A};b!==null&&(D.TransitionProps=b);const S=Xo(),B=(o=l!=null?l:v.root)!=null?o:"div",_=Rr({elementType:B,externalSlotProps:d.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:f},ownerState:C({},t,m),className:S.root});return j(B,C({},_,{children:typeof i=="function"?i(D):i}))}),Ko=$.exports.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:l="ltr",disablePortal:s=!1,keepMounted:a=!1,modifiers:c,open:p,placement:m="bottom",popperOptions:w=Yo,popperRef:u,style:x,transition:d=!1}=t,v=rt(t,zo),[b,O]=$.exports.useState(!0),T=()=>{O(!1)},f=()=>{O(!0)};if(!a&&!p&&(!d||b))return null;const h=i||(o?Or(ht(o)).body:void 0);return j(Tr,{disablePortal:s,container:h,children:j(Go,C({anchorEl:o,direction:l,disablePortal:s,modifiers:c,ref:r,open:d?!b:p,placement:m,popperOptions:w,popperRef:u},v,{style:C({position:"fixed",top:0,left:0,display:!p&&a&&(!d||b)?"none":null},x),TransitionProps:d?{in:p,onEnter:T,onExited:f}:null,children:n}))})}),Jo=Ko,Qo=["components","componentsProps","slots","slotProps"],Zo=ot(Jo,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),en=$.exports.forwardRef(function(t,r){var o;const n=Er(),i=Qt({props:t,name:"MuiPopper"}),{components:l,componentsProps:s,slots:a,slotProps:c}=i,p=rt(i,Qo),m=(o=a==null?void 0:a.root)!=null?o:l==null?void 0:l.Root;return j(Zo,C({direction:n==null?void 0:n.direction,slots:{root:m},slotProps:c!=null?c:s},p,{ref:r}))}),cr=en;function tn(e){return Gt("MuiTooltip",e)}const rn=Kt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),ce=rn,on=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function nn(e){return Math.round(e*1e5)/1e5}const an=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${Zt(i.split("-")[0])}`],arrow:["arrow"]};return Jt(l,tn,t)},sn=ot(cr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>C({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${ce.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${ce.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${ce.arrow}`]:C({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${ce.arrow}`]:C({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),pn=ot("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${Zt(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>C({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:er(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${nn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${ce.popper}[data-popper-placement*="left"] &`]:C({transformOrigin:"right center"},t.isRtl?C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):C({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${ce.popper}[data-popper-placement*="right"] &`]:C({transformOrigin:"left center"},t.isRtl?C({marginRight:"14px"},t.touch&&{marginRight:"24px"}):C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${ce.popper}[data-popper-placement*="top"] &`]:C({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${ce.popper}[data-popper-placement*="bottom"] &`]:C({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),ln=ot("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:er(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Qe=!1,ut=null;function Ze(e,t){return r=>{t&&t(r),e(r)}}const cn=$.exports.forwardRef(function(t,r){var o,n,i,l,s,a,c,p,m,w,u,x,d,v,b,O,T,f,h;const g=Qt({props:t,name:"MuiTooltip"}),{arrow:R=!1,children:P,components:A={},componentsProps:E={},describeChild:D=!1,disableFocusListener:S=!1,disableHoverListener:B=!1,disableInteractive:_=!1,disableTouchListener:z=!1,enterDelay:M=100,enterNextDelay:L=0,enterTouchDelay:G=700,followCursor:q=!1,id:ge,leaveDelay:ye=0,leaveTouchDelay:fe=1500,onClose:de,onOpen:te,open:K,placement:ae="bottom",PopperComponent:se,PopperProps:k={},slotProps:X={},slots:be={},title:J,TransitionComponent:it=Ft,TransitionProps:Ue}=g,He=rt(g,on),Re=Cr(),Ve=Re.direction==="rtl",[pe,_e]=$.exports.useState(),[Ee,re]=$.exports.useState(null),oe=$.exports.useRef(!1),we=_||q,ve=$.exports.useRef(),le=$.exports.useRef(),Q=$.exports.useRef(),Ce=$.exports.useRef(),[ze,$e]=$r({controlled:K,default:!1,name:"Tooltip",state:"open"});let ne=ze;const at=Ar(ge),Ae=$.exports.useRef(),qe=$.exports.useCallback(()=>{Ae.current!==void 0&&(document.body.style.WebkitUserSelect=Ae.current,Ae.current=void 0),clearTimeout(Ce.current)},[]);$.exports.useEffect(()=>()=>{clearTimeout(ve.current),clearTimeout(le.current),clearTimeout(Q.current),qe()},[qe]);const Tt=y=>{clearTimeout(ut),Qe=!0,$e(!0),te&&!ne&&te(y)},Xe=Mr(y=>{clearTimeout(ut),ut=setTimeout(()=>{Qe=!1},800+ye),$e(!1),de&&ne&&de(y),clearTimeout(ve.current),ve.current=setTimeout(()=>{oe.current=!1},Re.transitions.duration.shortest)}),st=y=>{oe.current&&y.type!=="touchstart"||(pe&&pe.removeAttribute("title"),clearTimeout(le.current),clearTimeout(Q.current),M||Qe&&L?le.current=setTimeout(()=>{Tt(y)},Qe?L:M):Tt(y))},Rt=y=>{clearTimeout(le.current),clearTimeout(Q.current),Q.current=setTimeout(()=>{Xe(y)},ye)},{isFocusVisibleRef:Et,onBlur:ur,onFocus:fr,ref:dr}=Dr(),[,Ct]=$.exports.useState(!1),$t=y=>{ur(y),Et.current===!1&&(Ct(!1),Rt(y))},At=y=>{pe||_e(y.currentTarget),fr(y),Et.current===!0&&(Ct(!0),st(y))},Mt=y=>{oe.current=!0;const F=P.props;F.onTouchStart&&F.onTouchStart(y)},Dt=st,Bt=Rt,vr=y=>{Mt(y),clearTimeout(Q.current),clearTimeout(ve.current),qe(),Ae.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ce.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Ae.current,st(y)},G)},mr=y=>{P.props.onTouchEnd&&P.props.onTouchEnd(y),qe(),clearTimeout(Q.current),Q.current=setTimeout(()=>{Xe(y)},fe)};$.exports.useEffect(()=>{if(!ne)return;function y(F){(F.key==="Escape"||F.key==="Esc")&&Xe(F)}return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[Xe,ne]);const hr=ft(P.ref,dr,_e,r);!J&&J!==0&&(ne=!1);const Me=$.exports.useRef({x:0,y:0}),pt=$.exports.useRef(),gr=y=>{const F=P.props;F.onMouseMove&&F.onMouseMove(y),Me.current={x:y.clientX,y:y.clientY},pt.current&&pt.current.update()},De={},lt=typeof J=="string";D?(De.title=!ne&&lt&&!B?J:null,De["aria-describedby"]=ne?at:null):(De["aria-label"]=lt?J:null,De["aria-labelledby"]=ne&&!lt?at:null);const Y=C({},De,He,P.props,{className:Ye(He.className,P.props.className),onTouchStart:Mt,ref:hr},q?{onMouseMove:gr}:{}),Be={};z||(Y.onTouchStart=vr,Y.onTouchEnd=mr),B||(Y.onMouseOver=Ze(Dt,Y.onMouseOver),Y.onMouseLeave=Ze(Bt,Y.onMouseLeave),we||(Be.onMouseOver=Dt,Be.onMouseLeave=Bt)),S||(Y.onFocus=Ze(At,Y.onFocus),Y.onBlur=Ze($t,Y.onBlur),we||(Be.onFocus=At,Be.onBlur=$t));const yr=$.exports.useMemo(()=>{var y;let F=[{name:"arrow",enabled:Boolean(Ee),options:{element:Ee,padding:4}}];return(y=k.popperOptions)!=null&&y.modifiers&&(F=F.concat(k.popperOptions.modifiers)),C({},k.popperOptions,{modifiers:F})},[Ee,k]),Le=C({},g,{isRtl:Ve,arrow:R,disableInteractive:we,placement:ae,PopperComponentProp:se,touch:oe.current}),ct=an(Le),Lt=(o=(n=be.popper)!=null?n:A.Popper)!=null?o:sn,St=(i=(l=(s=be.transition)!=null?s:A.Transition)!=null?l:it)!=null?i:Ft,kt=(a=(c=be.tooltip)!=null?c:A.Tooltip)!=null?a:pn,jt=(p=(m=be.arrow)!=null?m:A.Arrow)!=null?p:ln,br=Ge(Lt,C({},k,(w=X.popper)!=null?w:E.popper,{className:Ye(ct.popper,k==null?void 0:k.className,(u=(x=X.popper)!=null?x:E.popper)==null?void 0:u.className)}),Le),wr=Ge(St,C({},Ue,(d=X.transition)!=null?d:E.transition),Le),xr=Ge(kt,C({},(v=X.tooltip)!=null?v:E.tooltip,{className:Ye(ct.tooltip,(b=(O=X.tooltip)!=null?O:E.tooltip)==null?void 0:b.className)}),Le),Pr=Ge(jt,C({},(T=X.arrow)!=null?T:E.arrow,{className:Ye(ct.arrow,(f=(h=X.arrow)!=null?h:E.arrow)==null?void 0:f.className)}),Le);return dt($.exports.Fragment,{children:[$.exports.cloneElement(P,Y),j(Lt,C({as:se!=null?se:cr,placement:ae,anchorEl:q?{getBoundingClientRect:()=>({top:Me.current.y,left:Me.current.x,right:Me.current.x,bottom:Me.current.y,width:0,height:0})}:pe,popperRef:pt,open:pe?ne:!1,id:at,transition:!0},Be,br,{popperOptions:yr,children:({TransitionProps:y})=>j(St,C({timeout:Re.transitions.duration.shorter},y,wr,{"data-foo":"bar",children:dt(kt,C({},xr,{children:[J,R?j(jt,C({},Pr,{ref:re})):null]}))}))}))]})}),vn=cn;const un=({isOpen:e,handlerClose:t,children:r})=>j(Br,{container:"modal",children:j(Lr,{in:e,timeout:400,children:j(Ke,{className:"modal",children:dt(Ke,{className:"modal-content",children:[j(Ke,{className:"modal-content__close",children:j(Sr,{"aria-label":"close",onClick:t,children:j(kr,{fontSize:"small"})})}),j(Ke,{children:r})]})})})});un.propTypes={isOpen:Nt.exports.bool,handlerClose:Nt.exports.func};export{un as M,vn as T};