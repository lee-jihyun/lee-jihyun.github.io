$('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    speed: 600,
    pause: 6500,
    pager: true,
    controls: true
});

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= $('.parallax').offset().top-800){
			$('.parallax').find('p,div').addClass('fadeInUp2');
		}else{
            $('.parallax').find('p,div').removeClass('fadeInUp2');
        }

        // new_item1

        if($(this).scrollTop() >= $('.new').offset().top-800){
			$('.new_item1').find('div:first-child').addClass('bounceInLeft');
		}else{
            $('.new_item1').find('div:first-child').removeClass('bounceInLeft');
        }

        if($(this).scrollTop() >= $('.new').offset().top-800){
			$('.new_item1').find('div:nth-child(2),div:last-child').addClass('fadeInUp');
		}else{
            $('.new_item1').find('div:nth-child(2),div:last-child').removeClass('fadeInUp');
        }

        if($(this).scrollTop() >= $('.new').offset().top-800){
			$('.new_item1').find('div:nth-child(3)').addClass('bounceInRight');
		}else{
            $('.new_item1').find('div:nth-child(3)').removeClass('bounceInRight');
        }

        // new_item2

        if($(this).scrollTop() >= $('.new_item2').offset().top-1000){
			$('.new_item2').find('div:first-child').addClass('bounceInRight');
		}else{
            $('.new_item2').find('div:first-child').removeClass('bounceInRight');
        }

        if($(this).scrollTop() >= $('.new_item2').offset().top-1000){
			$('.new_item2').find('div:nth-child(2),div:last-child').addClass('fadeInUp');
		}else{
            $('.new_item2').find('div:nth-child(2),div:last-child').removeClass('fadeInUp');
        }

        if($(this).scrollTop() >= $('.new_item2').offset().top-1000){
			$('.new_item2').find('div:nth-child(3)').addClass('bounceInLeft');
		}else{
            $('.new_item2').find('div:nth-child(3)').removeClass('bounceInLeft');
        }

        // new_item3

        if($(this).scrollTop() >= $('.new_item3').offset().top-1000){
			$('.new_item3').find('div:first-child').addClass('bounceInLeft');
		}else{
            $('.new_item3').find('div:first-child').removeClass('bounceInLeft');
        }

        if($(this).scrollTop() >= $('.new_item3').offset().top-1000){
			$('.new_item3').find('div:nth-child(2),div:last-child').addClass('fadeInUp');
		}else{
            $('.new_item3').find('div:nth-child(2),div:last-child').removeClass('fadeInUp');
        }

        if($(this).scrollTop() >= $('.new_item3').offset().top-700){
			$('.new_item3').find('div:nth-child(3)').addClass('bounceInRight');
		}else{
            $('.new_item3').find('div:nth-child(3)').removeClass('bounceInRight');
        }

        // video

        if($(this).scrollTop() >= $('#video').offset().top-700){
			$('.video_wrap').find('.video_left').addClass('bounceInLeft');
		}else{
            $('.video_wrap').find('.video_left').removeClass('bounceInLeft');
        }

        if($(this).scrollTop() >= $('#video').offset().top-700){
			$('.video_wrap').find('.video_right').addClass('bounceInRight');
		}else{
            $('.video_wrap').find('.video_right').removeClass('bounceInRight');
        }

        // insta

        if($(this).scrollTop() >= $('#insta').offset().top-800){
			$('.insta_wrap').find('li>a').addClass('fadeIn');
		}else{
            $('.insta_wrap').find('li>a').removeClass('fadeIn');
        }
	});
});