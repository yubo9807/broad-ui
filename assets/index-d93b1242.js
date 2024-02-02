var _=Object.defineProperty;var f=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var u=(e,t,n)=>(f(e,typeof t!="symbol"?t+"":t,n),n);import{r as ref,c as computed,h,n as nextTick,a as render,w as watch,L as Link,o as onBeforeUnmount,R as Router,b as Route,d as onMounted,e as deepClone,i as initRouter,F as Fragment,u as useRoute}from"./pl-vue-94f8847c.js";import{marked}from"./marked-d5c18544.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const index$1="",header="header-937207",title$1="title-743705",iconMenu="icon-menu-a6f1be",active="active-c5e4c6",main$1="main-796db0",footer="footer-f3bb87",style$1={header,title:title$1,"icon-menu":"icon-menu-a6f1be",iconMenu,active,main:main$1,footer},NODE_ENV="production",env=Object.freeze({BASE_URL:"/broad-ui",NODE_ENV,PROJECT_NAME:"Broad-UI",CLASS_PREFIX:"br-"}),scriptRel="modulepreload",assetsURL=function(e){return"/broad-ui/"+e},seen={},__vitePreload=function(t,n,i){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=assetsURL(o),o in seen)return;seen[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!i)for(let c=r.length-1;c>=0;c--){const d=r[c];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":scriptRel,a||(m.as="script",m.crossOrigin=""),m.href=o,document.head.appendChild(m),a)return new Promise((c,d)=>{m.addEventListener("load",c),m.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},defaultOption=Object.freeze({keywords:["rule","end","knowledgebase","knowledge","reg","require","prohibit","and","or","in","true","false"],multiRowComment:/\/\*.*?\*\//gs,singleLineComment:/\/\/[^\n]+\n?/g,string:/"[^"]*"|'[^']*'/g,number:/\d*\.?\d+/g,methods:/\w+(?=\()/g,object:/\w*\./sg});class CodeConversion{constructor(e={}){u(this,"_option");u(this,"_textList");this._option=Object.assign({},defaultOption,e)}_commonDealWith(e,t="",n=null){const i=Object.assign([],this._textList),r=[];return i.forEach((o,a)=>{if(o.delaWith)return;const s=o.content.split(e).map(c=>({content:c})),l=o.content.match(e);if(!l)return;let m=1;l.forEach(c=>{const d=`<span class="${t}">${n?c.slice(n[0],n[1]):c}</span>${n?n[2]:""}`;s.splice(m,0,{delaWith:!0,content:d}),m+=2}),r.push([a,s.length,s])}),r.forEach((o,a,s)=>{if(a>0){const l=s[a-1][1]-1;o[0]=o[0]+l,o[1]=o[1]+l}i.splice(o[0],1,...o[2])}),this._textList=i,this}_keyword(words){const arr=Object.assign([],this._textList),record=[];return arr.forEach((val,index)=>{if(val.delaWith)return;const reg=eval(`/(${words.join("|")})(?=\\s)/g`),newArr=val.content.split(reg);newArr.forEach((e,t)=>words.includes(e)&&newArr.splice(t,1));const noMatching=newArr.map(e=>({content:e})),matching=val.content.match(reg);if(!matching)return;let insert=1;matching.forEach(e=>{noMatching.splice(insert,0,{delaWith:!0,content:`<span class="keyword">${e}</span>`}),insert=insert+2}),record.push([index,noMatching.length,noMatching])}),record.forEach((e,t,n)=>{if(t>0){const i=n[t-1][1]-1;e[0]=e[0]+i,e[1]=e[1]+i}arr.splice(e[0],1,...e[2])}),this._textList=arr,this}_merge(){return`<div class="code-highlight-container">${this._textList.map(t=>t.content).join("")}</div>`}output(e){this._textList=[{content:e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}];const t=this._option;return this._commonDealWith(t.multiRowComment,"block-comment")._commonDealWith(t.singleLineComment,"line-comment")._commonDealWith(t.string,"string")._commonDealWith(t.number,"number")._keyword(t.keywords)._commonDealWith(t.methods,"methods")._commonDealWith(t.object,"object")._merge()}}function getPropertyName(e,t){return e.find(n=>n in t)}const enterFullScreenName=getPropertyName(["requestFullscreen","mozRequestFullScreen","webkitRequestFullScreen","msRequestFullScreen"],document.documentElement);function enterFullScreen(e=document.documentElement){enterFullScreenName&&e[enterFullScreenName]()}const exitFullScreenName=getPropertyName(["exitFullscreen","mozCancelFullScreen","webkitExitFullScreen","msExitFullScreen"],document);function exitFullScreen(){isFullScreen()&&exitFullScreenName&&document[exitFullScreenName]()}const fullScreenName=getPropertyName(["fullscreenElement","mozFullScreenElement","webkitFullScreenElement","msFullScreenElement"],document);function fullScreenEl(){return document[fullScreenName]||null}function isFullScreen(){return!!fullScreenEl()}function toggleFullScreen(e=document.documentElement){isFullScreen()?exitFullScreen():enterFullScreen(e)}const markdown="",customCodeHighlight="",highlightOption=Object.freeze({keywords:["import","export","default","from","const","let","var","for","in","if","new","return","class","extends"]});function copyToBoard(e){const t=document.createElement("textarea");document.body.appendChild(t),t.value=e,t.select(),document.execCommand("copy"),document.body.removeChild(t)}function extractNumber(e){const t=e.match(/[+-]?\d+(\.\d+)?/g);return t&&Number(t[0])}const index="";function CodeEdit(e){const t=ref(e.defaultValue||""),n=computed(()=>e.toHtml?e.toHtml(t.value):t.value),i=computed(()=>t.value.split(`
`).length);function r(a){const s=a.target.value;t.value=s}function o(){const a=t.value;copyToBoard(a),e.onCopy&&e.onCopy(a)}return h("div",{className:"code-edit"},h("ul",{className:"row-num"},()=>new Array(i.value).fill(1).map((a,s)=>h("li",null,s+1))),h("div",{className:"content"},h("pre",{className:"mark",innerHTML:()=>n.value}),e.isEdit!==!1&&h("textarea",{value:()=>t.value,oninput:r})),e.isCopy&&h("span",{className:"copy",onclick:o},"copy"))}function Markdown(e){const t=ref(""),n=ref(),i=new CodeConversion(highlightOption);return __vitePreload(()=>import("./marked-d5c18544.js"),[]).then(async r=>{t.value=await r.marked.parse(e.text),nextTick(()=>{[...n.value.querySelectorAll("pre code")].forEach(a=>{const s=render(h(CodeEdit,{defaultValue:a.innerText.trim(),isEdit:!1,isCopy:!0,toHtml:l=>i.output(l)}));n.value.replaceChild(s,a.parentElement)})})}),watch(()=>t.value,()=>{nextTick(()=>{[...n.value.querySelectorAll("pre code")].forEach(o=>{o.innerHTML=i.output(o.innerText)})})}),h("div",{ref:n,className:["markdown",e.className],innerHTML:()=>t.value})}const use=`# Broad-UI

## 介绍

一个基于 Pl Vue 开发的 UI 组件库，不受任何框架的束缚，可通过原生挂载。不需要考虑任何技术栈，开箱即用。

主要目的：为解决项目开发中使用框架不统一，导致开发效率低、代码复用率低、代码维护性差等问题。

##  性能

因为该组件库是基于 Pl Vue 开发的，与 Svelte 一样，我们省去了虚拟 DOM 的比较，直接更新 DOM。更多响应式更新等相关问题请前往
<a href="http://plvue.hpyyb.cn/" target="_blank">Pl Vue</a>

## 组件

### 一般组件

\`\`\`tsx
import { useComponent } from 'pl-vue';
import Component from 'broad-ui/comp/Component';

//                          组件     props
const node = useComponent(Component, {});
document.getElementById('container').appendChild(node);
\`\`\`

### 使用组件内置方法

\`\`\`tsx
import { useComponent } from 'broad-ui/utils';
import Component, { ComponentExpose } from 'broad-ui/comp/Component';
import { ref } from 'pl-vue';

const compRef = ref<ComponentExpose>();
const node = useComponent(Component, { ref: compRef });
document.getElementById('container').appendChild(node);
compRef.value.method();  // 调用组件提供方法
\`\`\`

### 继承组件重写

\`\`\`tsx
import Component from 'broad-ui/comp/Component';
import { useComponent } from 'pl-vue';

class MyComponent extends Component {
  mathed() {
    // 某些方法计算可能存在问题，请继承重写
    // code...
  }
}

useComponent(MyComponent, {});
\`\`\`

## 工具

[工具函数](#/tools) 导入即用，API 无任何依赖项。`;function Home(){const e=use.replace(/~\/core/g,env.PROJECT_NAME.toLocaleLowerCase()).replace(/#.+\n/,"");return h(Markdown,{text:e})}const __variableDynamicImportRuntimeHelper=(e,t)=>{const n=e[t];return n?typeof n=="function"?n():Promise.resolve(n):new Promise((i,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+t)))})},title="title-1c9804",side="side-0fbf69",main="main-283e8d",preview="preview-f36693",code="code-1f4ff1",style={case:"case-3e24ce",title,side,main,preview,code},isPhone=document.body.clientWidth<768;class CodeConversion2 extends CodeConversion{constructor(){super(highlightOption)}output(t){this._textList=[{content:t.replace(/</g,"&lt;").replace(/>/g,"&gt;")}];const n=this._option;return this._commonDealWith(/`[^`]*`/g,"string")._commonDealWith(n.multiRowComment,"block-comment")._commonDealWith(n.singleLineComment,"line-comment")._commonDealWith(n.string,"string")._commonDealWith(n.number,"number")._keyword(n.keywords)._commonDealWith(n.methods,"methods")._commonDealWith(n.object,"object")._merge()}}const conversion=new CodeConversion2;function Example(e){return new Promise(async t=>{function n(){const i=ref("");function r(l){return l.replace(/~\/core/g,env.PROJECT_NAME.toLocaleLowerCase())}const o=ref();e.main?(e.mainRaw.then(l=>{i.value=r(l.default.trim())}),e.main.then(l=>{o.value=l.default})):(e.domRaw.then(l=>{i.value=r(l.default.trim())}),e.dom.then(l=>{l.default()}));const a=ref(""),s=ref();return e.readme.then(async l=>{a.value=await marked.parse(l.default),nextTick(()=>{[...s.value.querySelectorAll("pre code")].forEach(c=>{const d=render(h(CodeEdit,{defaultValue:c.innerText.trim(),isEdit:!1,isCopy:!0,toHtml:p=>conversion.output(p)}));s.value.replaceChild(d,c.parentElement)})})}),h("div",{className:style.case},isPhone&&h("h1",{className:style.title},e.name),h("h2",null,"Preview"),h("div",{id:"container",className:style.preview},()=>o.value&&h(o.value,null)),h("div",{className:style.code},h("h2",null,"Code"),()=>i.value&&h(CodeEdit,{defaultValue:i.value,isEdit:!1,isCopy:!0,toHtml:l=>conversion.output(l)})),h("div",{ref:s,className:"markdown",innerHTML:()=>a.value}))}t({default:n})})}function Case(e){const t=h("ul",{className:style.side},e.data.map(n=>h("li",null,h(Link,{to:e.pagePath+"/"+n.path},n.name))));if(isPhone){let n;onMounted(()=>{const i=e.phoneMountNode();n=render(t),i.parentElement.insertBefore(n,i.nextSibling)}),onBeforeUnmount(()=>{n.remove()})}return h("div",{className:style.case},!isPhone&&t,h("main",{className:style.main},h(Router,{prefix:e.pagePath},h(Route,{path:"",redirect:e.pagePath+"/"+e.data[0].path}),...e.data.map(n=>h(Route,{path:"/"+n.path,component:()=>Example(n)})))))}const NewCase$1=deepClone(Case);function Tools(e){const t=[{path:"chartWave",name:"波浪效果"},{path:"falls",name:"瀑布流布局"},{path:"imageCompress",name:"图片压缩"},{path:"codeHighlighct",name:"自定义语言高亮"},{path:"screen",name:"全屏控制"},{path:"amountUppercase",name:"数字金额大写"}];return t.forEach(n=>{n.dom=__variableDynamicImportRuntimeHelper(Object.assign({"./example/amountUppercase/dom.ts":()=>__vitePreload(()=>import("./dom-b3147699.js"),["assets/dom-b3147699.js","assets/pl-vue-94f8847c.js","assets/marked-d5c18544.js"]),"./example/chartWave/dom.ts":()=>__vitePreload(()=>import("./dom-415097ad.js"),["assets/dom-415097ad.js","assets/pl-vue-94f8847c.js","assets/marked-d5c18544.js"]),"./example/codeHighlighct/dom.ts":()=>__vitePreload(()=>import("./dom-b3213e1d.js"),["assets/dom-b3213e1d.js","assets/pl-vue-94f8847c.js","assets/marked-d5c18544.js"]),"./example/falls/dom.ts":()=>__vitePreload(()=>import("./dom-edd6e933.js"),["assets/dom-edd6e933.js","assets/pl-vue-94f8847c.js","assets/marked-d5c18544.js"]),"./example/imageCompress/dom.ts":()=>__vitePreload(()=>import("./dom-f4dac7e8.js"),[]),"./example/screen/dom.ts":()=>__vitePreload(()=>import("./dom-7946b6b8.js"),["assets/dom-7946b6b8.js","assets/pl-vue-94f8847c.js","assets/marked-d5c18544.js"])}),`./example/${n.path}/dom.ts`),n.domRaw=__variableDynamicImportRuntimeHelper(Object.assign({"./example/amountUppercase/dom.ts":()=>__vitePreload(()=>import("./dom-720b422e.js"),[]),"./example/chartWave/dom.ts":()=>__vitePreload(()=>import("./dom-b4dfac53.js"),[]),"./example/codeHighlighct/dom.ts":()=>__vitePreload(()=>import("./dom-816c6096.js"),[]),"./example/falls/dom.ts":()=>__vitePreload(()=>import("./dom-7fa56dfa.js"),[]),"./example/imageCompress/dom.ts":()=>__vitePreload(()=>import("./dom-781ca76d.js"),[]),"./example/screen/dom.ts":()=>__vitePreload(()=>import("./dom-ad982ad4.js"),[])}),`./example/${n.path}/dom.ts`),n.readme=__variableDynamicImportRuntimeHelper(Object.assign({"./example/amountUppercase/readme.md":()=>__vitePreload(()=>import("./readme-1211e942.js"),[]),"./example/chartWave/readme.md":()=>__vitePreload(()=>import("./readme-17c5d6e2.js"),[]),"./example/codeHighlighct/readme.md":()=>__vitePreload(()=>import("./readme-c6c5abe4.js"),[]),"./example/falls/readme.md":()=>__vitePreload(()=>import("./readme-98d4ea92.js"),[]),"./example/imageCompress/readme.md":()=>__vitePreload(()=>import("./readme-5b7661b0.js"),[]),"./example/screen/readme.md":()=>__vitePreload(()=>import("./readme-411cef74.js"),[])}),`./example/${n.path}/readme.md`)}),h(NewCase$1,{pagePath:e.path,data:t,phoneMountNode:()=>document.getElementById("nav-tools")})}const NewCase=deepClone(Case);function Comp(e){const t=[{path:"CodeEdit",name:"代码编辑"},{path:"Partition",name:"区域分割拖拽"},{path:"UnfoldText",name:"多行文本展开"}];return t.forEach(n=>{n.dom=__variableDynamicImportRuntimeHelper(Object.assign({"./example/CodeEdit/dom.ts":()=>__vitePreload(()=>import("./dom-6e9a4cf2.js"),["assets/dom-6e9a4cf2.js","assets/pl-vue-94f8847c.js","assets/marked-d5c18544.js"]),"./example/Partition/dom.ts":()=>__vitePreload(()=>import("./dom-7d76e782.js"),["assets/dom-7d76e782.js","assets/pl-vue-94f8847c.js","assets/dom-b9142cba.css"]),"./example/UnfoldText/dom.ts":()=>__vitePreload(()=>import("./dom-6583599a.js"),["assets/dom-6583599a.js","assets/pl-vue-94f8847c.js","assets/marked-d5c18544.js","assets/dom-a8684333.css"])}),`./example/${n.path}/dom.ts`),n.domRaw=__variableDynamicImportRuntimeHelper(Object.assign({"./example/CodeEdit/dom.ts":()=>__vitePreload(()=>import("./dom-5d216754.js"),[]),"./example/Partition/dom.ts":()=>__vitePreload(()=>import("./dom-62c76fae.js"),[]),"./example/UnfoldText/dom.ts":()=>__vitePreload(()=>import("./dom-fc8309c7.js"),[])}),`./example/${n.path}/dom.ts`),n.readme=__variableDynamicImportRuntimeHelper(Object.assign({"./example/CodeEdit/readme.md":()=>__vitePreload(()=>import("./readme-4ef41cfd.js"),[]),"./example/Partition/readme.md":()=>__vitePreload(()=>import("./readme-2045e0ff.js"),[]),"./example/UnfoldText/readme.md":()=>__vitePreload(()=>import("./readme-74df5bdb.js"),[])}),`./example/${n.path}/readme.md`)}),h(NewCase,{pagePath:e.path,data:t,phoneMountNode:()=>document.getElementById("nav-comp")})}function App(){initRouter({mode:"hash"});const e=ref(!1),t=useRoute();return watch(()=>t.path,()=>{e.value=!1}),h(Fragment,null,h("header",{className:style$1.header},h("div",null,h("span",{className:()=>[style$1.iconMenu,e.value&&style$1.active],onclick:()=>e.value=!e.value},h("span",null)),h(Link,{className:style$1.title,to:"/"},env.PROJECT_NAME)),h("nav",{className:()=>e.value&&style$1.active,onclick:()=>e.value=!1},!isPhone&&h(Link,{to:"/"},"简介"),h(Link,{id:"nav-comp",to:"/comp"},"组件"),h(Link,{id:"nav-tools",to:"/tools"},"工具"),h("a",{href:"https://github.com/yubo9807/broad-ui",target:"_blank"},"GitHub"))),h("main",{className:["leayer",style$1.main]},h(Router,null,h(Route,{path:"/",component:Home}),h(Route,{path:"/comp",component:Comp,exact:!1}),h(Route,{path:"/tools",component:Tools,exact:!1}))),h("footer",{className:style$1.footer},h("div",{className:"leayer"},h("p",{style:"color: #999"},"暂未发布正式版本，敬请期待！"),h("p",null,"技术支持：",h("a",{href:"http://plvue.hpyyb.cn",target:"_blank"},"Pl Vue")))))}document.body.appendChild(render(h(App,null)));export{CodeConversion as C,exitFullScreen as a,CodeEdit as b,extractNumber as c,enterFullScreen as e,isFullScreen as i,toggleFullScreen as t};
