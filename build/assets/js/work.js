$(document).ready(function () {
   /* читать дальше */
   
   if ($('.project-is').length > 0) {
      /*$(".map").mousemove(function (pos) {
         console.log('Относительные координаты: По оси X:'+pos.offsetX+', По оси Y:'+pos.offsetY);
      });*/
      
      $(".map .region").on( 'click', function (event) {
         let target = event.target,
             id = $(target).prop('id'),
             $img = $('.project__map_img'),
             hide = 'region_hide';
         
         $('.region_hide').removeClass(hide);
         $img.removeProp('class').addClass('project__map_img');
         $img.addClass(id);
         $('.region').addClass(hide);

         let info = $('.project__region_holder.region_' + id );
         
         
         info.fadeIn();
         
         $img.on( 'click', function(e) {
            console.log(e.target);
            $('.region_hide').removeClass(hide);
            $(this).removeClass(id);
            $('.project__region_holder').fadeOut();
         });
      });
    

   }
   
   
});
