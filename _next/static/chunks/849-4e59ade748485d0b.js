(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[849],{2849:function(n,i,e){"use strict";e.d(i,{Z:function(){return wn}});var t=e(5893),r=e(7294),M=e(9008),c=e(7379);function u(){var n,i,e=(n=['\n\n//Estilos por defecto que trae React\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\',\n    \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \'Courier New\',\n    monospace;\n}\n\n\n//Estilos para Grid Area\n\n/*Grid Area First Mobile*/\n\n/*min 640px*/\n.contenedor {\ngrid-template-areas: "header header header"\n                    "contenido contenido contenido"\n                    "sidebar sidebar sidebar"\n                    "widget-1 widget-1 widget-1"\n                    "widget-2 widget-2 widget-2"\n                    "footer footer footer"\n;\n}\n\n\n/*min 768px*/\n@media screen and (min-width: 768px){\n.contenedor{\ngrid-template-areas:    "header header header"\n                        "contenido contenido contenido"\n                        "sidebar sidebar sidebar"\n                        "widget-1 widget-1 widget-2"\n                        "footer footer footer"\n;\n}    \n}\n\n/*min 1024px*/\n@media screen and (min-width: 1024px){\n.contenedor{\ngrid-template-areas:    "header header header"\n                        "contenido contenido sidebar"\n                        "widget-1 widget-2 sidebar"\n                        "footer footer footer"\n;\n}\n\n}\n\n/*min 1280px*/\n@media screen and (min-width: 1280px){\n.contenedor{\ngrid-template-areas:    "header header header"\n                        "contenido contenido sidebar"\n                        "widget-1 widget-1 sidebar"\n                        "widget-2 widget-2 sidebar"\n                        "footer footer footer"\n;\n}\n\n}\n\n/*min 1536px*/\n\n'],i||(i=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}})));return u=function(){return e},e}var o=(0,c.vJ)(u());e(4051);var a=e(1043).v9,d=e(5920),g=function(){var n=a(d.t7);return(0,t.jsx)("style",{children:"body {  background-color: ".concat("true"===n.toString()?"#18191a":"#DDEBE1"," ; }")})},j=e(6018),s=e(1163);function I(n,i){return i||(i=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}}))}function N(){var n=I(["\n  grid-area: ",";\n  background: #c7e6fa;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 5%;\n  padding-bottom: 5%;\n"]);return N=function(){return n},n}function L(){var n=I(["\n  width: 50%;\n"]);return L=function(){return n},n}function x(){var n=I(["\n  width: 100%;\n  height: auto;\n"]);return x=function(){return n},n}function w(){var n=I(["\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return w=function(){return n},n}function y(){var n=I(["\n  border-radius: 50px;\n  display: flex;\n  background: ",";\n  cursor: pointer;\n  justify-content: space-around;\n"]);return y=function(){return n},n}function l(){var n=I(["\n  margin-left: 5%;\n  font-size: 1vw;\n"]);return l=function(){return n},n}function D(){var n=I(["\n  display: flex;\n  align-items: center;\n  margin-left: 5%;\n"]);return D=function(){return n},n}function C(){var n=I(["\n  height: 100%;\n  transform: rotate(180deg);\n  display: flex;\n  align-items: center;\n"]);return C=function(){return n},n}function f(){var n=I(["\n  height: 45%;\n  width: auto;\n"]);return f=function(){return n},n}function A(){var n=I(["\n  width: 100%;\n  height: auto;\n"]);return A=function(){return n},n}function S(){var n=I(["\n  width: 70%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return S=function(){return n},n}function T(){var n=I(["\n  width: 100%;\n"]);return T=function(){return n},n}function m(){var n=I(["\n  width: 100%;\n  text-align: center;\n  margin: 0;\n"]);return m=function(){return n},n}var z=c.ZP.div(N(),(function(n){return n.area})),v=c.ZP.div(L()),h=c.ZP.img(x()),P=c.ZP.div(w()),p=c.ZP.div(y(),(function(n){return"true"===n.bg?"#C7E6FA":"white"})),b=c.ZP.p(l()),E=c.ZP.div(D()),Z=c.ZP.div(C()),O=c.ZP.img(f()),k=c.ZP.img(A()),Q=c.ZP.div(S()),H=c.ZP.div(T()),B=c.ZP.p(m()),Y=[{title:"Dashboard",icon:e(5256),link:"/dashboard"},{title:"Catalogo",icon:e(5238),link:"/catalog"},{title:"Engineered",icon:e(9189),link:"/engineered"},{title:"Carousel",icon:e(1147),link:"/carousel"},{title:"Cards",icon:e(5672),link:"/cards"}],U=function(n){var i=n.area,r=(0,s.useRouter)(),M=r.pathname,c=r.push;return(0,t.jsxs)(z,{area:i,children:[(0,t.jsx)(v,{children:(0,t.jsx)(h,{alt:"logo",src:j.prefix+e(1428)})}),(0,t.jsx)(P,{children:(0,t.jsx)(Q,{children:Y.map((function(n,i){var r=n.title,u=n.icon,o=n.link,a=!1;return M.includes(o)&&(a=!0),(0,t.jsxs)(p,{onClick:function(){c(o)},bg:a.toString(),children:[(0,t.jsx)(E,{children:(0,t.jsx)(k,{alt:"icon",src:u})}),(0,t.jsx)(b,{children:r}),(0,t.jsx)(Z,{children:!a&&(0,t.jsx)(O,{alt:"arrow",src:e(1186)})})]},i)}))})}),(0,t.jsxs)(H,{children:[(0,t.jsx)(B,{children:"Fustadesing"}),(0,t.jsx)(B,{children:"All right reserved"})]})]})};function G(n,i){return i||(i=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}}))}function W(){var n=G(["\n  grid-area: ",";\n  display: flex;\n  justify-content: space-between;\n  padding-left: 1%;\n  padding-right: 1%;\n  align-items: center;\n  background: #C7E6FA;\n  box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.2);\n"]);return W=function(){return n},n}function J(){var n=G(["\n  width: 30%;\n"]);return J=function(){return n},n}function R(){var n=G(["\n  width: 100%;\n"]);return R=function(){return n},n}function V(){var n=G(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  overflow: hidden;\n"]);return V=function(){return n},n}function K(){var n=G(["\n  width: 100%;\n  height: 100%;\n"]);return K=function(){return n},n}function F(){var n=G(["\n  width: 20%;\n  display: flex;\n  justify-content: space-around;\n  position: relative;\n"]);return F=function(){return n},n}function X(){var n=G(["\n  text-align: center;\n"]);return X=function(){return n},n}function _(){var n=G(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  ","\n"]);return _=function(){return n},n}function q(){var n=G(["\n  width: 100%;\n  height: auto;\n"]);return q=function(){return n},n}function $(){var n=G(["\n  display: flex;\n  cursor: pointer;\n"]);return $=function(){return n},n}function nn(){var n=G(["\n  ","\n  background: white;\n  border-radius: 15px;\n  position: absolute;\n  width: 100%;\n  height: fit-content;\n  top: 100%;\n  overflow: hidden;\n"]);return nn=function(){return n},n}function en(){var n=G(["\n  text-align: start;\n  padding-left: 3%;\n  margin: 0;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  &:hover {\n    background-color: #c0b7ef;\n  }\n"]);return en=function(){return n},n}var tn=c.ZP.div(W(),(function(n){return n.area})),rn=c.ZP.div(J()),Mn=c.ZP.h3(R()),cn=c.ZP.div(V()),un=c.ZP.img(K()),on=c.ZP.div(F()),an=c.ZP.p(X()),dn=c.ZP.div(_(),(function(n){return"true"===n.state&&"transform: rotate(180deg);"})),gn=c.ZP.img(q()),jn=c.ZP.div($()),sn=c.ZP.div(nn(),(function(n){return"false"===n.show&&"display: none;"})),In=c.ZP.p(en()),Nn=function(n){var i=n.area,M=(0,r.useState)(!1),c=M[0],u=M[1],o=(0,r.useState)(!1),a=o[0],d=o[1],g=function(n){s()},s=function(){u(!1),d(!1)};return(0,t.jsxs)(tn,{area:i,children:[(0,t.jsx)(rn,{children:(0,t.jsx)(Mn,{children:"Bienvenido al cms"})}),(0,t.jsxs)(on,{children:[(0,t.jsx)(an,{children:"Fustadesing"}),(0,t.jsxs)(jn,{onClick:function(){u(!c),d(!a)},children:[(0,t.jsx)(cn,{children:(0,t.jsx)(un,{alt:"avatar",src:j.prefix+e(368)})}),(0,t.jsx)(dn,{state:c.toString(),children:(0,t.jsx)(gn,{alr:"arrow",src:e(3178)})})]}),(0,t.jsxs)(sn,{show:a.toString(),children:[(0,t.jsx)(In,{onClick:function(){return g()},children:"Ver mi cuenta"}),(0,t.jsx)(In,{onClick:function(){return g()},children:"Cerrar sesion"})]})]})]})};function Ln(){var n,i,e=(n=['\n  border-style: solid;\n  border-width: 1px;\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 15% 85%;\n  grid-template-rows: 10% 90%;\n  grid-template-areas:\n    "left nav"\n    "left .";\n    \n'],i||(i=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(i)}})));return Ln=function(){return e},e}var xn=c.ZP.div(Ln()),wn=function(n){var i=n.children;return(0,t.jsxs)(xn,{children:[(0,t.jsx)(o,{}),(0,t.jsx)(g,{}),(0,t.jsxs)(M.default,{children:[(0,t.jsx)("title",{children:"El Hector"}),(0,t.jsx)("link",{rel:"icon",href:j.prefix+e(4691)})]}),(0,t.jsx)(Nn,{area:"nav"}),i,(0,t.jsx)(U,{area:"left"})]})}},9008:function(n,i,e){n.exports=e(5443)},1163:function(n,i,e){n.exports=e(387)},5672:function(n){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPiAgICA8cGF0aCBkPSJNMTksM0g1QzMuODk3LDMsMywzLjg5NywzLDV2MTRjMCwxLjEwMywwLjg5NywyLDIsMmgxNGMxLjEwMywwLDItMC44OTcsMi0yVjVDMjEsMy44OTcsMjAuMTAzLDMsMTksM3ogTTE1LDE5aC0ydi0zbDEtMSBsMSwxVjE5eiBNMTUsOEg5VjZoNlY4eiBNMTksMTloLTJ2LTNsMS0xbDEsMVYxOXoiLz48L3N2Zz4="},5238:function(n){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPiAgICA8cGF0aCBkPSJNMjAsNmgtOGwtMi0ySDRDMi45LDQsMiw0LjksMiw2djEyYzAsMS4xLDAuOSwyLDIsMmgxNmMxLjEsMCwyLTAuOSwyLTJWOEMyMiw2LjksMjEuMSw2LDIwLDZ6Ii8+PC9zdmc+"},5256:function(n){n.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik0gMTIgMi4wOTk2MDk0IEwgMSAxMiBMIDQgMTIgTCA0IDIxIEwgMTAgMjEgTCAxMCAxNSBMIDE0IDE1IEwgMTQgMjEgTCAyMCAyMSBMIDIwIDEyIEwgMjMgMTIgTCAxMiAyLjA5OTYwOTQgeiIvPjwvc3ZnPg=="},3178:function(n){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDE0IDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMyAxTDcgN0wxIDEiIHN0cm9rZT0iIzIxMjEyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},1186:function(n){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzQuMDc1IDM0LjA3NSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzQuMDc1IDM0LjA3NTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjQuNTcsMzQuMDc1Yy0wLjUwNSwwLTEuMDExLTAuMTkxLTEuMzk2LTAuNTc3TDguMTEsMTguNDMyYy0wLjc3MS0wLjc3MS0wLjc3MS0yLjAxOSwwLTIuNzkNCgkJCUwyMy4xNzQsMC41NzhjMC43NzEtMC43NzEsMi4wMi0wLjc3MSwyLjc5MSwwczAuNzcxLDIuMDIsMCwyLjc5bC0xMy42NywxMy42NjlsMTMuNjcsMTMuNjY5YzAuNzcxLDAuNzcxLDAuNzcxLDIuMDIxLDAsMi43OTINCgkJCUMyNS41OCwzMy44ODMsMjUuMDc1LDM0LjA3NSwyNC41NywzNC4wNzV6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="},9189:function(n){n.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPjxwYXRoIGQ9Ik0gNiAyIEMgNC44NDQ0NDQ0IDIgNCAyLjk2NjY2NjcgNCA0IEwgNCAyMi4wMzkwNjIgTCAxMiAxOS4wNjY0MDYgTCAyMCAyMi4wMzkwNjIgTCAyMCAyMC41OTk2MDkgTCAyMCA0IEMgMjAgMy40Nzc3Nzc4IDE5LjgwODY3MSAyLjk0NTM4OTkgMTkuNDMxNjQxIDIuNTY4MzU5NCBDIDE5LjA1NDYxIDIuMTkxMzI4OSAxOC41MjIyMjIgMiAxOCAyIEwgNiAyIHoiLz48L3N2Zz4="},1147:function(n){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSIjMDAwMDAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiPiAgICA8cGF0aCBkPSJNMTksM0g1QzMuODk3LDMsMywzLjg5NywzLDV2MTRjMCwxLjEwMywwLjg5NywyLDIsMmgxNGMxLjEwMywwLDItMC44OTcsMi0yVjVDMjEsMy44OTcsMjAuMTAzLDMsMTksM3ogTTYuMjc3LDcuNTc4IGMwLjI3OC0wLjM2NywwLjY5OS0wLjU5NiwxLjE1OC0wLjU3N0M4LjEyMSw3LjAyOSw4LjUsNy41MjIsOC41LDcuNTIyczAuMzc5LTAuNDkzLDEuMDY0LTAuNTIxYzAuNDYtMC4wMTksMC44ODEsMC4yMSwxLjE1OCwwLjU3NyBjMC45NjYsMS4yNzYtMC44NjMsMi43NjktMS4yOTMsMy4xN2MtMC4yNTcsMC4yNC0wLjU3NSwwLjUyNS0wLjc2NCwwLjY5M2MtMC4wOTUsMC4wODUtMC4yMzYsMC4wODUtMC4zMzEsMCBjLTAuMTktMC4xNjktMC41MDctMC40NTQtMC43NjQtMC42OTNDNy4xNCwxMC4zNDcsNS4zMTEsOC44NTQsNi4yNzcsNy41Nzh6IE0xOCwxN0g2di0yaDEyVjE3eiBNMTgsMTNoLTZ2LTJoNlYxM3ogTTE4LDloLTRWN2g0Vjl6Ii8+PC9zdmc+"},368:function(n){n.exports="/_next/static/images/grass-71de26fe3d0bd693956da68091d304be.jpeg"},1428:function(n){n.exports="/_next/static/images/logo-84b330ed17e4ae0851764a33f678349d.png"},4691:function(n){n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZyBmaWxsPSIjNzY0QUJDIj48cGF0aCBkPSJNNjUuNiA2NS40YzIuOS0uMyA1LjEtMi44IDUtNS44LS4xLTMtMi42LTUuNC01LjYtNS40aC0uMmMtMy4xLjEtNS41IDIuNy01LjQgNS44LjEgMS41LjcgMi44IDEuNiAzLjctMy40IDYuNy04LjYgMTEuNi0xNi40IDE1LjctNS4zIDIuOC0xMC44IDMuOC0xNi4zIDMuMS00LjUtLjYtOC0yLjYtMTAuMi01LjktMy4yLTQuOS0zLjUtMTAuMi0uOC0xNS41IDEuOS0zLjggNC45LTYuNiA2LjgtOC0uNC0xLjMtMS0zLjUtMS4zLTUuMS0xNC41IDEwLjUtMTMgMjQuNy04LjYgMzEuNCAzLjMgNSAxMCA4LjEgMTcuNCA4LjEgMiAwIDQtLjIgNi0uNyAxMi44LTIuNSAyMi41LTEwLjEgMjgtMjEuNHoiLz48cGF0aCBkPSJNODMuMiA1M2MtNy42LTguOS0xOC44LTEzLjgtMzEuNi0xMy44SDUwYy0uOS0xLjgtMi44LTMtNC45LTNoLS4yYy0zLjEuMS01LjUgMi43LTUuNCA1LjguMSAzIDIuNiA1LjQgNS42IDUuNGguMmMyLjItLjEgNC4xLTEuNSA0LjktMy40SDUyYzcuNiAwIDE0LjggMi4yIDIxLjMgNi41IDUgMy4zIDguNiA3LjYgMTAuNiAxMi44IDEuNyA0LjIgMS42IDguMy0uMiAxMS44LTIuOCA1LjMtNy41IDguMi0xMy43IDguMi00IDAtNy44LTEuMi05LjgtMi4xLTEuMSAxLTMuMSAyLjYtNC41IDMuNiA0LjMgMiA4LjcgMy4xIDEyLjkgMy4xIDkuNiAwIDE2LjctNS4zIDE5LjQtMTAuNiAyLjktNS44IDIuNy0xNS44LTQuOC0yNC4zeiIvPjxwYXRoIGQ9Ik0zMi40IDY3LjFjLjEgMyAyLjYgNS40IDUuNiA1LjRoLjJjMy4xLS4xIDUuNS0yLjcgNS40LTUuOC0uMS0zLTIuNi01LjQtNS42LTUuNGgtLjJjLS4yIDAtLjUgMC0uNy4xLTQuMS02LjgtNS44LTE0LjItNS4yLTIyLjIuNC02IDIuNC0xMS4yIDUuOS0xNS41IDIuOS0zLjcgOC41LTUuNSAxMi4zLTUuNiAxMC42LS4yIDE1LjEgMTMgMTUuNCAxOC4zIDEuMy4zIDMuNSAxIDUgMS41LTEuMi0xNi4yLTExLjItMjQuNi0yMC44LTI0LjYtOSAwLTE3LjMgNi41LTIwLjYgMTYuMS00LjYgMTIuOC0xLjYgMjUuMSA0IDM0LjgtLjUuNy0uOCAxLjgtLjcgMi45eiIvPjwvZz48L3N2Zz4K"}}]);