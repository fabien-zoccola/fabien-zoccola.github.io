import{B as t,d as e}from"./index-fe8be053.js";export default class extends t{init(){this._items=[],this.setContext("menu",this,!0),this.on("keydown",this.onKeyDown.bind(this))}addItem(t){const e=this._items;e.includes(t)||(e.push(t),1===e.length?this.setCurrent(t):t.use("focus").then((t=>t.set("manual"))))}removeItem(t){const e=this._items;e.includes(t)&&(e.splice(e.indexOf(t),1),this.setCurrent(e[0]))}setCurrent(t){const e=this.currentItem;if(t===e)return;const s=!!e&&e.host===document.activeElement;e&&e.host.blur(),t?(this.currentItem=t,this._items.map((e=>{const n=e===t,r=n?"auto":"manual";e.use("focus").then((t=>{if(t.set(r),n&&s){e.host.focus(),t.setEffect(!0);const s=e.host.NuAction;s&&s.isRadio()&&s.set(!0)}}))}))):this.currentItem=null}getItemsInOrder(t,s){return(e(this.host,t||"[nu-menuitem]")||[]).map((t=>t[s||"nuMenuItem"])).filter((t=>this._items.includes(t)))}onKeyDown(t){if(this.disabled)return;const e=this.getItemsInOrder(),s=e.indexOf(this.currentItem);switch(t.key){case"ArrowDown":case"ArrowRight":s<e.length-1&&this.setCurrent(e[s+1]);break;case"ArrowUp":case"ArrowLeft":s>0&&this.setCurrent(e[s-1]);break;case"Home":this.setCurrent(e[0]);break;case"End":this.setCurrent(e[e.length-1]);break;default:return}t.stopPropagation(),t.preventDefault()}}
