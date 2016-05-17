
     <div ms-each="lbimg" data-each-rendered="swiperFun">
          <div class="thumbnail col-sm-6 col-md-4" >
              <div  class="swiper-wrapper">
                  <div class="swiper-slide" >
                        <img ms-attr-src="el.image_path"   style="height: 200px; width: 100%; display: block;">
                  </div>
              </div>
              <div class="caption">
                  <h3>{{el.title}}</h3>
                  <p>{{el.meg}}</p>
                  <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
              </div>
          </div>
     </div>
