$(function(){
$('.container1 li').mouseenter(function(){
	$("#slide").animate({left : $(this).offset().left - $("li").eq(0).offset().left},400);
	$("#slide").css({width:$(this).width()});
	
	
});
$(".container1 ul").mouseleave(function(){
	$("#slide").animate({left : "0",},200);
	$("#slide").css({width:"80",});
	
});


  $('.container2 li').mouseenter(function(){
	$("#slide2").animate({left : $(this).offset().left - $("li").eq(0).offset().left},600);
	$("#slide2").css({width:$(this).width()});
	
	
});
$(".container2 ul").mouseleave(function(){
	$("#slide2").animate({left : "0",},100);
	$("#slide2").css({width:"80",});
	
});
        var x = 10;
		var y = 20;
    $(".tip>a").mouseover(function(e){
		this.myTitle=this.title;
		this.title="";
		var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
		
		$('body').append(tooltip);
		$("#tooltip").css({
			"top":(e.pageY+y) + "px",
			"left":(e.pageX+x) + "px"
			}).show("fast");
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({
			"top" : (e.pageY+y) + "px",
			"left" : (e.pageX+x) + "px"
			
		});
		
	});


})