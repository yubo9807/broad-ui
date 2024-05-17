var u=Object.defineProperty;var m=(d,t,i)=>t in d?u(d,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):d[t]=i;var _=(d,t,i)=>(m(d,typeof t!="symbol"?t+"":t,i),i);import"./pl-vue-efdc9048.js";import{c as w,f as v}from"./array-c774e6c2.js";function x(d,t){return new Proxy(d,{get(n,e){const o=n[e];return typeof o=="object"?Array.isArray(n)&&!t[e]?x(o,t[0]):x(o,t[e]):o===void 0?t[e]:o}})}class P{constructor(t){_(this,"option");_(this,"ctx");_(this,"_cfg",{slider:{left:0,right:0},contentH:0,gap:0});_(this,"_backupSilderIndex",new Array(2));_(this,"_timer");const i={el:null,slider:{start:.2,end:.6,width:2,stroke:"#5879d1",color:"#5879d155"},playSpeed:4,isPoint:!0,xAxis:{show:!0,data:[],font:{size:"12px",color:"#666",textAlign:"center"},line:{width:1,stroke:"#5879d1"},scale:{stroke:"#5879d1"}},series:[{smooth:!1,data:[],line:{width:1,stroke:"#5879d1",fill:"#5879d155"},point:{size:3,stroke:"#5879d1",strokeWidth:1,fill:"#5879d155"}}]};this.option=x(t,i),this._init(),t.el.appendChild(this.ctx.canvas),this.draw()}_init(){const t=document.createElement("canvas");this.ctx=t.getContext("2d"),this._change();const i=this.option.slider;this._cfg.slider={left:i.start*t.width,right:i.end*t.width},t.addEventListener("mousemove",n=>{const e=n.offsetX,o=n.offsetY;this._inSlider(e,o)?t.style.cursor="ew-resize":this._inRectangle(e,o)?t.style.cursor="move":t.style.cursor="default"}),t.addEventListener("mousedown",n=>{const e=n.offsetX,o=n.offsetY,r=this,s=r._cfg.slider,h=e-s.left,a=Math.floor(s.right-s.left);function f(g){const p=c=>{r.pause(),g==="block"?(s.left=Math.floor(c.offsetX-h),s.right=s.left+a):s[g]=c.offsetX,s.left>=s.right&&(s.left=s.right-4),s.right<=s.left&&(s.right=s.left+4),s.left<0&&(s.left=0,s.right=s.left+a),s.right>t.width&&(s.right=t.width,s.left=s.right-a),r.draw()};t.addEventListener("mousemove",p);const l=c=>{t.removeEventListener("mousemove",p),document.removeEventListener("mouseup",l)};document.addEventListener("mouseup",l)}this._inSlider(e,o,"left")?f("left"):this._inSlider(e,o,"right")?f("right"):this._inRectangle(e,o)&&f("block")})}_change(){const t=this.option.width||this.option.el.offsetWidth,i=this.option.height||this.option.el.offsetHeight;this.ctx.canvas.width=t,this.ctx.canvas.height=i,this._cfg.contentH=i-(this.option.xAxis.height||24)}refresh(){this._change(),this.draw()}draw(){const{width:t,height:i}=this.ctx.canvas;this.ctx.clearRect(0,0,t,i),this.option.series.forEach(n=>{this._drawData(n)}),this._drawSlider(),this._drawXAxisScaleLine(),this._drawXAxisData()}_drawData(t){const i=this.ctx,{width:n}=i.canvas,e=this._cfg.contentH,o=t.data,r=Math.max(...o),s=n/(o.length-1);this._cfg.gap=s;const h=t.line;i.beginPath(),i.lineWidth=h.width,i.strokeStyle=h.stroke;const a=t.smooth,f=[0,Math.ceil(e-o[0]/r*e)];i.moveTo(f[0],f[1]);const g=[f];for(let l=1;l<o.length;l++){const c=[s*l,Math.ceil(e-o[l]/r*e)];a?g.push(c):i.lineTo(...c)}if(a){const l=w(g,e/300);for(let c=1;c<g.length;c++)i.bezierCurveTo(...l[c-1],...g[c])}i.stroke(),i.strokeStyle="transparent",i.lineTo(n,e),i.lineTo(0,e),i.fillStyle=h.fill,i.fill();const p=Object.assign({size:3,stroke:"#5879d1",strokeWidth:1},t.point);if(this.option.isPoint){i.fillStyle=p.fill,i.strokeStyle=p.stroke,i.lineWidth=p.strokeWidth;for(let l=0;l<o.length;l++)i.beginPath(),i.arc(s*l,e-o[l]/r*e,p.size,0,2*Math.PI),i.fill(),i.stroke()}}_drawXAxisScaleLine(){const t=this.ctx,{width:i}=t.canvas,n=this._cfg.contentH,e=Object.assign({width:.5,stroke:"#000"},this.option.xAxis.scale);t.beginPath(),t.strokeStyle=e.stroke,t.lineWidth=e.width,t.moveTo(0,n),t.lineTo(i,n),t.stroke();const o=this.option.xAxis.data,r=this._cfg.gap,s=Object.assign({stroke:"#000"});t.strokeStyle=s.stroke;for(let h=0;h<o.length;h++)t.beginPath(),t.moveTo(r*h,n),t.lineTo(r*h,n+5),t.stroke()}_drawXAxisData(){const t=this.ctx,i=this.option.xAxis,n=i.font,e=v(i.data,t.canvas.width,{fontSize:parseInt(n.size),last:!0}),o=this._cfg.gap,r=this._cfg.contentH;if(i.show){t.beginPath(),t.textAlign=n.textAlign,t.font=n.size+" Arial",t.fillStyle=n.color;for(let s=0;s<e.length;s++)t.fillText(e[s],o*s,r+20);t.stroke()}}_drawSlider(){const t=this.ctx,{left:i,right:n}=this._cfg.slider,e=this._cfg.contentH,o=this.option.slider;t.beginPath(),t.fillStyle=o.color,t.rect(i,0,n-i,e),t.fill(),t.beginPath(),t.lineWidth=o.width,t.strokeStyle=o.stroke,t.moveTo(i,0),t.lineTo(i,e),t.stroke(),t.beginPath(),t.moveTo(n,0),t.lineTo(n,e),t.stroke(),this._getSliderData()}destroy(){this.ctx.canvas.remove()}_getSliderData(){const{left:t,right:i}=this._cfg.slider,n=this.ctx.canvas.width/(this.option.xAxis.data.length-1),e=Math.ceil(t/n),o=Math.floor(i/n);if(this._backupSilderIndex[0]!==e||this._backupSilderIndex[1]!==o){this._backupSilderIndex=[e,o];const r=this.option.onSliderIndexChange;r&&r(e,o)}}_inContent(t){return t>=0&&t<=this._cfg.contentH}_inSlider(t,i,n="both"){const{left:e,right:o}=this._cfg.slider,r=this.option.slider.width,s=this._inContent(i),h=t>=e-r&&t<=e+r;if(n==="left")return h&&s;const a=t>=o-r&&t<=o+r;return n==="right"?a&&s:(h||a)&&s}_inRectangle(t,i){const{left:n,right:e}=this._cfg.slider;return t>=n&&t<=e&&this._inContent(i)}_inPoint(t,i){if(!this.option.isPoint)return!1;const n=this._cfg.gap,{series:e}=this.option;for(let o=0;o<e.length;o++){const r=e[o].data;for(let s=0;s<r.length;s++)console.log(n*s,i)}}get isPlay(){return!!this._timer}play(t=!1){if(this.isPlay)return;this._cfg.slider.right>=this.ctx.canvas.width&&(this._cfg.slider.left=0,this._cfg.slider.right=2);const i=this.option.playSpeed;this._timer=setInterval(()=>{if(this._cfg.slider.right>=this.ctx.canvas.width){clearInterval(this._timer),this._timer=null;const n=this.option.onPlayEnd;n&&n(this.isPlay);return}t&&(this._cfg.slider.left+=i),this._cfg.slider.right+=i,this.draw()},16)}pause(){clearInterval(this._timer),this._timer=null}togglePlay(t=!1){this.isPlay?this.pause():this.play(t)}}export{P as C};