!function(n,r,t,e){"use strict";r([],function(){return{extend:function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t]);return n},once:function(n,r){var t;return function(){return n&&(t=n.apply(r||this,arguments),n=null),t}},mapClassesToElements:function(n,r){var t={};for(var e in n)t[e]=r.querySelectorAll("."+n[e]),1==t[e].length&&(t[e]=t[e][0]);return t}}})}(this,this.define,this.require);