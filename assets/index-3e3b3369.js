import{r as v,s as f,h as l,q as h}from"./pl-vue-ddc0d6ad.js";function x(e){e=Object.assign({size:"30%",type:"horizontal",main:1},e);const n=v(),[d,c]=f(e.size);function m(a){n.value.addEventListener("mousemove",o),document.addEventListener("mouseup",u)}function o(a){const i=n.value.getBoundingClientRect();if(e.type==="horizontal"){let s=e.main===1?a.clientX-i.left:i.width-a.clientX+i.left;c(s+"px")}else{const s=e.main===1?a.clientY-i.top:i.height-a.clientY+i.top;c(s+"px")}}function u(){n.value.removeEventListener("mousemove",o)}h({setPartial:c,getRootEl:()=>n.value});const t=e.main===1;return l("div",{ref:n,className:[`br-partition ${e.type}`,...[e.className].flat()],style:{...e.style||{},"--skew":d}},l("div",{className:["item",t?"main":"vice"],created:t?e.childMain:e.childArea},t?e.childMain:e.childArea),l("div",{className:"line",onmousedown:m}),l("div",{className:["item",t?"vice":"main"],created:t?e.childArea:e.childMain},t?e.childArea:e.childMain))}export{x as P};
