
    import "../css/one_point.css"
    var temp=require("../templates/fishComBottom.hbs")
     var fishComBottom=fish.View.extend({
        //一些初始化设置 (不能进行dom操作)
        //提供模板数据
        manage: true,
        serialize: function () {
            return {props:this.options}
        },
        template: temp,

        initialize: function () {
        

        },
        afterRender: function(){     
   
    
        }
    });
     
    export default fishComBottom
