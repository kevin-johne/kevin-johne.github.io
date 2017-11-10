(function (window, define, undefined) {
    define(['services/imgloader', 'services/url-transform'],
        function (imgloader, urlTransform) {
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
                        imgloader.load();
                        urlTransform.transform(dom);
                        window.App.loader.initModules(dom);
                        this.scrollToTop();
                    }
                },

                getSitePage: function (content) {
                    return content.querySelector('.site-page');
                },

                getTitle: function (content) {
                    return content.getElementsByTagName('title')[0];
                },

                scrollToTop: function () {
                    window.scrollTo(0,0);
                }
            };
        }
    );
})(this, this.define);
