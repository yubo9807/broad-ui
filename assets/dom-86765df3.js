import"./pl-vue-efdc9048.js";import{d as r}from"./index-df14454e.js";import{S as s}from"./streamSplit-f5db9a86.js";import"./marked-d5c18544.js";const l=()=>{const e=document.getElementById("container"),n=new s({onMessage(t){const o=JSON.parse(t),a=document.createTextNode(o.data);e.appendChild(a)}});(async function(){const t=["hello",", ","world","!"];for(const o of t){const a={data:o,time:Date.now()};n.add(`data:${JSON.stringify(a)}

`),await r(1e3)}})()};export{l as default};
