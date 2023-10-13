"use strict";(self.webpackChunklshig_github_io=self.webpackChunklshig_github_io||[]).push([[678],{5330:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(5697),l=n.n(a),i=n(7294),r=n(791);function c(e){let{id:t}=e;return i.createElement("span",{"aria-label":t,className:"emoji",role:"img"},r.$M[t])}function m(e){let{emojis:t}=e;const n=t.map(((e,n)=>{const a=t.length-1!==n?" ":null;return i.createElement(i.Fragment,{key:e},i.createElement(c,{id:e}),a)}));return i.createElement("p",null,n)}m.prototype={emojis:l().arrayOf(l().stringisRequired).isRequired}},2727:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294);function l(){return a.createElement("div",{className:"name-tag"},a.createElement("div",{className:"greeting-section"},a.createElement("h1",{className:"greeting"},"Hello"),a.createElement("p",{className:"my-name-is"},"my name is")),a.createElement("div",{className:"name-section"},a.createElement("p",{className:"name"},"Liz")))}var i=n(6578);function r(e){let{icon:t,isNewTab:n,link:l}=e;return n?a.createElement(i.Z,{link:l},a.createElement("i",{className:`fa fa-${t}`})):a.createElement("a",{href:l},a.createElement("i",{className:`fa fa-${t}`}))}function c(){const e=[{icon:"envelope-o",id:"email",isNewTab:!1,link:"mailto:lizshigetoshi@gmail.com"},{icon:"github-alt",id:"github",isNewTab:!0,link:"https://github.com/lshig"},{icon:"linkedin",id:"linkedin",isNewTab:!0,link:"https://www.linkedin.com/in/elizabethshigetoshi"},{icon:"instagram",id:"instagram",isNewTab:!0,link:"https://instagram.com/lizshig"}].map((e=>a.createElement(r,{icon:e.icon,isNewTab:e.isNewTab,key:e.id,link:e.link})));return a.createElement("div",{className:"media-content"},e)}function m(){return a.createElement("header",{className:"side-nav"},a.createElement("ul",null,a.createElement("li",null,a.createElement(l,null)),a.createElement("li",null,a.createElement(c,null))))}var o=n(1883);function s(e){let{article:t,author:n,description:l,image:i,keywords:r,pathname:c,title:m}=e;const{site:s}=(0,o.useStaticQuery)(u),{defaultArticle:d,defaultAuthor:p,defaultDescription:E,defaultImage:g,defaultKeywords:h,defaultTitle:f,siteUrl:k,twitterUsername:y}=s.siteMetadata,w={article:t||d,author:n||p,description:l||E,image:`${k}${i||g}`,keywords:r||h,title:m||f,url:`${k}${c||""}`};return a.createElement(a.Fragment,null,a.createElement("title",null,w.title),a.createElement("meta",{name:"author",content:w.author}),a.createElement("meta",{name:"description",content:w.description}),a.createElement("meta",{name:"image",content:w.image}),a.createElement("meta",{name:"keywords",content:w.keywords}),w.url&&a.createElement("meta",{property:"og:url",content:w.url}),!w.article?null:a.createElement("meta",{property:"og:type",content:"article"}),w.title&&a.createElement("meta",{property:"og:title",content:w.title}),w.description&&a.createElement("meta",{property:"og:description",content:w.description}),w.image&&a.createElement("meta",{property:"og:image",content:w.image}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),y&&a.createElement("meta",{name:"twitter:creator",content:y}),w.title&&a.createElement("meta",{name:"twitter:title",content:w.title}),w.description&&a.createElement("meta",{name:"twitter:description",content:w.description}),w.image&&a.createElement("meta",{name:"twitter:image",content:w.image}))}s.defaultProps={article:!1,author:null,description:null,image:null,keywords:null,pathname:null,title:null};const u="3785310072";function d(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(s,null),a.createElement(m,null),a.createElement("main",null,t))}},6578:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(5697),l=n.n(a),i=n(7294);function r(e){let{children:t,link:n}=e;return i.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank"},t)}r.prototype={children:l().node.isRequired,link:l().string.isRequired}},8239:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(5697),l=n.n(a),i=n(7294);function r(e){let{children:t}=e;return i.createElement("div",{className:"section-heading-wrapper"},i.createElement("div",{className:"section-heading"},i.createElement("h1",{className:"section-heading-content"},t)))}r.protoTypes={children:l().node.isRequired}},9618:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),l=n(5330),i=n(6578),r=n(8239);function c(){return a.createElement("div",{className:"section end-wrapper"},a.createElement(r.Z,null,"About me"),a.createElement("article",{className:"section-content"},a.createElement(l.Z,{emojis:["basketball","coffee","weight_lifting_woman","airplane","computer"]}),a.createElement("ul",null,a.createElement("li",null,a.createElement(i.Z,{link:"https://lizshigetoshi.com/sacramento-music/"},"916")," ","born-and-raised and loyal"," ",a.createElement(i.Z,{link:"https://github.com/lshig/sacramento-kings-cli/"},"Sacramento Kings")," ","fan"),a.createElement("li",null,"Likely found squatting at a coffee shop or a power rack"),a.createElement("li",null,"Wanderlusted to"," ",a.createElement(i.Z,{link:"https://lizshigetoshi.com/map-play/"},"16 U.S. states and 13 countries")," ","since 2013"),a.createElement("li",null,"Graduated from the"," ",a.createElement(i.Z,{link:"https://en.wikipedia.org/wiki/UC_Davis_pepper_spray_incident"},"University of California, Davis")," ","in computer science and computational biology"))))}var m=n(2727);function o(e){let{emojis:t,employer:n,link:r,title:c}=e;return a.createElement("div",{className:"col s12 m6 l6"},a.createElement(i.Z,{link:r},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-title__center"},c),a.createElement("div",{className:"card-emojis"},a.createElement(l.Z,{emojis:t})),a.createElement("div",{className:"card-action__center"},a.createElement("span",{className:"card-footnote"},n)))))}function s(){const e=[{emojis:["moneybag","passport_control"],employer:"Mapbox",link:"https://account.mapbox.com",title:"Account Dashboard"},{emojis:["cow","speech_balloon"],employer:a.createElement(a.Fragment,null,"UC Davis",a.createElement("br",null),"Energy Conservation Office"),link:"https://thermoostat.ucdavis.edu",title:"TherMOOstat"},{emojis:["mortar_board","bar_chart"],employer:a.createElement(a.Fragment,null,"UC Davis",a.createElement("br",null),"Energy Conservation Office"),link:"https://ceed.ucdavis.edu",title:"Campus Energy Education Dashboard"},{emojis:["fist","sos"],employer:a.createElement(a.Fragment,null,"UC Davis",a.createElement("br",null),"Department of Design"),link:"https://www.davisenterprise.com/news/ucd-students-social-media-tool-garners-attention/article_1a5b0689-0279-5ab6-89f9-2a09ab962995.html",title:"Stories of Solidarity"}].map((e=>a.createElement(o,{emojis:e.emojis,employer:e.employer,key:e.title,link:e.link,title:e.title})));return a.createElement("div",{className:"section initial-wrapper"},a.createElement(r.Z,null,"Work"),a.createElement("div",{className:"card-content"},a.createElement("div",{className:"row section-spacing"},e)))}function u(){return a.createElement(m.Z,null,a.createElement("div",{className:"initial-section"}),a.createElement(s,null),a.createElement(c,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c4d5777d9d54a5183f89.js.map