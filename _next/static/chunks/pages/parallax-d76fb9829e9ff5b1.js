(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[489],{2772:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/parallax",function(){return n(721)}])},721:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=n(5893),i=n(7294),o=n(6329),c=n(5673),a=n(7313),s=n(3782),l=n(3219),u=n(5920),d=n(1501);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){f(t,e,n[e])}))}return t}var h=function(t){var e=t.stateNew,o=t.addNew,f=t.edithData,h=(0,c.CG)(u.WU),x=(0,i.useState)(!1),j=x[0],w=x[1],b=(0,i.useState)({title:"",description:""}),g=b[0],v=b[1],N=(0,i.useState)({title:!1,description:!1}),m=N[0],C=N[1],E=(0,l.Z)("parallax/",{completeInterceptor:{action:function(){(0,d.fZ)(g.title),o(!e)}},errorInterceptor:{message:"No se obtuvieron los datos de la creacion",action:function(){(0,d.wk)(g.title),w(!1)}}}).Post,S=(0,s.Z)("parallax/".concat(null===f||void 0===f?void 0:f.id,"/"),{completeInterceptor:{action:function(){(0,d.xz)(g.title),o(!e)}},errorInterceptor:{message:"No se obtuvieron los datos de la creacion",action:function(){(0,d.Jf)(g.title),w(!1)}}}).Patch,_=function(t){return v(p({},g,{title:t}))},O=function(t){return v(p({},g,{description:t}))};(0,i.useEffect)((function(){null!==f&&v({title:f.title,description:f.description})}),[f]);return(0,r.jsx)(a.BG,{children:(0,r.jsxs)(a.IB,{children:[(0,r.jsxs)(a.C2,{onClick:function(){return o(!e)},children:[(0,r.jsx)(a.R3,{alt:"arrow",src:n(1186)}),"Lista de Parallax"]}),(0,r.jsx)(a.HR,{}),(0,r.jsxs)(a.rw,{children:[(0,r.jsx)(a.T2,{children:"Title"}),(0,r.jsx)(a.TQ,{value:g.title,onChange:function(t){return _(t.target.value)},show:m.title.toString()}),(0,r.jsx)(a.nE,{show:m.title.toString(),children:"*Llenar campo obligatorio"})]}),(0,r.jsxs)(a.rw,{children:[(0,r.jsx)(a.T2,{children:"Description"}),(0,r.jsx)(a.d2,{value:g.description,onChange:function(t){return O(t.target.value)},show:m.description.toString()}),(0,r.jsx)(a.nE,{show:m.description.toString(),children:"*Llenar campo obligatorio"})]}),(0,r.jsxs)(a.UQ,{children:[(0,r.jsx)(a.Tl,{disabled:j,onClick:function(){return o(!e)},children:"Cancelar"}),(0,r.jsx)(a.Tl,{disabled:j,onClick:function(){null!==f?function(){var t=g.title,e=g.subtitle,n=g.description,r=g.icon;if(""!==t&&""!==e&&""!==n&&null!==r){w(!0);var i=new FormData;i.append("title",t),i.append("description",n),S(i,{Authorization:"Bearer ".concat(h.access)})}else C({title:""===t,description:""===n})}():function(){var t=g.title,e=g.description;if(""!==t&&""!==e){w(!0);var n=new FormData;n.append("title",t),n.append("description",e),E(n,{Authorization:"Bearer ".concat(h.access)})}else C({title:""===t,description:""===e})}()},children:null!==f?"Editar":"Aceptar"})]})]})})},x=n(1892),j=n(95),w=n(3436),b=function(t){var e=t.addNew,o=t.stateNew,a=t.setData,s=(0,c.CG)(u.WU),l=(0,i.useState)([]),d=l[0],f=l[1],p=(0,w.Z)("parallax/",{completeInterceptor:{action:function(t){f(t.data.data)}},errorInterceptor:{message:"No se obtuvieron los datos de get"}}).Get;(0,i.useEffect)((function(){""!==s.access&&""!==s.refresh&&p(s.access)}),[]);return(0,r.jsxs)(j.FT,{children:[(0,r.jsxs)(j.w8,{children:[(0,r.jsxs)(j.as,{disabled:d.length>0,onClick:function(){a(null),e(!o)},children:[(0,r.jsx)(j.lp,{children:"Agregar nueva"}),(0,r.jsx)(j.bb,{children:(0,r.jsx)(j.EV,{alt:"icon",src:n(1842)})})]}),(0,r.jsx)(j.nx,{children:"Lista de Parallax"})]}),(0,r.jsxs)(j.CY,{children:[(0,r.jsxs)(j.Cz,{icon:"false",up:!0,children:[(0,r.jsx)(j.Mt,{children:"#Numero"}),(0,r.jsx)(j.Mt,{children:"Title"}),(0,r.jsx)(j.Mt,{children:"Description"}),(0,r.jsx)(j.Mt,{children:"Options"})]}),0!==d.length&&d.map((function(t,e){var n=!1;return d.length===e+1&&(n=!0),(0,r.jsx)(j.Cz,{icon:"false",bot:n.toString(),children:(0,r.jsx)(x.Z,{endpointErase:"parallax/",id:t.id,title:t.title,subtitle:t.description,icon:null,setcatalog:function(){return a(t)},fnErase:function(){return p(s.access)}})},t.id)}))]})]})},g=function(){var t=(0,i.useState)(!1),e=t[0],n=t[1],c=(0,i.useState)(null),a=c[0],s=c[1];return(0,r.jsx)(o.Z,{children:e?(0,r.jsx)(h,{stateNew:e,addNew:n,edithData:a}):(0,r.jsx)(b,{stateNew:e,addNew:n,setData:function(t){return function(t){s(t),n(!0)}(t)}})})}}},function(t){t.O(0,[739,917,329,934,774,888,179],(function(){return e=2772,t(t.s=e);var e}));var e=t.O();_N_E=e}]);