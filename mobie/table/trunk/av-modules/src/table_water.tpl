

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
      <span class="glyphicon glyphicon-triangle-bottom"></span> &nbsp;&nbsp;
      <label>共{{count}}个站，超警<label style="color:#ff4f51">{{wrcount}}</label>个，&nbsp;超讯限<label style="color:#ffaf17">{{flscount}}</label>个</label>   
 </div>

<!--表头-->
 <div  class="col-xs-12 pa">
    <table class="table table-bordered"  style="margin-bottom: 0;background-color:#0274d4;">
      <col ms-repeat="waterhead" ms-css-width="el"/>
     <tr ms-each="waterTitle">
       <td class="cen">{{el}}</td>
     </tr>
</table>
 </div>

<!--风情表格数据-->
 <div class="col-xs-12 pa1">
    <table class="table table-bordered" ms-each="waterData"> 
       <col ms-repeat="waterhead" ms-css-width="el"/>
       <tr>
         <td class="cen">{{el.addvcd}}</td>
         <td class="cen">{{el.stnm}}</td>
         <td class="cen">{{el.zfl}}</td>
         <td class="cen">{{el.wr_fsl}}</td>
         <td class="cen">{{el.type}}</td>
       </tr>
    </table>
 </div>