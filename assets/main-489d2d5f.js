import{m as i,h as n}from"./pl-vue-efdc9048.js";import{P as s}from"./publishSubscribe-44ea5025.js";const c=()=>{const o=i([]),l=new s;l.on("test",t=>{o.push(t)});function e(){l.emit("test","hello world")}return n("div",null,n("button",{onclick:e},"发送事件"),()=>o.map(t=>n("p",null,t)))};export{c as default};
