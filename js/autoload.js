( function(){
    var autoload = {

        /***************************
         * DatePicker - Default CSS selector is .ink-datepicker
         ***************************/
         'DatePicker_1': '.ink-datepicker',

        /***************************
         * Gallery - Default CSS selector is ul.ink-gallery-source
         ***************************/
         'Gallery_1': 'ul.ink-gallery-source',

        /***************************
         * Modal - Default CSS selector is .ink-modal
         ***************************/
         'Modal_1': '.ink-modal',

        /***************************
         * ProgressBar - Default CSS selector is .ink-progress-bar
         ***************************/
         'ProgressBar_1': '.ink-progress-bar',

        /***************************
         * SortableList - Default CSS selector is .ink-sortable-list
         ***************************/
         'SortableList_1': '.ink-sortable-list',

        /***************************
         * Spy - Default CSS selector is *[data-spy="true"]
         ***************************/
         'Spy_1': '*[data-spy="true"]',

        /***************************
         * Sticky - Default CSS selector is .ink-navigation.sticky
         ***************************/
         'Sticky_1': '.ink-navigation.sticky',

        /***************************
         * Table - Default CSS selector is .ink-table
         ***************************/
         'Table_1': '.ink-table',

        /***************************
         * Tabs - Default CSS selector is .ink-tabs
         ***************************/
         'Tabs_1': '.ink-tabs',

        /***************************
         * TreeView - Default CSS selector is .ink-tree-view
         ***************************/
         'TreeView_1': '.ink-tree-view',

        /***************************
         * Toggle - Default CSS selector is .toggle
         ***************************/
         'Toggle_1': '.toggle'



    };

    window.siteInkInstances = {};
    Ink.requireModules(['Ink.Dom.Selector_1', 'Ink.Dom.Loaded_1', 'Ink.Util.Array_1', 'Ink.UI.SmoothScroller_1'],function( Selector, Loaded, InkArray, Scroller ){
        for( var module in autoload ){
            (function(mod){
                Ink.requireModules( ['Ink.UI.' + mod ], function( component ) {
                    siteInkInstances[mod.split('_')[0]] = [];
                    InkArray.each( Selector.select( autoload[mod] ), function( element ){
                        Loaded.run(function(){
                            siteInkInstances[mod.split('_')[0]].push( new component( element ) );
                        });
                    });
                });
            })(module);
        }

        Loaded.run(function(){
            Scroller.init();
        });
    });
})();
