/* empty css                      */import{f as p,i as y}from"./assets/vendor-77e16229.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const l=document.querySelector("button"),g=document.querySelector(".value[data-days]"),S=document.querySelector(".value[data-hours]"),v=document.querySelector(".value[data-minutes]"),b=document.querySelector(".value[data-seconds]");let d,L=Date.now(),c,f;l.disabled=!0;const q={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),d=t[0],d<=L){y.show({message:"Please choose a date in the future",messageColor:"#FF0000",position:"bottomRight"});return}else l.disabled=!1}};p("#datetime-picker",q);l.addEventListener("click",t=>{c=d-Date.now(),f=setInterval(()=>{c-=1e3,w(u(c)),C(c),console.log(c)},1e3),l.disabled=!0});function u(t){const o=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:s,minutes:m,seconds:h}}console.log(u(2e3));console.log(u(14e4));console.log(u(2414e4));function w({days:t,hours:n,minutes:i,seconds:r}){g.textContent=`${a(t)}`,S.textContent=`${a(n)}`,v.textContent=`${a(i)}`,b.textContent=`${a(r)}`}function a(t){return t.toString().padStart(2,"0")}function C(t){t<=1e3&&clearInterval(f)}
//# sourceMappingURL=commonHelpers2.js.map