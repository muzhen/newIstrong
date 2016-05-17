define(["avalon", "jquery",'css!splitScreenView.css'], function (avalon, $) {
    var warn = {
        options: {
            clid:"",
            url:"",
            warnVm:{}
        },
         /*初始化数据
              options：传入参数
            */
        init:function (options){
            warn.options=$.extend(warn.options,options);
            var vm=warn.warnVm();
            warn.getdata(warn.options);
                       
            return vm;
        },
         /*初始化数据
              options：传入参数
            */
        getdata:function(options){
             $.getJSON(options.url,function (result) {
                    warn.options.warnVm.warndata=result.data;
             });
        },
        warnVm:function(){
            var vm=avalon.define({
                $id:warn.options.clid,
                warndata:[]
            })
            warn.options.warnVm=vm;

            return vm;

        }

    }
    return warn;
});
