define(function(){
    return {
        postService: function(serviceName,methodName,options,callback) {
            return  postService(serviceName,methodName,options,callback)
        },
        preUrl: preUrl
    };
});
//var preUrl = "/api/v1/";
var preUrl ="/iwhale-visual/"     //"/isa-service-report-new/api/v1/";
function postService (serviceName,methodName, options, successCallBack,complateCallback,errorCallback) {
    var data = {
        serviceName: serviceName,
        methodName: methodName,
        token: "",
        source: 'PC',
        privates: options
    };
    var requestUrl = preUrl + serviceName + "/" + methodName;
    return fish.ajax({
        url:requestUrl,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method:'POST',//可以是POST或者GET，与jQuery原生的封装一致
        data: JSON.stringify(data),
        // showMask:true,  //是否自动显式全局遮罩
        showError:false, //在出现异常时自动显示异常信息，后台需要返回的数据格式：{code:'ERROR-1001',message:'登录失败'}
        // timeout:3000,   //超过3秒显式全局遮罩，此参数在showMask为true时才有效
        // beforeSend:function(){
        //     $(".ui-tabs-panel").blockUI({message: '加载中'}).data('blockui-content', true);
        // },
        success: successCallBack,
        complete:complateCallback,
        //【注意】如果你在这里配置了自己的error处理函数，fish.ajax就不会自动帮你显示异常信息了！
        error: function(XHR,status,error){//注意这里回调函数的参数
            $.unblockUI();
            fish.error("请求异常，请稍后再试")
        }
    });
}

//获取url中的参数
function getUrlParams() {
    var qs = location.search.substr(1), // 获取url中"?"符后的字串
        args = {}, // 保存参数数据的对象
        items = qs.length ? qs.split("&") : [], // 取得每一个参数项,
        item = null,
        len = items.length;

    for(var i = 0; i < len; i++) {
        item = items[i].split("=");
        var name = decodeURIComponent(item[0]),
            value = decodeURIComponent(item[1]);
        if(name) {
            args[name] = value;
        }
    }
    return args;
}  
