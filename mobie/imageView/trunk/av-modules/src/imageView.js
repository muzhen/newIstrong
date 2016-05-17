define(["avalon", "jquery", "swiper","JsUtil", 'css!imageView.css'], function (avalon, $, Swiper,js) {
    var satellite_pic = {
        options:{
          clid:"",
          urlimg:"",//图片路径
          urldata:"",//数据路径
          attrtite:"",//字段名称列表
          picVm:{}
        },
         /*
        初始化函数参数
        options--传人参数，例如:options.clid
        */
        init:function(options){
             satellite_pic.options=$.extend(satellite_pic.options,options);
             var vm=satellite_pic.picVm(); 
              var pa = {category: "cloud/fy2", time: "[2016-04-10T08:00:00,2016-04-12T08:00:00]"};
           //  satellite_pic.ytChange(satellite_pic.options.titleType);
            satellite_pic.getdata(satellite_pic.options, pa);
                   
                return vm;
        },
         /*
          点击城市页签获取相应的数据源 
          参数type:城市类型
       
        ytChange:function(type){
               var pa = {category: "cloud/fy2", time: "[2016-04-10T08:00:00,2016-04-12T08:00:00]"};
               
               switch(type){
                  case "风云二号": pa["category"]="cloud/fy2";break;
                  case "广东": pa["category"]="cloud/fy2";break;
                  case "日本":  pa["category"]="cloud/fy2"; break;
                  case "广东雷达": pa["category"]="cloud/fy2";break;
                  case "杭江雷达": pa["category"]="cloud/fy2";break;
                  case "汕尾雷达":  pa["category"]="cloud/fy2"; break;
                  default:break;
                            //category=cloud/fy2&time=[2016-04-10T08:00:00,2016-04-12T08:00:00]
               }
               satellite_pic.getdata(satellite_pic.options.url, pa);
               satellite_pic.options.picVm.currentYT=type;
        }, */
        /*
          初始化数据，并将图片化为8张一组的二维数组,初始化字段名称
          参数url:获取图片的数据源，及字段名称
          参数params：获取数据传递的参数
        */
        getdata: function (url, params) {
            $.getJSON(url.urldata, params, function (result) {
                var attr1=[],attr2=[],attr3=[];
               
                attr1=satellite_pic.options.attrtite;
                attr2=result.data;
                var t=[attr1.length];
                for(var m=0;m<attr1.length;m++)
                {
                   var da={"name":"","note":"","unit":""};
                    da.name=attr1[m];
                    da.note=attr2[m];
                    if(da.name=="数据范围")
                    {
                      da.unit="km";
                    }
                    else if(da.name=="观测时间")
                    {
                      da.unit="BJT";
                    }
                    else
                    {
                      da.unit="";
                    }
                    attr3.push(da);
                }
                satellite_pic.options.picVm.content=attr3;
            });
            $.getJSON(url.urlimg, params, function (result) {
                    /*for (var ti in result) {
                        result[ti].image_path = '../../' + result[ti].image_path;
                    }*/
                    satellite_pic.options.picVm.img = result;
                    var imgg=result;
                    var arr = [];
                    var t, k = 0, f = 1;
                     for (var w = 0; w < imgg.length; w++) {
                        imgg[w].tm =imgg[w].tm.toDate().format("hh:mm");
                    }
                    if (imgg.length % 8 == 0) {
                        t = parseInt(imgg.length / 8);
                    }
                    else {
                        t = parseInt(imgg.length / 8) + 1;
                    }
                    for (var d = 0; d < t; d++) {
                        f = (d + 1) * 8;
                        arr[d] = [];
                        for (var x = 0; x < 8; x++) {
                            for (; k < f; k++) {
                                if (imgg[k]) {
                                    arr[d].push(imgg[k]);
                                }

                            }
                        }
                    }
                    
                    satellite_pic.options.picVm.ig = arr;
                   
                    
            });
        },
        picVm:function(){
             var vm = avalon.define({
                      $id: satellite_pic.options.clid,
                      currenti: 0,//当前轮播图片的id号
                      op: 0.3,//上一张/下一张按钮的透明度
                      ind: 0,//存放8张图片承载页的编号
                      dd: null,//定时器变量
                      // currentYT:"广东",//当前城市页签
                      currentz: 1,//当前轮播图片的id号
                      starEnd: false,//控制定时器的开启和暂停
                      slide: true,//控制存放8张图片承载页的自动切换上一页或下一页
                      first: true,//控制存放8张图片承载页手动翻页时始终显示每页的第一张
                      swiper2: null,//存放8张图片承载页的变量
                      sp: "glyphicon glyphicon-pause",//开始or暂停图标
                      scc:"../av-modules/src/static/img/1.jpg",
                      //scc: "../av-modules/imageView/0.1.0/static/img/1.jpg",//动态变化图片的路径
                      img: [],//存放所有图片的路径
                      ig: [],//将图片化为8张一组的二维数组
                      content:[],//标题属性字段及内容
                      /*
                      初始化数据函数参数
                      参数options：数据源
                      
                      init: function (options) {
                         satellite_pic.options=$.extend(satellite_pic.options,options);
                         vm.ytChange(satellite_pic.options.titleType);
                      },*/
                      bordersty:function(){//设置头部城市页签的边框
                     
                           var arr=$("#borsty").children("div");
                           for(var i=0;i<arr.length;i++)
                           {
                              if(i==arr.length-1)
                              {
                                          //arr[i].style.borderLeftStyle="none";
                              }
                              else{
                                      arr[i].style.borderRightStyle="none";
                                  }
                           }
                      },
                      addrclick:function(type){
                              satellite_pic.ytChange(type);
                      },
                      clickstop: function () {//点击开始or暂停，实现定时器的开始和暂停
                         vm.starEnd = !vm.starEnd;
                         if (vm.starEnd) {  
                             
                              vm.op = 0.3;
                              vm.sp = "glyphicon glyphicon-play";
                              vm.dd = setInterval(function () {
                                  if (vm.starEnd) {
                                      if (vm.currenti < vm.img.length) {
                                          vm.currentz = vm.currenti;
                                          vm.scc = vm.img[vm.currentz].image_path;
                                          vm.opa2();
                                          vm.opa1();
                                          vm.first = true;
                                          vm.ind = vm.swiper2.activeIndex;
                                          if ((vm.currentz+1) > vm.ind * 8 + 1) {
                                              vm.slide = true;
                                          }
                                          vm.autoslide();
                                          
                                          vm.currenti++;
                                          
                                      } else {
                                          vm.currenti = 0;
                                      }
                                  }
                              }, 1000);
                            } else {
                                  clearInterval(vm.dd);
                                  vm.op = 1;
                                  vm.sp = "glyphicon glyphicon-pause";
                                 }
                      },
                      clickleft: function () {//点击按钮，呈现上一张图片
                           if (vm.op == 1) {
                            //if (!vm.starEnd){
                                  vm.currentz = vm.currentz - 1;
                                  if (vm.currentz >= 0) {
                                      vm.scc = vm.img[vm.currentz].image_path;
                                      vm.currenti = vm.currentz;
                                      vm.opa2();
                                      vm.opa1();
                                      if ((vm.currentz + 1) % 8 == 0 && vm.currentz != 0) {
                                          vm.swiper2.slidePrev();
                                          vm.first = false;
                                      }
                                      vm.ind = vm.swiper2.activeIndex;
                                      if (vm.currentz > vm.ind * 8 + 1) {
                                          vm.ind = vm.swiper2.activeIndex;
                                          vm.slide = true;
                                      }
                                  }
                                  else {
                                      vm.currentz = 0;
                                      vm.currenti = 0;
                                  }
                          }
                      },
                      clickright: function () {//点击按钮，呈现下一张图片
                          if (vm.op == 1) {
                         // if (!vm.starEnd){
                              vm.currentz = vm.currentz + 1;
                              if (vm.currentz < vm.img.length) {
                                  vm.scc = vm.img[vm.currentz].image_path;
                                  vm.opa2();
                                  vm.opa1();
                                  vm.ind = vm.swiper2.activeIndex;
                                  if (vm.currentz > vm.ind * 8 + 1) {
                                      vm.slide = true;
                                  }
                                  vm.autoslide();
                                  vm.currenti = vm.currentz;
                              }
                              else {
                                  vm.currentz = vm.img.length - 1;
                                  vm.currenti = vm.img.length - 1;
                              }
                          }
                      },
                      
                      /*
                        点击下方8张一组的任意图片，实现上方图片变化
                        参数imgid：被点击的图片的id
                      */
                      clickImg: function (imgid) {
                          vm.currentz = imgid;
                          vm.scc = vm.img[vm.currentz].image_path;
                          vm.opa2();
                          vm.opa1();
                          vm.currenti = vm.currentz;
                      },
                      opa1: function () {//将下方8张一组的指定一张图片设置透明度、背景色、和字体颜色
                       
                          $('#'+vm.currentz).css({"opacity":1.0,"background-color":"#0066FF"});
                          var p=$('#'+vm.currentz).children("p");
                          p[0].style.color="white";
                          
                          
                      },
                      opa2: function () {//将下方8张一组的所有图片设置透明度、背景色、和字体颜色
                       
                       for (var q = 0; q < vm.img.length; q++){
                             $('#'+q).css({"opacity":0.3,"background-color":"white"});
                             var p=$('#'+q).children("p");
                             p[0].style.color="black";
                         
                        }

                     
                      },
                      swiperFun2: function () {//下方8张一组图片的承载页的效果函数
                          var swiper2 = new Swiper('.swiper-container1', {
                              paginationClickable: true,
                              onSlideChangeEnd: function (swiper) {
                                  vm.slide = false;
                                  if (!vm.slide && vm.first) {//手动翻页时始终显示每页的第一张
                                      vm.ind = swiper2.activeIndex;
                                      vm.currentz = vm.ind * 8;
                                      vm.opa2();
                                      vm.opa1();
                                      vm.currenti = vm.ind * 8+1;
                                       //vm.z = vm.ind * 8+1;
                                       vm.scc = vm.img[vm.currentz].image_path;
                                   }
                               }
                           });
                          vm.swiper2 = swiper2;
                          vm.starEnd= false;
                          vm.currenti= 0;
                          if(vm.dd){
                            clearInterval(vm.dd);
                             vm.op = 1;
                            vm.sp = "glyphicon glyphicon-play";
                          }
                          //vm.b= false;
                          //vm.scc= "../av-modules/imageView/0.1.0/static/img/1.jpg";
                          vm.scc="../av-modules/src/static/img/1.jpg";
                          vm.opa2();
                         // vm.clickstop();
                      },

                      autoslide: function () {//下方8张一组图片的承载页的自动切换到上一页或下一页
                          if (vm.slide) {
                              if ((vm.currentz % 8 == 0 && vm.currentz != 0)) {
                                  vm.swiper2.slideNext();//mySwiper.slidePrev();
                              }
                              else if (vm.currentz == 0) {
                                  vm.swiper2.slideTo(0, 1000, false);
                              }
                          }

                      },

                      swiperFun: function () {//头部城市页签的显示效果
                          var swiper = new Swiper('.swiper-container', {
                              pagination: '.swiper-pagination',
                              slidesPerView: 3,
                              paginationClickable: true,
                              spaceBetween: 0,
                              freeMode: true
                          });
                      }
              });
            satellite_pic.options.picVm=vm;
            return vm;
        }
   }
   return satellite_pic;
});
