import{W as t,h as e,i as s}from"./index-fe8be053.js";const i={email:"email",tel:"tel",url:"url"};export default class extends t{static get params(){return{input:!0,localized:!1,tag:"input",type:"text"}}init(){const t=this.tagName=this.params.tag,{host:s}=this;if(this.ref=s.querySelector(t),!this.ref){const i=e(t);s.appendChild(i),this.ref=i}this.setType(),this.value=null,this.props.disabled=()=>null!=this.transferAttr("disabled",this.ref),this.props.autofocus=()=>null!=this.transferAttr("autofocus",this.ref),this.props.autocomplete=()=>this.transferAttr("autocomplete",this.ref,i[this.params.type]),this.props.pattern=()=>this.transferAttr("pattern",this.ref),this.props.placeholder=()=>this.transferAttr("placeholder",this.ref,"..."),super.init();const{ref:a}=this;if(null==this.value){const e="textarea"===t?a.textContent:a.value;e&&this.setValue(e,!0)}this.setFormValue(),a.addEventListener("input",(t=>{t.stopPropagation(),this.setValue(a.value)})),a.addEventListener("change",(t=>{t.stopPropagation(),this.emit("change",this.value)})),a.addEventListener("blur",(()=>{s.id&&this.emit("nu-change",s.nuId,{bubbles:!0})})),s.nuRef=a,s.hasAttribute("label")&&(s.nuChanged("label",null),s.removeAttribute("aria-label")),s.hasAttribute("labelledby")&&(s.nuChanged("label",null),s.removeAttribute("aria-labelledby")),this.inputGroup=null,this.linkContext("inputgroup",(()=>{this.setEmpty()}),"inputGroup"),s.addEventListener("keydown",(e=>{"input"===t&&"Enter"===e.key&&this.doAction("submit")})),setTimeout((()=>{this.setEmpty()}),500)}setEmpty(){if(!this.ref)return;this.setMod("placeholder",!this.ref.value);const t=this.inputGroup;t&&t.setMod("placeholder",!this.ref.value)}setValue(t,e){s(this.value,t)||(this.value=t,this.setEmpty(),e||this.emit("input",this.value),this.setInputValue(t),this.setFormValue())}setInputValue(t){const{ref:e}=this,s=this.tagName;e&&("textarea"===s?e.textContent!==t&&(e.textContent=t):e.value!==t&&(e.value=t))}setType(){this.ref&&"input"===this.params.tag?this.ref.type=this.params.type:setTimeout((()=>this.setType()))}}
