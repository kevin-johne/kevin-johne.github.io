!function(t,e,o,i,n){"use strict";var s=t.document;e(["require","utils/module","utils/helper","utils/conditions","vendor/polyfills/promise"],function(t,e,o,i){function n(e,o){return this.elementScope=e.elementScope&&e.elementScope.jquery?e.elementScope.get(0):e.elementScope||s,this.globalScope="object"==typeof e.globalScope?e.globalScope:{},this.options=e,this.requireContext=o||t,this.promise=new Promise(function(t,e){this.resolve=t,this.reject=e}.bind(this)),this.pendingModules={major:0,minor:0},this.moduleLoaded=function(t){t&&this.pendingModules.hasOwnProperty(t)&&this.pendingModules[t]--,this.pendingModules.major||this.pendingModules.minor||this.resolve()}.bind(this),e.autoInit!==!1&&this.initModules(),this}var l=".auto-init";return n.prototype.initModules=function(t){var e,o,i=t&&t.jquery?t.get(0):t||this.elementScope,n=i.querySelectorAll(this.options.autoInitSelector||l),s={minor:[],major:[]};return Array.prototype.forEach.call(n,function(t,i){e=this.getModule(n.item(i)),o=e.priority?s.major:s.minor,o.push(e)}.bind(this)),s.major.length&&this.loadModules(s.major,"major"),s.minor.length&&this.loadModules(s.minor,"minor"),s.minor.length||s.major.length||this.moduleLoaded(),this.promise},n.prototype.getModule=function(t){var e=t.getAttribute("data-condition");return{element:t,source:t.getAttribute("data-module")?t.getAttribute("data-module").replace(/ /g,"").split(","):t.getAttribute("data-modules")?t.getAttribute("data-modules").replace(/ /g,"").split(","):[],options:JSON.parse(t.getAttribute("data-options")),extensions:t.getAttribute("data-extension")?t.getAttribute("data-extension").replace(/ /g,"").split(","):t.getAttribute("data-extensions")?t.getAttribute("data-extensions").replace(/ /g,"").split(","):[],priority:t.getAttribute("data-priority")?JSON.parse(t.getAttribute("data-priority")):!1,condition:"string"==typeof e&&-1!==e.indexOf("{")?JSON.parse(e):e}},n.prototype.initGlobalModule=function(t){var e=t.module.constructors||["ready","events"],o=t.moduleName.split("/").pop();this.globalScope[o]=t.module,e.forEach(function(e,o){if("function"==typeof t.module[e])try{t.module[e].call(t.module,t.element,t.options)}catch(i){throw i}}),this.moduleLoaded(t.type)},n.prototype.initLocalModule=function(t){var o=e.extend(t.module);t.extensions.length&&t.extensions.forEach(function(t){o=o.extend(t)}),this.initLocalClass({module:o,element:t.element,options:t.options,moduleName:t.moduleName,type:t.type})},n.prototype.initLocalClass=function(t){return new t.module(t.element,t.options,t.moduleName,this.moduleLoaded,t.type)},n.prototype.loadModules=function(t,e){t.forEach(function(t){t.source.forEach(function(n){if(t.condition&&("string"==typeof t.condition||t.condition.hasOwnProperty(n))){var s="string"==typeof t.condition?t.condition:t.condition[n];try{i[s].call(this,o.once(this.loadModule.bind(this,n,t,e)),t.element)}catch(l){console.warn('The condition "'+t.condition[n]+"\" doesn't exist.")}}else this.pendingModules[e]++,this.loadModule.call(this,n,t,e)}.bind(this))}.bind(this))},n.prototype.loadModule=function(t,e,o){this.requireContext([t],function(i){var n=!i.isGlobal,s="function"==typeof i,l=s?this.initLocalClass:n?this.initLocalModule:this.initGlobalModule,r=[],u=new Promise(function(o){n&&e.extensions.length?this.requireContext(e.extensions,function(){Array.prototype.forEach.call(arguments,function(e){~e.extend.indexOf(t)&&r.push(e)}),o()}):o()}.bind(this));u.then(function(){l.call(this,{module:i,element:e.element,options:e.options,moduleName:t,extensions:r,type:o})}.bind(this))}.bind(this))},n})}(this,this.define,this.require,this.requirejs);