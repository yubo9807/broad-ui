var h=Object.defineProperty;var r=(o,t,s)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var e=(o,t,s)=>(r(o,typeof t!="symbol"?t+"":t,s),s);class p{constructor(t={}){e(this,"option",{normal:/data:(.+)?\n\n/});e(this,"_text","");Object.assign(this.option,t)}add(t){this._text+=t;const{normal:s,onMessage:c}=this.option,a=[];for(;;){const n=this._text.match(s);if(!n)break;const i=n[1];a.push(i),this._text=this._text.slice(n[0].length),c&&c(i)}return a}}export{p as S};