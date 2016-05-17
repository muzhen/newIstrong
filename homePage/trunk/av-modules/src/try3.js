
define(["avalon","jquery","swiper",'css!homePage.css'],function(avalon,$,swiper){
    var img_list={
        options:"",
        /*
         初始化函数参数
         options--传人参数，例如:options.clid
         */
        init:function(options){
            img_list.options=options;
            var vm=avalon.define({
                $id:options.clid,
                lbimg:[],//存放图片信息
                /*
                 初始化数据函数参数
                 */
                init:function(options){//页面加载时要初始化的数据，
                     $.getJSON(options.dataurl.lbimg,function(result){
                        vm.lbimg=result.data;
                         //alert("nih ")
                    });

                }

            });
            return vm;
        }
    }
    return img_list;
});
