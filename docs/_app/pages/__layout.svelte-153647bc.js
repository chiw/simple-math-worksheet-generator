import{S as G,i as J,s as j,e as W,c as M,a as F,d as m,b as B,g as x,l as K,n as ve,o as b,p as ke,q as d,k as q,m as R,F as C,G as We,T as we,w as v,x as k,y as w,B as T,H as Te,I as Ne,D as Ge,J as Je,K as U,L as te,M as H,N as L,O as Ee,P as Se,Q as z,t as ae,h as ie,R as je,U as Ke,V as oe,W as ge,X as Me,Y as Xe,j as Ye,Z as Ze,_ as et,$ as tt,a0 as nt,a1 as rt,a2 as st}from"../chunks/vendor-e51eec28.js";import{A as V,M as Ce,Q as lt,p as fe,q as pe,w as at,W as it,t as ne,a as re,b as Fe,c as ot}from"../chunks/page-config-stores-bb3ab1f1.js";function Be(s,e,n){const t=s.slice();return t[7]=e[n],t}function He(s){let e;return{c(){e=W("legend"),this.h()},l(n){e=M(n,"LEGEND",{class:!0});var t=F(e);t.forEach(m),this.h()},h(){B(e,"class","bx--label")},m(n,t){x(n,e,t),e.innerHTML=s[1]},p(n,t){t&2&&(e.innerHTML=n[1])},d(n){n&&m(e)}}}function ut(s){let e,n;function t(...r){return s[6](s[7],...r)}return e=new we({props:{type:s[4],$$slots:{default:[ct]},$$scope:{ctx:s}}}),e.$on("click",t),{c(){v(e.$$.fragment)},l(r){k(e.$$.fragment,r)},m(r,l){w(e,r,l),n=!0},p(r,l){s=r;const a={};l&16&&(a.type=s[4]),l&1028&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(r){n||(d(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){T(e,r)}}}function ft(s){let e,n;return e=new we({props:{type:s[3],$$slots:{default:[_t]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const l={};r&8&&(l.type=t[3]),r&1028&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function ct(s){let e,n=s[7]+"",t;return{c(){e=new Te,t=K(),this.h()},l(r){e=Ne(r),t=K(),this.h()},h(){e.a=t},m(r,l){e.m(n,r,l),x(r,t,l)},p(r,l){l&4&&n!==(n=r[7]+"")&&e.p(n)},d(r){r&&m(t),r&&e.d()}}}function _t(s){let e,n=s[7]+"",t;return{c(){e=new Te,t=K(),this.h()},l(r){e=Ne(r),t=K(),this.h()},h(){e.a=t},m(r,l){e.m(n,r,l),x(r,t,l)},p(r,l){l&4&&n!==(n=r[7]+"")&&e.p(n)},d(r){r&&m(t),r&&e.d()}}}function Le(s){let e,n,t,r;const l=[ft,ut],a=[];function f(o,_){return o[0]===o[7]?0:1}return e=f(s),n=a[e]=l[e](s),{c(){n.c(),t=K()},l(o){n.l(o),t=K()},m(o,_){a[e].m(o,_),x(o,t,_),r=!0},p(o,_){let i=e;e=f(o),e===i?a[e].p(o,_):(ve(),b(a[i],1,1,()=>{a[i]=null}),ke(),n=a[e],n?n.p(o,_):(n=a[e]=l[e](o),n.c()),d(n,1),n.m(t.parentNode,t))},i(o){r||(d(n),r=!0)},o(o){b(n),r=!1},d(o){a[e].d(o),o&&m(t)}}}function gt(s){let e,n,t,r,l,a=s[1]&&He(s),f=s[2],o=[];for(let i=0;i<f.length;i+=1)o[i]=Le(Be(s,f,i));const _=i=>b(o[i],1,1,()=>{o[i]=null});return{c(){e=W("div"),n=W("fieldset"),a&&a.c(),t=q(),r=W("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=M(i,"DIV",{class:!0});var g=F(e);n=M(g,"FIELDSET",{class:!0});var u=F(n);a&&a.l(u),t=R(u),r=M(u,"DIV",{class:!0});var $=F(r);for(let N=0;N<o.length;N+=1)o[N].l($);$.forEach(m),u.forEach(m),g.forEach(m),this.h()},h(){B(r,"class","tag-group svelte-1am55qj"),B(n,"class","bx--radio-button-group bx--radio-button-group--label-right"),B(e,"class","bx--form-item svelte-1am55qj")},m(i,g){x(i,e,g),C(e,n),a&&a.m(n,null),C(n,t),C(n,r);for(let u=0;u<o.length;u+=1)o[u].m(r,null);l=!0},p(i,[g]){if(i[1]?a?a.p(i,g):(a=He(i),a.c(),a.m(n,t)):a&&(a.d(1),a=null),g&61){f=i[2];let u;for(u=0;u<f.length;u+=1){const $=Be(i,f,u);o[u]?(o[u].p($,g),d(o[u],1)):(o[u]=Le($),o[u].c(),d(o[u],1),o[u].m(r,null))}for(ve(),u=f.length;u<o.length;u+=1)_(u);ke()}},i(i){if(!l){for(let g=0;g<f.length;g+=1)d(o[g]);l=!0}},o(i){o=o.filter(Boolean);for(let g=0;g<o.length;g+=1)b(o[g]);l=!1},d(i){i&&m(e),a&&a.d(),We(o,i)}}}function pt(s,e,n){let{labelText:t=void 0}=e,{selected:r=void 0}=e,{options:l=[]}=e,{selectedColor:a="blue"}=e,{unselectedColor:f="gray"}=e;function o(i,g){n(0,r=g)}const _=(i,g)=>{g.preventDefault(),o(g,i)};return s.$$set=i=>{"labelText"in i&&n(1,t=i.labelText),"selected"in i&&n(0,r=i.selected),"options"in i&&n(2,l=i.options),"selectedColor"in i&&n(3,a=i.selectedColor),"unselectedColor"in i&&n(4,f=i.unselectedColor)},[r,t,l,a,f,o,_]}class Ae extends G{constructor(e){super();J(this,e,pt,gt,j,{labelText:1,selected:0,options:2,selectedColor:3,unselectedColor:4})}}function ze(s,e,n){const t=s.slice();return t[9]=e[n],t}function Qe(s){let e;return{c(){e=W("legend"),this.h()},l(n){e=M(n,"LEGEND",{class:!0});var t=F(e);t.forEach(m),this.h()},h(){B(e,"class","bx--label")},m(n,t){x(n,e,t),e.innerHTML=s[1]},p(n,t){t&2&&(e.innerHTML=n[1])},d(n){n&&m(e)}}}function $t(s){let e,n;function t(...r){return s[8](s[9],...r)}return e=new we({props:{type:s[4],$$slots:{default:[dt]},$$scope:{ctx:s}}}),e.$on("click",t),{c(){v(e.$$.fragment)},l(r){k(e.$$.fragment,r)},m(r,l){w(e,r,l),n=!0},p(r,l){s=r;const a={};l&16&&(a.type=s[4]),l&4100&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(r){n||(d(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){T(e,r)}}}function mt(s){let e,n;function t(...r){return s[7](s[9],...r)}return e=new we({props:{type:s[3],$$slots:{default:[ht]},$$scope:{ctx:s}}}),e.$on("click",t),{c(){v(e.$$.fragment)},l(r){k(e.$$.fragment,r)},m(r,l){w(e,r,l),n=!0},p(r,l){s=r;const a={};l&8&&(a.type=s[3]),l&4100&&(a.$$scope={dirty:l,ctx:s}),e.$set(a)},i(r){n||(d(e.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),n=!1},d(r){T(e,r)}}}function dt(s){let e,n=s[9]+"",t;return{c(){e=new Te,t=K(),this.h()},l(r){e=Ne(r),t=K(),this.h()},h(){e.a=t},m(r,l){e.m(n,r,l),x(r,t,l)},p(r,l){l&4&&n!==(n=r[9]+"")&&e.p(n)},d(r){r&&m(t),r&&e.d()}}}function ht(s){let e,n=s[9]+"",t;return{c(){e=new Te,t=K(),this.h()},l(r){e=Ne(r),t=K(),this.h()},h(){e.a=t},m(r,l){e.m(n,r,l),x(r,t,l)},p(r,l){l&4&&n!==(n=r[9]+"")&&e.p(n)},d(r){r&&m(t),r&&e.d()}}}function Ue(s){let e,n,t,r,l;const a=[mt,$t],f=[];function o(_,i){return i&5&&(e=null),e==null&&(e=!!_[0].includes(_[9])),e?0:1}return n=o(s,-1),t=f[n]=a[n](s),{c(){t.c(),r=K()},l(_){t.l(_),r=K()},m(_,i){f[n].m(_,i),x(_,r,i),l=!0},p(_,i){let g=n;n=o(_,i),n===g?f[n].p(_,i):(ve(),b(f[g],1,1,()=>{f[g]=null}),ke(),t=f[n],t?t.p(_,i):(t=f[n]=a[n](_),t.c()),d(t,1),t.m(r.parentNode,r))},i(_){l||(d(t),l=!0)},o(_){b(t),l=!1},d(_){f[n].d(_),_&&m(r)}}}function bt(s){let e,n,t,r,l,a=s[1]&&Qe(s),f=s[2],o=[];for(let i=0;i<f.length;i+=1)o[i]=Ue(ze(s,f,i));const _=i=>b(o[i],1,1,()=>{o[i]=null});return{c(){e=W("div"),n=W("fieldset"),a&&a.c(),t=q(),r=W("div");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=M(i,"DIV",{class:!0});var g=F(e);n=M(g,"FIELDSET",{class:!0});var u=F(n);a&&a.l(u),t=R(u),r=M(u,"DIV",{class:!0});var $=F(r);for(let N=0;N<o.length;N+=1)o[N].l($);$.forEach(m),u.forEach(m),g.forEach(m),this.h()},h(){B(r,"class","tag-group svelte-1am55qj"),B(n,"class","bx--radio-button-group bx--radio-button-group--label-right"),B(e,"class","bx--form-item svelte-1am55qj")},m(i,g){x(i,e,g),C(e,n),a&&a.m(n,null),C(n,t),C(n,r);for(let u=0;u<o.length;u+=1)o[u].m(r,null);l=!0},p(i,[g]){if(i[1]?a?a.p(i,g):(a=Qe(i),a.c(),a.m(n,t)):a&&(a.d(1),a=null),g&125){f=i[2];let u;for(u=0;u<f.length;u+=1){const $=ze(i,f,u);o[u]?(o[u].p($,g),d(o[u],1)):(o[u]=Ue($),o[u].c(),d(o[u],1),o[u].m(r,null))}for(ve(),u=f.length;u<o.length;u+=1)_(u);ke()}},i(i){if(!l){for(let g=0;g<f.length;g+=1)d(o[g]);l=!0}},o(i){o=o.filter(Boolean);for(let g=0;g<o.length;g+=1)b(o[g]);l=!1},d(i){i&&m(e),a&&a.d(),We(o,i)}}}function vt(s,e,n){let{labelText:t=void 0}=e,{selected:r=[]}=e,{options:l=[]}=e,{selectedColor:a="blue"}=e,{unselectedColor:f="gray"}=e;function o(u,$){r&&n(0,r=r.filter(N=>N!==$))}function _(u,$){r?r.includes($)||n(0,r=[...r,$]):n(0,r=[$])}const i=(u,$)=>{$.preventDefault(),o($,u)},g=(u,$)=>{$.preventDefault(),_($,u)};return s.$$set=u=>{"labelText"in u&&n(1,t=u.labelText),"selected"in u&&n(0,r=u.selected),"options"in u&&n(2,l=u.options),"selectedColor"in u&&n(3,a=u.selectedColor),"unselectedColor"in u&&n(4,f=u.unselectedColor)},[r,t,l,a,f,o,_,i,g]}class kt extends G{constructor(e){super();J(this,e,vt,bt,j,{labelText:1,selected:0,options:2,selectedColor:3,unselectedColor:4})}}function wt(){const{subscribe:s,set:e}=Ge(V.DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG);return{subscribe:s,set:n=>e(n),reset:()=>e(V.DEFAULT_TWO_NUMBERS_QUESTION_GENERATOR_CONFIG)}}const ue=wt(),Tt=Number,Nt=s=>s.split(",").reduce((e,n)=>{if(!n.includes("-"))return e.push(Tt(n)),e;const[t,r]=n.split("-");for(let l=Number(t);l<=r;l++)e.push(l);return e},[]),Et=s=>s.reduce((e,n)=>e+n),St=s=>s.reduce((e,n)=>e-n),Ct=s=>s.reduce((e,n)=>e*n),At=s=>s.reduce((e,n)=>e/n),xt=new Map([[Ce.PLUS,Et],[Ce.MINUS,St],[Ce.TIMES,Ct],[Ce.DIVIDE,At]]);class Dt{static generateTwoNumbersQuestions(e,n,t){console.log("twoNumbersQuestionGeneratorConfig",e,"questionsPerPage",n,"pageSize",t);let r=this.generateTwoNumbersQuestionsWithParam(e.firstNumRange,e.firstNumReverse,e.secondNumRange,e.secondNumReverse,e.questionOperator,e.allowNegative,e.randomOrder,n,t);return console.log("generateTwoNumbersQuestions worksheetData: ",r),r}static generateTwoNumbersQuestionsWithParam(e,n,t,r,l,a,f,o,_){let i=[],g=this.parseRange(e,n),u=this.parseRange(t,r);for(const $ of l)for(const N of g)for(const p of u){let A=xt.get($)([N,p]);!a&&A<0||i.push(this.createTwoNumbersQuestionType(N,p,$,A))}return f&&this.shuffleArray(i),[{questions:i}]}static createTwoNumbersQuestionType(e,n,t,r){return{questionType:lt.TWO_NUMBERS,num1:e,num2:n,operator:t,answer:r}}static generateWorksheets(e,n,t){return[...Array(Math.ceil(e.length/n))].map(r=>({questions:e.splice(0,n)}))}static generateNumArr(e,n){let t=[...Array(e).keys()].map(r=>r+1);return n?t.reverse():t}static parseRange(e,n){let t=Nt(e);return n?t.reverse():t}static shuffleArray(e){for(let n=e.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}}}function Ot(s){let e;return{c(){e=ae("Generate Worksheet")},l(n){e=ie(n,"Generate Worksheet")},m(n,t){x(n,e,t)},d(n){n&&m(e)}}}function qt(s){let e,n,t,r,l,a,f,o,_,i,g,u,$,N,p,A,h,D,I,X,P,S,Q;function Z(c){s[2](c)}let ee={labelText:"1st number range",placeholder:""};s[0].firstNumRange!==void 0&&(ee.value=s[0].firstNumRange),e=new te({props:ee}),H.push(()=>L(e,"value",Z));function ce(c){s[3](c)}let Y={labelText:"Reverse"};s[0].firstNumReverse!==void 0&&(Y.checked=s[0].firstNumReverse),r=new Ee({props:Y}),H.push(()=>L(r,"checked",ce));function se(c){s[4](c)}let le={labelText:"2nd number range",placeholder:""};s[0].secondNumRange!==void 0&&(le.value=s[0].secondNumRange),f=new te({props:le}),H.push(()=>L(f,"value",se));function _e(c){s[5](c)}let $e={labelText:"Reverse"};s[0].secondNumReverse!==void 0&&($e.checked=s[0].secondNumReverse),i=new Ee({props:$e}),H.push(()=>L(i,"checked",_e));function E(c){s[6](c)}let y={labelText:"Allow negative"};s[0].allowNegative!==void 0&&(y.checked=s[0].allowNegative),$=new Ee({props:y}),H.push(()=>L($,"checked",E));function he(c){s[7](c)}let me={labelText:"Random order"};s[0].randomOrder!==void 0&&(me.checked=s[0].randomOrder),A=new Ee({props:me}),H.push(()=>L(A,"checked",he));function be(c){s[8](c)}let de={labelText:"Operator",options:V.OPERATOR_OPTIONS};return s[0].questionOperator!==void 0&&(de.selected=s[0].questionOperator),I=new kt({props:de}),H.push(()=>L(I,"selected",be)),S=new Se({props:{type:"submit",$$slots:{default:[Ot]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment),t=q(),v(r.$$.fragment),a=q(),v(f.$$.fragment),_=q(),v(i.$$.fragment),u=q(),v($.$$.fragment),p=q(),v(A.$$.fragment),D=q(),v(I.$$.fragment),P=q(),v(S.$$.fragment)},l(c){k(e.$$.fragment,c),t=R(c),k(r.$$.fragment,c),a=R(c),k(f.$$.fragment,c),_=R(c),k(i.$$.fragment,c),u=R(c),k($.$$.fragment,c),p=R(c),k(A.$$.fragment,c),D=R(c),k(I.$$.fragment,c),P=R(c),k(S.$$.fragment,c)},m(c,O){w(e,c,O),x(c,t,O),w(r,c,O),x(c,a,O),w(f,c,O),x(c,_,O),w(i,c,O),x(c,u,O),w($,c,O),x(c,p,O),w(A,c,O),x(c,D,O),w(I,c,O),x(c,P,O),w(S,c,O),Q=!0},p(c,O){const xe={};!n&&O&1&&(n=!0,xe.value=c[0].firstNumRange,z(()=>n=!1)),e.$set(xe);const De={};!l&&O&1&&(l=!0,De.checked=c[0].firstNumReverse,z(()=>l=!1)),r.$set(De);const Oe={};!o&&O&1&&(o=!0,Oe.value=c[0].secondNumRange,z(()=>o=!1)),f.$set(Oe);const qe={};!g&&O&1&&(g=!0,qe.checked=c[0].secondNumReverse,z(()=>g=!1)),i.$set(qe);const Re={};!N&&O&1&&(N=!0,Re.checked=c[0].allowNegative,z(()=>N=!1)),$.$set(Re);const Ie={};!h&&O&1&&(h=!0,Ie.checked=c[0].randomOrder,z(()=>h=!1)),A.$set(Ie);const Pe={};!X&&O&1&&(X=!0,Pe.selected=c[0].questionOperator,z(()=>X=!1)),I.$set(Pe);const ye={};O&4096&&(ye.$$scope={dirty:O,ctx:c}),S.$set(ye)},i(c){Q||(d(e.$$.fragment,c),d(r.$$.fragment,c),d(f.$$.fragment,c),d(i.$$.fragment,c),d($.$$.fragment,c),d(A.$$.fragment,c),d(I.$$.fragment,c),d(S.$$.fragment,c),Q=!0)},o(c){b(e.$$.fragment,c),b(r.$$.fragment,c),b(f.$$.fragment,c),b(i.$$.fragment,c),b($.$$.fragment,c),b(A.$$.fragment,c),b(I.$$.fragment,c),b(S.$$.fragment,c),Q=!1},d(c){T(e,c),c&&m(t),T(r,c),c&&m(a),T(f,c),c&&m(_),T(i,c),c&&m(u),T($,c),c&&m(p),T(A,c),c&&m(D),T(I,c),c&&m(P),T(S,c)}}}function Rt(s){let e,n;return e=new Je({props:{$$slots:{default:[qt]},$$scope:{ctx:s}}}),e.$on("submit",s[9]),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,[r]){const l={};r&4097&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function It(s,e,n){let t,r,l;U(s,fe,p=>n(10,t=p)),U(s,pe,p=>n(11,r=p)),U(s,ue,p=>n(0,l=p));function a(){at.update(p=>Dt.generateTwoNumbersQuestions(l,r,t))}function f(p){s.$$.not_equal(l.firstNumRange,p)&&(l.firstNumRange=p,ue.set(l))}function o(p){s.$$.not_equal(l.firstNumReverse,p)&&(l.firstNumReverse=p,ue.set(l))}function _(p){s.$$.not_equal(l.secondNumRange,p)&&(l.secondNumRange=p,ue.set(l))}function i(p){s.$$.not_equal(l.secondNumReverse,p)&&(l.secondNumReverse=p,ue.set(l))}function g(p){s.$$.not_equal(l.allowNegative,p)&&(l.allowNegative=p,ue.set(l))}function u(p){s.$$.not_equal(l.randomOrder,p)&&(l.randomOrder=p,ue.set(l))}function $(p){s.$$.not_equal(l.questionOperator,p)&&(l.questionOperator=p,ue.set(l))}return[l,a,f,o,_,i,g,u,$,p=>{p.preventDefault(),a()}]}class Pt extends G{constructor(e){super();J(this,e,It,Rt,j,{})}}function yt(s){let e;return{c(){e=ae("Print Worksheet")},l(n){e=ie(n,"Print Worksheet")},m(n,t){x(n,e,t)},d(n){n&&m(e)}}}function Wt(s){let e,n;return e=new Se({props:{$$slots:{default:[yt]},$$scope:{ctx:s}}}),e.$on("click",s[1]),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,[r]){const l={};r&8&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Ve(s){var e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.media="print",n.styleSheet?n.styleSheet.cssText=s:n.appendChild(document.createTextNode(s)),e.appendChild(n),window.print()}function Mt(s,e,n){let t;U(s,fe,a=>n(2,t=a));function r(){let a="@page { size: A4 landscape; }",f="@page { size: A4; }";t===it.A4_LANDSCAPE?Ve(a):Ve(f)}return[r,a=>{a.preventDefault(),r()}]}class Ft extends G{constructor(e){super();J(this,e,Mt,Wt,j,{})}}function Bt(s){let e,n,t;function r(a){s[1](a)}let l={label:"Questions per page",placeholder:"",min:1};return s[0]!==void 0&&(l.value=s[0]),e=new je({props:l}),H.push(()=>L(e,"value",r)),{c(){v(e.$$.fragment)},l(a){k(e.$$.fragment,a)},m(a,f){w(e,a,f),t=!0},p(a,[f]){const o={};!n&&f&1&&(n=!0,o.value=a[0],z(()=>n=!1)),e.$set(o)},i(a){t||(d(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){T(e,a)}}}function Ht(s,e,n){let t;U(s,pe,l=>n(0,t=l));function r(l){t=l,pe.set(t)}return[t,r]}class Lt extends G{constructor(e){super();J(this,e,Ht,Bt,j,{})}}function zt(s){let e,n,t;function r(a){s[1](a)}let l={labelText:"Page Size",options:V.WORKSHEET_SIZE_OPTIONS};return s[0]!==void 0&&(l.selected=s[0]),e=new Ae({props:l}),H.push(()=>L(e,"selected",r)),{c(){v(e.$$.fragment)},l(a){k(e.$$.fragment,a)},m(a,f){w(e,a,f),t=!0},p(a,[f]){const o={};!n&&f&1&&(n=!0,o.selected=a[0],z(()=>n=!1)),e.$set(o)},i(a){t||(d(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){T(e,a)}}}function Qt(s,e,n){let t;U(s,fe,l=>n(0,t=l));function r(l){t=l,fe.set(t)}return[t,r]}class Ut extends G{constructor(e){super();J(this,e,Qt,zt,j,{})}}function Vt(s){let e,n,t,r,l,a,f,o,_,i,g,u,$,N,p,A,h,D,I;function X(E){s[1](E)}let P={labelText:"Number Box Width",placeholder:""};s[0].numberBoxWidth!==void 0&&(P.value=s[0].numberBoxWidth),n=new te({props:P}),H.push(()=>L(n,"value",X));function S(E){s[2](E)}let Q={labelText:"Number Box Height",placeholder:""};s[0].numberBoxHeight!==void 0&&(Q.value=s[0].numberBoxHeight),l=new te({props:Q}),H.push(()=>L(l,"value",S));function Z(E){s[3](E)}let ee={labelText:"Question Font size",placeholder:""};s[0].fontSize!==void 0&&(ee.value=s[0].fontSize),o=new te({props:ee}),H.push(()=>L(o,"value",Z));function ce(E){s[4](E)}let Y={labelText:"Question Number box margin",placeholder:""};s[0].numberBoxMargin!==void 0&&(Y.value=s[0].numberBoxMargin),g=new te({props:Y}),H.push(()=>L(g,"value",ce));function se(E){s[5](E)}let le={labelText:"Question Operation box margin",placeholder:""};s[0].operatorBoxMargin!==void 0&&(le.value=s[0].operatorBoxMargin),N=new te({props:le}),H.push(()=>L(N,"value",se));function _e(E){s[6](E)}let $e={labelText:"Question container margin",placeholder:""};return s[0].questionContainerMargin!==void 0&&($e.value=s[0].questionContainerMargin),h=new te({props:$e}),H.push(()=>L(h,"value",_e)),{c(){e=W("div"),v(n.$$.fragment),r=q(),v(l.$$.fragment),f=q(),v(o.$$.fragment),i=q(),v(g.$$.fragment),$=q(),v(N.$$.fragment),A=q(),v(h.$$.fragment),this.h()},l(E){e=M(E,"DIV",{class:!0});var y=F(e);k(n.$$.fragment,y),r=R(y),k(l.$$.fragment,y),f=R(y),k(o.$$.fragment,y),i=R(y),k(g.$$.fragment,y),$=R(y),k(N.$$.fragment,y),A=R(y),k(h.$$.fragment,y),y.forEach(m),this.h()},h(){B(e,"class","two-numbers-question-style-config-controls-content svelte-ri1cz8")},m(E,y){x(E,e,y),w(n,e,null),C(e,r),w(l,e,null),C(e,f),w(o,e,null),C(e,i),w(g,e,null),C(e,$),w(N,e,null),C(e,A),w(h,e,null),I=!0},p(E,[y]){const he={};!t&&y&1&&(t=!0,he.value=E[0].numberBoxWidth,z(()=>t=!1)),n.$set(he);const me={};!a&&y&1&&(a=!0,me.value=E[0].numberBoxHeight,z(()=>a=!1)),l.$set(me);const be={};!_&&y&1&&(_=!0,be.value=E[0].fontSize,z(()=>_=!1)),o.$set(be);const de={};!u&&y&1&&(u=!0,de.value=E[0].numberBoxMargin,z(()=>u=!1)),g.$set(de);const c={};!p&&y&1&&(p=!0,c.value=E[0].operatorBoxMargin,z(()=>p=!1)),N.$set(c);const O={};!D&&y&1&&(D=!0,O.value=E[0].questionContainerMargin,z(()=>D=!1)),h.$set(O)},i(E){I||(d(n.$$.fragment,E),d(l.$$.fragment,E),d(o.$$.fragment,E),d(g.$$.fragment,E),d(N.$$.fragment,E),d(h.$$.fragment,E),I=!0)},o(E){b(n.$$.fragment,E),b(l.$$.fragment,E),b(o.$$.fragment,E),b(g.$$.fragment,E),b(N.$$.fragment,E),b(h.$$.fragment,E),I=!1},d(E){E&&m(e),T(n),T(l),T(o),T(g),T(N),T(h)}}}function Gt(s,e,n){let t;U(s,ne,i=>n(0,t=i));function r(i){s.$$.not_equal(t.numberBoxWidth,i)&&(t.numberBoxWidth=i,ne.set(t))}function l(i){s.$$.not_equal(t.numberBoxHeight,i)&&(t.numberBoxHeight=i,ne.set(t))}function a(i){s.$$.not_equal(t.fontSize,i)&&(t.fontSize=i,ne.set(t))}function f(i){s.$$.not_equal(t.numberBoxMargin,i)&&(t.numberBoxMargin=i,ne.set(t))}function o(i){s.$$.not_equal(t.operatorBoxMargin,i)&&(t.operatorBoxMargin=i,ne.set(t))}function _(i){s.$$.not_equal(t.questionContainerMargin,i)&&(t.questionContainerMargin=i,ne.set(t))}return[t,r,l,a,f,o,_]}class Jt extends G{constructor(e){super();J(this,e,Gt,Vt,j,{})}}function jt(s){let e;return{c(){e=ae("A4 config")},l(n){e=ie(n,"A4 config")},m(n,t){x(n,e,t)},d(n){n&&m(e)}}}function Kt(s){let e;return{c(){e=ae("A4 Landscape config")},l(n){e=ie(n,"A4 Landscape config")},m(n,t){x(n,e,t)},d(n){n&&m(e)}}}function Xt(s){let e,n,t,r;return e=new Se({props:{size:"small",$$slots:{default:[jt]},$$scope:{ctx:s}}}),e.$on("click",s[4]),t=new Se({props:{size:"small",$$slots:{default:[Kt]},$$scope:{ctx:s}}}),t.$on("click",s[5]),{c(){v(e.$$.fragment),n=q(),v(t.$$.fragment)},l(l){k(e.$$.fragment,l),n=R(l),k(t.$$.fragment,l)},m(l,a){w(e,l,a),x(l,n,a),w(t,l,a),r=!0},p(l,a){const f={};a&64&&(f.$$scope={dirty:a,ctx:l}),e.$set(f);const o={};a&64&&(o.$$scope={dirty:a,ctx:l}),t.$set(o)},i(l){r||(d(e.$$.fragment,l),d(t.$$.fragment,l),r=!0)},o(l){b(e.$$.fragment,l),b(t.$$.fragment,l),r=!1},d(l){T(e,l),l&&m(n),T(t,l)}}}function Yt(s){let e,n;return e=new Ke({props:{stacked:!0,$$slots:{default:[Xt]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,[r]){const l={};r&79&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function Zt(s,e,n){let t,r,l,a;return U(s,fe,_=>n(0,t=_)),U(s,pe,_=>n(1,r=_)),U(s,re,_=>n(2,l=_)),U(s,ne,_=>n(3,a=_)),[t,r,l,a,_=>{_.preventDefault(),oe(fe,t=V.WORKSHEET_DEFAULT_CONFIG.A4.pageSize,t),oe(pe,r=V.WORKSHEET_DEFAULT_CONFIG.A4.questionsPerPage,r),oe(re,l=V.WORKSHEET_DEFAULT_CONFIG.A4.pageConfig,l),oe(ne,a=V.WORKSHEET_DEFAULT_CONFIG.A4.twoNumbersQuestionStyleConfig,a)},_=>{_.preventDefault(),oe(fe,t=V.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageSize,t),oe(pe,r=V.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.questionsPerPage,r),oe(re,l=V.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.pageConfig,l),oe(ne,a=V.WORKSHEET_DEFAULT_CONFIG.A4_LANDSCAPE.twoNumbersQuestionStyleConfig,a)}]}class en extends G{constructor(e){super();J(this,e,Zt,Yt,j,{})}}function tn(s){let e,n,t,r,l,a,f;function o(u){s[1](u)}let _={labelText:"Page padding",placeholder:""};s[0].pagePadding!==void 0&&(_.value=s[0].pagePadding),n=new te({props:_}),H.push(()=>L(n,"value",o));function i(u){s[2](u)}let g={labelText:"Page container height",placeholder:""};return s[0].contentContainerHeight!==void 0&&(g.value=s[0].contentContainerHeight),l=new te({props:g}),H.push(()=>L(l,"value",i)),{c(){e=W("div"),v(n.$$.fragment),r=q(),v(l.$$.fragment),this.h()},l(u){e=M(u,"DIV",{class:!0});var $=F(e);k(n.$$.fragment,$),r=R($),k(l.$$.fragment,$),$.forEach(m),this.h()},h(){B(e,"class","page-config-height-and-padding-section svelte-vosejc")},m(u,$){x(u,e,$),w(n,e,null),C(e,r),w(l,e,null),f=!0},p(u,[$]){const N={};!t&&$&1&&(t=!0,N.value=u[0].pagePadding,z(()=>t=!1)),n.$set(N);const p={};!a&&$&1&&(a=!0,p.value=u[0].contentContainerHeight,z(()=>a=!1)),l.$set(p)},i(u){f||(d(n.$$.fragment,u),d(l.$$.fragment,u),f=!0)},o(u){b(n.$$.fragment,u),b(l.$$.fragment,u),f=!1},d(u){u&&m(e),T(n),T(l)}}}function nn(s,e,n){let t;U(s,re,a=>n(0,t=a));function r(a){s.$$.not_equal(t.pagePadding,a)&&(t.pagePadding=a,re.set(t))}function l(a){s.$$.not_equal(t.contentContainerHeight,a)&&(t.contentContainerHeight=a,re.set(t))}return[t,r,l]}class rn extends G{constructor(e){super();J(this,e,nn,tn,j,{})}}function sn(s){let e,n,t,r,l,a,f,o,_,i;function g(h){s[1](h)}let u={labelText:"Flex direction",options:V.FLEX_DIRECTION_OPTIONS};s[0].flexDirection!==void 0&&(u.selected=s[0].flexDirection),n=new Ae({props:u}),H.push(()=>L(n,"selected",g));function $(h){s[2](h)}let N={labelText:"Flex wrap",options:V.FLEX_WRAP_OPTIONS};s[0].flexWrap!==void 0&&(N.selected=s[0].flexWrap),l=new Ae({props:N}),H.push(()=>L(l,"selected",$));function p(h){s[3](h)}let A={labelText:"Flex Justify Content",options:V.FLEX_JUSTIFY_CONTENT_OPTIONS};return s[0].flexJustifyContent!==void 0&&(A.selected=s[0].flexJustifyContent),o=new Ae({props:A}),H.push(()=>L(o,"selected",p)),{c(){e=W("div"),v(n.$$.fragment),r=q(),v(l.$$.fragment),f=q(),v(o.$$.fragment),this.h()},l(h){e=M(h,"DIV",{class:!0});var D=F(e);k(n.$$.fragment,D),r=R(D),k(l.$$.fragment,D),f=R(D),k(o.$$.fragment,D),D.forEach(m),this.h()},h(){B(e,"class","page-config-flex-section svelte-744s1s")},m(h,D){x(h,e,D),w(n,e,null),C(e,r),w(l,e,null),C(e,f),w(o,e,null),i=!0},p(h,[D]){const I={};!t&&D&1&&(t=!0,I.selected=h[0].flexDirection,z(()=>t=!1)),n.$set(I);const X={};!a&&D&1&&(a=!0,X.selected=h[0].flexWrap,z(()=>a=!1)),l.$set(X);const P={};!_&&D&1&&(_=!0,P.selected=h[0].flexJustifyContent,z(()=>_=!1)),o.$set(P)},i(h){i||(d(n.$$.fragment,h),d(l.$$.fragment,h),d(o.$$.fragment,h),i=!0)},o(h){b(n.$$.fragment,h),b(l.$$.fragment,h),b(o.$$.fragment,h),i=!1},d(h){h&&m(e),T(n),T(l),T(o)}}}function ln(s,e,n){let t;U(s,re,f=>n(0,t=f));function r(f){s.$$.not_equal(t.flexDirection,f)&&(t.flexDirection=f,re.set(t))}function l(f){s.$$.not_equal(t.flexWrap,f)&&(t.flexWrap=f,re.set(t))}function a(f){s.$$.not_equal(t.flexJustifyContent,f)&&(t.flexJustifyContent=f,re.set(t))}return[t,r,l,a]}class an extends G{constructor(e){super();J(this,e,ln,sn,j,{})}}function on(s){let e,n,t,r,l,a,f,o,_,i,g,u,$,N;return t=new en({}),l=new Lt({}),f=new rn({}),_=new Ut({}),g=new an({}),$=new Jt({}),{c(){e=W("div"),n=W("div"),v(t.$$.fragment),r=q(),v(l.$$.fragment),a=q(),v(f.$$.fragment),o=q(),v(_.$$.fragment),i=q(),v(g.$$.fragment),u=q(),v($.$$.fragment),this.h()},l(p){e=M(p,"DIV",{class:!0});var A=F(e);n=M(A,"DIV",{class:!0});var h=F(n);k(t.$$.fragment,h),r=R(h),k(l.$$.fragment,h),a=R(h),k(f.$$.fragment,h),o=R(h),k(_.$$.fragment,h),h.forEach(m),i=R(A),k(g.$$.fragment,A),u=R(A),k($.$$.fragment,A),A.forEach(m),this.h()},h(){B(n,"class","pagesize-and-questionsperpage-controls-content svelte-c6tv3r"),B(e,"class","page-config-control-panel svelte-c6tv3r")},m(p,A){x(p,e,A),C(e,n),w(t,n,null),C(n,r),w(l,n,null),C(n,a),w(f,n,null),C(n,o),w(_,n,null),C(e,i),w(g,e,null),C(e,u),w($,e,null),N=!0},p:ge,i(p){N||(d(t.$$.fragment,p),d(l.$$.fragment,p),d(f.$$.fragment,p),d(_.$$.fragment,p),d(g.$$.fragment,p),d($.$$.fragment,p),N=!0)},o(p){b(t.$$.fragment,p),b(l.$$.fragment,p),b(f.$$.fragment,p),b(_.$$.fragment,p),b(g.$$.fragment,p),b($.$$.fragment,p),N=!1},d(p){p&&m(e),T(t),T(l),T(f),T(_),T(g),T($)}}}class un extends G{constructor(e){super();J(this,e,null,on,j,{})}}function fn(s){let e,n,t;return{c(){e=W("textarea"),this.h()},l(r){e=M(r,"TEXTAREA",{class:!0}),F(e).forEach(m),this.h()},h(){B(e,"class","worksheetJsonTextArea svelte-cy1s24")},m(r,l){x(r,e,l),Me(e,s[0]),n||(t=Xe(e,"input",s[1]),n=!0)},p(r,[l]){l&1&&Me(e,r[0])},i:ge,o:ge,d(r){r&&m(e),n=!1,t()}}}function cn(s,e,n){let t;U(s,Fe,l=>n(0,t=l));function r(){t=this.value,Fe.set(t)}return[t,r]}class _n extends G{constructor(e){super();J(this,e,cn,fn,j,{})}}function gn(s){let e,n;return{c(){e=W("h5"),n=ae("No questions are generated.")},l(t){e=M(t,"H5",{});var r=F(e);n=ie(r,"No questions are generated."),r.forEach(m)},m(t,r){x(t,e,r),C(e,n)},p:ge,d(t){t&&m(e)}}}function pn(s){let e,n,t,r;return{c(){e=W("h5"),n=ae("Total "),t=ae(s[0]),r=ae(" questions are generated.")},l(l){e=M(l,"H5",{});var a=F(e);n=ie(a,"Total "),t=ie(a,s[0]),r=ie(a," questions are generated."),a.forEach(m)},m(l,a){x(l,e,a),C(e,n),C(e,t),C(e,r)},p(l,a){a&1&&Ye(t,l[0])},d(l){l&&m(e)}}}function $n(s){let e;function n(l,a){return l[0]>0?pn:gn}let t=n(s),r=t(s);return{c(){r.c(),e=K()},l(l){r.l(l),e=K()},m(l,a){r.m(l,a),x(l,e,a)},p(l,[a]){t===(t=n(l))&&r?r.p(l,a):(r.d(1),r=t(l),r&&(r.c(),r.m(e.parentNode,e)))},i:ge,o:ge,d(l){r.d(l),l&&m(e)}}}function mn(s,e,n){let t;return U(s,ot,r=>n(0,t=r)),[t]}class dn extends G{constructor(e){super();J(this,e,mn,$n,j,{})}}function hn(s){let e,n;return e=new _n({}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function bn(s){let e,n;return e=new st({props:{title:"Worksheet in Json",$$slots:{default:[hn]},$$scope:{ctx:s}}}),{c(){v(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,r){w(e,t,r),n=!0},p(t,r){const l={};r&2&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){b(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function vn(s){let e,n,t,r,l,a,f,o,_,i,g,u,$,N,p,A,h,D,I;r=new Pt({}),a=new Ft({}),g=new un({}),$=new dn({});const X=s[0].default,P=Ze(X,s,s[1],null);return D=new et({props:{$$slots:{default:[bn]},$$scope:{ctx:s}}}),{c(){e=W("body"),n=W("div"),t=W("aside"),v(r.$$.fragment),l=q(),v(a.$$.fragment),f=q(),o=W("main"),_=W("div"),i=W("div"),v(g.$$.fragment),u=q(),v($.$$.fragment),N=q(),p=W("div"),P&&P.c(),A=q(),h=W("div"),v(D.$$.fragment),this.h()},l(S){e=M(S,"BODY",{class:!0});var Q=F(e);n=M(Q,"DIV",{class:!0});var Z=F(n);t=M(Z,"ASIDE",{class:!0});var ee=F(t);k(r.$$.fragment,ee),l=R(ee),k(a.$$.fragment,ee),ee.forEach(m),f=R(Z),o=M(Z,"MAIN",{class:!0});var ce=F(o);_=M(ce,"DIV",{class:!0});var Y=F(_);i=M(Y,"DIV",{class:!0});var se=F(i);k(g.$$.fragment,se),u=R(se),k($.$$.fragment,se),se.forEach(m),N=R(Y),p=M(Y,"DIV",{class:!0});var le=F(p);P&&P.l(le),le.forEach(m),A=R(Y),h=M(Y,"DIV",{class:!0});var _e=F(h);k(D.$$.fragment,_e),_e.forEach(m),Y.forEach(m),ce.forEach(m),Z.forEach(m),Q.forEach(m),this.h()},h(){B(t,"class","sideNav svelte-1bakku1"),B(i,"class","main-content-page-layout svelte-1bakku1"),B(p,"class","main-content-printable-area"),B(h,"class","main-content-worksheet-in-json svelte-1bakku1"),B(_,"class","main-content-wrapper svelte-1bakku1"),B(o,"class","main-content svelte-1bakku1"),B(n,"class","wrapper svelte-1bakku1"),B(e,"class","svelte-1bakku1")},m(S,Q){x(S,e,Q),C(e,n),C(n,t),w(r,t,null),C(t,l),w(a,t,null),C(n,f),C(n,o),C(o,_),C(_,i),w(g,i,null),C(i,u),w($,i,null),C(_,N),C(_,p),P&&P.m(p,null),C(_,A),C(_,h),w(D,h,null),I=!0},p(S,[Q]){P&&P.p&&(!I||Q&2)&&tt(P,X,S,S[1],I?rt(X,S[1],Q,null):nt(S[1]),null);const Z={};Q&2&&(Z.$$scope={dirty:Q,ctx:S}),D.$set(Z)},i(S){I||(d(r.$$.fragment,S),d(a.$$.fragment,S),d(g.$$.fragment,S),d($.$$.fragment,S),d(P,S),d(D.$$.fragment,S),I=!0)},o(S){b(r.$$.fragment,S),b(a.$$.fragment,S),b(g.$$.fragment,S),b($.$$.fragment,S),b(P,S),b(D.$$.fragment,S),I=!1},d(S){S&&m(e),T(r),T(a),T(g),T($),P&&P.d(S),T(D)}}}function kn(s,e,n){let{$$slots:t={},$$scope:r}=e;return s.$$set=l=>{"$$scope"in l&&n(1,r=l.$$scope)},[t,r]}class Nn extends G{constructor(e){super();J(this,e,kn,vn,j,{})}}export{Nn as default};
