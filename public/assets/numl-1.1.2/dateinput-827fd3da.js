import{S as e,i as n,s as a,e as t,a as i,b as d,c as r,d as s,l as o,n as l,f as u,k as p}from"./index-ed13919c.js";import{s as c}from"./index-41de65a4.js";function g(e){let n,a,p,c,g,m,h,v,b;return{c(){n=t("nu-pane"),a=t("nu-value"),p=i(),c=t("nu-icon"),g=i(),m=t("nu-popup"),h=t("nu-datepicker"),d(a,"grow","1"),d(a,"placeholder",e[0]),d(c,"name","calendar-outline"),d(c,"move","0 (1x / -4)"),d(n,"gap",""),d(h,"value",e[2]),d(h,"link-value",""),d(h,"mode",e[1]),d(h,"begin",e[3]),d(h,"end",e[4]),d(m,"width","18 min-content"),d(m,"padding","")},m(t,i){r(t,n,i),s(n,a),s(n,p),s(n,c),r(t,g,i),r(t,m,i),s(m,h),v||(b=o(h,"input",e[5]),v=!0)},p(e,[n]){1&n&&d(a,"placeholder",e[0]),4&n&&d(h,"value",e[2]),2&n&&d(h,"mode",e[1]),8&n&&d(h,"begin",e[3]),16&n&&d(h,"end",e[4])},i:l,o:l,d(e){e&&u(n),e&&u(g),e&&u(m),v=!1,b()}}}function m(e,n,a){let t,{placeholder:i}=n,{mode:d}=n,{value:r}=n,{begin:s}=n,{end:o}=n,{host:l}=n;return p(),r&&c(Array.isArray(r)?r[0]:new Date(String(r).split("|")[0])),r&&c(Array.isArray(r)?r[1]||r[0]:new Date(String(r).split("|")[1]||String(r).split("|")[0])),e.$$set=e=>{"placeholder"in e&&a(0,i=e.placeholder),"mode"in e&&a(1,d=e.mode),"value"in e&&a(2,r=e.value),"begin"in e&&a(3,s=e.begin),"end"in e&&a(4,o=e.end),"host"in e&&a(6,l=e.host)},e.$$.update=()=>{2&e.$$.dirty&&a(7,t="range"===d),192&e.$$.dirty&&l.setAttribute("type",t?"daterange":"date")},[i,d,r,s,o,function(e){e.detail},l,t]}export default class extends e{constructor(e){super(),n(this,e,m,g,a,{placeholder:0,mode:1,value:2,begin:3,end:4,host:6})}}
