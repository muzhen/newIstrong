
require.config({
    baseUrl: "../av-modules",
    paths: {
        "jquery": "Jquery/jquery-1.11.1.min",
        "avalon": "avalon/avalon.mobile.shim",

        "bootstrap": "bootstrap-3.3.4/js/bootstrap.min",
        "flexible":"flexible/js/flexible",
        "flexible_Css":"flexible/js/flexible_css",
		"splitScreenView":"src/splitScreenView"
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
        "bootstrap": {
            deps: ['jquery','css!bootstrap-3.3.4/css/bootstrap.css']
        }

    }
});