
require.config({
    baseUrl: "../av-modules",
    paths: {
        "jquery": "Jquery/jquery-1.9.1",
        "avalon": "avalon/avalon.mobile.shim",
        "flexible":"flexible/js/flexible",
        "flexible_Css":"flexible/js/flexible_css",
        "leaflet": "leaflet-0.7.7/0.7.7/leaflet",
        "mapLeaf": "src/mapLeaf",
        "JsUtil": "myjs/JsUtil",
        "bootstrap": "bootstrap-3.3.4/js/bootstrap.min"
    },
    map:{
        "*":{
            "css":"css"
        }
    },
    shim: {
        "jquery": {
            exports: "jQuery"
        },
        "avalon": {
            exports: "avalon"
        },
        "leaflet": {
            deps: ['css!leaflet-0.7.7/0.7.7/leaflet.css'],
            exports: "leaflet"
        },
        "bootstrap": {
            deps: ['jquery','css!bootstrap-3.3.4/css/bootstrap.css']
        },
        "JsUtil": {
            deps: ['jquery'],
            exports: "JsUtil"
        }
    }
});