!function(t,e,n){"use strict";e(["fetcher","route","renderer","utils/event"],function(e,n,o,i){return{isGlobal:!0,ready:function(){this.setRoutes(),this.contentContainer=document.querySelector(".site-page"),n.start(!0)},setRoutes:function(){var t=this;n("/",function(){t.root="",e.fetch("index.html").then(function(e){o.render(t.contentContainer,e)}),t.triggerRouteUpdate(),t.notifyAnalitics()}),n("/*/*",function(n,i){t.root=n,e.fetch(n+"/"+i+".html").then(function(e){o.render(t.contentContainer,e)}),t.triggerRouteUpdate(),t.notifyAnalitics()}),n("/*",function(n){t.root=n,e.fetch(n+".html").then(function(e){o.render(t.contentContainer,e)}),t.triggerRouteUpdate(),t.notifyAnalitics()})},triggerRouteUpdate:function(){i.trigger("route/update",[this.getRoot()])},getRoot:function(){return this.root},notifyAnalitics:function(){"function"==typeof t.ga&&t.ga("send","pageview")}}})}(this,this.define);