
    import "../css/one_point.css"
    var temp=require("../templates/fishCom.hbs")
    import {store} from "../redux/todo.js"
     var fishCom=fish.View.extend({
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

            var $grid;
            var mydata = [
                {id:"0.1",invdate:"2010-05-24",name:"呵呵",note:"note",tax:"10.00",total:"2111.00"} ,
                {id:"0.1.1",invdate:"2010-05-25",name:"test2",note:"note2",tax:"20.00",total:"320.00",extra:"tyl"},
                {id:"0.3",invdate:"2007-09-01",name:"test3",note:"note3",tax:"30.00",total:"430.00"},
                {id:"P594_1.0",invdate:"2007-10-04",name:"test",note:"note",tax:"10.00",total:"210.00"},
                {id:"P594_1.4",invdate:"2007-10-05",name:"test2",note:"note2",tax:"20.00",total:"320.00"},
                {id:"6",invdate:"2007-09-06",name:"test3",note:"note3",tax:"30.00",total:"430.00"},
                {id:"7",invdate:"2007-10-04",name:"test",note:"note",tax:"10.00",total:"210.00"},
                {id:"8",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"21.00",total:"320.00"},
                {id:"9",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
                {id:"11",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"12",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"13",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
                {id:"14",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"15",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"16",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
                {id:"17",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"18",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"19",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
                {id:"21",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"22",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"23",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
                {id:"24",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"25",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"26",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
                {id:"27",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
                {id:"28",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
                {id:"29",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"}
            ];

            var opt = {
                data: mydata,
                height:400,
                showColumnsFeature: true,
                cached: true,
                colModel: [{
                    name: 'id',
                    sorttype: "int",
                    label: 'Inv No',
                    key:true
                }, {
                    name: 'invdate',
                    label: 'Date',
                    width: 90,
                    sorttype: "date",
                    formatter: "date",
                    headertitle : '时间' //列头的提示
                }, {
                    name: 'name',
                    label: 'Client',
                    width: 100,
                    title: false //内容没有提示
                }, {
                    name: 'amount',
                    label: 'Amount',
                    width: 80,
                    align: "right",
                    sorttype: "float",
                    formatter: "number"
                }, {
                    name: 'tax',
                    label: 'Tax',
                    width: 80,
                    align: "right",
                    sorttype: "float"
                }, {
                    name: 'total',
                    label: 'Total',
                    width: 80,
                    align: "right",
                    sorttype: "float"
                }, {
                    name: 'note',
                    label: 'Notes',
                    width: 100,
                    sortable: false
                }]
            };
        
           
            $grid = $("#gridId").grid(opt);

            $("#gridId").click(function() {
                var selrow = $grid.grid("getSelection"); //获取选中的行数据
       
                var select_string=JSON.stringify(selrow)

                store.dispatch({type:"select_data",payload:select_string})


            }); 


        
   
    
        }
    });
     
    export default fishCom
