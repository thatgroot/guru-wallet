"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[57800],{592323:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(18861),s=n(256666),i=(n(321668),n(634795)),o=n(459740),c=n(202784),a=(n(213208),n(945821)),l=(n(834298),n(552322)),h=(0,c.forwardRef)((function(e,t){var n=e.src,r=void 0===n?"":n,s=(0,c.useRef)(null),i=(0,c.useRef)({reload:function(){s.current&&(s.current.src="about:blank",setTimeout((function(){s.current&&(s.current.src=r)}),150))},loadURL:function(){}});return(0,c.useImperativeHandle)(t,(function(){return i.current})),(0,l.jsx)("iframe",{ref:s,title:"iframe-web",src:r,frameBorder:"0",style:{height:"100%",width:"100%"}})}));h.displayName="InpageProviderWebView";const u=h;var d=["src","openUrlInExt","allowpopups","onWebViewRef","customReceiveHandler","containerProps"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const p=function(e){var t=e.src,n=void 0===t?"":t,s=(e.openUrlInExt,e.allowpopups),h=void 0!==s&&s,f=e.onWebViewRef,p=void 0===f?function(){}:f,m=e.customReceiveHandler,y=e.containerProps,x=(0,o.default)(e,d),M=(0,c.useCallback)(function(){var e=(0,i.default)((function*(e,t){var n=yield a.default.bridgeReceiveHandler(e);return yield null==m?void 0:m(e,t),n}));return function(t,n){return e.apply(this,arguments)}}(),[m]);return(0,l.jsx)(r.default,g(g({flex:1,bg:"background-default"},y),{},{children:(0,l.jsx)(u,g({ref:p,src:n,allowpopups:h,receiveHandler:M},x))}))}},357800:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(256666),s=n(539144),i=n(877531),o=n(18861),c=n(202784),a=n(472719),l=n(592323),h=n(552322);const u=function(){var e=(0,a.useRoute)(),t=((null==e?void 0:e.params)||{}).url,n=(0,a.useNavigation)();return(0,c.useLayoutEffect)((function(){}),[n]),(0,c.useEffect)((function(){}),[]),(0,h.jsx)(i.default,{height:"560px",hideSecondaryAction:!0,primaryActionProps:{type:"basic"},footer:null,staticChildrenProps:{flex:1},children:(0,h.jsx)(o.default,{flex:"1",overflow:"hidden",borderBottomRadius:"12px",children:(0,h.jsx)(l.default,{containerProps:{borderBottomRadius:"24px"},src:t,onSrcChange:function(e){console.log("onSrcChange",e)}})})})};var d=n(505240),f=n(107867),g=n(592923),p=n(783723),m=n(510374),y=n(196234),x=n(561220),M=n(435581),v=n(737790),b=n(634795),k=n(866904),w=n(759900),j=n(571659),_=n(783112),L=n(945821),S=n(534159),I=n(859071),C=n(481047),O=n(918242),R={includeScore:!0,threshold:.4,keys:[{name:"symbol",weight:1}]};var A=function(e){var t,n=e.token,r=e.type,s=e.address,i=e.accountId,l=e.networkId,u=e.network,d=(0,I.useTokenBalance)({accountId:i,networkId:l,token:n,fallback:"0",useRecycleBalance:null==(t=n.isNative)||t}),f="main"===((null==n?void 0:n.tokenIdOnNetwork)||"main")?null==u?void 0:u.nativeDisplayDecimals:null==u?void 0:u.tokenDisplayDecimals,g=(0,c.useMemo)((function(){return"undefined"===typeof d?(0,h.jsx)(w.default,{shape:"Body2"}):(0,h.jsx)(S.FormatBalance,{balance:d,formatOptions:{fixed:null!=f?f:4},render:function(e){return(0,h.jsx)(k.default,{typography:"Body1",color:"text-subdued",mr:"4px",children:e})}})}),[d,f]),p=(0,a.useNavigation)(),m=L.default.serviceFiatPay,y=(0,c.useCallback)((0,b.default)((function*(){var e=yield m.getFiatPayUrl({type:r,tokenAddress:n.address,address:s,networkId:l});e.length>0&&p.navigate(C.FiatPayModalRoutes.MoonpayWebViewModal,{url:e})})),[s,p,l,m,n.address,r]);return(0,h.jsxs)(x.default,{flex:1,flexDirection:"row",alignItems:"center",p:"8px",borderRadius:"12px",_hover:{bgColor:"surface-hovered"},_pressed:{bgColor:"surface-pressed"},onPress:function(){y()},children:[(0,h.jsxs)(o.default,{flex:1,flexDirection:"row",alignItems:"center",children:[(0,h.jsx)(v.default,{size:8,token:{logoURI:n.logoURI},name:n.name}),(0,h.jsx)(k.default,{typography:"Body1Strong",ml:"12px",children:n.symbol})]}),g,(0,h.jsx)(M.default,{name:"ChevronRightMini",color:"icon-subdued",size:20})]})};const E=function(){var e=(0,_.default)(),t=(0,a.useRoute)().params,n=t.networkId,r=t.accountId,s=t.type,o=void 0===s?"buy":s,l=(0,O.useFiatPayTokens)(n,o),u=l.tokenList,x=l.loading,M=(0,I.useActiveSideAccount)({networkId:n,accountId:r}),v=M.account,b=M.network,k=(0,c.useState)([]),L=(0,y.default)(k,2),S=L[0],C=L[1],E=(0,c.useState)(""),F=(0,y.default)(E,2),P=F[0],$=F[1],N=(0,c.useMemo)((function(){return P.length>0?S:u}),[u,S,P.length]),W=(0,c.useCallback)((function(e){var t=e.item;return(0,h.jsx)(A,{token:t,address:null==v?void 0:v.address,type:o,accountId:r,networkId:n,network:b})}),[null==v?void 0:v.address,r,b,n,o]),D=(0,c.useCallback)((function(){return(0,h.jsx)(p.default,{children:(0,h.jsx)(m.default,{flex:1,title:e.formatMessage({id:"buy"===o?"empty__no_purchasable_tokens":"empty__no_salable_tokens"}),subTitle:e.formatMessage({id:"empty__no_purchasable_tokens_desc"}),emoji:"\ud83e\udd7a"})})}),[e,o]);return(0,h.jsxs)(i.default,{header:e.formatMessage({id:"buy"===o?"action__buy":"action__sell"}),height:"560px",hideSecondaryAction:!0,primaryActionProps:{type:"basic"},footer:null,children:[(0,h.jsx)(g.default,{w:"full",value:P,mb:"4",placeholder:e.formatMessage({id:"form__search_tokens",defaultMessage:"Search Tokens"}),onChangeText:function(e){$(e),C((function(){return t=u,n=e,new j.default(t,R).search(n).map((function(e){return e.item}));var t,n}))},onClear:function(){return $("")}}),x?(0,h.jsx)(d.default,{data:[1,2,3,4,5],renderItem:function(){return(0,h.jsxs)(f.default,{children:[(0,h.jsx)(f.default.Column,{children:(0,h.jsx)(w.default,{shape:"Avatar"})}),(0,h.jsx)(f.default.Column,{flex:1,text:{label:(0,h.jsx)(w.default,{shape:"Body1"})}}),(0,h.jsx)(f.default.Column,{children:(0,h.jsx)(w.default,{shape:"Body1"})}),(0,h.jsx)(f.default.Column,{icon:{name:"ChevronRightMini",size:20,color:"icon-disabled"}})]})}}):(0,h.jsx)(d.default,{data:N,contentContainerStyle:{flex:null!=N&&N.length?void 0:1},renderItem:W,keyExtractor:function(e){return e.id},ListEmptyComponent:D})]})};var F=n(679978);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var $=(0,n(324665).default)(),N=[{name:C.FiatPayModalRoutes.SupportTokenListModal,component:E},{name:C.FiatPayModalRoutes.MoonpayWebViewModal,component:u}];const W=function(){var e=(0,s.default)();return(0,h.jsx)($.Navigator,{screenOptions:function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({headerShown:!1},(0,F.buildModalStackNavigatorOptions)({isVerticalLayout:e,navInfo:t}))},children:N.map((function(e){return(0,h.jsx)($.Screen,{name:e.name,component:e.component},e.name)}))})}},571659:(e,t,n)=>{function r(e){return Array.isArray?Array.isArray(e):"[object Array]"===d(e)}n.r(t),n.d(t,{default:()=>Q});const s=1/0;function i(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-s?"-0":t}(e)}function o(e){return"string"===typeof e}function c(e){return"number"===typeof e}function a(e){return!0===e||!1===e||function(e){return l(e)&&null!==e}(e)&&"[object Boolean]"==d(e)}function l(e){return"object"===typeof e}function h(e){return void 0!==e&&null!==e}function u(e){return!e.trim().length}function d(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const f=e=>`Missing ${e} property in key`,g=e=>`Property 'weight' in key '${e}' must be a positive integer`,p=Object.prototype.hasOwnProperty;class m{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=y(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function y(e){let t=null,n=null,s=null,i=1,c=null;if(o(e)||r(e))s=e,t=x(e),n=M(e);else{if(!p.call(e,"name"))throw new Error(f("name"));const r=e.name;if(s=r,p.call(e,"weight")&&(i=e.weight,i<=0))throw new Error(g(r));t=x(r),n=M(r),c=e.getFn}return{path:t,id:n,weight:i,src:s,getFn:c}}function x(e){return r(e)?e:e.split(".")}function M(e){return r(e)?e.join("."):e}var v={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(e,t){let n=[],s=!1;const l=(e,t,u)=>{if(h(e))if(t[u]){const d=e[t[u]];if(!h(d))return;if(u===t.length-1&&(o(d)||c(d)||a(d)))n.push(i(d));else if(r(d)){s=!0;for(let e=0,n=d.length;e<n;e+=1)l(d[e],t,u+1)}else t.length&&l(d,t,u+1)}else n.push(e)};return l(e,o(t)?t.split("."):t,0),s?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1}};const b=/[^ ]+/g;class k{constructor({getFn:e=v.getFn,fieldNormWeight:t=v.fieldNormWeight}={}){this.norm=function(e=1,t=3){const n=new Map,r=Math.pow(10,t);return{get(t){const s=t.match(b).length;if(n.has(s))return n.get(s);const i=1/Math.pow(s,.5*e),o=parseFloat(Math.round(i*r)/r);return n.set(s,o),o},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,o(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();o(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!h(e)||u(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,s)=>{let i=t.getFn?t.getFn(e):this.getFn(e,t.path);if(h(i))if(r(i)){let e=[];const t=[{nestedArrIndex:-1,value:i}];for(;t.length;){const{nestedArrIndex:n,value:s}=t.pop();if(h(s))if(o(s)&&!u(s)){let t={v:s,i:n,n:this.norm.get(s)};e.push(t)}else r(s)&&s.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[s]=e}else if(o(i)&&!u(i)){let e={v:i,n:this.norm.get(i)};n.$[s]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function w(e,t,{getFn:n=v.getFn,fieldNormWeight:r=v.fieldNormWeight}={}){const s=new k({getFn:n,fieldNormWeight:r});return s.setKeys(e.map(y)),s.setSources(t),s.create(),s}function j(e,{errors:t=0,currentLocation:n=0,expectedLocation:r=0,distance:s=v.distance,ignoreLocation:i=v.ignoreLocation}={}){const o=t/e.length;if(i)return o;const c=Math.abs(r-n);return s?o+c/s:c?1:o}const _=32;function L(e,t,n,{location:r=v.location,distance:s=v.distance,threshold:i=v.threshold,findAllMatches:o=v.findAllMatches,minMatchCharLength:c=v.minMatchCharLength,includeMatches:a=v.includeMatches,ignoreLocation:l=v.ignoreLocation}={}){if(t.length>_)throw new Error(`Pattern length exceeds max of ${_}.`);const h=t.length,u=e.length,d=Math.max(0,Math.min(r,u));let f=i,g=d;const p=c>1||a,m=p?Array(u):[];let y;for(;(y=e.indexOf(t,g))>-1;){let e=j(t,{currentLocation:y,expectedLocation:d,distance:s,ignoreLocation:l});if(f=Math.min(e,f),g=y+h,p){let e=0;for(;e<h;)m[y+e]=1,e+=1}}g=-1;let x=[],M=1,b=h+u;const k=1<<h-1;for(let v=0;v<h;v+=1){let r=0,i=b;for(;r<i;){j(t,{errors:v,currentLocation:d+i,expectedLocation:d,distance:s,ignoreLocation:l})<=f?r=i:b=i,i=Math.floor((b-r)/2+r)}b=i;let c=Math.max(1,d-i+1),a=o?u:Math.min(d+i,u)+h,y=Array(a+2);y[a+1]=(1<<v)-1;for(let o=a;o>=c;o-=1){let r=o-1,i=n[e.charAt(r)];if(p&&(m[r]=+!!i),y[o]=(y[o+1]<<1|1)&i,v&&(y[o]|=(x[o+1]|x[o])<<1|1|x[o+1]),y[o]&k&&(M=j(t,{errors:v,currentLocation:r,expectedLocation:d,distance:s,ignoreLocation:l}),M<=f)){if(f=M,g=r,g<=d)break;c=Math.max(1,2*d-g)}}if(j(t,{errors:v+1,currentLocation:d,expectedLocation:d,distance:s,ignoreLocation:l})>f)break;x=y}const w={isMatch:g>=0,score:Math.max(.001,M)};if(p){const e=function(e=[],t=v.minMatchCharLength){let n=[],r=-1,s=-1,i=0;for(let o=e.length;i<o;i+=1){let o=e[i];o&&-1===r?r=i:o||-1===r||(s=i-1,s-r+1>=t&&n.push([r,s]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}(m,c);e.length?a&&(w.indices=e):w.isMatch=!1}return w}function S(e){let t={};for(let n=0,r=e.length;n<r;n+=1){const s=e.charAt(n);t[s]=(t[s]||0)|1<<r-n-1}return t}class I{constructor(e,{location:t=v.location,threshold:n=v.threshold,distance:r=v.distance,includeMatches:s=v.includeMatches,findAllMatches:i=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,isCaseSensitive:c=v.isCaseSensitive,ignoreLocation:a=v.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:r,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a},this.pattern=c?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(e,t)=>{this.chunks.push({pattern:e,alphabet:S(e),startIndex:t})},h=this.pattern.length;if(h>_){let e=0;const t=h%_,n=h-t;for(;e<n;)l(this.pattern.substr(e,_),e),e+=_;if(t){const e=h-_;l(this.pattern.substr(e),e)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:r,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:c,ignoreLocation:a}=this.options;let l=[],h=0,u=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:f})=>{const{isMatch:g,score:p,indices:m}=L(e,t,d,{location:r+f,distance:s,threshold:i,findAllMatches:o,minMatchCharLength:c,includeMatches:n,ignoreLocation:a});g&&(u=!0),h+=p,g&&m&&(l=[...l,...m])}));let d={isMatch:u,score:u?h/this.chunks.length:1};return u&&n&&(d.indices=l),d}}class C{constructor(e){this.pattern=e}static isMultiMatch(e){return O(e,this.multiRegex)}static isSingleMatch(e){return O(e,this.singleRegex)}search(){}}function O(e,t){const n=e.match(t);return n?n[1]:null}class R extends C{constructor(e,{location:t=v.location,threshold:n=v.threshold,distance:r=v.distance,includeMatches:s=v.includeMatches,findAllMatches:i=v.findAllMatches,minMatchCharLength:o=v.minMatchCharLength,isCaseSensitive:c=v.isCaseSensitive,ignoreLocation:a=v.ignoreLocation}={}){super(e),this._bitapSearch=new I(e,{location:t,threshold:n,distance:r,includeMatches:s,findAllMatches:i,minMatchCharLength:o,isCaseSensitive:c,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class A extends C{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const r=[],s=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+s,r.push([t,n-1]);const i=!!r.length;return{isMatch:i,score:i?0:1,indices:r}}}const E=[class extends C{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},A,class extends C{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends C{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends C{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends C{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends C{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},R],F=E.length,P=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const $=new Set([R.type,A.type]);class N{constructor(e,{isCaseSensitive:t=v.isCaseSensitive,includeMatches:n=v.includeMatches,minMatchCharLength:r=v.minMatchCharLength,ignoreLocation:s=v.ignoreLocation,findAllMatches:i=v.findAllMatches,location:o=v.location,threshold:c=v.threshold,distance:a=v.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:r,findAllMatches:i,ignoreLocation:s,location:o,threshold:c,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(P).filter((e=>e&&!!e.trim())),r=[];for(let s=0,i=n.length;s<i;s+=1){const e=n[s];let i=!1,o=-1;for(;!i&&++o<F;){const n=E[o];let s=n.isMultiMatch(e);s&&(r.push(new n(s,t)),i=!0)}if(!i)for(o=-1;++o<F;){const n=E[o];let s=n.isSingleMatch(e);if(s){r.push(new n(s,t));break}}}return r}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let s=0,i=[],o=0;for(let c=0,a=t.length;c<a;c+=1){const r=t[c];i.length=0,s=0;for(let t=0,c=r.length;t<c;t+=1){const c=r[t],{isMatch:a,indices:l,score:h}=c.search(e);if(!a){o=0,s=0,i.length=0;break}if(s+=1,o+=h,n){const e=c.constructor.type;$.has(e)?i=[...i,...l]:i.push(l)}}if(s){let e={isMatch:!0,score:o/s};return n&&(e.indices=i),e}}return{isMatch:!1,score:1}}}const W=[];function D(e,t){for(let n=0,r=W.length;n<r;n+=1){let r=W[n];if(r.condition(e,t))return new r(e,t)}return new I(e,t)}const B="$and",z="$or",V="$path",T="$val",U=e=>!(!e[B]&&!e[z]),H=e=>({[B]:Object.keys(e).map((t=>({[t]:e[t]})))});function K(e,t,{auto:n=!0}={}){const s=e=>{let i=Object.keys(e);const c=(e=>!!e[V])(e);if(!c&&i.length>1&&!U(e))return s(H(e));if((e=>!r(e)&&l(e)&&!U(e))(e)){const r=c?e[V]:i[0],s=c?e[T]:e[r];if(!o(s))throw new Error((e=>`Invalid value for key ${e}`)(r));const a={keyId:M(r),pattern:s};return n&&(a.searcher=D(s,t)),a}let a={children:[],operator:i[0]};return i.forEach((t=>{const n=e[t];r(n)&&n.forEach((e=>{a.children.push(s(e))}))})),a};return U(e)||(e=H(e)),s(e)}function q(e,t){const n=e.matches;t.matches=[],h(n)&&n.forEach((e=>{if(!h(e.indices)||!e.indices.length)return;const{indices:n,value:r}=e;let s={indices:n,value:r};e.key&&(s.key=e.key.src),e.idx>-1&&(s.refIndex=e.idx),t.matches.push(s)}))}function J(e,t){t.score=e.score}class Q{constructor(e,t={},n){this.options={...v,...t},this.options.useExtendedSearch,this._keyStore=new m(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof k))throw new Error("Incorrect 'index' type");this._myIndex=t||w(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){h(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,r=this._docs.length;n<r;n+=1){const s=this._docs[n];e(s,n)&&(this.removeAt(n),n-=1,r-=1,t.push(s))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:s,sortFn:i,ignoreFieldNorm:a}=this.options;let l=o(e)?o(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=v.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:r,score:s})=>{const i=e?e.weight:null;n*=Math.pow(0===s&&i?Number.EPSILON:s,(i||1)*(t?1:r))})),e.score=n}))}(l,{ignoreFieldNorm:a}),s&&l.sort(i),c(t)&&t>-1&&(l=l.slice(0,t)),function(e,t,{includeMatches:n=v.includeMatches,includeScore:r=v.includeScore}={}){const s=[];return n&&s.push(q),r&&s.push(J),e.map((e=>{const{idx:n}=e,r={item:t[n],refIndex:n};return s.length&&s.forEach((t=>{t(e,r)})),r}))}(l,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const t=D(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach((({v:e,i:n,n:s})=>{if(!h(e))return;const{isMatch:i,score:o,indices:c}=t.searchIn(e);i&&r.push({item:e,idx:n,matches:[{score:o,value:e,norm:s,indices:c}]})})),r}_searchLogical(e){const t=K(e,this.options),n=(e,t,r)=>{if(!e.children){const{keyId:n,searcher:s}=e,i=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:s});return i&&i.length?[{idx:r,item:t,matches:i}]:[]}const s=[];for(let i=0,o=e.children.length;i<o;i+=1){const o=e.children[i],c=n(o,t,r);if(c.length)s.push(...c);else if(e.operator===B)return[]}return s},r=this._myIndex.records,s={},i=[];return r.forEach((({$:e,i:r})=>{if(h(e)){let o=n(t,e,r);o.length&&(s[r]||(s[r]={idx:r,item:e,matches:[]},i.push(s[r])),o.forEach((({matches:e})=>{s[r].matches.push(...e)})))}})),i}_searchObjectList(e){const t=D(e,this.options),{keys:n,records:r}=this._myIndex,s=[];return r.forEach((({$:e,i:r})=>{if(!h(e))return;let i=[];n.forEach(((n,r)=>{i.push(...this._findMatches({key:n,value:e[r],searcher:t}))})),i.length&&s.push({idx:r,item:e,matches:i})})),s}_findMatches({key:e,value:t,searcher:n}){if(!h(t))return[];let s=[];if(r(t))t.forEach((({v:t,i:r,n:i})=>{if(!h(t))return;const{isMatch:o,score:c,indices:a}=n.searchIn(t);o&&s.push({score:c,key:e,value:t,idx:r,norm:i,indices:a})}));else{const{v:r,n:i}=t,{isMatch:o,score:c,indices:a}=n.searchIn(r);o&&s.push({score:c,key:e,value:r,norm:i,indices:a})}return s}}Q.version="6.6.2",Q.createIndex=w,Q.parseIndex=function(e,{getFn:t=v.getFn,fieldNormWeight:n=v.fieldNormWeight}={}){const{keys:r,records:s}=e,i=new k({getFn:t,fieldNormWeight:n});return i.setKeys(r),i.setIndexRecords(s),i},Q.config=v,Q.parseQuery=K,function(...e){W.push(...e)}(N)}}]);