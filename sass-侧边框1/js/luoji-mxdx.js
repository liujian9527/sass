/*
功能：
1.回到顶部
	原理：$(window).scrollTop(0) or $('html, body')
	问题：运动  stop is(':animated')
	考虑参数：dest返回顶部点， 速度；
	设：默认值
2.按钮显示隐藏
 	原理:当$(window).scrollTop()>pos 按钮显示
 	考虑参数：pos目标点
 * */



$(function(){
//	$(window).scrollTop(1000);
$('html, body').scrollTop(1000);
	$(document).click(function(){
//		$(window).scrollTop(0);
		$('html, body').scrollTop(0);
	})
    var scroll = new ScrollTo($('#backTop'),{
		dest:0,
		speed:800,
		pos:$(window).height()
		
	})
	$('#backTop').on('click',$.proxy(scroll.move, scroll));
	$(window).on('scroll',$.proxy(scroll.checkPosition,scroll))
	
})

function ScrollTo(el,opts){
	this.el=el;
	this.opts=opts
	this.$el=$('html, body');
	this.opts=$.extend({}, ScrollTo.DEFAULTS, opts);
}

ScrollTo.DEFAULTS={
	dest:0,
	speed:2000,
	pos:$(window).height()
}

ScrollTo.prototype.move=function(){
	var $el=this.$el;
	if ($(window).scrollTop() !=0) {
		if (!$el.is(':animated')) {
			$el.animate({
				scrollTop:this.opts.dest
			},this.opts.speed)
		}
	}

}
ScrollTo.prototype.go=function(){
	var $el=this.$el;
	if ($(window).scrollTop() !=0) {	
		$el.scrollTop(0)
	}
}
ScrollTo.prototype.checkPosition=function(){
	//console.log($(window).scrollTop()+','+this.opts.pos)
	if ($(window).scrollTop()>this.opts.pos) {
		this.el.each(function(i,ele){
			$(ele).slideDown()
		})
	} else{
		this.el.each(function(i,ele){
			$(ele).slideUp()
		})
	}
}

