import{L as Ku,_ as Qu,C as Hu,r as Qr,F as Wu,a as Xu,b as Yu,c as Ju,d as Lt,e as Zu,f as re,S as tl,h as el,j as nl,k as rl}from"./index-ea1a36e4.AtA5dU3h.js";function qo(n){var t,e,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(t=0;t<i;t++)n[t]&&(e=qo(n[t]))&&(r&&(r+=" "),r+=e)}else for(e in n)n[e]&&(r&&(r+=" "),r+=e);return r}function sl(){for(var n,t,e=0,r="",i=arguments.length;e<i;e++)(n=arguments[e])&&(t=qo(n))&&(r&&(r+=" "),r+=t);return r}var ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zt,Bo;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,v){for(var p=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)p[Nt-2]=arguments[Nt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var v=T.g[3],p=m+(v^_&(E^v))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=v+(E^m&(_^E))+y[1]+3905402710&4294967295,v=m+(p<<12&4294967295|p>>>20),p=E+(_^v&(m^_))+y[2]+606105819&4294967295,E=v+(p<<17&4294967295|p>>>15),p=_+(m^E&(v^m))+y[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(v^_&(E^v))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=v+(E^m&(_^E))+y[5]+1200080426&4294967295,v=m+(p<<12&4294967295|p>>>20),p=E+(_^v&(m^_))+y[6]+2821735955&4294967295,E=v+(p<<17&4294967295|p>>>15),p=_+(m^E&(v^m))+y[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(v^_&(E^v))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=v+(E^m&(_^E))+y[9]+2336552879&4294967295,v=m+(p<<12&4294967295|p>>>20),p=E+(_^v&(m^_))+y[10]+4294925233&4294967295,E=v+(p<<17&4294967295|p>>>15),p=_+(m^E&(v^m))+y[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(v^_&(E^v))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=v+(E^m&(_^E))+y[13]+4254626195&4294967295,v=m+(p<<12&4294967295|p>>>20),p=E+(_^v&(m^_))+y[14]+2792965006&4294967295,E=v+(p<<17&4294967295|p>>>15),p=_+(m^E&(v^m))+y[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(E^v&(_^E))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=v+(_^E&(m^_))+y[6]+3225465664&4294967295,v=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(v^m))+y[11]+643717713&4294967295,E=v+(p<<14&4294967295|p>>>18),p=_+(v^m&(E^v))+y[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^v&(_^E))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=v+(_^E&(m^_))+y[10]+38016083&4294967295,v=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(v^m))+y[15]+3634488961&4294967295,E=v+(p<<14&4294967295|p>>>18),p=_+(v^m&(E^v))+y[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^v&(_^E))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=v+(_^E&(m^_))+y[14]+3275163606&4294967295,v=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(v^m))+y[3]+4107603335&4294967295,E=v+(p<<14&4294967295|p>>>18),p=_+(v^m&(E^v))+y[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^v&(_^E))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=v+(_^E&(m^_))+y[2]+4243563512&4294967295,v=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(v^m))+y[7]+1735328473&4294967295,E=v+(p<<14&4294967295|p>>>18),p=_+(v^m&(E^v))+y[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(_^E^v)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=v+(m^_^E)+y[8]+2272392833&4294967295,v=m+(p<<11&4294967295|p>>>21),p=E+(v^m^_)+y[11]+1839030562&4294967295,E=v+(p<<16&4294967295|p>>>16),p=_+(E^v^m)+y[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^v)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=v+(m^_^E)+y[4]+1272893353&4294967295,v=m+(p<<11&4294967295|p>>>21),p=E+(v^m^_)+y[7]+4139469664&4294967295,E=v+(p<<16&4294967295|p>>>16),p=_+(E^v^m)+y[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^v)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=v+(m^_^E)+y[0]+3936430074&4294967295,v=m+(p<<11&4294967295|p>>>21),p=E+(v^m^_)+y[3]+3572445317&4294967295,E=v+(p<<16&4294967295|p>>>16),p=_+(E^v^m)+y[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^v)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=v+(m^_^E)+y[12]+3873151461&4294967295,v=m+(p<<11&4294967295|p>>>21),p=E+(v^m^_)+y[15]+530742520&4294967295,E=v+(p<<16&4294967295|p>>>16),p=_+(E^v^m)+y[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(E^(_|~v))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=v+(_^(m|~E))+y[7]+1126891415&4294967295,v=m+(p<<10&4294967295|p>>>22),p=E+(m^(v|~_))+y[14]+2878612391&4294967295,E=v+(p<<15&4294967295|p>>>17),p=_+(v^(E|~m))+y[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~v))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=v+(_^(m|~E))+y[3]+2399980690&4294967295,v=m+(p<<10&4294967295|p>>>22),p=E+(m^(v|~_))+y[10]+4293915773&4294967295,E=v+(p<<15&4294967295|p>>>17),p=_+(v^(E|~m))+y[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~v))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=v+(_^(m|~E))+y[15]+4264355552&4294967295,v=m+(p<<10&4294967295|p>>>22),p=E+(m^(v|~_))+y[6]+2734768916&4294967295,E=v+(p<<15&4294967295|p>>>17),p=_+(v^(E|~m))+y[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~v))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=v+(_^(m|~E))+y[11]+3174756917&4294967295,v=m+(p<<10&4294967295|p>>>22),p=E+(m^(v|~_))+y[2]+718787259&4294967295,E=v+(p<<15&4294967295|p>>>17),p=_+(v^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+v&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,v=0;v<m;){if(E==0)for(;v<=_;)i(this,T,v),v+=this.blockSize;if(typeof T=="string"){for(;v<m;)if(y[E++]=T.charCodeAt(v++),E==this.blockSize){i(this,y),E=0;break}}else for(;v<m;)if(y[E++]=T[v++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var v=T[E]|0;y&&v==m||(_[E]=v,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return I;if(0>T)return C(d(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return C(g(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=I,E=0;E<T.length;E+=8){var v=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+v),m);8>v?(v=d(Math.pow(m,v)),y=y.j(v).add(d(p))):(y=y.j(_),y=y.add(d(p)))}return y}var I=h(0),R=h(1),P=h(16777216);n=u.prototype,n.m=function(){if(k(this))return-C(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(k(this))return"-"+C(this).toString(T);for(var m=d(Math.pow(T,6)),_=this,y="";;){var E=Z(_,m).g;_=U(_,E.j(m));var v=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,D(_))return v+y;for(;6>v.length;)v="0"+v;y=v+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function k(T){return T.h==-1}n.l=function(T){return T=U(this,T),k(T)?-1:D(T)?0:1};function C(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(R)}n.abs=function(){return k(this)?C(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var v=y+(this.i(E)&65535)+(T.i(E)&65535),p=(v>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,v&=65535,p&=65535,_[E]=p<<16|v}return new u(_,_[_.length-1]&-2147483648?-1:0)};function U(T,m){return T.add(C(m))}n.j=function(T){if(D(this)||D(T))return I;if(k(this))return k(T)?C(this).j(C(T)):C(C(this).j(T));if(k(T))return C(this.j(C(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var v=this.i(y)>>>16,p=this.i(y)&65535,Nt=T.i(E)>>>16,De=T.i(E)&65535;_[2*y+2*E]+=p*De,q(_,2*y+2*E),_[2*y+2*E+1]+=v*De,q(_,2*y+2*E+1),_[2*y+2*E+1]+=p*Nt,q(_,2*y+2*E+1),_[2*y+2*E+2]+=v*Nt,q(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function q(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function G(T,m){this.g=T,this.h=m}function Z(T,m){if(D(m))throw Error("division by zero");if(D(T))return new G(I,I);if(k(T))return m=Z(C(T),m),new G(C(m.g),C(m.h));if(k(m))return m=Z(T,C(m)),new G(C(m.g),m.h);if(30<T.g.length){if(k(T)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(T);)_=At(_),y=At(y);var E=et(_,1),v=et(y,1);for(y=et(y,2),_=et(_,2);!D(y);){var p=v.add(y);0>=p.l(T)&&(E=E.add(_),v=p),y=et(y,1),_=et(_,1)}return m=U(T,E.j(m)),new G(E,m)}for(E=I;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),v=d(_),p=v.j(m);k(p)||0<p.l(T);)_-=y,v=d(_),p=v.j(m);D(v)&&(v=R),E=E.add(v),T=U(T,p)}return new G(E,T)}n.A=function(T){return Z(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function At(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function et(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],v=0;v<y;v++)E[v]=0<m?T.i(v+_)>>>m|T.i(v+_+1)<<32-m:T.i(v+_);return new u(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Bo=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=g,zt=u}).apply(typeof ji<"u"?ji:typeof self<"u"?self:typeof window<"u"?window:{});var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jo,He,$o,Un,Hr,zo,Go,Ko;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof kn=="object"&&kn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in l))break t;l=l[A]}s=s[s.length-1],f=l[s],a=a(f),a!=f&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,f=!1,A={next:function(){if(!f&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function g(s,a,l){return s.call.apply(s.bind,arguments)}function I(s,a,l){if(!s)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),s.apply(a,A)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:I,R.apply(null,arguments)}function P(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function D(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(f,A,w){for(var b=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)b[Q-2]=arguments[Q];return a.prototype[A].apply(f,b)}}function k(s){const a=s.length;if(0<a){const l=Array(a);for(let f=0;f<a;f++)l[f]=s[f];return l}return[]}function C(s,a){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const A=s.length||0,w=f.length||0;s.length=A+w;for(let b=0;b<w;b++)s[A+b]=f[b]}else s.push(f)}}class U{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function q(s){return/^[\s\xa0]*$/.test(s)}function G(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function Z(s){return Z[" "](s),s}Z[" "]=function(){};var At=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function et(s,a,l){for(const f in s)a.call(l,s[f],f,s)}function T(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)s[l]=f[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function v(s){c.setTimeout(()=>{throw s},0)}function p(){var s=_r;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Nt{constructor(){this.h=this.g=null}add(a,l){const f=De.get();f.set(a,l),this.h?this.h.next=f:this.g=f,this.h=f}}var De=new U(()=>new hu,s=>s.reset());class hu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,ke=!1,_r=new Nt,js=()=>{const s=c.Promise.resolve(void 0);Ne=()=>{s.then(fu)}};var fu=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(l){v(l)}var a=De;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}ke=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var du=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s}();function xe(s,a){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(At){t:{try{Z(a.nodeName);var A=!0;break t}catch{}A=!1}A||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:mu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&xe.aa.h.call(this)}}D(xe,ct);var mu={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),pu=0;function gu(s,a,l,f,A){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!f,this.ha=A,this.key=++pu,this.da=this.fa=!1}function pn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function gn(s){this.src=s,this.g={},this.h=0}gn.prototype.add=function(s,a,l,f,A){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var b=Er(s,a,f,A);return-1<b?(a=s[b],l||(a.fa=!1)):(a=new gu(a,this.src,w,!!f,A),a.fa=l,s.push(a)),a};function yr(s,a){var l=a.type;if(l in s.g){var f=s.g[l],A=Array.prototype.indexOf.call(f,a,void 0),w;(w=0<=A)&&Array.prototype.splice.call(f,A,1),w&&(pn(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Er(s,a,l,f){for(var A=0;A<s.length;++A){var w=s[A];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==f)return A}return-1}var Tr="closure_lm_"+(1e6*Math.random()|0),Ar={};function $s(s,a,l,f,A){if(Array.isArray(a)){for(var w=0;w<a.length;w++)$s(s,a[w],l,f,A);return null}return l=Ks(l),s&&s[mn]?s.K(a,l,d(f)?!!f.capture:!1,A):_u(s,a,l,!1,f,A)}function _u(s,a,l,f,A,w){if(!a)throw Error("Invalid event type");var b=d(A)?!!A.capture:!!A,Q=Ir(s);if(Q||(s[Tr]=Q=new gn(s)),l=Q.add(a,l,f,b,w),l.proxy)return l;if(f=yu(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)du||(A=b),A===void 0&&(A=!1),s.addEventListener(a.toString(),f,A);else if(s.attachEvent)s.attachEvent(Gs(a.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function yu(){function s(l){return a.call(s.src,s.listener,l)}const a=Eu;return s}function zs(s,a,l,f,A){if(Array.isArray(a))for(var w=0;w<a.length;w++)zs(s,a[w],l,f,A);else f=d(f)?!!f.capture:!!f,l=Ks(l),s&&s[mn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Er(w,l,f,A),-1<l&&(pn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Ir(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Er(a,l,f,A)),(l=-1<s?a[s]:null)&&vr(l))}function vr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[mn])yr(a.i,s);else{var l=s.type,f=s.proxy;a.removeEventListener?a.removeEventListener(l,f,s.capture):a.detachEvent?a.detachEvent(Gs(l),f):a.addListener&&a.removeListener&&a.removeListener(f),(l=Ir(a))?(yr(l,s),l.h==0&&(l.src=null,a[Tr]=null)):pn(s)}}}function Gs(s){return s in Ar?Ar[s]:Ar[s]="on"+s}function Eu(s,a){if(s.da)s=!0;else{a=new xe(a,this);var l=s.listener,f=s.ha||s.src;s.fa&&vr(s),s=l.call(f,a)}return s}function Ir(s){return s=s[Tr],s instanceof gn?s:null}var wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ks(s){return typeof s=="function"?s:(s[wr]||(s[wr]=function(a){return s.handleEvent(a)}),s[wr])}function ht(){Ut.call(this),this.i=new gn(this),this.M=this,this.F=null}D(ht,Ut),ht.prototype[mn]=!0,ht.prototype.removeEventListener=function(s,a,l,f){zs(this,s,a,l,f)};function _t(s,a){var l,f=s.F;if(f)for(l=[];f;f=f.F)l.push(f);if(s=s.M,f=a.type||a,typeof a=="string")a=new ct(a,s);else if(a instanceof ct)a.target=a.target||s;else{var A=a;a=new ct(f,s),y(a,A)}if(A=!0,l)for(var w=l.length-1;0<=w;w--){var b=a.g=l[w];A=_n(b,f,!0,a)&&A}if(b=a.g=s,A=_n(b,f,!0,a)&&A,A=_n(b,f,!1,a)&&A,l)for(w=0;w<l.length;w++)b=a.g=l[w],A=_n(b,f,!1,a)&&A}ht.prototype.N=function(){if(ht.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],f=0;f<l.length;f++)pn(l[f]);delete s.g[a],s.h--}}this.F=null},ht.prototype.K=function(s,a,l,f){return this.i.add(String(s),a,!1,l,f)},ht.prototype.L=function(s,a,l,f){return this.i.add(String(s),a,!0,l,f)};function _n(s,a,l,f){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var A=!0,w=0;w<a.length;++w){var b=a[w];if(b&&!b.da&&b.capture==l){var Q=b.listener,ot=b.ha||b.src;b.fa&&yr(s.i,b),A=Q.call(ot,f)!==!1&&A}}return A&&!f.defaultPrevented}function Qs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function Hs(s){s.g=Qs(()=>{s.g=null,s.i&&(s.i=!1,Hs(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Tu extends Ut{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Hs(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Le(s){Ut.call(this),this.h=s,this.g={}}D(Le,Ut);var Ws=[];function Xs(s){et(s.g,function(a,l){this.g.hasOwnProperty(l)&&vr(a)},s),s.g={}}Le.prototype.N=function(){Le.aa.N.call(this),Xs(this)},Le.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rr=c.JSON.stringify,Au=c.JSON.parse,vu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Sr(){}Sr.prototype.h=null;function Ys(s){return s.h||(s.h=s.i())}function Js(){}var Me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pr(){ct.call(this,"d")}D(Pr,ct);function Vr(){ct.call(this,"c")}D(Vr,ct);var Jt={},Zs=null;function yn(){return Zs=Zs||new ht}Jt.La="serverreachability";function ti(s){ct.call(this,Jt.La,s)}D(ti,ct);function Oe(s){const a=yn();_t(a,new ti(a))}Jt.STAT_EVENT="statevent";function ei(s,a){ct.call(this,Jt.STAT_EVENT,s),this.stat=a}D(ei,ct);function yt(s){const a=yn();_t(a,new ei(a,s))}Jt.Ma="timingevent";function ni(s,a){ct.call(this,Jt.Ma,s),this.size=a}D(ni,ct);function Fe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Ue(){this.g=!0}Ue.prototype.xa=function(){this.g=!1};function Iu(s,a,l,f,A,w){s.info(function(){if(s.g)if(w)for(var b="",Q=w.split("&"),ot=0;ot<Q.length;ot++){var z=Q[ot].split("=");if(1<z.length){var ft=z[0];z=z[1];var dt=ft.split("_");b=2<=dt.length&&dt[1]=="type"?b+(ft+"="+z+"&"):b+(ft+"=redacted&")}}else b=null;else b=w;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+a+`
`+l+`
`+b})}function wu(s,a,l,f,A,w,b){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+a+`
`+l+`
`+w+" "+b})}function ue(s,a,l,f){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+Su(s,l)+(f?" "+f:"")})}function Ru(s,a){s.info(function(){return"TIMEOUT: "+a})}Ue.prototype.info=function(){};function Su(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var f=l[s];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var w=A[0];if(w!="noop"&&w!="stop"&&w!="close")for(var b=1;b<A.length;b++)A[b]=""}}}}return Rr(l)}catch{return a}}var En={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ri={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cr;function Tn(){}D(Tn,Sr),Tn.prototype.g=function(){return new XMLHttpRequest},Tn.prototype.i=function(){return{}},Cr=new Tn;function qt(s,a,l,f){this.j=s,this.i=a,this.l=l,this.R=f||1,this.U=new Le(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new si}function si(){this.i=null,this.g="",this.h=!1}var ii={},br={};function Dr(s,a,l){s.L=1,s.v=wn(kt(a)),s.m=l,s.P=!0,oi(s,null)}function oi(s,a){s.F=Date.now(),An(s),s.A=kt(s.v);var l=s.A,f=s.R;Array.isArray(f)||(f=[String(f)]),Ti(l.i,"t",f),s.C=0,l=s.j.J,s.h=new si,s.g=Fi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Tu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,f=s.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ws[0]=A.toString()),A=Ws);for(var w=0;w<A.length;w++){var b=$s(l,A[w],f||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Oe(),Iu(s.i,s.u,s.A,s.l,s.R,s.m)}qt.prototype.ca=function(s){s=s.target;const a=this.M;a&&xt(s)==3?a.j():this.Y(s)},qt.prototype.Y=function(s){try{if(s==this.g)t:{const dt=xt(this.g);var a=this.g.Ba();const he=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||Pi(this.g)))){this.J||dt!=4||a==7||(a==8||0>=he?Oe(3):Oe(2)),Nr(this);var l=this.g.Z();this.X=l;e:if(ai(this)){var f=Pi(this.g);s="";var A=f.length,w=xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),qe(this);var b="";break e}this.h.i=new c.TextDecoder}for(a=0;a<A;a++)this.h.h=!0,s+=this.h.i.decode(f[a],{stream:!(w&&a==A-1)});f.length=0,this.h.g+=s,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,wu(this.i,this.u,this.A,this.l,this.R,dt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ot=this.g;if((Q=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Q)){var z=Q;break e}}z=null}if(l=z)ue(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kr(this,l);else{this.o=!1,this.s=3,yt(12),Zt(this),qe(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<b.length;)if(Rt=Pu(this,b),Rt==br){dt==4&&(this.s=4,yt(14),l=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==ii){this.s=4,yt(15),ue(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else ue(this.i,this.l,Rt,null),kr(this,Rt);if(ai(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||b.length!=0||this.h.h||(this.s=1,yt(16),l=!1),this.o=this.o&&l,!l)ue(this.i,this.l,b,"[Invalid Chunked Response]"),Zt(this),qe(this);else if(0<b.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),Ur(ft),ft.M=!0,yt(11))}}else ue(this.i,this.l,b,null),kr(this,b);dt==4&&Zt(this),this.o&&!this.J&&(dt==4?xi(this.j,this):(this.o=!1,An(this)))}else zu(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),Zt(this),qe(this)}}}catch{}finally{}};function ai(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Pu(s,a){var l=s.C,f=a.indexOf(`
`,l);return f==-1?br:(l=Number(a.substring(l,f)),isNaN(l)?ii:(f+=1,f+l>a.length?br:(a=a.slice(f,f+l),s.C=f+l,a)))}qt.prototype.cancel=function(){this.J=!0,Zt(this)};function An(s){s.S=Date.now()+s.I,ui(s,s.I)}function ui(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Fe(R(s.ba,s),a)}function Nr(s){s.B&&(c.clearTimeout(s.B),s.B=null)}qt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Ru(this.i,this.A),this.L!=2&&(Oe(),yt(17)),Zt(this),this.s=2,qe(this)):ui(this,this.S-s)};function qe(s){s.j.G==0||s.J||xi(s.j,s)}function Zt(s){Nr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Xs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function kr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||xr(l.h,s))){if(!s.K&&xr(l.h,s)&&l.G==3){try{var f=l.Da.g.parse(a)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)bn(l),Vn(l);else break t;Fr(l),yt(18)}}else l.za=A[1],0<l.za-l.T&&37500>A[2]&&l.F&&l.v==0&&!l.C&&(l.C=Fe(R(l.Za,l),6e3));if(1>=hi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ee(l,11)}else if((s.K||l.g==s)&&bn(l),!q(a))for(A=l.Da.g.parse(a),a=0;a<A.length;a++){let z=A[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const ft=z[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const dt=z[4];dt!=null&&(l.Aa=dt,l.j.info("SVER="+l.Aa));const he=z[5];he!=null&&typeof he=="number"&&0<he&&(f=1.5*he,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const Rt=s.g;if(Rt){const Nn=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nn){var w=f.h;w.g||Nn.indexOf("spdy")==-1&&Nn.indexOf("quic")==-1&&Nn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Lr(w,w.h),w.h=null))}if(f.D){const qr=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;qr&&(f.ya=qr,H(f.I,f.D,qr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var b=s;if(f.qa=Oi(f,f.J?f.ia:null,f.W),b.K){fi(f.h,b);var Q=b,ot=f.L;ot&&(Q.I=ot),Q.B&&(Nr(Q),An(Q)),f.g=b}else Ni(f);0<l.i.length&&Cn(l)}else z[0]!="stop"&&z[0]!="close"||ee(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?ee(l,7):Or(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}Oe(4)}catch{}}var Vu=class{constructor(s,a){this.g=s,this.map=a}};function li(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ci(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function hi(s){return s.h?1:s.g?s.g.size:0}function xr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Lr(s,a){s.g?s.g.add(a):s.h=a}function fi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}li.prototype.cancel=function(){if(this.i=di(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function di(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return k(s.i)}function Cu(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(h(s)){for(var a=[],l=s.length,f=0;f<l;f++)a.push(s[f]);return a}a=[],l=0;for(f in s)a[l++]=s[f];return a}function bu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(h(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const f in s)a[l++]=f;return a}}}function mi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(h(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=bu(s),f=Cu(s),A=f.length,w=0;w<A;w++)a.call(void 0,f[w],l&&l[w],s)}var pi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Du(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var f=s[l].indexOf("="),A=null;if(0<=f){var w=s[l].substring(0,f);A=s[l].substring(f+1)}else w=s[l];a(w,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function te(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof te){this.h=s.h,vn(this,s.j),this.o=s.o,this.g=s.g,In(this,s.s),this.l=s.l;var a=s.i,l=new $e;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),gi(this,l),this.m=s.m}else s&&(a=String(s).match(pi))?(this.h=!1,vn(this,a[1]||"",!0),this.o=Be(a[2]||""),this.g=Be(a[3]||"",!0),In(this,a[4]),this.l=Be(a[5]||"",!0),gi(this,a[6]||"",!0),this.m=Be(a[7]||"")):(this.h=!1,this.i=new $e(null,this.h))}te.prototype.toString=function(){var s=[],a=this.j;a&&s.push(je(a,_i,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(je(a,_i,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(je(l,l.charAt(0)=="/"?xu:ku,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",je(l,Mu)),s.join("")};function kt(s){return new te(s)}function vn(s,a,l){s.j=l?Be(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function In(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function gi(s,a,l){a instanceof $e?(s.i=a,Ou(s.i,s.h)):(l||(a=je(a,Lu)),s.i=new $e(a,s.h))}function H(s,a,l){s.i.set(a,l)}function wn(s){return H(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Be(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function je(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Nu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Nu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var _i=/[#\/\?@]/g,ku=/[#\?:]/g,xu=/[#\?]/g,Lu=/[#\?@]/g,Mu=/#/g;function $e(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Bt(s){s.g||(s.g=new Map,s.h=0,s.i&&Du(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=$e.prototype,n.add=function(s,a){Bt(this),this.i=null,s=le(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function yi(s,a){Bt(s),a=le(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ei(s,a){return Bt(s),a=le(s,a),s.g.has(a)}n.forEach=function(s,a){Bt(this),this.g.forEach(function(l,f){l.forEach(function(A){s.call(a,A,f,this)},this)},this)},n.na=function(){Bt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let f=0;f<a.length;f++){const A=s[f];for(let w=0;w<A.length;w++)l.push(a[f])}return l},n.V=function(s){Bt(this);let a=[];if(typeof s=="string")Ei(this,s)&&(a=a.concat(this.g.get(le(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},n.set=function(s,a){return Bt(this),this.i=null,s=le(this,s),Ei(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ti(s,a,l){yi(s,a),0<l.length&&(s.i=null,s.g.set(le(s,a),k(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var f=a[l];const w=encodeURIComponent(String(f)),b=this.V(f);for(f=0;f<b.length;f++){var A=w;b[f]!==""&&(A+="="+encodeURIComponent(String(b[f]))),s.push(A)}}return this.i=s.join("&")};function le(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Ou(s,a){a&&!s.j&&(Bt(s),s.i=null,s.g.forEach(function(l,f){var A=f.toLowerCase();f!=A&&(yi(this,f),Ti(this,A,l))},s)),s.j=a}function Fu(s,a){const l=new Ue;if(c.Image){const f=new Image;f.onload=P(jt,l,"TestLoadImage: loaded",!0,a,f),f.onerror=P(jt,l,"TestLoadImage: error",!1,a,f),f.onabort=P(jt,l,"TestLoadImage: abort",!1,a,f),f.ontimeout=P(jt,l,"TestLoadImage: timeout",!1,a,f),c.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else a(!1)}function Uu(s,a){const l=new Ue,f=new AbortController,A=setTimeout(()=>{f.abort(),jt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:f.signal}).then(w=>{clearTimeout(A),w.ok?jt(l,"TestPingServer: ok",!0,a):jt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(A),jt(l,"TestPingServer: error",!1,a)})}function jt(s,a,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function qu(){this.g=new vu}function Bu(s,a,l){const f=l||"";try{mi(s,function(A,w){let b=A;d(A)&&(b=Rr(A)),a.push(f+w+"="+encodeURIComponent(b))})}catch(A){throw a.push(f+"type="+encodeURIComponent("_badmap")),A}}function Rn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Rn,Sr),Rn.prototype.g=function(){return new Sn(this.l,this.j)},Rn.prototype.i=function(s){return function(){return s}}({});function Sn(s,a){ht.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Sn,ht),n=Sn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ge(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ze(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ge(this)),this.g&&(this.readyState=3,Ge(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ai(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ai(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?ze(this):Ge(this),this.readyState==3&&Ai(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,ze(this))},n.Qa=function(s){this.g&&(this.response=s,ze(this))},n.ga=function(){this.g&&ze(this)};function ze(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ge(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Ge(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function vi(s){let a="";return et(s,function(l,f){a+=f,a+=":",a+=l,a+=`\r
`}),a}function Mr(s,a,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=vi(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):H(s,a,l))}function X(s){ht.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(X,ht);var ju=/^https?$/i,$u=["POST","PUT"];n=X.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cr.g(),this.v=this.o?Ys(this.o):Ys(Cr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){Ii(this,w);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const w of f.keys())l.set(w,f.get(w));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),A=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call($u,a,void 0))||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,b]of l)this.g.setRequestHeader(w,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Si(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){Ii(this,w)}};function Ii(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,wi(s),Pn(s)}function wi(s){s.A||(s.A=!0,_t(s,"complete"),_t(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,_t(this,"complete"),_t(this,"abort"),Pn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pn(this,!0)),X.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ri(this):this.bb())},n.bb=function(){Ri(this)};function Ri(s){if(s.h&&typeof u<"u"&&(!s.v[1]||xt(s)!=4||s.Z()!=2)){if(s.u&&xt(s)==4)Qs(s.Ea,0,s);else if(_t(s,"readystatechange"),xt(s)==4){s.h=!1;try{const b=s.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var f;if(f=b===0){var A=String(s.D).match(pi)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),f=!ju.test(A?A.toLowerCase():"")}l=f}if(l)_t(s,"complete"),_t(s,"success");else{s.m=6;try{var w=2<xt(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",wi(s)}}finally{Pn(s)}}}}function Pn(s,a){if(s.g){Si(s);const l=s.g,f=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||_t(s,"ready");try{l.onreadystatechange=f}catch{}}}function Si(s){s.I&&(c.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function xt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Au(a)}};function Pi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function zu(s){const a={};s=(s.g&&2<=xt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(q(s[f]))continue;var l=E(s[f]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[A]||[];a[A]=w,w.push(l)}T(a,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ke(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Vi(s){this.Aa=0,this.i=[],this.j=new Ue,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ke("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ke("baseRetryDelayMs",5e3,s),this.cb=Ke("retryDelaySeedMs",1e4,s),this.Wa=Ke("forwardChannelMaxRetries",2,s),this.wa=Ke("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new li(s&&s.concurrentRequestLimit),this.Da=new qu,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Vi.prototype,n.la=8,n.G=1,n.connect=function(s,a,l,f){yt(0),this.W=s,this.H=a||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Oi(this,null,this.W),Cn(this)};function Or(s){if(Ci(s),s.G==3){var a=s.U++,l=kt(s.I);if(H(l,"SID",s.K),H(l,"RID",a),H(l,"TYPE","terminate"),Qe(s,l),a=new qt(s,s.j,a),a.L=2,a.v=wn(kt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Fi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),An(a)}Mi(s)}function Vn(s){s.g&&(Ur(s),s.g.cancel(),s.g=null)}function Ci(s){Vn(s),s.u&&(c.clearTimeout(s.u),s.u=null),bn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Cn(s){if(!ci(s.h)&&!s.s){s.s=!0;var a=s.Ga;Ne||js(),ke||(Ne(),ke=!0),_r.add(a,s),s.B=0}}function Gu(s,a){return hi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Fe(R(s.Ga,s,a),Li(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const A=new qt(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(A.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(a+=f,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Di(this,A,a),l=kt(this.I),H(l,"RID",s),H(l,"CVER",22),this.D&&H(l,"X-HTTP-Session-Id",this.D),Qe(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(vi(w)))+"&"+a:this.m&&Mr(l,this.m,w)),Lr(this.h,A),this.Ua&&H(l,"TYPE","init"),this.P?(H(l,"$req",a),H(l,"SID","null"),A.T=!0,Dr(A,l,null)):Dr(A,l,a),this.G=2}}else this.G==3&&(s?bi(this,s):this.i.length==0||ci(this.h)||bi(this))};function bi(s,a){var l;a?l=a.l:l=s.U++;const f=kt(s.I);H(f,"SID",s.K),H(f,"RID",l),H(f,"AID",s.T),Qe(s,f),s.m&&s.o&&Mr(f,s.m,s.o),l=new qt(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Di(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Lr(s.h,l),Dr(l,f,a)}function Qe(s,a){s.H&&et(s.H,function(l,f){H(a,f,l)}),s.l&&mi({},function(l,f){H(a,f,l)})}function Di(s,a,l){l=Math.min(s.i.length,l);var f=s.l?R(s.l.Na,s.l,s):null;t:{var A=s.i;let w=-1;for(;;){const b=["count="+l];w==-1?0<l?(w=A[0].g,b.push("ofs="+w)):w=0:b.push("ofs="+w);let Q=!0;for(let ot=0;ot<l;ot++){let z=A[ot].g;const ft=A[ot].map;if(z-=w,0>z)w=Math.max(0,A[ot].g-100),Q=!1;else try{Bu(ft,b,"req"+z+"_")}catch{f&&f(ft)}}if(Q){f=b.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,f}function Ni(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Ne||js(),ke||(Ne(),ke=!0),_r.add(a,s),s.v=0}}function Fr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Fe(R(s.Fa,s),Li(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,ki(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Fe(R(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),Vn(this),ki(this))};function Ur(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function ki(s){s.g=new qt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=kt(s.qa);H(a,"RID","rpc"),H(a,"SID",s.K),H(a,"AID",s.T),H(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&H(a,"TO",s.ja),H(a,"TYPE","xmlhttp"),Qe(s,a),s.m&&s.o&&Mr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=wn(kt(a)),l.m=null,l.P=!0,oi(l,s)}n.Za=function(){this.C!=null&&(this.C=null,Vn(this),Fr(this),yt(19))};function bn(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function xi(s,a){var l=null;if(s.g==a){bn(s),Ur(s),s.g=null;var f=2}else if(xr(s.h,a))l=a.D,fi(s.h,a),f=1;else return;if(s.G!=0){if(a.o)if(f==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var A=s.B;f=yn(),_t(f,new ni(f,l)),Cn(s)}else Ni(s);else if(A=a.s,A==3||A==0&&0<a.X||!(f==1&&Gu(s,a)||f==2&&Fr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),A){case 1:ee(s,5);break;case 4:ee(s,10);break;case 3:ee(s,6);break;default:ee(s,2)}}}function Li(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ee(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),f=s.Xa;const A=!f;f=new te(f||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||vn(f,"https"),wn(f),A?Fu(f.toString(),l):Uu(f.toString(),l)}else yt(2);s.G=0,s.l&&s.l.sa(a),Mi(s),Ci(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Mi(s){if(s.G=0,s.ka=[],s.l){const a=di(s.h);(a.length!=0||s.i.length!=0)&&(C(s.ka,a),C(s.ka,s.i),s.h.i.length=0,k(s.i),s.i.length=0),s.l.ra()}}function Oi(s,a,l){var f=l instanceof te?kt(l):new te(l);if(f.g!="")a&&(f.g=a+"."+f.g),In(f,f.s);else{var A=c.location;f=A.protocol,a=a?a+"."+A.hostname:A.hostname,A=+A.port;var w=new te(null);f&&vn(w,f),a&&(w.g=a),A&&In(w,A),l&&(w.l=l),f=w}return l=s.D,a=s.ya,l&&a&&H(f,l,a),H(f,"VER",s.la),Qe(s,f),f}function Fi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new X(new Rn({eb:l})):new X(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ui(){}n=Ui.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Dn(){}Dn.prototype.g=function(s,a){return new vt(s,a)};function vt(s,a){ht.call(this),this.g=new Vi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!q(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!q(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ce(this)}D(vt,ht),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Or(this.g)},vt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Rr(s),s=l);a.i.push(new Vu(a.Ya++,s)),a.G==3&&Cn(a)},vt.prototype.N=function(){this.g.l=null,delete this.j,Or(this.g),delete this.g,vt.aa.N.call(this)};function qi(s){Pr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(qi,Pr);function Bi(){Vr.call(this),this.status=1}D(Bi,Vr);function ce(s){this.g=s}D(ce,Ui),ce.prototype.ua=function(){_t(this.g,"a")},ce.prototype.ta=function(s){_t(this.g,new qi(s))},ce.prototype.sa=function(s){_t(this.g,new Bi)},ce.prototype.ra=function(){_t(this.g,"b")},Dn.prototype.createWebChannel=Dn.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Ko=function(){return new Dn},Go=function(){return yn()},zo=Jt,Hr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},En.NO_ERROR=0,En.TIMEOUT=8,En.HTTP_ERROR=6,Un=En,ri.COMPLETE="complete",$o=ri,Js.EventType=Me,Me.OPEN="a",Me.CLOSE="b",Me.ERROR="c",Me.MESSAGE="d",ht.prototype.listen=ht.prototype.K,He=Js,X.prototype.listenOnce=X.prototype.L,X.prototype.getLastError=X.prototype.Ka,X.prototype.getLastErrorCode=X.prototype.Ba,X.prototype.getStatus=X.prototype.Z,X.prototype.getResponseJson=X.prototype.Oa,X.prototype.getResponseText=X.prototype.oa,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Ha,jo=X}).apply(typeof kn<"u"?kn:typeof self<"u"?self:typeof window<"u"?window:{});const $i="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pe="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new Ku("@firebase/firestore");function de(){return se.logLevel}function N(n,...t){if(se.logLevel<=Lt.DEBUG){const e=t.map(hs);se.debug(`Firestore (${Pe}): ${n}`,...e)}}function Ot(n,...t){if(se.logLevel<=Lt.ERROR){const e=t.map(hs);se.error(`Firestore (${Pe}): ${n}`,...e)}}function Ee(n,...t){if(se.logLevel<=Lt.WARN){const e=t.map(hs);se.warn(`Firestore (${Pe}): ${n}`,...e)}}function hs(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Pe}) INTERNAL ASSERTION FAILED: `+n;throw Ot(t),new Error(t)}function K(n,t){n||M()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Wu{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class il{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(pt.UNAUTHENTICATED))}shutdown(){}}class ol{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class al{constructor(t){this.t=t,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){K(this.o===void 0);let r=this.i;const i=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,t.enqueueRetryable(()=>i(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new Qo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string"),new pt(t)}}class ul{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ll{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new ul(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hl{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){K(this.o===void 0);const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(K(typeof e.token=="string"),this.R=e.token,new cl(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=fl(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function j(n,t){return n<t?-1:n>t?1:0}function Te(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new rt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?j(this.nanoseconds,t.nanoseconds):j(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new rt(0,0))}static max(){return new O(new rt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Pt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Pt?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=Pt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return Math.sign(t.length-e.length)}static compareSegments(t,e){const r=Pt.isNumericId(t),i=Pt.isNumericId(e);return r&&!i?-1:!r&&i?1:r&&i?Pt.extractNumericId(t).compare(Pt.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return zt.fromString(t.substring(4,t.length-2))}}class Y extends Pt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const dl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Pt{construct(t,e,r){return new ut(t,e,r)}static isValidIdentifier(t){return dl.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new x(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(r+=c,i++):(o(),i++)}if(o(),u)throw new x(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(e)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.path=t}static fromPath(t){return new L(Y.fromString(t))}static fromName(t){return new L(Y.fromString(t).popFirst(5))}static empty(){return new L(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new L(new Y(t.slice()))}}function ml(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=O.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new Kt(i,L.empty(),t)}function pl(n){return new Kt(n.readTime,n.key,-1)}class Kt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Kt(O.min(),L.empty(),-1)}static max(){return new Kt(O.max(),L.empty(),-1)}}function gl(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=L.comparator(n.documentKey,t.documentKey),e!==0?e:j(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==_l)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new S((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof S?e:S.resolve(e)}catch(e){return S.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):S.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):S.reject(e)}static resolve(t){return new S((e,r)=>{e(t)})}static reject(t){return new S((e,r)=>{r(t)})}static waitFor(t){return new S((e,r)=>{let i=0,o=0,u=!1;t.forEach(c=>{++i,c.next(()=>{++o,u&&o===i&&e()},h=>r(h))}),u=!0,o===i&&e()})}static or(t){let e=S.resolve(!1);for(const r of t)e=e.next(i=>i?S.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new S((r,i)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(g=>{u[d]=g,++c,c===o&&r(u)},g=>i(g))}})}static doWhile(t,e){return new S((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function El(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ce(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}er.oe=-1;function nr(n){return n==null}function zn(n){return n===0&&1/n==-1/0}function Tl(n){return typeof n=="number"&&Number.isInteger(n)&&!zn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=zi(t)),t=vl(n.get(e),t);return zi(t)}function vl(n,t){let e=t;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":e+="";break;case"":e+="";break;default:e+=o}}return e}function zi(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Yt(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Wo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,e){this.comparator=t,this.root=e||at.EMPTY}insert(t,e){return new W(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,at.BLACK,null,null))}remove(t){return new W(this.comparator,this.root.remove(t,this.comparator).copy(null,null,at.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xn(this.root,t,this.comparator,!0)}}class xn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class at{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=o??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new at(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,i,o){return this}insert(t,e,r){return new at(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.comparator=t,this.data=new W(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ki(this.data.getIterator())}getIteratorFrom(t){return new Ki(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class Ki{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new St([])}unionWith(t){let e=new st(ut.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new St(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Te(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Xo("Invalid base64 string: "+o):o}}(t);return new lt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o}(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return j(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Il=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(K(!!n),typeof n=="string"){let t=0;const e=Il.exec(n);if(K(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:J(n.seconds),nanos:J(n.nanos)}}function J(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ht(n){return typeof n=="string"?lt.fromBase64String(n):lt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function rr(n){const t=n.mapValue.fields.__previous_value__;return fs(t)?rr(t):t}function en(n){const t=Qt(n.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e,r,i,o,u,c,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=d}}class nn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof nn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fs(n)?4:Sl(n)?9007199254740991:Rl(n)?10:11:M()}function bt(n,t){if(n===t)return!0;const e=Wt(n);if(e!==Wt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return en(n).isEqual(en(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Qt(i.timestampValue),c=Qt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return Ht(i.bytesValue).isEqual(Ht(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),c=J(o.doubleValue);return u===c?zn(u)===zn(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return Te(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:case 11:return function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(Gi(u)!==Gi(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!bt(u[h],c[h])))return!1;return!0}(n,t);default:return M()}}function rn(n,t){return(n.values||[]).find(e=>bt(e,t))!==void 0}function Ae(n,t){if(n===t)return 0;const e=Wt(n),r=Wt(t);if(e!==r)return j(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=J(o.integerValue||o.doubleValue),h=J(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return Qi(n.timestampValue,t.timestampValue);case 4:return Qi(en(n),en(t));case 5:return j(n.stringValue,t.stringValue);case 6:return function(o,u){const c=Ht(o),h=Ht(u);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let d=0;d<c.length&&d<h.length;d++){const g=j(c[d],h[d]);if(g!==0)return g}return j(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=j(J(o.latitude),J(u.latitude));return c!==0?c:j(J(o.longitude),J(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Hi(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,d,g;const I=o.fields||{},R=u.fields||{},P=(c=I.value)===null||c===void 0?void 0:c.arrayValue,D=(h=R.value)===null||h===void 0?void 0:h.arrayValue,k=j(((d=P?.values)===null||d===void 0?void 0:d.length)||0,((g=D?.values)===null||g===void 0?void 0:g.length)||0);return k!==0?k:Hi(P,D)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Ln.mapValue&&u===Ln.mapValue)return 0;if(o===Ln.mapValue)return 1;if(u===Ln.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),d=u.fields||{},g=Object.keys(d);h.sort(),g.sort();for(let I=0;I<h.length&&I<g.length;++I){const R=j(h[I],g[I]);if(R!==0)return R;const P=Ae(c[h[I]],d[g[I]]);if(P!==0)return P}return j(h.length,g.length)}(n.mapValue,t.mapValue);default:throw M()}}function Qi(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return j(n,t);const e=Qt(n),r=Qt(t),i=j(e.seconds,r.seconds);return i!==0?i:j(e.nanos,r.nanos)}function Hi(n,t){const e=n.values||[],r=t.values||[];for(let i=0;i<e.length&&i<r.length;++i){const o=Ae(e[i],r[i]);if(o)return o}return j(e.length,r.length)}function ve(n){return Wr(n)}function Wr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Qt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ht(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return L.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Wr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of r)o?o=!1:i+=",",i+=`${u}:${Wr(e.fields[u])}`;return i+"}"}(n.mapValue):M()}function qn(n){switch(Wt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=rr(n);return t?16+qn(t):16;case 5:return 2*n.stringValue.length;case 6:return Ht(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+qn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return Yt(r.fields,(o,u)=>{i+=o.length+qn(u)}),i}(n.mapValue);default:throw M()}}function Xr(n){return!!n&&"integerValue"in n}function ds(n){return!!n&&"arrayValue"in n}function Wi(n){return!!n&&"nullValue"in n}function Xi(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Bn(n){return!!n&&"mapValue"in n}function Rl(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function Ye(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Yt(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ye(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ye(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Sl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Bn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ye(e)}setAll(t){let e=ut.emptyPath(),r={},i=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,i),r={},i=[],e=c.popLast()}u?r[c.lastSegment()]=Ye(u):i.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Bn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Bn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Yt(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new It(Ye(this.value))}}function Yo(n){const t=[];return Yt(n.fields,(e,r)=>{const i=new ut([e]);if(Bn(r)){const o=Yo(r.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)}),new St(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t,e,r,i,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new gt(t,0,O.min(),O.min(),O.min(),It.empty(),0)}static newFoundDocument(t,e,r,i){return new gt(t,1,e,O.min(),r,i,0)}static newNoDocument(t,e){return new gt(t,2,e,O.min(),O.min(),It.empty(),0)}static newUnknownDocument(t,e){return new gt(t,3,e,O.min(),O.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof gt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t,e){this.position=t,this.inclusive=e}}function Yi(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],u=n.position[i];if(o.field.isKeyField()?r=L.comparator(L.fromName(u.referenceValue),e.key):r=Ae(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ji(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pl(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{}class nt extends Jo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Cl(t,e,r):e==="array-contains"?new Nl(t,r):e==="in"?new kl(t,r):e==="not-in"?new xl(t,r):e==="array-contains-any"?new Ll(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bl(t,r):new Dl(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ae(e,this.value)):e!==null&&Wt(this.value)===Wt(e)&&this.matchesComparison(Ae(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Jo{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Dt(t,e)}matches(t){return Zo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zo(n){return n.op==="and"}function ta(n){return Vl(n)&&Zo(n)}function Vl(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function Yr(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+ve(n.value);if(ta(n))return n.filters.map(t=>Yr(t)).join(",");{const t=n.filters.map(e=>Yr(e)).join(",");return`${n.op}(${t})`}}function ea(n,t){return n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(n,t):n instanceof Dt?function(r,i){return i instanceof Dt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,u,c)=>o&&ea(u,i.filters[c]),!0):!1}(n,t):void M()}function na(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${ve(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(na).join(" ,")+"}"}(n):"Filter"}class Cl extends nt{constructor(t,e,r){super(t,e,r),this.key=L.fromName(r.referenceValue)}matches(t){const e=L.comparator(t.key,this.key);return this.matchesComparison(e)}}class bl extends nt{constructor(t,e){super(t,"in",e),this.keys=ra("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dl extends nt{constructor(t,e){super(t,"not-in",e),this.keys=ra("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ra(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>L.fromName(r.referenceValue))}class Nl extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ds(e)&&rn(e.arrayValue,this.value)}}class kl extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&rn(this.value.arrayValue,e)}}class xl extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!rn(this.value.arrayValue,e)}}class Ll extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ds(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>rn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e=null,r=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function Zi(n,t=null,e=[],r=[],i=null,o=null,u=null){return new Ml(n,t,e,r,i,o,u)}function ms(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Yr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),nr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ve(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ve(r)).join(",")),t.ue=e}return t.ue}function ps(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Pl(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ea(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ji(n.startAt,t.startAt)&&Ji(n.endAt,t.endAt)}function Jr(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e=null,r=[],i=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ol(n,t,e,r,i,o,u,c){return new sr(n,t,e,r,i,o,u,c)}function gs(n){return new sr(n)}function to(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Fl(n){return n.collectionGroup!==null}function Je(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new st(ut.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Kn(o,r))}),e.has(ut.keyField().canonicalString())||t.ce.push(new Kn(ut.keyField(),r))}return t.ce}function Vt(n){const t=F(n);return t.le||(t.le=Ul(t,Je(n))),t.le}function Ul(n,t){if(n.limitType==="F")return Zi(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Kn(i.field,o)});const e=n.endAt?new Gn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Gn(n.startAt.position,n.startAt.inclusive):null;return Zi(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Zr(n,t,e){return new sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ir(n,t){return ps(Vt(n),Vt(t))&&n.limitType===t.limitType}function sa(n){return`${ms(Vt(n))}|lt:${n.limitType}`}function me(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>na(i)).join(", ")}]`),nr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>ve(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>ve(i)).join(",")),`Target(${r})`}(Vt(n))}; limitType=${n.limitType})`}function or(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):L.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Je(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(u,c,h){const d=Yi(u,c,h);return u.inclusive?d<=0:d<0}(r.startAt,Je(r),i)||r.endAt&&!function(u,c,h){const d=Yi(u,c,h);return u.inclusive?d>=0:d>0}(r.endAt,Je(r),i))}(n,t)}function ql(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ia(n){return(t,e)=>{let r=!1;for(const i of Je(n)){const o=Bl(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function Bl(n,t,e){const r=n.field.isKeyField()?L.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),d=c.data.field(o);return h!==null&&d!==null?Ae(h,d):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Yt(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Wo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new W(L.comparator);function Ft(){return jl}const oa=new W(L.comparator);function We(...n){let t=oa;for(const e of n)t=t.insert(e.key,e);return t}function aa(n){let t=oa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ne(){return Ze()}function ua(){return Ze()}function Ze(){return new ie(n=>n.toString(),(n,t)=>n.isEqual(t))}const $l=new W(L.comparator),zl=new st(L.comparator);function B(...n){let t=zl;for(const e of n)t=t.add(e);return t}const Gl=new st(j);function Kl(){return Gl}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zn(t)?"-0":t}}function la(n){return{integerValue:""+n}}function ca(n,t){return Tl(t)?la(t):_s(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this._=void 0}}function Ql(n,t,e){return n instanceof Qn?function(i,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&fs(o)&&(o=rr(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof Ie?fa(n,t):n instanceof sn?da(n,t):function(i,o){const u=ha(i,o),c=eo(u)+eo(i.Pe);return Xr(u)&&Xr(i.Pe)?la(c):_s(i.serializer,c)}(n,t)}function Hl(n,t,e){return n instanceof Ie?fa(n,t):n instanceof sn?da(n,t):e}function ha(n,t){return n instanceof on?function(r){return Xr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Qn extends ar{}class Ie extends ar{constructor(t){super(),this.elements=t}}function fa(n,t){const e=ma(t);for(const r of n.elements)e.some(i=>bt(i,r))||e.push(r);return{arrayValue:{values:e}}}class sn extends ar{constructor(t){super(),this.elements=t}}function da(n,t){let e=ma(t);for(const r of n.elements)e=e.filter(i=>!bt(i,r));return{arrayValue:{values:e}}}class on extends ar{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function eo(n){return J(n.integerValue||n.doubleValue)}function ma(n){return ds(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e){this.field=t,this.transform=e}}function Wl(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Ie&&i instanceof Ie||r instanceof sn&&i instanceof sn?Te(r.elements,i.elements,bt):r instanceof on&&i instanceof on?bt(r.Pe,i.Pe):r instanceof Qn&&i instanceof Qn}(n.transform,t.transform)}class Xl{constructor(t,e){this.version=t,this.transformResults=e}}class Mt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Mt}static exists(t){return new Mt(void 0,t)}static updateTime(t){return new Mt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function jn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ur{}function ga(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ya(n.key,Mt.none()):new lr(n.key,n.data,Mt.none());{const e=n.data,r=It.empty();let i=new st(ut.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),i=i.add(o)}return new oe(n.key,r,new St(i.toArray()),Mt.none())}}function Yl(n,t,e){n instanceof lr?function(i,o,u){const c=i.value.clone(),h=ro(i.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof oe?function(i,o,u){if(!jn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=ro(i.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(_a(i)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function tn(n,t,e,r){return n instanceof lr?function(o,u,c,h){if(!jn(o.precondition,u))return c;const d=o.value.clone(),g=so(o.fieldTransforms,h,u);return d.setAll(g),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof oe?function(o,u,c,h){if(!jn(o.precondition,u))return c;const d=so(o.fieldTransforms,h,u),g=u.data;return g.setAll(_a(o)),g.setAll(d),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(I=>I.field))}(n,t,e,r):function(o,u,c){return jn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Jl(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),o=ha(r.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function no(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Te(r,i,(o,u)=>Wl(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class lr extends ur{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class oe extends ur{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function _a(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ro(n,t,e){const r=new Map;K(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],u=o.transform,c=t.data.field(o.field);r.set(o.field,Hl(u,c,e[i]))}return r}function so(n,t,e){const r=new Map;for(const i of n){const o=i.transform,u=e.data.field(i.field);r.set(i.field,Ql(o,u,t))}return r}class ya extends ur{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zl extends ur{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Yl(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=tn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=tn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ua();return this.mutations.forEach(i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const h=ga(u,c);h!==null&&r.set(i.key,h),u.isValidDocument()||u.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&Te(this.mutations,t.mutations,(e,r)=>no(e,r))&&Te(this.baseMutations,t.baseMutations,(e,r)=>no(e,r))}}class ys{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){K(t.mutations.length===r.length);let i=function(){return $l}();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,r[u].version);return new ys(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,$;function rc(n){switch(n){default:return M();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function Ea(n){if(n===void 0)return Ot("GRPC error has no .code"),V.UNKNOWN;switch(n){case tt.OK:return V.OK;case tt.CANCELLED:return V.CANCELLED;case tt.UNKNOWN:return V.UNKNOWN;case tt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case tt.INTERNAL:return V.INTERNAL;case tt.UNAVAILABLE:return V.UNAVAILABLE;case tt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case tt.NOT_FOUND:return V.NOT_FOUND;case tt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case tt.ABORTED:return V.ABORTED;case tt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case tt.DATA_LOSS:return V.DATA_LOSS;default:return M()}}($=tt||(tt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new zt([4294967295,4294967295],0);function io(n){const t=sc().encode(n),e=new Bo;return e.update(t),new Uint8Array(e.digest())}function oo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new zt([e,r],0),new zt([i,o],0)]}class Es{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Xe(`Invalid padding: ${e}`);if(r<0)throw new Xe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Xe(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Xe(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ie=zt.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(zt.fromNumber(r)));return i.compare(ic)===1&&(i=new zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}Ee(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=io(t),[r,i]=oo(e);for(let o=0;o<this.hashCount;o++){const u=this.de(r,i,o);if(!this.Ee(u))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Es(o,i,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Te===0)return;const e=io(t),[r,i]=oo(e);for(let o=0;o<this.hashCount;o++){const u=this.de(r,i,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Xe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new cr(O.min(),i,new W(j),Ft(),B())}}class ln{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ln(r,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Ta{constructor(t,e){this.targetId=t,this.me=e}}class Aa{constructor(t,e,r=lt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ao{constructor(){this.fe=0,this.ge=uo(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=B(),e=B(),r=B();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M()}}),new ln(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=uo()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,K(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class oc{constructor(t){this.Be=t,this.Le=new Map,this.ke=Ft(),this.qe=Mn(),this.Qe=Mn(),this.Ke=new W(j)}$e(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.Ue(e,t.Ve):this.We(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.We(e,t.key,t.Ve)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.je(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Le.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.me.count,i=this.Ye(e);if(i){const o=i.target;if(Jr(o))if(r===0){const u=new L(o.path);this.We(e,u,gt.newNoDocument(u,O.min()))}else K(r===1);else{const u=this.Ze(e);if(u!==r){const c=this.Xe(t),h=c?this.et(c,t,u):1;if(h!==0){this.He(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}Xe(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=Ht(r).toUint8Array()}catch(h){if(h instanceof Xo)return Ee("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Es(u,i,o)}catch(h){return Ee(h instanceof Xe?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Te===0?null:c}et(t,e,r){return e.me.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Be.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const u=this.Be.nt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.We(e,o,null),i++)}),i}it(t){const e=new Map;this.Le.forEach((o,u)=>{const c=this.Ye(u);if(c){if(o.current&&Jr(c.target)){const h=new L(c.target.path);this.st(h).has(u)||this.ot(u,h)||this.We(u,h,gt.newNoDocument(h,t))}o.be&&(e.set(u,o.ve()),o.Ce())}});let r=B();this.Qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const d=this.Ye(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const i=new cr(t,e,this.Ke,this.ke,r);return this.ke=Ft(),this.qe=Mn(),this.Qe=Mn(),this.Ke=new W(j),i}Ue(t,e){if(!this.je(t))return;const r=this.ot(t,e.key)?2:0;this.ze(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t)),this.Qe=this.Qe.insert(e.key,this._t(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.ot(t,e)?i.Fe(e,1):i.Me(e),this.Qe=this.Qe.insert(e,this._t(e).delete(t)),this.Qe=this.Qe.insert(e,this._t(e).add(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Le.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.ze(t).xe()}ze(t){let e=this.Le.get(t);return e||(e=new ao,this.Le.set(t,e)),e}_t(t){let e=this.Qe.get(t);return e||(e=new st(j),this.Qe=this.Qe.insert(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new st(j),this.qe=this.qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.Le.get(t);return e&&e.Se?null:this.Be.ut(t)}He(t){this.Le.set(t,new ao),this.Be.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}ot(t,e){return this.Be.getRemoteKeysForTarget(t).has(e)}}function Mn(){return new W(L.comparator)}function uo(){return new W(L.comparator)}const ac={asc:"ASCENDING",desc:"DESCENDING"},uc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lc={and:"AND",or:"OR"};class cc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ts(n,t){return n.useProto3Json||nr(t)?t:{value:t}}function Hn(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function va(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function hc(n,t){return Hn(n,t.toTimestamp())}function Ct(n){return K(!!n),O.fromTimestamp(function(e){const r=Qt(e);return new rt(r.seconds,r.nanos)}(n))}function Ts(n,t){return es(n,t).canonicalString()}function es(n,t){const e=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ia(n){const t=Y.fromString(n);return K(Va(t)),t}function ns(n,t){return Ts(n.databaseId,t.path)}function Br(n,t){const e=Ia(t);if(e.get(1)!==n.databaseId.projectId)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new L(Ra(e))}function wa(n,t){return Ts(n.databaseId,t)}function fc(n){const t=Ia(n);return t.length===4?Y.emptyPath():Ra(t)}function rs(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ra(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function lo(n,t,e){return{name:ns(n,t),fields:e.value.mapValue.fields}}function dc(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(d,g){return d.useProto3Json?(K(g===void 0||typeof g=="string"),lt.fromBase64String(g||"")):(K(g===void 0||g instanceof Buffer||g instanceof Uint8Array),lt.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(d){const g=d.code===void 0?V.UNKNOWN:Ea(d.code);return new x(g,d.message||"")}(u);e=new Aa(r,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Br(n,r.document.name),o=Ct(r.document.updateTime),u=r.document.createTime?Ct(r.document.createTime):O.min(),c=new It({mapValue:{fields:r.document.fields}}),h=gt.newFoundDocument(i,o,u,c),d=r.targetIds||[],g=r.removedTargetIds||[];e=new $n(d,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Br(n,r.document),o=r.readTime?Ct(r.readTime):O.min(),u=gt.newNoDocument(i,o),c=r.removedTargetIds||[];e=new $n([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Br(n,r.document),o=r.removedTargetIds||[];e=new $n([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,u=new nc(i,o),c=r.targetId;e=new Ta(c,u)}}return e}function mc(n,t){let e;if(t instanceof lr)e={update:lo(n,t.key,t.value)};else if(t instanceof ya)e={delete:ns(n,t.key)};else if(t instanceof oe)e={update:lo(n,t.key,t.data),updateMask:Ic(t.fieldMask)};else{if(!(t instanceof Zl))return M();e={verify:ns(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,u){const c=u.transform;if(c instanceof Qn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ie)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof sn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof on)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:hc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function pc(n,t){return n&&n.length>0?(K(t!==void 0),n.map(e=>function(i,o){let u=i.updateTime?Ct(i.updateTime):Ct(o);return u.isEqual(O.min())&&(u=Ct(o)),new Xl(u,i.transformResults||[])}(e,t))):[]}function gc(n,t){return{documents:[wa(n,t.path)]}}function _c(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=wa(n,i);const o=function(d){if(d.length!==0)return Pa(Dt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(d){if(d.length!==0)return d.map(g=>function(R){return{field:pe(R.field),direction:Tc(R.dir)}}(g))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ts(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ct:e,parent:i}}function yc(n){let t=fc(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){K(r===1);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(I){const R=Sa(I);return R instanceof Dt&&ta(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(I){return I.map(R=>function(D){return new Kn(ge(D.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(I){let R;return R=typeof I=="object"?I.value:I,nr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(I){const R=!!I.before,P=I.values||[];return new Gn(P,R)}(e.startAt));let d=null;return e.endAt&&(d=function(I){const R=!I.before,P=I.values||[];return new Gn(P,R)}(e.endAt)),Ol(t,i,u,o,c,"F",h,d)}function Ec(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Sa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ge(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ge(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=ge(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ge(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return nt.create(ge(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>Sa(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function Tc(n){return ac[n]}function Ac(n){return uc[n]}function vc(n){return lc[n]}function pe(n){return{fieldPath:n.canonicalString()}}function ge(n){return ut.fromServerFormat(n.fieldPath)}function Pa(n){return n instanceof nt?function(e){if(e.op==="=="){if(Xi(e.value))return{unaryFilter:{field:pe(e.field),op:"IS_NAN"}};if(Wi(e.value))return{unaryFilter:{field:pe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xi(e.value))return{unaryFilter:{field:pe(e.field),op:"IS_NOT_NAN"}};if(Wi(e.value))return{unaryFilter:{field:pe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pe(e.field),op:Ac(e.op),value:e.value}}}(n):n instanceof Dt?function(e){const r=e.getFilters().map(i=>Pa(i));return r.length===1?r[0]:{compositeFilter:{op:vc(e.op),filters:r}}}(n):M()}function Ic(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Va(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e,r,i,o=O.min(),u=O.min(),c=lt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.ht=t}}function Rc(n){const t=yc({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.ln=new Pc}addToCollectionParentIndex(t,e){return this.ln.add(e),S.resolve()}getCollectionParents(t,e){return S.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return S.resolve()}deleteFieldIndex(t,e){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,e){return S.resolve()}getDocumentsMatchingTarget(t,e){return S.resolve(null)}getIndexType(t,e){return S.resolve(0)}getFieldIndexes(t,e){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,e){return S.resolve(Kt.min())}getMinOffsetFromCollectionGroup(t,e){return S.resolve(Kt.min())}updateCollectionGroup(t,e,r){return S.resolve()}updateIndexEntries(t,e){return S.resolve()}}class Pc{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new st(Y.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tt{static withCacheSize(t){return new Tt(t,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(41943040,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new we(0)}static Qn(){return new we(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho([n,t],[e,r]){const i=j(n,e);return i===0?j(t,r):i}class Vc{constructor(t){this.Gn=t,this.buffer=new st(ho),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ho(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Cc{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(t){N("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ce(e)?N("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ve(e)}await this.Yn(3e5)})}}class bc{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return S.resolve(er.oe);const r=new Vc(e);return this.Zn.forEachTarget(t,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(t,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Zn.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),S.resolve(co)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),co):this.tr(t,e))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let r,i,o,u,c,h,d;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,u=Date.now(),this.nthSequenceNumber(t,i))).next(I=>(r=I,c=Date.now(),this.removeTargets(t,r,e))).next(I=>(o=I,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(I=>(d=Date.now(),de()<=Lt.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-g}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${I} documents in `+(d-h)+`ms
Total Duration: ${d-g}ms`),S.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I})))}}function Dc(n,t){return new bc(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.changes=new ie(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,gt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?S.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&tn(r.mutation,i,St.empty(),rt.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const i=ne();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let u=We();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=ne();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,i){let o=Ft();const u=Ze(),c=function(){return Ze()}();return e.forEach((h,d)=>{const g=r.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof oe)?o=o.insert(d.key,d):g!==void 0?(u.set(d.key,g.mutation.getFieldMask()),tn(g.mutation,d,g.mutation.getFieldMask(),rt.now())):u.set(d.key,St.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,g)=>u.set(d,g)),e.forEach((d,g)=>{var I;return c.set(d,new kc(g,(I=u.get(d))!==null&&I!==void 0?I:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Ze();let i=new W((u,c)=>u-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let g=r.get(h)||St.empty();g=c.applyToLocalView(d,g),r.set(h,g);const I=(i.get(c.batchId)||B()).add(h);i=i.insert(c.batchId,I)})}).next(()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),d=h.key,g=h.value,I=ua();g.forEach(R=>{if(!o.has(R)){const P=ga(e.get(R),r.get(R));P!==null&&I.set(R,P),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,d,I))}return S.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(u){return L.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Fl(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):S.resolve(ne());let c=-1,h=o;return u.next(d=>S.forEach(d,(g,I)=>(c<I.largestBatchId&&(c=I.largestBatchId),o.get(g)?S.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,B())).next(g=>({batchId:c,changes:aa(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new L(e)).next(r=>{let i=We();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let u=We();return this.indexManager.getCollectionParents(t,o).next(c=>S.forEach(c,h=>{const d=function(I,R){return new sr(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,i).next(g=>{g.forEach((I,R)=>{u=u.insert(I,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(u=>{o.forEach((h,d)=>{const g=d.getKey();u.get(g)===null&&(u=u.insert(g,gt.newInvalidDocument(g)))});let c=We();return u.forEach((h,d)=>{const g=o.get(h);g!==void 0&&tn(g.mutation,d,St.empty(),rt.now()),or(e,d)&&(c=c.insert(h,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return S.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Ct(i.createTime)}}(e)),S.resolve()}getNamedQuery(t,e){return S.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(i){return{name:i.name,query:Rc(i.bundledQuery),readTime:Ct(i.readTime)}}(e)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this.overlays=new W(L.comparator),this.dr=new Map}getOverlay(t,e){return S.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ne();return S.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.Tt(t,e,o)}),S.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.dr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.dr.delete(r)),S.resolve()}getOverlaysForCollection(t,e,r){const i=ne(),o=e.length+1,u=new L(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return S.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new W((d,g)=>d-g);const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let g=o.get(d.largestBatchId);g===null&&(g=ne(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=ne(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,g)=>c.set(d,g)),!(c.size()>=i)););return S.resolve(c)}Tt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const u=this.dr.get(i.largestBatchId).delete(r.key);this.dr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new ec(e,r));let o=this.dr.get(e);o===void 0&&(o=B(),this.dr.set(e,o)),this.dr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return S.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,S.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.Er=new st(it.Ar),this.Rr=new st(it.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(t,e){const r=new it(t,e);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.gr(new it(t,e))}pr(t,e){t.forEach(r=>this.removeReference(r,e))}yr(t){const e=new L(new Y([])),r=new it(e,t),i=new it(e,t+1),o=[];return this.Rr.forEachInRange([r,i],u=>{this.gr(u),o.push(u.key)}),o}wr(){this.Er.forEach(t=>this.gr(t))}gr(t){this.Er=this.Er.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new L(new Y([])),r=new it(e,t),i=new it(e,t+1);let o=B();return this.Rr.forEachInRange([r,i],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),r=this.Er.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return L.comparator(t.key,e.key)||j(t.br,e.br)}static Vr(t,e){return j(t.br,e.br)||L.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new st(it.Ar)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new tc(o,e,r,i);this.mutationQueue.push(u);for(const c of i)this.vr=this.vr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return S.resolve(u)}lookupMutationBatch(t,e){return S.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Fr(r),o=i<0?0:i;return S.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),i=new it(e,Number.POSITIVE_INFINITY),o=[];return this.vr.forEachInRange([r,i],u=>{const c=this.Cr(u.br);o.push(c)}),S.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(j);return e.forEach(i=>{const o=new it(i,0),u=new it(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([o,u],c=>{r=r.add(c.br)})}),S.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;L.isDocumentKey(o)||(o=o.child(""));const u=new it(new L(o),0);let c=new st(j);return this.vr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(h.br)),!0)},u),S.resolve(this.Mr(c))}Mr(t){const e=[];return t.forEach(r=>{const i=this.Cr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){K(this.Or(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return S.forEach(e.mutations,i=>{const o=new it(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.vr=r})}Bn(t){}containsKey(t,e){const r=new it(e,0),i=this.vr.firstAfterOrEqual(r);return S.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t){this.Nr=t,this.docs=function(){return new W(L.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,u=this.Nr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return S.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(e))}getEntries(t,e){let r=Ft();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():gt.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Ft();const u=e.path,c=new L(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:d,value:{document:g}}=h.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||gl(pl(g),r)<=0||(i.has(g.key)||or(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return S.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M()}Br(t,e){return S.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new qc(this)}getSize(t){return S.resolve(this.size)}}class qc extends Nc{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.hr.addEntry(t,i)):this.hr.removeEntry(r)}),S.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t){this.persistence=t,this.Lr=new ie(e=>ms(e),ps),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.kr=0,this.qr=new As,this.targetCount=0,this.Qr=we.qn()}forEachTarget(t,e){return this.Lr.forEach((r,i)=>e(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.kr&&(this.kr=e),S.resolve()}Un(t){this.Lr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new we(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,S.resolve()}updateTargetData(t,e){return this.Un(e),S.resolve()}removeTargetData(t,e){return this.Lr.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Lr.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Lr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)}),S.waitFor(o).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,e){const r=this.Lr.get(e)||null;return S.resolve(r)}addMatchingKeys(t,e,r){return this.qr.mr(e,r),S.resolve()}removeMatchingKeys(t,e,r){this.qr.pr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(u=>{o.push(i.markPotentiallyOrphaned(t,u))}),S.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),S.resolve()}getMatchingKeysForTargetId(t,e){const r=this.qr.Sr(e);return S.resolve(r)}containsKey(t,e){return S.resolve(this.qr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(t,e){this.Kr={},this.overlays={},this.$r=new er(0),this.Ur=!1,this.Ur=!0,this.Wr=new Oc,this.referenceDelegate=t(this),this.Gr=new Bc(this),this.indexManager=new Sc,this.remoteDocumentCache=function(i){return new Uc(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new wc(e),this.jr=new Lc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Mc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Kr[t.toKey()];return r||(r=new Fc(e,this.referenceDelegate),this.Kr[t.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const i=new jc(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(o=>this.referenceDelegate.Jr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Yr(t,e){return S.or(Object.values(this.Kr).map(r=>()=>r.containsKey(t,e)))}}class jc extends yl{constructor(t){super(),this.currentSequenceNumber=t}}class vs{constructor(t){this.persistence=t,this.Zr=new As,this.Xr=null}static ei(t){return new vs(t)}get ti(){if(this.Xr)return this.Xr;throw M()}addReference(t,e,r){return this.Zr.addReference(r,e),this.ti.delete(r.toString()),S.resolve()}removeReference(t,e,r){return this.Zr.removeReference(r,e),this.ti.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),S.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.ti.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.ti,r=>{const i=L.fromPath(r);return this.ni(t,i).next(o=>{o||e.removeEntry(i,O.min())})}).next(()=>(this.Xr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ni(t,e).next(r=>{r?this.ti.delete(e.toString()):this.ti.add(e.toString())})}zr(t){return 0}ni(t,e){return S.or([()=>S.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class Wn{constructor(t,e){this.persistence=t,this.ri=new ie(r=>Al(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=Dc(this,e)}static ei(t,e){return new Wn(t,e)}Hr(){}Jr(t){return S.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(i=>r+i))}nr(t){let e=0;return this.er(t,r=>{e++}).next(()=>e)}er(t,e){return S.forEach(this.ri,(r,i)=>this.ir(t,r,i).next(o=>o?S.resolve():e(i)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.Br(t,u=>this.ir(t,u,e).next(c=>{c||(r++,o.removeEntry(u,O.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),S.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),S.resolve()}removeReference(t,e,r){return this.ri.set(r,t.currentSequenceNumber),S.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),S.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=qn(t.data.value)),e}ir(t,e,r){return S.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.ri.get(e);return S.resolve(i!==void 0&&i>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Wi=r,this.Gi=i}static zi(t,e){let r=B(),i=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Is(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return nl()?8:El(rl())>0?6:4}()}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Xi(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.es(t,e,i,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new $c;return this.ts(t,e,u).next(c=>{if(o.result=c,this.Hi)return this.ns(t,e,u,c.size)})}).next(()=>o.result)}ns(t,e,r,i){return r.documentReadCount<this.Ji?(de()<=Lt.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",me(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),S.resolve()):(de()<=Lt.DEBUG&&N("QueryEngine","Query:",me(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(de()<=Lt.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",me(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(e))):S.resolve())}Xi(t,e){if(to(e))return S.resolve(null);let r=Vt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Zr(e,null,"F"),r=Vt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=B(...o);return this.Zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.rs(e,c);return this.ss(e,d,u,h.readTime)?this.Xi(t,Zr(e,null,"F")):this.os(t,d,e,h)}))})))}es(t,e,r,i){return to(e)||i.isEqual(O.min())?S.resolve(null):this.Zi.getDocuments(t,r).next(o=>{const u=this.rs(e,o);return this.ss(e,u,r,i)?S.resolve(null):(de()<=Lt.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),me(e)),this.os(t,u,e,ml(i,-1)).next(c=>c))})}rs(t,e){let r=new st(ia(t));return e.forEach((i,o)=>{or(t,o)&&(r=r.add(o))}),r}ss(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ts(t,e,r){return de()<=Lt.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",me(e)),this.Zi.getDocumentsMatchingQuery(t,e,Kt.min(),r)}os(t,e,r,i){return this.Zi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e,r,i){this.persistence=t,this._s=e,this.serializer=i,this.us=new W(j),this.cs=new ie(o=>ms(o),ps),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(r)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xc(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.us))}}function Kc(n,t,e,r){return new Gc(n,t,e,r)}async function ba(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let h=B();for(const d of i){u.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}for(const d of o){c.push(d.batchId);for(const g of d.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ts:d,removedBatchIds:u,addedBatchIds:c}))})})}function Qc(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),o=e.hs.newChangeBuffer({trackRemovals:!0});return function(c,h,d,g){const I=d.batch,R=I.keys();let P=S.resolve();return R.forEach(D=>{P=P.next(()=>g.getEntry(h,D)).next(k=>{const C=d.docVersions.get(D);K(C!==null),k.version.compareTo(C)<0&&(I.applyToRemoteDocument(k,d),k.isValidDocument()&&(k.setReadTime(d.commitVersion),g.addEntry(k)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(h,I))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=B();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(h=h.add(c.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Da(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Gr.getLastRemoteSnapshotVersion(e))}function Hc(n,t){const e=F(n),r=t.snapshotVersion;let i=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.hs.newChangeBuffer({trackRemovals:!0});i=e.us;const c=[];t.targetChanges.forEach((g,I)=>{const R=i.get(I);if(!R)return;c.push(e.Gr.removeMatchingKeys(o,g.removedDocuments,I).next(()=>e.Gr.addMatchingKeys(o,g.addedDocuments,I)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?P=P.withResumeToken(lt.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,r)),i=i.insert(I,P),function(k,C,U){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(R,P,g)&&c.push(e.Gr.updateTargetData(o,P))});let h=Ft(),d=B();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),c.push(Wc(o,u,t.documentUpdates).next(g=>{h=g.Is,d=g.ds})),!r.isEqual(O.min())){const g=e.Gr.getLastRemoteSnapshotVersion(o).next(I=>e.Gr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(g)}return S.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.us=i,o))}function Wc(n,t,e){let r=B(),i=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=Ft();return e.forEach((c,h)=>{const d=o.get(c);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(O.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",h.version)}),{Is:u,ds:i}})}function Xc(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Yc(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Gr.getTargetData(r,t).next(o=>o?(i=o,S.resolve(i)):e.Gr.allocateTargetId(r).next(u=>(i=new $t(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.us=e.us.insert(r.targetId,r),e.cs.set(t,r.targetId)),r})}async function ss(n,t,e){const r=F(n),i=r.us.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,i))}catch(u){if(!Ce(u))throw u;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.us=r.us.remove(t),r.cs.delete(i.target)}function fo(n,t,e){const r=F(n);let i=O.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",u=>function(h,d,g){const I=F(h),R=I.cs.get(g);return R!==void 0?S.resolve(I.us.get(R)):I.Gr.getTargetData(d,g)}(r,u,Vt(t)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>r._s.getDocumentsMatchingQuery(u,t,e?i:O.min(),e?o:B())).next(c=>(Jc(r,ql(t),c),{documents:c,Es:o})))}function Jc(n,t,e){let r=n.ls.get(t)||O.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ls.set(t,r)}class mo{constructor(){this.activeTargetIds=Kl()}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zc{constructor(){this._o=new mo,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,r){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new mo,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{uo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On=null;function jr(){return On===null?On=function(){return 268435456+Math.round(2147483648*Math.random())}():On++,"0x"+On.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class rh extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+e.host,this.Mo=`projects/${i}/databases/${o}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Oo(e,r,i,o,u){const c=jr(),h=this.No(e,r.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${c}:`,h,i);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(d,o,u),this.Lo(e,h,d,i).then(g=>(N("RestConnection",`Received RPC '${e}' ${c}: `,g),g),g=>{throw Ee("RestConnection",`RPC '${e}' ${c} failed with error: `,g,"url: ",h,"request:",i),g})}ko(e,r,i,o,u,c){return this.Oo(e,r,i,o,u)}Bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Pe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),i&&i.headers.forEach((o,u)=>e[u]=o)}No(e,r){const i=eh[e];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Lo(t,e,r,i){const o=jr();return new Promise((u,c)=>{const h=new jo;h.setWithCredentials(!0),h.listenOnce($o.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Un.NO_ERROR:const g=h.getResponseJson();N(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),u(g);break;case Un.TIMEOUT:N(mt,`RPC '${t}' ${o} timed out`),c(new x(V.DEADLINE_EXCEEDED,"Request time out"));break;case Un.HTTP_ERROR:const I=h.getStatus();if(N(mt,`RPC '${t}' ${o} failed with status:`,I,"response text:",h.getResponseText()),I>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R?.error;if(P&&P.status&&P.message){const D=function(C){const U=C.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(U)>=0?U:V.UNKNOWN}(P.status);c(new x(D,P.message))}else c(new x(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(V.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{N(mt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(i);N(mt,`RPC '${t}' ${o} sending request:`,i),h.send(e,"POST",d,r,15)})}qo(t,e,r){const i=jr(),o=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Ko(),c=Go(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Bo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");N(mt,`Creating RPC '${t}' stream ${i}: ${g}`,h);const I=u.createWebChannel(g,h);let R=!1,P=!1;const D=new nh({Eo:C=>{P?N(mt,`Not sending because RPC '${t}' stream ${i} is closed:`,C):(R||(N(mt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),N(mt,`RPC '${t}' stream ${i} sending:`,C),I.send(C))},Ao:()=>I.close()}),k=(C,U,q)=>{C.listen(U,G=>{try{q(G)}catch(Z){setTimeout(()=>{throw Z},0)}})};return k(I,He.EventType.OPEN,()=>{P||(N(mt,`RPC '${t}' stream ${i} transport opened.`),D.So())}),k(I,He.EventType.CLOSE,()=>{P||(P=!0,N(mt,`RPC '${t}' stream ${i} transport closed`),D.Do())}),k(I,He.EventType.ERROR,C=>{P||(P=!0,Ee(mt,`RPC '${t}' stream ${i} transport errored:`,C),D.Do(new x(V.UNAVAILABLE,"The operation could not be completed")))}),k(I,He.EventType.MESSAGE,C=>{var U;if(!P){const q=C.data[0];K(!!q);const G=q,Z=G?.error||((U=G[0])===null||U===void 0?void 0:U.error);if(Z){N(mt,`RPC '${t}' stream ${i} received error:`,Z);const At=Z.status;let et=function(_){const y=tt[_];if(y!==void 0)return Ea(y)}(At),T=Z.message;et===void 0&&(et=V.INTERNAL,T="Unknown error status: "+At+" with message "+Z.message),P=!0,D.Do(new x(et,T)),I.close()}else N(mt,`RPC '${t}' stream ${i} received:`,q),D.vo(q)}}),k(c,zo.STAT_EVENT,C=>{C.stat===Hr.PROXY?N(mt,`RPC '${t}' stream ${i} detected buffering proxy`):C.stat===Hr.NOPROXY&&N(mt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{D.bo()},0),D}}function $r(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){return new cc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t,e,r=1e3,i=1.5,o=6e4){this.li=t,this.timerId=e,this.Qo=r,this.Ko=i,this.$o=o,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,e-r);i>0&&N("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),t())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e,r,i,o,u,c,h){this.li=t,this.Yo=r,this.Zo=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Na(t,e)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,t!==4?this.r_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(Ot(e.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===e&&this.I_(r,i)},r=>{t(()=>{const i=new x(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.d_(i)})})}I_(t,e){const r=this.T_(this.Xo);this.stream=this.E_(t,e),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.d_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget(()=>this.Xo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sh extends ka{constructor(t,e,r,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}E_(t,e){return this.connection.qo("Listen",t,e)}A_(t){return this.onNext(t)}onNext(t){this.r_.reset();const e=dc(this.serializer,t),r=function(o){if(!("targetChange"in o))return O.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?O.min():u.readTime?Ct(u.readTime):O.min()}(t);return this.listener.R_(e,r)}V_(t){const e={};e.database=rs(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=Jr(h)?{documents:gc(o,h)}:{query:_c(o,h).ct},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=va(o,u.resumeToken);const d=ts(o,u.expectedCount);d!==null&&(c.expectedCount=d)}else if(u.snapshotVersion.compareTo(O.min())>0){c.readTime=Hn(o,u.snapshotVersion.toTimestamp());const d=ts(o,u.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,t);const r=Ec(this.serializer,t);r&&(e.labels=r),this.c_(e)}m_(t){const e={};e.database=rs(this.serializer),e.removeTarget=t,this.c_(e)}}class ih extends ka{constructor(t,e,r,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,u),this.serializer=o}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(t,e){return this.connection.qo("Write",t,e)}A_(t){return K(!!t.streamToken),this.lastStreamToken=t.streamToken,K(!t.writeResults||t.writeResults.length===0),this.listener.p_()}onNext(t){K(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=pc(t.writeResults,t.commitTime),r=Ct(t.commitTime);return this.listener.y_(r,e)}w_(){const t={};t.database=rs(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>mc(this.serializer,r))};this.c_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Oo(t,es(e,r),i,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(V.UNKNOWN,o.toString())})}ko(t,e,r,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.ko(t,es(e,r),i,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(V.UNKNOWN,u.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class ah{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(t){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,t==="Online"&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Ot(e),this.C_=!1):N("OnlineStateTracker",e)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=o,this.Q_.uo(u=>{r.enqueueAndForget(async()=>{ae(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=F(h);d.k_.add(4),await cn(d),d.K_.set("Unknown"),d.k_.delete(4),await fr(d)}(this))})}),this.K_=new ah(r,i)}}async function fr(n){if(ae(n))for(const t of n.q_)await t(!0)}async function cn(n){for(const t of n.q_)await t(!1)}function xa(n,t){const e=F(n);e.L_.has(t.targetId)||(e.L_.set(t.targetId,t),Ps(e)?Ss(e):be(e).s_()&&Rs(e,t))}function ws(n,t){const e=F(n),r=be(e);e.L_.delete(t),r.s_()&&La(e,t),e.L_.size===0&&(r.s_()?r.a_():ae(e)&&e.K_.set("Unknown"))}function Rs(n,t){if(n.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}be(n).V_(t)}function La(n,t){n.U_.xe(t),be(n).m_(t)}function Ss(n){n.U_=new oc({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.L_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),be(n).start(),n.K_.F_()}function Ps(n){return ae(n)&&!be(n).i_()&&n.L_.size>0}function ae(n){return F(n).k_.size===0}function Ma(n){n.U_=void 0}async function lh(n){n.K_.set("Online")}async function ch(n){n.L_.forEach((t,e)=>{Rs(n,t)})}async function hh(n,t){Ma(n),Ps(n)?(n.K_.O_(t),Ss(n)):n.K_.set("Unknown")}async function fh(n,t,e){if(n.K_.set("Online"),t instanceof Aa&&t.state===2&&t.cause)try{await async function(i,o){const u=o.cause;for(const c of o.targetIds)i.L_.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.L_.delete(c),i.U_.removeTarget(c))}(n,t)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Xn(n,r)}else if(t instanceof $n?n.U_.$e(t):t instanceof Ta?n.U_.Je(t):n.U_.Ge(t),!e.isEqual(O.min()))try{const r=await Da(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.U_.it(u);return c.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.L_.get(d);g&&o.L_.set(d,g.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,d)=>{const g=o.L_.get(h);if(!g)return;o.L_.set(h,g.withResumeToken(lt.EMPTY_BYTE_STRING,g.snapshotVersion)),La(o,h);const I=new $t(g.target,h,d,g.sequenceNumber);Rs(o,I)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await Xn(n,r)}}async function Xn(n,t,e){if(!Ce(t))throw t;n.k_.add(1),await cn(n),n.K_.set("Offline"),e||(e=()=>Da(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),n.k_.delete(1),await fr(n)})}function Oa(n,t){return t().catch(e=>Xn(n,e,t))}async function dr(n){const t=F(n),e=Xt(t);let r=t.B_.length>0?t.B_[t.B_.length-1].batchId:-1;for(;dh(t);)try{const i=await Xc(t.localStore,r);if(i===null){t.B_.length===0&&e.a_();break}r=i.batchId,mh(t,i)}catch(i){await Xn(t,i)}Fa(t)&&Ua(t)}function dh(n){return ae(n)&&n.B_.length<10}function mh(n,t){n.B_.push(t);const e=Xt(n);e.s_()&&e.f_&&e.g_(t.mutations)}function Fa(n){return ae(n)&&!Xt(n).i_()&&n.B_.length>0}function Ua(n){Xt(n).start()}async function ph(n){Xt(n).w_()}async function gh(n){const t=Xt(n);for(const e of n.B_)t.g_(e.mutations)}async function _h(n,t,e){const r=n.B_.shift(),i=ys.from(r,t,e);await Oa(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await dr(n)}async function yh(n,t){t&&Xt(n).f_&&await async function(r,i){if(function(u){return rc(u)&&u!==V.ABORTED}(i.code)){const o=r.B_.shift();Xt(r).__(),await Oa(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await dr(r)}}(n,t),Fa(n)&&Ua(n)}async function go(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=ae(e);e.k_.add(3),await cn(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await fr(e)}async function Eh(n,t){const e=F(n);t?(e.k_.delete(2),await fr(e)):t||(e.k_.add(2),await cn(e),e.K_.set("Unknown"))}function be(n){return n.W_||(n.W_=function(e,r,i){const o=F(e);return o.b_(),new sh(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:lh.bind(null,n),mo:ch.bind(null,n),po:hh.bind(null,n),R_:fh.bind(null,n)}),n.q_.push(async t=>{t?(n.W_.__(),Ps(n)?Ss(n):n.K_.set("Unknown")):(await n.W_.stop(),Ma(n))})),n.W_}function Xt(n){return n.G_||(n.G_=function(e,r,i){const o=F(e);return o.b_(),new ih(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:ph.bind(null,n),po:yh.bind(null,n),p_:gh.bind(null,n),y_:_h.bind(null,n)}),n.q_.push(async t=>{t?(n.G_.__(),await dr(n)):(await n.G_.stop(),n.B_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const u=Date.now()+r,c=new Vs(t,e,u,i,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cs(n,t){if(Ot("AsyncQueue",`${t}: ${n}`),Ce(n))return new x(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static emptySet(t){return new _e(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||L.comparator(e.key,r.key):(e,r)=>L.comparator(e.key,r.key),this.keyedMap=We(),this.sortedSet=new W(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _e)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new _e;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.z_=new W(L.comparator)}track(t){const e=t.doc.key,r=this.z_.get(e);r?t.type!==0&&r.type===3?this.z_=this.z_.insert(e,t):t.type===3&&r.type!==1?this.z_=this.z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.z_=this.z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.z_=this.z_.remove(e):t.type===1&&r.type===2?this.z_=this.z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.z_=this.z_.insert(e,{type:2,doc:t.doc}):M():this.z_=this.z_.insert(e,t)}j_(){const t=[];return this.z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Re{constructor(t,e,r,i,o,u,c,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,i,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Re(t,e,_e.emptySet(e),u,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(t=>t.Z_())}}class Ah{constructor(){this.queries=yo(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(e,r){const i=F(e),o=i.queries;i.queries=yo(),o.forEach((u,c)=>{for(const h of c.J_)h.onError(r)})})(this,new x(V.ABORTED,"Firestore shutting down"))}}function yo(){return new ie(n=>sa(n),ir)}async function vh(n,t){const e=F(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.Y_()&&t.Z_()&&(r=2):(o=new Th,r=t.Z_()?0:1);try{switch(r){case 0:o.H_=await e.onListen(i,!0);break;case 1:o.H_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=Cs(u,`Initialization of query '${me(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.J_.push(t),t.ea(e.onlineState),o.H_&&t.ta(o.H_)&&bs(e)}async function Ih(n,t){const e=F(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const u=o.J_.indexOf(t);u>=0&&(o.J_.splice(u,1),o.J_.length===0?i=t.Z_()?0:1:!o.Y_()&&t.Z_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function wh(n,t){const e=F(n);let r=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.J_)c.ta(i)&&(r=!0);u.H_=i}}r&&bs(e)}function Rh(n,t,e){const r=F(n),i=r.queries.get(t);if(i)for(const o of i.J_)o.onError(e);r.queries.delete(t)}function bs(n){n.X_.forEach(t=>{t.next()})}var is,Eo;(Eo=is||(is={})).na="default",Eo.Cache="cache";class Sh{constructor(t,e,r){this.query=t,this.ra=e,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Re(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ia?this.oa(t)&&(this.ra.next(t),e=!0):this._a(t,this.onlineState)&&(this.aa(t),e=!0),this.sa=t,e}onError(t){this.ra.error(t)}ea(t){this.onlineState=t;let e=!1;return this.sa&&!this.ia&&this._a(this.sa,t)&&(this.aa(this.sa),e=!0),e}_a(t,e){if(!t.fromCache||!this.Z_())return!0;const r=e!=="Offline";return(!this.options.ua||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}oa(t){if(t.docChanges.length>0)return!0;const e=this.sa&&this.sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}aa(t){t=Re.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ia=!0,this.ra.next(t)}Z_(){return this.options.source!==is.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(t){this.key=t}}class Ba{constructor(t){this.key=t}}class Ph{constructor(t,e){this.query=t,this.Ea=e,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=B(),this.mutatedKeys=B(),this.Va=ia(t),this.ma=new _e(this.Va)}get fa(){return this.Ea}ga(t,e){const r=e?e.pa:new _o,i=e?e.ma:this.ma;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((g,I)=>{const R=i.get(g),P=or(this.query,I)?I:null,D=!!R&&this.mutatedKeys.has(R.key),k=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let C=!1;R&&P?R.data.isEqual(P.data)?D!==k&&(r.track({type:3,doc:P}),C=!0):this.ya(R,P)||(r.track({type:2,doc:P}),C=!0,(h&&this.Va(P,h)>0||d&&this.Va(P,d)<0)&&(c=!0)):!R&&P?(r.track({type:0,doc:P}),C=!0):R&&!P&&(r.track({type:1,doc:R}),C=!0,(h||d)&&(c=!0)),C&&(P?(u=u.add(P),o=k?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{ma:u,pa:r,ss:c,mutatedKeys:o}}ya(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.ma;this.ma=t.ma,this.mutatedKeys=t.mutatedKeys;const u=t.pa.j_();u.sort((g,I)=>function(P,D){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return k(P)-k(D)}(g.type,I.type)||this.Va(g.doc,I.doc)),this.wa(r),i=i!=null&&i;const c=e&&!i?this.Sa():[],h=this.Ra.size===0&&this.current&&!i?1:0,d=h!==this.Aa;return this.Aa=h,u.length!==0||d?{snapshot:new Re(this.query,t.ma,o,u,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new _o,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(t){return!this.Ea.has(t)&&!!this.ma.has(t)&&!this.ma.get(t).hasLocalMutations}wa(t){t&&(t.addedDocuments.forEach(e=>this.Ea=this.Ea.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ea=this.Ea.delete(e)),this.current=t.current)}Sa(){if(!this.current)return[];const t=this.Ra;this.Ra=B(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const e=[];return t.forEach(r=>{this.Ra.has(r)||e.push(new Ba(r))}),this.Ra.forEach(r=>{t.has(r)||e.push(new qa(r))}),e}va(t){this.Ea=t.Es,this.Ra=B();const e=this.ga(t.documents);return this.applyChanges(e,!0)}Ca(){return Re.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class Vh{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ch{constructor(t){this.key=t,this.Fa=!1}}class bh{constructor(t,e,r,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Ma={},this.xa=new ie(c=>sa(c),ir),this.Oa=new Map,this.Na=new Set,this.Ba=new W(L.comparator),this.La=new Map,this.ka=new As,this.qa={},this.Qa=new Map,this.Ka=we.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Dh(n,t,e=!0){const r=Qa(n);let i;const o=r.xa.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.Ca()):i=await ja(r,t,e,!0),i}async function Nh(n,t){const e=Qa(n);await ja(e,t,!0,!1)}async function ja(n,t,e,r){const i=await Yc(n.localStore,Vt(t)),o=i.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await kh(n,t,o,u==="current",i.resumeToken)),n.isPrimaryClient&&e&&xa(n.remoteStore,i),c}async function kh(n,t,e,r,i){n.Ua=(I,R,P)=>async function(k,C,U,q){let G=C.view.ga(U);G.ss&&(G=await fo(k.localStore,C.query,!1).then(({documents:T})=>C.view.ga(T,G)));const Z=q&&q.targetChanges.get(C.targetId),At=q&&q.targetMismatches.get(C.targetId)!=null,et=C.view.applyChanges(G,k.isPrimaryClient,Z,At);return Ao(k,C.targetId,et.ba),et.snapshot}(n,I,R,P);const o=await fo(n.localStore,t,!0),u=new Ph(t,o.Es),c=u.ga(o.documents),h=ln.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),d=u.applyChanges(c,n.isPrimaryClient,h);Ao(n,e,d.ba);const g=new Vh(t,e,u);return n.xa.set(t,g),n.Oa.has(e)?n.Oa.get(e).push(t):n.Oa.set(e,[t]),d.snapshot}async function xh(n,t,e){const r=F(n),i=r.xa.get(t),o=r.Oa.get(i.targetId);if(o.length>1)return r.Oa.set(i.targetId,o.filter(u=>!ir(u,t))),void r.xa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ss(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&ws(r.remoteStore,i.targetId),os(r,i.targetId)}).catch(Ve)):(os(r,i.targetId),await ss(r.localStore,i.targetId,!0))}async function Lh(n,t){const e=F(n),r=e.xa.get(t),i=e.Oa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ws(e.remoteStore,r.targetId))}async function Mh(n,t,e){const r=$h(n);try{const i=await function(u,c){const h=F(u),d=rt.now(),g=c.reduce((P,D)=>P.add(D.key),B());let I,R;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=Ft(),k=B();return h.hs.getEntries(P,g).next(C=>{D=C,D.forEach((U,q)=>{q.isValidDocument()||(k=k.add(U))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,D)).next(C=>{I=C;const U=[];for(const q of c){const G=Jl(q,I.get(q.key).overlayedDocument);G!=null&&U.push(new oe(q.key,G,Yo(G.value.mapValue),Mt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,U,c)}).next(C=>{R=C;const U=C.applyToLocalDocumentSet(I,k);return h.documentOverlayCache.saveOverlays(P,C.batchId,U)})}).then(()=>({batchId:R.batchId,changes:aa(I)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(u,c,h){let d=u.qa[u.currentUser.toKey()];d||(d=new W(j)),d=d.insert(c,h),u.qa[u.currentUser.toKey()]=d}(r,i.batchId,e),await hn(r,i.changes),await dr(r.remoteStore)}catch(i){const o=Cs(i,"Failed to persist write");e.reject(o)}}async function $a(n,t){const e=F(n);try{const r=await Hc(e.localStore,t);t.targetChanges.forEach((i,o)=>{const u=e.La.get(o);u&&(K(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?u.Fa=!0:i.modifiedDocuments.size>0?K(u.Fa):i.removedDocuments.size>0&&(K(u.Fa),u.Fa=!1))}),await hn(e,r,t)}catch(r){await Ve(r)}}function To(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.xa.forEach((o,u)=>{const c=u.view.ea(t);c.snapshot&&i.push(c.snapshot)}),function(u,c){const h=F(u);h.onlineState=c;let d=!1;h.queries.forEach((g,I)=>{for(const R of I.J_)R.ea(c)&&(d=!0)}),d&&bs(h)}(r.eventManager,t),i.length&&r.Ma.R_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Oh(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.La.get(t),o=i&&i.key;if(o){let u=new W(L.comparator);u=u.insert(o,gt.newNoDocument(o,O.min()));const c=B().add(o),h=new cr(O.min(),new Map,new W(j),u,c);await $a(r,h),r.Ba=r.Ba.remove(o),r.La.delete(t),Ds(r)}else await ss(r.localStore,t,!1).then(()=>os(r,t,e)).catch(Ve)}async function Fh(n,t){const e=F(n),r=t.batch.batchId;try{const i=await Qc(e.localStore,t);Ga(e,r,null),za(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await hn(e,i)}catch(i){await Ve(i)}}async function Uh(n,t,e){const r=F(n);try{const i=await function(u,c){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return h.mutationQueue.lookupMutationBatch(d,c).next(I=>(K(I!==null),g=I.keys(),h.mutationQueue.removeMutationBatch(d,I))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,g,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>h.localDocuments.getDocuments(d,g))})}(r.localStore,t);Ga(r,t,e),za(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await hn(r,i)}catch(i){await Ve(i)}}function za(n,t){(n.Qa.get(t)||[]).forEach(e=>{e.resolve()}),n.Qa.delete(t)}function Ga(n,t,e){const r=F(n);let i=r.qa[r.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),r.qa[r.currentUser.toKey()]=i}}function os(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Oa.get(t))n.xa.delete(r),e&&n.Ma.Wa(r,e);n.Oa.delete(t),n.isPrimaryClient&&n.ka.yr(t).forEach(r=>{n.ka.containsKey(r)||Ka(n,r)})}function Ka(n,t){n.Na.delete(t.path.canonicalString());const e=n.Ba.get(t);e!==null&&(ws(n.remoteStore,e),n.Ba=n.Ba.remove(t),n.La.delete(e),Ds(n))}function Ao(n,t,e){for(const r of e)r instanceof qa?(n.ka.addReference(r.key,t),qh(n,r)):r instanceof Ba?(N("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,t),n.ka.containsKey(r.key)||Ka(n,r.key)):M()}function qh(n,t){const e=t.key,r=e.path.canonicalString();n.Ba.get(e)||n.Na.has(r)||(N("SyncEngine","New document in limbo: "+e),n.Na.add(r),Ds(n))}function Ds(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const t=n.Na.values().next().value;n.Na.delete(t);const e=new L(Y.fromString(t)),r=n.Ka.next();n.La.set(r,new Ch(e)),n.Ba=n.Ba.insert(e,r),xa(n.remoteStore,new $t(Vt(gs(e.path)),r,"TargetPurposeLimboResolution",er.oe))}}async function hn(n,t,e){const r=F(n),i=[],o=[],u=[];r.xa.isEmpty()||(r.xa.forEach((c,h)=>{u.push(r.Ua(h,t,e).then(d=>{var g;if((d||e)&&r.isPrimaryClient){const I=d?!d.fromCache:(g=e?.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,I?"current":"not-current")}if(d){i.push(d);const I=Is.zi(h.targetId,d);o.push(I)}}))}),await Promise.all(u),r.Ma.R_(i),await async function(h,d){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>S.forEach(d,R=>S.forEach(R.Wi,P=>g.persistence.referenceDelegate.addReference(I,R.targetId,P)).next(()=>S.forEach(R.Gi,P=>g.persistence.referenceDelegate.removeReference(I,R.targetId,P)))))}catch(I){if(!Ce(I))throw I;N("LocalStore","Failed to update sequence numbers: "+I)}for(const I of d){const R=I.targetId;if(!I.fromCache){const P=g.us.get(R),D=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(D);g.us=g.us.insert(R,k)}}}(r.localStore,o))}async function Bh(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const r=await ba(e.localStore,t);e.currentUser=t,function(o,u){o.Qa.forEach(c=>{c.forEach(h=>{h.reject(new x(V.CANCELLED,u))})}),o.Qa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await hn(e,r.Ts)}}function jh(n,t){const e=F(n),r=e.La.get(t);if(r&&r.Fa)return B().add(r.key);{let i=B();const o=e.Oa.get(t);if(!o)return i;for(const u of o){const c=e.xa.get(u);i=i.unionWith(c.view.fa)}return i}}function Qa(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=$a.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=jh.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Oh.bind(null,t),t.Ma.R_=wh.bind(null,t.eventManager),t.Ma.Wa=Rh.bind(null,t.eventManager),t}function $h(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Fh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Uh.bind(null,t),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=hr(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return Kc(this.persistence,new zc,t.initialUser,this.serializer)}ja(t){return new Ca(vs.ei,this.serializer)}za(t){return new Zc}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class zh extends Yn{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){K(this.persistence.referenceDelegate instanceof Wn);const r=this.persistence.referenceDelegate.garbageCollector;return new Cc(r,t.asyncQueue,e)}ja(t){const e=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Ca(r=>Wn.ei(r,e),this.serializer)}}class as{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>To(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bh.bind(null,this.syncEngine),await Eh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ah}()}createDatastore(t){const e=hr(t.databaseInfo.databaseId),r=function(o){return new rh(o)}(t.databaseInfo);return function(o,u,c,h){return new oh(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,u,c){return new uh(r,i,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>To(this.syncEngine,e,0),function(){return po.p()?new po:new th}())}createSyncEngine(t,e){return function(i,o,u,c,h,d,g){const I=new bh(i,o,u,c,h,d);return g&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=F(i);N("RemoteStore","RemoteStore shutting down."),o.k_.add(5),await cn(o),o.Q_.shutdown(),o.K_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}as.provider={build:()=>new as};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Xa(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Xa(this.observer.error,t):Ot("Uncaught Error in snapshot listener:",t.toString()))}eu(){this.muted=!0}Xa(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e,r,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=Ho.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{N("FirestoreClient","Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(N("FirestoreClient","Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Cs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function zr(n,t){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ba(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function vo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Qh(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>go(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>go(t.remoteStore,i)),n._onlineComponents=t}async function Qh(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await zr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(e))throw e;Ee("Error using user provided cache. Falling back to memory cache: "+e),await zr(n,new Yn)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await zr(n,new zh(void 0));return n._offlineComponents}async function Ha(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await vo(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await vo(n,new as))),n._onlineComponents}function Hh(n){return Ha(n).then(t=>t.syncEngine)}async function Wh(n){const t=await Ha(n),e=t.eventManager;return e.onListen=Dh.bind(null,t.syncEngine),e.onUnlisten=xh.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Nh.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Lh.bind(null,t.syncEngine),e}function Xh(n,t,e={}){const r=new Gt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,d){const g=new Gh({next:R=>{g.eu(),u.enqueueAndForget(()=>Ih(o,I));const P=R.docs.has(c);!P&&R.fromCache?d.reject(new x(V.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&R.fromCache&&h&&h.source==="server"?d.reject(new x(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(R)},error:R=>d.reject(R)}),I=new Sh(gs(c.path),g,{includeMetadataChanges:!0,ua:!0});return vh(o,I)}(await Wh(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n,t,e){if(!e)throw new x(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Jh(n,t,e,r){if(t===!0&&r===!0)throw new x(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function wo(n){if(!L.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ns(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function an(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ns(n);throw new x(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Jh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ks{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ro({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ro(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new il;switch(r.type){case"firstParty":return new ll(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Io.get(e);r&&(N("ComponentProvider","Removing Datastore"),Io.delete(e),r.terminate())}(this),Promise.resolve()}}function Zh(n,t,e,r={}){var i;const o=(n=an(n,ks))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&Ee("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=pt.MOCK_USER;else{c=Zu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new x(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new pt(d)}n._authCredentials=new ol(new Qo(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xs(this.firestore,t,this._query)}}class wt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new wt(this.firestore,t,this._key)}}class un extends xs{constructor(t,e,r){super(t,e,gs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new wt(this.firestore,null,new L(t))}withConverter(t){return new un(this.firestore,t,this._path)}}function wd(n,t,...e){if(n=re(n),arguments.length===1&&(t=Ho.newId()),Yh("doc","path",t),n instanceof ks){const r=Y.fromString(t,...e);return wo(r),new wt(n,null,new L(r))}{if(!(n instanceof wt||n instanceof un))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return wo(r),new wt(n.firestore,n instanceof un?n.converter:null,new L(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Na(this,"async_queue_retry"),this.fu=()=>{const r=$r();r&&N("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=t;const e=$r();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.du){this.du=!0,this.Vu=t||!1;const e=$r();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.du)return new Promise(()=>{});const e=new Gt;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Iu.push(t),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Ce(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(t){const e=this.gu.then(()=>(this.Ru=!0,t().catch(r=>{this.Au=r,this.Ru=!1;const i=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw Ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=e,e}enqueueAfterDelay(t,e,r){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const i=Vs.createAndSchedule(this,t,e,r,o=>this.Su(o));return this.Eu.push(i),i}pu(){this.Au&&M()}verifyOperationInProgress(){}async bu(){let t;do t=this.gu,await t;while(t!==this.gu)}Du(t){for(const e of this.Eu)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then(()=>{this.Eu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Eu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.bu()})}Cu(t){this.mu.push(t)}Su(t){const e=this.Eu.indexOf(t);this.Eu.splice(e,1)}}class Ls extends ks{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=new So,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new So(t),this._firestoreClient=void 0,await t}}}function Rd(n,t){const e=typeof n=="object"?n:Xu(),r=typeof n=="string"?n:"(default)",i=Yu(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Ju("firestore");o&&Zh(i,...o)}return i}function Xa(n){if(n._terminated)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tf(n),n._firestoreClient}function tf(n){var t,e,r;const i=n._freezeSettings(),o=function(c,h,d,g){return new wl(c,h,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Wa(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new Kh(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c?._online.build();return{_offline:c?._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Se(lt.fromBase64String(t))}catch(e){throw new x(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Se(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return j(this._lat,t._lat)||j(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=/^__.*__$/;class Ya{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new oe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Ja(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class pr{constructor(t,e,r,i,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Fu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new pr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:r,Nu:!1});return i.Bu(t),i}Lu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Jn(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Bu(this.path.get(t))}Bu(t){if(t.length===0)throw this.qu("Document fields must not be empty");if(Ja(this.Mu)&&ef.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class nf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||hr(t)}$u(t,e,r,i=!1){return new pr({Mu:t,methodName:e,Ku:r,path:ut.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rf(n){const t=n._freezeSettings(),e=hr(n._databaseId);return new nf(n._databaseId,!!t.ignoreUndefinedProperties,e)}class gr extends fn{_toFieldTransform(t){if(t.Mu!==2)throw t.Mu===1?t.qu(`${this._methodName}() can only appear at the top level of your update data`):t.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof gr}}function sf(n,t,e){return new pr({Mu:3,Ku:t.settings.Ku,methodName:n._methodName,Nu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Fs extends fn{constructor(t,e){super(t),this.Uu=e}_toFieldTransform(t){const e=sf(this,t,!0),r=this.Uu.map(o=>dn(o,e)),i=new Ie(r);return new pa(t.path,i)}isEqual(t){return t instanceof Fs&&el(this.Uu,t.Uu)}}class Us extends fn{constructor(t,e){super(t),this.Wu=e}_toFieldTransform(t){const e=new on(t.serializer,ca(t.serializer,this.Wu));return new pa(t.path,e)}isEqual(t){return t instanceof Us&&this.Wu===t.Wu}}function of(n,t,e,r){const i=n.$u(1,t,e);tu("Data must be an object, but it was:",i,r);const o=[],u=It.empty();Yt(r,(h,d)=>{const g=qs(t,h,e);d=re(d);const I=i.Lu(g);if(d instanceof gr)o.push(g);else{const R=dn(d,I);R!=null&&(o.push(g),u.set(g,R))}});const c=new St(o);return new Ya(u,c,i.fieldTransforms)}function af(n,t,e,r,i,o){const u=n.$u(1,t,e),c=[Po(t,r,e)],h=[i];if(o.length%2!=0)throw new x(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(Po(t,o[R])),h.push(o[R+1]);const d=[],g=It.empty();for(let R=c.length-1;R>=0;--R)if(!cf(d,c[R])){const P=c[R];let D=h[R];D=re(D);const k=u.Lu(P);if(D instanceof gr)d.push(P);else{const C=dn(D,k);C!=null&&(d.push(P),g.set(P,C))}}const I=new St(d);return new Ya(g,I,u.fieldTransforms)}function dn(n,t){if(Za(n=re(n)))return tu("Unsupported field value:",t,n),uf(n,t);if(n instanceof fn)return function(r,i){if(!Ja(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Nu&&t.Mu!==4)throw t.qu("Nested arrays are not supported");return function(r,i){const o=[];let u=0;for(const c of r){let h=dn(c,i.ku(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,i){if((r=re(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ca(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=rt.fromDate(r);return{timestampValue:Hn(i.serializer,o)}}if(r instanceof rt){const o=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hn(i.serializer,o)}}if(r instanceof Ms)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Se)return{bytesValue:va(i.serializer,r._byteString)};if(r instanceof wt){const o=i.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw i.qu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ts(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Os)return function(u,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:u.toArray().map(h=>{if(typeof h!="number")throw c.qu("VectorValues must only contain numeric values.");return _s(c.serializer,h)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${Ns(r)}`)}(n,t)}function uf(n,t){const e={};return Wo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yt(n,(r,i)=>{const o=dn(i,t.Ou(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Za(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof Ms||n instanceof Se||n instanceof wt||n instanceof fn||n instanceof Os)}function tu(n,t,e){if(!Za(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Ns(e);throw r==="an object"?t.qu(n+" a custom object"):t.qu(n+" "+r)}}function Po(n,t,e){if((t=re(t))instanceof mr)return t._internalPath;if(typeof t=="string")return qs(n,t);throw Jn("Field path arguments must be of type string or ",n,!1,void 0,e)}const lf=new RegExp("[~\\*/\\[\\]]");function qs(n,t,e){if(t.search(lf)>=0)throw Jn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new mr(...t.split("."))._internalPath}catch{throw Jn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Jn(n,t,e,r,i){const o=r&&!r.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${i}`),h+=")"),new x(V.INVALID_ARGUMENT,c+n+h)}function cf(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(nu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class hf extends eu{data(){return super.data()}}function nu(n,t){return typeof t=="string"?qs(n,t):t instanceof mr?t._internalPath:t._delegate._internalPath}class ff{convertValue(t,e="none"){switch(Wt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ht(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Yt(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,i;const o=(i=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(u=>J(u.doubleValue));return new Os(o)}convertGeoPoint(t){return new Ms(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=rr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(en(t));default:return null}}convertTimestamp(t){const e=Qt(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);K(Va(r));const i=new nn(r.get(1),r.get(3)),o=new L(r.popFirst(5));return i.isEqual(e)||Ot(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ru extends eu{constructor(t,e,r,i,o,u){super(t,e,r,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new mf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(nu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class mf extends ru{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n){n=an(n,wt);const t=an(n.firestore,Ls);return Xh(Xa(t),n._key).then(e=>_f(t,n,e))}class pf extends ff{constructor(t){super(),this.firestore=t}convertBytes(t){return new Se(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new wt(this.firestore,null,e)}}function Pd(n,t,e,...r){n=an(n,wt);const i=an(n.firestore,Ls),o=rf(i);let u;return u=typeof(t=re(t))=="string"||t instanceof mr?af(o,"updateDoc",n._key,t,e,r):of(o,"updateDoc",n._key,t),gf(i,[u.toMutation(n._key,Mt.exists(!0))])}function gf(n,t){return function(r,i){const o=new Gt;return r.asyncQueue.enqueueAndForget(async()=>Mh(await Hh(r),i,o)),o.promise}(Xa(n),t)}function _f(n,t,e){const r=e.docs.get(t._key),i=new pf(n);return new ru(n,i,t._key,r,new df(e.hasPendingWrites,e.fromCache),t.converter)}function Vd(...n){return new Fs("arrayUnion",n)}function Cd(n){return new Us("increment",n)}(function(t,e=!0){(function(i){Pe=i})(tl),Qu(new Hu("firestore",(r,{instanceIdentifier:i,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new Ls(new al(r.getProvider("auth-internal")),new hl(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nn(d.options.projectId,g)}(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Qr($i,"4.7.6",t),Qr($i,"4.7.6","esm2017")})();const bd={name:"MissingMediaQueryDirective",title:"Missing value for `client:media` directive.",message:'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'},Dd={name:"NoMatchingRenderer",title:"No matching renderer found.",message:(n,t,e,r)=>`Unable to render \`${n}\`.

${r>0?`There ${e?"are":"is"} ${r} renderer${e?"s":""} configured in your \`astro.config.mjs\` file,
but ${e?"none were":"it was not"} able to server-side render \`${n}\`.`:`No valid renderer was found ${t?`for the \`.${t}\` file extension.`:"for this file extension."}`}`,hint:n=>`Did you mean to enable the ${n} integration?

See https://docs.astro.build/en/guides/framework-components/ for more information on how to install and configure integrations.`},Nd={name:"NoClientOnlyHint",title:"Missing hint on client:only directive.",message:n=>`Unable to render \`${n}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,hint:n=>`Did you mean to pass \`client:only="${n}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`},kd={name:"NoMatchingImport",title:"No import found for component.",message:n=>`Could not render \`${n}\`. No matching import has been found for \`${n}\`.`,hint:"Please make sure the component is properly imported."},Vo={name:"InvalidComponentArgs",title:"Invalid component arguments.",message:n=>`Invalid arguments passed to${n?` <${n}>`:""} component.`,hint:"Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."},Co={name:"AstroGlobUsedOutside",title:"Astro.glob() used outside of an Astro file.",message:n=>`\`Astro.glob(${n})\` can only be used in \`.astro\` files. \`import.meta.glob(${n})\` can be used instead to achieve a similar result.`,hint:"See Vite's documentation on `import.meta.glob` for more information: https://vite.dev/guide/features.html#glob-import"},bo={name:"AstroGlobNoMatch",title:"Astro.glob() did not match any files.",message:n=>`\`Astro.glob(${n})\` did not return any matching files.`,hint:"Check the pattern for typos."};function yf(n){return n.replace(/\r\n|\r(?!\n)|\n/g,`
`)}function Ef(n,t){if(!t||t.line===void 0||t.column===void 0)return"";const e=yf(n).split(`
`).map(u=>u.replace(/\t/g,"  ")),r=[];for(let u=-2;u<=2;u++)e[t.line+u]&&r.push(t.line+u);let i=0;for(const u of r){let c=`> ${u}`;c.length>i&&(i=c.length)}let o="";for(const u of r){const c=u===t.line-1;o+=c?"> ":"  ",o+=`${u+1} | ${e[u]}
`,c&&(o+=`${Array.from({length:i}).join(" ")}  | ${Array.from({length:t.column}).join(" ")}^
`)}return o}class us extends Error{loc;title;hint;frame;type="AstroError";constructor(t,e){const{name:r,title:i,message:o,stack:u,location:c,hint:h,frame:d}=t;super(o,e),this.title=i,this.name=r,o&&(this.message=o),this.stack=u||this.stack,this.loc=c,this.hint=h,this.frame=d}setLocation(t){this.loc=t}setName(t){this.name=t}setMessage(t){this.message=t}setHint(t){this.hint=t}setFrame(t,e){this.frame=Ef(t,e)}static is(t){return t.type==="AstroError"}}function Tf(n){return!(n.length!==3||!n[0]||typeof n[0]!="object")}function su(n,t,e){const r=t?.split("/").pop()?.replace(".astro","")??"",i=(...o)=>{if(!Tf(o))throw new us({...Vo,message:Vo.message(r)});return n(...o)};return Object.defineProperty(i,"name",{value:r,writable:!1}),i.isAstroComponentFactory=!0,i.moduleId=t,i.propagation=e,i}function Af(n){return su(n.factory,n.moduleId,n.propagation)}function xd(n,t,e){return typeof n=="function"?su(n,t,e):Af(n)}const vf="5.2.1";function If(){return t=>{if(console.warn(`Astro.glob is deprecated and will be removed in a future major version of Astro.
Use import.meta.glob instead: https://vitejs.dev/guide/features.html#glob-import`),typeof t=="string")throw new us({...Co,message:Co.message(JSON.stringify(t))});let e=[...Object.values(t)];if(e.length===0)throw new us({...bo,message:bo.message(JSON.stringify(t))});return Promise.all(e.map(r=>r()))}}function Ld(n){return{site:void 0,generator:`Astro v${vf}`,glob:If()}}typeof process<"u"&&process.stdout&&process.stdout.isTTY;const{replace:wf}="",Rf=/[&<>'"]/g,Sf={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},Pf=n=>Sf[n],Vf=n=>wf.call(n,Rf,Pf);function Bs(n){return!!n&&typeof n=="object"&&"then"in n&&typeof n.then=="function"}const Cf=Vf;class Zn extends String{get[Symbol.toStringTag](){return"HTMLString"}}const Et=n=>n instanceof Zn?n:typeof n=="string"?new Zn(n):n;function bf(n){return Object.prototype.toString.call(n)==="[object HTMLString]"}const iu=Symbol.for("astro:render");function ou(n){return Object.defineProperty(n,iu,{value:!0})}function Df(n){return n&&typeof n=="object"&&n[iu]}function Md(n){return n==null?!1:n.isAstroComponentFactory===!0}function Nf(n,t){let e=t.propagation||"none";return t.moduleId&&n.componentMetadata.has(t.moduleId)&&e==="none"&&(e=n.componentMetadata.get(t.moduleId).propagation),e==="in-tree"||e==="self"}const kf=Symbol.for("astro.headAndContent");function xf(n){return typeof n=="object"&&n!==null&&!!n[kf]}var Lf='(()=>{var A=Object.defineProperty;var g=(i,o,a)=>o in i?A(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var d=(i,o,a)=>g(i,typeof o!="symbol"?o+"":o,a);{let i={0:t=>m(t),1:t=>a(t),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(a(t)),5:t=>new Set(a(t)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(t),9:t=>new Uint16Array(t),10:t=>new Uint32Array(t),11:t=>1/0*t},o=t=>{let[l,e]=t;return l in i?i[l](e):void 0},a=t=>t.map(o),m=t=>typeof t!="object"||t===null?t:Object.fromEntries(Object.entries(t).map(([l,e])=>[l,o(e)]));class y extends HTMLElement{constructor(){super(...arguments);d(this,"Component");d(this,"hydrator");d(this,"hydrate",async()=>{var b;if(!this.hydrator||!this.isConnected)return;let e=(b=this.parentElement)==null?void 0:b.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let c=this.querySelectorAll("astro-slot"),n={},h=this.querySelectorAll("template[data-astro-template]");for(let r of h){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(let r of c){let s=r.closest(this.tagName);s!=null&&s.isSameNode(this)&&(n[r.getAttribute("name")||"default"]=r.innerHTML)}let p;try{p=this.hasAttribute("props")?m(JSON.parse(this.getAttribute("props"))):{}}catch(r){let s=this.getAttribute("component-url")||"<unknown>",v=this.getAttribute("component-export");throw v&&(s+=` (export ${v})`),console.error(`[hydrate] Error parsing props for component ${s}`,this.getAttribute("props"),r),r}let u;await this.hydrator(this)(this.Component,p,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))});d(this,"unmount",()=>{this.isConnected||this.dispatchEvent(new CustomEvent("astro:unmount"))})}disconnectedCallback(){document.removeEventListener("astro:after-swap",this.unmount),document.addEventListener("astro:after-swap",this.unmount,{once:!0})}connectedCallback(){if(!this.hasAttribute("await-children")||document.readyState==="interactive"||document.readyState==="complete")this.childrenConnectedCallback();else{let e=()=>{document.removeEventListener("DOMContentLoaded",e),c.disconnect(),this.childrenConnectedCallback()},c=new MutationObserver(()=>{var n;((n=this.lastChild)==null?void 0:n.nodeType)===Node.COMMENT_NODE&&this.lastChild.nodeValue==="astro:end"&&(this.lastChild.remove(),e())});c.observe(this,{childList:!0}),document.addEventListener("DOMContentLoaded",e)}}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}async start(){let e=JSON.parse(this.getAttribute("opts")),c=this.getAttribute("client");if(Astro[c]===void 0){window.addEventListener(`astro:${c}`,()=>this.start(),{once:!0});return}try{await Astro[c](async()=>{let n=this.getAttribute("renderer-url"),[h,{default:p}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),u=this.getAttribute("component-export")||"default";if(!u.includes("."))this.Component=h[u];else{this.Component=h;for(let f of u.split("."))this.Component=this.Component[f]}return this.hydrator=p,this.hydrate},e,this)}catch(n){console.error(`[astro-island] Error hydrating ${this.getAttribute("component-url")}`,n)}}attributeChangedCallback(){this.hydrate()}}d(y,"observedAttributes",["props"]),customElements.get("astro-island")||customElements.define("astro-island",y)}})();';const Mf="<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>";function Of(n){return n._metadata.hasHydrationScript?!1:n._metadata.hasHydrationScript=!0}function Ff(n,t){return n._metadata.hasDirectives.has(t)?!1:(n._metadata.hasDirectives.add(t),!0)}function Do(n,t){const r=n.clientDirectives.get(t);if(!r)throw new Error(`Unknown directive: ${t}`);return r}function Uf(n,t,e){switch(t){case"both":return`${Mf}<script>${Do(n,e)};${Lf}<\/script>`;case"directive":return`<script>${Do(n,e)}<\/script>`}return""}const qf=/^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i,Bf=/^(?:allowfullscreen|async|autofocus|autoplay|checked|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|inert|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|selected|itemscope)$/i,jf=/&/g,$f=/"/g,zf=new Set(["set:html","set:text"]),Gf=n=>n.trim().replace(/(?!^)\b\w|\s+|\W+/g,(t,e)=>/\W/.test(t)?"":e===0?t:t.toUpperCase()),fe=(n,t=!0)=>t?String(n).replace(jf,"&#38;").replace($f,"&#34;"):n,Kf=n=>n.toLowerCase()===n?n:n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`),No=n=>Object.entries(n).filter(([t,e])=>typeof e=="string"&&e.trim()||typeof e=="number").map(([t,e])=>t[0]!=="-"&&t[1]!=="-"?`${Kf(t)}:${e}`:`${t}:${e}`).join(";");function Qf(n){let t="";for(const[e,r]of Object.entries(n))t+=`const ${Gf(e)} = ${JSON.stringify(r)?.replace(/<\/script>/g,"\\x3C/script>")};
`;return Et(t)}function Od(n){return n.length===1?n[0]:`${n.slice(0,-1).join(", ")} or ${n[n.length-1]}`}function Hf(n,t,e=!0){if(n==null)return"";if(zf.has(t))return console.warn(`[astro] The "${t}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${t}={value}\`) instead of the dynamic spread syntax (\`{...{ "${t}": value }}\`).`),"";if(t==="class:list"){const r=fe(sl(n),e);return r===""?"":Et(` ${t.slice(0,-5)}="${r}"`)}if(t==="style"&&!(n instanceof Zn)){if(Array.isArray(n)&&n.length===2)return Et(` ${t}="${fe(`${No(n[0])};${n[1]}`,e)}"`);if(typeof n=="object")return Et(` ${t}="${fe(No(n),e)}"`)}return t==="className"?Et(` class="${fe(n,e)}"`):typeof n=="string"&&n.includes("&")&&Jf(n)?Et(` ${t}="${fe(n,!1)}"`):Bf.test(t)?Et(n?` ${t}`:""):Et(n===""?` ${t}`:` ${t}="${fe(n,e)}"`)}function ko(n,t=!0){let e="";for(const[r,i]of Object.entries(n))e+=Hf(i,r,t);return Et(e)}function Fn(n,{props:t,children:e=""},r=!0){const{lang:i,"data-astro-id":o,"define:vars":u,...c}=t;return u&&(n==="style"&&(delete c["is:global"],delete c["is:scoped"]),n==="script"&&(delete c.hoist,e=Qf(u)+`
`+e)),(e==null||e=="")&&qf.test(n)?`<${n}${ko(c,r)}>`:`<${n}${ko(c,r)}>${e}</${n}>`}const Wf=()=>{};class Xf{chunks=[];renderPromise;destination;constructor(t){this.renderPromise=t(this),Promise.resolve(this.renderPromise).catch(Wf)}write(t){this.destination?this.destination.write(t):this.chunks.push(t)}async renderToFinalDestination(t){for(const e of this.chunks)t.write(e);this.destination=t,await this.renderPromise}}function au(n){return new Xf(n)}typeof process<"u"&&Object.prototype.toString.call(process);const Yf=["http:","https:"];function Jf(n){try{const t=new URL(n);return Yf.includes(t.protocol)}catch{return!1}}const Gr=(n,t,e)=>{const r=JSON.stringify(n.props),i=n.children;return t===e.findIndex(o=>JSON.stringify(o.props)===r&&o.children==i)};function xo(n){n._metadata.hasRenderedHead=!0;const t=Array.from(n.styles).filter(Gr).map(o=>o.props.rel==="stylesheet"?Fn("link",o):Fn("style",o));n.styles.clear();const e=Array.from(n.scripts).filter(Gr).map(o=>Fn("script",o,!1)),r=Array.from(n.links).filter(Gr).map(o=>Fn("link",o,!1));let i=t.join(`
`)+r.join(`
`)+e.join(`
`);if(n._metadata.extraHead.length>0)for(const o of n._metadata.extraHead)i+=o;return Et(i)}function Fd(){return ou({type:"head"})}function Ud(){return ou({type:"maybe-head"})}const uu=Symbol.for("astro.renderTemplateResult");class Zf{[uu]=!0;htmlParts;expressions;error;constructor(t,e){this.htmlParts=t,this.error=void 0,this.expressions=e.map(r=>Bs(r)?Promise.resolve(r).catch(i=>{if(!this.error)throw this.error=i,i}):r)}async render(t){const e=this.expressions.map(r=>au(i=>{if(r||r===0)return ye(i,r)}));for(let r=0;r<this.htmlParts.length;r++){const i=this.htmlParts[r],o=e[r];t.write(Et(i)),o&&await o.renderToFinalDestination(t)}}}function td(n){return typeof n=="object"&&n!==null&&!!n[uu]}function qd(n,...t){return new Zf(n,t)}const ls=Symbol.for("astro:slot-string");class cs extends Zn{instructions;[ls];constructor(t,e){super(t),this.instructions=e,this[ls]=!0}}function ed(n){return!!n[ls]}function nd(n,t,e){return{async render(r){await ye(r,typeof t=="function"?t(n):t)}}}async function rd(n,t,e){let r="",i=null;const o={write(c){if(c instanceof cs)r+=c,c.instructions&&(i??=[],i.push(...c.instructions));else{if(c instanceof Response)return;typeof c=="object"&&"type"in c&&typeof c.type=="string"?(i===null&&(i=[]),i.push(c)):r+=id(n,c)}}};return await nd(n,t).render(o),Et(new cs(r,i))}async function Bd(n,t={}){let e=null,r={};return t&&await Promise.all(Object.entries(t).map(([i,o])=>rd(n,o).then(u=>{u.instructions&&(e===null&&(e=[]),e.push(...u.instructions)),r[i]=u}))),{slotInstructions:e,children:r}}const jd=Symbol.for("astro:fragment"),$d=Symbol.for("astro:renderer");new TextEncoder;const sd=new TextDecoder;function lu(n,t){if(Df(t)){const e=t;switch(e.type){case"directive":{const{hydration:r}=e;let i=r&&Of(n),o=r&&Ff(n,r.directive),u=i?"both":o?"directive":null;if(u){let c=Uf(n,u,r.directive);return Et(c)}else return""}case"head":return n._metadata.hasRenderedHead||n.partial?"":xo(n);case"maybe-head":return n._metadata.hasRenderedHead||n._metadata.headInTree||n.partial?"":xo(n);case"renderer-hydration-script":{const{rendererSpecificHydrationScripts:r}=n._metadata,{rendererName:i}=e;return r.has(i)?"":(r.add(i),e.render())}default:throw new Error(`Unknown chunk type: ${t.type}`)}}else{if(t instanceof Response)return"";if(ed(t)){let e="";const r=t;if(r.instructions)for(const i of r.instructions)e+=lu(n,i);return e+=t.toString(),e}}return t.toString()}function id(n,t){return ArrayBuffer.isView(t)?sd.decode(t):lu(n,t)}function od(n){return!!n&&typeof n=="object"&&"render"in n&&typeof n.render=="function"}async function ye(n,t){if(Bs(t)&&(t=await t),t instanceof cs)n.write(t);else if(bf(t))n.write(t);else if(Array.isArray(t)){const e=t.map(r=>au(i=>ye(i,r)));for(const r of e)r&&await r.renderToFinalDestination(n)}else if(typeof t=="function")await ye(n,t());else if(typeof t=="string")n.write(Et(Cf(t)));else if(!(!t&&t!==0))if(od(t))await t.render(n);else if(td(t))await t.render(n);else if(ld(t))await t.render(n);else if(ArrayBuffer.isView(t))n.write(t);else if(typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t))for await(const e of t)await ye(n,e);else n.write(t)}const cu=Symbol.for("astro.componentInstance");class ad{[cu]=!0;result;props;slotValues;factory;returnValue;constructor(t,e,r,i){this.result=t,this.props=e,this.factory=i,this.slotValues={};for(const o in r){let u=!1,c=r[o](t);this.slotValues[o]=()=>u?r[o](t):(u=!0,c)}}async init(t){return this.returnValue!==void 0?this.returnValue:(this.returnValue=this.factory(t,this.props,this.slotValues),Bs(this.returnValue)&&this.returnValue.then(e=>{this.returnValue=e}).catch(()=>{}),this.returnValue)}async render(t){const e=await this.init(this.result);xf(e)?await e.content.render(t):await ye(t,e)}}function ud(n,t){if(n!=null)for(const e of Object.keys(n))e.startsWith("client:")&&console.warn(`You are attempting to render <${t} ${e} />, but ${t} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`)}function zd(n,t,e,r,i={}){ud(r,t);const o=new ad(n,r,i,e);return Nf(n,e)&&n._metadata.propagators.add(o),o}function ld(n){return typeof n=="object"&&n!==null&&!!n[cu]}function cd(n){let t="";for(let e=0;e<n.length;e++)t+=Lo[n[e]>>4],t+=Lo[n[e]&15];return t}const Lo="0123456789ABCDEF";var Mo;(function(n){n[n.Include=0]="Include",n[n.None=1]="None"})(Mo||(Mo={}));var Oo;(function(n){n[n.Required=0]="Required",n[n.Ignore=1]="Ignore"})(Oo||(Oo={}));function hd(n){return fd(n,dd,tr.Include)}function fd(n,t,e){let r="";for(let i=0;i<n.byteLength;i+=3){let o=0,u=0;for(let c=0;c<3&&i+c<n.byteLength;c++)o=o<<8|n[i+c],u+=8;for(let c=0;c<4;c++)u>=6?(r+=t[o>>u-6&63],u-=6):u>0?(r+=t[o<<6-u&63],u=0):e===tr.Include&&(r+="=")}return r}const dd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var tr;(function(n){n[n.Include=0]="Include",n[n.None=1]="None"})(tr||(tr={}));var Fo;(function(n){n[n.Required=0]="Required",n[n.Ignore=1]="Ignore"})(Fo||(Fo={}));const md="AES-GCM",pd=new TextEncoder;new TextDecoder;const gd=24;async function Gd(n,t){const e=crypto.getRandomValues(new Uint8Array(gd/2)),r=pd.encode(t),i=await crypto.subtle.encrypt({name:md,iv:e},n,r);return cd(e)+hd(new Uint8Array(i))}/*! https://mths.be/cssesc v3.0.0 by @mathias */var Kr,Uo;function _d(){if(Uo)return Kr;Uo=1;var n={},t=n.hasOwnProperty,e=function(h,d){if(!h)return d;var g={};for(var I in d)g[I]=t.call(h,I)?h[I]:d[I];return g},r=/[ -,\.\/:-@\[-\^`\{-~]/,i=/[ -,\.\/:-@\[\]\^`\{-~]/,o=/(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,u=function c(h,d){d=e(d,c.options),d.quotes!="single"&&d.quotes!="double"&&(d.quotes="single");for(var g=d.quotes=="double"?'"':"'",I=d.isIdentifier,R=h.charAt(0),P="",D=0,k=h.length;D<k;){var C=h.charAt(D++),U=C.charCodeAt(),q=void 0;if(U<32||U>126){if(U>=55296&&U<=56319&&D<k){var G=h.charCodeAt(D++);(G&64512)==56320?U=((U&1023)<<10)+(G&1023)+65536:D--}q="\\"+U.toString(16).toUpperCase()+" "}else d.escapeEverything?r.test(C)?q="\\"+C:q="\\"+U.toString(16).toUpperCase()+" ":/[\t\n\f\r\x0B]/.test(C)?q="\\"+U.toString(16).toUpperCase()+" ":C=="\\"||!I&&(C=='"'&&g==C||C=="'"&&g==C)||I&&i.test(C)?q="\\"+C:q=C;P+=q}return I&&(/^-[-\d]/.test(P)?P="\\-"+P.slice(1):/\d/.test(R)&&(P="\\3"+R+" "+P.slice(1))),P=P.replace(o,function(Z,At,et){return At&&At.length%2?Z:(At||"")+et}),!I&&d.wrap?g+P+g:P};return u.options={escapeEverything:!1,isIdentifier:!1,quotes:"single",wrap:!1},u.version="3.0.0",Kr=u,Kr}_d();"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("").reduce((n,t)=>(n[t.charCodeAt(0)]=t,n),[]);"-0123456789_".split("").reduce((n,t)=>(n[t.charCodeAt(0)]=t,n),[]);const Kd={src:"/_astro/BakeryLogo.CO7I1YlA.svg",width:500,height:500,format:"svg"};var yd="firebase",Ed="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr(yd,Ed,"app");export{us as A,ko as B,qf as C,ou as D,Fn as E,jd as F,id as G,zd as H,Ud as I,bd as M,kd as N,$d as R,Vd as a,Rd as b,xd as c,wd as d,Hf as e,Fd as f,Sd as g,nd as h,Cd as i,Ld as j,Cf as k,Kd as l,Et as m,rd as n,ye as o,Gd as p,Bs as q,qd as r,Md as s,fe as t,Pd as u,sl as v,Bd as w,Dd as x,Od as y,Nd as z};
