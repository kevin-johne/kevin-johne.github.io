(function (window, define) {
    define(['tns', 'utils/event', 'utils/helper'],
        function (tns, event, helper) {
            return {
                elements: {},

                defaults: function () {
                    return {
                        imageSlider: 'js-image-slider',
                        textSlider: 'js-text-slider'
                    };
                },

                ready: function (element, options) {
                    this.options = helper.extend(this.defaults(), options);
                    this.elements.root = element;

                    this.setImageSlider(this.elements.root.querySelector('.' + this.options.imageSlider));
                    this.setTextSlider(this.elements.root.querySelector('.' + this.options.textSlider));

                    this.initSliderEvents();
                },

                setImageSlider: function( container ) {
                    this.imageSlider = tns({
                        container: container,
                        items: 1,
                        nav: false, // no dots
                        controls: false, //no arrows
                        lazyload: true,
                        rewind: true
                    })
                },

                setTextSlider: function( container ) {
                    this.textSlider = tns({
                        container: container,
                        items: 1,
                        rewind: true,
                        controlsText: ['', '<span class="icon--arrow"></span>']
                    });
                },

                initSliderEvents: function () {
                    var that = this;
                    var textSliderInfo = this.textSlider.getInfo();
                    textSliderInfo.nextButton.addEventListener( 'click', function() {
                        that.imageSlider.goTo('next');
                    });

                    textSliderInfo.navContainer.addEventListener( 'click', function( event ) {
                        var index = event.target.getAttribute('data-nav');
                        if (index >= 0) {
                            that.imageSlider.goTo(index);
                        }
                    });
                }
            };
        });
})(this.window, this.define);
