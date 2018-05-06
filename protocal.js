
'use strict';
//定义一个合约
var TestProtocal = function () {

};
TestProtocal.prototype = {
    //合约初始化方法
    init:function () {
        return "hello world";
    },
    //无参数的合约方法
    printTest:function () {
      return "what the fuck";
    },
    //一个参数的合约方法
    argTest:function (arg) {
        return arg;
    },
    //多个参数合约方法
    argTest2:function (arg1, arg2) {
        return "arg1:"+arg1+"\t arg2:"+arg2;
    }
};
module.exports = TestProtocal;