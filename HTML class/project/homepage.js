$(document).ready(function(){
$("#logo").animate({top:'+=110px'},1000)
$("#reservation_slide").hide();
$("#side").slideUp();
	$("ul").hide();
	$("#menu").click(function(){
		$("#list").slideToggle();
	});
	$("#mid").mouseenter(function(){
		$("#list").slideUp();
	
	});
$("#slide").mouseenter(function(){
	$("#header").animate({top:'-=20px'});
	$("#reservation").fadeOut();
  
});
$("#slide").mouseleave(function(){
	$("#header").animate({top: "+=20px"});
	$("#reservation").fadeIn();

});
$("#reservation").mouseenter(function(){
$("#reservation").css({"background-color": "#D4AF37 "});
$('#reservation1').css({"color":"white"});
$('#reservation').css({"border-bottom":"3px solid white"});
});
$("#reservation").mouseleave(function(){
$("#reservation").css({"background-color": "white"});
$('#reservation1').css({"color":"black"});
$('#reservation').css({"border-bottom":"6px solid #B0B0B0"});
});
$("#header").animate({left: "-=95px"},1000);
$("#footer").animate({left: "-=95px"},1000);
$("#options").animate({left: "-=95px"},1000);
$("#click_reserve").click(function(){
	$("#ul_reserve").slideToggle();
	$("#reservation_slide").slideToggle();
});
 $("#home").click(function (){
                $('html, body').animate({
                    scrollTop: $("#videos").offset().top
                }, 2000);
            });
 $("#reset").click(function(){
 	alert("Are you sure.");
 });
 $("#small_contact").mouseenter(function(){
 	$("#small_contact").animate({left: "+=220px"},1000);
$("#side").slideDown();
 
 });
 $("#small_contact").mouseleave(function(){
 	$("#small_contact").animate({left: "-=220px"},1000);
 $("#side").slideUp();
 });
 $("#slide").mouseenter(function(){
 	$("#slideshow img").stop();
 });
});
















