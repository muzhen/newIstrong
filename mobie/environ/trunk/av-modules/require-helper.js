
require.config({
    baseUrl: "../av-modules",
    paths: {
        "jquery": "Jquery/jquery-1.11.1.min",
        "avalon": "avalon/avalon.mobile.shim",
        "JsUtil": "myjs/JsUtil",
       // "swiper": "swiper/js/swiper.min",
        "bootstrap": "bootstrap-3.3.4/js/bootstrap.min",
        "flexible":"flexible/js/flexible",
        "flexible_Css":"flexible/js/flexible_css",
		//"satellitePic":"satellitePic/0.1.0/satellitePic",
		"environ":"src/environ",
		//"ssyq":"rain/0.1.0/ssyq",
		//"xzqh":"xzqh/0.1.0/xzqh",
		//"AreaData":'xzqh/0.1.0/AreaData_min',
        //"chartTable":"chartTable/0.1.0/chartTable",
       // "highstock": "Highstock-4.2.3/js/highstock.src",
        "mobiscroll":"mobiscroll2/js/mobiscroll.custom-2.17.1.min",
       // "exporting": "Highstock-4.2.3/js/modules/exporting",
       // "mmRequest": "avalon/mmRequest",
       // "mmPromise": "avalon/mmPromise"
    },
    map:{
        "*":{
            "css":"css"
        }
    },
    shim: {
        //"home_css":["css!../page/home.css"],
        //"bootstrap_css":["css"]

        "jquery": {
            exports: "jQuery"
        },
        "avalon": {
            exports: "avalon"
        },
        "bootstrap": {
            deps: ['jquery','css!bootstrap-3.3.4/css/bootstrap.css']
        },
        "mobiscroll":{
            deps: ['jquery','css!mobiscroll2/css/mobiscroll.css'],
            exports:"mobiscroll"
        },
       /* "highstock": {
            deps: ['jquery'],
            exports: "Highcharts"
        },
       
        "exporting": {
            deps: ['jquery','highstock'],
            exports: "exporting"
        },
        "Swiper": {
            exports: "Swiper"
        },*/
        "JsUtil": {
            deps: ['jquery'],
            exports: "JsUtil"
        }
    }
});