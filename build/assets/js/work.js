$(document).ready(function () {
   
   if ($('.project-is').length > 0) {
      
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
             $img = $('.project__map_img'),
             $names_holder = $('.project__region_names'),
             $card = $('.project__region_holder.card_' + data + '[ id^="card_big-"]');
         
         $('.region_chosen').removeClass('region_chosen');
         $names_holder.css( 'margin-top', '0');
         $('.project__region_holder[ id^="card_big-"]').fadeOut();
         if ($card.length) {
            $card.fadeIn();
            $names_holder.css( 'margin-top', '190px');
         }
         $(this).addClass('region_chosen');
         $img.removeAttr('class').addClass('project__map_img');
         $img.addClass(data);
         
         $img.on( 'click', function(e) {
            $('.region_chosen').removeClass('region_chosen');
            $('.project__region_holder[ id^="card_big-"]').fadeOut();
            $(this).removeClass(data);
            $names_holder.css( 'margin-top', '0');
         });
      });
      
   }
});
