$(document).ready(function(){
	$("img").hide();
	$("img").fadeIn(1000);
	$("#menu1").hide();
	$("#header").animate({top: '-=74px'},1000);
	$("#header").animate({top: '+=20px'},600);
	$("#about").mouseenter(function(){
		$("#about").css({"opacity":"0.8"});
	});
	$("#about").mouseleave(function(){
		$("#about").css({"opacity":"0.6"});
	});
	$("#menu").click(function(){
		$("#menu1").fadeToggle("slow")
	});
	$("#menu").mouseenter(function(){
		$("#button").css({"color":"black"});
		$("#button").css({"text-shadow":"2px 2px 2px gray"});
	});
	$("#menu").mouseleave(function(){
		$("#button").css({"color":"white"});
		$("#button").css({"text-shadow":"1px 1px 1px gray"});
	});
	$("img").mouseenter(function(){
		$(this).css({"opacity":"1"})
		$(this).css({"box-shadow":"5px 5px 5px gray"})
		$(this).css({"border":"2px solid black"})
		
		
	});
	$("img").mouseleave(function(){
		$(this).css({"opacity":"0.8"})
		$(this).css({"box-shadow":"2px 2px 2px gray"})
		$(this).css({"border":"0px solid black"})
		
		
	});
});