$(document).ready(function(){0<$(".project-is").length&&($(".map .region").on("click",function(e){let o=e.target,r=$(o).prop("id"),i=$(".project__map_img"),n="region_hide";$(".region_hide").removeClass(n),i.removeProp("class").addClass("project__map_img"),i.addClass(r),$(".region").addClass(n);let _=$(".project__region_holder.card_"+r);_.fadeIn(),i.on("click",function(e){$(".region_hide").removeClass(n),$(this).removeClass(r),$(".project__region_holder").fadeOut()})}),$(".project__region_names div").on("click",function(e){let o=e.target,r=$(o).data("region"),i=$(".project__map_img"),n=$(".project__region_names"),_=$(".project__region_holder.card_"+r+'[ id^="card_big-"]');$(".region_chosen").removeClass("region_chosen"),n.css("margin-top","0"),$('.project__region_holder[ id^="card_big-"]').fadeOut(),_.length&&(_.fadeIn(),n.css("margin-top","160px")),$(this).addClass("region_chosen"),i.removeAttr("class").addClass("project__map_img"),i.addClass(r),i.on("click",function(e){$(".region_chosen").removeClass("region_chosen"),$('.project__region_holder[ id^="card_big-"]').fadeOut(),$(this).removeClass(r),n.css("margin-top","0")})}))});