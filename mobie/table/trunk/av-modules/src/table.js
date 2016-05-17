define(["avalon", "jquery","JsUtil","mobiscroll",'css!table.css'], function (avalon, $, JsUtil,mobiscroll) {
    var table = {
            options: {
                clid:"",
                url:"",
                tableVm:{}
            },
            /*初始化数据
              options：传入参数
            */
            init:function (options){
                table.options=$.extend(table.options,options);
                var vm=table.tableVm();
                table.getdata(table.options);
                           
                return vm;
            },
             /*初始化数据
              options：传入参数
            */
            getdata:function(options){
                 $.getJSON(options.url,function (result) {
                      if(options.type=="wind")
                      {
                         table.options.tableVm.windData=result.data;
                         table.options.tableVm.windTitle=table.options.windTitle;
                      }
                      if(options.type=="temp")
                      {
                         table.options.tableVm.tempData=result.data;
                         table.options.tableVm.tempTitle=table.options.tempTitle;
                      }
                      if(options.type=="rain")
                      {
                         table.options.tableVm.rainData=result.data;
                         table.options.tableVm.rainTitle=table.options.rainTitle;
                      }
                      if(options.type=="capacity")
                      {
                         table.options.tableVm.capaData=result.data;
                         table.options.tableVm.capaTitle=table.options.capaTitle;
                         table.options.tableVm.time();
                      }
                      if(options.type=="water")
                      {
                         table.options.tableVm.waterData=result.data;
                         table.options.tableVm.waterTitle=table.options.waterTitle;
                      }
                 });
            },
            tableVm:function(){
                var vm=avalon.define({
                        $id:table.options.clid,
                        windTitle:[],//风情表头
                        tempTitle:[],//气温表头
                        rainTitle:[],//雨情表头
                        capaTitle:[],//库容表头
                        waterTitle:[],//水情表头
                        windData:[],//风情数据
                        tempData:[],//气温数据
                        rainData:[],//雨情数据
                        capaData:[],//库容数据
                        waterData:[],//水情数据
                        count:null,//站的总数
                        maxStnm:null,//风速/气温最大的站名
                        maxSped:null,//最大的风速
                        maxTemp:null,//最大气温
                        maxRain:null,//最大雨量
                        wrcount:0,//超警个数
                        flscount:0,//超讯限个数
                        startm:null,//开始时间
                        endtm:null,//结束时间
                        windhead:["25%","25%","25%","25%"],//风情表格宽度
                        temphead:["33%","34%","33%"],//气温表格宽度
                        rainhead:["33%","34%","33%"],//雨情表格宽度
                        capahead:["25%","25%","25%","25%"],//库容表格宽度
                        waterhead:["20%","22%","18%","20%","20%"],//水情表格宽度
                       
                        loadwind:function(){//初始化风情数据
                            vm.count=vm.windData.length;
                            var max=[];
                            var arr=[];
                            arr=vm.windData.$model;
                            max=arr[0];
                            for(var i=1;i<arr.length;i++)
                            {
                               max=vm.maxfunc(max,arr[i],"wind");
                            }
                            vm.maxSped=max.wndv;
                            vm.maxStnm=max.stnm;
                            vm.time();
                         },
                        loadtemp:function(){//初始化库容数据
                            vm.count=vm.tempData.length;
                            var max=[];
                            var arr=[];
                            arr=vm.tempData.$model;
                            max=arr[0];
                            for(var i=1;i<arr.length;i++)
                            {
                               max=vm.maxfunc(max,arr[i],"temp");
                            }
                            vm.maxTemp=max.temp;
                            vm.maxStnm=max.stnm;
                            vm.time();
                        },
                        loadrain:function(){//初始化雨情数据
                            vm.count=vm.rainData.length;
                            var max=[];
                            var arr=[];
                            arr=vm.rainData.$model;
                            max=arr[0];
                            for(var i=1;i<arr.length;i++)
                            {
                               max=vm.maxfunc(max,arr[i],"rain");
                            }
                            vm.maxRain=max.rain;
                            vm.maxStnm=max.stnm;
                            vm.time(); 
                        },
                        loadwater:function(){//初始化水情数据
                            vm.count=vm.waterData.length;
                            var river=[],reservoir=[],arr=[];
                            var num1=0,num2=0;
                            arr=vm.waterData.$model;
                            for(var i=0;i<arr.length;i++)
                            {
                               if(arr[i].type=="河道"&&arr[i].wr_fsl!="0"&&arr[i].wr_fsl!=null)
                               {
                                  river.push(arr[i]);
                               }
                               if(arr[i].type=="水库"&&arr[i].wr_fsl!="0"&&arr[i].wr_fsl!=null)
                               {
                                  reservoir.push(arr[i]);
                               }
                            }
                            for(var m=0;m<river.length;m++)
                            {
                                if(parseFloat(river[m].zfl)>parseFloat(river[m].wr_fsl))
                                {
                                   num1++;
                                }
                            }
                            for(var n=0;n<reservoir.length;n++)
                            {
                              if(parseFloat(reservoir[n].zfl)>parseFloat(reservoir[n].wr_fsl))
                                {
                                   num2++;
                                }
                            }
                            vm.wrcount=num1;
                            vm.flscount=num2;
                            vm.time();
                        },
                        /*
                            比较大小
                            a,b:两个要比较的数
                            c：比较类型
                        */
                        maxfunc:function(a,b,c)
                        {
                                if(c=="wind")
                                {
                                    if(parseFloat(a.wndv)>parseFloat(b.wndv))
                                    {
                                        return a;
                                    }
                                    else
                                    {
                                        return b;
                                    }
                                }
                                if(c=="temp")
                                {
                                    if(parseFloat(a.temp)>parseFloat(b.temp))
                                    {
                                        return a;
                                    }
                                    else
                                    {
                                        return b;
                                    }
                                }
                                if(c=="rain")
                                {
                                    if(parseFloat(a.rain)>parseFloat(b.rain))
                                    {
                                        return a;
                                    }
                                    else
                                    {
                                        return b;
                                    }
                                }
                        },
                        time:function(){//获取昨日8点到现在的时间
                               var date = new Date();
                               var to=date.format("yyyy-MM-dd hh:mm");
                               var yes=__DataUtil.dateAdd(date,"d",-1).format("yyyy-MM-dd 08:00");
                               vm.startm=yes;
                               vm.endtm=to; 
                        },
                        datemiscroll:function(){//时间弹出功能
                                $('#mobiDate').mobiscroll().range({
                                    theme: 'mobiscroll',
                                    lang: 'zh',
                                    display: 'modal',
                                    dateFormat: 'yyyy-mm-dd 08:00:00',
                                    defaultValue: [ new Date(2015, 10, 10), new Date(2015, 10, 17) ]

                                });
                                $('#mobiDate').change(function(e){

                                    var arr=$(this).val().split(" - ");
                                     vm.startm=arr[0];
                                     vm.endtm=arr[1];
                                    //var tm={btm:arr[0],etm:arr[1]};
                                    //chartTable.getDataTest(tm);
                                    //avalon.log(tm);
                                });
                      }
                })
                table.options.tableVm=vm;

                return vm;

            }

    }
    return table;
});
