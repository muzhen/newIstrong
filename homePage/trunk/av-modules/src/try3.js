
define(["avalon","jquery","swiper",'css!homePage.css'],function(avalon,$,swiper){
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
                /*
                 ��ʼ�����ݺ�������
                 */
                init:function(options){//ҳ�����ʱҪ��ʼ�������ݣ�
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
