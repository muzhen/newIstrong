
define(["avalon","jquery",'css!homePage.css'],function(avalon,$,swiper){
    var img_list={
        options:"",
        /*
         ��ʼ����������
         options--���˲���������:options.clid
         */
        init:function(options){
            img_list.options=options;
            var vm=avalon.define({
                $id:options.clid,
                lbimg:[],//���ͼƬ��Ϣ
                tableda:[],//table����
                titleSize:"18",
                imgAlt:"64*64",
                /*
                 ��ʼ�����ݺ�������
                 */
                init:function(options){//ҳ�����ʱҪ��ʼ�������ݣ�
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
