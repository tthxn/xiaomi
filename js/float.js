
$(function(){
//	不加入   $(function(){}),页面加载完后才有js代码的运行,加上它,在html页面上边引入js代码,页面加载和上浮效果同时进行,就不会出现问题
//或者不加上 $(function(){})，直接在html对应div下面引入js

//若没有上浮效果，发现两个原因：1、js引用中，没有加上$(function(){})
//							2、css代码中对应的div没有加上定位,要用相对定位，相对定位保存原来位置
$('.ten_box').mouseenter(function(){
	$(this).stop().animate({'top':'-3px'},200)				
})
$('.ten_box').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},200)
})

$('.all_bottom .all_two .four .ten_box_l').mouseenter(function(){
	$(this).stop().animate({'top':'-3px'},200)
})
$('.all_bottom .all_two .four .ten_box_l').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},200)
})
		
				
$('.all_bottom .all_two .four .ten_box_last .in_one').mouseenter(function(){
	$(this).stop().animate({'top':'-3px'},200)
})
$('.all_bottom .all_two .four .ten_box_last .in_one').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},200)
})
$('.all_bottom .all_two .four .ten_box_last .in').mouseenter(function(){
	$(this).stop().animate({'top':'-3px'},200)
})
$('.all_bottom .all_two .four .ten_box_last .in').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},200)
})

$('.ten_box_one').mouseenter(function(){
	$(this).stop().animate({'top':'-3px'},200)
})
$('.ten_box_one').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},200)
})

$('.all_bottom .all_two .four .ten_box_l_one').mouseenter(function(){
	$(this).find('img').stop().animate({'top':'-3px'},200)
})
$('.all_bottom .all_two .four .ten_box_l_one').mouseleave(function(){
	$(this).find('img').stop().animate({'top':'0px'},200)
})

$('.all_bottom .all_two .four .ten_box_two').mouseenter(function(){
	$(this).stop().animate({'top':'-3px'},200)
})
$('.all_bottom .all_two .four .ten_box_two').mouseleave(function(){
	$(this).stop().animate({'top':'0px'},200)
})


//<!--盒子上浮效果、代码复用-->
//					<script type="text/javascript">
						$('.ten_box').mouseenter(function(){
							$(this).stop().animate({'top':'-3px'},200)
						//		$('.two_two').stop().animate({'top':'-3px'},200)若没有$(this),
						//		用的是$('.two_two'),是全体盒子上浮,而不是鼠标指向的具体的盒子上浮
						})
						$('.ten_box').mouseleave(function(){
							$(this).stop().animate({'top':'0px'},200)
						})
//					</script>


})