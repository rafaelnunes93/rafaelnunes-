import{$ as u2,Aa as a1,Ba as e1,D as x,H as C2,I as c1,L as l1,O as s1,Q as Y,Sa as n1,X as k,Y as b,Z as X,i as J2,ia as F,ja as $,k as Z2,ka as a2,wa as d2}from"./chunk-WIFPKCUP.js";function h3(c,l,s){return(l=g3(l))in c?Object.defineProperty(c,l,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[l]=s,c}function o1(c,l){var s=Object.keys(c);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(c);l&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(c,e).enumerable})),s.push.apply(s,a)}return s}function i(c){for(var l=1;l<arguments.length;l++){var s=arguments[l]!=null?arguments[l]:{};l%2?o1(Object(s),!0).forEach(function(a){h3(c,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(s)):o1(Object(s)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(s,a))})}return c}function x3(c,l){if(typeof c!="object"||!c)return c;var s=c[Symbol.toPrimitive];if(s!==void 0){var a=s.call(c,l||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function g3(c){var l=x3(c,"string");return typeof l=="symbol"?l:l+""}var i1=()=>{},U2={},D1={},O1=null,E1={mark:i1,measure:i1};try{typeof window<"u"&&(U2=window),typeof document<"u"&&(D1=document),typeof MutationObserver<"u"&&(O1=MutationObserver),typeof performance<"u"&&(E1=performance)}catch{}var{userAgent:t1=""}=U2.navigator||{},O=U2,p=D1,f1=O1,e2=E1,k0=!!O.document,P=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",B1=~t1.indexOf("MSIE")||~t1.indexOf("Trident/"),N3=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,b3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,R1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},S3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},H1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],C="classic",r2="duotone",w3="sharp",y3="sharp-duotone",I1=[C,r2,w3,y3],k3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},A3={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},v3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),P3={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},T3=["fak","fa-kit","fakd","fa-kit-duotone"],r1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},F3=["kit"],D3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},O3=["fak","fakd"],E3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},z1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},n2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},B3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],R3=["fak","fa-kit","fakd","fa-kit-duotone"],H3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},I3={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},_3={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},S2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},U3=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],w2=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...B3,...U3],q3=["solid","regular","light","thin","duotone","brands"],_1=[1,2,3,4,5,6,7,8,9,10],W3=_1.concat([11,12,13,14,15,16,17,18,19,20]),G3=[...Object.keys(_3),...q3,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",n2.GROUP,n2.SWAP_OPACITY,n2.PRIMARY,n2.SECONDARY].concat(_1.map(c=>"".concat(c,"x"))).concat(W3.map(c=>"w-".concat(c))),j3={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},A="___FONT_AWESOME___",y2=16,U1="fa",q1="svg-inline--fa",I="data-fa-i2svg",k2="data-fa-pseudo-element",V3="data-fa-pseudo-element-pending",q2="data-prefix",W2="data-icon",m1="fontawesome-i2svg",Y3="async",X3=["HTML","HEAD","STYLE","SCRIPT"],W1=(()=>{try{return!0}catch{return!1}})();function l2(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[C]}})}var G1=i({},R1);G1[C]=i(i(i(i({},{"fa-duotone":"duotone"}),R1[C]),r1.kit),r1["kit-duotone"]);var $3=l2(G1),A2=i({},P3);A2[C]=i(i(i(i({},{duotone:"fad"}),A2[C]),z1.kit),z1["kit-duotone"]);var L1=l2(A2),v2=i({},S2);v2[C]=i(i({},v2[C]),E3.kit);var G2=l2(v2),P2=i({},I3);P2[C]=i(i({},P2[C]),D3.kit);var A0=l2(P2),K3=N3,j1="fa-layers-text",Q3=b3,J3=i({},k3),v0=l2(J3),Z3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],h2=S3,c4=[...F3,...G3],Q=O.FontAwesomeConfig||{};function l4(c){var l=p.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function s4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=s4(l4(s));e!=null&&(Q[a]=e)});var V1={styleDefault:"solid",familyDefault:C,cssPrefix:U1,replacementClass:q1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q.familyPrefix&&(Q.cssPrefix=Q.familyPrefix);var j=i(i({},V1),Q);j.autoReplaceSvg||(j.observeMutations=!1);var f={};Object.keys(V1).forEach(c=>{Object.defineProperty(f,c,{enumerable:!0,set:function(l){j[c]=l,J.forEach(s=>s(f))},get:function(){return j[c]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(c){j.cssPrefix=c,J.forEach(l=>l(f))},get:function(){return j.cssPrefix}});O.FontAwesomeConfig=f;var J=[];function a4(c){return J.push(c),()=>{J.splice(J.indexOf(c),1)}}var D=y2,S={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function e4(c){if(!c||!P)return;let l=p.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=p.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=n)}return p.head.insertBefore(l,a),c}var n4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){let c=12,l="";for(;c-- >0;)l+=n4[Math.random()*62|0];return l}function V(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function j2(c){return c.classList?V(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function Y1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function o4(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(Y1(c[s]),'" '),"").trim()}function z2(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function V2(c){return c.size!==S.size||c.x!==S.x||c.y!==S.y||c.rotate!==S.rotate||c.flipX||c.flipY}function i4(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),z={transform:"".concat(n," ").concat(o," ").concat(t)},r={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:z,path:r}}function t4(c){let{transform:l,width:s=y2,height:a=y2,startCentered:e=!1}=c,n="";return e&&B1?n+="translate(".concat(l.x/D-s/2,"em, ").concat(l.y/D-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/D,"em), calc(-50% + ").concat(l.y/D,"em)) "):n+="translate(".concat(l.x/D,"em, ").concat(l.y/D,"em) "),n+="scale(".concat(l.size/D*(l.flipX?-1:1),", ").concat(l.size/D*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var f4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function X1(){let c=U1,l=q1,s=f.cssPrefix,a=f.replacementClass,e=f4;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(a))}return e}var M1=!1;function x2(){f.autoAddCss&&!M1&&(e4(X1()),M1=!0)}var r4={mixout(){return{dom:{css:X1,insertCss:x2}}},hooks(){return{beforeDOMElementCreation(){x2()},beforeI2svg(){x2()}}}},v=O||{};v[A]||(v[A]={});v[A].styles||(v[A].styles={});v[A].hooks||(v[A].hooks={});v[A].shims||(v[A].shims=[]);var w=v[A],$1=[],K1=function(){p.removeEventListener("DOMContentLoaded",K1),t2=1,$1.map(c=>c())},t2=!1;P&&(t2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),t2||p.addEventListener("DOMContentLoaded",K1));function z4(c){P&&(t2?setTimeout(c,0):$1.push(c))}function s2(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?Y1(c):"<".concat(l," ").concat(o4(s),">").concat(a.map(s2).join(""),"</").concat(l,">")}function p1(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var m4=function(l,s){return function(a,e,n,o){return l.call(s,a,e,n,o)}},g2=function(l,s,a,e){var n=Object.keys(l),o=n.length,t=e!==void 0?m4(s,e):s,z,r,m;for(a===void 0?(z=1,m=l[n[0]]):(z=0,m=a);z<o;z++)r=n[z],m=t(m,l[r],r,l);return m};function L4(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function T2(c){let l=L4(c);return l.length===1?l[0].toString(16):null}function M4(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function C1(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function F2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=C1(l);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(c,C1(l)):w.styles[c]=i(i({},w.styles[c]||{}),e),c==="fas"&&F2("fa",l)}var{styles:c2,shims:p4}=w,Q1=Object.keys(G2),C4=Q1.reduce((c,l)=>(c[l]=Object.keys(G2[l]),c),{}),Y2=null,J1={},Z1={},c3={},l3={},s3={};function u4(c){return~c4.indexOf(c)}function d4(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!u4(e)?e:null}var a3=()=>{let c=a=>g2(c2,(e,n,o)=>(e[o]=g2(n,a,{}),e),{});J1=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(t=>typeof t=="number").forEach(t=>{a[t.toString(16)]=n}),a)),Z1=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(t=>typeof t=="string").forEach(t=>{a[t]=n}),a)),s3=c((a,e,n)=>{let o=e[2];return a[n]=n,o.forEach(t=>{a[t]=n}),a});let l="far"in c2||f.autoFetchSvg,s=g2(p4,(a,e)=>{let n=e[0],o=e[1],t=e[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(a.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:o,iconName:t}),a},{names:{},unicodes:{}});c3=s.names,l3=s.unicodes,Y2=m2(f.styleDefault,{family:f.familyDefault})};a4(c=>{Y2=m2(c.styleDefault,{family:f.familyDefault})});a3();function X2(c,l){return(J1[c]||{})[l]}function h4(c,l){return(Z1[c]||{})[l]}function H(c,l){return(s3[c]||{})[l]}function e3(c){return c3[c]||{prefix:null,iconName:null}}function x4(c){let l=l3[c],s=X2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function E(){return Y2}var n3=()=>({prefix:null,iconName:null,rest:[]});function g4(c){let l=C,s=Q1.reduce((a,e)=>(a[e]="".concat(f.cssPrefix,"-").concat(e),a),{});return I1.forEach(a=>{(c.includes(s[a])||c.some(e=>C4[a].includes(e)))&&(l=a)}),l}function m2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=C}=l,a=$3[s][c];if(s===r2&&!c)return"fad";let e=L1[s][c]||L1[s][a],n=c in w.styles?c:null;return e||n||null}function N4(c){let l=[],s=null;return c.forEach(a=>{let e=d4(f.cssPrefix,a);e?s=e:a&&l.push(a)}),{iconName:s,rest:l}}function u1(c){return c.sort().filter((l,s,a)=>a.indexOf(l)===s)}function L2(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a=null,e=w2.concat(R3),n=u1(c.filter(M=>e.includes(M))),o=u1(c.filter(M=>!w2.includes(M))),t=n.filter(M=>(a=M,!H1.includes(M))),[z=null]=t,r=g4(n),m=i(i({},N4(o)),{},{prefix:m2(z,{family:r})});return i(i(i({},m),y4({values:c,family:r,styles:c2,config:f,canonical:m,givenPrefix:a})),b4(s,a,m))}function b4(c,l,s){let{prefix:a,iconName:e}=s;if(c||!a||!e)return{prefix:a,iconName:e};let n=l==="fa"?e3(e):{},o=H(a,e);return e=n.iconName||o||e,a=n.prefix||a,a==="far"&&!c2.far&&c2.fas&&!f.autoFetchSvg&&(a="fas"),{prefix:a,iconName:e}}var S4=I1.filter(c=>c!==C||c!==r2),w4=Object.keys(S2).filter(c=>c!==C).map(c=>Object.keys(S2[c])).flat();function y4(c){let{values:l,family:s,canonical:a,givenPrefix:e="",styles:n={},config:o={}}=c,t=s===r2,z=l.includes("fa-duotone")||l.includes("fad"),r=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!t&&(z||r||m)&&(a.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(a.prefix="fab"),!a.prefix&&S4.includes(s)&&(Object.keys(n).find(L=>w4.includes(L))||o.autoFetchSvg)){let L=v3.get(s).defaultShortPrefixId;a.prefix=L,a.iconName=H(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||e==="fa")&&(a.prefix=E()||"fas"),a}var D2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=i(i({},this.definitions[n]||{}),e[n]),F2(n,e[n]);let o=G2[C][n];o&&F2(o,e[n]),a3()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:o,icon:t}=a[e],z=t[2];l[n]||(l[n]={}),z.length>0&&z.forEach(r=>{typeof r=="string"&&(l[n][r]=t)}),l[n][o]=t}),l}},d1=[],W={},G={},k4=Object.keys(G);function A4(c,l){let{mixoutsTo:s}=l;return d1=c,W={},Object.keys(G).forEach(a=>{k4.indexOf(a)===-1&&delete G[a]}),d1.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=e[n][o]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(o=>{W[o]||(W[o]=[]),W[o].push(n[o])})}a.provides&&a.provides(G)}),s}function O2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(W[c]||[]).forEach(o=>{l=o.apply(null,[l,...a])}),l}function _(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(W[c]||[]).forEach(n=>{n.apply(null,s)})}function B(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return G[c]?G[c].apply(null,l):void 0}function E2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||E();if(l)return l=H(s,l)||l,p1(o3.definitions,s,l)||p1(w.styles,s,l)}var o3=new D2,v4=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,_("noAuto")},P4={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return P?(_("beforeI2svg",c),B("pseudoElements2svg",c),B("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,z4(()=>{F4({autoReplaceSvgRoot:l}),_("watch",c)})}},T4={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:H(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=m2(c[0]);return{prefix:s,iconName:H(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(f.cssPrefix,"-"))>-1||c.match(K3))){let l=L2(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||E(),iconName:H(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=E();return{prefix:l,iconName:H(l,c)||c}}}},h={noAuto:v4,config:f,dom:P4,parse:T4,library:o3,findIconDefinition:E2,toHtml:s2},F4=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=p}=c;(Object.keys(w.styles).length>0||f.autoFetchSvg)&&P&&f.autoReplaceSvg&&h.dom.i2svg({node:l})};function M2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>s2(s))}}),Object.defineProperty(c,"node",{get:function(){if(!P)return;let s=p.createElement("div");return s.innerHTML=c.html,s.children}}),c}function D4(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:o}=c;if(V2(o)&&s.found&&!a.found){let{width:t,height:z}=s,r={x:t/z/2,y:.5};e.style=z2(i(i({},n),{},{"transform-origin":"".concat(r.x+o.x/16,"em ").concat(r.y+o.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function O4(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,o=n===!0?"".concat(l,"-").concat(f.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i(i({},e),{},{id:o}),children:a}]}]}function $2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:o,title:t,maskId:z,titleId:r,extra:m,watchable:M=!1}=c,{width:L,height:u}=s.found?s:l,T=O3.includes(a),R=[f.replacementClass,e?"".concat(f.cssPrefix,"-").concat(e):""].filter(q=>m.classes.indexOf(q)===-1).filter(q=>q!==""||!!q).concat(m.classes).join(" "),g={children:[],attributes:i(i({},m.attributes),{},{"data-prefix":a,"data-icon":e,class:R,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(u)})},y=T&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/u*16*.0625,"em")}:{};M&&(g.attributes[I]=""),t&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(r||Z())},children:[t]}),delete g.attributes.title);let d=i(i({},g),{},{prefix:a,iconName:e,main:l,mask:s,maskId:z,transform:n,symbol:o,styles:i(i({},y),m.styles)}),{children:N,attributes:U}=s.found&&l.found?B("generateAbstractMask",d)||{children:[],attributes:{}}:B("generateAbstractIcon",d)||{children:[],attributes:{}};return d.children=N,d.attributes=U,o?O4(d):D4(d)}function h1(c){let{content:l,width:s,height:a,transform:e,title:n,extra:o,watchable:t=!1}=c,z=i(i(i({},o.attributes),n?{title:n}:{}),{},{class:o.classes.join(" ")});t&&(z[I]="");let r=i({},o.styles);V2(e)&&(r.transform=t4({transform:e,startCentered:!0,width:s,height:a}),r["-webkit-transform"]=r.transform);let m=z2(r);m.length>0&&(z.style=m);let M=[];return M.push({tag:"span",attributes:z,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function E4(c){let{content:l,title:s,extra:a}=c,e=i(i(i({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")}),n=z2(a.styles);n.length>0&&(e.style=n);let o=[];return o.push({tag:"span",attributes:e,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}var{styles:N2}=w;function B2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(h2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(h2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(h2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var B4={found:!1,width:512,height:512};function R4(c,l){!W1&&!f.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function R2(c,l){let s=l;return l==="fa"&&f.styleDefault!==null&&(l=E()),new Promise((a,e)=>{if(s==="fa"){let n=e3(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&N2[l]&&N2[l][c]){let n=N2[l][c];return a(B2(n))}R4(c,l),a(i(i({},B4),{},{icon:f.showMissingIcons&&c?B("missingIconAbstract")||{}:{}}))})}var x1=()=>{},H2=f.measurePerformance&&e2&&e2.mark&&e2.measure?e2:{mark:x1,measure:x1},K='FA "6.7.2"',H4=c=>(H2.mark("".concat(K," ").concat(c," begins")),()=>i3(c)),i3=c=>{H2.mark("".concat(K," ").concat(c," ends")),H2.measure("".concat(K," ").concat(c),"".concat(K," ").concat(c," begins"),"".concat(K," ").concat(c," ends"))},K2={begin:H4,end:i3},o2=()=>{};function g1(c){return typeof(c.getAttribute?c.getAttribute(I):null)=="string"}function I4(c){let l=c.getAttribute?c.getAttribute(q2):null,s=c.getAttribute?c.getAttribute(W2):null;return l&&s}function _4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(f.replacementClass)}function U4(){return f.autoReplaceSvg===!0?i2.replace:i2[f.autoReplaceSvg]||i2.replace}function q4(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function W4(c){return p.createElement(c)}function t3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?q4:W4}=l;if(typeof c=="string")return p.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(t3(n,{ceFn:s}))}),a}function G4(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var i2={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(t3(s),l)}),l.getAttribute(I)===null&&f.keepOriginalSource){let s=p.createComment(G4(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~j2(l).indexOf(f.replacementClass))return i2.replace(c);let a=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===f.replacementClass||t.match(a)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>s2(n)).join(`
`);l.setAttribute(I,""),l.innerHTML=e}};function N1(c){c()}function f3(c,l){let s=typeof l=="function"?l:o2;if(c.length===0)s();else{let a=N1;f.mutateApproach===Y3&&(a=O.requestAnimationFrame||N1),a(()=>{let e=U4(),n=K2.begin("mutate");c.map(e),n(),s()})}}var Q2=!1;function r3(){Q2=!0}function I2(){Q2=!1}var f2=null;function b1(c){if(!f1||!f.observeMutations)return;let{treeCallback:l=o2,nodeCallback:s=o2,pseudoElementsCallback:a=o2,observeMutationsRoot:e=p}=c;f2=new f1(n=>{if(Q2)return;let o=E();V(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!g1(t.addedNodes[0])&&(f.searchPseudoElements&&a(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&f.searchPseudoElements&&a(t.target.parentNode),t.type==="attributes"&&g1(t.target)&&~Z3.indexOf(t.attributeName))if(t.attributeName==="class"&&I4(t.target)){let{prefix:z,iconName:r}=L2(j2(t.target));t.target.setAttribute(q2,z||o),r&&t.target.setAttribute(W2,r)}else _4(t.target)&&s(t.target)})}),P&&f2.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function j4(){f2&&f2.disconnect()}function V4(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(a[o]=t.join(":").trim()),a},{})),s}function Y4(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=L2(j2(c));return e.prefix||(e.prefix=E()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=h4(e.prefix,c.innerText)||X2(e.prefix,T2(c.innerText))),!e.iconName&&f.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function X4(c){let l=V(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return f.autoA11y&&(s?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(a||Z()):(l["aria-hidden"]="true",l.focusable="false")),l}function $4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:S,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function S1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=Y4(c),n=X4(c),o=O2("parseNodeAttributes",{},c),t=l.styleParser?V4(c):[];return i({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:S,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:t,attributes:n}},o)}var{styles:K4}=w;function z3(c){let l=f.autoReplaceSvg==="nest"?S1(c,{styleParser:!1}):S1(c);return~l.extra.classes.indexOf(j1)?B("generateLayersText",c,l):B("generateSvgReplacementMutation",c,l)}function Q4(){return[...T3,...w2]}function w1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!P)return Promise.resolve();let s=p.documentElement.classList,a=m=>s.add("".concat(m1,"-").concat(m)),e=m=>s.remove("".concat(m1,"-").concat(m)),n=f.autoFetchSvg?Q4():H1.concat(Object.keys(K4));n.includes("fa")||n.push("fa");let o=[".".concat(j1,":not([").concat(I,"])")].concat(n.map(m=>".".concat(m,":not([").concat(I,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=V(c.querySelectorAll(o))}catch{}if(t.length>0)a("pending"),e("complete");else return Promise.resolve();let z=K2.begin("onTree"),r=t.reduce((m,M)=>{try{let L=z3(M);L&&m.push(L)}catch(L){W1||L.name==="MissingIcon"&&console.error(L)}return m},[]);return new Promise((m,M)=>{Promise.all(r).then(L=>{f3(L,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),z(),m()})}).catch(L=>{z(),M(L)})})}function J4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;z3(c).then(s=>{s&&f3([s],l)})}function Z4(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:E2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:E2(e||{})),c(a,i(i({},s),{},{mask:e}))}}var c0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=S,symbol:a=!1,mask:e=null,maskId:n=null,title:o=null,titleId:t=null,classes:z=[],attributes:r={},styles:m={}}=l;if(!c)return;let{prefix:M,iconName:L,icon:u}=c;return M2(i({type:"icon"},c),()=>(_("beforeDOMElementCreation",{iconDefinition:c,params:l}),f.autoA11y&&(o?r["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(t||Z()):(r["aria-hidden"]="true",r.focusable="false")),$2({icons:{main:B2(u),mask:e?B2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:L,transform:i(i({},S),s),symbol:a,title:o,maskId:n,titleId:t,extra:{attributes:r,styles:m,classes:z}})))},l0={mixout(){return{icon:Z4(c0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=w1,c.nodeCallback=J4,c}}},provides(c){c.i2svg=function(l){let{node:s=p,callback:a=()=>{}}=l;return w1(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:o,transform:t,symbol:z,mask:r,maskId:m,extra:M}=s;return new Promise((L,u)=>{Promise.all([R2(a,o),r.iconName?R2(r.iconName,r.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(T=>{let[R,g]=T;L([l,$2({icons:{main:R,mask:g},prefix:o,iconName:a,transform:t,symbol:z,maskId:m,title:e,titleId:n,extra:M,watchable:!0})])}).catch(u)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:o}=l,t=z2(o);t.length>0&&(a.style=t);let z;return V2(n)&&(z=B("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(z||e.icon),{children:s,attributes:a}}}},s0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return M2({type:"layer"},()=>{_("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},a0={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return M2({type:"counter",content:c},()=>(_("beforeDOMElementCreation",{content:c,params:l}),E4({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(f.cssPrefix,"-layers-counter"),...a]}})))}}}},e0={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=S,title:a=null,classes:e=[],attributes:n={},styles:o={}}=l;return M2({type:"text",content:c},()=>(_("beforeDOMElementCreation",{content:c,params:l}),h1({content:c,transform:i(i({},S),s),title:a,extra:{attributes:n,styles:o,classes:["".concat(f.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,o=null,t=null;if(B1){let z=parseInt(getComputedStyle(l).fontSize,10),r=l.getBoundingClientRect();o=r.width/z,t=r.height/z}return f.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,h1({content:l.innerHTML,width:o,height:t,transform:e,title:a,extra:n,watchable:!0})])}}},n0=new RegExp('"',"ug"),y1=[1105920,1112319],k1=i(i(i(i({},{FontAwesome:{normal:"fas",400:"fas"}}),A3),j3),H3),_2=Object.keys(k1).reduce((c,l)=>(c[l.toLowerCase()]=k1[l],c),{}),o0=Object.keys(_2).reduce((c,l)=>{let s=_2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function i0(c){let l=c.replace(n0,""),s=M4(l,0),a=s>=y1[0]&&s<=y1[1],e=l.length===2?l[0]===l[1]:!1;return{value:T2(e?l[0]:l),isSecondary:a||e}}function t0(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(_2[s]||{})[e]||o0[s]}function A1(c,l){let s="".concat(V3).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let o=V(c.children).filter(L=>L.getAttribute(k2)===l)[0],t=O.getComputedStyle(c,l),z=t.getPropertyValue("font-family"),r=z.match(Q3),m=t.getPropertyValue("font-weight"),M=t.getPropertyValue("content");if(o&&!r)return c.removeChild(o),a();if(r&&M!=="none"&&M!==""){let L=t.getPropertyValue("content"),u=t0(z,m),{value:T,isSecondary:R}=i0(L),g=r[0].startsWith("FontAwesome"),y=X2(u,T),d=y;if(g){let N=x4(T);N.iconName&&N.prefix&&(y=N.iconName,u=N.prefix)}if(y&&!R&&(!o||o.getAttribute(q2)!==u||o.getAttribute(W2)!==d)){c.setAttribute(s,d),o&&c.removeChild(o);let N=$4(),{extra:U}=N;U.attributes[k2]=l,R2(y,u).then(q=>{let u3=$2(i(i({},N),{},{icons:{main:q,mask:n3()},prefix:u,iconName:d,extra:U,watchable:!0})),p2=p.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(p2,c.firstChild):c.appendChild(p2),p2.outerHTML=u3.map(d3=>s2(d3)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function f0(c){return Promise.all([A1(c,"::before"),A1(c,"::after")])}function r0(c){return c.parentNode!==document.head&&!~X3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(k2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function v1(c){if(P)return new Promise((l,s)=>{let a=V(c.querySelectorAll("*")).filter(r0).map(f0),e=K2.begin("searchPseudoElements");r3(),Promise.all(a).then(()=>{e(),I2(),l()}).catch(()=>{e(),I2(),s()})})}var z0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=v1,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=p}=l;f.searchPseudoElements&&v1(s)}}},P1=!1,m0={mixout(){return{dom:{unwatch(){r3(),P1=!0}}}},hooks(){return{bootstrap(){b1(O2("mutationObserverCallbacks",{}))},noAuto(){j4()},watch(c){let{observeMutationsRoot:l}=c;P1?I2():b1(O2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},T1=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],o=e.slice(1).join("-");if(n&&o==="h")return s.flipX=!0,s;if(n&&o==="v")return s.flipY=!0,s;if(o=parseFloat(o),isNaN(o))return s;switch(n){case"grow":s.size=s.size+o;break;case"shrink":s.size=s.size-o;break;case"left":s.x=s.x-o;break;case"right":s.x=s.x+o;break;case"up":s.y=s.y-o;break;case"down":s.y=s.y+o;break;case"rotate":s.rotate=s.rotate+o;break}return s},l)},L0={mixout(){return{parse:{transform:c=>T1(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=T1(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,o={transform:"translate(".concat(e/2," 256)")},t="translate(".concat(a.x*32,", ").concat(a.y*32,") "),z="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),r="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(t," ").concat(z," ").concat(r)},M={transform:"translate(".concat(n/2*-1," -256)")},L={outer:o,inner:m,path:M};return{tag:"g",attributes:i({},L.outer),children:[{tag:"g",attributes:i({},L.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:i(i({},s.icon.attributes),L.path)}]}]}}}},b2={x:0,y:0,width:"100%",height:"100%"};function F1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function M0(c){return c.tag==="g"?c.children:[c]}var p0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?L2(s.split(" ").map(e=>e.trim())):n3();return a.prefix||(a.prefix=E()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:o,transform:t}=l,{width:z,icon:r}=e,{width:m,icon:M}=n,L=i4({transform:t,containerWidth:m,iconWidth:z}),u={tag:"rect",attributes:i(i({},b2),{},{fill:"white"})},T=r.children?{children:r.children.map(F1)}:{},R={tag:"g",attributes:i({},L.inner),children:[F1(i({tag:r.tag,attributes:i(i({},r.attributes),L.path)},T))]},g={tag:"g",attributes:i({},L.outer),children:[R]},y="mask-".concat(o||Z()),d="clip-".concat(o||Z()),N={tag:"mask",attributes:i(i({},b2),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,g]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:d},children:M0(M)},N]};return s.push(U,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(d,")"),mask:"url(#".concat(y,")")},b2)}),{children:s,attributes:a}}}},C0={provides(c){let l=!1;O.matchMedia&&(l=O.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:i(i({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=i(i({},e),{},{attributeName:"opacity"}),o={tag:"circle",attributes:i(i({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return l||o.children.push({tag:"animate",attributes:i(i({},e),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i(i({},n),{},{values:"1;0;1;1;0;1;"})}),s.push(o),s.push({tag:"path",attributes:i(i({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:i(i({},n),{},{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:i(i({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i(i({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},u0={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},d0=[r4,l0,s0,a0,e0,z0,m0,L0,p0,C0,u0];A4(d0,{mixoutsTo:h});var P0=h.noAuto,h0=h.config,T0=h.library,x0=h.dom,g0=h.parse,F0=h.findIconDefinition,D0=h.toHtml,N0=h.icon,O0=h.layer,b0=h.text,S0=h.counter;var m3=(()=>{class c{static{this.\u0275fac=function(a){return new(a||c)}}static{this.\u0275mod=c1({type:c})}static{this.\u0275inj=J2({})}}return c})();var L3={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"]};var M3={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"]};var p3={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]};function y0(c,l){if(c&1&&(k(0,"div",9)(1,"div",10)(2,"h3"),F(3),b(),k(4,"h4"),F(5),b(),k(6,"span",11),X(7,"i",12),F(8),b(),k(9,"p",13),F(10),b()(),X(11,"div",14),b()),c&2){let s=l.$implicit,a=l.index;x(),Y("left",a%2===0)("right",a%2!==0),x(2),$(s.titulo),x(2),$(s.local),x(3),a2(" ",s.periodo,""),x(2),$(s.descricao)}}var C3=class c{tr=Z2(n1);faGraduation=p3;faWork=M3;faCalendar=L3;activeTab="trabalhos";trabalhos=d2(()=>this.tr.t("trabalhos"));formacoes=d2(()=>this.tr.t("formacoes"));getFilteredItems(){return this.activeTab==="trabalhos"?this.trabalhos():this.formacoes()}changeTab(l){this.activeTab=l}static \u0275fac=function(s){return new(s||c)};static \u0275cmp=C2({type:c,selectors:[["app-experiencias"]],decls:14,vars:8,consts:[["id","experiencias",1,"tamanho"],[1,"header-area"],[1,"tooling-title"],[1,"tabs"],[1,"tab",3,"click"],[1,"fa-solid","fa-briefcase"],[1,"fa-solid","fa-graduation-cap"],[1,"timeline"],["class","timeline-item",4,"ngFor","ngForOf"],[1,"timeline-item"],[1,"timeline-content"],[1,"date"],[1,"fa-solid","fa-calendar"],[1,"descricao"],[1,"timeline-dot"]],template:function(s,a){s&1&&(k(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2"),F(4),b()()(),k(5,"div",3)(6,"button",4),u2("click",function(){return a.changeTab("trabalhos")}),X(7,"i",5),F(8),b(),k(9,"button",4),u2("click",function(){return a.changeTab("formacoes")}),X(10,"i",6),F(11),b()(),k(12,"div",7),l1(13,y0,12,8,"div",8),b()()),s&2&&(x(4),$(a.tr.t("exp_title")),x(2),Y("active",a.activeTab==="trabalhos"),x(2),a2(" ",a.tr.t("exp_tab_professional")," "),x(),Y("active",a.activeTab==="formacoes"),x(2),a2(" ",a.tr.t("exp_tab_academic")," "),x(2),s1("ngForOf",a.getFilteredItems()))},dependencies:[e1,a1,m3],styles:['[_nghost-%COMP%]{display:block;width:100%}.tamanho[_ngcontent-%COMP%]{width:100%;padding:0 16px;box-sizing:border-box}.header-area[_ngcontent-%COMP%]{text-align:center;padding:40px 0 10px}.header-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 20px;color:var(--text-muted)}.tabs[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:20px;margin-bottom:30px;flex-wrap:wrap}.tab[_ngcontent-%COMP%]{background:none;border:none;font-size:18px;font-weight:700;color:var(--text-muted);padding:10px 20px;cursor:url("./media/arrowClick-WEAYCDGY.svg") 15 15,auto!important;transition:all .3s var(--ease-out-expo);border-radius:var(--radius-md)}.tab[_ngcontent-%COMP%]:hover{color:var(--text-secondary);background:#00ff880a}.tab.active[_ngcontent-%COMP%]{color:var(--green);border-bottom:3px solid var(--green);text-shadow:0 0 15px rgba(0,255,136,.3)}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;position:relative;width:100%}.timeline[_ngcontent-%COMP%]:before{content:"";position:absolute;width:3px;height:100%;background:linear-gradient(to bottom,var(--green),rgba(0,255,136,.1));left:50%;transform:translate(-50%);border-radius:2px;box-shadow:0 0 15px #00ff8826}.timeline-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;position:relative;width:100%;margin-bottom:30px}.timeline-dot[_ngcontent-%COMP%]{width:14px;height:14px;background:var(--green);border-radius:50%;position:absolute;left:50%;transform:translate(-50%);box-shadow:0 0 20px #0f86;animation:_ngcontent-%COMP%_dotGlow 3s ease-in-out infinite}.timeline-dot[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(0,255,136,.2)}@keyframes _ngcontent-%COMP%_dotGlow{0%,to{box-shadow:0 0 15px #00ff884d}50%{box-shadow:0 0 25px #0f89}}.timeline-content[_ngcontent-%COMP%]{background:var(--bg-card);color:var(--text-primary);padding:24px 28px;border-radius:var(--radius-lg);width:calc(40% - 20px);overflow:hidden;text-align:left;box-sizing:border-box;border:1px solid var(--border-subtle);box-shadow:var(--shadow-card);transition:all .4s var(--ease-out-expo)}.timeline-content[_ngcontent-%COMP%]:hover{border-color:var(--border-glow);box-shadow:0 0 25px #00ff8814,var(--shadow-elevated);transform:translateY(-2px)}.timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px;font-weight:800;margin:0 0 4px;word-break:break-word;line-height:1.3;color:var(--text-primary)}.timeline-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:400;font-style:italic;margin:0 0 6px;color:var(--green)}.timeline-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:13px;color:var(--text-muted);margin-bottom:12px}.descricao[_ngcontent-%COMP%]{font-size:16px;color:var(--text-secondary);line-height:1.6;margin:0}.timeline-content.left[_ngcontent-%COMP%]{text-align:left;margin-left:auto;margin-right:calc(50% + 6px)}.timeline-content.right[_ngcontent-%COMP%]{text-align:left;margin-left:calc(50% + 6px);margin-right:auto}@media (max-width: 768px){.timeline[_ngcontent-%COMP%]{padding-left:30px}.timeline[_ngcontent-%COMP%]:before{left:10px;transform:none}.timeline-dot[_ngcontent-%COMP%]{left:10px;transform:translate(-50%)}.timeline-item[_ngcontent-%COMP%]{justify-content:flex-start}.timeline-content[_ngcontent-%COMP%], .timeline-content.left[_ngcontent-%COMP%], .timeline-content.right[_ngcontent-%COMP%]{width:100%!important;margin-left:0!important;margin-right:0!important;text-align:left!important;padding:16px 20px}}@media (max-width: 480px){.tab[_ngcontent-%COMP%]{font-size:15px;padding:8px 14px}.timeline-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px}.timeline-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}.timeline-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.timeline-content[_ngcontent-%COMP%], .timeline-content.left[_ngcontent-%COMP%], .timeline-content.right[_ngcontent-%COMP%]{padding:12px 14px}}[data-theme=light][_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:hover, [data-theme=light]   [_nghost-%COMP%]   .tab[_ngcontent-%COMP%]:hover{background:#0478570f}[data-theme=light][_nghost-%COMP%]   .tab.active[_ngcontent-%COMP%], [data-theme=light]   [_nghost-%COMP%]   .tab.active[_ngcontent-%COMP%]{text-shadow:none}[data-theme=light][_nghost-%COMP%]   .timeline[_ngcontent-%COMP%]:before, [data-theme=light]   [_nghost-%COMP%]   .timeline[_ngcontent-%COMP%]:before{background:linear-gradient(to bottom,var(--green),rgba(4,120,87,.12));box-shadow:none}[data-theme=light][_nghost-%COMP%]   .timeline-dot[_ngcontent-%COMP%], [data-theme=light]   [_nghost-%COMP%]   .timeline-dot[_ngcontent-%COMP%]{box-shadow:0 0 0 4px #fff,0 0 14px #04785759;animation:none}[data-theme=light][_nghost-%COMP%]   .timeline-dot[_ngcontent-%COMP%]:before, [data-theme=light]   [_nghost-%COMP%]   .timeline-dot[_ngcontent-%COMP%]:before{border-color:#04785740}[data-theme=light][_nghost-%COMP%]   .timeline-content[_ngcontent-%COMP%]:hover, [data-theme=light]   [_nghost-%COMP%]   .timeline-content[_ngcontent-%COMP%]:hover{box-shadow:0 0 0 1px #0478571f,var(--shadow-elevated)}']})};export{C3 as a};
