
require.config({
    baseUrl:"../av-modules",
    paths:{
        "jquery": "Jquery/1.11.1/jquery-1.11.1.min",
        "avalon": "avalon/1.5.5/avalon.mobile.shim",
        "swiper": "swiper/3.3.1/swiper.min",
        "bootstrap": "bootstrap/3.3.4/bootstrap.min",
        "splitScreenView":"src/splitScreenView"

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