(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[671],{4852:function(e){"use strict";e.exports=Object.assign},4765:function(e,t,n){"use strict";n.d(t,{F:function(){return m},Z:function(){return f}});var r=n(7294),a=n(8733),o=n(795),i=n(8377),l=n(6799),c=n(8871);var u=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(o.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(l.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(u,{post:t}))};const m=e=>{var t,n,r;let{data:{post:o}}=e;return(0,a.tZ)(c.Z,{title:o.title,description:o.description?o.description:o.excerpt,image:o.banner?null===(t=o.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:o.slug,canonicalUrl:o.canonicalUrl})};function f(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){"use strict";var r=n(8733),a=n(7294),o=n(1883),i=n(3494),l=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(o.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,l.Z)(`/${c}/${n}/${e.slug}`)},e.name)))))}},8871:function(e,t,n){"use strict";var r=n(7294),a=n(1883),o=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:l="",children:c=null,canonicalUrl:u=""}=e;const s=(0,o.Z)(),{siteTitle:p,siteTitleAlt:m,siteUrl:f,siteDescription:d,siteImage:h,author:y,siteLanguage:g}=s,b={title:t?`${t} | ${p}`:m,description:n||d,url:`${f}${i||""}`,image:`${f}${l||h}`};return r.createElement(r.Fragment,null,r.createElement("html",{lang:g}),r.createElement("title",null,b.title),r.createElement("meta",{name:"description",content:b.description}),r.createElement("meta",{name:"image",content:b.image}),r.createElement("meta",{property:"og:title",content:b.title}),r.createElement("meta",{property:"og:url",content:b.url}),r.createElement("meta",{property:"og:description",content:b.description}),r.createElement("meta",{property:"og:image",content:b.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:b.title}),r.createElement("meta",{name:"twitter:url",content:b.url}),r.createElement("meta",{name:"twitter:description",content:b.description}),r.createElement("meta",{name:"twitter:image",content:b.image}),r.createElement("meta",{name:"twitter:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:creator",content:y}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),u?r.createElement("link",{rel:"canonical",href:u}):null,c)}},8363:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return we.F},default:function(){return ve}});var r=n(7294),a=n(1151);const o={normal:{width:"100%",height:"352px"},compact:{width:"100%",height:"152px"}};var i,l,c,u,s=function(e){let{albumUri:t="64LU4c1nfjz1t4VnGhagcg",size:n="normal"}=e;return r.createElement("iframe",{title:"Spotify",style:{borderRadius:"12px"},src:`https://open.spotify.com/embed/album/${t}?theme=0`,width:o[n].width,height:o[n].height,frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy"})},p=n(5697),m=n.n(p),f=n(3524),d=n.n(f),h=n(9590),y=n.n(h),g=n(4852),b=n.n(g),E="bodyAttributes",w="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(T).map((function(e){return T[e]})),"charset"),A="cssText",C="href",S="http-equiv",x="innerHTML",j="itemprop",k="name",P="property",L="rel",I="src",R="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",Z="defer",F="encodeSpecialCharacters",_="onChangeClientState",z="titleTemplate",D=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),U=[T.NOSCRIPT,T.SCRIPT,T.STYLE],$="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},G=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=J(e,T.TITLE),n=J(e,z);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,N);return t||r||void 0},X=function(e){return J(e,_)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],c=l.toLowerCase();-1===t.indexOf(c)||n===L&&"canonical"===e[n].toLowerCase()||c===L&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==x&&l!==A&&l!==j||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],c=b()({},r[l],a[l]);r[l]=c}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(i=Date.now(),function(e){var t=Date.now();t-i>16?(i=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,p=e.title,m=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,a),ce(p,m);var f={baseTag:se(T.BASE,n),linkTags:se(T.LINK,o),metaTags:se(T.META,i),noscriptTags:se(T.NOSCRIPT,l),scriptTags:se(T.SCRIPT,u),styleTags:se(T.STYLE,s)},d={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),c(e,d,h)},le=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute($),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var c=i[l],u=t[c]||"";n.getAttribute(c)!==u&&n.setAttribute(c,u),-1===a.indexOf(c)&&a.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute($):n.getAttribute($)!==i.join(",")&&n.setAttribute($,i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+$+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===x)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute($,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},pe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[$]=!0,o=me(n,a),[r.createElement(T.TITLE,o,e)];var e,n,a,o},toString:function(){return function(e,t,n,r){var a=pe(n),o=le(t);return a?"<"+e+" "+$+'="true" '+a+">"+G(o,r)+"</"+e+">":"<"+e+" "+$+'="true">'+G(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case E:case w:return{toComponent:function(){return me(t)},toString:function(){return pe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,o=((a={key:n})[$]=!0,a);return Object.keys(t).forEach((function(e){var n=M[e]||e;if(n===x||n===A){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),r.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===x||e===A)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===U.indexOf(e);return t+"<"+e+" "+$+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,c=e.scriptTags,u=e.styleTags,s=e.title,p=void 0===s?"":s,m=e.titleAttributes;return{base:fe(T.BASE,t,r),bodyAttributes:fe(E,n,r),htmlAttributes:fe(w,a,r),link:fe(T.LINK,o,r),meta:fe(T.META,i,r),noscript:fe(T.NOSCRIPT,l,r),script:fe(T.SCRIPT,c,r),style:fe(T.STYLE,u,r),title:fe(T.TITLE,{title:p,titleAttributes:m},r)}},he=d()((function(e){return{baseTag:W([C,R],e),bodyAttributes:K(E,e),defer:J(e,Z),encode:J(e,F),htmlAttributes:K(w,e),linkTags:Q(T.LINK,[L,C],e),metaTags:Q(T.META,[k,O,S,P,j],e),noscriptTags:Q(T.NOSCRIPT,[x],e),onChangeClientState:X(e),scriptTags:Q(T.SCRIPT,[I,x],e),styleTags:Q(T.STYLE,[A],e),title:V(e),titleAttributes:K(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=ne((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),ye=(l=he,u=c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!y()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return Y({},a,((t={})[r.type]=i,t.titleAttributes=Y({},o),t));case T.BODY:return Y({},a,{bodyAttributes:Y({},o)});case T.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,o=r.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(q(r,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=q(e,["children"]),a=Y({},n);return t&&(a=this.mapChildrenToProps(t,a)),r.createElement(l,a)},H(t,null,[{key:"canUseDOM",set:function(e){l.canUseDOM=e}}]),t}(r.Component),c.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=l.peek,c.rewind=function(){var e=l.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},u);ye.renderStatic=ye.rewind;var ge=()=>((0,r.useEffect)((()=>{window&&window.iframely&&window.iframely.load()}),[]),r.createElement(ye,null,r.createElement("script",{type:"text/javascript",src:"https://cdn.iframe.ly/embed.js"})));function be(e){const t=Object.assign({p:"p",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre",code:"code",h4:"h4",a:"a",hr:"hr"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(ge),"\n",r.createElement(t.p,null,"Gatzby始めたばかりでまだどういうスタイルの投稿ができるかなどよくわかっていないので、色々なスタイルの投稿を試していく"),"\n",r.createElement(t.h3,null,"テーブル"),"\n",r.createElement(t.p,null,"通常のmarkdownでできることは当然ながらできる"),"\n",r.createElement(t.table,null,r.createElement(t.thead,null,r.createElement(t.tr,null,r.createElement(t.th,null,"Wrestler"),r.createElement(t.th,null,"Origin"),r.createElement(t.th,null,"Finisher"))),r.createElement(t.tbody,null,r.createElement(t.tr,null,r.createElement(t.td,null,'Bret "The Hitman" Hart'),r.createElement(t.td,null,"Calgary, AB"),r.createElement(t.td,null,"Sharpshooter")),r.createElement(t.tr,null,r.createElement(t.td,null,"Stone Cold Steve Austin"),r.createElement(t.td,null,"Austin, TX"),r.createElement(t.td,null,"Stone Cold Stunner")),r.createElement(t.tr,null,r.createElement(t.td,null,"Randy Savage"),r.createElement(t.td,null,"Sarasota, FL"),r.createElement(t.td,null,"Elbow Drop")),r.createElement(t.tr,null,r.createElement(t.td,null,"Vader"),r.createElement(t.td,null,"Boulder, CO"),r.createElement(t.td,null,"Vader Bomb")),r.createElement(t.tr,null,r.createElement(t.td,null,"Razor Ramon"),r.createElement(t.td,null,"Chuluota, FL"),r.createElement(t.td,null,"Razor's Edge")))),"\n",r.createElement(t.h3,null,"コード系"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-shell"},"$ ls\nfirst-post     try_various_thing\n")),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-python"},"import pandas as pd\ndf = pd.DataFrame()\n")),"\n",r.createElement(t.p,null,"コードにハイライトをつけることもできる"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-python",highlight:"2"},"import pandas as pd\ndf = pd.DataFrame()\n")),"\n",r.createElement(t.h3,null,"X(Twitter)埋め込み"),"\n",r.createElement(t.p,null,"gatsby-plugin-twitterブラグインを追加した上で埋め込み用HTMLをコピペ"),"\n",r.createElement("blockquote",{class:"twitter-tweet","data-theme":"dark"},r.createElement("p",{lang:"zxx",dir:"ltr"},r.createElement("a",{href:"https://t.co/2Gufkv3DXq"},"pic.twitter.com/2Gufkv3DXq")),"— X (@X) ",r.createElement("a",{href:"https://twitter.com/X/status/1716896883434799556?ref_src=twsrc%5Etfw"},"October 24, 2023")),"\n",r.createElement("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),"\n",r.createElement(t.h3,null,"Youtube埋め込み"),"\n",r.createElement(t.p,null,"埋め込み用HTMLをコピペするだけで可能"),"\n",r.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/adDA5VgM9O4?si=eGOYCeGRYZmgp0nG",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",r.createElement(t.h3,null,"音楽系埋め込み"),"\n",r.createElement(t.h4,null,"SpotifyPlayer"),"\n",r.createElement(s),"\n",r.createElement(t.h3,null,"GoogleMap埋め込み"),"\n",r.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853707492!2d139.76454987649285!3d35.6812405299723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2sTokyo%20Station!5e0!3m2!1sen!2sjp!4v1700195716738!5m2!1sen!2sjp",width:"600",height:"450",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}),"\n",r.createElement(t.h3,null,"リンクカード表示"),"\n",r.createElement(t.p,null,"iframely.jsを導入することで対応できた"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://github.com/gatsbyjs/gatsby/"},"Gatsby")),"\n",r.createElement("div",{class:"iframely-embed"},r.createElement("div",{class:"iframely-responsive",styles:"height: 140px; padding-bottom: 0;"},r.createElement("a",{href:"https://github.com/gatsbyjs/gatsby","data-iframely-url":"//iframely.net/mlzQxwo?card=small"}))),"\n",r.createElement(t.p,null,"こちらの記事に倣いiframely.jsを導入すればできます。記事内では「templates/blog-post.js に Iframely を配置する」とありますが、mdxファイル内に直接記述しても動きます。"),"\n",r.createElement("div",{class:"iframely-embed"},r.createElement("div",{class:"iframely-responsive",styles:"height: 140px; padding-bottom: 0;"},r.createElement("a",{href:"https://expfrom.me/gatsby-use-iframely.md/","data-iframely-url":"//iframely.net/DVGKaYu"}))),"\n",r.createElement(t.h3,null,"インタラクティブなグラフなど"),"\n",r.createElement(t.p,null,"Python系でよく使うPlotlyなどで描画されたインタラクティブなグラフ。"),"\n",r.createElement(t.p,null,"ローカルで作ったplotlyなどの記載方法はまだ見つかっていないが、",r.createElement(t.a,{href:"https://chart-studio.plotly.com/feed/#/"},"chart-studio"),"(登録必要)を使ってiframeを取得すれば可能"),"\n",r.createElement("iframe",{id:"igraph",scrolling:"no",styles:"border:none;",seamless:"seamless",src:"https://plotly.com/~chris/1638.embed",height:"525",width:"100%"}),"\n",r.createElement(t.p,null,"基本的には外部情報系を埋め込みたい時は、iframeを使っていけば良さそうである。"),"\n",r.createElement(t.hr),"\n",r.createElement(t.p,null,"以下は色々試したがうまく動いていないので本日は諦めたもの。mdxファイル周りとかがしっかり理解できていない"),"\n",r.createElement(t.h3,null,"Latex数式"),"\n",r.createElement(t.p,null,"$$x^3 + y^2$$"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://www.gatsbyjs.com/plugins/gatsby-remark-katex/"},"gatsby-remark-katex"),"などを試してみたが、うまく機能していない"),"\n",r.createElement(t.p,null,"暫定的な対応策として、",r.createElement(t.a,{href:"https://mathembed.online/"},"Math Embed"),"というサービスを使って数式を表示させるURLを発行してiframeで表示させたりはできる。"),"\n",r.createElement("iframe",{src:"https://mathembed.online/embed/9hUPieFsGuUCazy4v6YU",styles:"top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;",allowfullscreen:!0}))}var Ee=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(be,e)):be(e)},we=n(4765);function ve(e){return r.createElement(we.Z,e,r.createElement(Ee,e))}we.Z},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,c,u,s;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(c=l;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((l=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,u[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==u[c]&&"__v"!==u[c]&&"__o"!==u[c]||!e.$$typeof)&&!o(e[u[c]],i[u[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,u=[];function s(){c=e(u.map((function(e){return e.props}))),p.canUseDOM?t(c):n&&(c=n(c))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",l),p}}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-try-various-thing-index-mdx-c92893dbc4b4d6488cf0.js.map