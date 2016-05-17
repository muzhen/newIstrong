 
<!--城市页签
<div class="col-sm-12 " >-->
 <!-- Swiper
       <div class="swiper-container" style="height:35px;">
            <div id="borsty" class="swiper-wrapper">
                <div class="swiper-slide ra satellite-normal" ms-on-tap="addrclick('杭江雷达')" ms-class-1="satellite-action:currentYT=='杭江雷达'">杭江雷达</div>
                <div class="swiper-slide ra satellite-normal" ms-on-tap="addrclick('广东雷达')" ms-class-1="satellite-action:currentYT=='广东雷达'">广东雷达</div>
                <div class="swiper-slide ra satellite-normal" ms-on-tap="addrclick('汕尾雷达')" ms-class-1="satellite-action:currentYT=='汕尾雷达'">汕尾雷达</div>

            </div>
      </div>
</div> -->

<!-- 图片-->
<div class="col-xs-12 ti"> 
      <label>基本辐射率</label>
</div>
<div class="col-xs-6 att" ms-repeat="content"> 
      <label>{{el.name}}:{{el.note}}{{el.unit}}</label>
</div>

<div class="col-xs-12 pad"> 
      <img ms-attr-src="scc" style="width:100%;height:214px;">
</div>

<!-- 存放8张小图片的轮播页签 -->
<div class="swiper-container1" style="height:177px;overflow:hidden;">
  <div class="swiper-wrapper">
    <div class="swiper-slide" ms-repeat-el="ig" data-repeat-rendered="swiperFun2" style="position:relative;margin-right:20px;">
     
      <div class="row" style="text-align: center;margin: auto;width:100%;position:absolute;left:0;top:0;">

        <div class="col-xs-2 col-md-2" style="padding-left: 0;padding-right: 0;margin-left: 4%;margin-bottom:18px;margin-right:4%" ms-repeat-elem="el" ms-attr-id="$index+8*$outer.$index" ms-on-tap="clickImg($index+8*$outer.$index)">
              <img ms-attr-src="elem.image_path" style="width:100%;height:50px;display:block;margin:0 auto;">
              <p style="margin-bottom:0;font-size: 13px;">{{elem.tm}}</p>
        </div>

      </div>

    </div>

  </div>
</div>

<div  class="col-xs-12" style="padding: 0;">
       <table class="table table-bordered">
          <tr style="text-align: center;font-size:22px;">
               <td class="vec"><span ms-on-tap="clickleft" class="glyphicon glyphicon-menu-left" ms-css-opacity="op"></span></td>
               <td class="vec"><span ms-on-tap="clickstop" ms-class="{{sp}}"></span></td>
               <td class="vec"><span ms-on-tap="clickright"class="glyphicon glyphicon-menu-right" ms-css-opacity="op"></span></td>
         </tr>
      </table>
</div>


 
