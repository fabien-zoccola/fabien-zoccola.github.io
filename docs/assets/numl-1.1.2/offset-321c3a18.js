import{B as t,K as e}from"./index-fe8be053.js";export default class extends t{connected(){const{host:t,params:s}=this,{name:o}=s,i=`--${o?`${o}-`:""}offset-x`,n=`--${o?`${o}-`:""}offset-y`,r=e=>{this._active=!0;const s=t.getBoundingClientRect(),o=e.clientX-s.left,r=e.clientY-s.top,h=o/s.width*2-1,c=r/s.height*2-1;t.style.setProperty(i,String(h)),t.style.setProperty(n,String(c))};this.on("mousemove",r),this.on("mouseover",(s=>{r(s),e(t,(()=>{this._active&&this.setMod("offset",!0)}))})),this.on("mouseout",(()=>{this._active=!1,this.setMod("offset",!1),setTimeout((()=>{this._active||(t.style.setProperty(i,"0"),t.style.setProperty(n,"0"))}))}))}}
