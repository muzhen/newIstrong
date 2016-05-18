define(["avalon", "jquery",'css!warnInf.css'], function (avalon, $) {
    var warn = {
        options: {
            clid:"",
            data:"",
            vm:"",
            conte:{},
            warnVm:{}
    },

        // 初始化数据
        init:function (options){
            warn.options=$.extend(warn.options,options);//传进来的参数和自己定义的参数
            var vm=warn.conte();//调这个函数
            warn.getdata(warn.options);//调用函数，获得数据

            return vm;
        },
        //图片
        conte:function(){
            var vm=avalon.define({
                $id:warn.options.clid,
                currentTime:"",//当前时间
                cloudSrc:"",//卫星云图
                typhoonSrc:"",//台风路径
                weatherSrc:"",//气象雷达
                //cloudData:"http://192.168.110.233:9985/api/mobilev1/rain/grade/getrainavgcount?addvcd=440000&include_self=false&time=(2016-05-17T08:00:00,2016-05-17T10:17:00]&stat_type=个镇"//雨量，获取的数据放在这里
                cloudData:"",//雨量
                rainData:"",//雨量条形图
                rainChart:""//雨量等值面图
            });
            warn.options.conte=vm;

            var myDate = new Date(),
             year = myDate.getFullYear(),
            month = myDate.getMonth(),
             day =  myDate.getDate(),
            hours = myDate.getHours(),
            minutes = myDate.getMinutes();

            warn.options.conte.currentTime = year + "年"+ month + "月" + day + "日" + hours +":"+ minutes;
            //var currentTime = new Date();
           // alert(currentTime);
            return vm;
        },

        //初始化图片数据
        getdata:function(options){


            //雨量下面的数据列表 数据options.data
            $.getJSON(options.data.a3,function (result) {
                options.conte.cloudData=result.data;//获取的数据放在这里
                // console.log(options.conte.cloudData)
            });
            //雨量条形图
            $.getJSON(options.data.a4,function (result) {
                options.conte.rainData=result.data;//获取的数据放在这里
                //console.log(options.conte.rainData)
                //console.log(result.data)
            });
            //雨量等值面图
            //$.getJSON(options.data.a5,function (result) {
            //    options.conte.rainChart=result.data;//获取的数据放在这里
            //      console.log(options.conte.rainChart)
            //});
            $.get(options.data.a5,  function(data) {
                var a = $.parseJSON(data); //解析JSON
                console.log(a);
            });
            //卫星云图 数据
            $.get(options.data.a1,function(xml){
                var xmll=$(xml).find("ROW");
                var path="";
                path= $( xmll[0]).attr("FILEPATH");
                options.conte.cloudSrc=path;
                //console.log(path);
             //   console.log( options.cloudPart.cloudSrc);

            });
            //气象雷达 数据
            $.get(options.data.a2,function(xml){
                var xmll=$(xml).find("ROW");
                var path="";
                path= $( xmll[0]).attr("FILEPATH");
                options.conte.weatherSrc=path;
               // console.log(path);
              //  console.log( options.cloudPart.weatherSrc);

            })




        }


    }
    return warn;
});
