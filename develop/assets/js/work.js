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

         let info = $('.project__region_holder.card_' + id );
         
         
         info.fadeIn();
         
         $img.on( 'click', function(e) {
            $('.region_hide').removeClass(hide);
            $(this).removeClass(id);
            $('.project__region_holder').fadeOut();
         });
      });
      
      $('.project__region_names div').on( 'click', function (event) {
         let target = event.target,
             data = $(target).data('region'),
             $img = $('.project__map_img');
         
         $('.region_chosen').removeClass('region_chosen');
         $(this).addClass('region_chosen');
         $img.removeAttr('class').addClass('project__map_img');
         $img.addClass(data);
         
         $img.on( 'click', function(e) {
            $('.region_chosen').removeClass('region_chosen');
            $(this).removeClass(data);
         });
      });
    

   }
   
   
});
