import{i as m,r as o,w as h,h as l,o as f,q as r}from"./pl-vue-ddc0d6ad.js";import{e as v}from"./index-79585c5c.js";function x(e){e=Object.assign({row:2,unfold:"展开",fold:"收起"},e);const n=m(e.model)?e.model:o(e.model),c=o(!1),a=o(!1),s=o(),u=o();let i;f(()=>{i=getComputedStyle(s.value),d()}),h(()=>n.value,()=>{d()}),f(()=>{const t=v(i.getPropertyValue("--line-height"));u.value.offsetHeight<t*e.row&&(c.value=!0)});function d(){const t=v(i.getPropertyValue("font-size"));c.value=t*n.value.length<s.value.offsetWidth*e.row-e.unfold.length*t}return r({setModel(t){n.value=t},setOpen(t){a.value=t}}),l("div",{ref:s,className:["br-unfold-text",...[e.className].flat()],style:e.style},()=>c.value?l("div",null,()=>n.value):l("div",{className:["wrap",()=>!a.value&&"is-open"],style:`--row: ${e.row}`},()=>!a.value&&l("div",{className:"btn"},"...",l("span",{className:"open",onclick:()=>a.value=!0,created:e.childUnfold},e.unfold)),l("div",{ref:u,className:"content"},()=>n.value),()=>a.value&&l("div",{className:"close",onclick:()=>a.value=!1,created:e.childFold},e.fold)))}export{x as U};
