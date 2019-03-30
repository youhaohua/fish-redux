

  import {store} from "./redux/todo.js"
  import fishCom from "./views/fishCom.js"   
  import fishComBottom from "./views/fishComBottom.js"   
    var temp=require("./templates/index.hbs")
     var IndexView=fish.View.extend({
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

          
            new fishCom({el:".com-top"}).render()
            new fishComBottom({el:".com-bottom",data:store.getState().check}).render()   
            console.log(store)
            
            store.subscribe(()=>{

                new fishComBottom({el:".com-bottom",data:store.getState().check}).render()             
    
             })

           

    
    
        }
    });
     
    export default IndexView

