!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f6c173a6-c3e4-406e-80d3-10dcc39644bd",e._sentryDebugIdIdentifier="sentry-dbid-f6c173a6-c3e4-406e-80d3-10dcc39644bd")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{32602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},noSSR:function(){return o}});let a=n(38754);n(85893),n(67294);let r=a._(n(35491));function l(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}function i(e,t){let n=r.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e});let i=(a={...a,...t}).loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n({...a,loader:()=>null!=i?i().then(l):Promise.resolve(l(()=>null))}):(delete a.webpack,delete a.modules,o(n,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let a=n(38754)._(n(67294)).default.createContext(null)},35491:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let a=n(38754)._(n(67294)),r=n(1159),l=[],o=[],i=!1;function s(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),l=null;function s(){if(!l){let t=new d(e,n);l={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return l.promise()}if(!i){let e=n.webpack?n.webpack():n.modules;e&&o.push(t=>{for(let n of e)if(t.includes(n))return s()})}function c(e,t){!function(){s();let e=a.default.useContext(r.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let o=a.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:l.retry}),[]),a.default.useMemo(()=>{var t;return o.loading||o.error?a.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:l.retry}):o.loaded?a.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return c.preload=()=>s(),c.displayName="LoadableComponent",a.default.forwardRef(c)}(s,e)}function u(e,t){let n=[];for(;e.length;){let a=e.pop();n.push(a(t))}return Promise.all(n).then(()=>{if(e.length)return u(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{u(l).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(i=!0,t());u(o,e).then(n,n)})),window.__NEXT_PRELOADREADY=c.preloadReady;let f=c},74325:function(e,t,n){"use strict";var a=n(85893),r=n(33889),l=n(436),o=n(29915),i=n(4298),s=n.n(i),d=n(18297);t.Z=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s(),{type:"text/javascript",src:"https://cdn.cookielaw.org/consent/".concat("8019415b-ecf1-44aa-904c-ac26fdbff5ae","/otSDKStub.js"),"data-document-language":"true","data-domain-script":"8019415b-ecf1-44aa-904c-ac26fdbff5ae",strategy:"beforeInteractive"}),(0,a.jsx)(s(),{id:"optanon",type:"text/javascript",strategy:"beforeInteractive",children:"function OptanonWrapper() {}"}),(0,a.jsx)(s(),{id:"google-tag-manager",strategy:"afterInteractive",children:"\n          (function (w, d, s, l, i) {\n            w[l] = w[l] || [];\n            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });\n            const f = d.getElementsByTagName(s)[0],\n              j = d.createElement(s),\n              dl = l != 'dataLayer' ? '&l=' + l : '';\n            j.async = true;\n            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n            f.parentNode.insertBefore(j, f);\n          })(window, document, 'script', 'dataLayer', 'GTM-PLG3SK');\n        "}),(0,a.jsx)(s(),{id:"talentsoft-script",src:"/scripts/scforms-hook.js",strategy:"lazyOnload"}),(0,a.jsx)(d.Z,{}),(0,a.jsx)(l.default,{}),(0,a.jsx)(o.default,{}),(0,a.jsx)(r.M,{})]})},18297:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}}),n(53143),(a=r||(r={})).Preview="preview",a.Edit="edit",a.Normal="normal";var a,r,l=n(64351),o=n(64914),i=n(5152),s=n.n(i);l.Xq(o.D);let d=s()(()=>n.e(434).then(n.bind(n,97434)),{loadableGenerated:{webpack:()=>[97434]},ssr:!1});l.v4(s(),d);var c=l.cd},52005:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(85893),r=n(81648),l=n(89809);let o=(e,t,n)=>{let a=/^\/[a-z]{2,5}(-[a-z]{2,5})?\//,r=e,l=t;return r&&l&&["jobs","blog"].forEach(e=>{let t=n.match(a),o=t?t[0]:"";if((r.endsWith("/".concat(e,"/"))||r.endsWith("/".concat(e)))&&(n.startsWith("/".concat(e,"/"))||n.startsWith("".concat(o).concat(e,"/")))){let t=n.split("".concat(e,"/"))[1],a="".concat(e,"/").concat(t);r=r.replace("/".concat(e,"/"),"/".concat(a)),l=l.map(t=>t.url.endsWith("/".concat(e,"/"))||t.url.endsWith("/".concat(e))?{...t,url:t.url.replace("/".concat(e,"/"),"/".concat(a))}:t)}}),{canonicalUrl:r,pageHrefLangUrl:l}};var i=n(89508),s=n(55169),d=n(9008),c=n.n(d),u=n(11163),f=n(74325),m=n(52665),p=n(45131),h=e=>{var t,n,d,h,g,v,b,y,j,_,x,w,k,O,D,P;let{layoutData:E,headLinks:C,searchUrl:N}=e,{asPath:T}=(0,u.useRouter)(),{route:I,context:S}=E.sitecore,V=null==I?void 0:I.fields,L=E.sitecore.context.pageEditing,G=null!==(O=null==E?void 0:null===(n=E.sitecore)||void 0===n?void 0:null===(t=n.context)||void 0===t?void 0:t.language)&&void 0!==O?O:l.ZW,B=null===(d=V.metaDescription)||void 0===d?void 0:d.value,M=null===(g=V.metaImage)||void 0===g?void 0:null===(h=g.value)||void 0===h?void 0:h.src,R=((null===(v=V.metaTitle)||void 0===v?void 0:v.value)||(null==I?void 0:I.displayName)||(null==I?void 0:I.name))+" - Brunel",W=null===(y=V.metaOGImage)||void 0===y?void 0:null===(b=y.value)||void 0===b?void 0:b.src,F=null===(j=V.metaOGDescription)||void 0===j?void 0:j.value,U=(null===(_=V.metaOGType)||void 0===_?void 0:_.value)||"website",Z=null!==(D=null===(x=V.metaNoIndex)||void 0===x?void 0:x.value)&&void 0!==D&&D,A=null!==(P=null===(w=V.metaNoFollow)||void 0===w?void 0:w.value)&&void 0!==P&&P,z=S.googleSiteVerification,H=S.facebookSiteVerification,{canonicalUrl:K,pageHrefLangUrl:X}=o(S.pageCanonicalUrl,S.pageHrefLangUrl,T);return(0,a.jsxs)(m.ConditionalPiwikProProvider,{enabled:!0,children:[(0,a.jsx)(f.Z,{}),(0,a.jsxs)(r.DD,{children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("title",{children:R}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"}),null==C?void 0:C.map(e=>(0,a.jsx)("link",{rel:e.rel,href:e.href},e.href)),(0,a.jsx)("meta",{name:"application-name",content:"Brunel"}),B&&(0,a.jsx)("meta",{name:"description",content:B}),M&&(0,a.jsx)("meta",{name:"image",content:M}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"Brunel"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"Brunel"}),R&&(0,a.jsx)("meta",{name:"twitter:title",content:R}),B&&(0,a.jsx)("meta",{name:"twitter:description",content:B}),M&&(0,a.jsx)("meta",{name:"twitter:image:src",content:M}),W&&(0,a.jsx)("meta",{property:"og:image",content:W}),F&&(0,a.jsx)("meta",{property:"og:description",content:F}),U&&(0,a.jsx)("meta",{property:"og:type",content:U}),(0,a.jsx)("meta",{property:"og:site_name",content:"Brunel"}),(0,a.jsx)("meta",{property:"og:locale",content:G}),N&&((null==N?void 0:N.normalizedUrl)!==""||(null==N?void 0:N.filters)&&(null==N?void 0:null===(k=N.filters)||void 0===k?void 0:k.length)>0)&&(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),"(metaNoIndex || metaNoFollow) && (",(0,a.jsxs)(a.Fragment,{children:[Z&&(0,a.jsx)("meta",{name:"robots",content:"noindex"}),A&&(0,a.jsx)("meta",{name:"robots",content:"nofollow"})]}),")",K&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{property:"og:url",content:K}),(0,a.jsx)("link",{rel:"canonical",href:K})]}),null==X?void 0:X.map((e,t)=>(0,a.jsx)("link",{rel:"alternate",hrefLang:e.hreflang,href:e.url},"".concat(e.hreflang,"-").concat(t)))]}),(0,a.jsx)(p.SiteVerification,{googleSiteVerification:z,facebookSiteVerification:H}),(0,a.jsxs)("div",{className:L?"editing-mode":"prod-mode",children:[(0,a.jsx)("header",{id:"header",children:I&&(0,a.jsx)(i.V,{name:"headless-header",rendering:I})}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{id:"content",className:"bg-main h-full max-w-full grow items-stretch ".concat((0,s.RB)()&&"md:mt-0"," md:pt-0"),children:I&&(0,a.jsx)(i.V,{name:"headless-main",rendering:I,params:{searchUrl:null!=N?N:""}})})}),(0,a.jsx)("footer",{id:"footer",children:I&&(0,a.jsx)(i.V,{name:"headless-footer",rendering:I})})]})]})]})}},5152:function(e,t,n){e.exports=n(32602)}}]);