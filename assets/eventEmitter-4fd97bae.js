var v=Object.defineProperty;var E=(n,e,t)=>e in n?v(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var r=(n,e,t)=>(E(n,typeof e!="symbol"?e+"":e,t),t);class d extends EventTarget{constructor(){super(...arguments);r(this,"emit",(t,s)=>{this.dispatchEvent(new CustomEvent(t,{detail:s}))});r(this,"on",this.addEventListener);r(this,"once",(t,s)=>{this.on(t,s,{once:!0,capture:!0})});r(this,"off",this.removeEventListener)}static wait(t){return new Proxy(t,{get(a,i){if(!i.startsWith("wait"))return;const o=i.replace("wait","").toLowerCase();return new Promise(c=>{a.addEventListener(o,c,{once:!0})})}})}}export{d as E};
