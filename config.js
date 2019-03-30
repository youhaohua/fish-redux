module.exports={

openUrl:"?fish_redux", //url配置
port:2001, //端口
proxy:{
    '/iwhale-visual': {
        target:'http://192.168.1.175:10088' /*'http://192.168.1.175:10088'*/,
        secure: false
    }
}, //跨域设置
entry:'./webapp/main.js' ,//入口js文件
output:'./build/bundle.js'

}