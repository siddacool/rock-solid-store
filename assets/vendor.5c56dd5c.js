function _(){}function O(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function T(){return Object.create(null)}function m(t){t.forEach(M)}function F(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function at(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function G(t){return Object.keys(t).length===0}function J(t,...n){if(t==null)return _;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(J(n,e))}function dt(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?O(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)u[l]=n.dirty[l]|c[l];return u}return n.dirty|c}return n.dirty}function ht(t,n,e,i,c,u){if(c){const o=L(n,e,i,u);t.p(o,c)}}function mt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function pt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function bt(t){return t??""}let $=!1;function K(){$=!0}function Q(){$=!1}function R(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const f=n[s];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=s?c+1:R(1,c,g=>n[e[g]].claim_order,s))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const u=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);u.reverse(),o.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<o.length;r++){for(;s<u.length&&o[r].claim_order>=u[s].claim_order;)s++;const f=s<u.length?u[s]:null;t.insertBefore(o[r],f)}}function U(t,n){if($){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){$&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function xt(){return v(" ")}function $t(){return v("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,n,e,i,c=!1){tt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function z(t,n,e,i){return I(t,c=>c.nodeName===n,c=>{const u=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||u.push(l.name)}u.forEach(o=>c.removeAttribute(o))},()=>i(n))}function kt(t,n,e){return z(t,n,e,X)}function vt(t,n,e){return z(t,n,e,Y)}function nt(t,n){return I(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function St(t){return nt(t," ")}function Nt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e){t.classList[e?"add":"remove"](n)}function et(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}let p;function b(t){p=t}function S(){if(!p)throw new Error("Function called outside component initialization");return p}function qt(t){S().$$.on_mount.push(t)}function At(t){S().$$.on_destroy.push(t)}function Ct(){const t=S();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const c=et(n,e);i.slice().forEach(u=>{u.call(t,c)})}}}function Mt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const y=[],B=[],w=[],D=[],it=Promise.resolve();let N=!1;function ct(){N||(N=!0,it.then(H))}function j(t){w.push(t)}const q=new Set;let E=0;function H(){const t=p;do{for(;E<y.length;){const n=y[E];E++,b(n),rt(n.$$)}for(b(null),y.length=0,E=0;B.length;)B.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];q.has(e)||(q.add(e),e())}w.length=0}while(y.length);for(;D.length;)D.pop()();N=!1,q.clear(),b(t)}function rt(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const k=new Set;let d;function Tt(){d={r:0,c:[],p:d}}function Lt(){d.r||m(d.c),d=d.p}function ot(t,n){t&&t.i&&(k.delete(t),t.i(n))}function It(t,n,e,i){if(t&&t.o){if(k.has(t))return;k.add(t),d.c.push(()=>{k.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function zt(t,n){const e={},i={},c={$$scope:1};let u=t.length;for(;u--;){const o=t[u],l=n[u];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[u]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Bt(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t){t&&t.c()}function Ht(t,n){t&&t.l(n)}function lt(t,n,e,i){const{fragment:c,on_mount:u,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||j(()=>{const r=u.map(M).filter(F);o?o.push(...r):m(r),t.$$.on_mount=[]}),l.forEach(j)}function st(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ut(t,n){t.$$.dirty[0]===-1&&(y.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ot(t,n,e,i,c,u,o,l=[-1]){const r=p;b(t);const s=t.$$={fragment:null,ctx:null,props:u,update:_,not_equal:c,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:T(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(s.root);let f=!1;if(s.ctx=e?e(t,n.props||{},(a,g,...A)=>{const C=A.length?A[0]:g;return s.ctx&&c(s.ctx[a],s.ctx[a]=C)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](C),f&&ut(t,a)),g}):[],s.update(),f=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){K();const a=Z(n.target);s.fragment&&s.fragment.l(a),a.forEach(V)}else s.fragment&&s.fragment.c();n.intro&&ot(t.$$.fragment),lt(t,n.target,n.anchor,n.customElement),Q(),H()}b(r)}class Ft{$destroy(){st(this,1),this.$destroy=_}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const h=[];function Pt(t,n=_){let e;const i=new Set;function c(l){if(P(t,l)&&(t=l,e)){const r=!h.length;for(const s of i)s[1](),h.push(s,t);if(r){for(let s=0;s<h.length;s+=2)h[s][0](h[s+1]);h.length=0}}}function u(l){c(l(t))}function o(l,r=_){const s=[l,r];return i.add(s),i.size===1&&(e=n(c)||_),l(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:c,update:u,subscribe:o}}async function Gt(t,n,e){const i=async()=>{var c,u;const o=document.querySelectorAll(`astro-root[uid="${t}"]`),l=(u=(c=o[0].querySelector("astro-fragment"))==null?void 0:c.innerHTML)!=null?u:null,r=await e();for(const s of o)r(s,l)};"requestIdleCallback"in window?window.requestIdleCallback(i):setTimeout(i,200)}export{$t as A,vt as B,St as C,U as D,Tt as E,Lt as F,Pt as G,at as H,gt as I,ft as J,qt as K,jt as L,wt as M,Mt as N,Ct as O,Gt as P,zt as Q,Bt as R,Ft as S,O as T,pt as U,kt as a,Z as b,dt as c,V as d,X as e,Et as f,yt as g,mt as h,Ot as i,_t as j,It as k,_ as l,v as m,bt as n,nt as o,Nt as p,Dt as q,Ht as r,P as s,ot as t,ht as u,lt as v,st as w,At as x,Y as y,xt as z};