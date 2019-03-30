/* define(function() {
    var isRunning = false;
    return {
        run: function() {
            这里配置一下语言，可以动态设置，真实的系统需要根据浏览器设置来获取语言然后设置给fish
            fish.language = "zh";
            $(document).trigger("languageChanged.fish");
            if (!isRunning) {
                isRunning = true;
                var queryParam=getUrlParams();
                console.log(queryParam);
                    require(['modules/index/index'], function(IndexView) {
                        fish.history.start();
                      
                        window.IndexView=IndexView.run()


                    });

            }
        }
    }
}); */

import IndexView from "./modules/index/index.js"
 var App=function(){

 fish.language = "zh";
 $(document).trigger("languageChanged.fish");
     fish.history.start();    
         new IndexView({el:".fish-app"}).render()

}

export default App