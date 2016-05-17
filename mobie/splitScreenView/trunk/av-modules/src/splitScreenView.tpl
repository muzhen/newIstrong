           <div class="col-sm-6" >

                   <div class="row mar-0">
                       <!--卫星云图 cloud -->
                       <div class="com-sm-12"   style="height:250px; padding-bottom:1%;" ms-controller="left-part-cloud"    data-include-rendered="funcCloud">
                           <!--<img src="../av-modules/src/static/img/sea.jpg" alt=""/>-->
                           <img ms-attr-src="{{cloudSrc1}}" alt=""/>{{cloudSrc1}}
                       </div>
                       <!--台风路径-->
                       <div class="col-sm-6" style="min-height:200px;        padding-left: 0;">
                           <img ms-attr-src="{{typhoonSrc}}" alt=""/>
                       </div>
                       <!--气象雷达-->
                       <div class="col-sm-6 " style="min-height:200px;      padding-right: 0;">
                           <img ms-attr-src="{{weatherSrc}}" alt=""/>
                       </div>
                   </div>
           </div>
            <!--雨量等值面及量级统计-->
            <div class="col-sm-6 right-part" ms-controller="right-part-rain"  ms-include-src="{{rightPartTpl}}"  data-include-rendered="func">
                <div class="  content ">
                  <div class=" " style="width:100%;height:45%; padding-bottom:1%;">
                        <img src="../av-modules/src/static/img/sea.jpg" alt=""/>
                 </div>
                 <div class="  rain ">
                     <h3 class="text-center">今日降雨实况</h3>
                     <ul  ms-each="rainData" class="row">
                         <li class="col-sm-6">
                             {{el.level_name}}<small>{{el.level_num}}</small>
                             <span class="pull-right">{{el.value}}</span>
                         </li>
                     </ul>
                     <p>
                        今日8点至今全县有10个镇发生最大降雨出现在马江镇，累计雨量64毫米。
                     </p>
                 </div>

                 </div>
            </div>

