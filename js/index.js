$(function(){
    // $(".header ul li").click(function (e) {	
    //     console.log(e.target)
    //     $('.header ul li ').removeClass("active");	
    //     $(e.target).addClass('active');
    //     let index = $('.header ul li').index(e.target);
    //     $('.content>div').eq(index).show().siblings().hide()

	// })
 $(".page-header ul li").click(function (e) {	
        console.log(e.target)
        $('.page-header ul li a').removeClass("active");	
        $(e.target).addClass('active');
        let index = $('.page-header ul li').index($(e.target).parent());
        $('.content>div').eq(index).show().siblings().hide()

	})

	
})
