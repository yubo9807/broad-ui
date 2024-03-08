import{f as a,i as s}from"./file-e422eadb.js";const c=()=>{const e=document.createElement("input");e.type="file",e.accept="image/*",e.addEventListener("input",async()=>{const i=e.files[0],t=await a(i),n=await s(t,{ratio:.6,sizeLimit:{width:20,height:20}});alert("压缩前："+t.length+`
压缩后：`+n.length)}),document.getElementById("container").appendChild(e)};export{c as default};
