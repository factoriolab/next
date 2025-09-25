import{k as ct}from"./chunk-S4AUR3LS.js";import{Dc as A,Mb as it,Pa as nt,Pb as ot,Qb as st,_ as ge,ab as ye,ac as lt,cb as at,da as L,ma as tt,ub as rt,uc as be,vc as ft,zc as te}from"./chunk-GAE77MJA.js";import{a as $,b as Ze,d as et}from"./chunk-HZ6M6AS2.js";function Pe(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}function na(e){if(Array.isArray(e))return e}function aa(e){if(Array.isArray(e))return Pe(e)}function ra(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function ut(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,Yt(a.key),a)}}function ia(e,n,t){return n&&ut(e.prototype,n),t&&ut(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function re(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=We(e))||n&&e&&typeof e.length=="number"){t&&(e=t);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(l){throw l},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function v(e,n,t){return(n=Yt(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function oa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sa(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a,r,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(a=i.call(t)).done)&&(s.push(a.value),s.length!==n);l=!0);}catch(d){c=!0,r=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw r}}return s}}function la(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?dt(Object(t),!0).forEach(function(a){v(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):dt(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function ce(e,n){return na(e)||sa(e,n)||We(e,n)||la()}function E(e){return aa(e)||oa(e)||We(e)||fa()}function ca(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function Yt(e){var n=ca(e,"string");return typeof n=="symbol"?n:n+""}function se(e){"@babel/helpers - typeof";return se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},se(e)}function We(e,n){if(e){if(typeof e=="string")return Pe(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Pe(e,n):void 0}}var mt=function(){},He={},Ut={},Bt=null,Vt={mark:mt,measure:mt};try{typeof window<"u"&&(He=window),typeof document<"u"&&(Ut=document),typeof MutationObserver<"u"&&(Bt=MutationObserver),typeof performance<"u"&&(Vt=performance)}catch{}var ua=He.navigator||{},ht=ua.userAgent,pt=ht===void 0?"":ht,D=He,y=Ut,vt=Bt,ne=Vt,xo=!!D.document,j=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Gt=~pt.indexOf("MSIE")||~pt.indexOf("Trident/"),xe,da=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ma=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Xt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},ha={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Kt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],k="classic",Q="duotone",Jt="sharp",qt="sharp-duotone",Qt="chisel",Zt="etch",en="jelly",tn="jelly-duo",nn="jelly-fill",an="notdog",rn="notdog-duo",on="slab",sn="slab-press",ln="thumbprint",fn="whiteboard",pa="Classic",va="Duotone",ga="Sharp",ya="Sharp Duotone",ba="Chisel",xa="Etch",wa="Jelly",ka="Jelly Duo",Aa="Jelly Fill",Sa="Notdog",Ia="Notdog Duo",Ca="Slab",Pa="Slab Press",Ea="Thumbprint",Fa="Whiteboard",cn=[k,Q,Jt,qt,Qt,Zt,en,tn,nn,an,rn,on,sn,ln,fn],wo=(xe={},v(v(v(v(v(v(v(v(v(v(xe,k,pa),Q,va),Jt,ga),qt,ya),Qt,ba),Zt,xa),en,wa),tn,ka),nn,Aa),an,Sa),v(v(v(v(v(xe,rn,Ia),on,Ca),sn,Pa),ln,Ea),fn,Fa)),Oa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Na={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Ta=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),ja={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},un=["fak","fa-kit","fakd","fa-kit-duotone"],gt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ma=["kit"],Da="kit",_a="kit-duotone",za="Kit",$a="Kit Duotone",ko=v(v({},Da,za),_a,$a),La={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ra={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Wa={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},yt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},we,ae={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ha=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],Ya="classic",Ua="duotone",Ba="sharp",Va="sharp-duotone",Ga="chisel",Xa="etch",Ka="jelly",Ja="jelly-duo",qa="jelly-fill",Qa="notdog",Za="notdog-duo",er="slab",tr="slab-press",nr="thumbprint",ar="whiteboard",rr="Classic",ir="Duotone",or="Sharp",sr="Sharp Duotone",lr="Chisel",fr="Etch",cr="Jelly",ur="Jelly Duo",dr="Jelly Fill",mr="Notdog",hr="Notdog Duo",pr="Slab",vr="Slab Press",gr="Thumbprint",yr="Whiteboard",Ao=(we={},v(v(v(v(v(v(v(v(v(v(we,Ya,rr),Ua,ir),Ba,or),Va,sr),Ga,lr),Xa,fr),Ka,cr),Ja,ur),qa,dr),Qa,mr),v(v(v(v(v(we,Za,hr),er,pr),tr,vr),nr,gr),ar,yr)),br="kit",xr="kit-duotone",wr="Kit",kr="Kit Duotone",So=v(v({},br,wr),xr,kr),Ar={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},Sr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Ee={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},Ir=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],dn=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(Ha,Ir),Cr=["solid","regular","light","thin","duotone","brands","semibold"],mn=[1,2,3,4,5,6,7,8,9,10],Pr=mn.concat([11,12,13,14,15,16,17,18,19,20]),Er=["aw","fw","pull-left","pull-right"],Fr=[].concat(E(Object.keys(Sr)),Cr,Er,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ae.GROUP,ae.SWAP_OPACITY,ae.PRIMARY,ae.SECONDARY]).concat(mn.map(function(e){return"".concat(e,"x")})).concat(Pr.map(function(e){return"w-".concat(e)})),Or={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},N="___FONT_AWESOME___",Fe=16,hn="fa",pn="svg-inline--fa",W="data-fa-i2svg",Oe="data-fa-pseudo-element",Nr="data-fa-pseudo-element-pending",Ye="data-prefix",Ue="data-icon",bt="fontawesome-i2svg",Tr="async",jr=["HTML","HEAD","STYLE","SCRIPT"],vn=["::before","::after",":before",":after"],gn=(function(){try{return!0}catch{return!1}})();function Z(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[k]}})}var yn=f({},Xt);yn[k]=f(f(f(f({},{"fa-duotone":"duotone"}),Xt[k]),gt.kit),gt["kit-duotone"]);var Mr=Z(yn),Ne=f({},ja);Ne[k]=f(f(f(f({},{duotone:"fad"}),Ne[k]),yt.kit),yt["kit-duotone"]);var xt=Z(Ne),Te=f({},Ee);Te[k]=f(f({},Te[k]),Wa.kit);var bn=Z(Te),je=f({},Ar);je[k]=f(f({},je[k]),La.kit);var Io=Z(je),Dr=da,xn="fa-layers-text",_r=ma,zr=f({},Oa),Co=Z(zr),$r=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ke=ha,Lr=[].concat(E(Ma),E(Fr)),K=D.FontAwesomeConfig||{};function Rr(e){var n=y.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function Wr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&(wt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],wt.forEach(function(e){var n=ce(e,2),t=n[0],a=n[1],r=Wr(Rr(t));r!=null&&(K[a]=r)}));var wt,wn={styleDefault:"solid",familyDefault:k,cssPrefix:hn,replacementClass:pn,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};K.familyPrefix&&(K.cssPrefix=K.familyPrefix);var V=f(f({},wn),K);V.autoReplaceSvg||(V.observeMutations=!1);var m={};Object.keys(wn).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(t){V[e]=t,J.forEach(function(a){return a(m)})},get:function(){return V[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){V.cssPrefix=n,J.forEach(function(t){return t(m)})},get:function(){return V.cssPrefix}});D.FontAwesomeConfig=m;var J=[];function Hr(e){return J.push(e),function(){J.splice(J.indexOf(e),1)}}var M=Fe,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yr(e){if(!(!e||!j)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=y.head.childNodes,a=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(n,a),e}}var Ur="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function kt(){for(var e=12,n="";e-- >0;)n+=Ur[Math.random()*62|0];return n}function G(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function Be(e){return e.classList?G(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function kn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Br(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(kn(e[t]),'" ')},"").trim()}function ue(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Ve(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function Vr(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Gr(e){var n=e.transform,t=e.width,a=t===void 0?Fe:t,r=e.height,i=r===void 0?Fe:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Gt?l+="translate(".concat(n.x/M-a/2,"em, ").concat(n.y/M-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(n.x/M,"em), calc(-50% + ").concat(n.y/M,"em)) "):l+="translate(".concat(n.x/M,"em, ").concat(n.y/M,"em) "),l+="scale(".concat(n.size/M*(n.flipX?-1:1),", ").concat(n.size/M*(n.flipY?-1:1),") "),l+="rotate(".concat(n.rotate,"deg) "),l}var Xr=`:root, :host {
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
}`;function An(){var e=hn,n=pn,t=m.cssPrefix,a=m.replacementClass,r=Xr;if(t!==e||a!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(a))}return r}var At=!1;function Ae(){m.autoAddCss&&!At&&(Yr(An()),At=!0)}var Kr={mixout:function(){return{dom:{css:An,insertCss:Ae}}},hooks:function(){return{beforeDOMElementCreation:function(){Ae()},beforeI2svg:function(){Ae()}}}},T=D||{};T[N]||(T[N]={});T[N].styles||(T[N].styles={});T[N].hooks||(T[N].hooks={});T[N].shims||(T[N].shims=[]);var P=T[N],Sn=[],In=function(){y.removeEventListener("DOMContentLoaded",In),le=1,Sn.map(function(n){return n()})},le=!1;j&&(le=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),le||y.addEventListener("DOMContentLoaded",In));function Jr(e){j&&(le?setTimeout(e,0):Sn.push(e))}function ee(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?kn(e):"<".concat(n," ").concat(Br(a),">").concat(i.map(ee).join(""),"</").concat(n,">")}function St(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var qr=function(n,t){return function(a,r,i,o){return n.call(t,a,r,i,o)}},Se=function(n,t,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?qr(t,r):t,l,c,d;for(a===void 0?(l=1,d=n[i[0]]):(l=0,d=a);l<o;l++)c=i[l],d=s(d,n[c],c,n);return d};function Cn(e){return E(e).length!==1?null:e.codePointAt(0).toString(16)}function It(e){return Object.keys(e).reduce(function(n,t){var a=e[t],r=!!a.icon;return r?n[a.iconName]=a.icon:n[t]=a,n},{})}function Pn(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,r=a===void 0?!1:a,i=It(n);typeof P.hooks.addPack=="function"&&!r?P.hooks.addPack(e,It(n)):P.styles[e]=f(f({},P.styles[e]||{}),i),e==="fas"&&Pn("fa",n)}var q=P.styles,Qr=P.shims,En=Object.keys(bn),Zr=En.reduce(function(e,n){return e[n]=Object.keys(bn[n]),e},{}),Ge=null,Fn={},On={},Nn={},Tn={},jn={};function ei(e){return~Lr.indexOf(e)}function ti(e,n){var t=n.split("-"),a=t[0],r=t.slice(1).join("-");return a===e&&r!==""&&!ei(r)?r:null}var Mn=function(){var n=function(i){return Se(q,function(o,s,l){return o[l]=Se(s,i,{}),o},{})};Fn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),On=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),jn=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var t="far"in q||m.autoFetchSvg,a=Se(Qr,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Nn=a.names,Tn=a.unicodes,Ge=de(m.styleDefault,{family:m.familyDefault})};Hr(function(e){Ge=de(e.styleDefault,{family:m.familyDefault})});Mn();function Xe(e,n){return(Fn[e]||{})[n]}function ni(e,n){return(On[e]||{})[n]}function R(e,n){return(jn[e]||{})[n]}function Dn(e){return Nn[e]||{prefix:null,iconName:null}}function ai(e){var n=Tn[e],t=Xe("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function _(){return Ge}var _n=function(){return{prefix:null,iconName:null,rest:[]}};function ri(e){var n=k,t=En.reduce(function(a,r){return a[r]="".concat(m.cssPrefix,"-").concat(r),a},{});return cn.forEach(function(a){(e.includes(t[a])||e.some(function(r){return Zr[a].includes(r)}))&&(n=a)}),n}function de(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?k:t,r=Mr[a][e];if(a===Q&&!e)return"fad";var i=xt[a][e]||xt[a][r],o=e in P.styles?e:null,s=i||o||null;return s}function ii(e){var n=[],t=null;return e.forEach(function(a){var r=ti(m.cssPrefix,a);r?t=r:a&&n.push(a)}),{iconName:t,rest:n}}function Ct(e){return e.sort().filter(function(n,t,a){return a.indexOf(n)===t})}var Pt=dn.concat(un);function me(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.skipLookups,a=t===void 0?!1:t,r=null,i=Ct(e.filter(function(p){return Pt.includes(p)})),o=Ct(e.filter(function(p){return!Pt.includes(p)})),s=i.filter(function(p){return r=p,!Kt.includes(p)}),l=ce(s,1),c=l[0],d=c===void 0?null:c,u=ri(i),h=f(f({},ii(o)),{},{prefix:de(d,{family:u})});return f(f(f({},h),fi({values:e,family:u,styles:q,config:m,canonical:h,givenPrefix:r})),oi(a,r,h))}function oi(e,n,t){var a=t.prefix,r=t.iconName;if(e||!a||!r)return{prefix:a,iconName:r};var i=n==="fa"?Dn(r):{},o=R(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!q.far&&q.fas&&!m.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}var si=cn.filter(function(e){return e!==k||e!==Q}),li=Object.keys(Ee).filter(function(e){return e!==k}).map(function(e){return Object.keys(Ee[e])}).flat();function fi(e){var n=e.values,t=e.family,a=e.canonical,r=e.givenPrefix,i=r===void 0?"":r,o=e.styles,s=o===void 0?{}:o,l=e.config,c=l===void 0?{}:l,d=t===Q,u=n.includes("fa-duotone")||n.includes("fad"),h=c.familyDefault==="duotone",p=a.prefix==="fad"||a.prefix==="fa-duotone";if(!d&&(u||h||p)&&(a.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),!a.prefix&&si.includes(t)){var b=Object.keys(s).find(function(w){return li.includes(w)});if(b||c.autoFetchSvg){var g=Ta.get(t).defaultShortPrefixId;a.prefix=g,a.iconName=R(a.prefix,a.iconName)||a.iconName}}return(a.prefix==="fa"||i==="fa")&&(a.prefix=_()||"fas"),a}var ci=(function(){function e(){ra(this,e),this.definitions={}}return ia(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Pn(s,o[s]),Mn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];t[s]||(t[s]={}),d.length>0&&d.forEach(function(u){typeof u=="string"&&(t[s][u]=c)}),t[s][l]=c}),t}}])})(),Et=[],U={},B={},ui=Object.keys(B);function di(e,n){var t=n.mixoutsTo;return Et=e,U={},Object.keys(B).forEach(function(a){ui.indexOf(a)===-1&&delete B[a]}),Et.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),se(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){U[o]||(U[o]=[]),U[o].push(i[o])})}a.provides&&a.provides(B)}),t}function Me(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),r=2;r<t;r++)a[r-2]=arguments[r];var i=U[e]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function H(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var r=U[e]||[];r.forEach(function(i){i.apply(null,t)})}function z(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return B[e]?B[e].apply(null,n):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||_();if(n)return n=R(t,n)||n,St(zn.definitions,t,n)||St(P.styles,t,n)}var zn=new ci,mi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,H("noAuto")},hi={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(H("beforeI2svg",n),z("pseudoElements2svg",n),z("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Jr(function(){vi({autoReplaceSvgRoot:t}),H("watch",n)})}},pi={icon:function(n){if(n===null)return null;if(se(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:R(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=de(n[0]);return{prefix:a,iconName:R(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Dr))){var r=me(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||_(),iconName:R(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=_();return{prefix:i,iconName:R(i,n)||n}}}},I={noAuto:mi,config:m,dom:hi,parse:pi,library:zn,findIconDefinition:De,toHtml:ee},vi=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?y:t;(Object.keys(P.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&I.dom.i2svg({node:a})};function he(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ee(a)})}}),Object.defineProperty(e,"node",{get:function(){if(j){var a=y.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function gi(e){var n=e.children,t=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(Ve(o)&&t.found&&!a.found){var s=t.width,l=t.height,c={x:s/l/2,y:.5};r.style=ue(f(f({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function yi(e){var n=e.prefix,t=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:o}),children:a}]}]}function bi(e){var n=["aria-label","aria-labelledby","title","role"];return n.some(function(t){return t in e})}function Ke(e){var n=e.icons,t=n.main,a=n.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,u=d===void 0?!1:d,h=a.found?a:t,p=h.width,b=h.height,g=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(O){return c.classes.indexOf(O)===-1}).filter(function(O){return O!==""||!!O}).concat(c.classes).join(" "),w={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(b)})};!bi(c.attributes)&&!c.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),u&&(w.attributes[W]="");var x=f(f({},w),{},{prefix:r,iconName:i,main:t,mask:a,maskId:l,transform:o,symbol:s,styles:f({},c.styles)}),S=a.found&&t.found?z("generateAbstractMask",x)||{children:[],attributes:{}}:z("generateAbstractIcon",x)||{children:[],attributes:{}},C=S.children,Y=S.attributes;return x.children=C,x.attributes=Y,s?yi(x):gi(x)}function Ft(e){var n=e.content,t=e.width,a=e.height,r=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[W]="");var c=f({},i.styles);Ve(r)&&(c.transform=Gr({transform:r,startCentered:!0,width:t,height:a}),c["-webkit-transform"]=c.transform);var d=ue(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[n]}),u}function xi(e){var n=e.content,t=e.extra,a=f(f({},t.attributes),{},{class:t.classes.join(" ")}),r=ue(t.styles);r.length>0&&(a.style=r);var i=[];return i.push({tag:"span",attributes:a,children:[n]}),i}var Ie=P.styles;function _e(e){var n=e[0],t=e[1],a=e.slice(4),r=ce(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ke.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var wi={found:!1,width:512,height:512};function ki(e,n){!gn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function ze(e,n){var t=n;return n==="fa"&&m.styleDefault!==null&&(n=_()),new Promise(function(a,r){if(t==="fa"){var i=Dn(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&Ie[n]&&Ie[n][e]){var o=Ie[n][e];return a(_e(o))}ki(e,n),a(f(f({},wi),{},{icon:m.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var Ot=function(){},$e=m.measurePerformance&&ne&&ne.mark&&ne.measure?ne:{mark:Ot,measure:Ot},X='FA "7.0.0"',Ai=function(n){return $e.mark("".concat(X," ").concat(n," begins")),function(){return $n(n)}},$n=function(n){$e.mark("".concat(X," ").concat(n," ends")),$e.measure("".concat(X," ").concat(n),"".concat(X," ").concat(n," begins"),"".concat(X," ").concat(n," ends"))},Je={begin:Ai,end:$n},ie=function(){};function Nt(e){var n=e.getAttribute?e.getAttribute(W):null;return typeof n=="string"}function Si(e){var n=e.getAttribute?e.getAttribute(Ye):null,t=e.getAttribute?e.getAttribute(Ue):null;return n&&t}function Ii(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Ci(){if(m.autoReplaceSvg===!0)return oe.replace;var e=oe[m.autoReplaceSvg];return e||oe.replace}function Pi(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function Ei(e){return y.createElement(e)}function Ln(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?Pi:Ei:t;if(typeof e=="string")return y.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Ln(o,{ceFn:a}))}),r}function Fi(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var oe={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(Ln(r),t)}),t.getAttribute(W)===null&&m.keepOriginalSource){var a=y.createComment(Fi(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~Be(t).indexOf(m.replacementClass))return oe.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ee(s)}).join(`
`);t.setAttribute(W,""),t.innerHTML=o}};function Tt(e){e()}function Rn(e,n){var t=typeof n=="function"?n:ie;if(e.length===0)t();else{var a=Tt;m.mutateApproach===Tr&&(a=D.requestAnimationFrame||Tt),a(function(){var r=Ci(),i=Je.begin("mutate");e.map(r),i(),t()})}}var qe=!1;function Wn(){qe=!0}function Le(){qe=!1}var fe=null;function jt(e){if(vt&&m.observeMutations){var n=e.treeCallback,t=n===void 0?ie:n,a=e.nodeCallback,r=a===void 0?ie:a,i=e.pseudoElementsCallback,o=i===void 0?ie:i,s=e.observeMutationsRoot,l=s===void 0?y:s;fe=new vt(function(c){if(!qe){var d=_();G(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!Nt(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o([u.target],!0),u.type==="attributes"&&Nt(u.target)&&~$r.indexOf(u.attributeName))if(u.attributeName==="class"&&Si(u.target)){var h=me(Be(u.target)),p=h.prefix,b=h.iconName;u.target.setAttribute(Ye,p||d),b&&u.target.setAttribute(Ue,b)}else Ii(u.target)&&r(u.target)})}}),j&&fe.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Oi(){fe&&fe.disconnect()}function Ni(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),t}function Ti(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=me(Be(e));return r.prefix||(r.prefix=_()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ni(r.prefix,e.innerText)||Xe(r.prefix,Cn(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ji(e){var n=G(e.attributes).reduce(function(t,a){return t.name!=="class"&&t.name!=="style"&&(t[a.name]=a.value),t},{});return n}function Mi(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Mt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ti(e),a=t.iconName,r=t.prefix,i=t.rest,o=ji(e),s=Me("parseNodeAttributes",{},e),l=n.styleParser?Ni(e):[];return f({iconName:a,prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Di=P.styles;function Hn(e){var n=m.autoReplaceSvg==="nest"?Mt(e,{styleParser:!1}):Mt(e);return~n.extra.classes.indexOf(xn)?z("generateLayersText",e,n):z("generateSvgReplacementMutation",e,n)}function _i(){return[].concat(E(un),E(dn))}function Dt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var t=y.documentElement.classList,a=function(u){return t.add("".concat(bt,"-").concat(u))},r=function(u){return t.remove("".concat(bt,"-").concat(u))},i=m.autoFetchSvg?_i():Kt.concat(Object.keys(Di));i.includes("fa")||i.push("fa");var o=[".".concat(xn,":not([").concat(W,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(W,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=G(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=Je.begin("onTree"),c=s.reduce(function(d,u){try{var h=Hn(u);h&&d.push(h)}catch(p){gn||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,u){Promise.all(c).then(function(h){Rn(h,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),l(),d()})}).catch(function(h){l(),u(h)})})}function zi(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hn(e).then(function(t){t&&Rn([t],n)})}function $i(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:De(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:De(r||{})),e(a,f(f({},t),{},{mask:r}))}}var Li=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,r=a===void 0?F:a,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,c=t.maskId,d=c===void 0?null:c,u=t.classes,h=u===void 0?[]:u,p=t.attributes,b=p===void 0?{}:p,g=t.styles,w=g===void 0?{}:g;if(n){var x=n.prefix,S=n.iconName,C=n.icon;return he(f({type:"icon"},n),function(){return H("beforeDOMElementCreation",{iconDefinition:n,params:t}),Ke({icons:{main:_e(C),mask:l?_e(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:S,transform:f(f({},F),r),symbol:o,maskId:d,extra:{attributes:b,styles:w,classes:h}})})}},Ri={mixout:function(){return{icon:$i(Li)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Dt,t.nodeCallback=zi,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,r=a===void 0?y:a,i=t.callback,o=i===void 0?function(){}:i;return Dt(r,o)},n.generateSvgReplacementMutation=function(t,a){var r=a.iconName,i=a.prefix,o=a.transform,s=a.symbol,l=a.mask,c=a.maskId,d=a.extra;return new Promise(function(u,h){Promise.all([ze(r,i),l.iconName?ze(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var b=ce(p,2),g=b[0],w=b[1];u([t,Ke({icons:{main:g,mask:w},prefix:i,iconName:r,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(h)})},n.generateAbstractIcon=function(t){var a=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,l=ue(s);l.length>0&&(r.style=l);var c;return Ve(o)&&(c=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Wi={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return he({type:"layer"},function(){H("beforeDOMElementCreation",{assembler:t,params:a});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(E(i)).join(" ")},children:o}]})}}}},Hi={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,d=a.styles,u=d===void 0?{}:d;return he({type:"counter",content:t},function(){return H("beforeDOMElementCreation",{content:t,params:a}),xi({content:t.toString(),title:i,extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(E(s))}})})}}}},Yi={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?F:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,d=a.styles,u=d===void 0?{}:d;return he({type:"text",content:t},function(){return H("beforeDOMElementCreation",{content:t,params:a}),Ft({content:t,transform:f(f({},F),i),extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-text")].concat(E(s))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var r=a.transform,i=a.extra,o=null,s=null;if(Gt){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([t,Ft({content:t.innerHTML,width:o,height:s,transform:r,extra:i,watchable:!0})])}}},Yn=new RegExp('"',"ug"),_t=[1105920,1112319],zt=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Na),Or),Ra),Re=Object.keys(zt).reduce(function(e,n){return e[n.toLowerCase()]=zt[n],e},{}),Ui=Object.keys(Re).reduce(function(e,n){var t=Re[n];return e[n]=t[900]||E(Object.entries(t))[0][1],e},{});function Bi(e){var n=e.replace(Yn,"");return Cn(E(n)[0]||"")}function Vi(e){var n=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),a=t.replace(Yn,""),r=a.codePointAt(0),i=r>=_t[0]&&r<=_t[1],o=a.length===2?a[0]===a[1]:!1;return i||o||n}function Gi(e,n){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),r=isNaN(a)?"normal":a;return(Re[t]||{})[r]||Ui[t]}function $t(e,n){var t="".concat(Nr).concat(n.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(t)!==null)return a();var i=G(e.children),o=i.filter(function(pe){return pe.getAttribute(Oe)===n})[0],s=D.getComputedStyle(e,n),l=s.getPropertyValue("font-family"),c=l.match(_r),d=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),a();if(c&&u!=="none"&&u!==""){var h=s.getPropertyValue("content"),p=Gi(l,d),b=Bi(h),g=c[0].startsWith("FontAwesome"),w=Vi(s),x=Xe(p,b),S=x;if(g){var C=ai(b);C.iconName&&C.prefix&&(x=C.iconName,p=C.prefix)}if(x&&!w&&(!o||o.getAttribute(Ye)!==p||o.getAttribute(Ue)!==S)){e.setAttribute(t,S),o&&e.removeChild(o);var Y=Mi(),O=Y.extra;O.attributes[Oe]=n,ze(x,p).then(function(pe){var ea=Ke(f(f({},Y),{},{icons:{main:pe,mask:_n()},prefix:p,iconName:S,extra:O,watchable:!0})),ve=y.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=ea.map(function(ta){return ee(ta)}).join(`
`),e.removeAttribute(t),a()}).catch(r)}else a()}else a()})}function Xi(e){return Promise.all([$t(e,"::before"),$t(e,"::after")])}function Ki(e){return e.parentNode!==document.head&&!~jr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Oe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Ji=function(n){return!!n&&vn.some(function(t){return n.includes(t)})},qi=function(n){if(!n)return[];for(var t=new Set,a=[n],r=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var p=s[o];a=a.flatMap(function(b){return b.split(p).map(function(g){return g.replace(/,\s*$/,"").trim()})})},o=0,s=r;o<s.length;o++)i();a=a.flatMap(function(h){return h.includes("(")?h:h.split(",").map(function(p){return p.trim()})});var l=re(a),c;try{for(l.s();!(c=l.n()).done;){var d=c.value;if(Ji(d)){var u=vn.reduce(function(h,p){return h.replace(p,"")},d);u!==""&&u!=="*"&&t.add(u)}}}catch(h){l.e(h)}finally{l.f()}return t};function Lt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(j){var t;if(n)t=e;else if(m.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var a=new Set,r=re(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;try{var s=re(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,d=qi(c.selectorText),u=re(d),h;try{for(u.s();!(h=u.n()).done;){var p=h.value;a.add(p)}}catch(g){u.e(g)}finally{u.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){r.e(g)}finally{r.f()}if(!a.size)return;var b=Array.from(a).join(", ");try{t=e.querySelectorAll(b)}catch{}}return new Promise(function(g,w){var x=G(t).filter(Ki).map(Xi),S=Je.begin("searchPseudoElements");Wn(),Promise.all(x).then(function(){S(),Le(),g()}).catch(function(){S(),Le(),w()})})}}var Qi={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Lt,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,r=a===void 0?y:a;m.searchPseudoElements&&Lt(r)}}},Rt=!1,Zi={mixout:function(){return{dom:{unwatch:function(){Wn(),Rt=!0}}}},hooks:function(){return{bootstrap:function(){jt(Me("mutationObserverCallbacks",{}))},noAuto:function(){Oi()},watch:function(t){var a=t.observeMutationsRoot;Rt?Le():jt(Me("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Wt=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},t)},eo={mixout:function(){return{parse:{transform:function(t){return Wt(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-transform");return r&&(t.transform=Wt(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),d="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(d)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:h};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:f(f({},a.icon.attributes),p.path)}]}]}}}},Ce={x:0,y:0,width:"100%",height:"100%"};function Ht(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function to(e){return e.tag==="g"?e.children:[e]}var no={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-mask"),i=r?me(r.split(" ").map(function(o){return o.trim()})):_n();return i.prefix||(i.prefix=_()),t.mask=i,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,c=i.width,d=i.icon,u=o.width,h=o.icon,p=Vr({transform:l,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:f(f({},Ce),{},{fill:"white"})},g=d.children?{children:d.children.map(Ht)}:{},w={tag:"g",attributes:f({},p.inner),children:[Ht(f({tag:d.tag,attributes:f(f({},d.attributes),p.path)},g))]},x={tag:"g",attributes:f({},p.outer),children:[w]},S="mask-".concat(s||kt()),C="clip-".concat(s||kt()),Y={tag:"mask",attributes:f(f({},Ce),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:to(h)},Y]};return a.push(O,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(S,")")},Ce)}),{children:a,attributes:r}}}},ao={provides:function(n){var t=!1;D.matchMedia&&(t=D.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ro={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},io=[Kr,Ri,Wi,Hi,Yi,Qi,Zi,eo,no,ao,ro];di(io,{mixoutsTo:I});var Po=I.noAuto,Un=I.config,Eo=I.library,Bn=I.dom,Vn=I.parse,Fo=I.findIconDefinition,Oo=I.toHtml,Gn=I.icon,No=I.layer,oo=I.text,so=I.counter;var lo=["*"],fo=(()=>{class e{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(t){Un.autoAddCss=t,this._autoAddCss=t}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(a){return new(a||e)};static \u0275prov=ge({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),co=(()=>{class e{definitions={};addIcons(...t){for(let a of t){a.prefix in this.definitions||(this.definitions[a.prefix]={}),this.definitions[a.prefix][a.iconName]=a;for(let r of a.icon[2])typeof r=="string"&&(this.definitions[a.prefix][r]=a)}}addIconPacks(...t){for(let a of t){let r=Object.keys(a).map(i=>a[i]);this.addIcons(...r)}}getIconDefinition(t,a){return t in this.definitions&&a in this.definitions[t]?this.definitions[t][a]:null}static \u0275fac=function(a){return new(a||e)};static \u0275prov=ge({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),uo=e=>{throw new Error(`Could not find icon with iconName=${e.iconName} and prefix=${e.prefix} in the icon library.`)},mo=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Kn=e=>e!=null&&(e===90||e===180||e===270||e==="90"||e==="180"||e==="270"),ho=e=>{let n=Kn(e.rotate),t={[`fa-${e.animation}`]:e.animation!=null&&!e.animation.startsWith("spin"),"fa-spin":e.animation==="spin"||e.animation==="spin-reverse","fa-spin-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-spin-reverse":e.animation==="spin-reverse"||e.animation==="spin-pulse-reverse","fa-pulse":e.animation==="spin-pulse"||e.animation==="spin-pulse-reverse","fa-fw":e.fixedWidth,"fa-border":e.border,"fa-inverse":e.inverse,"fa-layers-counter":e.counter,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both",[`fa-${e.size}`]:e.size!==null,[`fa-rotate-${e.rotate}`]:n,"fa-rotate-by":e.rotate!=null&&!n,[`fa-pull-${e.pull}`]:e.pull!==null,[`fa-stack-${e.stackItemSize}`]:e.stackItemSize!=null};return Object.keys(t).map(a=>t[a]?a:null).filter(a=>a!=null)},Qe=new WeakSet,Xn="fa-auto-css";function po(e,n){if(!n.autoAddCss||Qe.has(e))return;if(e.getElementById(Xn)!=null){n.autoAddCss=!1,Qe.add(e);return}let t=e.createElement("style");t.setAttribute("type","text/css"),t.setAttribute("id",Xn),t.innerHTML=Bn.css();let a=e.head.childNodes,r=null;for(let i=a.length-1;i>-1;i--){let o=a[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}e.head.insertBefore(t,r),n.autoAddCss=!1,Qe.add(e)}var vo=e=>e.prefix!==void 0&&e.iconName!==void 0,go=(e,n)=>vo(e)?e:Array.isArray(e)&&e.length===2?{prefix:e[0],iconName:e[1]}:{prefix:n,iconName:e},yo=(()=>{class e{stackItemSize=te("1x");size=te();_effect=ft(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(a){return new(a||e)};static \u0275dir=at({type:e,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return e})(),bo=(()=>{class e{size=te();classes=be(()=>{let t=this.size(),a=t?{[`fa-${t}`]:!0}:{};return Ze($({},a),{"fa-stack":!0})});static \u0275fac=function(a){return new(a||e)};static \u0275cmp=ye({type:e,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(a,r){a&2&&lt(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:lo,decls:1,vars:0,template:function(a,r){a&1&&(ot(),st(0))},encapsulation:2,changeDetection:0})}return e})(),Vo=(()=>{class e{icon=A();title=A();animation=A();mask=A();flip=A();size=A();pull=A();border=A();inverse=A();symbol=A();rotate=A();fixedWidth=A();transform=A();a11yRole=A();renderedIconHTML=be(()=>{let t=this.icon()??this.config.fallbackIcon;if(!t)return mo(),"";let a=this.findIconDefinition(t);if(!a)return"";let r=this.buildParams();po(this.document,this.config);let i=Gn(a,r);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=L(tt);sanitizer=L(ct);config=L(fo);iconLibrary=L(co);stackItem=L(yo,{optional:!0});stack=L(bo,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(t){let a=go(t,this.config.defaultPrefix);if("icon"in a)return a;let r=this.iconLibrary.getIconDefinition(a.prefix,a.iconName);return r??(uo(a),null)}buildParams(){let t=this.fixedWidth(),a={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof t=="boolean"?t:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),i=typeof r=="string"?Vn.transform(r):r,o=this.mask(),s=o!=null?this.findIconDefinition(o):null,l={},c=this.a11yRole();c!=null&&(l.role=c);let d={};return a.rotate!=null&&!Kn(a.rotate)&&(d["--fa-rotate-angle"]=`${a.rotate}`),{title:this.title(),transform:i,classes:ho(a),mask:s??void 0,symbol:this.symbol(),attributes:l,styles:d}}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=ye({type:e,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(a,r){a&2&&(it("innerHTML",r.renderedIconHTML(),nt),rt("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(a,r){},encapsulation:2,changeDetection:0})}return e})();function Jn(e){var n,t,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(n=0;n<r;n++)e[n]&&(t=Jn(e[n]))&&(a&&(a+=" "),a+=t)}else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function qn(){for(var e,n,t=0,a="",r=arguments.length;t<r;t++)(e=arguments[t])&&(n=Jn(e))&&(a&&(a+=" "),a+=n);return a}var Qn=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Zn=qn,qo=(e,n)=>t=>{var a;if(n?.variants==null)return Zn(e,t?.class,t?.className);let{variants:r,defaultVariants:i}=n,o=Object.keys(r).map(c=>{let d=t?.[c],u=i?.[c];if(d===null)return null;let h=Qn(d)||Qn(u);return r[c][h]}),s=t&&Object.entries(t).reduce((c,d)=>{let[u,h]=d;return h===void 0||(c[u]=h),c},{}),l=n==null||(a=n.compoundVariants)===null||a===void 0?void 0:a.reduce((c,d)=>{let b=d,{class:u,className:h}=b,p=et(b,["class","className"]);return Object.entries(p).every(g=>{let[w,x]=g;return Array.isArray(x)?x.includes($($({},i),s)[w]):$($({},i),s)[w]===x})?[...c,u,h]:c},[]);return Zn(e,o,l,t?.class,t?.className)};export{Vo as a,qo as b};
