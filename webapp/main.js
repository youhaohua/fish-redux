/* require.config({
    baseUrl: '',
    waitSeconds:0,
    useStrict: false
});
require(['./app'], function(App){
    fish.View.configure({manage: true});
    $(function(){
        App.run();
    });
})
 */


 import App from "./app"

 fish.View.configure({manage: true});

 App()
