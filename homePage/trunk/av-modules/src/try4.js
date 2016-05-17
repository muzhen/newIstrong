
define(["avalon","jquery",'css!homePage.css'],function(avalon,$,swiper){
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
                tableda:[],//table数据
                titleSize:"18",
                imgAlt:"64*64",
                /*
                 初始化数据函数参数
                 */
                init:function(options){//页面加载时要初始化的数据，
                    $.getJSON(options.dataurl.lbimg,function(result){
                        vm.lbimg=result.data;
                        // alert("lbimg ")
                    });
                    $.getJSON(options.dataurl.tableda,function(result){
                        vm.tableda=result.data;
                       // alert("tableda ")
                    });

                }

            });
            return vm;
        }
    }
    return img_list;
});
