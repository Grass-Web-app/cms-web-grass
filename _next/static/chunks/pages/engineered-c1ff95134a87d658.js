(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[204],{3205:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/engineered",function(){return n(8606)}])},8606:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=n(5893),r=n(7294),s=n(5673),c=n(1892),o=n(95),l=n(3436),u=n(5920),a=function(t){var e=t.addNew,a=t.stateNew,d=t.setData,M=(0,s.CG)(u.WU),j=(0,r.useState)([]),x=j[0],w=j[1],L=(0,l.Z)("grasses/",{completeInterceptor:{action:function(t){w(t.data.data)}},errorInterceptor:{message:"No se obtuvieron los datos de get"}}).Get;(0,r.useEffect)((function(){""!==M.access&&""!==M.refresh&&L(M.access)}),[]);return(0,i.jsxs)(o.FT,{children:[(0,i.jsxs)(o.w8,{children:[(0,i.jsxs)(o.as,{disabled:x.length>6,onClick:function(){d(null),e(!a)},children:[(0,i.jsx)(o.lp,{children:"Agregar nueva"}),(0,i.jsx)(o.bb,{children:(0,i.jsx)(o.EV,{alt:"icon",src:n(1842)})})]}),(0,i.jsx)(o.nx,{children:"Lista de Engineered"})]}),(0,i.jsxs)(o.CY,{children:[(0,i.jsxs)(o.Cz,{up:!0,children:[(0,i.jsx)(o.Mt,{children:"#Numero"}),(0,i.jsx)(o.Mt,{children:"Title"}),(0,i.jsx)(o.Mt,{children:"Picture"}),(0,i.jsx)(o.Mt,{children:"Subtitle"}),(0,i.jsx)(o.Mt,{children:"Options"})]}),0!==x.length&&x.map((function(t,e){var n=!1;return x.length===e+1&&(n=!0),(0,i.jsx)(o.Cz,{bot:n.toString(),children:(0,i.jsx)(c.Z,{endpointErase:"grasses/",id:t.id,title:t.title,subtitle:t.subtitle,icon:t.icon,setcatalog:function(){return d(t)},fnErase:function(){return L(M.access)}})},t.id)}))]})]})},d=n(7313),M=n(3782),j=n(3219);function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){x(t,e,n[e])}))}return t}var L=function(t){var e=t.stateNew,c=t.addNew,o=t.edithData,l=(0,s.CG)(u.WU),a=(0,r.useState)(null),x=a[0],L=a[1],f=(0,r.useState)(!1),h=f[0],p=f[1],g=(0,r.useState)({title:"",subtitle:"",description:"",icon:null}),D=g[0],N=g[1],b=(0,r.useState)({title:!1,subtitle:!1,description:!1,icon:!1}),E=b[0],z=b[1],T=(0,j.Z)("grasses/",{completeInterceptor:{action:function(){c(!e)}},errorInterceptor:{message:"No se obtuvieron los datos de la creacion",action:function(){p(!1)}}}).Post,S=(0,M.Z)("grasses/".concat(null===o||void 0===o?void 0:o.id,"/"),{completeInterceptor:{action:function(){c(!e)}},errorInterceptor:{message:"No se obtuvieron los datos de la creacion",action:function(){p(!1)}}}).Patch,C=function(t){return N(w({},D,{title:t}))},I=function(t){return N(w({},D,{subtitle:t}))},v=function(t){return N(w({},D,{description:t}))},y=function(t){return N(w({},D,{icon:t}))};(0,r.useEffect)((function(){null!==o&&N({title:o.title,subtitle:o.subtitle,description:o.description,icon:o.icon})}),[o]),(0,r.useEffect)((function(){null!==x&&y(URL.createObjectURL(x))}),[x]);return(0,i.jsx)(d.BG,{children:(0,i.jsxs)(d.IB,{children:[(0,i.jsxs)(d.C2,{onClick:function(){return c(!e)},children:[(0,i.jsx)(d.R3,{alt:"arrow",src:n(1186)}),"Lista de Engineered"]}),(0,i.jsx)(d.HR,{}),(0,i.jsxs)(d.rw,{children:[(0,i.jsx)(d.T2,{children:"Title"}),(0,i.jsx)(d.TQ,{value:D.title,onChange:function(t){return C(t.target.value)},show:E.title.toString()}),(0,i.jsx)(d.nE,{show:E.title.toString(),children:"*Llenar campo obligatorio"})]}),(0,i.jsxs)(d.rw,{children:[(0,i.jsx)(d.T2,{children:"Subtitulo"}),(0,i.jsx)(d.TQ,{value:D.subtitle,onChange:function(t){return I(t.target.value)},show:E.subtitle.toString()}),(0,i.jsx)(d.nE,{show:E.subtitle.toString(),children:"*Llenar campo obligatorio"})]}),(0,i.jsxs)(d.rw,{children:[(0,i.jsx)(d.T2,{children:"Icono"}),(0,i.jsxs)(d.WV,{show:E.icon.toString(),children:[null!==D.icon?(0,i.jsx)(d.$b,{children:(0,i.jsx)(d.I6,{alt:"file",src:D.icon})}):(0,i.jsx)(d.Qc,{children:(0,i.jsx)(d.NE,{alt:"cloud",src:n(8979)})}),(0,i.jsx)(d.sF,{type:"file",onChange:function(t){return L(t.target.files[0])}})]}),(0,i.jsx)(d.nE,{show:E.icon.toString(),children:"*Llenar campo obligatorio"})]}),(0,i.jsxs)(d.rw,{children:[(0,i.jsx)(d.T2,{children:"Description"}),(0,i.jsx)(d.d2,{value:D.description,onChange:function(t){return v(t.target.value)},show:E.description.toString()}),(0,i.jsx)(d.nE,{show:E.description.toString(),children:"*Llenar campo obligatorio"})]}),(0,i.jsxs)(d.UQ,{children:[(0,i.jsx)(d.Tl,{disabled:h,onClick:function(){return c(!e)},children:"Cancelar"}),(0,i.jsx)(d.Tl,{disabled:h,onClick:function(){null!==o?function(){var t=D.title,e=D.subtitle,n=D.description,i=D.icon;if(""!==t&&""!==e&&""!==n&&null!==i){p(!0);var r=new FormData;r.append("title",t),r.append("subtitle",e),r.append("description",n),null!==x&&r.append("icon",x),S(r,{Authorization:"Bearer ".concat(l.access)})}else z({title:""===t,subtitle:""===e,description:""===n,icon:null===i})}():function(){var t=D.title,e=D.subtitle,n=D.description,i=D.icon;if(""!==t&&""!==e&&""!==n&&null!==i){p(!0);var r=new FormData;r.append("title",t),r.append("subtitle",e),r.append("description",n),r.append("icon",x),T(r,{Authorization:"Bearer ".concat(l.access)})}else z({title:""===t,subtitle:""===e,description:""===n,icon:null===i})}()},children:"Aceptar"})]})]})})},f=n(6329),h=function(){var t=(0,r.useState)(!1),e=t[0],n=t[1],s=(0,r.useState)(null),c=s[0],o=s[1];return(0,i.jsx)(f.Z,{children:e?(0,i.jsx)(L,{stateNew:e,addNew:n,edithData:c}):(0,i.jsx)(a,{stateNew:e,addNew:n,setData:function(t){return function(t){o(t),n(!0)}(t)}})})}},8979:function(t){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPiAgICA8cGF0aCBkPSJNMjUuOTgzLDEzLjM0MkMyNS45ODgsMTMuMjI4LDI2LDEzLjExNiwyNiwxM2MwLTQuNDE4LTMuNTgyLTgtOC04Yy0zLjExLDAtNS44LDEuNzc5LTcuMTIzLDQuMzcxIEMxMC4yOTYsOS4xMzYsOS42NjUsOSw5LDljLTIuNTMsMC00LjU5OSwxLjg4NS00LjkzMiw0LjMyNEMxLjcwMywxNC4xMjksMCwxNi4zNjMsMCwxOWMwLDMuMzE0LDIuNjg2LDYsNiw2aDE4IGMzLjMxNCwwLDYtMi42ODYsNi02QzMwLDE2LjM4MiwyOC4zMjEsMTQuMTYyLDI1Ljk4MywxMy4zNDJ6IE0xMS4yOTMsMTUuMjkzbDMtM0MxNC40ODgsMTIuMDk4LDE0Ljc0NCwxMiwxNSwxMiBzMC41MTIsMC4wOTgsMC43MDcsMC4yOTNsMywzYzAuMzkxLDAuMzkxLDAuMzkxLDEuMDIzLDAsMS40MTRjLTAuMzkxLDAuMzkxLTEuMDIzLDAuMzkxLTEuNDE0LDBMMTYsMTUuNDE0VjIxYzAsMC41NTItMC40NDcsMS0xLDEgcy0xLTAuNDQ4LTEtMXYtNS41ODZsLTEuMjkzLDEuMjkzYy0wLjM5MSwwLjM5MS0xLjAyMywwLjM5MS0xLjQxNCwwUzEwLjkwMiwxNS42ODQsMTEuMjkzLDE1LjI5M3oiLz48L3N2Zz4="}},function(t){t.O(0,[739,329,934,774,888,179],(function(){return e=3205,t(t.s=e);var e}));var e=t.O();_N_E=e}]);