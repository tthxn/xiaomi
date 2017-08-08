//
//
////白色导航
//$('.all .three .nav a').mouseenter(function(){
//	$("#hide").stop().animate({'height':'240px'},100);
//	var n = $(this).index();
//	if(n==0){
////		$("#hide").find(".xiaomi").stop().animate({'height':'240px'},100);
//		$("#hide").find('.xiaomi ul').show();	
//
//	}
//	if(n==1){
////		$("#hide").find(".hongmi").stop().animate({'height':'240px'},100);
//		$("#hide").find('.hongmi ul').show();	
//	}
//	if(n==2){
////		$("#hide").find(".pingban").stop().animate({'height':'240px'},100);
//		$("#hide").find('.pingban ul').stop().show();	
//	}
//	if(n==3){
////		$("#hide").find(".dianshi").stop().animate({'height':'240px'},100);
//		$("#hide").find('.dianshi ul').stop().show();	
//	}
//	if(n==4){
////		$("#hide").find(".hezi").stop().animate({'height':'240px'},100);
//		$("#hide").find('.hezi ul').stop().show();	
//	}
//	if(n==5){
////		$("#hide").find(".luyouqi").stop().animate({'height':'240px'},100);
//		$("#hide").find('.luyouqi ul').stop().show();	
//	}
//	if(n==6){
////		$("#hide").find(".yingjian").stop().animate({'height':'240px'},100);
//		$("#hide").find('.yingjian ul').stop().show();	
//	}
//	
//	
//})
//	
//	
//
//$('.all .three .nav a').mouseleave(function(){
//	$("#hide").stop().animate({'height':'0'},100);
//	var n = $(this).index();
//	if(n==0){
////		$("#hide").find(".xiaomi").stop().animate({'height':'0'},100);
//		$("#hide").find('.xiaomi ul').stop().hide();	
//
//	}
//	if(n==1){
////		$("#hide").find(".hongmi").animate({'height':'0'},100);
//		$("#hide").find('.hongmi ul').stop().hide();	
//	}
//	if(n==2){
////		$("#hide").find(".pingban").stop().animate({'height':'0'},100);
//		$("#hide").find('.pingban ul').stop().hide();	
//	}
//	if(n==3){
////		$("#hide").find(".dianshi").stop().animate({'height':'0'},100);
//		$("#hide").find('.dianshi ul').stop().hide();	
//	}
//	if(n==4){
////		$("#hide").find(".hezi").stop().animate({'height':'0'},100);
//		$("#hide").find('.hezi ul').stop().hide();	
//	}
//	if(n==5){
////		$("#hide").find(".luyouqi").stop().animate({'height':'0'},100);
//		$("#hide").find('.luyouqi ul').stop().hide();	
//	}
//	if(n==6){
////		$("#hide").find(".yingjian").stop().animate({'height':'0'},100);
//		$("#hide").find('.yingjian ul').stop().hide();	
//	}
//	
//	
//})
//

$(function(){
	
	$('.all .three .nav a').mouseenter(function(){

		var index1 = $(this).index();
		$(this).parents('.all').siblings('#hide').find('.menu').eq(index1).stop().show();
		
			$('#hide .menu').mouseenter(function(){
				$(this).stop().show();
			})
			$('#hide .menu').mouseleave(function(){
				$(this).stop().hide();
			})
	})
	
	$('.all .three .nav a').mouseleave(function(){
	
		$(this).parents('.all').siblings('#hide').find('.menu').stop().hide();

	})

	
})

















//	$(function(){
//	
//	$('.all .three .nav a').mouseenter(function(){
//		var index1 = $(this).index();
//			$(this).parents('.all').siblings('#hide').find('.menu').eq(index1).stop().animate({'height':'230px'},200);
//			$(this).parents('.all').siblings('#hide').find('.menu ul').eq(index1).show().siblings('.menu').hide();
//
//			
//		
//
//	})
//	
//	$('.all .three .nav a').mouseleave(function(){
//		
//	
//		
//		
//		var index1 = $(this).index();
//		$(this).parents('.all').siblings('#hide').find('.menu').animate({'height':'0px'},200);
//		$(this).parents('.all').siblings('#hide').find('.menu ul').hide();
//		
//	})
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//})
