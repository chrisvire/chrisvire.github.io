import{S as I,b as A,a as S,G as $,H as b,q as p,k as m,u as f,f as C,I as g,n as y,m as w,C as V,c as Z,p as E,D as x,d as L,E as j,M as q,a2 as F,j as G,g as H,F as N,R as O,r as P,_ as R,w as z,x as B,y as J}from"./index.a8e850eb.mjs";function K(a){let t,e;return{c(){t=$("svg"),e=$("path"),this.h()},l(n){t=b(n,"svg",{fill:!0,xmlns:!0,height:!0,width:!0});var l=p(t);e=b(l,"path",{d:!0}),p(e).forEach(m),l.forEach(m),this.h()},h(){f(e,"d","M12 20q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm0-6q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0-6q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z"),f(t,"fill",a[0]),f(t,"xmlns","http://www.w3.org/2000/svg"),f(t,"height","24"),f(t,"width","24")},m(n,l){C(n,t,l),g(t,e)},p(n,[l]){l&1&&f(t,"fill",n[0])},i:y,o:y,d(n){n&&m(t)}}}function T(a,t,e){let{color:n="black"}=t;return a.$$set=l=>{"color"in l&&e(0,n=l.color)},[n]}class U extends I{constructor(t){super(),A(this,t,T,K,S,{color:0})}}function W(a){const t=e=>{a.contains(e.target)||a.dispatchEvent(new CustomEvent("outclick"))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function M(a,t,e){const n=a.slice();return n[7]=t[e],n}function D(a){let t,e=a[7]+"",n,l,c;function _(){return a[4](a[7])}return{c(){t=w("a"),n=z(e)},l(i){t=E(i,"A",{});var h=p(t);n=B(h,e),h.forEach(m)},m(i,h){C(i,t,h),g(t,n),l||(c=q(t,"click",_),l=!0)},p(i,h){a=i,h&1&&e!==(e=a[7]+"")&&J(n,e)},d(i){i&&m(t),l=!1,c()}}}function X(a){let t,e,n,l,c,_,i,h,k;n=new U({});let u=a[0],r=[];for(let s=0;s<u.length;s+=1)r[s]=D(M(a,u,s));return{c(){t=w("div"),e=w("span"),V(n.$$.fragment),l=Z(),c=w("div");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=E(s,"DIV",{class:!0});var d=p(t);e=E(d,"SPAN",{class:!0});var o=p(e);x(n.$$.fragment,o),o.forEach(m),l=L(d),c=E(d,"DIV",{class:!0});var v=p(c);for(let Q=0;Q<r.length;Q+=1)r[Q].l(v);v.forEach(m),d.forEach(m),this.h()},h(){f(e,"class","dropbtn"),f(c,"class",_="dropdown-content "+(a[1]?"show":"hidden")),f(t,"class","annotation-item-menu annotation-float-right")},m(s,d){C(s,t,d),g(t,e),j(n,e,null),g(t,l),g(t,c);for(let o=0;o<r.length;o+=1)r[o].m(c,null);i=!0,h||(k=[q(e,"click",a[3]),F(W.call(null,t)),q(t,"outclick",a[5])],h=!0)},p(s,[d]){if(d&5){u=s[0];let o;for(o=0;o<u.length;o+=1){const v=M(s,u,o);r[o]?r[o].p(v,d):(r[o]=D(v),r[o].c(),r[o].m(c,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=u.length}(!i||d&2&&_!==(_="dropdown-content "+(s[1]?"show":"hidden")))&&f(c,"class",_)},i(s){i||(G(n.$$.fragment,s),i=!0)},o(s){H(n.$$.fragment,s),i=!1},d(s){s&&m(t),N(n),O(r,s),h=!1,P(k)}}}function Y(a,t,e){const n=R();let{actions:l=[""]}=t,c=!1;function _(u){n("menuaction",{text:u})}const i=()=>e(1,c=!c),h=u=>_(u),k=()=>e(1,c=!1);return a.$$set=u=>{"actions"in u&&e(0,l=u.actions)},[l,c,_,i,h,k]}class et extends I{constructor(t){super(),A(this,t,Y,X,S,{actions:0})}}export{et as C};
