!function(e,t,n,s,i){"use strict";t([],function(){function e(e,t,n,s){this.type=e,this.namespace=t,this.callback=n,this.once=s||!1}function t(){this._events={}}return e.prototype.trigger=function(e,t,n){if(!e.length||this.hasNamespace(e)){var s=[this];Array.isArray(n)&&n.length>0&&n.forEach(function(e){s.push(e)}),this.callback.apply(t||this,s)}},e.prototype.hasNamespace=function(e,t){var n=e.slice(0),s=t||this.namespace.slice(0);return n[0]===s[0]?(n.splice(0,1),s.splice(0,1),n.length&&s.length?this.hasNamespace(n,s):n.length===s.length||s.length>n.length):!1},t.prototype.splitName=function(e){var t=e.split(".");return{name:t.splice(0,1).toString(),namespace:t}},t.prototype.subscribeEvent=function(t,n,s){var i=this.splitName(t),a=this._events[i.name]||(this._events[i.name]=[]);a.push(new e(i.name,i.namespace,n,s))},t.prototype.on=function(e,t){this.subscribeEvent(e,t)},t.prototype.one=function(e,t){this.subscribeEvent(e,t,!0)},t.prototype.off=function(e){var t=this.splitName(e),n=this._events[t.name];n!==i&&(t.namespace.length?(n.forEach(function(e,s){e.hasNamespace(t.namespace)&&(n[s]=null)}),n=n.filter(function(e){return!!e}),this._events[t.name]=n):delete this._events[t.name])},t.prototype.trigger=function(e,t,n){var s=this.splitName(e),a=this._events[s.name];a!==i&&(a.forEach(function(e,i){null!==e&&(e.trigger(s.namespace,n,t),e.once&&(a[i]=null))}),a=a.filter(function(e){return!!e}))},new t})}(this,this.define,this.require,this.requirejs);