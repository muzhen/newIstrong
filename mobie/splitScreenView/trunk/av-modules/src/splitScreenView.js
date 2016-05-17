define(["avalon", "jquery",'css!splitScreenView.css'], function (avalon, $) {

    var splitScreen = {
        //定义内部参数
        options: {
            clid:"",
            data:"",
            vm:""
        },
         //初始化数据
        init:function (options){
            splitScreen.options=$.extend(splitScreen.options,options);//传进来的参数和自己定义的参数
            var splitScreenVm=splitScreen.conte();//调这个函数
            splitScreen.getdata(splitScreen.options);//调用函数，获得数据

            return splitScreenVm;
        },

        //雨量等值面及量级统计
        //rainPart:function(){
        //    var vm=avalon.define({
        //        $id:splitScreen.options.clid,//找到子元素
        //
        //       rainData:[]//获取的数据放在这里
        //    });
        //    splitScreen.options.rainPart=vm;
        //    $.getJSON((url,splitScreen.cloudPart)
        //
        //    return vm;
        //},

        //卫星云图
        conte:function(){
            var vm=avalon.define({
                $id:splitScreen.options.clid,
                cloudSrc1:"",//卫星云图
                typhoonSrc:"",//台风路径
                weatherSrc:"",//气象雷达
                cloudData:""//获取的数据放在这里
            });
            splitScreen.options.cloudPart=vm;
            splitScreen.options.cloudSrc1=splitScreen.options.cloudPart.cloudData
          //  splitScreen.options.cloudSrc =__ConfigSettingXML.getVal("FILEPATH");
           console.log(splitScreen.options.cloudPart.cloudData);
            return vm;
        },

        /*初始化数据
         options：传入参数
         */
        getdata:function(options){
            //雨量等值面及量级统计 数据options.data
            $.getJSON(options.data,function (result) {
                //   splitScreen.options.rainPart.raindata=result.data;
                options.rainPart.rainData=result.data;//获取的数据放在这里
               // console.log(result.data)
            });
            //卫星云图 数据
            $.get(options.data.a,function(xml){

                var xmll=$(xml).find("ROW");
                var path="";
                path= $( xmll[0]).attr("FILEPATH");
                options.cloudPart.cloudData=path;
                console.log(path);
                console.log( options.cloudPart.cloudData);
                splitScreen.options.vm.cloudSrc1=path;

            });




        }

    }
    return splitScreen;
});
