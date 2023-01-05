import{g as Xt,a as Yt,r as $,_ as tt,D as xr,j as ve,E as Pr,b as C,G as ut,H as kt,J as Or,d as Gt,s as rt,K as Tr,u as Kt,h as Jt,l as Qt,M as Rr,f as Er,N as Cr,O as $r,Q as Ar,c as Ye,S as Ge,e as jt}from"./index.94a47da9.js";import{G as Wt}from"./requestHandler.service.0d012add.js";var j="top",I="bottom",U="right",W="left",mt="auto",Fe=[j,I,U,W],xe="start",We="end",Mr="clippingParents",Zt="viewport",Se="popper",Dr="reference",Nt=Fe.reduce(function(e,t){return e.concat([t+"-"+xe,t+"-"+We])},[]),er=[].concat(Fe,[mt]).reduce(function(e,t){return e.concat([t,t+"-"+xe,t+"-"+We])},[]),Br="beforeRead",Lr="read",Sr="afterRead",kr="beforeMain",jr="main",Wr="afterMain",Nr="beforeWrite",Fr="write",Ir="afterWrite",Ur=[Br,Lr,Sr,kr,jr,Wr,Nr,Fr,Ir];function Z(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=H(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=H(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ht(e){if(typeof ShadowRoot>"u")return!1;var t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Hr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!F(i)||!Z(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(l){var s=n[l];s===!1?i.removeAttribute(l):i.setAttribute(l,s===!0?"":s)}))})}function Vr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=l.reduce(function(a,c){return a[c]="",a},{});!F(n)||!Z(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const _r={name:"applyStyles",enabled:!0,phase:"write",fn:Hr,effect:Vr,requires:["computeStyles"]};function Q(e){return e.split("-")[0]}var me=Math.max,et=Math.min,Pe=Math.round;function ft(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function tr(){return!/^((?!chrome|android).)*safari/i.test(ft())}function Oe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&F(e)&&(n=e.offsetWidth>0&&Pe(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Pe(o.height)/e.offsetHeight||1);var l=he(e)?H(e):window,s=l.visualViewport,a=!tr()&&r,c=(o.left+(a&&s?s.offsetLeft:0))/n,p=(o.top+(a&&s?s.offsetTop:0))/i,m=o.width/n,w=o.height/i;return{width:m,height:w,top:p,right:c+m,bottom:p+w,left:c,x:c,y:p}}function gt(e){var t=Oe(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function rr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&ht(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(e){return H(e).getComputedStyle(e)}function zr(e){return["table","td","th"].indexOf(Z(e))>=0}function ce(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function ot(e){return Z(e)==="html"?e:e.assignedSlot||e.parentNode||(ht(e)?e.host:null)||ce(e)}function Ft(e){return!F(e)||ne(e).position==="fixed"?null:e.offsetParent}function qr(e){var t=/firefox/i.test(ft()),r=/Trident/i.test(ft());if(r&&F(e)){var o=ne(e);if(o.position==="fixed")return null}var n=ot(e);for(ht(n)&&(n=n.host);F(n)&&["html","body"].indexOf(Z(n))<0;){var i=ne(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function Ie(e){for(var t=H(e),r=Ft(e);r&&zr(r)&&ne(r).position==="static";)r=Ft(r);return r&&(Z(r)==="html"||Z(r)==="body"&&ne(r).position==="static")?t:r||qr(e)||t}function yt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ke(e,t,r){return me(e,et(t,r))}function Xr(e,t,r){var o=ke(e,t,r);return o>r?r:o}function or(){return{top:0,right:0,bottom:0,left:0}}function nr(e){return Object.assign({},or(),e)}function ir(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Yr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,nr(typeof t!="number"?t:ir(t,Fe))};function Gr(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,s=Q(r.placement),a=yt(s),c=[W,U].indexOf(s)>=0,p=c?"height":"width";if(!(!i||!l)){var m=Yr(n.padding,r),w=gt(i),u=a==="y"?j:W,x=a==="y"?I:U,d=r.rects.reference[p]+r.rects.reference[a]-l[a]-r.rects.popper[p],v=l[a]-r.rects.reference[a],b=Ie(i),O=b?a==="y"?b.clientHeight||0:b.clientWidth||0:0,T=d/2-v/2,f=m[u],h=O-w[p]-m[x],g=O/2-w[p]/2+T,R=ke(f,g,h),P=a;r.modifiersData[o]=(t={},t[P]=R,t.centerOffset=R-g,t)}}function Kr(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!rr(t.elements.popper,n)||(t.elements.arrow=n))}const Jr={name:"arrow",enabled:!0,phase:"main",fn:Gr,effect:Kr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Te(e){return e.split("-")[1]}var Qr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Zr(e){var t=e.x,r=e.y,o=window,n=o.devicePixelRatio||1;return{x:Pe(t*n)/n||0,y:Pe(r*n)/n||0}}function It(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,s=e.position,a=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,m=e.isFixed,w=l.x,u=w===void 0?0:w,x=l.y,d=x===void 0?0:x,v=typeof p=="function"?p({x:u,y:d}):{x:u,y:d};u=v.x,d=v.y;var b=l.hasOwnProperty("x"),O=l.hasOwnProperty("y"),T=W,f=j,h=window;if(c){var g=Ie(r),R="clientHeight",P="clientWidth";if(g===H(r)&&(g=ce(r),ne(g).position!=="static"&&s==="absolute"&&(R="scrollHeight",P="scrollWidth")),g=g,n===j||(n===W||n===U)&&i===We){f=I;var A=m&&g===h&&h.visualViewport?h.visualViewport.height:g[R];d-=A-o.height,d*=a?1:-1}if(n===W||(n===j||n===I)&&i===We){T=U;var E=m&&g===h&&h.visualViewport?h.visualViewport.width:g[P];u-=E-o.width,u*=a?1:-1}}var D=Object.assign({position:s},c&&Qr),S=p===!0?Zr({x:u,y:d}):{x:u,y:d};if(u=S.x,d=S.y,a){var B;return Object.assign({},D,(B={},B[f]=O?"0":"",B[T]=b?"0":"",B.transform=(h.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",B))}return Object.assign({},D,(t={},t[f]=O?d+"px":"",t[T]=b?u+"px":"",t.transform="",t))}function eo(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,l=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,c={placement:Q(t.placement),variation:Te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,It(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,It(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const to={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:eo,data:{}};var Ke={passive:!0};function ro(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,l=o.resize,s=l===void 0?!0:l,a=H(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,Ke)}),s&&a.addEventListener("resize",r.update,Ke),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Ke)}),s&&a.removeEventListener("resize",r.update,Ke)}}const oo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ro,data:{}};var no={left:"right",right:"left",bottom:"top",top:"bottom"};function Ze(e){return e.replace(/left|right|bottom|top/g,function(t){return no[t]})}var io={start:"end",end:"start"};function Ut(e){return e.replace(/start|end/g,function(t){return io[t]})}function bt(e){var t=H(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function wt(e){return Oe(ce(e)).left+bt(e).scrollLeft}function ao(e,t){var r=H(e),o=ce(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,s=0,a=0;if(n){i=n.width,l=n.height;var c=tr();(c||!c&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:l,x:s+wt(e),y:a}}function so(e){var t,r=ce(e),o=bt(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=me(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=me(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+wt(e),a=-o.scrollTop;return ne(n||r).direction==="rtl"&&(s+=me(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:s,y:a}}function xt(e){var t=ne(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function ar(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:F(e)&&xt(e)?e:ar(ot(e))}function je(e,t){var r;t===void 0&&(t=[]);var o=ar(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=H(o),l=n?[i].concat(i.visualViewport||[],xt(o)?o:[]):o,s=t.concat(l);return n?s:s.concat(je(ot(l)))}function dt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function po(e,t){var r=Oe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ht(e,t,r){return t===Zt?dt(ao(e,r)):he(t)?po(t,r):dt(so(ce(e)))}function lo(e){var t=je(ot(e)),r=["absolute","fixed"].indexOf(ne(e).position)>=0,o=r&&F(e)?Ie(e):e;return he(o)?t.filter(function(n){return he(n)&&rr(n,o)&&Z(n)!=="body"}):[]}function co(e,t,r,o){var n=t==="clippingParents"?lo(e):[].concat(t),i=[].concat(n,[r]),l=i[0],s=i.reduce(function(a,c){var p=Ht(e,c,o);return a.top=me(p.top,a.top),a.right=et(p.right,a.right),a.bottom=et(p.bottom,a.bottom),a.left=me(p.left,a.left),a},Ht(e,l,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function sr(e){var t=e.reference,r=e.element,o=e.placement,n=o?Q(o):null,i=o?Te(o):null,l=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(n){case j:a={x:l,y:t.y-r.height};break;case I:a={x:l,y:t.y+t.height};break;case U:a={x:t.x+t.width,y:s};break;case W:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var c=n?yt(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case xe:a[c]=a[c]-(t[p]/2-r[p]/2);break;case We:a[c]=a[c]+(t[p]/2-r[p]/2);break}}return a}function Ne(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,l=i===void 0?e.strategy:i,s=r.boundary,a=s===void 0?Mr:s,c=r.rootBoundary,p=c===void 0?Zt:c,m=r.elementContext,w=m===void 0?Se:m,u=r.altBoundary,x=u===void 0?!1:u,d=r.padding,v=d===void 0?0:d,b=nr(typeof v!="number"?v:ir(v,Fe)),O=w===Se?Dr:Se,T=e.rects.popper,f=e.elements[x?O:w],h=co(he(f)?f:f.contextElement||ce(e.elements.popper),a,p,l),g=Oe(e.elements.reference),R=sr({reference:g,element:T,strategy:"absolute",placement:n}),P=dt(Object.assign({},T,R)),A=w===Se?P:g,E={top:h.top-A.top+b.top,bottom:A.bottom-h.bottom+b.bottom,left:h.left-A.left+b.left,right:A.right-h.right+b.right},D=e.modifiersData.offset;if(w===Se&&D){var S=D[n];Object.keys(E).forEach(function(B){var V=[U,I].indexOf(B)>=0?1:-1,_=[j,I].indexOf(B)>=0?"y":"x";E[B]+=S[_]*V})}return E}function uo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,l=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,c=a===void 0?er:a,p=Te(o),m=p?s?Nt:Nt.filter(function(x){return Te(x)===p}):Fe,w=m.filter(function(x){return c.indexOf(x)>=0});w.length===0&&(w=m);var u=w.reduce(function(x,d){return x[d]=Ne(e,{placement:d,boundary:n,rootBoundary:i,padding:l})[Q(d)],x},{});return Object.keys(u).sort(function(x,d){return u[x]-u[d]})}function fo(e){if(Q(e)===mt)return[];var t=Ze(e);return[Ut(e),t,Ut(t)]}function vo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!0:l,a=r.fallbackPlacements,c=r.padding,p=r.boundary,m=r.rootBoundary,w=r.altBoundary,u=r.flipVariations,x=u===void 0?!0:u,d=r.allowedAutoPlacements,v=t.options.placement,b=Q(v),O=b===v,T=a||(O||!x?[Ze(v)]:fo(v)),f=[v].concat(T).reduce(function(ee,G){return ee.concat(Q(G)===mt?uo(t,{placement:G,boundary:p,rootBoundary:m,padding:c,flipVariations:x,allowedAutoPlacements:d}):G)},[]),h=t.rects.reference,g=t.rects.popper,R=new Map,P=!0,A=f[0],E=0;E<f.length;E++){var D=f[E],S=Q(D),B=Te(D)===xe,V=[j,I].indexOf(S)>=0,_=V?"width":"height",M=Ne(t,{placement:D,boundary:p,rootBoundary:m,altBoundary:w,padding:c}),L=V?B?U:W:B?I:j;h[_]>g[_]&&(L=Ze(L));var Y=Ze(L),z=[];if(i&&z.push(M[S]<=0),s&&z.push(M[L]<=0,M[Y]<=0),z.every(function(ee){return ee})){A=D,P=!1;break}R.set(D,z)}if(P)for(var ge=x?3:1,ye=function(G){var ie=f.find(function(ae){var k=R.get(ae);if(k)return k.slice(0,G).every(function(q){return q})});if(ie)return A=ie,"break"},ue=ge;ue>0;ue--){var fe=ye(ue);if(fe==="break")break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}}const mo={name:"flip",enabled:!0,phase:"main",fn:vo,requiresIfExists:["offset"],data:{_skip:!1}};function Vt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function _t(e){return[j,U,I,W].some(function(t){return e[t]>=0})}function ho(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=Ne(t,{elementContext:"reference"}),s=Ne(t,{altBoundary:!0}),a=Vt(l,o),c=Vt(s,n,i),p=_t(a),m=_t(c);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":m})}const go={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ho};function yo(e,t,r){var o=Q(e),n=[W,j].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],s=i[1];return l=l||0,s=(s||0)*n,[W,U].indexOf(o)>=0?{x:s,y:l}:{x:l,y:s}}function bo(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,l=er.reduce(function(p,m){return p[m]=yo(m,t.rects,i),p},{}),s=l[t.placement],a=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const wo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:bo};function xo(e){var t=e.state,r=e.name;t.modifiersData[r]=sr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Po={name:"popperOffsets",enabled:!0,phase:"read",fn:xo,data:{}};function Oo(e){return e==="x"?"y":"x"}function To(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,s=l===void 0?!1:l,a=r.boundary,c=r.rootBoundary,p=r.altBoundary,m=r.padding,w=r.tether,u=w===void 0?!0:w,x=r.tetherOffset,d=x===void 0?0:x,v=Ne(t,{boundary:a,rootBoundary:c,padding:m,altBoundary:p}),b=Q(t.placement),O=Te(t.placement),T=!O,f=yt(b),h=Oo(f),g=t.modifiersData.popperOffsets,R=t.rects.reference,P=t.rects.popper,A=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,E=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,S={x:0,y:0};if(!!g){if(i){var B,V=f==="y"?j:W,_=f==="y"?I:U,M=f==="y"?"height":"width",L=g[f],Y=L+v[V],z=L-v[_],ge=u?-P[M]/2:0,ye=O===xe?R[M]:P[M],ue=O===xe?-P[M]:-R[M],fe=t.elements.arrow,ee=u&&fe?gt(fe):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:or(),ie=G[V],ae=G[_],k=ke(0,R[M],ee[M]),q=T?R[M]/2-ge-k-ie-E.mainAxis:ye-k-ie-E.mainAxis,be=T?-R[M]/2+ge+k+ae+E.mainAxis:ue+k+ae+E.mainAxis,K=t.elements.arrow&&Ie(t.elements.arrow),nt=K?f==="y"?K.clientTop||0:K.clientLeft||0:0,Ue=(B=D==null?void 0:D[f])!=null?B:0,He=L+q-Ue-nt,Re=L+be-Ue,Ve=ke(u?et(Y,He):Y,L,u?me(z,Re):z);g[f]=Ve,S[f]=Ve-L}if(s){var se,_e=f==="x"?j:W,Ee=f==="x"?I:U,te=g[h],re=h==="y"?"height":"width",we=te+v[_e],de=te-v[Ee],pe=[j,W].indexOf(b)!==-1,J=(se=D==null?void 0:D[h])!=null?se:0,Ce=pe?we:te-R[re]-P[re]-J+E.altAxis,ze=pe?te+R[re]+P[re]-J-E.altAxis:de,$e=u&&pe?Xr(Ce,te,ze):ke(u?Ce:we,te,u?ze:de);g[h]=$e,S[h]=$e-te}t.modifiersData[o]=S}}const Ro={name:"preventOverflow",enabled:!0,phase:"main",fn:To,requiresIfExists:["offset"]};function Eo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Co(e){return e===H(e)||!F(e)?bt(e):Eo(e)}function $o(e){var t=e.getBoundingClientRect(),r=Pe(t.width)/e.offsetWidth||1,o=Pe(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Ao(e,t,r){r===void 0&&(r=!1);var o=F(t),n=F(t)&&$o(t),i=ce(t),l=Oe(e,n,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((Z(t)!=="body"||xt(i))&&(s=Co(t)),F(t)?(a=Oe(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=wt(i))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Mo(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&n(a)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function Do(e){var t=Mo(e);return Ur.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Bo(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Lo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var zt={placement:"bottom",modifiers:[],strategy:"absolute"};function qt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function So(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?zt:n;return function(s,a,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},zt,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},m=[],w=!1,u={state:p,setOptions:function(b){var O=typeof b=="function"?b(p.options):b;d(),p.options=Object.assign({},i,p.options,O),p.scrollParents={reference:he(s)?je(s):s.contextElement?je(s.contextElement):[],popper:je(a)};var T=Do(Lo([].concat(o,p.options.modifiers)));return p.orderedModifiers=T.filter(function(f){return f.enabled}),x(),u.update()},forceUpdate:function(){if(!w){var b=p.elements,O=b.reference,T=b.popper;if(!!qt(O,T)){p.rects={reference:Ao(O,Ie(T),p.options.strategy==="fixed"),popper:gt(T)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(E){return p.modifiersData[E.name]=Object.assign({},E.data)});for(var f=0;f<p.orderedModifiers.length;f++){if(p.reset===!0){p.reset=!1,f=-1;continue}var h=p.orderedModifiers[f],g=h.fn,R=h.options,P=R===void 0?{}:R,A=h.name;typeof g=="function"&&(p=g({state:p,options:P,name:A,instance:u})||p)}}}},update:Bo(function(){return new Promise(function(v){u.forceUpdate(),v(p)})}),destroy:function(){d(),w=!0}};if(!qt(s,a))return u;u.setOptions(c).then(function(v){!w&&c.onFirstUpdate&&c.onFirstUpdate(v)});function x(){p.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,T=O===void 0?{}:O,f=v.effect;if(typeof f=="function"){var h=f({state:p,name:b,instance:u,options:T}),g=function(){};m.push(h||g)}})}function d(){m.forEach(function(v){return v()}),m=[]}return u}}var ko=[oo,Po,to,_r,wo,mo,Ro,Jr,go],jo=So({defaultModifiers:ko});function Wo(e){return Xt("MuiPopperUnstyled",e)}Yt("MuiPopperUnstyled",["root"]);const No=["anchorEl","children","component","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","slotProps","slots","TransitionProps"],Fo=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Io(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function vt(e){return typeof e=="function"?e():e}const Uo=()=>Gt({root:["root"]},Wo,{}),Ho={},Vo=$.exports.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,component:l,direction:s,disablePortal:a,modifiers:c,open:p,ownerState:m,placement:w,popperOptions:u,popperRef:x,slotProps:d={},slots:v={},TransitionProps:b}=t,O=tt(t,No),T=$.exports.useRef(null),f=ut(T,r),h=$.exports.useRef(null),g=ut(h,x),R=$.exports.useRef(g);kt(()=>{R.current=g},[g]),$.exports.useImperativeHandle(x,()=>h.current,[]);const P=Io(w,s),[A,E]=$.exports.useState(P);$.exports.useEffect(()=>{h.current&&h.current.forceUpdate()}),kt(()=>{if(!n||!p)return;const _=Y=>{E(Y.placement)};vt(n);let M=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:Y})=>{_(Y)}}];c!=null&&(M=M.concat(c)),u&&u.modifiers!=null&&(M=M.concat(u.modifiers));const L=jo(vt(n),T.current,C({placement:P},u,{modifiers:M}));return R.current(L),()=>{L.destroy(),R.current(null)}},[n,a,c,p,u,P]);const D={placement:A};b!==null&&(D.TransitionProps=b);const S=Uo(),B=(o=l!=null?l:v.root)!=null?o:"div",V=Or({elementType:B,externalSlotProps:d.root,externalForwardedProps:O,additionalProps:{role:"tooltip",ref:f},ownerState:C({},t,m),className:S.root});return ve(B,C({},V,{children:typeof i=="function"?i(D):i}))}),_o=$.exports.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:l="ltr",disablePortal:s=!1,keepMounted:a=!1,modifiers:c,open:p,placement:m="bottom",popperOptions:w=Ho,popperRef:u,style:x,transition:d=!1}=t,v=tt(t,Fo),[b,O]=$.exports.useState(!0),T=()=>{O(!1)},f=()=>{O(!0)};if(!a&&!p&&(!d||b))return null;const h=i||(o?xr(vt(o)).body:void 0);return ve(Pr,{disablePortal:s,container:h,children:ve(Vo,C({anchorEl:o,direction:l,disablePortal:s,modifiers:c,ref:r,open:d?!b:p,placement:m,popperOptions:w,popperRef:u},v,{style:C({position:"fixed",top:0,left:0,display:!p&&a&&(!d||b)?"none":null},x),TransitionProps:d?{in:p,onEnter:T,onExited:f}:null,children:n}))})}),zo=_o,qo=["components","componentsProps","slots","slotProps"],Xo=rt(zo,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Yo=$.exports.forwardRef(function(t,r){var o;const n=Tr(),i=Kt({props:t,name:"MuiPopper"}),{components:l,componentsProps:s,slots:a,slotProps:c}=i,p=tt(i,qo),m=(o=a==null?void 0:a.root)!=null?o:l==null?void 0:l.Root;return ve(Xo,C({direction:n==null?void 0:n.direction,slots:{root:m},slotProps:c!=null?c:s},p,{ref:r}))}),pr=Yo;function Go(e){return Xt("MuiTooltip",e)}const Ko=Yt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),le=Ko,Jo=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Qo(e){return Math.round(e*1e5)/1e5}const Zo=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${Jt(i.split("-")[0])}`],arrow:["arrow"]};return Gt(l,Go,t)},en=rt(pr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>C({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${le.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${le.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${le.arrow}`]:C({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${le.arrow}`]:C({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),tn=rt("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${Jt(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>C({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:Qt(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Qo(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${le.popper}[data-popper-placement*="left"] &`]:C({transformOrigin:"right center"},t.isRtl?C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):C({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${le.popper}[data-popper-placement*="right"] &`]:C({transformOrigin:"left center"},t.isRtl?C({marginRight:"14px"},t.touch&&{marginRight:"24px"}):C({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${le.popper}[data-popper-placement*="top"] &`]:C({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${le.popper}[data-popper-placement*="bottom"] &`]:C({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),rn=rt("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:Qt(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Je=!1,ct=null;function Qe(e,t){return r=>{t&&t(r),e(r)}}const on=$.exports.forwardRef(function(t,r){var o,n,i,l,s,a,c,p,m,w,u,x,d,v,b,O,T,f,h;const g=Kt({props:t,name:"MuiTooltip"}),{arrow:R=!1,children:P,components:A={},componentsProps:E={},describeChild:D=!1,disableFocusListener:S=!1,disableHoverListener:B=!1,disableInteractive:V=!1,disableTouchListener:_=!1,enterDelay:M=100,enterNextDelay:L=0,enterTouchDelay:Y=700,followCursor:z=!1,id:ge,leaveDelay:ye=0,leaveTouchDelay:ue=1500,onClose:fe,onOpen:ee,open:G,placement:ie="bottom",PopperComponent:ae,PopperProps:k={},slotProps:q={},slots:be={},title:K,TransitionComponent:nt=Wt,TransitionProps:Ue}=g,He=tt(g,Jo),Re=Rr(),Ve=Re.direction==="rtl",[se,_e]=$.exports.useState(),[Ee,te]=$.exports.useState(null),re=$.exports.useRef(!1),we=V||z,de=$.exports.useRef(),pe=$.exports.useRef(),J=$.exports.useRef(),Ce=$.exports.useRef(),[ze,$e]=Er({controlled:G,default:!1,name:"Tooltip",state:"open"});let oe=ze;const it=Cr(ge),Ae=$.exports.useRef(),qe=$.exports.useCallback(()=>{Ae.current!==void 0&&(document.body.style.WebkitUserSelect=Ae.current,Ae.current=void 0),clearTimeout(Ce.current)},[]);$.exports.useEffect(()=>()=>{clearTimeout(de.current),clearTimeout(pe.current),clearTimeout(J.current),qe()},[qe]);const Pt=y=>{clearTimeout(ct),Je=!0,$e(!0),ee&&!oe&&ee(y)},Xe=$r(y=>{clearTimeout(ct),ct=setTimeout(()=>{Je=!1},800+ye),$e(!1),fe&&oe&&fe(y),clearTimeout(de.current),de.current=setTimeout(()=>{re.current=!1},Re.transitions.duration.shortest)}),at=y=>{re.current&&y.type!=="touchstart"||(se&&se.removeAttribute("title"),clearTimeout(pe.current),clearTimeout(J.current),M||Je&&L?pe.current=setTimeout(()=>{Pt(y)},Je?L:M):Pt(y))},Ot=y=>{clearTimeout(pe.current),clearTimeout(J.current),J.current=setTimeout(()=>{Xe(y)},ye)},{isFocusVisibleRef:Tt,onBlur:lr,onFocus:cr,ref:ur}=Ar(),[,Rt]=$.exports.useState(!1),Et=y=>{lr(y),Tt.current===!1&&(Rt(!1),Ot(y))},Ct=y=>{se||_e(y.currentTarget),cr(y),Tt.current===!0&&(Rt(!0),at(y))},$t=y=>{re.current=!0;const N=P.props;N.onTouchStart&&N.onTouchStart(y)},At=at,Mt=Ot,fr=y=>{$t(y),clearTimeout(J.current),clearTimeout(de.current),qe(),Ae.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ce.current=setTimeout(()=>{document.body.style.WebkitUserSelect=Ae.current,at(y)},Y)},dr=y=>{P.props.onTouchEnd&&P.props.onTouchEnd(y),qe(),clearTimeout(J.current),J.current=setTimeout(()=>{Xe(y)},ue)};$.exports.useEffect(()=>{if(!oe)return;function y(N){(N.key==="Escape"||N.key==="Esc")&&Xe(N)}return document.addEventListener("keydown",y),()=>{document.removeEventListener("keydown",y)}},[Xe,oe]);const vr=ut(P.ref,ur,_e,r);!K&&K!==0&&(oe=!1);const Me=$.exports.useRef({x:0,y:0}),st=$.exports.useRef(),mr=y=>{const N=P.props;N.onMouseMove&&N.onMouseMove(y),Me.current={x:y.clientX,y:y.clientY},st.current&&st.current.update()},De={},pt=typeof K=="string";D?(De.title=!oe&&pt&&!B?K:null,De["aria-describedby"]=oe?it:null):(De["aria-label"]=pt?K:null,De["aria-labelledby"]=oe&&!pt?it:null);const X=C({},De,He,P.props,{className:Ye(He.className,P.props.className),onTouchStart:$t,ref:vr},z?{onMouseMove:mr}:{}),Be={};_||(X.onTouchStart=fr,X.onTouchEnd=dr),B||(X.onMouseOver=Qe(At,X.onMouseOver),X.onMouseLeave=Qe(Mt,X.onMouseLeave),we||(Be.onMouseOver=At,Be.onMouseLeave=Mt)),S||(X.onFocus=Qe(Ct,X.onFocus),X.onBlur=Qe(Et,X.onBlur),we||(Be.onFocus=Ct,Be.onBlur=Et));const hr=$.exports.useMemo(()=>{var y;let N=[{name:"arrow",enabled:Boolean(Ee),options:{element:Ee,padding:4}}];return(y=k.popperOptions)!=null&&y.modifiers&&(N=N.concat(k.popperOptions.modifiers)),C({},k.popperOptions,{modifiers:N})},[Ee,k]),Le=C({},g,{isRtl:Ve,arrow:R,disableInteractive:we,placement:ie,PopperComponentProp:ae,touch:re.current}),lt=Zo(Le),Dt=(o=(n=be.popper)!=null?n:A.Popper)!=null?o:en,Bt=(i=(l=(s=be.transition)!=null?s:A.Transition)!=null?l:nt)!=null?i:Wt,Lt=(a=(c=be.tooltip)!=null?c:A.Tooltip)!=null?a:tn,St=(p=(m=be.arrow)!=null?m:A.Arrow)!=null?p:rn,gr=Ge(Dt,C({},k,(w=q.popper)!=null?w:E.popper,{className:Ye(lt.popper,k==null?void 0:k.className,(u=(x=q.popper)!=null?x:E.popper)==null?void 0:u.className)}),Le),yr=Ge(Bt,C({},Ue,(d=q.transition)!=null?d:E.transition),Le),br=Ge(Lt,C({},(v=q.tooltip)!=null?v:E.tooltip,{className:Ye(lt.tooltip,(b=(O=q.tooltip)!=null?O:E.tooltip)==null?void 0:b.className)}),Le),wr=Ge(St,C({},(T=q.arrow)!=null?T:E.arrow,{className:Ye(lt.arrow,(f=(h=q.arrow)!=null?h:E.arrow)==null?void 0:f.className)}),Le);return jt($.exports.Fragment,{children:[$.exports.cloneElement(P,X),ve(Dt,C({as:ae!=null?ae:pr,placement:ie,anchorEl:z?{getBoundingClientRect:()=>({top:Me.current.y,left:Me.current.x,right:Me.current.x,bottom:Me.current.y,width:0,height:0})}:se,popperRef:st,open:se?oe:!1,id:it,transition:!0},Be,gr,{popperOptions:hr,children:({TransitionProps:y})=>ve(Bt,C({timeout:Re.transitions.duration.shorter},y,yr,{"data-foo":"bar",children:jt(Lt,C({},br,{children:[K,R?ve(St,C({},wr,{ref:te})):null]}))}))}))]})}),sn=on;export{sn as T};
