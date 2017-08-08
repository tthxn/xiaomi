	
//若果是在html头部引入js文件,那么这个js最外侧需要加上$(function(){…………………………………………})	
	//这里是在html代码中引入js文件，因此不用加上$(function(){…………………………………………})	
	var c=0;//大总管变量
						var clock = 1;//状态变量
//	给右侧按钮加单击事件
	$(".r_kuohao").click(function(){
//		设置状态变量,解决点击过快的问题
//		if (clock==0) {
//			return;
//		}
//		clock = 0;
//		clearInterval(timer);//清理定时器
//点击之后计数器加1		
		c++;
		if (c==6) {
			$("#flash .fl").css({'left':'0'})
			c = 1;
		}
//		计算大div的left值
		var l = c * -1226;
//		让大div移动过来
		$("#flash .fl").stop().animate({'left':l+'px'},300);
//		让c号li变绿,其他的变灰
		$("#flash ul li").eq(c).css({'background':'#7ABD54'}).siblings('li').css({'background':'#999'});
//		如果运行到第6张图片,让第一个小圆点变色
		if (c==5) {
			$("#flash ul li").eq(0).css({'background':'#7ABD54'}).siblings('li').css({'background':'#999'});
		}
		
	})
	
	
//	给左侧按钮加单击事件
	$(".l_kuohao").click(function(){
//		clearInterval(timer);//清理定时器
		c--;
		if (c==-1) {
			$("#flash .fl").css({'left':-1226*5});
			c=4;
		}
//		计算大div的left值
		var l = c * -1226;
//		让大div移动过来
		$("#flash .fl").stop().animate({'left':l+'px'},300);
//		让c号li变绿,其他的变灰
		$("#flash ul li").eq(c).css({'background':'#7ABD54'}).siblings('li').css({'background':'#999'});
		
	})
	
	
//	定时器调用的函数
	function run(){
		c++;
		if (c==6) {
			$("#flash .fl").css({'left':'0'});
			c=1;
		}
//		计算大div的left值
		var l = c * -1226;
//		让大div移动过来
		$("#flash .fl").stop().animate({'left':l+'px'},300);
//		让c号li变绿,其他的变灰
		$("#flash ul li").eq(c).css({'background':'#7ABD54'}).siblings('li').css({'background':'#999'});
		if (c==5) {
			$("#flash ul li").eq(0).css({'background':'#7ABD54'}).siblings('li').css({'background':'#999'});
		}
	}
	
//	设置定时器
	timer = setInterval(run,3000);
	
//鼠标移入小圆点，定时器关闭
	$("#flash ul li").mouseenter(function(){
		clearInterval(timer);
		c = $(this).index();
		var l = c*-1226;
		$("#flash .fl").stop().animate({'left':l+'px'},300);
		$("#flash ul li").eq(c).css({'background':'#7ABD54'}).siblings('li').css({'background':'#999'});
	})

	$("#flash ul li").mouseleave(function(){
		timer = setInterval(run,3000);
	})
	
					
					
					
					
					
	