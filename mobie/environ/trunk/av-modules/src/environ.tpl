


 <div class="col-xs-12 tit">
      <label>{{station}}</label>   
 </div>


 <div class="col-xs-12" style="padding: 0;padding-top: 45px;">
    <table class="table table-bordered" style="border: none;"> 
      <col style="width:35%"/></col>
       <tr>
         <td class="cen font" style="border: none;text-shadow: 1px 2px #5c7e97;">{{temp}}</td>
         <td class="cen" style="border: none;"><div class="bor">{{qual}}</div><div class="wor">{{note}}</div></td>
       </tr>
    </table>
 </div>
<div class="col-xs-12" style="padding: 0;position: absolute; bottom: 0" >
  <div class="col-xs-12 txt">
      <label>污染物</label>   
 </div>
  <div class="col-xs-12  bgco" style="padding: 0;">
    <table class="table table-bordered" style="margin-bottom: 0;"> 
      <col ms-repeat="pollhead" ms-css-width="el"/>
      
        <tr>
              <td></td>
              <td class="cenve" ms-repeat="Title">{{el}}</td>
              <td></td>
       </tr>
        <col ms-repeat="pollhead" ms-css-width="el"/>
        <tr ms-each="pollData">
              <td></td>
              <td class="cenve">{{el.PM10}}</td>
              <td class="cenve">{{el.PM2_5}}</td>
              <td class="cenve">{{el.NO2}}</td>
              <td class="cenve">{{el.SO2}}</td>
              <td class="cenve">{{el.O3}}</td> 
              <td class="cenve">{{el.CO}}</td>
              <td class="cenve"></td>
       </tr>
    </table>
 </div>
</div>