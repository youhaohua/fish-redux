fish.Router.extend({
    routes: {
        "visual": "visual",    // #visual
    },

    visual: function() {
        require(['modules/index/views/IndexView'], function(index){
            new index().render();
        })
    },

});