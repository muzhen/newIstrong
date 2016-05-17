
<!--<div class="col-xs-2 topsty topleft" >
        <span class="glyphicon glyphicon-menu-left"></span>        
</div>   

<div class="col-xs-8 topsty topmid" >
           <label>实时风情</label>    
</div>

<div class="col-xs-2 topsty topright" >
        <span class="glyphicon glyphicon-time"></span>   
</div>
-->

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
      <label>共{{count}}个站，最大风速{{maxStnm}}&nbsp;{{maxSped}}m/s</label>   
 </div>

<!--表头-->
 <div  class="col-xs-12 pa">
    <table class="table table-bordered"  style="margin-bottom: 0;background-color:#0274d4;">
      <col ms-repeat="windhead" ms-css-width="el"/>
     <tr ms-each="windTitle">
       <td class="cen">{{el}}</td>
     </tr>
</table>
 </div>

<!--风情表格数据-->
 <div class="col-xs-12 pa1">
    <table class="table table-bordered" ms-each="windData"> 
       <col ms-repeat="windhead" ms-css-width="el"/>
       <tr>
         <td class="cen">{{el.addvcd}}</td>
         <td class="cen">{{el.stnm}}</td>
         <td class="cen">{{el.wndv}}</td>
         <td class="cen">{{el.wnddir}}</td>
       </tr>
    </table>
 </div>