import{C as n}from"./chartWave-b99939fe.js";import"./pl-vue-efdc9048.js";import"./number-1e8ebfe5.js";const i=()=>{const o=document.getElementById("container"),t=new n({el:o,percentage:30,size:300});t._canvas.style.borderRadius="50%",setInterval(()=>{const e=Math.random()*100;t.option.percentage=e,t.option.color=e>60?"#ffaa00":"#0080ff"},2e3)};export{i as default};