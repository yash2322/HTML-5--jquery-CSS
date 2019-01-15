$(document).ready(function(){
    $('#xyz').mouseenter(function(){
    $('#xyz').fadeTo('fast',1);
});
$('#xyz').mouseleave(function(){
    $('#xyz').fadeTo('fast',0.5);
});
});