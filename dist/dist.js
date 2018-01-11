!function(e){var t={};function l(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=t,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}([function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var l=0;l<t.length;l++){var i=t[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,l,i){return l&&e(t.prototype,l),i&&e(t,i),t}}();var n=function(){function e(t,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fps=t,this.callback=l,this._loopId=null}return i(e,[{key:"start",value:function(){var e=this,t=1e3/this.fps,l=void 0,i=Date.now();!function n(){e._loopId=window.requestAnimationFrame(n),l=Date.now(),t<l-i&&(i=l-(l-i)%t,e.callback())}()}},{key:"stop",value:function(){window.cancelAnimationFrame(this._loopId)}}]),e}();t.default=n},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=l(2),c=(i=n)&&i.__esModule?i:{default:i};window.Recjs=c.default,t.default=c.default},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(l(3)),n=c(l(4));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function e(t){var l=t.el,c=t.events,s=t.fps,I=t.document;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=["scroll","mousemove","keypress","click","contextmenu"];this.events=c||o,this.events.forEach(function(e){o.includes(e)||console.warn("Unknown event '"+e+"'")}),this.document=I||window.document,this.el=this.document.querySelector(l),this.fps=s||30,this.recorder=new i.default(this.el,this.document,this.events,this.fps),this.player=new n.default(this.el,this.document)}},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=function(){function e(e,t){for(var l=0;l<t.length;l++){var i=t[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,l,i){return l&&e(t.prototype,l),i&&e(t,i),t}}(),c=l(0),s=(i=c)&&i.__esModule?i:{default:i};var I=function(){function e(t,l,i,n){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.document=l,this.events=i,this.fps=n,this._recording=!1,this._data={fps:n,frames:[]},this._dataIndex=0,this._animationId=null,this._mouseX=null,this._mouseY=null,this._clickX=null,this._clickY=null,this._contextX=null,this._contextY=null,this._scrollX=null,this._scrollY=null,this._keypress=null,-1!==i.indexOf("click")&&t.addEventListener("click",function(e){c._clickX=Math.floor(e.clientX-t.getBoundingClientRect().left),c._clickY=Math.floor(e.clientY-t.getBoundingClientRect().top)}),-1!==i.indexOf("contextmenu")&&t.addEventListener("contextmenu",function(e){c._contextX=Math.floor(e.clientX-t.getBoundingClientRect().left),c._contextY=Math.floor(e.clientY-t.getBoundingClientRect().top)}),-1!==i.indexOf("mousemove")&&t.addEventListener("mousemove",function(e){c._mouseX=Math.floor(e.clientX-t.getBoundingClientRect().left),c._mouseY=Math.floor(e.clientY-t.getBoundingClientRect().top)}),-1!==i.indexOf("scroll")&&t.addEventListener("scroll",function(e){c._scrollX=t.scrollLeft,c._scrollY=t.scrollTop}),-1!==i.indexOf("keypress")&&(this.document.addEventListener("keypress",function(e){c._keypress=e.keyCode}),this.document.addEventListener("keydown",function(e){8===e.keyCode&&(c._keypress=8)})),this._loop=new s.default(n,this._appendFrame.bind(this))}return n(e,[{key:"record",value:function(){this._record()}},{key:"isRecording",value:function(){return this._recording}},{key:"stop",value:function(){this.pause(),this._dataIndex=0}},{key:"pause",value:function(){this._recording=!1,this._loop.stop()}},{key:"getData",value:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?JSON.stringify(this._data):this._data}},{key:"_record",value:function(){this._recording=!0,this._loop.start()}},{key:"_appendFrame",value:function(){var e={};-1!==this.events.indexOf("click")&&(e.clickX=this._clickX,e.clickY=this._clickY,this._clickX=null,this._clickY=null),-1!==this.events.indexOf("contextmenu")&&(e.contextX=this._contextX,e.contextY=this._contextY,this._contextX=null,this._contextY=null),-1!==this.events.indexOf("mousemove")&&(e.mouseX=this._mouseX,e.mouseY=this._mouseY),-1!==this.events.indexOf("scroll")&&(e.scrollX=this._scrollX,e.scrollY=this._scrollY),-1!==this.events.indexOf("keypress")&&(e.keypress=this._keypress,this._keypress=null),this._data.frames.push(e)}}]),e}();t.default=I},function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=function(){function e(e,t){for(var l=0;l<t.length;l++){var i=t[l];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,l,i){return l&&e(t.prototype,l),i&&e(t,i),t}}(),c=l(0),s=(i=c)&&i.__esModule?i:{default:i};var I=function(){function e(t,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.document=l,this._dataFrameIndex=0,this._loop=null,this._onEnd=null,this._previousElementFocused=null}return n(e,[{key:"play",value:function(e,t){this.data=e,this._onEnd=t,this._loop=new s.default(e.fps,this._renderFrame.bind(this)),this._loop.start()}},{key:"pause",value:function(){this._loop.stop()}},{key:"stop",value:function(){this.pause(),this._dataFrameIndex=0,this._renderFrame()}},{key:"setFrameIndex",value:function(e){e<this._dataFrameIndex.length?this._dataFrameIndex=e:console.warn("Can't set frame index to "+e+", only "+(this._dataFrameIndex.length-1)+" available!")}},{key:"_renderFrame",value:function(){if(this._dataFrameIndex>this.data.frames.length-1)return this._onEnd&&this._onEnd(),void this.stop();if(0===this._dataFrameIndex){this.el.scrollTop=this.el.scrollLeft=0;var e=this.document.getElementById("recjs-pointer");e&&e.remove()}var t=this.data.frames[this._dataFrameIndex];null!==t.mouseX&&null!==t.mouseY&&this._mouseMove(t.mouseX,t.mouseY),null!==t.clickX&&null!==t.clickY&&this._fireClick(t.clickX,t.clickY),null!==t.contextX&&null!==t.contextY&&this._fireContextMenu(t.contextX,t.contextY),t.scrollY&&(this.el.scrollTop=t.scrollY),t.scrollX&&(this.el.scrollLeft=t.scrollX),t.keypress&&this._keypress(t.keypress),this._dataFrameIndex++}},{key:"_fireClick",value:function(e,t){var l=e+this.el.getBoundingClientRect().left,i=t+this.el.getBoundingClientRect().top,n=this.document.elementFromPoint(l-1,i-1);"input"===n.tagName.toLowerCase()?(n.focus(),this._previousElementFocused=n):(n.click(),this._previousElementFocused&&this._previousElementFocused.blur()),this._addDot(e,t,"recjs-clickdot","red")}},{key:"_fireContextMenu",value:function(e,t){this._addDot(e,t,"recjs-contextkdot","blue")}},{key:"_mouseMove",value:function(e,t){this.el.style.position="relative";var l=this.document.getElementById("recjs-pointer");l||((l=this.document.createElement("div")).id="recjs-pointer",l.style.position="absolute",l.style.width="14px",l.style.height="21px",l.style.backgroundImage="url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiICAgaWQ9InN2ZzIiICAgc29kaXBvZGk6ZG9jbmFtZT0iTW91c2UgQ3Vyc29yIEFyb3cgKEZpeGVkKS5zdmciICAgdmlld0JveD0iMCAwIDcyMC43MTA4OSAxMDc5LjQ0OTIiICAgdmVyc2lvbj0iMS4xIiAgIGlua3NjYXBlOnZlcnNpb249IjAuOTEgcjEzNzI1IiAgIHdpZHRoPSI3MjAuNzEwODgiICAgaGVpZ2h0PSIxMDc5LjQ0OTIiPiAgPGRlZnMgICAgIGlkPSJkZWZzMTMzIiAvPiAgPHNvZGlwb2RpOm5hbWVkdmlldyAgICAgaWQ9ImJhc2UiICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iZmFsc2UiICAgICBpbmtzY2FwZTp6b29tPSIwLjUiICAgICBoZWlnaHQ9IjBweCIgICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIgICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMiIgICAgIGlua3NjYXBlOmN4PSItNTUyLjA3MjE3IiAgICAgaW5rc2NhcGU6Y3k9IjY3OS42OTIzMSIgICAgIGlua3NjYXBlOm9iamVjdC1wYXRocz0idHJ1ZSIgICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAiICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAgICAgaW5rc2NhcGU6c25hcC1iYm94PSJmYWxzZSIgICAgIHNob3dncmlkPSJmYWxzZSIgICAgIHdpZHRoPSIwcHgiICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0icHgiICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIgICAgIGlua3NjYXBlOndpbmRvdy14PSIwIiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjE5IiAgICAgZml0LW1hcmdpbi1ib3R0b209IjAiICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE5MjAiICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIgICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIgICAgIGlua3NjYXBlOmJib3gtcGF0aHM9InRydWUiICAgICBpbmtzY2FwZTpiYm94LW5vZGVzPSJ0cnVlIiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA2MSIgICAgIHNob3dib3JkZXI9ImZhbHNlIiAgICAgZml0LW1hcmdpbi10b3A9IjAiICAgICBpbmtzY2FwZTpzbmFwLWludGVyc2VjdGlvbi1wYXRocz0idHJ1ZSIgICAgIGlua3NjYXBlOm9iamVjdC1ub2Rlcz0idHJ1ZSIgICAgIGlua3NjYXBlOnNuYXAtc21vb3RoLW5vZGVzPSJ0cnVlIj4gICAgPGlua3NjYXBlOmdyaWQgICAgICAgdHlwZT0ieHlncmlkIiAgICAgICBpZD0iZ3JpZDQzNTkiICAgICAgIGVtcHNwYWNpbmc9IjUwIiAgICAgICBvcmlnaW54PSIwIiAgICAgICBvcmlnaW55PSI1OC43MzgzMiIgLz4gIDwvc29kaXBvZGk6bmFtZWR2aWV3PiAgPGcgICAgIGlkPSJsYXllcjIiICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIiICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU1NS4xODk5LC0xMTIuMDg4MzYpIj4gICAgPHBhdGggICAgICAgc3R5bGU9ImNvbG9yOiMwMDAwMDA7Zm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6bWVkaXVtO2xpbmUtaGVpZ2h0Om5vcm1hbDtmb250LWZhbWlseTpzYW5zLXNlcmlmO3RleHQtaW5kZW50OjA7dGV4dC1hbGlnbjpzdGFydDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LWRlY29yYXRpb24tbGluZTpub25lO3RleHQtZGVjb3JhdGlvbi1zdHlsZTpzb2xpZDt0ZXh0LWRlY29yYXRpb24tY29sb3I6IzAwMDAwMDtsZXR0ZXItc3BhY2luZzpub3JtYWw7d29yZC1zcGFjaW5nOm5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO2RpcmVjdGlvbjpsdHI7YmxvY2stcHJvZ3Jlc3Npb246dGI7d3JpdGluZy1tb2RlOmxyLXRiO2Jhc2VsaW5lLXNoaWZ0OmJhc2VsaW5lO3RleHQtYW5jaG9yOnN0YXJ0O3doaXRlLXNwYWNlOm5vcm1hbDtjbGlwLXJ1bGU6bm9uemVybztkaXNwbGF5OmlubGluZTtvdmVyZmxvdzp2aXNpYmxlO3Zpc2liaWxpdHk6dmlzaWJsZTtvcGFjaXR5OjE7aXNvbGF0aW9uOmF1dG87bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2NvbG9yLWludGVycG9sYXRpb246c1JHQjtjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM6bGluZWFyUkdCO3NvbGlkLWNvbG9yOiMwMDAwMDA7c29saWQtb3BhY2l0eToxO2ZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTAwO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxO2NvbG9yLXJlbmRlcmluZzphdXRvO2ltYWdlLXJlbmRlcmluZzphdXRvO3NoYXBlLXJlbmRlcmluZzphdXRvO3RleHQtcmVuZGVyaW5nOmF1dG87ZW5hYmxlLWJhY2tncm91bmQ6YWNjdW11bGF0ZSIgICAgICAgZD0ibSA1NTUuMTg5OSwxMTIuMDg4MzYgMCwxMjAuNzEwOTQgMCw5MjAuNzEwOSAyMzIuNDIxODgsLTIzMi40MjE4NCAxMTEuOTA0MjksMjcwLjQ0OTI0IDE2OS43NjM2MywtODQuODgyOCAtMTE0LjA5MzcxLC0yNzMuODU1NSAzMjAuNzE0ODEsMCB6IiAgICAgICBpZD0icGF0aDQzOTIiICAgICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2NjY2NjY2NjIiAvPiAgICA8cGF0aCAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxIiAgICAgICBkPSJNIDUwLDUwIDUwLDg1MCAyNTAsNjUwIDM2OS45OTYwOSw5NDAuMDAxOTUgNDQ5Ljk4ODI4LDkwMC4wMDU4NiAzMjUsNjAwIGwgMjc1LDAgeiIgICAgICAgaWQ9InJlY3Q1NiIgICAgICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgICAgICAgc29kaXBvZGk6bm9kZXR5cGVzPSJjY2NjY2NjYyIgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTU1LjE4OTksMTgyLjc5OTMpIiAvPiAgPC9nPiAgPG1ldGFkYXRhICAgICBpZD0ibWV0YWRhdGExMzEiPiAgICA8cmRmOlJERj4gICAgICA8Y2M6V29yaz4gICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PiAgICAgICAgPGRjOnR5cGUgICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+ICAgICAgICA8Y2M6bGljZW5zZSAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvIiAvPiAgICAgICAgPGRjOnB1Ymxpc2hlcj4gICAgICAgICAgPGNjOkFnZW50ICAgICAgICAgICAgIHJkZjphYm91dD0iaHR0cDovL29wZW5jbGlwYXJ0Lm9yZy8iPiAgICAgICAgICAgIDxkYzp0aXRsZT5PcGVuY2xpcGFydDwvZGM6dGl0bGU+ICAgICAgICAgIDwvY2M6QWdlbnQ+ICAgICAgICA8L2RjOnB1Ymxpc2hlcj4gICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPiAgICAgICAgPGRjOmRhdGU+MjAxMS0xMi0yMFQwNDozMDowNDwvZGM6ZGF0ZT4gICAgICAgIDxkYzpkZXNjcmlwdGlvbj5BIHBpeGVsLWFydCBzdHlsZSBhcnJvdyBtb3VzZSBjdXJzb3IuIE1hZGUgdXAgb2YgaW5kaXZpZHVhbCBzcXVhcmVzLCBmb3IgZWFzeSBtYW5pcHVsYXRpb248L2RjOmRlc2NyaXB0aW9uPiAgICAgICAgPGRjOnNvdXJjZT5odHRwczovL29wZW5jbGlwYXJ0Lm9yZy9kZXRhaWwvMTY2MzU2L21vdXNlLWN1cnNvci0tLWFycm93LWJ5LWhlbGxvY2F0Zm9vZDwvZGM6c291cmNlPiAgICAgICAgPGRjOmNyZWF0b3I+ICAgICAgICAgIDxjYzpBZ2VudD4gICAgICAgICAgICA8ZGM6dGl0bGU+aGVsbG9jYXRmb29kPC9kYzp0aXRsZT4gICAgICAgICAgPC9jYzpBZ2VudD4gICAgICAgIDwvZGM6Y3JlYXRvcj4gICAgICAgIDxkYzpzdWJqZWN0PiAgICAgICAgICA8cmRmOkJhZz4gICAgICAgICAgICA8cmRmOmxpPmFycm93PC9yZGY6bGk+ICAgICAgICAgICAgPHJkZjpsaT5jdXJzb3I8L3JkZjpsaT4gICAgICAgICAgICA8cmRmOmxpPm1vdXNlPC9yZGY6bGk+ICAgICAgICAgICAgPHJkZjpsaT5waXhlbDwvcmRmOmxpPiAgICAgICAgICA8L3JkZjpCYWc+ICAgICAgICA8L2RjOnN1YmplY3Q+ICAgICAgPC9jYzpXb3JrPiAgICAgIDxjYzpMaWNlbnNlICAgICAgICAgcmRmOmFib3V0PSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9wdWJsaWNkb21haW4vemVyby8xLjAvIj4gICAgICAgIDxjYzpwZXJtaXRzICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI1JlcHJvZHVjdGlvbiIgLz4gICAgICAgIDxjYzpwZXJtaXRzICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rpc3RyaWJ1dGlvbiIgLz4gICAgICAgIDxjYzpwZXJtaXRzICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rlcml2YXRpdmVXb3JrcyIgLz4gICAgICA8L2NjOkxpY2Vuc2U+ICAgIDwvcmRmOlJERj4gIDwvbWV0YWRhdGE+PC9zdmc+)",l.style.backgroundSize="cover",this.el.appendChild(l)),l.style.top=t+this.el.scrollTop+"px",l.style.left=e+this.el.scrollLeft+"px"}},{key:"_keypress",value:function(e){if(this._previousElementFocused)if(8===e){var t=this._previousElementFocused.value;this._previousElementFocused.value=t.substring(0,t.length-1)}else this._previousElementFocused.value+=String.fromCharCode(e)}},{key:"_addDot",value:function(e,t,l,i){this.el.style.position="relative";var n=this.document.createElement("recjs");n.className=l,n.style.position="absolute",n.style.width="10px",n.style.height="10px",n.style.backgroundColor=i,n.style.opacity=".6",n.style.borderRadius="100%",n.style.top=t+this.el.scrollTop+"px",n.style.left=e+this.el.scrollLeft+"px",this.el.appendChild(n),setTimeout(function(){n.remove()},3e3)}}]),e}();t.default=I}]);