
require.config({
    baseUrl:"../av-modules",
    paths:{
        "jquery": "Jquery/1.11.1/jquery-1.11.1.min",
        "avalon": "avalon/1.5.5/avalon.mobile.shim",
        "swiper": "swiper/3.3.1/swiper.min",
        "bootstrap": "bootstrap/3.3.4/bootstrap.min",
        "homePage":'src/homePage',
        "try1":'src/try1',//对应的try1.js
        "try3":'src/try3',//对应的try3.js
        "try4":'src/try4',//对应的try4.js
        "flexible":"flexible/0.1.0/flexible",
        "flexible_Css":"flexible/0.1.0/flexible_css"

    },
    shim: {
        "jquery": {
            exports: "jQuery"
        },
        "avalon": {
            exports: "avalon"
        },
        "bootstrap": {
            deps: ['jquery']
        },
        "swiper": {
            deps: ['jquery','css!swiper.css'],
            exports: "swiper"
        }
    },
    map:{
        "*":{
            "css":"css"
        }
    }
});