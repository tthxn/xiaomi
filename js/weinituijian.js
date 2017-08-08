var n = 0;

$(".reco .six_right #right").click(function(){		
	n++;
	//注意if要放在animate的前面，先判断后执行
	if(n>2){
		n=2;	
	}
	var l = n * -1226;
	$(".four_tuijian .seven_in").animate({'left':l+'px'},300);
//	颜色变化
	if(n==1){
		$(".reco .six_right #right").css({'color':'#B0B2BB','border':'1px solid #B0B2BB'});
		$(".reco .six_right #left").css({'color':'#B0B2BB','border':'1px solid #B0B2BB'});
	}
	if(n==2){
		$(".reco .six_right #right").css({'color':'#E0E0E1','border':'1px solid #E0E0E1'});
		$(".reco .six_right #left").css({'color':'#B0B2BB','border':'1px solid #B0B2BB'});	
	}

})
$(".reco .six_right #left").click(function(){		
	n--;
	if(n<=0){
		n=0;
	}
	var l = n * -1226;
	$(".four_tuijian .seven_in").animate({'left':l+'px'},300);
	
	//	颜色变化
	if(n==1){
		$(".reco .six_right #right").css({'color':'#B0B2BB','border':'1px solid #B0B2BB'});
		$(".reco .six_right #left").css({'color':'#B0B2BB','border':'1px solid #B0B2BB'});	
	}
	if(n==0){
		$(".reco .six_right #left").css({'color':'#E0E0E1','border':'1px solid #E0E0E1'});
		$(".reco .six_right #right").css({'color':'#B0B2BB','border':'1px solid #B0B2BB'});	
	}
	
	
})


//块上浮效果
$('.all_bottom .all_two .four_tuijian .ten_box_twoa').mouseenter(function(){
	$(this).stop().animate({'top':'-3px'},200)
})
$('.all_bottom .all_two .four_tuijian .ten_box_twoa').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},200)
})
$('.ten_boxa').mouseenter(function(){
	$(this).stop().animate({'top':'-3px'},200)				
})
$('.ten_boxa').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},200)
})







