import{r as v,g as f,j as h,h as o,f as x}from"./pl-vue-94f8847c.js";function g(e){e=Object.assign({size:"30%",type:"horizontal",main:1},e);const t=v(),[m,s]=f(e.size);function u(a){t.value.addEventListener("mousemove",d),document.addEventListener("mouseup",r)}function d(a){const n=t.value.getBoundingClientRect();if(e.type==="horizontal"){let l=e.main===1?a.clientX-n.left:n.width-a.clientX+n.left;s(l+"px")}else{const l=e.main===1?a.clientY-n.top:n.height-a.clientY+n.top;s(l+"px")}}function r(){t.value.removeEventListener("mousemove",d)}h({setPartial:s,getRootEl:()=>t.value});const i=e.main===1;return o("div",{ref:t,className:[`partition ${e.type}`,e.className],style:()=>`--skew: ${m()}`},o("div",{className:["item",i?"main":"vice"],created:i?e.areaMain:e.areaVice},e.children[0]),o("div",{className:"line",onmousedown:u}),o("div",{className:["item",i?"vice":"main"],created:i?e.areaVice:e.areaMain},e.children[1]))}const M=()=>{const e=x(g,{areaMain(t){t.innerText="固定区域"},areaVice(t){t.innerText="剩余区域"}}),c=document.getElementById("container");c.style.height="300px",c.appendChild(e)};export{M as default};