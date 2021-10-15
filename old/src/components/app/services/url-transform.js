(function (window, define, undefined) {
    'use strict';

    define([],
        function () {
            return {
                isGlobal: true,

                ready: function () {
                    this.load();
                },

                load: function () {
                    this.transform(document);
                    this.updateLocation();
                },

                transform: function (element) {
                    var url = '';
                    element.querySelectorAll('a').forEach(function (aElement) {
                        url = aElement.getAttribute('href');
                        if (!this.isExternal(url) && this.isHtml(url)) {
                            aElement.setAttribute('href', this.getTransformedUrl(url));
                        }
                    }, this);
                },

                getTransformedUrl: function (url) {
                    return '#' + url.slice(1).split('.html')[0];
                },

                isExternal: function (href) {
                    var urlRegex = /^(http[s]?|ftp|mail)/;
                    return href.match(urlRegex);
                },

                isHtml: function (href) {
                    var urlRegex = /(.html)$/;
                    return href.match(urlRegex);
                },

                updateLocation: function () {
                    if (window.location.pathname !== '/') {
                        history.replaceState({}, '', '/' + this.getTransformedUrl(window.location.pathname));
                    }
                }
            };
        }
    );
})(this, this.define);
