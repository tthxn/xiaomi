

var win_width = document.documentElement.clientWidth;
var win_height = document.documentElement.clientHeight;
$('.hide_v').css({'width':win_width});


$('.video .spe>a').click(function(){
	
	var q = $(this).parents(".spe").index();
	$('.hide_v').eq(q).show().animate({'height':win_height},300);
	$('.hide_v').eq(q).find('.in').show();
	
	
		$('.hide_v .in a').click(function(){
	
			$('.hide_v').hide();

//20和22行一起  是和26行等价的，pause()只能用在video上面，jq转js原生代码只能用[0]
			var j = $(this).parents('.spe').index();
//			alert(j);
			$('.spe').eq(j).find('video')[0].pause();//
			
			

//			$(this).parents('.spe').find('video')[0].pause();//


	
//	    	$('.hide_v').find('video')[0].eq(c).pause();//
		
		})

	
})
	

	
				
					