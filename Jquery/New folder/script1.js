$(document).ready(function(){
    $('#xyz').mouseenter(function(){
    $('#xyz').fadeTo('fast',1);
});
$('#xyz').mouseleave(function(){
    $('#xyz').fadeTo('fast',0.5);
});
    $("#contact").hide();
    $("button").mouseenter(function(){
        $("#contact").show("slow");
    });
$("#conc").mouseleave(function(){
        $("#contact").hide("slow");
    });
    $("#song").hide();
    
$("#au1").click(function(){
$("#song").slideToggle();
    });
});


