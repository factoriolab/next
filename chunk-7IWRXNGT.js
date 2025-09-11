import{K as rn,L as an,V as on,da as sn,f as en,k as tn,l as nn}from"./chunk-SCJWCTBV.js";import{$ as ee,$a as j,Aa as Kt,Ab as re,B as Xt,D as qe,Hb as Qt,J as Xe,Jb as nt,Kb as rt,Lb as at,Oa as Jt,Ra as F,T as Ke,Ua as Qe,Ub as it,Xb as ke,Yb as Ee,Zb as Ie,_ as T,ab as ne,ba as de,bb as we,c as Yt,cb as xe,da as y,e as Gt,f as ue,hb as Zt,hc as Ae,ib as et,ic as De,l as qt,la as te,nc as G,oc as ot,qa as Je,qb as tt,rb as L,rc as S,sb as $,vc as k,wa as Ze,xb as me,xc as st,yb as Se,zb as Ce}from"./chunk-OPOL2C2X.js";import{a as Y,b as Ht,d as Ut}from"./chunk-HZ6M6AS2.js";function pt(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function ra(e){if(Array.isArray(e))return e}function aa(e){if(Array.isArray(e))return pt(e)}function ia(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ln(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$n(r.key),r)}}function oa(e,n,t){return n&&ln(e.prototype,n),t&&ln(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pe(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Dt(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function g(e,n,t){return(n=$n(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function sa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function la(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,a,i,o,s=[],l=!0,f=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);l=!0);}catch(d){f=!0,a=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(f)throw a}}return s}}function ca(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cn(Object(t),!0).forEach(function(r){g(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cn(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function je(e,n){return ra(e)||la(e,n)||Dt(e,n)||ca()}function O(e){return aa(e)||sa(e)||Dt(e)||fa()}function ua(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function $n(e){var n=ua(e,"string");return typeof n=="symbol"?n:n+""}function Ne(e){"@babel/helpers - typeof";return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ne(e)}function Dt(e,n){if(e){if(typeof e=="string")return pt(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?pt(e,n):void 0}}var fn=function(){},Ot={},Vn={},Bn=null,Wn={mark:fn,measure:fn};try{typeof window<"u"&&(Ot=window),typeof document<"u"&&(Vn=document),typeof MutationObserver<"u"&&(Bn=MutationObserver),typeof performance<"u"&&(Wn=performance)}catch{}var da=Ot.navigator||{},un=da.userAgent,dn=un===void 0?"":un,B=Ot,b=Vn,mn=Bn,Oe=Wn,Bs=!!B.document,z=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Hn=~dn.indexOf("MSIE")||~dn.indexOf("Trident/"),lt,ma=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ha=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Un={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},pa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],C="classic",ye="duotone",Gn="sharp",qn="sharp-duotone",Xn="chisel",Kn="etch",Jn="jelly",Zn="jelly-duo",Qn="jelly-fill",er="notdog",tr="notdog-duo",nr="slab",rr="slab-press",ar="thumbprint",ir="whiteboard",ga="Classic",va="Duotone",ya="Sharp",ba="Sharp Duotone",_a="Chisel",wa="Etch",xa="Jelly",Sa="Jelly Duo",Ca="Jelly Fill",ka="Notdog",Ea="Notdog Duo",Ia="Slab",Aa="Slab Press",Da="Thumbprint",Oa="Whiteboard",or=[C,ye,Gn,qn,Xn,Kn,Jn,Zn,Qn,er,tr,nr,rr,ar,ir],Ws=(lt={},g(g(g(g(g(g(g(g(g(g(lt,C,ga),ye,va),Gn,ya),qn,ba),Xn,_a),Kn,wa),Jn,xa),Zn,Sa),Qn,Ca),er,ka),g(g(g(g(g(lt,tr,Ea),nr,Ia),rr,Aa),ar,Da),ir,Oa)),Ta={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Pa={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Ra=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Fa={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},sr=["fak","fa-kit","fakd","fa-kit-duotone"],hn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Na=["kit"],Ma="kit",za="kit-duotone",ja="Kit",La="Kit Duotone",Hs=g(g({},Ma,ja),za,La),$a={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Va={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ba={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},pn={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ct,Te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ha="classic",Ua="duotone",Ya="sharp",Ga="sharp-duotone",qa="chisel",Xa="etch",Ka="jelly",Ja="jelly-duo",Za="jelly-fill",Qa="notdog",ei="notdog-duo",ti="slab",ni="slab-press",ri="thumbprint",ai="whiteboard",ii="Classic",oi="Duotone",si="Sharp",li="Sharp Duotone",ci="Chisel",fi="Etch",ui="Jelly",di="Jelly Duo",mi="Jelly Fill",hi="Notdog",pi="Notdog Duo",gi="Slab",vi="Slab Press",yi="Thumbprint",bi="Whiteboard",Us=(ct={},g(g(g(g(g(g(g(g(g(g(ct,Ha,ii),Ua,oi),Ya,si),Ga,li),qa,ci),Xa,fi),Ka,ui),Ja,di),Za,mi),Qa,hi),g(g(g(g(g(ct,ei,pi),ti,gi),ni,vi),ri,yi),ai,bi)),_i="kit",wi="kit-duotone",xi="Kit",Si="Kit Duotone",Ys=g(g({},_i,xi),wi,Si),Ci={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},ki={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},gt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Ei=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],lr=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Wa,Ei),Ii=["solid","regular","light","thin","duotone","brands","semibold"],cr=[1,2,3,4,5,6,7,8,9,10],Ai=cr.concat([11,12,13,14,15,16,17,18,19,20]),Di=["aw","fw","pull-left","pull-right"],Oi=[].concat(O(Object.keys(ki)),Ii,Di,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",Te.GROUP,Te.SWAP_OPACITY,Te.PRIMARY,Te.SECONDARY]).concat(cr.map(function(e){return"".concat(e,"x")})).concat(Ai.map(function(e){return"w-".concat(e)})),Ti={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},N="___FONT_AWESOME___",vt=16,fr="fa",ur="svg-inline--fa",X="data-fa-i2svg",yt="data-fa-pseudo-element",Pi="data-fa-pseudo-element-pending",Tt="data-prefix",Pt="data-icon",gn="fontawesome-i2svg",Ri="async",Fi=["HTML","HEAD","STYLE","SCRIPT"],dr=["::before","::after",":before",":after"],mr=function(){try{return!0}catch{return!1}}();function be(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[C]}})}var hr=c({},Un);hr[C]=c(c(c(c({},{"fa-duotone":"duotone"}),Un[C]),hn.kit),hn["kit-duotone"]);var Ni=be(hr),bt=c({},Fa);bt[C]=c(c(c(c({},{duotone:"fad"}),bt[C]),pn.kit),pn["kit-duotone"]);var vn=be(bt),_t=c({},gt);_t[C]=c(c({},_t[C]),Ba.kit);var pr=be(_t),wt=c({},Ci);wt[C]=c(c({},wt[C]),$a.kit);var Gs=be(wt),Mi=ma,gr="fa-layers-text",zi=ha,ji=c({},Ta),qs=be(ji),Li=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft=pa,$i=[].concat(O(Na),O(Oi)),pe=B.FontAwesomeConfig||{};function Vi(e){var n=b.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function Bi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}b&&typeof b.querySelector=="function"&&(yn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],yn.forEach(function(e){var n=je(e,2),t=n[0],r=n[1],a=Bi(Vi(t));a!=null&&(pe[r]=a)}));var yn,vr={styleDefault:"solid",familyDefault:C,cssPrefix:fr,replacementClass:ur,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};pe.familyPrefix&&(pe.cssPrefix=pe.familyPrefix);var oe=c(c({},vr),pe);oe.autoReplaceSvg||(oe.observeMutations=!1);var m={};Object.keys(vr).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(t){oe[e]=t,ge.forEach(function(r){return r(m)})},get:function(){return oe[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){oe.cssPrefix=n,ge.forEach(function(t){return t(m)})},get:function(){return oe.cssPrefix}});B.FontAwesomeConfig=m;var ge=[];function Wi(e){return ge.push(e),function(){ge.splice(ge.indexOf(e),1)}}var V=vt,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hi(e){if(!(!e||!z)){var n=b.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=b.head.childNodes,r=null,a=t.length-1;a>-1;a--){var i=t[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return b.head.insertBefore(n,r),e}}var Ui="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function bn(){for(var e=12,n="";e-- >0;)n+=Ui[Math.random()*62|0];return n}function se(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Rt(e){return e.classList?se(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function yr(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yi(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(yr(e[t]),'" ')},"").trim()}function Le(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Ft(e){return e.size!==P.size||e.x!==P.x||e.y!==P.y||e.rotate!==P.rotate||e.flipX||e.flipY}function Gi(e){var n=e.transform,t=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function qi(e){var n=e.transform,t=e.width,r=t===void 0?vt:t,a=e.height,i=a===void 0?vt:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Hn?l+="translate(".concat(n.x/V-r/2,"em, ").concat(n.y/V-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(n.x/V,"em), calc(-50% + ").concat(n.y/V,"em)) "):l+="translate(".concat(n.x/V,"em, ").concat(n.y/V,"em) "),l+="scale(".concat(n.size/V*(n.flipX?-1:1),", ").concat(n.size/V*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var Xi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
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
    animation: none !important;
    transition: none !important;
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
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
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
}`;function br(){var e=fr,n=ur,t=m.cssPrefix,r=m.replacementClass,a=Xi;if(t!==e||r!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(r))}return a}var _n=!1;function ut(){m.autoAddCss&&!_n&&(Hi(br()),_n=!0)}var Ki={mixout:function(){return{dom:{css:br,insertCss:ut}}},hooks:function(){return{beforeDOMElementCreation:function(){ut()},beforeI2svg:function(){ut()}}}},M=B||{};M[N]||(M[N]={});M[N].styles||(M[N].styles={});M[N].hooks||(M[N].hooks={});M[N].shims||(M[N].shims=[]);var D=M[N],_r=[],wr=function(){b.removeEventListener("DOMContentLoaded",wr),Me=1,_r.map(function(n){return n()})},Me=!1;z&&(Me=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),Me||b.addEventListener("DOMContentLoaded",wr));function Ji(e){z&&(Me?setTimeout(e,0):_r.push(e))}function _e(e){var n=e.tag,t=e.attributes,r=t===void 0?{}:t,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?yr(e):"<".concat(n," ").concat(Yi(r),">").concat(i.map(_e).join(""),"</").concat(n,">")}function wn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Zi=function(n,t){return function(r,a,i,o){return n.call(t,r,a,i,o)}},dt=function(n,t,r,a){var i=Object.keys(n),o=i.length,s=a!==void 0?Zi(t,a):t,l,f,d;for(r===void 0?(l=1,d=n[i[0]]):(l=0,d=r);l<o;l++)f=i[l],d=s(d,n[f],f,n);return d};function xr(e){return O(e).length!==1?null:e.codePointAt(0).toString(16)}function xn(e){return Object.keys(e).reduce(function(n,t){var r=e[t],a=!!r.icon;return a?n[r.iconName]=r.icon:n[t]=r,n},{})}function Sr(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,a=r===void 0?!1:r,i=xn(n);typeof D.hooks.addPack=="function"&&!a?D.hooks.addPack(e,xn(n)):D.styles[e]=c(c({},D.styles[e]||{}),i),e==="fas"&&Sr("fa",n)}var ve=D.styles,Qi=D.shims,Cr=Object.keys(pr),eo=Cr.reduce(function(e,n){return e[n]=Object.keys(pr[n]),e},{}),Nt=null,kr={},Er={},Ir={},Ar={},Dr={};function to(e){return~$i.indexOf(e)}function no(e,n){var t=n.split("-"),r=t[0],a=t.slice(1).join("-");return r===e&&a!==""&&!to(a)?a:null}var Or=function(){var n=function(i){return dt(ve,function(o,s,l){return o[l]=dt(s,i,{}),o},{})};kr=n(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Er=n(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Dr=n(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var t="far"in ve||m.autoFetchSvg,r=dt(Qi,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ir=r.names,Ar=r.unicodes,Nt=$e(m.styleDefault,{family:m.familyDefault})};Wi(function(e){Nt=$e(e.styleDefault,{family:m.familyDefault})});Or();function Mt(e,n){return(kr[e]||{})[n]}function ro(e,n){return(Er[e]||{})[n]}function q(e,n){return(Dr[e]||{})[n]}function Tr(e){return Ir[e]||{prefix:null,iconName:null}}function ao(e){var n=Ar[e],t=Mt("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function W(){return Nt}var Pr=function(){return{prefix:null,iconName:null,rest:[]}};function io(e){var n=C,t=Cr.reduce(function(r,a){return r[a]="".concat(m.cssPrefix,"-").concat(a),r},{});return or.forEach(function(r){(e.includes(t[r])||e.some(function(a){return eo[r].includes(a)}))&&(n=r)}),n}function $e(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,r=t===void 0?C:t,a=Ni[r][e];if(r===ye&&!e)return"fad";var i=vn[r][e]||vn[r][a],o=e in D.styles?e:null,s=i||o||null;return s}function oo(e){var n=[],t=null;return e.forEach(function(r){var a=no(m.cssPrefix,r);a?t=a:r&&n.push(r)}),{iconName:t,rest:n}}function Sn(e){return e.sort().filter(function(n,t,r){return r.indexOf(n)===t})}var Cn=lr.concat(sr);function Ve(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,r=t===void 0?!1:t,a=null,i=Sn(e.filter(function(p){return Cn.includes(p)})),o=Sn(e.filter(function(p){return!Cn.includes(p)})),s=i.filter(function(p){return a=p,!Yn.includes(p)}),l=je(s,1),f=l[0],d=f===void 0?null:f,u=io(i),h=c(c({},oo(o)),{},{prefix:$e(d,{family:u})});return c(c(c({},h),fo({values:e,family:u,styles:ve,config:m,canonical:h,givenPrefix:a})),so(r,a,h))}function so(e,n,t){var r=t.prefix,a=t.iconName;if(e||!r||!a)return{prefix:r,iconName:a};var i=n==="fa"?Tr(a):{},o=q(r,a);return a=i.iconName||o||a,r=i.prefix||r,r==="far"&&!ve.far&&ve.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}var lo=or.filter(function(e){return e!==C||e!==ye}),co=Object.keys(gt).filter(function(e){return e!==C}).map(function(e){return Object.keys(gt[e])}).flat();function fo(e){var n=e.values,t=e.family,r=e.canonical,a=e.givenPrefix,i=a===void 0?"":a,o=e.styles,s=o===void 0?{}:o,l=e.config,f=l===void 0?{}:l,d=t===ye,u=n.includes("fa-duotone")||n.includes("fad"),h=f.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(u||h||p)&&(r.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(r.prefix="fab"),!r.prefix&&lo.includes(t)){var _=Object.keys(s).find(function(x){return co.includes(x)});if(_||f.autoFetchSvg){var v=Ra.get(t).defaultShortPrefixId;r.prefix=v,r.iconName=q(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=W()||"fas"),r}var uo=function(){function e(){ia(this,e),this.definitions={}}return oa(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=c(c({},t.definitions[s]||{}),o[s]),Sr(s,o[s]),Or()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,d=f[2];t[s]||(t[s]={}),d.length>0&&d.forEach(function(u){typeof u=="string"&&(t[s][u]=f)}),t[s][l]=f}),t}}])}(),kn=[],ae={},ie={},mo=Object.keys(ie);function ho(e,n){var t=n.mixoutsTo;return kn=e,ae={},Object.keys(ie).forEach(function(r){mo.indexOf(r)===-1&&delete ie[r]}),kn.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(t[o]=a[o]),Ne(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ae[o]||(ae[o]=[]),ae[o].push(i[o])})}r.provides&&r.provides(ie)}),t}function xt(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];var i=ae[e]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(r))}),n}function K(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=ae[e]||[];a.forEach(function(i){i.apply(null,t)})}function H(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return ie[e]?ie[e].apply(null,n):void 0}function St(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||W();if(n)return n=q(t,n)||n,wn(Rr.definitions,t,n)||wn(D.styles,t,n)}var Rr=new uo,po=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,K("noAuto")},go={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return z?(K("beforeI2svg",n),H("pseudoElements2svg",n),H("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ji(function(){yo({autoReplaceSvgRoot:t}),K("watch",n)})}},vo={icon:function(n){if(n===null)return null;if(Ne(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:q(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],r=$e(n[0]);return{prefix:r,iconName:q(r,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Mi))){var a=Ve(n.split(" "),{skipLookups:!0});return{prefix:a.prefix||W(),iconName:q(a.prefix,a.iconName)||a.iconName}}if(typeof n=="string"){var i=W();return{prefix:i,iconName:q(i,n)||n}}}},I={noAuto:po,config:m,dom:go,parse:vo,library:Rr,findIconDefinition:St,toHtml:_e},yo=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,r=t===void 0?b:t;(Object.keys(D.styles).length>0||m.autoFetchSvg)&&z&&m.autoReplaceSvg&&I.dom.i2svg({node:r})};function Be(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return _e(r)})}}),Object.defineProperty(e,"node",{get:function(){if(z){var r=b.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function bo(e){var n=e.children,t=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ft(o)&&t.found&&!r.found){var s=t.width,l=t.height,f={x:s/l/2,y:.5};a.style=Le(c(c({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}function _o(e){var n=e.prefix,t=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},a),{},{id:o}),children:r}]}]}function wo(e){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in e})}function zt(e){var n=e.icons,t=n.main,r=n.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,f=e.extra,d=e.watchable,u=d===void 0?!1:d,h=r.found?r:t,p=h.width,_=h.height,v=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(R){return f.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(f.classes).join(" "),x={children:[],attributes:c(c({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:v,role:f.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(_)})};!wo(f.attributes)&&!f.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),u&&(x.attributes[X]="");var w=c(c({},x),{},{prefix:a,iconName:i,main:t,mask:r,maskId:l,transform:o,symbol:s,styles:c({},f.styles)}),E=r.found&&t.found?H("generateAbstractMask",w)||{children:[],attributes:{}}:H("generateAbstractIcon",w)||{children:[],attributes:{}},A=E.children,Q=E.attributes;return w.children=A,w.attributes=Q,s?_o(w):bo(w)}function En(e){var n=e.content,t=e.width,r=e.height,a=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=c(c({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[X]="");var f=c({},i.styles);Ft(a)&&(f.transform=qi({transform:a,startCentered:!0,width:t,height:r}),f["-webkit-transform"]=f.transform);var d=Le(f);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[n]}),u}function xo(e){var n=e.content,t=e.extra,r=c(c({},t.attributes),{},{class:t.classes.join(" ")}),a=Le(t.styles);a.length>0&&(r.style=a);var i=[];return i.push({tag:"span",attributes:r,children:[n]}),i}var mt=D.styles;function Ct(e){var n=e[0],t=e[1],r=e.slice(4),a=je(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var So={found:!1,width:512,height:512};function Co(e,n){!mr&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function kt(e,n){var t=n;return n==="fa"&&m.styleDefault!==null&&(n=W()),new Promise(function(r,a){if(t==="fa"){var i=Tr(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&mt[n]&&mt[n][e]){var o=mt[n][e];return r(Ct(o))}Co(e,n),r(c(c({},So),{},{icon:m.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}var In=function(){},Et=m.measurePerformance&&Oe&&Oe.mark&&Oe.measure?Oe:{mark:In,measure:In},he='FA "7.0.0"',ko=function(n){return Et.mark("".concat(he," ").concat(n," begins")),function(){return Fr(n)}},Fr=function(n){Et.mark("".concat(he," ").concat(n," ends")),Et.measure("".concat(he," ").concat(n),"".concat(he," ").concat(n," begins"),"".concat(he," ").concat(n," ends"))},jt={begin:ko,end:Fr},Re=function(){};function An(e){var n=e.getAttribute?e.getAttribute(X):null;return typeof n=="string"}function Eo(e){var n=e.getAttribute?e.getAttribute(Tt):null,t=e.getAttribute?e.getAttribute(Pt):null;return n&&t}function Io(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Ao(){if(m.autoReplaceSvg===!0)return Fe.replace;var e=Fe[m.autoReplaceSvg];return e||Fe.replace}function Do(e){return b.createElementNS("http://www.w3.org/2000/svg",e)}function Oo(e){return b.createElement(e)}function Nr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,r=t===void 0?e.tag==="svg"?Do:Oo:t;if(typeof e=="string")return b.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Nr(o,{ceFn:r}))}),a}function To(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Fe={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(a){t.parentNode.insertBefore(Nr(a),t)}),t.getAttribute(X)===null&&m.keepOriginalSource){var r=b.createComment(To(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(n){var t=n[0],r=n[1];if(~Rt(t).indexOf(m.replacementClass))return Fe.replace(n);var a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return _e(s)}).join(`
`);t.setAttribute(X,""),t.innerHTML=o}};function Dn(e){e()}function Mr(e,n){var t=typeof n=="function"?n:Re;if(e.length===0)t();else{var r=Dn;m.mutateApproach===Ri&&(r=B.requestAnimationFrame||Dn),r(function(){var a=Ao(),i=jt.begin("mutate");e.map(a),i(),t()})}}var Lt=!1;function zr(){Lt=!0}function It(){Lt=!1}var ze=null;function On(e){if(mn&&m.observeMutations){var n=e.treeCallback,t=n===void 0?Re:n,r=e.nodeCallback,a=r===void 0?Re:r,i=e.pseudoElementsCallback,o=i===void 0?Re:i,s=e.observeMutationsRoot,l=s===void 0?b:s;ze=new mn(function(f){if(!Lt){var d=W();se(f).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!An(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o([u.target],!0),u.type==="attributes"&&An(u.target)&&~Li.indexOf(u.attributeName))if(u.attributeName==="class"&&Eo(u.target)){var h=Ve(Rt(u.target)),p=h.prefix,_=h.iconName;u.target.setAttribute(Tt,p||d),_&&u.target.setAttribute(Pt,_)}else Io(u.target)&&a(u.target)})}}),z&&ze.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Po(){ze&&ze.disconnect()}function Ro(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),t}function Fo(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Ve(Rt(e));return a.prefix||(a.prefix=W()),n&&t&&(a.prefix=n,a.iconName=t),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ro(a.prefix,e.innerText)||Mt(a.prefix,xr(e.innerText))),!a.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function No(e){var n=se(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{});return n}function Mo(){return{iconName:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Tn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Fo(e),r=t.iconName,a=t.prefix,i=t.rest,o=No(e),s=xt("parseNodeAttributes",{},e),l=n.styleParser?Ro(e):[];return c({iconName:r,prefix:a,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var zo=D.styles;function jr(e){var n=m.autoReplaceSvg==="nest"?Tn(e,{styleParser:!1}):Tn(e);return~n.extra.classes.indexOf(gr)?H("generateLayersText",e,n):H("generateSvgReplacementMutation",e,n)}function jo(){return[].concat(O(sr),O(lr))}function Pn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!z)return Promise.resolve();var t=b.documentElement.classList,r=function(u){return t.add("".concat(gn,"-").concat(u))},a=function(u){return t.remove("".concat(gn,"-").concat(u))},i=m.autoFetchSvg?jo():Yn.concat(Object.keys(zo));i.includes("fa")||i.push("fa");var o=[".".concat(gr,":not([").concat(X,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(X,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=se(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=jt.begin("onTree"),f=s.reduce(function(d,u){try{var h=jr(u);h&&d.push(h)}catch(p){mr||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,u){Promise.all(f).then(function(h){Mr(h,function(){r("active"),r("complete"),a("pending"),typeof n=="function"&&n(),l(),d()})}).catch(function(h){l(),u(h)})})}function Lo(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jr(e).then(function(t){t&&Mr([t],n)})}function $o(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(n||{}).icon?n:St(n||{}),a=t.mask;return a&&(a=(a||{}).icon?a:St(a||{})),e(r,c(c({},t),{},{mask:a}))}}var Vo=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,a=r===void 0?P:r,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,f=t.maskId,d=f===void 0?null:f,u=t.classes,h=u===void 0?[]:u,p=t.attributes,_=p===void 0?{}:p,v=t.styles,x=v===void 0?{}:v;if(n){var w=n.prefix,E=n.iconName,A=n.icon;return Be(c({type:"icon"},n),function(){return K("beforeDOMElementCreation",{iconDefinition:n,params:t}),zt({icons:{main:Ct(A),mask:l?Ct(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:E,transform:c(c({},P),a),symbol:o,maskId:d,extra:{attributes:_,styles:x,classes:h}})})}},Bo={mixout:function(){return{icon:$o(Vo)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Pn,t.nodeCallback=Lo,t}}},provides:function(n){n.i2svg=function(t){var r=t.node,a=r===void 0?b:r,i=t.callback,o=i===void 0?function(){}:i;return Pn(a,o)},n.generateSvgReplacementMutation=function(t,r){var a=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,f=r.maskId,d=r.extra;return new Promise(function(u,h){Promise.all([kt(a,i),l.iconName?kt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var _=je(p,2),v=_[0],x=_[1];u([t,zt({icons:{main:v,mask:x},prefix:i,iconName:a,transform:o,symbol:s,maskId:f,extra:d,watchable:!0})])}).catch(h)})},n.generateAbstractIcon=function(t){var r=t.children,a=t.attributes,i=t.main,o=t.transform,s=t.styles,l=Le(s);l.length>0&&(a.style=l);var f;return Ft(o)&&(f=H("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Wo={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Be({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(O(i)).join(" ")},children:o}]})}}}},Ho={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,u=d===void 0?{}:d;return Be({type:"counter",content:t},function(){return K("beforeDOMElementCreation",{content:t,params:r}),xo({content:t.toString(),title:i,extra:{attributes:f,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(O(s))}})})}}}},Uo={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?P:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,d=r.styles,u=d===void 0?{}:d;return Be({type:"text",content:t},function(){return K("beforeDOMElementCreation",{content:t,params:r}),En({content:t,transform:c(c({},P),i),extra:{attributes:f,styles:u,classes:["".concat(m.cssPrefix,"-layers-text")].concat(O(s))}})})}}},provides:function(n){n.generateLayersText=function(t,r){var a=r.transform,i=r.extra,o=null,s=null;if(Hn){var l=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/l,s=f.height/l}return Promise.resolve([t,En({content:t.innerHTML,width:o,height:s,transform:a,extra:i,watchable:!0})])}}},Lr=new RegExp('"',"ug"),Rn=[1105920,1112319],Fn=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Pa),Ti),Va),At=Object.keys(Fn).reduce(function(e,n){return e[n.toLowerCase()]=Fn[n],e},{}),Yo=Object.keys(At).reduce(function(e,n){var t=At[n];return e[n]=t[900]||O(Object.entries(t))[0][1],e},{});function Go(e){var n=e.replace(Lr,"");return xr(O(n)[0]||"")}function qo(e){var n=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),r=t.replace(Lr,""),a=r.codePointAt(0),i=a>=Rn[0]&&a<=Rn[1],o=r.length===2?r[0]===r[1]:!1;return i||o||n}function Xo(e,n){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(n),a=isNaN(r)?"normal":r;return(At[t]||{})[a]||Yo[t]}function Nn(e,n){var t="".concat(Pi).concat(n.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(t)!==null)return r();var i=se(e.children),o=i.filter(function(Ye){return Ye.getAttribute(yt)===n})[0],s=B.getComputedStyle(e,n),l=s.getPropertyValue("font-family"),f=l.match(zi),d=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),r();if(f&&u!=="none"&&u!==""){var h=s.getPropertyValue("content"),p=Xo(l,d),_=Go(h),v=f[0].startsWith("FontAwesome"),x=qo(s),w=Mt(p,_),E=w;if(v){var A=ao(_);A.iconName&&A.prefix&&(w=A.iconName,p=A.prefix)}if(w&&!x&&(!o||o.getAttribute(Tt)!==p||o.getAttribute(Pt)!==E)){e.setAttribute(t,E),o&&e.removeChild(o);var Q=Mo(),R=Q.extra;R.attributes[yt]=n,kt(w,p).then(function(Ye){var ta=zt(c(c({},Q),{},{icons:{main:Ye,mask:Pr()},prefix:p,iconName:E,extra:R,watchable:!0})),Ge=b.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(Ge,e.firstChild):e.appendChild(Ge),Ge.outerHTML=ta.map(function(na){return _e(na)}).join(`
`),e.removeAttribute(t),r()}).catch(a)}else r()}else r()})}function Ko(e){return Promise.all([Nn(e,"::before"),Nn(e,"::after")])}function Jo(e){return e.parentNode!==document.head&&!~Fi.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(yt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Zo=function(n){return!!n&&dr.some(function(t){return n.includes(t)})},Qo=function(n){if(!n)return[];for(var t=new Set,r=[n],a=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var p=s[o];r=r.flatMap(function(_){return _.split(p).map(function(v){return v.replace(/,\s*$/,"").trim()})})},o=0,s=a;o<s.length;o++)i();r=r.flatMap(function(h){return h.includes("(")?h:h.split(",").map(function(p){return p.trim()})});var l=Pe(r),f;try{for(l.s();!(f=l.n()).done;){var d=f.value;if(Zo(d)){var u=dr.reduce(function(h,p){return h.replace(p,"")},d);u!==""&&u!=="*"&&t.add(u)}}}catch(h){l.e(h)}finally{l.f()}return t};function Mn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(z){var t;if(n)t=e;else if(m.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r=new Set,a=Pe(document.styleSheets),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;try{var s=Pe(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var f=l.value,d=Qo(f.selectorText),u=Pe(d),h;try{for(u.s();!(h=u.n()).done;){var p=h.value;r.add(p)}}catch(v){u.e(v)}finally{u.f()}}}catch(v){s.e(v)}finally{s.f()}}catch(v){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){a.e(v)}finally{a.f()}if(!r.size)return;var _=Array.from(r).join(", ");try{t=e.querySelectorAll(_)}catch{}}return new Promise(function(v,x){var w=se(t).filter(Jo).map(Ko),E=jt.begin("searchPseudoElements");zr(),Promise.all(w).then(function(){E(),It(),v()}).catch(function(){E(),It(),x()})})}}var es={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Mn,t}}},provides:function(n){n.pseudoElements2svg=function(t){var r=t.node,a=r===void 0?b:r;m.searchPseudoElements&&Mn(a)}}},zn=!1,ts={mixout:function(){return{dom:{unwatch:function(){zr(),zn=!0}}}},hooks:function(){return{bootstrap:function(){On(xt("mutationObserverCallbacks",{}))},noAuto:function(){Po()},watch:function(t){var r=t.observeMutationsRoot;zn?It():On(xt("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},jn=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},t)},ns={mixout:function(){return{parse:{transform:function(t){return jn(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-transform");return a&&(t.transform=jn(a)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var r=t.main,a=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:h};return{tag:"g",attributes:c({},p.outer),children:[{tag:"g",attributes:c({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:c(c({},r.icon.attributes),p.path)}]}]}}}},ht={x:0,y:0,width:"100%",height:"100%"};function Ln(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function rs(e){return e.tag==="g"?e.children:[e]}var as={hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-mask"),i=a?Ve(a.split(" ").map(function(o){return o.trim()})):Pr();return i.prefix||(i.prefix=W()),t.mask=i,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var r=t.children,a=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,f=i.width,d=i.icon,u=o.width,h=o.icon,p=Gi({transform:l,containerWidth:u,iconWidth:f}),_={tag:"rect",attributes:c(c({},ht),{},{fill:"white"})},v=d.children?{children:d.children.map(Ln)}:{},x={tag:"g",attributes:c({},p.inner),children:[Ln(c({tag:d.tag,attributes:c(c({},d.attributes),p.path)},v))]},w={tag:"g",attributes:c({},p.outer),children:[x]},E="mask-".concat(s||bn()),A="clip-".concat(s||bn()),Q={tag:"mask",attributes:c(c({},ht),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,w]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:rs(h)},Q]};return r.push(R,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(E,")")},ht)}),{children:r,attributes:a}}}},is={provides:function(n){var t=!1;B.matchMedia&&(t=B.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},os={hooks:function(){return{parseNodeAttributes:function(t,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return t.symbol=i,t}}}},ss=[Ki,Bo,Wo,Ho,Uo,es,ts,ns,as,is,os];ho(ss,{mixoutsTo:I});var Xs=I.noAuto,$r=I.config,Ks=I.library,Vr=I.dom,Br=I.parse,Js=I.findIconDefinition,Zs=I.toHtml,Wr=I.icon,Qs=I.layer,ls=I.text,cs=I.counter;var us=["*"],ds=(()=>{class e{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){$r.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(r){return new(r||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ms=(()=>{class e{definitions={};addIcons(...t){for(let r of t){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let a of r.icon[2])typeof a=="string"&&(this.definitions[r.prefix][a]=r)}}addIconPacks(...t){for(let r of t){let a=Object.keys(r).map(i=>r[i]);this.addIcons(...a)}}getIconDefinition(t,r){return t in this.definitions&&r in this.definitions[t]?this.definitions[t][r]:null}static \u0275fac=function(r){return new(r||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),hs=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},ps=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Ur=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),gs=e=>{let n=Ur(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:n,"fa-rotate-by":e.rotate!=null&&!n,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(r=>t[r]?r:null).filter(r=>r!=null)},$t=new WeakSet,Hr="fa-auto-css";function vs(e,n){if(!n.autoAddCss||$t.has(e))return;if(e.getElementById(Hr)!=null){n.autoAddCss=!1,$t.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",Hr),t.innerHTML=Vr.css();let r=e.head.childNodes,a=null;for(let i=r.length-1;i>-1;i--){let o=r[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}e.head.insertBefore(t,a),n.autoAddCss=!1,$t.add(e)}var ys=e=>e.prefix!==void 0&&e.iconName!==void 0,bs=(e,n)=>ys(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:n,iconName:e},_s=(()=>{class e{stackItemSize=S("1x");size=S();_effect=ot(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(r){return new(r||e)};static \u0275dir=we({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return e})(),ws=(()=>{class e{size=S();classes=G(()=>{let t=this.size(),r=t?{[`fa-${t}`]:!0}:{};return Ht(Y({},r),{"fa-stack":!0})});static \u0275fac=function(r){return new(r||e)};static \u0275cmp=j({type:e,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(r,a){r&2&&ke(a.classes())},inputs:{size:[1,"size"]},ngContentSelectors:us,decls:1,vars:0,template:function(r,a){r&1&&(rt(),at(0))},encapsulation:2,changeDetection:0})}return e})(),Yr=(()=>{class e{icon=k();title=k();animation=k();mask=k();flip=k();size=k();pull=k();border=k();inverse=k();symbol=k();rotate=k();fixedWidth=k();transform=k();a11yRole=k();renderedIconHTML=G(()=>{let t=this.icon()??this.config.fallbackIcon;if(!t)return ps(),"";let r=this.findIconDefinition(t);if(!r)return"";let a=this.buildParams();vs(this.document,this.config);let i=Wr(r,a);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=y(te);sanitizer=y(tn);config=y(ds);iconLibrary=y(ms);stackItem=y(_s,{optional:!0});stack=y(ws,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(t){let r=bs(t,this.config.defaultPrefix);if("icon"in r)return r;let a=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return a??(hs(r),null)}buildParams(){let t=this.fixedWidth(),r={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},a=this.transform(),i=typeof a=="string"?Br.transform(a):a,o=this.mask(),s=o!=null?this.findIconDefinition(o):null,l={},f=this.a11yRole();f!=null&&(l.role=f);let d={};return r.rotate!=null&&!Ur(r.rotate)&&(d["--fa-rotate-angle"]=`${r.rotate}`),{title:this.title(),transform:i,classes:gs(r),mask:s??void 0,symbol:this.symbol(),attributes:l,styles:d}}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=j({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,a){r&2&&(Qt("innerHTML",a.renderedIconHTML(),Jt),tt("title",a.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(r,a){},encapsulation:2,changeDetection:0})}return e})();function xs(e,n,t=(r,a)=>r===a){if(e==null)return n==null||!Object.keys(n).length;if(n==null)return!Object.keys(e).length;let r=Object.keys(e),a=Object.keys(n);return r.length===a.length&&r.every(i=>t(e[i],n[i]))}var le=class le{constructor(){this.ref=y(st);this.translate=y(on);this.params$=new ue;this.value="";this.params$.pipe(Xe(([n,t],[r,a])=>n===r&&xs(t,a)),Ke(n=>this.translate.get(...n)),nn()).subscribe(n=>{this.value=n,this.ref.markForCheck()})}transform(n,t){return n==null?"":(this.params$.next([n,t]),this.value)}};le.\u0275fac=function(t){return new(t||le)},le.\u0275pipe=xe({name:"translate",type:le,pure:!1});var We=le;var ce=class ce{transform(n){if(n==null)return"";typeof n=="string"&&(n=an(n)),n instanceof rn&&(n=n.toNumber());let t="";return n>=1e9?(n/=1e9,t="G"):n>=1e6?(n/=1e6,t="M"):n>=1e3&&(n/=1e3,t="k"),n.toLocaleString(void 0,{maximumFractionDigits:2})+t}};ce.\u0275fac=function(t){return new(t||ce)},ce.\u0275pipe=xe({name:"round",type:ce,pure:!0});var He=ce;function Cs(e,n){e&1&&re(0,"lab-icon",1),e&2&&me("value","q"+n)}function ks(e,n){e&1&&(Se(0,"span",2),Ee(1),Ae(2,"round"),Ce()),e&2&&(F(),Ie(De(2,1,n)))}var J=class J{constructor(){this.settingsStore=y(sn);this.value=S.required();this.type=S.required();this.quantity=S();this.icon=G(()=>this.settingsStore.dataset().iconRecord[this.type()][this.value()])}};J.\u0275fac=function(t){return new(t||J)},J.\u0275cmp=j({type:J,selectors:[["lab-icon"]],hostAttrs:[1,"inline-flex","shrink-0","relative","size-8"],inputs:{value:[1,"value"],type:[1,"type"],quantity:[1,"quantity"]},decls:3,vars:6,consts:[[1,"absolute","size-16","origin-top-left","scale-50"],["type","system",3,"value"],[1,"text-shadow-solid","absolute","right-0","bottom-0","text-base/4","font-bold","text-white","text-shadow-black"]],template:function(t,r){if(t&1&&(re(0,"span",0),L(1,Cs,1,1,"lab-icon",1),L(2,ks,3,3,"span",2)),t&2){let a,i;it("background-image",r.icon().file)("background-position",r.icon().position),F(),$((a=r.icon().quality)?1:-1,a),F(),$((i=r.quantity())?2:-1,i)}},dependencies:[J,He],encapsulation:2,changeDetection:0});var Ue=J;function Gr(e){var n,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(n=0;n<a;n++)e[n]&&(t=Gr(e[n]))&&(r&&(r+=" "),r+=t)}else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function qr(){for(var e,n,t=0,r="",a=arguments.length;t<a;t++)(e=arguments[t])&&(n=Gr(e))&&(r&&(r+=" "),r+=n);return r}var Xr=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Kr=qr,Jr=(e,n)=>t=>{var r;if(n?.variants==null)return Kr(e,t?.class,t?.className);let{variants:a,defaultVariants:i}=n,o=Object.keys(a).map(f=>{let d=t?.[f],u=i?.[f];if(d===null)return null;let h=Xr(d)||Xr(u);return a[f][h]}),s=t&&Object.entries(t).reduce((f,d)=>{let[u,h]=d;return h===void 0||(f[u]=h),f},{}),l=n==null||(r=n.compoundVariants)===null||r===void 0?void 0:r.reduce((f,d)=>{let _=d,{class:u,className:h}=_,p=Ut(_,["class","className"]);return Object.entries(p).every(v=>{let[x,w]=v;return Array.isArray(w)?w.includes(Y(Y({},i),s)[x]):Y(Y({},i),s)[x]===w})?[...f,u,h]:f},[]);return Kr(e,o,l,t?.class,t?.className)};var Es=["lab-button",""];function Is(e,n){e&1&&re(0,"fa-icon",0),e&2&&me("icon",n)}function As(e,n){if(e&1&&re(0,"lab-icon",2),e&2){let t=nt();me("type",t)("value",n)}}function Ds(e,n){if(e&1&&L(0,As,1,2,"lab-icon",2),e&2){let t,r=nt();$((t=r.icon())?0:-1,t)}}function Os(e,n){e&1&&(Se(0,"span",1),Ee(1),Ae(2,"translate"),Ce()),e&2&&(F(),Ie(De(2,1,n)))}var Ts=Jr("overflow-hidden items-center gap-1 transition-colors cursor-pointer focus-visible:outline focus:z-2",{variants:{color:{gray:"bg-gray-950 text-gray-50 outline-brand-700 focus-visible:border-brand-700",brand:"bg-brand-950 text-brand-50 outline-gray-300 focus-visible:border-gray-300 z-1"},size:{small:"min-h-8 text-sm font-light opacity-60",standard:"min-h-9",large:"min-h-11 text-2xl font-light"},border:{true:"border"},rounded:{true:"rounded-xs"},hide:{true:"hidden",false:"inline-flex"},iconOnly:{true:"justify-center",false:"px-3"}},compoundVariants:[{color:"gray",border:!0,class:"hover:bg-gray-700 border-gray-700"},{color:"brand",border:!0,class:"hover:bg-brand-700 border-brand-700"},{color:"gray",border:!1,class:"hover:bg-gray-800"},{color:"brand",border:!1,class:"hover:bg-brand-800"},{size:"small",iconOnly:!0,class:"min-w-8"},{size:"standard",iconOnly:!0,class:"min-w-9"},{size:"large",iconOnly:!0,class:"min-w-11"}]}),fe=class fe{constructor(){this.text=S("");this.faIcon=S();this.iconType=S();this.icon=S();this.color=S("gray");this.size=S("standard");this.border=S(!0);this.rounded=S(!0);this.hide=S(!1);this.hostClass=G(()=>Ts({color:this.color(),size:this.size(),border:this.border(),rounded:this.rounded(),hide:this.hide(),iconOnly:!this.text()}))}};fe.\u0275fac=function(t){return new(t||fe)},fe.\u0275cmp=j({type:fe,selectors:[["","lab-button",""],["","labButton",""]],hostVars:2,hostBindings:function(t,r){t&2&&ke(r.hostClass())},inputs:{text:[1,"text"],faIcon:[1,"faIcon"],iconType:[1,"iconType"],icon:[1,"icon"],color:[1,"color"],size:[1,"size"],border:[1,"border"],rounded:[1,"rounded"],hide:[1,"hide"]},exportAs:["labButton"],attrs:Es,decls:3,vars:3,consts:[[3,"icon"],[1,"line-clamp-1","grow","text-center"],[3,"type","value"]],template:function(t,r){if(t&1&&(L(0,Is,1,1,"fa-icon",0),L(1,Ds,1,1),L(2,Os,3,3,"span",1)),t&2){let a,i,o;$((a=r.faIcon())?0:-1,a),F(),$((i=r.iconType())?1:-1,i),F(),$((o=r.text())?2:-1,o)}},dependencies:[Yr,Ue,We],encapsulation:2,changeDetection:0});var Zr=fe;var Vt;try{Vt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Vt=!1}var Bt=(()=>{class e{_platformId=y(Kt);isBrowser=this._platformId?en(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Vt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(r){return new(r||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ps(e,n=0){return Rs(e)?Number(e):arguments.length===2?n:0}function Rs(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function Qr(e){return e instanceof Ze?e.nativeElement:e}var Fs=new de("cdk-dir-doc",{providedIn:"root",factory:Ns});function Ns(){return y(te)}var Ms=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function zs(e){let n=e?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Ms.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Xl=(()=>{class e{get value(){return this.valueSignal()}valueSignal=Je("ltr");change=new Zt;constructor(){let t=y(Fs,{optional:!0});if(t){let r=t.body?t.body.dir:null,a=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(zs(r||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Z;function Jl(){if(Z==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Z=!1,Z;if("scrollBehavior"in document.documentElement.style)Z=!0;else{let e=Element.prototype.scrollTo;e?Z=!/\{\s*\[native code\]\s*\}/.test(e.toString()):Z=!1}}return Z}var Wt=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ne({type:e});static \u0275inj=ee({})}return e})();function tc(e){return e&&typeof e.connect=="function"&&!(e instanceof Gt)}var Ls=function(e){return e[e.REPLACED=0]="REPLACED",e[e.INSERTED=1]="INSERTED",e[e.MOVED=2]="MOVED",e[e.REMOVED=3]="REMOVED",e}(Ls||{}),ac=new de("_ViewRepeater");var $s=20,Kc=(()=>{class e{_ngZone=y(et);_platform=y(Bt);_renderer=y(Qe).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new ue;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let r=this.scrollContainers.get(t);r&&(r.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=$s){return this._platform.isBrowser?new Yt(r=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let a=t>0?this._scrolled.pipe(qe(t)).subscribe(r):this._scrolled.subscribe(r);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):qt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,r)=>this.deregister(r)),this._scrolled.complete()}ancestorScrolled(t,r){let a=this.getAncestorScrollContainers(t);return this.scrolled(r).pipe(Xt(i=>!i||a.indexOf(i)>-1))}getAncestorScrollContainers(t){let r=[];return this.scrollContainers.forEach((a,i)=>{this._scrollableContainsElement(i,t)&&r.push(i)}),r}_scrollableContainsElement(t,r){let a=Qr(r),i=t.getElementRef().nativeElement;do if(a==i)return!0;while(a=a.parentElement);return!1}static \u0275fac=function(r){return new(r||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Vs=20,Jc=(()=>{class e{_platform=y(Bt);_listeners;_viewportSize;_change=new ue;_document=y(te);constructor(){let t=y(et),r=y(Qe).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=i=>this._change.next(i);this._listeners=[r.listen("window","resize",a),r.listen("window","orientationchange",a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:r,height:a}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+a,right:t.left+r,height:a,width:r}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,r=this._getWindow(),a=t.documentElement,i=a.getBoundingClientRect(),o=-i.top||t.body.scrollTop||r.scrollY||a.scrollTop||0,s=-i.left||t.body.scrollLeft||r.scrollX||a.scrollLeft||0;return{top:o,left:s}}change(t=Vs){return t>0?this._change.pipe(qe(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(r){return new(r||e)};static \u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ea=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ne({type:e});static \u0275inj=ee({})}return e})(),Zc=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ne({type:e});static \u0275inj=ee({imports:[Wt,ea,Wt,ea]})}return e})();export{Bt as a,Ps as b,Qr as c,Xl as d,Jl as e,Wt as f,tc as g,Ls as h,ac as i,Kc as j,Jc as k,Zc as l,Yr as m,We as n,Jr as o,Ue as p,Zr as q};
