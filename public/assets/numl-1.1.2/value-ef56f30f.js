import{W as e,i as t,q as n,m as i}from"./index-fe8be053.js";export default class extends e{static get params(){return{provideValue:!1,contextValue:!1}}init(){super.init(),this.linkContext("typedValue",(e=>{(void 0!==e||this.value)&&this.setValue(e)}),"parentValue"),this.value||this.setValue(null)}setValue(e){t(this.value,e)||(this.value=e,this.apply())}fromHostValue(e){super.fromHostValue(e),this.apply()}apply(){let{list:e,value:t}=this;if(null!=e){const s=e?n(this.host,e):i(this.host,"[nu-listbox]");if(s&&s.nuListBox&&s.nuListBox.options.length){const e=s.nuListBox;let n="";if(this.setAria("label",!1),e.multiple){const t=e.value||[];if(t.length){n+='<nu-flex gap flow="row wrap">';const i=[];t.forEach((t=>{const s=e.getOptionByValue(t);s&&(n+=`<nu-badge>${s.host.innerHTML}</nu-badge>`,i.push(s.host.innerText))})),n+="&nbsp;</nu-flex>",this.setAria("label",i.join(","))}}else{const i=e.getOptionByValue(t);i&&(n=i.host.innerHTML,this.setAria("label",i.host.innerText))}return void(n?(this.setMod("placeholder",!1),this.host.innerHTML=n):(this.setMod("placeholder",!0),this.host.innerHTML=this.placeholder||"&nbsp;"))}setTimeout((()=>{null!=this.list&&this.apply()}))}const s=null!=t;if(null==t)t="&nbsp;";else if(t instanceof Date)t=`<nu-datetime value="${String(t)}" date></nu-datetime>`;else if(Array.isArray(t)&&t[0]instanceof Date)t=`\n        <nu-flex gap>\n          <nu-datetime value="${String(t[0])}" date></nu-datetime>\n          <nu-el>–</nu-el>\n          <nu-datetime value="${String(t[1])}" date></nu-datetime>\n        </nu-flex>\n      `;else if("boolean"==typeof t)t=t?'<nu-icon name="check checkmark"></nu-icon>':'<nu-icon name="minus"></nu-icon>';else if(Array.isArray(t))t=`</nu-block>${t.join("</nu-block><nu-block>")}</nu-block>`;else if(t instanceof File)t=t.name;else if(t instanceof FileList){const e=[];for(const n of t)e.push(n.name);t=`</nu-block>${e.join("</nu-block><nu-block>")}</nu-block>`}else"object"==typeof t&&(t=`<pre>${JSON.stringify(t,null,2)}</pre>`);this.host.innerHTML=s?t:this.placeholder||"&nbsp;",this.setMod("placeholder",!s)}}
