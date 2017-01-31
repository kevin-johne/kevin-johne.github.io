( function( window, define, require, undefined ) {
    define( [ 'utils/helper', 'utils/event', 'services/router'
    ], function( helper, event, router ) {
        return {
            defaults: function() {
                return {
                    link: 'nav-link',
                    activeClass: 'current'
                };
            },

            ready: function( element, options ) {
                this.options = helper.extend( this.defaults(), options );

                this.navItems = document.querySelectorAll( '.' + this.options.link );

                this.updateNavigation( null, router.getRoot() );
            },

            events: function() {
                event.on( 'route/update', this.updateNavigation.bind( this ) );
            },

            /**
             * Updates the Navigation View
             * @param {object} event
             * @param {string} currentRoot - current navigation root (music / projects / blog / .. )
             */
            updateNavigation: function( event, currentRoot ) {
                if ( !this.currentActive ) {
                    this.currentActive = this.filterActiveNavItem( this.navItems );
                }

                if ( this.currentActive.forEach ) {
                    this.currentActive.forEach( function( link ) {
                        this.removeActiveClass( link );
                    }.bind( this ) );
                } else {
                    this.removeActiveClass( this.currentActive );
                }

                this.currentActive = this.matchItemWithNewRoot( currentRoot );

                if ( this.currentActive ) {
                    this.currentActive.classList.add( this.options.activeClass );
                }
            },

            removeActiveClass: function( element ) {
                element.classList.remove( this.options.activeClass );
            },

            /**
             * gets a root string ( ex. projects ) and finds the corresponding nav Item
             * @param {string} currentRoot
             * @return {Node}
             */
            matchItemWithNewRoot: function( currentRoot ) {
                var item;
                var reg = new RegExp( '#' + currentRoot, 'g' );
                item = Array.prototype.filter.call( this.navItems, function( item ) {
                    return item.href.match( reg );
                } );
                return item[0];
            },

            /**
             * filter all current active navigation Items
             * @param {Node} items
             * @returns {Array}
             */
            filterActiveNavItem: function( items ) {
                return Array.prototype.filter.call( items, function( element ) {
                    if ( element.classList.contains( this.options.activeClass ) ) {
                        return true;
                    }
                }.bind( this ) );
            }
        };
    } );
} )( this.window, this.define, this.require );
