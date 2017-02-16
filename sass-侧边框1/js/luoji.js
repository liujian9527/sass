
	$(function(){
		var $el=$('html, body')
		checkPosition($(window).height())

		$('#backTop').on('click',function(){
			if (!$el.is(':animated')) {
				move();
			}
			//go()
		})
		
		$(window).on('scroll',function(){
			checkPosition($(window).height())
		})
		
		function move(){
			$el.animate({
	            scrollTop:0
			},800)
		}
		
		function go(){
			$el.scrollTop(0);
		}
		
		function checkPosition(pos){
			if ($el.scrollTop()>pos) {
				$('#backTop').slideDown();
			} else{
				$('#backTop').slideUp();
			}
		}
	})