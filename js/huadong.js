$(function(){
	
$('.ten_box').siblings().mouseenter(function(){
	$(this).find('.hidden').stop().animate({'height':'76px'},200);	
	$(this).find('span.ping').stop().fadeIn(200);	
	$(this).find('span.ping span.lun').stop().fadeIn(200);
//  $(this).find('span.ping').show();	
// 	$(this).find('span.ping span.lun').show();

})
$('.ten_box').siblings().mouseleave(function(){
	$(this).find('.hidden').stop().animate({'height':'0px'},200);	
	$(this).find('span.ping').stop().fadeOut(200);	
	$(this).find('span.ping span.lun').stop().fadeOut(200);
//	$(this).find('span.ping').hide();	
// 	$(this).find('span.ping span.lun').hide();
	
})















	
})
