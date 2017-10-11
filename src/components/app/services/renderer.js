(function (window, define, undefined) {
    define([],
        function (loader) {
            return {
                /**
                 *
                 * @param {Node} dom
                 * @param {string} newContent
                 */
                render: function (dom, newContent) {
                    if (dom && newContent) {
                        var tempDoc = document.createElement('html');
                        tempDoc.innerHTML = newContent;
                        dom.innerHTML = this.getSitePage(tempDoc).innerHTML;
                        document.title = this.getTitle(tempDoc).innerText;
                        this.loadImages();
                        window.App.loader.initModules(dom);
                    }
                },

                getSitePage: function (content) {
                    return content.querySelector('.site-page');
                },

                getTitle: function (content) {
                    return content.getElementsByTagName('title')[0];
                },

                loadImages: function () {
                    var onLoadImage = function () {
                        this.removeAttribute('data-src');
                    };

                    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
                        img.setAttribute('src', img.getAttribute('data-src'));
                        img.onload = onLoadImage;
                    });
                }
            };
        }
    );
})(this, this.define);
