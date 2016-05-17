<h3>缩略图</h3>
 <div ms-each="lbimg" data-each-rendered="swiperFun">
     <div ms-class="media">
       <div ms-class="media-body">
          <h4 ms-class="media-heading" ms-css-font-size={{titleSize}} >{{el.title}}</h4>
          {{el.meg}}
       </div>
       <div ms-class="media-right">
         <a  href="#">
           <img ms-class="media-object" ms-attr-alt={{imgAlt}}  ms-attr-src="el.image_path" style="width: 64px; height: 64px;">
         </a>
       </div>
    </div>
 </div>


<br/>
<br/>
<h3>面板</h3>
<div ms-each="lbimg" >
    <div ms-class="panel panel-default">
      <div ms-class="panel-heading">
        <h3 ms-class="panel-title">{{el.title}}</h3>
      </div>
      <div ms-class="panel-body">
        {{el.meg}}
      </div>
    </div>
</div>


<br/>
<br/>
<h3>Table</h3>
    <table ms-class="table table-hover" >
      <thead>
        <tr  ms-each="tableda">
          <th>{{el.title}}</th>
        </tr>
      </thead>
      <tbody >
        <tr  ms-each="tableda">
          <th >{{el.meg}}</th>
        </tr>
      </tbody>
    </table>
