$(function(){	
	const swiper = new Swiper(".mySwiper", {
		pagination: {
		  el: ".swiper-pagination"
		}
	});
	$("nav > ul > li").hover(
		function(){
			$(this).children("ul").fadeIn(300);
		},
		function(){
			$(this).children("ul").fadeOut(300);
		}
	);
	$("nav > ul > li > a").focusin(function(){
		$(this).next().fadeIn(300);
		$(this).parent().addClass("active");
	});
	$("nav li li:last-child > a").focusout(function(){
		$(this).parent().parent().fadeOut(300);
		$(this).parent().parent().parent().removeClass("active");
	});
});