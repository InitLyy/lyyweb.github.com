/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-13 16:16:08
 * @version $Id$
 */

$(".b-pic").bind("click",function() {
	// body...
	$(".background1").before("<div class = 'b-bpic'></div>");
	// $(".b-pic:first").attr('z-index', '99');
	$(".background1").hide();
	$(".b-bpic").bind("click",function(){
		$(".b-bpic").remove();
		$(".background1").show();
	})
})

$(".button0").bind("click",function(){
	$('.button0').before('<div class="line-3"></div>')
	$(".line-3:last").append('<div class="line-txt"></div>' );
	$(".line-3:last").append('<div class="button1">Delete</div> ');
	var box = $('.background3');
	 	i =box.children('.line-3').length;
		console.log(i);
		for(j = 0;j<i;++j){
			box.children('.line-3').eq(j).children('.line-txt').text(j+1);
		}
	// $('.button1').bind("click",function(){
	// 	$(this).parent().remove();

	var del = $('.button1');
	del.on('click',function(){
		$(this).parent().remove();
		var box = $('.background3');
	 	i =box.children('.line-3').length;
		console.log(i);
		for(j = 0;j<i;++j){
			box.children('.line-3').eq(j).children('.line-txt').text(j+1);
		}
		})

	// 	// for(i = linedelete;i<=linecount;++i){
	// 	// 	$('.button0').before('<div class="line-3"></div>')
	// 	// 	$(".line-3:last").append('<div class="line-txt"></div>' );
	// 	// 	$(".line-txt:last").text(i);
	// 	// 	$(".line-3:last").append('<div class="button1">Delete</div> ');
	// 	// }
	// })
})

$(".b2-title-btn").on('click',function(){
	$('.b2-title-btn').css('background', 'white');
	$(this).css('background', 'grey');
	$('.b2-body').text($(this).text());
})