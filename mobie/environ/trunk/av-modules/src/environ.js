define(["avalon", "jquery",'css!environ.css'], function (avalon, $) {
    var poll = {
            options: {
                clid:"",
                url:"",
                Title:"",
                pollVm:{}
            },
            /*初始化数据
              options：传入参数
            */
            init:function (options){
                poll.options=$.extend(poll.options,options);
               var vm=poll.pollVm();
                poll.getdata(poll.options);        
                return vm;
            },
             /*初始化数据
              options：传入参数
            */
            getdata:function(options){
                 $.getJSON(options.url,function (result) {
                     //table.options.tableVm.windData=result.data;
                     poll.options.pollVm.Title=poll.options.Title;
                     poll.options.pollVm.pollData=result.data;
                     var s=result.data;
                     poll.options.pollVm.station=s[0].station;
                     poll.options.pollVm.temp=s[0].temp;
                     poll.options.pollVm.qual=s[0].qual;
                     poll.options.pollVm.note=s[0].note;

                 });
            },
            pollVm:function(){
                var vm=avalon.define({
                        $id:poll.options.clid,
                        Title:[],//污染物表头
                        pollData:[],
                        station:"",
                        temp:"",
                        qual:"",
                        note:"",
                        pollhead:["0.5","16.5%","16.5%","16.5%","16.5%","16.5%","16.5%","0.5"]//污染物表格宽度
                        
                });
                poll.options.pollVm=vm;

                return vm;

            }

    }
    return poll;
});
