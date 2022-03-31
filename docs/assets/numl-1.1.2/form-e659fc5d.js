import{w as t,F as e,W as i,i as s,d as r}from"./index-fe8be053.js";const n={email:t=>e(import("./index-121a3ddd.js").then((function(t){return t.i}))).then((e=>!t||e.validate(t))),maxlength:(t,e)=>null==t||t.length<=Number(e),minlength:(t,e)=>null==t||t.length>=Number(e),required:t=>{switch(typeof t){case"string":return t.length>0;case"number":return!Number.isNaN(t);case"boolean":return!0;default:return null!=t}}};function a(t){return"[object Array]"==={}.toString.call(t)}function o(t){return!(a(t)||"object"!=typeof t||!t||t instanceof Blob||t instanceof Date)}function l(){return"function"==typeof FormData}function h(){if(l())return new FormData}function c(t,e){if(e&&e.initialFormData){if("function"!=typeof e.initialFormData.append)throw"initialFormData must have an append function."}else if(!l())throw"This environment does not have global form data. options.initialFormData must be specified.";let i={initialFormData:h(),showLeafArrayIndexes:!0,includeNullValues:!1,mapping:function(t){return"boolean"==typeof t?+t?"1":"0":t}},s=[i,e||{}].reduce((function(t,e){return Object.keys(e).forEach((function(i){t[i]=e[i]})),t}),{});return u(t,s,s.initialFormData)}function u(t,e,i,s){let r=0;for(let n in t){if(t.hasOwnProperty(n)){let l=s||n,h=e.mapping(t[n]);if(s&&o(t)&&(l=s+"["+n+"]"),s&&a(t)&&(l=a(h)||e.showLeafArrayIndexes?s+"["+r+"]":s+"[]"),a(h)||o(h))u(h,e,i,l);else if(h instanceof FileList)for(let t=0;t<h.length;t++)i.append(l+"["+t+"]",h.item(t));else h instanceof Blob?i.append(l,h,h.name):h instanceof Date?i.append(l,h.toISOString()):(null===h&&e.includeNullValues||null!==h)&&void 0!==h&&i.append(l,h)}r++}return i}export default class extends i{static get params(){return{input:!0,primary:!0,provideValue:!1,contextValue:!1}}init(){this.value={},this.validators={},this.checks={},this.fields={},super.init();const{host:t}=this;t.nuSetMod("form",!0),this.value||(this.value={}),this.setContext("form",this),this.context.value=null,this.on("nu-change",(t=>{const e=t.detail;this.fields[e]&&this.verifyData(e)})),this.provideAction("submit",(()=>{this.verifyData().then((t=>{t&&(this.emit("input","formdata"===this.type?c(this.value):{...this.value||{}}),this.control())}))}))}verifyData(t){return(t?Promise.resolve():this.setDirty()).then((()=>this.validate())).then((e=>(this.setErrorProps(t),e)))}connected(){super.connected(),setTimeout((()=>this.validate(!0)))}setValue(t,e){if("object"!=typeof t)return;const i=JSON.stringify(t);JSON.stringify(t)!==this._serializedValue&&t&&(this._serializedValue=i,this.value=t,e||this.validate().then((t=>{t&&this.emit("input",this.value)})),this.control())}setFieldValue(t,e){const{fields:i}=this;s(this.value[t],e)||(null!=e?(this.value[t]=e,i[t]&&this.resetFieldWarning(t)):delete this.value[t],this.validate())}registerCheck(t,e,i,s){this.validators[t]||(this.validators[t]={}),this.checks[t]||(this.checks[t]={}),this.validators[t][i]=s,this.checks[t][i]=e}registerField(t,e){this.fields[t]=e}unregisterCheck(t,e){this.validators[t]&&delete this.validators[t][e],this.checks[t]&&delete this.checks[t][e]}unregisterField(t){delete this.fields[t]}connectForm(){super.connectForm();const t=this.validators;this.validators=Object.create(this.form.validators),Object.keys(t).forEach((e=>{this.validators[e]=t[e]}))}validate(e){return function(e,i){const s=Object.keys(i),r={};return Object.keys(e).forEach((t=>{const i=e[t];"object"==typeof i&&i.$errors&&(r[t]=i.$errors)})),Promise.all(s.map((s=>{const r=i[s];if(!r)return!0;const a=Object.keys(r);return Promise.all(a.map((i=>{const a=r[i],o=n[i];return"function"==typeof a?a(e[s]):o?o(e[s],a):(t("unknown validator",i),!0)}))).then((t=>!t.every((t=>t))&&a.reduce(((e,i,s)=>(t[s]||(e[i]=!0),e)),{})))}))).then((t=>s.reduce(((e,i,s)=>(t[s]&&(e[i]=t[s]),e)),r))).then((()=>!!Object.keys(r).length&&r))}(this.value,this.validators).then((t=>(t?this.value.$errors=t:delete this.value.$errors,!t)))}setDirty(){const t=r(this.host,"[is-form]");return this.dirty=!0,Promise.all(t.map((t=>t.use("form").then((t=>t.setDirty().then((()=>t.validate())).then((()=>t.setErrorProps())))))))}setErrorProps(t){const e=Object.keys(this.validators),i=this.value.$errors||{},s=this.fields,r=this.checks;e.forEach((e=>{if(t&&t!==e)return;const n=Object.keys(this.validators[e]),a=r[e];let o=!1;for(let t of n)i&&i[e]&&i[e][t]&&!o?(o=!0,a[t].setValidity(!1)):a[t].setValidity(!0);s[e]&&s[e].setValidity(!o)}))}resetFieldWarning(t){const e=this.fields[t],i=Object.keys(this.validators[t]||{});for(let e of i){const i=`--check-${t}-${e}`;this.host.style.setProperty(i,"none")}e&&e.setValidity(!0)}}