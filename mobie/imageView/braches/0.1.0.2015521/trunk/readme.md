

水情方法如下：
[
                $id: options.clid,
                currenti: 0,//当前轮播图片的id号
                op: 0.3,//上一张/下一张按钮的透明度
                ind: 0,//存放8张图片承载页的编号
                dd: null,//定时器变量
                currentYT:"广东",//当前城市页签
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
                
                /*
                初始化数据函数参数
                参数options：数据源
                */
                init: function (options) {
                   satellite_pic.options=$.extend(satellite_pic.options,options);
                   vm.ytChange(satellite_pic.options.titleType);
                },
                
                /*
                  初始化数据，并将图片化为8张一组的二维数组
                  参数url:获取图片的数据源
                  参数params：获取数据传递的参数
                */
                getdata: function (url, params) {

                },
                bordersty:function(){//设置头部城市页签的边框
               
                    
                },
                /*
                  点击城市页签获取相应的数据源 
                  参数type:城市类型
                */
                ytChange:function(type){
                 
                },
                clickstop: function () {//点击开始or暂停，实现定时器的开始和暂停
                  
                },
                clickleft: function () {//点击按钮，呈现上一张图片
                    
                },
                clickright: function () {//点击按钮，呈现下一张图片
                  
                },
                
                /*
                  点击下方8张一组的任意图片，实现上方图片变化
                  参数imgid：被点击的图片的id
                */
                clickImg: function (imgid) {
                   
                },
                opa1: function () {//将下方8张一组的指定一张图片设置透明度、背景色、和字体颜色
                 
                },
                opa2: function () {//将下方8张一组的所有图片设置透明度、背景色、和字体颜色
                 
                },
                swiperFun2: function () {//下方8张一组图片的承载页的效果函数
                   
                },

                autoslide: function () {//下方8张一组图片的承载页的自动切换到上一页或下一页
                   
                },

                swiperFun: function () {//头部城市页签的显示效果
                  
                }
]

-------------------------------------------------------------------------------

