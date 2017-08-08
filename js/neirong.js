		
//第一个框
var t = 0;
//给右侧按钮加上单击事件
function aa(){
	t++;
	if(t>2){t=2;}
	var l = t*-296;
	$(".ten_box_one .tushu").animate({'left':l+'px'},300);
	$(".ten_box_one ul li").eq(t).addClass('color_change').siblings('li').removeClass('color_change');
}
$("#new_right").click(aa)

//给左侧按钮加上单击事件
function bb(){
	t--;
	if(t<0){t=0;}
	var l = t*-296;
	$(".ten_box_one .tushu").animate({'left':l+'px'},300);
	$(".ten_box_one ul li").eq(t).addClass('color_change').siblings('li').removeClass('color_change');
}
$("#new_left").click(bb)

//鼠标移入事件
$('.article .ten_box_one').mouseenter(function(){
	$('.article .ten_box_one>a').show();
	$('.article .ten_box_one #new_left').mouseenter(function(){
		$('.article .ten_box_one>a#new_left').css({'background':'#8E8E8E'})
	})
	$('.article .ten_box_one #new_left').mouseleave(function(){
		$('.article .ten_box_one>a#new_left').css({'background':'#D9D9D9'})
	})
	$('.article .ten_box_one #new_right').mouseenter(function(){
		$('.article .ten_box_one>a#new_right').css({'background':'#8E8E8E'})
	})
	$('.article .ten_box_one #new_right').mouseleave(function(){
		$('.article .ten_box_one>a#new_right').css({'background':'#D9D9D9'})
	})
})
$('.article .ten_box_one').mouseleave(function(){
	$('.article .ten_box_one>a').hide();
})








//其他框
//运用闭包，使点击时候其他元素不受影响
$(".article .ten_box").each(function(k,v){
//k代表实参,i代表形参
		(function(i){
			var r = 0;
//			给右侧按钮加单击事件
			$(".article .ten_box .new_right").eq(i).click(function(){
				r++;
				if(r>3){r=3;}
				var l = r*-296;
				$(this).parent('.ten_box').find('.tushu').animate({'left':l+'px'},300);
//				下方对应小圆点颜色变化

				$(this).siblings('ul').find('li').eq(r).addClass('color_change').siblings('li').removeClass('color_change');
			})
			
//			给左侧按钮加单击事件
			$(".article .ten_box .new_left").eq(i).click(function(){
				r--;
				if(r<0){r=0;}
				var l = r*-296;
				$(this).parent('.ten_box').find('.tushu').animate({'left':l+'px'},300);
				$(this).siblings('ul').find('li').eq(r).addClass('color_change').siblings('li').removeClass('color_change');
	
			})
			
			
		})(k)
})	
//鼠标移入事件,箭头变色
$('.article .ten_box').mouseenter(function(){
	
	$(this).find('a').show();
	$(this).find('a.new_left').mouseenter(function(){
		$(this).css({'background':'#8E8E8E'})
	})
	$(this).find('a.new_left').mouseleave(function(){
		$(this).css({'background':'#D9D9D9'})
	})
	$(this).find('a.new_right').mouseenter(function(){
		$(this).css({'background':'#8E8E8E'})
	})
	$(this).find('a.new_right').mouseleave(function(){
		$(this).css({'background':'#D9D9D9'})
	})

})
$('.article .ten_box').mouseleave(function(){
	$('.article .ten_box>a').hide();
})










		