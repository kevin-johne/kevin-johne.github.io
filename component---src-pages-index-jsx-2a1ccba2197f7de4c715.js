(self.webpackChunkkevin_johne=self.webpackChunkkevin_johne||[]).push([[230],{2005:function(M,I,g){"use strict";g.d(I,{_:function(){return L}});var L=(0,g(7294).createContext)({transformPagePoint:function(M){return M},isStatic:!1,reducedMotion:"never"})},1751:function(M,I,g){"use strict";g.d(I,{h:function(){return C}});var L=g(7294);function C(M){var I=(0,L.useRef)(null);return null===I.current&&(I.current=M()),I.current}},8614:function(M,I,g){"use strict";g.d(I,{qY:function(){return N},ZP:function(){return o},iW:function(){return n},$B:function(){return c}});var L=1/60*1e3,C="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()},A="undefined"!=typeof window?function(M){return window.requestAnimationFrame(M)}:function(M){return setTimeout((function(){return M(C())}),L)};var u=!0,t=!1,i=!1,j={delta:0,timestamp:0},D=["read","update","preRender","render","postRender"],w=D.reduce((function(M,I){return M[I]=function(M){var I=[],g=[],L=0,C=!1,A=!1,u=new WeakSet,t={schedule:function(M){var A=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&C,t=A?I:g;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&u.add(M),-1===t.indexOf(M)&&(t.push(M),A&&C&&(L=I.length)),M},cancel:function(M){var I=g.indexOf(M);-1!==I&&g.splice(I,1),u.delete(M)},process:function(i){if(C)A=!0;else{C=!0;var j=[g,I];if(I=j[0],(g=j[1]).length=0,L=I.length)for(var D=0;D<L;D++){var w=I[D];w(i),u.has(w)&&(t.schedule(w),M())}C=!1,A&&(A=!1,t.process(i))}}};return t}((function(){return t=!0})),M}),{}),e=D.reduce((function(M,I){var g=w[I];return M[I]=function(M){var I=arguments.length>1&&void 0!==arguments[1]&&arguments[1],L=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t||s(),g.schedule(M,I,L)},M}),{}),N=D.reduce((function(M,I){return M[I]=w[I].cancel,M}),{}),n=D.reduce((function(M,I){return M[I]=function(){return w[I].process(j)},M}),{}),y=function(M){return w[M].process(j)},T=function M(I){t=!1,j.delta=u?L:Math.max(Math.min(I-j.timestamp,40),1),j.timestamp=I,i=!0,D.forEach(y),i=!1,t&&(u=!1,A(M))},s=function(){t=!0,u=!0,i||A(T)},c=function(){return j},o=e},3162:function(M,I,g){"use strict";g.r(I),g.d(I,{default:function(){return S}});var L=g(7294),C=g(3279),A=g.n(C),u=g(1074),t=g(6778),i=g(9316);var j=g(8614),D=g(1751),w=g(2005),e="undefined"!=typeof performance?function(){return performance.now()}:function(){return Date.now()};var N=u.default.div.withConfig({displayName:"moon__MoonWrapper",componentId:"sc-1pg2es0-0"})(["position:absolute;top:50%;left:50%;height:","px;width:","px;background-color:#f2f2f2;border-radius:100%;transform:scale(0);user-select:none;img{position:absolute;top:50%;left:5px;transform:translateY(-50%);width:","px;}"],40,40,30),n=function(M){var I,g=M.children,C=M.radius,A=M.diagonal,u=M.startPosition,t=M.canvas,n=(0,L.useRef)(null),y=(0,L.useState)(null),T=y[0],s=y[1],c=u*Math.PI/180,o=1,x=0;(0,L.useEffect)((function(){t&&s(t.current.getContext("2d"))}),[t,s]),(0,L.useEffect)((function(){T&&(T.fillStyle=i.XF)}),[T]);var r,S,a;return r=function(M){void 0===I&&(I=M),M-I<=25||function(M){var I=Math.sin(M/1e3+c)*C*A;I<=x&&(o=-1),I>=x&&(o=1);var g=o*Math.sqrt(Math.pow(C,2)-Math.pow(I/A,2))-I/A,L=I/Math.sqrt(Math.pow(I,2)+Math.pow(g,2)),u=Math.sin(Math.asin(L))+1.1,i=I-20,j=g-20;n.current&&(n.current.style.transform="translateY("+j+"px) translateX("+i+"px) scale("+u+")",n.current.style.zIndex=""+o),x=I,T&&T.fillRect(I+t.current.width/2,g+t.current.height/2,u/2,u/2)}(.3*(I-M))},S=(0,D.h)(e),a=(0,L.useContext)(w._).isStatic,(0,L.useEffect)((function(){if(!a){var M=function(M){var I=M.timestamp;r(I-S)};return j.ZP.update(M,!0),function(){return j.qY.update(M)}}}),[r]),L.createElement(N,{ref:n},g)},y=g(1651),T=u.default.div.withConfig({displayName:"teaser__Wrapper",componentId:"sc-18nsksg-0"})(["position:relative;min-height:calc(100vh - 90px);display:flex;flex-direction:column;justify-content:center;align-items:start;"]),s=u.default.div.withConfig({displayName:"teaser__TeaserContent",componentId:"sc-18nsksg-1"})(["h1{font-size:24px;margin:0 0 20px;}h2{font-family:",";font-size:18px;color:",";margin:0 0 20px;}@media ","{margin-bottom:50px;h1{display:inline-flex;justify-content:center;align-items:center;margin:auto 0;height:70vh;width:100%;}}@media ","{padding-left:20%;width:70%;h1{font-size:36px;padding-top:0;padding-bottom:0;}h2{font-size:20px;}}"],i.LZ.copy,i.u1,(0,y.e)(y.g.default,y.g.small),(0,y.e)(y.g.small)),c=u.default.canvas.withConfig({displayName:"teaser__Canvas",componentId:"sc-18nsksg-2"})(["position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;"]),o=u.default.div.withConfig({displayName:"teaser__Globe",componentId:"sc-18nsksg-3"})(["position:absolute;pointer-events:none;width:80%;height:70%;top:0;right:0;@media ","{width:80%;height:100%;}"],(0,y.e)(y.g.medium)),x=function(M){var I=M.title,g=M.subtitle,C=(0,L.useRef)(null),u=(0,L.useRef)(null),i=(0,L.useState)(0),j=i[0],D=i[1],w=(0,L.useState)(2),e=w[0],N=w[1],y=function(){var M=u.current.getBoundingClientRect(),I=M.width/M.height,g=Math.min(M.width,M.height)/(2+I);C.current.height=M.height,C.current.width=M.width,D(g),N(I)};return(0,L.useEffect)((function(){y()}),[]),(0,L.useEffect)((function(){var M=A()(y,2e3);return window.addEventListener("resize",M),function(){window.removeEventListener("resize",M)}}),[]),L.createElement(T,null,L.createElement(s,null,L.createElement("h1",null,I),L.createElement("h2",null,g),L.createElement(t.Un,{to:"/work"},"View my Work")),L.createElement(o,{ref:u},L.createElement(c,{ref:C}),L.createElement(n,{radius:j,diagonal:e,startPosition:"135"},L.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDEwOS43NDkyNiAxMDIuMzYyNTMiCiAgIGhlaWdodD0iMTAyLjM2MjUzbW0iCiAgIHdpZHRoPSIxMDkuNzQ5MjZtbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTQuMzQ5MTg5LC04MS43NzcwNjYpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ3LjU5MDk4NCwxMy45MTE0MTIpIgogICAgICAgaWQ9ImxheWVyMS0xIj4KICAgICAgPGcKICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMywtMzI3LjQ1NTg5LDIxLjMzMjAyNikiCiAgICAgICAgIGlkPSJnOTgiPgogICAgICAgIDxwYXRoCiAgICAgICAgICAgc3R5bGU9ImZpbGw6IzAwZDI2NCIKICAgICAgICAgICBkPSJtIDE2MjAuMjcxNCwyMDIuNTU3MTQgYyAtMi41LC0xLjkgLTUuMSwtMy43IC04LjMsLTUuOCAtMS40LC0wLjkgLTIuNywtMS43IC00LjEsLTIuNSAtMi44LC0xLjcgLTUuNywtMy4yIC04LjYsLTQuNiBsIC0yLjgsLTEuNCBjIC0zOC40LC0xNy44IC04Ny42LC0xNi45IC0xMjUuOCw1LjkgLTM4LjIsLTIyLjcgLTg2LjksLTIzLjkgLTEyNi4zLC01LjYgbCAtMi4zLDEuMSBjIC0zLDEuNSAtNS44LDMgLTguNiw0LjYgLTEuNSwwLjkgLTIuOCwxLjcgLTQuMiwyLjYgLTMuMSwyIC01LjcsMy44IC04LjIsNS43IC0zNi4yLDI3LjMgLTU3LjksNzQuMyAtNTcuOSwxMjUuOCAwLjcsMTE2LjYgMTM1LjYsMjIzLjEgMjA1LjYsMjM0LjEgbCAxLjgsMC4zIDEuOCwtMC4zIGMgNzAsLTExLjEgMjA0LjksLTExNy42IDIwNS42LC0yMzQuMiAwLjEsLTUxLjMgLTIxLjUsLTk4LjMgLTU3LjcsLTEyNS43IHoiCiAgICAgICAgICAgaWQ9InBhdGgyMiIgLz4KICAgICAgICA8ZwogICAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNDguNTcxNCwxNjIuODU3MTQpIgogICAgICAgICAgIGlkPSJnMzIiPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnMzAiPgogICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMDA5NjVhIgogICAgICAgICAgICAgICBkPSJtIDIyOS4xLDM4NS40IGMgMi40LC0xIDQuOCwtMi4xIDcuMiwtMy4yIDAuOSwtMC40IDEuNywtMC45IDIuNiwtMS4zIDEuMywtMC42IDIuNiwtMS4zIDMuOSwtMiAxLjQsLTAuNyAyLjgsLTEuNSA0LjIsLTIuMiAwLjcsLTAuNCAxLjMsLTAuNyAyLC0xLjEgMjMuOCwtMTMuNCA0NC43LC0zMS45IDYxLC01My44IDE5LjIsLTI2IDMyLC01Ny4xIDM1LjcsLTg5LjMgMy42LC0zMS41IC0wLjgsLTY0LjggLTE1LjQsLTkzLjEgLTEwLjUsLTIwLjEgLTI2LjcsLTM4LjEgLTQ2LjksLTQ4LjcgLTExLjIsLTUuOCAtMjMuOCwtOS43IC0zNi43LC0xMC45IC0yMy40LC0yLjYgLTQ2LjksMy42IC02NC4zLDIyLjEgLTcuNyw4LjIgLTEzLjYsMTguOSAtMTYuNywzMS44IGwgLTAuMSwwLjQgLTAuMywxLjIgLTAuMywxLjIgLTAuMywxLjIgLTAuMiwxLjIgLTAuMiwxLjIgYyAtMC4xLDAuNiAtMC4yLDEuMiAtMC4zLDEuOSAtMC4xLDEuMSAtMC4zLDIuMyAtMC40LDMuNCAtMC4xLDEuMiAtMC4xLDIuMyAtMC4yLDMuNSAwLDAuNSAwLDAuOSAwLDEuMiAxLjMsLTMxIDI2LjgsLTU1LjggNTguMiwtNTUuOCAzMi4yLDAgNTguMiwyNi4xIDU4LjIsNTguMyAwLDguNyAtMS45LDE2LjkgLTUuMywyNC4zIGwgLTAuNCwxLjMgYyAtMTEuNiwzMS44IC0zOS43LDYyLjkgLTczLjksNzYuMSAtMTEuNSw0LjQgLTIzLjYsNi45IC0zNi4xLDYuOSAtMi4yLDAgLTQuNCwtMC4xIC02LjcsLTAuMiAtMSwwIC0yLC0wLjEgLTMsLTAuMiAtMS43LC0wLjEgLTMuNCwtMC4zIC01LC0wLjUgLTEuMywtMC4xIC0yLjYsLTAuMyAtMy44LC0wLjUgLTEuNSwtMC4yIC0yLjksLTAuNSAtNC40LC0wLjcgLTAuOCwtMC4yIC0xLjcsLTAuMyAtMi42LC0wLjUgLTIuMywtMC41IC00LjYsLTEgLTYuOSwtMS42IGwgLTAuOSwtMC4zIGMgLTMyLC04LjcgLTYyLjIsLTI5LjMgLTgzLjMsLTU1LjQgLTAuNSwtMC41IC0wLjksLTEuMSAtMS4zLC0xLjcgLTAuNywtMC45IC0xLjQsLTEuNyAtMiwtMi42IC0wLjYsLTAuOCAtMS4zLC0xLjcgLTEuOSwtMi42IC0wLjUsLTAuNyAtMSwtMS40IC0xLjUsLTIuMSAtMC42LC0wLjggLTEuMiwtMS43IC0xLjcsLTIuNSAtMC42LC0wLjkgLTEuMiwtMS45IC0xLjgsLTIuOCAtMC40LC0wLjYgLTAuOCwtMS4yIC0xLjIsLTEuOCAtMC44LC0xLjQgLTEuNywtMi44IC0yLjUsLTQuMiBMIDMzLjEsMTgwLjEgMzMsMTgwIGMgLTAuMywtMC42IC0wLjcsLTEuMyAtMSwtMS45IC0wLjcsLTEuMyAtMS4zLC0yLjUgLTIsLTMuOCAtMC41LC0xIC0xLC0yIC0xLjUsLTMgbCAtMC4zLC0wLjcgYyAtMC42LC0xLjQgLTEuMiwtMi44IC0xLjcsLTQuMiBsIC0wLjEsLTAuMyBDIDI3LjEsMjc0LjkgMTU0LDM3Ny40IDIyMiwzODguMiB2IDAgYyAyLjIsLTAuOCA0LjMsLTEuNyA2LjUsLTIuNSB6IgogICAgICAgICAgICAgICBpZD0icGF0aDI0IiAvPgogICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMDBkMjY0IgogICAgICAgICAgICAgICBkPSJtIDI4LjIsMTcwLjQgMC4zLDAuNyBjIDAuNSwxIDEsMiAxLjUsMyAwLjYsMS4zIDEuMywyLjUgMiwzLjggMC4zLDAuNiAwLjcsMS4zIDEsMS45IGwgMC4xLDAuMSAwLjUsMC45IGMgMC44LDEuNCAxLjYsMi44IDIuNSw0LjIgMC40LDAuNiAwLjgsMS4yIDEuMiwxLjggMC42LDAuOSAxLjIsMS45IDEuOCwyLjggMC42LDAuOSAxLjEsMS43IDEuNywyLjUgMC41LDAuNyAxLDEuNCAxLjUsMi4xIDAuNiwwLjkgMS4zLDEuNyAxLjksMi42IDAuNywwLjkgMS40LDEuNyAyLDIuNiAwLjQsMC42IDAuOSwxLjEgMS4zLDEuNyAyMS4xLDI2IDUxLjMsNDYuNiA4My4zLDU1LjQgbCAwLjksMC4zIGMgMi4zLDAuNiA0LjYsMS4xIDYuOSwxLjYgMC45LDAuMiAxLjcsMC4zIDIuNiwwLjUgMS41LDAuMyAyLjksMC41IDQuNCwwLjcgMS4zLDAuMiAyLjUsMC40IDMuOCwwLjUgMS43LDAuMiAzLjQsMC40IDUsMC41IDEsMC4xIDIsMC4xIDMsMC4yIDIuMiwwLjEgNC41LDAuMiA2LjcsMC4yIDEyLjUsLTAuMSAyNC42LC0yLjYgMzYuMSwtNi45IDM0LjMsLTEzLjIgNjIuNCwtNDQuMyA3My45LC03Ni4xIGwgMC41LC0xLjMgYyAtOS4yLDIwIC0yOS41LDM0IC01Mi45LDM0IC0yMS41LDAgLTQwLjIsLTExLjYgLTUwLjMsLTI4LjkgbCAtMC43LC0xLjIgYyAtNC42LC04LjMgLTcuMiwtMTcuOSAtNy4yLC0yOC4xIDAsLTAuNyAwLC0xLjQgMCwtMi4xIDAsLTAuNSAwLC0yLjQgMCwtMy40IDAsLTEuMiAwLjEsLTIuNSAwLjIsLTMuNyAwLC0xLjIgMC4xLC0yLjEgMC4yLC0zLjMgMC44LC04LjIgMi44LC0xNi43IDUuMywtMjQuNiAzLjgsLTExLjkgOS40LC0yMy4xIDE2LjQsLTMzLjUgNi45LC0xMC4yIDE1LjIsLTE5LjQgMjQuNCwtMjcuNSA0LjQsLTMuOCA4LjYsLTcgMTIuMSwtOS41IHYgMCAwIEMgMjAzLDMxLjkgMTc5LjksMjQuMyAxNTUsMjQuMyBjIC0xOS44LDAgLTM3LjksNC4xIC01My44LDExLjUgbCAtMC40LDAuMiBjIC0wLjcsMC4zIC0xLjQsMC43IC0yLjEsMSAtMi43LDEuMyAtNS4zLDIuNyAtNy44LDQuMiB2IDAgYyAtMS4zLDAuNyAtMi41LDEuNSAtMy43LDIuMyBsIC0wLjUsMC41IC0wLjEsMC4xIGMgLTE0LDkgLTI1LjksMjAuOSAtMzUuMywzNC44IC00LjIsNi4yIC03LjksMTIuOSAtMTEuMSwxOS44IHYgMCBjIC0yLjIsNC45IC00LjIsMTAgLTYsMTUuMyBsIC0wLjEsMC4zIC0wLjIsMC42IC0wLjIsMC43IC0wLjEsMC4zIGMgLTAuMiwwLjggLTAuNSwxLjYgLTAuNywyLjMgbCAtMC40LDEuMyBjIC0wLjgsMi42IC0xLjQsNS4zIC0yLjEsOCAtMC4zLDEuMyAtMC42LDIuNiAtMC44LDMuOCBsIC0wLjIsMS4xIGMgLTAuMiwxLjIgLTAuNSwyLjQgLTAuNywzLjYgbCAtMC4xLDAuNSAtMC4yLDEuMSBjIC0xLjQsOC44IC0yLjIsMTcuOSAtMi4yLDI3LjIgdiAxIGwgMC4xLDAuMyBjIDAuNywxLjUgMS4yLDMgMS45LDQuMyIKICAgICAgICAgICAgICAgaWQ9InBhdGgyNiIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzAwNDYzZCIKICAgICAgICAgICAgICAgZD0ibSAyODkuMSwyNC42IGMgLTI0LjksMCAtNDcuOSw3LjYgLTY3LjEsMjAuNiAtMy42LDIuNSAtNy43LDUuNyAtMTIuMSw5LjUgLTkuMyw4LjEgLTE3LjUsMTcuMyAtMjQuNCwyNy41IC03LDEwLjMgLTEyLjYsMjEuNiAtMTYuNCwzMy41IC0yLjUsNy45IC00LjUsMTYuMyAtNS4zLDI0LjUgLTAuMSwxLjIgLTAuMiwyLjEgLTAuMiwzLjMgMCwxLjIgLTAuMSwyLjUgLTAuMiwzLjcgMCwxIDAsMi45IDAsMy40IDAsMC43IDAsMS40IDAsMi4xIDAsMTAuMiAyLjYsMTkuOCA3LjIsMjguMSBsIDAuNywxLjIgYyAxMC4xLDE3LjMgMjguOSwyOC45IDUwLjMsMjguOSAyMy41LDAgNDMuNywtMTMuOSA1Mi45LC0zMy45IDMuNCwtNy40IDUuMywtMTUuNiA1LjMsLTI0LjMgMCwtMzIuMiAtMjYuMSwtNTguMyAtNTguMiwtNTguMyAtMzEuMywwIC01Ni45LDI0LjggLTU4LjIsNTUuOCAwLC0wLjMgMCwtMC43IDAsLTEuMiAwLC0xLjIgMC4xLC0yLjMgMC4yLC0zLjUgMC4xLC0xLjEgMC4yLC0yLjMgMC40LC0zLjQgMC4xLC0wLjYgMC4yLC0xLjMgMC4zLC0xLjkgbCAwLjIsLTEuMiAwLjIsLTEuMiAwLjIsLTEuMiAwLjMsLTEuMiAwLjMsLTEuMiAwLjEsLTAuNCBjIDMuMSwtMTIuOSA4LjksLTIzLjYgMTYuNywtMzEuOCAxNy40LC0xOC41IDQxLC0yNC43IDY0LjMsLTIyLjEgMTIuOSwxLjMgMjUuNSw1LjEgMzYuNywxMC45IDIwLjIsMTAuNiAzNi41LDI4LjYgNDYuOSw0OC43IDE0LjcsMjguMiAxOSw2MS42IDE1LjQsOTMuMSAtMy43LDMyLjIgLTE2LjUsNjMuMyAtMzUuNyw4OS4zIC0xNi4zLDIxLjkgLTM3LjIsNDAuNCAtNjEsNTMuOCAtMC43LDAuNCAtMS4zLDAuNyAtMiwxLjEgLTEuNCwwLjggLTIuOCwxLjUgLTQuMiwyLjIgLTEuMywwLjcgLTIuNiwxLjMgLTMuOSwyIC0wLjksMC40IC0xLjgsMC45IC0yLjYsMS4zIC0yLjQsMS4xIC00LjgsMi4yIC03LjIsMy4yIGwgLTAuNiwwLjMgYyAtMi4xLDAuOSAtNC4zLDEuNyAtNi41LDIuNSBsIDAuNywtMC4xIDAuNSwtMC4xIDAuMywtMC4xIGggMC4zIGwgMSwtMC4yIGggMC4yIGwgMS4yLC0wLjIgaCAwLjIgbCAxLjEsLTAuMiBoIDAuMiBsIDEuMiwtMC4zIGggMC4yIDAuMiBsIDAuNCwtMC4xIDAuNywtMC4xIGggMC4xIGwgMS4yLC0wLjMgaCAwLjEgMC4xIDAuMSBsIDEuMSwtMC4zIGggMC4xIGwgMC4yLC0wLjEgMS4yLC0wLjMgaCAwLjEgbCAxLjMsLTAuNCAwLjMsLTAuMSAwLjUsLTAuMiAwLjYsLTAuMiAwLjIsLTAuMSB2IDAgaCAwLjEgMC4xIGwgMC4yLC0wLjEgMC40LC0wLjEgMC41LC0wLjIgaCAwLjIgdiAwIDAgbCAxLjMsLTAuNCB2IDAgbCAwLjUsLTAuMiAxLC0wLjQgdiAwIGwgMC4zLC0wLjEgMSwtMC4zIHYgMCBsIDAuMiwtMC4xIGggMC4xIGwgMSwtMC40IDAuNSwtMC4yIDAuNywtMC4yIGMgMC41LC0wLjIgMS4xLC0wLjQgMS42LC0wLjYgbCAwLjQsLTAuMiAwLjIsLTAuMSAwLjYsLTAuMiAwLjgsLTAuMyAwLjEsLTAuMSAxLjMsLTAuNSAwLjMsLTAuMSAwLjEsLTAuMSAxLjIsLTAuNSBoIDAuMSAwLjEgbCAxLC0wLjQgMC40LC0wLjIgdiAwIDAgMCBsIDAuMywtMC4xIDEuMiwtMC41IDAuMSwtMC4xIDEuNCwtMC42IDAuMSwtMC4xIGMgMS4yLC0wLjUgMi4zLC0xLjEgMy41LC0xLjYgbCAwLjIsLTAuMSAwLjksLTAuNCBoIDAuMSB2IDAgYyAxLjIsLTAuNiAyLjQsLTEuMiAzLjcsLTEuOCBsIDAuOSwtMC41IHYgMCBsIDAuNywtMC4zIDAuNiwtMC4zIDAuNywtMC40IDAuNiwtMC4zIDEsLTAuNSAxLjIsLTAuNiB2IDAgbCAwLjEsLTAuMSAwLjEsLTAuMSAwLjIsLTAuMSBjIDIuMSwtMS4yIDQuMiwtMi4zIDYuMywtMy42IHYgMCBsIDAuMywtMC4yIGMgMS40LC0wLjggMi44LC0xLjYgNC4yLC0yLjUgbCAwLjMsLTAuMSAwLjEsLTAuMSB2IDAgbCAwLjMsLTAuMiBjIDAuNywtMC41IDEuNSwtMC45IDIuMiwtMS40IGwgMC42LC0wLjQgMC4xLC0wLjEgMC41LC0wLjMgMC4yLC0wLjEgYyAxLjQsLTAuOSAyLjksLTEuOCA0LjMsLTIuNyB2IDAgbCAwLjMsLTAuMiAxLC0wLjcgdiAwIDAgYyAyLjIsLTEuNSA0LjQsLTIuOSA2LjYsLTQuNSBoIDAuMSBjIDEuMiwtMC44IDIuMywtMS42IDMuNSwtMi40IGwgMC4xLC0wLjEgMC4xLC0wLjEgYyAxLC0wLjcgMiwtMS41IDMuMSwtMi4yIHYgMCBsIDAuMiwtMC4xIGMgMy4xLC0yLjMgNi4zLC00LjcgOS40LC03LjIgdiAwIDAgYyA2LjUsLTUuMSAxMi45LC0xMC42IDE5LjEsLTE2LjMgbCAwLjIsLTAuMiB2IDAgYyA0NS40LC00MS45IDgzLjIsLTk5LjYgODMuMiwtMTU5LjEgMC4yLC03OC4yIC01MSwtMTQxIC0xMjguNiwtMTQxIgogICAgICAgICAgICAgICBpZD0icGF0aDI4IiAvPgogICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnNjIiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="})),L.createElement(n,{radius:j,diagonal:e,startPosition:"180"},L.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDE2LjY2ODc0OSAxNC4yODc0OTkiCiAgIGhlaWdodD0iMTQuMjg3NDk5bW0iCiAgIHdpZHRoPSIxNi42Njg3NDltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiPgogICAgPGxpbmVhckdyYWRpZW50CiAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgIHgxPSI0NSIKICAgICAgIHkxPSIyNi43MDI2MzYiCiAgICAgICB4Mj0iNDUiCiAgICAgICB5Mj0iNDQuODU1NDciCiAgICAgICBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0b3AtY29sb3I9IiMyMjZFRkYiCiAgICAgICAgIG9mZnNldD0iMCUiCiAgICAgICAgIGlkPSJzdG9wMTIiIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0b3AtY29sb3I9IiMwRDVBRjEiCiAgICAgICAgIG9mZnNldD0iMTAwJSIKICAgICAgICAgaWQ9InN0b3AxNCIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQKICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgeDE9IjM2IgogICAgICAgeTE9IjQ1IgogICAgICAgeDI9IjI3IgogICAgICAgeTI9IjU0IgogICAgICAgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICA8c3RvcAogICAgICAgICBzdG9wLWNvbG9yPSIjMDAwMDAwIgogICAgICAgICBzdG9wLW9wYWNpdHk9IjAiCiAgICAgICAgIG9mZnNldD0iMCUiCiAgICAgICAgIGlkPSJzdG9wMTciIC8+CiAgICAgIDxzdG9wCiAgICAgICAgIHN0b3AtY29sb3I9IiMwMDAwMDAiCiAgICAgICAgIG9mZnNldD0iMTAwJSIKICAgICAgICAgaWQ9InN0b3AxOSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcxLjk0OTEyOSwtNTkuMjkwNzc0KSIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxnCiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxIgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMyw3MS45NDkxMjksNTkuMjkwNzc0KSIKICAgICAgIGlkPSJfRm91bmRhdGlvbnMvTG9nb3MvU2t5bGFyay1Mb2dvLUgtVGV4dCI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJHcm91cC1Db3B5Ij4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJmaWxsOiMwZDVhZjEiCiAgICAgICAgICAgZD0iTSAwLDU0IEMgMCw0NC4xNTgxNjMgNy44OTgzODA5LDM2LjE2MTM2MyAxNy43MDIzMzMsMzYuMDAyNDExIEwgMTgsMzYgaCA0NSBjIDAsOS44NDE4MzcgLTcuODk4MzgxLDE3LjgzODYzNyAtMTcuNzAyMzMzLDE3Ljk5NzU4OSBMIDQ1LDU0IFoiCiAgICAgICAgICAgaWQ9IlBhdGgiIC8+CiAgICAgICAgPHBhdGgKICAgICAgICAgICBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50LTEpIgogICAgICAgICAgIGQ9Ik0gNDQuOTk3MDI0LDM1LjY2OTMzMSBDIDQ0LjgyMDY4NCwyNS44ODA2NjIgMzYuODMwNzkyLDE4IDI3LDE4IHYgMCBoIDE4IGMgOS45NDEyNSwwIDE4LDguMDU4NzUgMTgsMTggbCAtMC4wMDI0LDAuMjk3NjY3IEMgNjIuODQwMjI2LDQ2LjAwMzU4IDU1LjAwMDk5LDUzLjg0MTg0MiA0NS4yOTQ2OTYsNTMuOTk3NjM2IEwgNDUsNTQgViAzNiBaIgogICAgICAgICAgIGlkPSJDb21iaW5lZC1TaGFwZSIgLz4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJmaWxsOiMwZTE4MjU7ZmlsbC1ydWxlOm5vbnplcm8iCiAgICAgICAgICAgZD0ibSAyNywxOCBjIDkuOTQxMjUsMCAxOCw4LjA1ODc1IDE4LDE4IEggMjcgQyAxNy4wNTg3NSwzNiA5LDI3Ljk0MTI1IDksMTggTCA5LjAwMjk4LDE3LjY2OTMzMSBDIDkuMTc5MzE1Nyw3Ljg4MDY2MTYgMTcuMTY5MjA4LDAgMjcsMCB2IDAgaCAzNiBjIDAsOS45NDEyNSAtOC4wNTg3NSwxOCAtMTgsMTggdiAwIHoiCiAgICAgICAgICAgaWQ9InBhdGgyNyIgLz4KICAgICAgICA8cG9seWdvbgogICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjAuMztmaWxsOnVybCgjbGluZWFyR3JhZGllbnQtMikiCiAgICAgICAgICAgaWQ9IlJlY3RhbmdsZS1Db3B5LTIiCiAgICAgICAgICAgdHJhbnNmb3JtPSJyb3RhdGUoMTgwLDM2LDQ1KSIKICAgICAgICAgICBwb2ludHM9IjQ1LDU0IDI3LDU0IDI3LDM2ICIgLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="})),L.createElement(n,{radius:j,diagonal:e,startPosition:"225"},L.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC45OSIgaGVpZ2h0PSIxNi4yMyI+CiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGQ9Ik0xMi41IDEyLjE4aDEyLjQ5VjQuMDNoLTEyLjV6IiBmaWxsPSIjYzgxMDJlIi8+CiAgICA8cGF0aCBkPSJNMCAxMi4xOGgxMi41VjQuMDVIMHoiIGZpbGw9IiNmZmYiLz4KICAgIDxwYXRoIGQ9Ik0wIDQuMDRoMjQuOTlWMEgwem0wIDEyLjE4aDI0Ljk5di00LjA2SDB6IiBmaWxsPSIjMDQxZTQyIi8+CiAgPC9nPgo8L3N2Zz4K"})),L.createElement(n,{radius:j,diagonal:e,startPosition:"270"},L.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAuMDEiIGhlaWdodD0iMjI5LjIiIHZpZXdCb3g9IjAgMCA3OS4zOCA2MC42NCI+CiAgPHBhdGggZD0iTTczLjcgNTkuMWE0LjAxIDQuMDEgMCAwIDEtMy4xNy0xLjUzTDQ0LjgxIDI0LjM1bDExLjM1LTEwLjk0YTMyMS4zNSAzMjEuMzUgMCAwIDEgOS4wNi04LjM2YzIuODktMi41NiA3LjM4LTMuNiAxMS4yNS0zLjYuMDQgMCAwLTEuNCAwLTEuNEg1NC4zdjEuMzJsMy40Mi4wNmMxLjIyLjAxIDIuNDMuMDkgMy42My4zLjkxLjE0IDEuNDIgMS4yLjk1IDJhMjAuNTIgMjAuNTIgMCAwIDEtMy4yIDQuMjhjLTUuNyA1LjgtMjAuMiAxOS43NC0yMS44NSAyMS4zMi0uMDMtMi44NiAwLTI3LjkyIDAtMjcuOTJoOC42MlYwSDIwLjc1djEuNDFoNy42NGwuMDIgNTcuNjRoLTcuOTR2MS41N2MwLS4wMiAyNS4zIDAgMjUuMyAwVjU5LjFoLTguNThWMzEuODVsMS4wOC0uOSAxLjggMi4yNEw1OS44IDU5LjA3aC03Ljc3djEuNTdoMjYuNzF2LTEuNTNINzMuN3oiLz4KICA8cGF0aCBkPSJNMjAuNTggMTUuMDJhMTAuNjYgMTAuNjYgMCAwIDAtOS4xLTEuODQgMTMuODUgMTMuODUgMCAwIDAtNi45NyA0LjM5IDE4Ljk3IDE4Ljk3IDAgMCAwLTMuMzUgMTguOGMxLjQ5IDMuOTQgNC4yOCA3LjU2IDguMjMgOS4yNWExMy41NyAxMy41NyAwIDAgMCA1LjA0IDEuMDggNS4wNyA1LjA3IDAgMCAwIC43LS4wNCAxMi4xMiAxMi4xMiAwIDAgMCA2LjA3LTIuNTljLjY0LS41MiAxLjUzLTEuMjEgMi4zNy0uNjYuNjEuNC44MyAxLjk1LjgzIDEuOTZoLjgzVjM0LjU2aC0uODNsLS4wNiAxLjM3YTkuMzcgOS4zNyAwIDAgMS0uOTYgMy41M2wtLjYgMS4xMWMtMiAzLjY1LTYuNSA2LjI4LTEwLjY5IDQuOTZhNy42OCA3LjY4IDAgMCAxLTQuNzQtNC4zNWMtMi4xNS01LjE2LTIuNDctMTAuOTItMS43LTE2LjRhMzYuNDEgMzYuNDEgMCAwIDEgLjktNC40IDkuNzggOS43OCAwIDAgMSA0LjEtNS42NmMuMzgtLjI1LjgtLjQ0IDEuMjMtLjU4YTkuMDMgOS4wMyAwIDAgMSA5Ljg0IDIuOTYgMTMuMTUgMTMuMTUgMCAwIDEgMi42NCA2LjEybC4xNS45NGguNzd2LTkuOGgtLjlsLS4wMS41OGMtLjAzLjk3LTEuMDggMS4zLTEuOTEgMS4xNS0uNzQtLjEyLTEuMy0uNjItMS44OC0xLjA3Wk03Ny45Ni4xMnYuMTVoLS40VjEuNGgtLjE1Vi4yN2gtLjM5Vi4xMlptLjMxIDBoLjIzbC4zMyAxLjA4LjMzLTEuMDhoLjIyVjEuNGgtLjE1Vi4zMkw3OC45IDEuNGgtLjE1TDc4LjQyLjMyVjEuNGgtLjE1eiIvPgo8L3N2Zz4K"})),L.createElement(n,{radius:j,diagonal:e,startPosition:"315"},L.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjQzOXB4IiBoZWlnaHQ9IjQ2MnB4IiB2aWV3Qm94PSIwIDAgNDM5IDQ2MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8dGl0bGU+U3Ryb2VyPC90aXRsZT4NCiAgICA8ZyBpZD0iU3RhcnRzZWl0ZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSJTdGFydHNlaXRlX0Rlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MTQuMDAwMDAwLCAtNDA5OS4wMDAwMDApIiBmaWxsPSIjRkY1QTEwIj4NCiAgICAgICAgICAgIDxnIGlkPSJjb21wb25lbnRzL2Rlc2t0b3AvaW52ZXN0b3ItcmVsYXRpb25zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMzkzMC40Nzg5MDkpIj4NCiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTM5LjYxMTAzLDE2OC41MjEwOTEgTDkxNC4wMTYyLDIzNC45NzU0MiBMOTA3Ljk3ODk5NCwyMzguNjA2MDM2IEM4ODUuMDY3OTkyLDI1My41MDU2MyA4MzcuNTI0Mjg3LDI5MS45MDU3MTggODIwLjMxMjkwNCwzNjQuNzc2OTQ4IEM4MTQuNTczOSwzODguOTA3ODc0IDgxNCw0MTAuMTczNzEgODE0LDQxOC43OTE0OTYgQzgxNCw1MTAuNjcxMzg5IDg2NC40MjQ0NTksNTg0LjU3ODMzIDk1MS4wMjcxNDUsNjE1LjU2NTIwOCBDOTg5LjU1MTYxMiw2MjkuMzY3MTc1IDEwMjIuOTA1MzUsNjMwLjUyMTA5MSAxMDM4LjQ1MTMsNjMwLjUyMTA5MSBDMTE2My4wNDM5NCw2MzAuNTIxMDkxIDEyNTMsNTQxLjY0NzAwOSAxMjUzLDQxNy4wNDA5MiBDMTI1MywzOTAuNTUxNTAxIDEyNDguOTcxNDQsMzY5LjI3NDQwOCAxMjQ2LjY5MjcyLDM2MC4xNzI1NCBDMTIyOS41MTUxLDI5NC4yNzU0NjggMTE4MS45NjAxNCwyNTUuODUyODY1IDExNjMuMDQ5NTYsMjQzLjIzODU4OCBMMTE0OS4xNDY1NCwyMzQuNDUxOTM2IEwxMTc0LjUwNTA2LDE2OC41MjEwOTEgTDEwNzYuMTMxNzksMTY4LjUyMTA5MSBMMTA2MS40ODA0NSwyMDYuNTU1MzAzIEMxMDUxLjUwNDcyLDIwNS41ODcxMzkgMTA0MS41MzQ2LDIwNS4wNjM2NTUgMTAzMS41MDgyMywyMDUuMzE2OTUzIEwxMDIzLjg4OTk4LDIwNS4zNTA3MjcgTDEwMzcuOTg5OTMsMTY4LjUyMTA5MSBMOTM5LjYxMTAzLDE2OC41MjEwOTEgWiBNMTAwMC4xODkyMSwzNDMuNDQxNDA5IEMxMDE0LjgwOTE4LDMzNi4xNDI5MTMgMTAyNy41ODYxNSwzMzUuNTM1MTc0IDEwMzMuNjc4NzQsMzM1LjUzNTE3NCBDMTA2Ni42MjE1OCwzMzQuOTIxODA3IDEwOTMuMzkyOTEsMzU0LjM5MTk2NiAxMTA0LjkyNDMyLDM4NC42OTQ1MTEgQzExMDcuNDM4LDM5MC4zMzg2MDYgMTExMSw0MDEuNzY3NDc3IDExMTEsNDE4LjUyNTMxOSBDMTExMSw0NjUuNTY4ODI0IDEwODEuOTUxNjksNDg3LjQ1MzA1NyAxMDY2LjAxMjg4LDQ5NC43OTY1NzEgQzEwNTkuNzQ1NTcsNDk3LjkyNTMwMiAxMDQ5LjM4MDg0LDUwMS41MjEwOTEgMTAzMy4xMjY0MSw1MDEuNTIxMDkxIEM5ODYuMDI1NzY1LDUwMS41MjEwOTEgOTU3LjU5NzQyNCw0NjMuNTE0ODkxIDk1Nyw0MTkuNzEyNjYxIEM5NTcsMzczLjkyOTY1MSA5ODQuMjQ0NzY3LDM1MS40MDM5MTYgMTAwMC4xODkyMSwzNDMuNDQxNDA5IEwxMDAwLjE4OTIxLDM0My40NDE0MDkgWiIgaWQ9IkZpbGwtMSIvPg0KICAgICAgICAgICAgPC9nPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+DQo="})),L.createElement(n,{radius:j,diagonal:e,startPosition:"360"},L.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMi40NCIgaGVpZ2h0PSIxOC42OCIgdmlld0JveD0iMCAwIDguNTggNC45NCI+CiAgPHBhdGggZD0iTTMuMTYuMzVjLS4yOC42MS42MSAxLjM3LjYxIDEuMzdMMi4wNy42MiAyLjYuNDhWMEgwbDcuNTUgNC45NFY0LjJsLS42OS0uNEM1LjM2IDIuNzQgMy43NyAxLjE1IDMuOTEuNzVjLjA3LS4wNy4xNC0uMDcuMi0uMDdINi44TDUuMzUgMi4wNmwuMzQuMzVMOC42LjE0aC00LjhjLS4yMi0uMTQtLjUgMC0uNjMuMnoiIGZpbGw9IiNmZmEyMDAiLz4KPC9zdmc+Cg=="}))))},r=g(5414),S=function(){return L.createElement(L.Fragment,null,L.createElement(r.q,null,L.createElement("meta",{name:"description",content:"Kevin Guy a freelance frontend developer. He does living style guides, responsive websites, and software engineering. Available for contract work"}),L.createElement("title",null,"Kevin Guy - Freelance Frontend Engineer")),L.createElement(x,{title:"Freelance Frontend Engineer",subtitle:"More than 10 years of experience developing successful eCommerce and business critical applications"}))}},2705:function(M,I,g){var L=g(5639).Symbol;M.exports=L},4239:function(M,I,g){var L=g(2705),C=g(9607),A=g(2333),u=L?L.toStringTag:void 0;M.exports=function(M){return null==M?void 0===M?"[object Undefined]":"[object Null]":u&&u in Object(M)?C(M):A(M)}},7561:function(M,I,g){var L=g(7990),C=/^\s+/;M.exports=function(M){return M?M.slice(0,L(M)+1).replace(C,""):M}},1957:function(M,I,g){var L="object"==typeof g.g&&g.g&&g.g.Object===Object&&g.g;M.exports=L},9607:function(M,I,g){var L=g(2705),C=Object.prototype,A=C.hasOwnProperty,u=C.toString,t=L?L.toStringTag:void 0;M.exports=function(M){var I=A.call(M,t),g=M[t];try{M[t]=void 0;var L=!0}catch(i){}var C=u.call(M);return L&&(I?M[t]=g:delete M[t]),C}},2333:function(M){var I=Object.prototype.toString;M.exports=function(M){return I.call(M)}},5639:function(M,I,g){var L=g(1957),C="object"==typeof self&&self&&self.Object===Object&&self,A=L||C||Function("return this")();M.exports=A},7990:function(M){var I=/\s/;M.exports=function(M){for(var g=M.length;g--&&I.test(M.charAt(g)););return g}},3279:function(M,I,g){var L=g(3218),C=g(7771),A=g(4841),u=Math.max,t=Math.min;M.exports=function(M,I,g){var i,j,D,w,e,N,n=0,y=!1,T=!1,s=!0;if("function"!=typeof M)throw new TypeError("Expected a function");function c(I){var g=i,L=j;return i=j=void 0,n=I,w=M.apply(L,g)}function o(M){return n=M,e=setTimeout(r,I),y?c(M):w}function x(M){var g=M-N;return void 0===N||g>=I||g<0||T&&M-n>=D}function r(){var M=C();if(x(M))return S(M);e=setTimeout(r,function(M){var g=I-(M-N);return T?t(g,D-(M-n)):g}(M))}function S(M){return e=void 0,s&&i?c(M):(i=j=void 0,w)}function a(){var M=C(),g=x(M);if(i=arguments,j=this,N=M,g){if(void 0===e)return o(N);if(T)return clearTimeout(e),e=setTimeout(r,I),c(N)}return void 0===e&&(e=setTimeout(r,I)),w}return I=A(I)||0,L(g)&&(y=!!g.leading,D=(T="maxWait"in g)?u(A(g.maxWait)||0,I):D,s="trailing"in g?!!g.trailing:s),a.cancel=function(){void 0!==e&&clearTimeout(e),n=0,i=N=j=e=void 0},a.flush=function(){return void 0===e?w:S(C())},a}},3218:function(M){M.exports=function(M){var I=typeof M;return null!=M&&("object"==I||"function"==I)}},7005:function(M){M.exports=function(M){return null!=M&&"object"==typeof M}},3448:function(M,I,g){var L=g(4239),C=g(7005);M.exports=function(M){return"symbol"==typeof M||C(M)&&"[object Symbol]"==L(M)}},7771:function(M,I,g){var L=g(5639);M.exports=function(){return L.Date.now()}},4841:function(M,I,g){var L=g(7561),C=g(3218),A=g(3448),u=/^[-+]0x[0-9a-f]+$/i,t=/^0b[01]+$/i,i=/^0o[0-7]+$/i,j=parseInt;M.exports=function(M){if("number"==typeof M)return M;if(A(M))return NaN;if(C(M)){var I="function"==typeof M.valueOf?M.valueOf():M;M=C(I)?I+"":I}if("string"!=typeof M)return 0===M?M:+M;M=L(M);var g=t.test(M);return g||i.test(M)?j(M.slice(2),g?2:8):u.test(M)?NaN:+M}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-2a1ccba2197f7de4c715.js.map