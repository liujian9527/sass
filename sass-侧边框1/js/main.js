/*
requirejs.config({
	paths:{
		jquery:"jquery-1.11.1"
		//模块别名 ：路径  
	}
	
	//requirejs.config给 模块起个别名， paths：路径
})

requirejs(['jquery','validate'],function($,validate){
	//通过requirejs引入模块，回调函数 $表示jquery模块
	//$('body').css('background','red');
	
	console.log(validate.isEqual(2,2))
})

// define
*/

//require.config({
//	paths:{
//		jquery:"jquery-1.11.1"
//	}
//})
//requirejs(['jquery', 'backtop'], function($,backtop){
///*	
//	new backtop.BackTop($('#backTop'),{
//  //  mode:'go'
//		mode:'move',
//		pos:100,
//		speed:2000
//	});
//*/
//	$('#backTop').backtop({
//		mode:'move',
//		pos:100,
//		speed:2000
//	})
//
///*	
//	var scroll = new scrollto.ScrollTo({
//		dest:0,
//		speed:800,
//	})
//	$('#backTop').on('click',$.proxy(scroll.move, scroll));
//  $(window).on('scroll',function(){
//		checkPos($(window).height())
//	})
//	
//	checkPos($(window).height())
//	function move(){
//		$('html, body').animate({
//			scrollTop:0
//		},800)
//	}
//	function go(){
//		$('html, body').scrollTop(0)
//	}
//	function checkPos(pos){
//		if ($(window).scrollTop() > pos) {
//			console.log(pos+',1')
//			$('#backTop').fadeIn();
//		}else{
//			console.log(pos+',0')
//			$('#backTop').fadeOut();
//		}
//	}
//*/
//})

requirejs.config({
	paths:{
		jquery:'jquery-1.11.1'
	}
})
requirejs(['jquery','scrollto'],function($,scrollto){
	var scroll=new scrollto.ScrollTo()
	$('#backTop').on('click',$.proxy(scroll.move,scroll))
})
requirejs(['jquery','backtop'],function($,backtop){
	new backtop.BackTop($('#backTop'),{
    //  mode:'go'
		mode:'move',
		dest:0,
		pos:100,
		speed:2000
	});
})
