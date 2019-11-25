//配置
require.config({
    paths: { //模块和路径
        jquery: "https://cdn.bootcss.com/jquery/3.3.1/jquery.min",
        reg: "./reg",
        index: "./index1",
        detail: "./detail",
        // goos: "./goos",
        // log: "./log",

    },
    shim: {}
});
require(['jquery', 'index', 'detail'], function($, index, detail, ) {
    // reg.regind();
    index.render();
    index.round();
    index.star();
    index.direct();
    index.scrindex();
    detail.hotshop();
    detail.gooscar();
    // log.relog();

    // goos.goosind();


})