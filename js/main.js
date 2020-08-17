window.onscroll = function(){
		var t = document.documentElement.scrollTop || document.body.scrollTop;		
		var top_div1=document.getElementById("yin-dao");
		if( t >= 100 ) {	
			top_div1.style.display="block";					
		} else {
			top_div1.style.display="none"
		}
		
		
		var top_div = document.getElementById( "animg1" );
		var top_div = document.getElementById( "animg2" );	
		var top_div = document.getElementById( "animg3" );	
		var top_div = document.getElementById( "animg4" );	
		var tue = document.documentElement.scrollTop || document.body.scrollTop;
	//	alert(tue);
		if( tue >= 1200 ) {				
			$("#animg1").show("slow");			
			$("#animg2").show("slow");
			$("#animg3").show("slow");
			$("#animg4").show("slow");
		}else{
			$("#animg1").hide("slow");			
			$("#animg2").hide("slow");
			$("#animg3").hide("slow");
			$("#animg4").hide("slow");	
		}
		
	
	}
//获取url参数	
function GetQueryString(name){

     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");

     var r = window.location.search.substr(1).match(reg);

     if(r!=null)return  unescape(r[2]); return null;

}
$(document).ready(function($){

	var offset = 300,
	offset_opacity = 1200,
	scroll_top_duration = 700,
	$back_to_top = $('.cd-top');
  
	$(window).scroll(function(){
	
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});