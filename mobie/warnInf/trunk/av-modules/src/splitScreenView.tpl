
 <div class="col-xs-12">
    <table class="table table-bordered"style="table-layout:fixed;" ms-each="warndata" > 
       <tr class="he">
         <td  class="bgco" style="width: 30%;">预警类别</td>
         <td  style="width:70%;">{{el.warn_type}}</td>
       </tr>
       <tr class="he">
         <td  class="bgco" style="width: 30%;">预警等级</td>
         <td  style="width:70%;vertical-align: middle;">{{el.warn_rank}}</td>
       </tr>
       <tr class="he">
         <td   class="bgco" style="width: 30%;">预警等级</td>
         <td  style="width:70%;vertical-align: middle;">{{el.warn_title}}</td>
       </tr>
       <tr class="he">
         <td  class="bgco" style="width:50%;" colspan="2">预警要求</td>
       </tr>
        <tr>
         <td style="width:50%;" colspan="2">
            <div style="width:100%;height:300px;overflow:auto;overflow-x:hidden;text-align: left;">
               <p style="text-indent:2em;font-size: 15px;">
                 {{el.warn_html}}
               </p>
            </div>
         </td>
       </tr>
    </table>
 </div>