import{r as i,h as t,o as n}from"./pl-vue-ddc0d6ad.js";import{C as s}from"./chartTimerBar-e726ee09.js";import"./array-4873fd0c.js";import"./number-1e8ebfe5.js";const d=()=>{const o=i();let e;return n(()=>{e=new s({el:o.value,xAxis:{show:!0,data:["        2021","2022","2023","2024","2025","2026        "]},series:[{smooth:!0,data:[120,230,220,907,150,101]}],isPoint:!1,onSliderIndexChange(r,a){console.log(r,a)}})}),t("div",null,t("div",{ref:o,style:{height:"160px"}}),t("button",{onclick:()=>e.play()},"播放"),t("button",{onclick:()=>e.pause()},"暂停"))};export{d as default};