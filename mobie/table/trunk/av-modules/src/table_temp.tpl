
<!--头部时间段-->
<div class="col-xs-12 tm">
    <label>
         <span>{{startm|date("yyyy-MM-dd hh:mm")}}</span>
         ～
         <span>{{endtm|date("yyyy-MM-dd hh:mm")}}</span>
         <input id="mobiDate" placeholder="Please Select ..."  style="display:none"/>
    </label>   
</div>

<!--站点统计-->
 <div class="col-xs-12 co">
      <span class="glyphicon glyphicon-triangle-bottom"></span> 
      <label>共{{count}}个站，最高气温{{maxStnm}}&nbsp;{{maxTemp}}℃</label>   
 </div>

<!--表头-->
 <div  class="col-xs-12 pa">
    <table class="table table-bordered"  style="margin-bottom: 0;background-color:#0274d4;">
      <col ms-repeat="temphead" ms-css-width="el"/>
     <tr ms-each="tempTitle">
       <td class="cen">{{el}}</td>
     </tr>
</table>
 </div>

<!--气温表格数据-->
 <div class="col-xs-12 pa1">
    <table class="table table-bordered" ms-each="tempData"> 
       <col ms-repeat="temphead" ms-css-width="el"/>
       <tr>
         <td class="cen">{{el.addvcd}}</td>
         <td class="cen">{{el.stnm}}</td>
         <td class="cen">{{el.temp}}</td>
       </tr>
    </table>
 </div>