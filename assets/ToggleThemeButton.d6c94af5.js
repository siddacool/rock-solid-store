import{S as _,i as p,s as g,c as T,e as k,a as v,b as d,d as c,f as n,g as f,H as B,u as j,h as M,j as S,t as $,k as b,I as E,q as I,r as q,v as x,w as L,J as C,A as w,y as h,B as m,D as y}from"./vendor.f39d2ac6.js";/* empty css                                                        */function z(a){let e,t,o,s;const r=a[1].default,l=T(r,a,a[0],null);return{c(){e=k("button"),l&&l.c(),this.h()},l(i){e=v(i,"BUTTON",{class:!0});var u=d(e);l&&l.l(u),u.forEach(c),this.h()},h(){n(e,"class","icon-button svelte-6w0ucy")},m(i,u){f(i,e,u),l&&l.m(e,null),t=!0,o||(s=B(e,"click",a[2]),o=!0)},p(i,[u]){l&&l.p&&(!t||u&1)&&j(l,r,i,i[0],t?S(r,i[0],u,null):M(i[0]),null)},i(i){t||($(l,i),t=!0)},o(i){b(l,i),t=!1},d(i){i&&c(e),l&&l.d(i),o=!1,s()}}}function A(a,e,t){let{$$slots:o={},$$scope:s}=e;function r(l){E.call(this,a,l)}return a.$$set=l=>{"$$scope"in l&&t(0,s=l.$$scope)},[s,o,r]}class D extends _{constructor(e){super();p(this,e,A,z,g,{})}}function H(a){let e,t;return{c(){e=h("svg"),t=h("path"),this.h()},l(o){e=m(o,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var s=d(e);t=m(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),d(t).forEach(c),s.forEach(c),this.h()},h(){n(t,"stroke-linecap","round"),n(t,"stroke-linejoin","round"),n(t,"stroke-width","2"),n(t,"d","M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"),n(e,"class","w-6 h-6"),n(e,"fill","none"),n(e,"stroke","currentColor"),n(e,"viewBox","0 0 24 24"),n(e,"xmlns","http://www.w3.org/2000/svg")},m(o,s){f(o,e,s),y(e,t)},d(o){o&&c(e)}}}function N(a){let e,t;return{c(){e=h("svg"),t=h("path"),this.h()},l(o){e=m(o,"svg",{class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var s=d(e);t=m(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),d(t).forEach(c),s.forEach(c),this.h()},h(){n(t,"stroke-linecap","round"),n(t,"stroke-linejoin","round"),n(t,"stroke-width","2"),n(t,"d","M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"),n(e,"class","w-6 h-6"),n(e,"fill","none"),n(e,"stroke","currentColor"),n(e,"viewBox","0 0 24 24"),n(e,"xmlns","http://www.w3.org/2000/svg")},m(o,s){f(o,e,s),y(e,t)},d(o){o&&c(e)}}}function J(a){let e;function t(r,l){return r[0]?N:H}let o=t(a),s=o(a);return{c(){s.c(),e=w()},l(r){s.l(r),e=w()},m(r,l){s.m(r,l),f(r,e,l)},p(r,l){o!==(o=t(r))&&(s.d(1),s=o(r),s&&(s.c(),s.m(e.parentNode,e)))},d(r){s.d(r),r&&c(e)}}}function O(a){let e,t,o;return t=new D({props:{$$slots:{default:[J]},$$scope:{ctx:a}}}),t.$on("click",a[1]),{c(){e=k("div"),I(t.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var r=d(e);q(t.$$.fragment,r),r.forEach(c),this.h()},h(){n(e,"class","toggle-theme svelte-183ujb4")},m(s,r){f(s,e,r),x(t,e,null),o=!0},p(s,[r]){const l={};r&5&&(l.$$scope={dirty:r,ctx:s}),t.$set(l)},i(s){o||($(t.$$.fragment,s),o=!0)},o(s){b(t.$$.fragment,s),o=!1},d(s){s&&c(e),L(t)}}}function U(a,e,t){let o=!1;return C(()=>{const r=document.querySelector("body"),l=localStorage.getItem("solid-store-theme")||"";l&&l==="dark"&&(r.classList.add("dark"),t(0,o=!0))}),[o,()=>{const r=document.querySelector("body");r.classList.contains("dark")?(r.classList.remove("dark"),localStorage.setItem("solid-store-theme",""),t(0,o=!1)):(r.classList.add("dark"),localStorage.setItem("solid-store-theme","dark"),t(0,o=!0))}]}class G extends _{constructor(e){super();p(this,e,U,O,g,{})}}export{G as default};
