(this["webpackJsonprest-countries"]=this["webpackJsonprest-countries"]||[]).push([[0],{166:function(e,t,c){},172:function(e,t,c){},187:function(e,t,c){},384:function(e,t,c){},385:function(e,t,c){},386:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),r=c.n(n),s=c(68),o=c.n(s),l=c(20),i=c(39),j=c(3),d=c(46),b="https://restcountries.eu/rest/v2",u="https://maps.googleapis.com/maps/api/js?v3.exp&key=AIzaSyCU1sg0H8sWuzA4IvM1NsO-erYuvsrELTM",m=function(e,t){return""===t?e:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())||e.capital.toLowerCase().includes(t.toLowerCase().trim())||e.languages[0].nativeName.toLowerCase().includes(t.toLowerCase().trim())||e.callingCodes[0].toLowerCase().includes(t.toLowerCase().trim())}))},h=function(e,t){return""===t?e:e.filter((function(e){return e.region===t}))},O=(c(166),function(){return Object(a.jsx)("div",{className:"card-lading",children:Object(a.jsxs)("div",{className:"card-loading-animate",children:[Object(a.jsx)("div",{className:"card-loading-animate1"}),Object(a.jsxs)("div",{className:"card-loading-animate2",children:[Object(a.jsx)("div",{className:"content-1"}),Object(a.jsxs)("div",{className:"content-2",children:[Object(a.jsx)("div",{className:"sub-content"}),Object(a.jsx)("div",{className:"sub-content"}),Object(a.jsx)("div",{className:"sub-content"}),Object(a.jsx)("div",{className:"sub-content"})]})]})]})})}),g=c(21),x=c(22),v=(c(172),Object(n.createContext)()),f=c(156),p=c.n(f),N=[{value:"",name:"Select by region"},{value:"Americas",name:"Americas"},{value:"Asia",name:"Asia"},{value:"Africa",name:"Africa"},{value:"Polar",name:"Polar"},{value:"Oceania",name:"Oceania"},{value:"Europe",name:"Europe"}],y=r.a.memo((function(e){var t=e.setDarkMode,c=e.darkMode;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"nav ".concat(c?"dark-nav":"light-nav"),children:[Object(a.jsx)("h1",{children:" Where in the world? "}),Object(a.jsx)("button",{className:"".concat(c?"border-gray-300 hover:border-gray-600 ":"border-gray-800  hover:border-gray-300"),onClick:function(){t(!c)},children:c?Object(a.jsxs)(a.Fragment,{children:[" ",Object(a.jsx)(g.a,{icon:x.g})," Light mode"]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g.a,{icon:x.c})," Dark mode"]})})]})})})),k=r.a.memo((function(e){var t=e.setRegion,c=e.setSearch,r=Object(j.g)(),s=localStorage.getItem("region")||"",o=Object(n.useContext)(v).bgDark,l=Object(j.h)(),i=p.a.parse(l.search).q,d=void 0===i?"":i;return d.length<1&&localStorage.removeItem("search"),Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("div",{className:"nav-inputs",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"searchCountry",children:Object(a.jsx)(g.a,{icon:x.d})}),Object(a.jsx)("input",{className:"form-control",defaultValue:d,onKeyUp:function(e){e.preventDefault();var t=e.target.value;r.push("?q=".concat(t)),localStorage.setItem("search",t),0!==t.length&&c(t)},autoComplete:"off",name:"searchCountry",placeholder:"Search by (name, language, capital, calling code)"})]}),Object(a.jsxs)("div",{className:"form-group-select",children:[Object(a.jsx)("select",{defaultValue:s,onChange:function(e){s=e.target.value,localStorage.setItem("region",s),t(s)},className:"form-select",name:"regions",children:N.map((function(e){var t=e.value,c=e.name;return Object(a.jsx)("option",{className:"".concat(o?"dark-nav":"light-nav"),value:t,children:c},t)}))}),Object(a.jsx)("label",{htmlFor:"regions",children:Object(a.jsx)(g.a,{icon:x.e})})]}),Object(a.jsx)("div",{})]})})})),C=r.a.memo((function(e){var t=e.name,c=e.region,n=e.capital,r=e.flag,s=e.currencies,o=e.languages,l=e.callingCodes;return Object(a.jsxs)("div",{className:"card-index",children:[Object(a.jsx)("div",{className:"card-head",children:Object(a.jsx)("img",{loading:"lazy",src:r,alt:t})}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h1",{className:"card-title",children:t}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"card-gruop-text",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Currencies : "}),s[0].code]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Region : "}),c]}),n.length>=2&&Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Capital : "}),n]}),l[0].length>=1&&Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Calling code : "}),l[0]]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Language : "}),o.map((function(e){var t=e.nativeName;return" ".concat(t)}))]})]}),Object(a.jsxs)(i.b,{className:"goCountry",to:"/".concat(t),children:["  ",Object(a.jsx)(g.a,{icon:x.a})," Ver m\xe1s...  "]})]})]})})),S=(c(187),r.a.memo((function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){var e=localStorage.getItem("region")||"";r(e)}),[]);var s=Object(n.useState)(""),o=Object(l.a)(s,2),i=o[0],j=o[1];Object(n.useEffect)((function(){var e=localStorage.getItem("search")||"";j(e)}),[]);var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=Object(n.useRef)(!0),a=Object(n.useState)({data:null,loading:!0,error:null}),r=Object(l.a)(a,2),s=r[0],o=r[1];return Object(n.useEffect)((function(){return function(){c.current=!1}}),[]),Object(n.useEffect)((function(){o({data:null,loading:!0,error:null}),fetch("".concat(b,"/all")).then((function(e){return e.json()})).then((function(a){c.current&&(a=t.length<2?h(a,e):m(a,t),o({loading:!1,error:null,data:a}))})).catch((function(e){return o({loading:!0,error:e.message,data:null})}))}),[e,t]),s}(c,i),g=u.data,x=u.loading,v=u.error;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(k,{setRegion:r,setSearch:j}),Object(a.jsxs)("div",{className:"card-container",children:[!!v&&Object(a.jsx)("div",{className:"error",children:Object(a.jsx)("h1",{children:v})}),x||0===g.length?Object(a.jsx)(O,{}):g.map((function(e){return Object(a.jsx)(C,Object(d.a)({},e),e.name)}))]})]})}))),w=c(98),L=c.n(w),M=c(158),E=function(){var e=Object(M.a)(L.a.mark((function e(t,c){var a,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/name/").concat(t.toLowerCase()));case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=!!n&&n[0],c({loading:!1,data:r,error:null}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),c({loading:!0,data:null,error:null});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,c){return e.apply(this,arguments)}}(),I=c(48),A=r.a.memo((function(e){var t=e.lat,c=e.lng;return Object(a.jsx)(I.GoogleMap,{defaultZoom:5,defaultCenter:{lat:t,lng:c},children:Object(a.jsx)(I.Marker,{position:{lat:t,lng:c}})})})),F=Object(I.withScriptjs)(Object(I.withGoogleMap)(A)),D=(c(384),r.a.memo((function(e){var t=e.history,c=Object(j.i)().name,r=Object(n.useState)({loading:!0,data:null,error:null}),s=Object(l.a)(r,2),o=s[0],i=o.data,b=o.loading,m=o.error,h=s[1];E(c,h);var v=Object(n.useState)(!1),f=Object(l.a)(v,2),p=f[0],N=f[1];return window.onclick=function(e){"modal"!==e.target.className&&"close"!==e.target.className||N((function(e){return!1}))},Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("button",{onClick:function(){!function(){var e=localStorage.getItem("lastPath")||"/";t.replace(e)}()},className:"button-back",children:[Object(a.jsx)(g.a,{icon:x.b}),"  Go back"]}),Object(a.jsxs)("div",{className:"card",children:[!!m&&Object(a.jsx)("div",{className:"error",children:Object(a.jsx)("h1",{children:m})}),b?Object(a.jsx)(O,{}):Object(a.jsx)(R,Object(d.a)(Object(d.a)({},i),{},{setShowModal:N}))]}),Object(a.jsx)("div",{style:p?{display:"block"}:{display:"none"},className:"modal",children:b?Object(a.jsx)(g.a,{className:"faSpinner",icon:x.f,spin:!0}):Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsx)("span",{className:"close",children:"\xd7"}),Object(a.jsx)("p",{children:i.name}),Object(a.jsx)("div",{className:"content-map",children:Object(a.jsx)(F,{googleMapURL:u,containerElement:Object(a.jsx)("div",{style:{height:"200px"}}),mapElement:Object(a.jsx)("div",{style:{height:"100%"}}),loadingElement:Object(a.jsx)("div",{children:"cargando"}),lat:i.latlng[0],lng:i.latlng[1]})})]})})]})}))),R=r.a.memo((function(e){var t=e.name,c=e.capital,r=e.region,s=e.population,o=e.languages,l=e.alpha3Code,i=e.borders,j=e.flag,d=e.subregion,b=e.setShowModal,u=Object(n.useContext)(v).bgDark;return console.log(!u),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:j,alt:"mapa"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h1",{children:t}),Object(a.jsxs)("div",{className:"card-text",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Region : "})," ",r]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"SubRegion : "})," ",d]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Capital : "})," ",c]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Population : "})," ",s]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Language : "})," ",o.map((function(e){var t=e.nativeName;return" ".concat(t)}))]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Alpha3Code : "})," ",l]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Borders : "}),0!==i.length&&Object(a.jsx)("div",{className:"borders-group",children:i.map((function(e){return Object(a.jsxs)("div",{className:"borders",children:[" ",e," "]},e)}))})]})]}),Object(a.jsx)("button",{onClick:function(){b((function(e){return!e}))},className:"btnMap ".concat(u?"border-gray-400 rounded-lg border-2 hover:border-gray-100 text-gray-400 hover:text-gray-100 a":"border-gray-400 rounded-lg border-2 hover:border-gray-800 text-gray-400 hover:text-gray-800 b"),children:"View Map"})]})]})})),P=(c(385),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){localStorage.getItem("dark-mode")&&(document.body.classList.add("dark-mode"),r((function(e){return!e})))}),[]);return Object(n.useEffect)((function(){c?(localStorage.setItem("dark-mode","darkmode"),document.body.classList.add("dark-mode")):(document.body.classList.remove("dark-mode"),localStorage.removeItem("dark-mode"))}),[c]),Object(a.jsx)("div",{className:"is-light-theme",children:Object(a.jsx)(v.Provider,{value:{bgDark:c},children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(y,{setDarkMode:r,darkMode:c}),Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)(j.d,{children:[Object(a.jsx)(j.b,{exact:!0,path:"/",component:S}),Object(a.jsx)(j.b,{exact:!0,path:"/:name",component:D}),Object(a.jsx)(j.a,{to:"/"})]})})]})})})}),V=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(P,{})})};o.a.render(Object(a.jsx)(V,{}),document.getElementById("root"))}},[[386,1,2]]]);
//# sourceMappingURL=main.3803c911.chunk.js.map