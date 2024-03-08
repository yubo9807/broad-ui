import{r as o,h as s}from"./pl-vue-2c9f6500.js";import{f,i as r}from"./file-e422eadb.js";function l(){const t=o();async function i(){const n=t.value.files[0],e=await f(n),a=await r(e,{ratio:.6,sizeLimit:{width:20,height:20}});alert("压缩前："+e.length+`
压缩后：`+a.length)}return s("input",{ref:t,type:"file",oninput:i,accept:"image/*"})}export{l as default};
