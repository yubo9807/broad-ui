var Ve=Object.defineProperty;var Be=(e,t,n)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var d=(e,t,n)=>(Be(e,typeof t!="symbol"?t+"":t,n),n);function ye(){return Number((Math.random()+"").slice(2)).toString(32)}function $(...e){console.warn(...e)}function m(e){return e.length}function fe(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function Ue(e){return e.toString().slice(0,5)==="class"}function C(e){return["object","array"].includes(fe(e))}function Ke(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ae(e,t){if(C(e)&&C(t)){const n=Object.keys(e),r=Object.keys(t);if(m(n)!==m(r))return!1;for(const o of n)if(!r.includes(o)||!ae(e[o],t[o]))return!1;return!0}else return e===t}function le(){return typeof window=="object"}function S(e){return fe(e)==="object"}function Z(e){return Array.isArray(e)}function O(e){return typeof e=="string"}function h(e){return typeof e=="function"}function q(e){Promise.resolve().then(e)}function w(e,t={}){const n=new WeakMap,r=["null","regexp","date","weakset","weakmap"],o=Object.assign({function(s){const c=function(...u){return s.apply(this,u)};return c.prototype=i(s.prototype),c},set(s){const c=new Set;for(const u of s)c.add(i(u));return c},map(s){const c=new Map;for(const[u,f]of s.entries())c.set(u,i(f));return c}},t);function i(s){if(s instanceof HTMLElement)return s.cloneNode(!0);const c=fe(s);if(!["object","function"].includes(typeof s)||r.includes(c))return s;if(n.has(s))return n.get(s);if(o[c])return o[c](s);const u=Z(s)?[]:{};Object.setPrototypeOf(u,Object.getPrototypeOf(s)),n.set(s,u);for(const f in s)s.hasOwnProperty(f)&&(u[f]=i(s[f]));return u}return i(e)}function V(e,t){return Object.assign({},e,t)}function p(e,t,n){let r=0;for(;r<e.length;){if(e.hasOwnProperty(r)){const o=e[r];t.apply(n,[o,r,n])}r++}}let T=null;const F=new WeakMap;function v(e){T=e,e(),T=null}function ze(e){const t=F.get(e)||[],n=t.some(r=>T===r);T&&!n&&(t.push(T),F.set(e,t))}function ge(e){const t=F.get(e);t&&p(t,(n,r)=>{n()===!0&&(t.splice(r,1),F.set(e,t))})}function wt(...e){function t(n){const r=ee(n);for(const o in r){const i=r[o];C(i)&&t(i)}F.delete(r)}p(e,t)}const He=new WeakMap,ne=new WeakMap,B={RAW:Symbol("__v_raw"),IS_READONLY:Symbol("__v_isReadonly")};function D(e){if(!C(e)||Object.isFrozen(e))return $(`lue cannot be made reactive: ${e}`),e;if(He.get(e))return e;let t=null;return new Proxy(e,{get(n,r,o){if(r===B.RAW)return n;const i=Reflect.get(n,r,o);return ze(n),C(i)?D(i):i},set(n,r,o,i){if(n[B.IS_READONLY]||Reflect.get(n,r,i)===o)return!0;const c=Reflect.set(n,r,o,i),u=ne.get(n)||new Set;u.add(r);const f=u.size;return ne.set(n,u),q(()=>{c&&f===1&&ge(n),ne.delete(n)}),c},deleteProperty(n,r){const o=Reflect.get(n,r),i=Ke(n,r),s=Reflect.deleteProperty(n,r);return t=r,q(()=>{i&&s&&o!==void 0&&r===t&&(ge(n),t=null)}),s}})}function Ye(e){return S(e)&&!!e[B.RAW]}function ee(e){return Ye(e)?e[B.RAW]:e}function Ge(e){const t={value:e},n=D(t);function r(){return n.value}function o(i){n.value=i}return[r,o,t]}const Me="__v_isRef";var yt;class Je{constructor(t){d(this,yt,!0);d(this,"_rawValue");d(this,"_value");d(this,"getSignal");d(this,"setSignal");const[n,r,o]=Ge(t);this._rawValue=o,this.getSignal=n,this.setSignal=r,this._value=n()}get value(){return this.getSignal()}set value(t){this.setSignal(t)}}yt=Me;function Qe(e=void 0){return new Je(e)}class Xe{constructor(t){d(this,"fn");this.fn=t}}var gt;class be{constructor(t,n){d(this,"__v_isReadonly",!0);d(this,gt,!0);d(this,"_cacheable",!0);d(this,"_dirty",!0);d(this,"computed");d(this,"_setter");this.computed=new Xe(t),this._setter=n}get value(){return this.computed.fn()}set value(t){this._setter?this._setter(t):$("Write operation failed: computed value is readonly")}}gt=Me;function St(e){return h(e)?new be(e):new be(e.get,e.set)}function Ze(e,t,n={}){let r=!1;if(r)return;const o=e();n.immediate&&t(o,void 0);let i=w(o),s=!0;return v(()=>{if(r)return!0;const c=e();if(C(c)){n.deep&&!ae(c,i)&&(t(c,i),i=w(c));return}if(s){s=!1;return}c!==i&&(t(c,i),i=c)}),()=>{r=!0}}function P(e){return["string","number"].includes(typeof e)&&e!==""}function Oe(e){return!/^on/.test(e)}function Pe(e){return S(e)&&(O(e.tag)||N(e.tag))}function b(e){return h(e)&&!N(e)}function Ne(e){return Ue(e)&&e.prototype&&e.prototype.render}function Te(e){return[void 0,null,"",!0,!1].includes(e)}function _e(...e){return e.filter(n=>P(n)).join(" ").trim().replace(/\s+/," ")}function te(e){return document.createTextNode(e)}function x(e,t){e.appendChild(t)}function y(e,t,...n){const r={tag:e,attrs:t||{},children:n};return b(r.tag)&&m(r.children)===0&&r.attrs.children&&(r.children=r.attrs.children),r}function j({children:e}){return e}const U=Symbol("Fragment");j.prototype[U]=U;function N(e){return h(e)&&e.prototype&&e.prototype[U]===U}const K=new WeakMap;function Fe(e,t=[]){return p(e,n=>{S(n)&&(b(n.tag)?(t.push({comp:n.tag,props:V(n.attrs,{children:e})}),p(n.children,r=>{b(r)&&t.push({comp:r,props:{}})})):P(n.tag)&&Fe(n.children,t))}),t}function pe(e,t=[]){const n=K.get(e)||[];return t.push(...n),p(n,r=>{const o=pe(r.comp);t.push(...o)}),t}let z=null;function ve(e){z=e}let se=null;function Rt(e){se=e}function et(e,t){z=e,"ref"in t&&(t.ref.value=se),se=null}let de=!1;function we(e){de=e}const H=new WeakMap;function kt(e){if(de)return;const t=H.get(z)||[];t.some(r=>r===e)||(t.push(e),H.set(z,t))}function Se(e){const t=pe(e).map(r=>r.comp);t.unshift(e);const n=[];p(t,r=>{const o=H.get(r)||[];n.push(...o),H.delete(r)}),p(n,r=>r())}const Re=new WeakMap;function ke(e){const t=pe(e).map(r=>r.comp);t.unshift(e);const n=[];p(t,r=>{const o=Re.get(r)||[];n.push(...o),Re.delete(r)}),p(n,r=>r())}function M(e,t,n){if(O(e))return We(e,t,n);if(h(e)){if(e=e,N(e))return he(n);if(ve(e),Ne(e)){const i=new e({...t,children:n});e=i.render.bind(i)}e=e;const r=V(t,{children:n}),o=e(r);return et(e,t),P(o)?te(o):(K.set(e,Fe([o,...o.children])),M(o.tag,o.attrs,o.children))}}function We(e,t={},n=[""]){if(h(e)&&N(e))return M(e,t,n);const r=document.createElement(e);p(n,o=>{if(h(o)){const i=he([o]);x(r,i)}else $e(r,o)});for(const o in t)tt(r,o,t[o]);if(t.style&&S(t.style))for(const o in t.style){const i=t.style[o];h(i)?v(()=>r.style[o]=i()):r.style[o]=i}return r}function tt(e,t,n){if(t==="ref"&&S(n)){n.value=e;return}if(t==="created"&&h(n)){n(e);return}let r=o=>e[t]=o;t==="className"?r=o=>e[t]=_e(...[o].flat()):t.startsWith("data-")&&(r=o=>e.dataset[t.slice(5)]=o),Oe(t)&&h(n)?v(()=>r(n())):r(n)}function he(e){const t=document.createDocumentFragment();return p(e,n=>{h(n)?rt(t,n):$e(t,n)}),t}function $e(e,t){if(!Te(t)){if(P(t)){const n=te(t);n.nodeValue=t,x(e,n);return}if(Z(t)){const n=he(t);x(e,n);return}if(Pe(t)){const n=We(t.tag,t.attrs,t.children);x(e,n);return}if(S(t)&&b(t.tag)){const n=M(t.tag,t.attrs,t.children);x(e,n);return}$(`render: 不支持 ${t} 值渲染`)}}function Ee(e){if(P(e))return te(e);if(Pe(e)||S(e)&&b(e.tag))return M(e.tag,e.attrs,e.children)}function nt(e,t){let n=0,r=m(e)-1;for(;n<=r;){const o=Math.ceil((n+r)/2),i=e[o];if(t===i.key)return o;t<i.key?r=o-1:t>i.key&&(n=o+1)}return-1}function rt(e,t){let n=[],r=!0,o=null;const i=te("");x(e,i),v(()=>{let s=t();if(s&&S(s)&&N(s.tag)){$("不支持响应式节点片段渲染");return}Z(s)||(s=[s]),s=s.filter(u=>!Te(u));let c=0;for(;c<m(s);){let u=s[c];const f=nt(n,c);if(f>=0){if(ae(u,n[f].tree)){c++;continue}const a=Ee(u);if(!a){s.splice(f,1),c++;continue}const k=n[f].tree;if(b(k.tag)&&Se(k.tag),n[f].node.parentElement.replaceChild(a,n[f].node),b(k.tag)){const A=k.tag;ke(A),K.delete(A)}n[f].tree=u,n[f].node=a}else{const a=Ee(u);if(!a){c++;continue}if(r)x(e,a);else if(m(n)===0)o??(o=i.parentElement),o.insertBefore(a,i.nextSibling);else{const k=n[m(n)-1].node,A=k.nextSibling;k.parentElement.insertBefore(a,A)}n.push({key:c,tree:u,node:a})}c++}if(m(n)>m(s)){for(let u=m(s);u<m(n);u++){const f=n[u].tree;if(b(f.tag)&&Se(f.tag),n[u].node.remove(),b(f.tag)){const a=f.tag;ke(a),K.delete(a)}}n.splice(m(s),m(n)-m(s))}r=!1})}function Y(e,t={},n=[""]){if(N(e)){const i=V(t,{children:n}),s=e(i);return G(s)}if(b(e)){if(e=e,Ne(e)){const c=new e({...t,children:n});return Y(c.render.bind(c))}const i=V(t,{children:n}),s=e(i);return Y(s.tag,s.attrs,s.children)}let r="";for(const i in t){if(i.startsWith("on")||i==="ref")continue;let s=h(t[i])&&Oe(i)?t[i]():t[i];if(O(e)&&["innerHTML","innerText"].includes(i)){n=[s];continue}if(i==="className"){s&&(r+=` class="${_e(...[s].flat())}"`);continue}if(i==="style"&&S(s)){for(const c in s)h(s[c])&&(s[c]=s[c]());s='"'+JSON.stringify(s).slice(1,-1).replace(/"/g,"").replace(/,/g,";")+'"'}r+=` ${i}="${s}"`}const o=G(n);return`<${e}${r}>${o}</${e}>`}function G(e){let t="";return p(e,n=>{if(P(n)){t+=n.toString();return}if(Z(n)){t+=G(n);return}if(h(n)){const r=n();t+=G([r]);return}if(S(n)){t+=Y(n.tag,n.attrs,n.children);return}$(`renderToString: 不支持 ${n} 值渲染`)}),t}const xe=[];function ot(){p(xe,e=>e()),xe.length=0}const ie=[];let De=!1;function Et(e){if(!de){if(De){q(e);return}ie.push(e)}}function st(){p(ie,e=>e()),ie.length=0,De=!0}function it({tag:e,attrs:t,children:n}){const r=M(e,t,n);return ot(),q(st),r}function ct({tag:e,attrs:t,children:n}){we(!0);const r=Y(e,t,n);return we(!1),r}function xt(e,t){return it(y(e,t))}function ut(e){const t={};return e.replace(/([^?&=]+)=([^&]+)/g,(n,r,o)=>t[r]=o),t}function J(e){const t=new URL("http://0.0.0.0"+e);return{fullPath:t.href.replace(t.origin,""),path:t.pathname,query:ut(t.search),hash:t.hash,meta:{}}}function ft(e){let t="";for(const r in e.query)e.query[r]&&(t+=`${r}=${e.query[r]}&`);t=t?"?"+t.slice(0,-1):"";let n=e.hash?"#"+e.hash:"";return e.path+t+n}function I(e){return e.replace(/\/{1,}/g,"/")}function Ae(e,t){O(e)&&(g.mode==="history"&&(e=g.base+e),e=J(e));for(const r in e)l[r]=e[r];const{fullPath:n}=l;le()&&(g.mode==="history"?history[t==="push"?"pushState":"replaceState"]({},"",n):location.hash=n)}function Le(e){Ae(e,"push")}function me(e){Ae(e,"replace")}function re(e){history.go(e)}function at(){return{back:()=>re(-1),forward:()=>re(1),go:re,push:Le,replace:me,options:g,currentRoute:ee(l)}}function lt(){return l}const g={base:"",mode:"history",ssrDataKey:"g_initialProps"};let l=null;function pt(e){l=e}function Ce(){const{origin:e,href:t,hash:n}=location;return g.mode==="hash"?n.replace("#",""):t.replace(e+g.base,"")}let W=null;function Ct(e={}){if(Object.assign(g,e),le()){const t=J(Ce());l=D(t),window.addEventListener("popstate",()=>{const n=J(Ce());for(const r in n)l[r]=n[r]})}return{...at(),beforeEach(t){W=t}}}const Q={currentTemplate:"",ssrData:{}};function jt(e){}function Ie(e,t){t=t.replace(g.base,"");const n=e.find(u=>{const{path:f,exact:a}=u.attrs;return a===!1?(t+"/").startsWith(I(f+"/")):I(f)===t});if(!n)return;const{path:r,component:o,beforeEnter:i,meta:s,redirect:c}=n.attrs;return{path:I(r),component:o,meta:s,beforeEnter:i,redirect:c}}let E;const je=[];function dt(e){const t=Qe();let n={};function r(i){const s=Ie(e.children,i);if(!s){n={},t.value=e.notFound;return}async function c(){if(s.component.prototype||(s.component=(await s.component()).default),t.value===s.component)return;n.path=s.path;const f=ue(s.component);if(f){const a=window[g.ssrDataKey];a&&n.path in a?(n.data=a[n.path],delete a[n.path]):n.data=await f(w(n))}t.value=s.component,n.meta=s.meta,l.meta=s.meta}if(s.redirect&&s.redirect!==l.fullPath){me(s.redirect),r(l.path);return}function u(f){f(ee(l),E,()=>{E=w(l),i===l.path?c():r(l.path)})}if(W){u(W);return}if(s.beforeEnter){u(s.beforeEnter);return}E=w(l),c()}const o=Ze(()=>l.path,i=>{if(E){const s=E.path.split("/"),c=i.split("/");s[1]!==c[1]&&p(je,u=>u())}r(i)},{immediate:!0});return e.prefix&&je.push(o),y(j,null,()=>y(t.value,{...n}))}const _=D([]);function ce(e){const t=_.indexOf(e);_.splice(t,1)}let R=null;function qe(e){function t(c){let u=Ie(e.children,c);if(u.redirect&&u.redirect!==l.fullPath)return pt(J(u.redirect)),t(l.path);function f(a){return R=`b_${ye()}`,_.push(R),a(ee(l),E,()=>{E=w(l),u.path!==l.path?qe(e):(L(R,u.component,{path:u.path,meta:u.meta}),ce(R))}),R}return W?f(W):u.beforeEnter?f(u.beforeEnter):u}let n=t(l.path);if(O(n))return y(j,null,n);if(!n){const c=e.notFound;return y(c||j,null)}n=n;let r=n.component;l.meta=n.meta;const o={path:n.path,meta:n.meta};R&&(L(R,r,o),ce(R));const i=`r_${ye()}`;if(!r.prototype)return _.push(i),r().then(async c=>{r=c.default;const u=ue(r);u&&(o.data=await u(w(o)),Q.ssrData[o.path]=o.data),L(i,r,o)}),y(j,null,i);const s=ue(r);return s?(_.push(i),s(w(o)).then(c=>{o.data=c,Q.ssrData[o.path]=c,L(i,r,o)}),y(j,null,i)):y(r,{...o})}function Mt(e){return p(e.children,t=>{e.prefix&&(t.attrs.path=I(e.prefix+t.attrs.path)),t.children=[t.attrs.component]}),le()?y(dt,{...e}):y(qe,{...e})}function L(e,t,n){const r=ct(y(t,{...n}));ce(e);const o=Q.currentTemplate.replace(e,r);Q.currentTemplate=o}function ue(e){const{getInitialProps:t}=e.prototype;if(t&&h(t))return t}function Ot(e){const{to:t,type:n,className:r,children:o,...i}=e,s=lt();O(t)||(e.to=ft(Object.assign({},s,t)));const c=g.mode==="hash"?`${g.base}#${e.to}`:g.base+e.to;function u(f){f.preventDefault(),n==="replace"?me(e.to):Le(e.to)}return y("a",{className:()=>{const f=e.to+"/",a=s.path+"/";return[a.startsWith(f)&&"active",a===f&&"exact-active",r]},href:c,onclick:u,...i},o)}const X=Symbol("action");function ht(e){return h(e)&&e.prototype[X]===X}class mt{constructor(t,n){d(this,"state");d(this,"actions");this.state=D(w(t)),this.actions={};for(const r in n){let i=function(...s){const c=n[r](...s);if(C(c)&&c[Symbol.toStringTag]==="Promise")c.then(u=>(o._merge(t),u));else return o._merge(t),c};const o=this;i.prototype[X]=X,o.actions[r]=i}Object.assign(this.state,this.actions);for(const r in this.actions)Object.defineProperty(this.state,r,{writable:!1})}_merge(t){const n=w(t),r=Object.keys(n);for(const o in n)this.state[o]=n[o];for(const o in this.state)ht(this.state[o])||!r.includes(o)&&delete this.state[o]}}const oe=new WeakMap;function Pt(e,t){return()=>{if(!oe.has(e)){const n=new mt(e,t);oe.set(e,n.state)}return oe.get(e)}}export{j as F,Ot as L,Mt as R,it as a,Pt as b,St as c,wt as d,kt as e,jt as f,w as g,y as h,le as i,Ct as j,D as k,xt as l,Ge as m,q as n,Et as o,Rt as p,Qe as r,lt as u,Ze as w};
