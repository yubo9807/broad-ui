import{h as o}from"./pl-vue-efdc9048.js";import{F as a}from"./funcOverload-5c6792e5.js";const u=()=>{const r=new a;r.addImpl("number","number",(n,t)=>n+t);const e=r.overload(1,2);r.addImpl("string","string",(n,t)=>"str: "+n+t);const s=r.overload("a","b");return o("div",null,e,o("br",null),s)};export{u as default};