/**
 * Created with JetBrains WebStorm.
 * User: strong
 * Date: 16-5-3
 * Time: 上午11:43
 * To change this template use File | Settings | File Templates.
 */
define(['avalon', 'jquery','leaflet'], function (avalon, $,L) {
    var mapLeaf = {
        options: {
            clid: "",
            url: {},
            map:{},
            drawType:['point']
        },
        init: function (options) {
            mapLeaf.options = $.extend(mapLeaf.options, options);
            var vm=mapLeaf.initVm();
           // mapLeaf.initMarker();
            return vm;
        },
        getData:function(){
            var url=mapLeaf.options.url.src;
            $.getJSON(url,function(result){

                $.each(mapLeaf.options.drawType,function(i,item){
                    switch (item){
                        case "point":
                            mapLeaf.initMarker(result);
                        case "line":
                            mapLeaf.initPolyline(result);
                    }

                })

            })

        },
        initVm: function () {
            var vm = avalon.define({
                    $id: mapLeaf.options.clid,
                    mid: mapLeaf.options.clid
                }
            );
            mapLeaf.options.vm=vm;
            return vm;
        },
        /*
        * 初始化要打的点
        * */
        initMarker:function(datas){
            var points=[];
            for(var n=0;n<1;n++){
                $.each(datas,function(i,item){
                    var point={
                        x:item.X+n/100,
                        y:item.Y+n/100,
                        iconUrl:'../av-modules/leaflet-0.7.7/0.7.7/images/marker-icon.png',
                        iconRetinaUrl:'../av-modules/leaflet-0.7.7/0.7.7/images/marker-icon-2x.png',
                        width:18,
                        height:20
                    };
                    point=$.extend(point,item);

                    points.push(point);
                });
            }
            mapLeaf.addMapByMarkers(points);

        },
        /*
        * 批量往地图上打点
        * */
        addMapByMarkers:function(markers){
            var map=mapLeaf.options.map;
            var markerArr=[];
            $.each(markers,function(i,item){
                var myIcon = L.icon({
                    iconUrl: item.iconUrl,//'../av-modules/leaflet-0.7.7/0.7.7/images/marker-icon.png',
                    iconRetinaUrl: item.iconRetinaUrl,//'../av-modules/leaflet-0.7.7/0.7.7/images/marker-icon-2x.png',
                    iconSize: [18, 20],
                    iconAnchor: [item.width+4, item.height+5],
                    popupAnchor: [item.width-25, item.height-96],
                    shadowUrl: '',
                    shadowRetinaUrl: '',
                    shadowSize: [item.width+20, item.height],
                    shadowAnchor: [item.width+4, item.height+5]
                });

                var myIcon2 = L.divIcon({className: 'my-div-icon',html:"<span class='glyphicon glyphicon-cloud' aria-hidden='true'>123</span>"});
                var point=[item.y,item.x]
                /*L.marker(point, {icon: myIcon2,title:"test"}).on('click',function(e){
                    mapLeaf.initPopup(e,point);
                }).addTo(map);   */

                markerArr.push(L.marker(point, {icon: myIcon2,title:"test",data:item}).on('click',function(e){
                    mapLeaf.initPopup(e,point);
                }));
            });
           // var polyline = L.polyline([[28.09,120.47],[28.1,120.85]], {color: 'red'});
           // L.layerGroup(markerArr).addLayer(polyline).addTo(map);
            L.layerGroup(markerArr).addTo(map);
        },
        /*
        * 绘制线函数
        * */
        initPolyline:function(datas){
            console.log('画线功能待完善！！！');
        },
        /*
         * 绑定图层视窗改变的响应
         * */
        bindViewReset:function(){
            var map=mapLeaf.options.map;
            //viewreset
            map.on('viewreset',function(e){
                mapLeaf.markerPanesToImg() ;
               // console.log(e.getBounds());
            });
        },
        /*
        * 图元转为为img标签
        * */
        markerPanesToImg:function(){
            var map=mapLeaf.options.map;
            //console.log(map.getPanes().markerPane);
//            var divContent = map.getPanes().markerPane.innerHTML;
//            var data = "data:image/svg+xml," +
//                "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>" +
//                "<foreignObject width='100%' height='100%'>" +
//                "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:16px;font-family:Helvetica'>" +
//                divContent +
//                "</div>" +
//                "</foreignObject>" +
//                "</svg>";
//            var img = new Image();
//            img.src = data;
//            // document.getElementsByTagName('body')[0].appendChild(img);
//            map.getPanes().markerPane.innerHTML= "<img src='"+img.src+"'/>";
        },
        /*
        * 初始化弹出层
        * */
        initPopup:function(event,point){
            var map=mapLeaf.options.map;
            var targetData=event.target.options.data;
            var latlng = L.latLng(point[0], point[1]);

            var popup = L.popup()
                .setLatLng(latlng)
                .setContent('<p>'+targetData["STNM"]+'<br />'+targetData["TM"]+'</p>')
                .openOn(map);
            debugger;

        },

        /*
         * 初始化地图
         * */
        initMap:function(){
            var map = L.map('map',{
                center: [28.019256987158702, 120.62301635742188],
                zoom: 8
            });

            mapLeaf.options.map=map;

            //添加图层
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(map);

            function onLocationFound(e) {
                var radius = e.accuracy / 2;
                //添加标注
                L.marker(e.latlng).addTo(map)
                    //为覆盖物标注、圆添加弹出气泡
                    .bindPopup("You are within " + radius + " meters from this point").openPopup();
                //添加圆形
                L.circle(e.latlng, radius,{color:"red"}).addTo(map);
            }

            function onLocationError(e) {
                // alert(e.message);
            }
            //处理事件
            map.on('locationfound', onLocationFound);
            map.on('locationerror', onLocationError);
            map.locate({setView: true, maxZoom: 16});//设置地图中心和缩放级别
            map.on('moveend',function(){
                var map=mapLeaf.options.map;
                console.log(map.getBounds());
                //.log(map.getCenter());
            });
            mapLeaf.getData();
            //mapLeaf.bindViewReset();
        }
    }

    return mapLeaf;

})