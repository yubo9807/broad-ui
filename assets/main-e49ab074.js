import{m as n,h as e}from"./pl-vue-efdc9048.js";import{d as i}from"./index-8cfa1eec.js";import{S as m}from"./streamSplit-f5db9a86.js";import"./marked-d5c18544.js";const p=()=>{const o=n([]),s=new m({onMessage(a){const t=JSON.parse(a);o.push(t.data)}});return async function(){const a=["hello",", ","world","!"];for(const t of a){const r={data:t,time:Date.now()};s.add(`data:${JSON.stringify(r)}

`),await i(500)}}(),e("div",null,()=>o)};export{p as default};
