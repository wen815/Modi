/*change background of navigation*/
$(function(){
  $("ul li").hover(function(){
     $(this).find(".s") .animate({height:"200%"});
 $(this).siblings().find(".s") .animate({height:"0"});
  });
});

/*hide and show the contents*/  
$(function(){
$("#content").find("section").hide();    
$("#content").find(".sc1").show();   

$("nav ul li").click(function(){
   var c=$(this).attr("class");
var s="#content .s"+c;
$(s).fadeIn(1000);
$(s).siblings().fadeOut(1000);
});
});




