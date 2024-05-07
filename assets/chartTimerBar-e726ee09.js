var x=Object.defineProperty;var u=(p,t,e)=>t in p?x(p,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):p[t]=e;var _=(p,t,e)=>(u(p,typeof t!="symbol"?t+"":t,e),e);import"./pl-vue-ddc0d6ad.js";import{c as m}from"./array-4873fd0c.js";class k{constructor(t){_(this,"option",{el:null,slider:{width:2,stroke:"#5879d1",color:"#5879d155"},playSpeed:4,isPoint:!0,xAxis:{data:[]},series:[{smooth:!1,data:[]}]});_(this,"ctx");_(this,"_cfg",{slider:{left:0,right:0},contentH:0,gap:0});_(this,"_backupSilderIndex",[0,0]);_(this,"_timer");Object.assign(this.option,t),this._init(),t.el.appendChild(this.ctx.canvas),this.draw()}_init(){const t=document.createElement("canvas");this.ctx=t.getContext("2d"),this._change(),t.addEventListener("mousemove",e=>{const n=e.offsetX,s=e.offsetY;this._inSlider(n,s)?t.style.cursor="ew-resize":this._inRectangle(n,s)?t.style.cursor="move":t.style.cursor="default"}),t.addEventListener("mousedown",e=>{const n=e.offsetX,s=e.offsetY,o=this,i=o._cfg.slider,l=n-i.left,r=Math.floor(i.right-i.left);function c(a){const d=h=>{o.pause(),a==="block"?(i.left=Math.floor(h.offsetX-l),i.right=i.left+r):i[a]=h.offsetX,i.left>=i.right&&(i.left=i.right-4),i.right<=i.left&&(i.right=i.left+4),i.left<0&&(i.left=0,i.right=i.left+r),i.right>t.width&&(i.right=t.width,i.left=i.right-r),o.draw()};t.addEventListener("mousemove",d);const f=h=>{t.removeEventListener("mousemove",d),document.removeEventListener("mouseup",f)};document.addEventListener("mouseup",f)}this._inSlider(n,s,"left")?c("left"):this._inSlider(n,s,"right")?c("right"):this._inRectangle(n,s)&&c("block")})}_change(){var s,o;const t=this.option.width||this.option.el.offsetWidth,e=this.option.height||this.option.el.offsetHeight;this.ctx.canvas.width=t,this.ctx.canvas.height=e;const n=Object.assign({start:.2,end:.4},this.option.slider);this._cfg.slider={left:Math.floor(((s=this.option.slider)==null?void 0:s.start)||n.start*t),right:Math.ceil(((o=this.option.slider)==null?void 0:o.end)||n.end*t)},this._cfg.contentH=e-(this.option.xAxis.height||24)}refresh(){this._change(),this.draw()}draw(){this.ctx.reset(),this.option.series.forEach(t=>{this._drawData(t)}),this._drawSlider(),this._drawXAxisScaleLine(),this._drawXAxisData()}_drawData(t){const e=this.ctx,{width:n}=e.canvas,s=this._cfg.contentH,o=t.data,i=Math.max(...o),l=n/(o.length-1);this._cfg.gap=l;const r=Object.assign({width:1,stroke:"#5879d1",fill:"#5879d155"},t.line);e.beginPath(),e.lineWidth=r.width,e.strokeStyle=r.stroke;const c=t.smooth,a=[0,Math.ceil(s-o[0]/i*s)];e.moveTo(a[0],a[1]);const d=[a];for(let h=1;h<o.length;h++){const g=[l*h,Math.ceil(s-o[h]/i*s)];c?d.push(g):e.lineTo(...g)}if(c){const h=m(d,s/300);for(let g=1;g<d.length;g++)e.bezierCurveTo(...h[g-1],...d[g])}e.stroke(),e.strokeStyle="transparent",e.lineTo(n,s),e.lineTo(0,s),e.fillStyle=r.fill,e.fill();const f=Object.assign({size:3,stroke:"#5879d1",strokeWidth:1},t.point);if(this.option.isPoint){e.fillStyle=f.fill,e.strokeStyle=f.stroke,e.lineWidth=f.strokeWidth;for(let h=0;h<o.length;h++)e.beginPath(),e.arc(l*h,s-o[h]/i*s,f.size,0,2*Math.PI),e.fill(),e.stroke()}}_drawXAxisScaleLine(){const t=this.ctx,{width:e}=t.canvas,n=this._cfg.contentH,s=Object.assign({width:.5,stroke:"#000"},this.option.xAxis.scale);t.beginPath(),t.strokeStyle=s.stroke,t.lineWidth=s.width,t.moveTo(0,n),t.lineTo(e,n),t.stroke();const o=this.option.xAxis.data,i=this._cfg.gap,l=Object.assign({stroke:"#000"});t.strokeStyle=l.stroke;for(let r=0;r<o.length;r++)t.beginPath(),t.moveTo(i*r,n),t.lineTo(i*r,n+5),t.stroke()}_drawXAxisData(){const t=this.ctx,e=this.option.xAxis,n=e.data,s=Object.assign({color:"#000",size:"12px"},e.font),o=this._cfg.gap,i=this._cfg.contentH;if(e.show){t.beginPath(),t.textAlign="center",t.font=s.size+" Arial",t.fillStyle=s.color;for(let l=0;l<n.length;l++)t.fillText(n[l],o*l,i+20);t.stroke()}}_drawSlider(){const t=this.ctx,{left:e,right:n}=this._cfg.slider,s=this._cfg.contentH,o=this.option.slider;t.beginPath(),t.fillStyle=o.color,t.rect(e,0,n-e,s),t.fill(),t.beginPath(),t.lineWidth=o.width,t.strokeStyle=o.stroke,t.moveTo(e,0),t.lineTo(e,s),t.stroke(),t.beginPath(),t.moveTo(n,0),t.lineTo(n,s),t.stroke(),this._getSliderData()}_getSliderData(){const{left:t,right:e}=this._cfg.slider,n=this.ctx.canvas.width/(this.option.xAxis.data.length-1),s=Math.ceil(t/n),o=Math.floor(e/n),i=this.option.onSliderIndexChange;(this._backupSilderIndex[0]!==s||this._backupSilderIndex[1]!==o)&&(this._backupSilderIndex=[s,o],i&&i(s,o))}_inContent(t){return t>=0&&t<=this._cfg.contentH}_inSlider(t,e,n="both"){const{left:s,right:o}=this._cfg.slider,i=this.option.slider.width,l=this._inContent(e),r=t>=s-i&&t<=s+i;if(n==="left")return r&&l;const c=t>=o-i&&t<=o+i;return n==="right"?c&&l:(r||c)&&l}_inRectangle(t,e){const{left:n,right:s}=this._cfg.slider;return t>=n&&t<=s&&this._inContent(e)}_inPoint(t,e){if(!this.option.isPoint)return!1;const n=this._cfg.gap,{series:s}=this.option;for(let o=0;o<s.length;o++){const i=s[o].data;for(let l=0;l<i.length;l++)console.log(n*l,e)}}isPlay(){return!!this._timer}play(t=!0){if(this.isPlay())return;const e=this.option.playSpeed;this._timer=setInterval(()=>{if(this._cfg.slider.right>=this.ctx.canvas.width){clearInterval(this._timer);return}t&&(this._cfg.slider.left+=e),this._cfg.slider.right+=e,this.draw()},16)}pause(){clearInterval(this._timer),this._timer=null}}export{k as C};
