(function (window, define, undefined) {
    define(['services/imgloader'],
        function (imgloader) {
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
