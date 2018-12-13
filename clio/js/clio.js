$(function(){
    var mainNav = $('nav').children('ul').children('li');
    var subNav = mainNav.find('ul');
    
    function mobileNav(){
        mainNav.click(function(){
        subNav.hide();
        $(this).find('ul').show();
    });
    }
    function pcNav(){
      mainNav.on({
        'mouseenter focusin':function(){$(this).find('ul').stop().slideDown(250);},
        'mouseleave focusout':function(){$(this).find('ul').stop().slideUp(250);}
      }); 
    }
    if($(window).width() < 1280){
        mobileNav();
    }else{
        pcNav(); 
    }
    
    $(window).resize(function(){
        if($(this).width() < 1280){
            mainNav.off();
            mobileNav();
        }else{
            subNav.hide();
            mainNav.off();
            pcNav();
        }
    });

    var btn = $('header').find('h1').next();
    btn.click(function(){
		if(btn.hasClass('on')){
            btn.removeClass('on');
		}else{
            btn.addClass('on');            
		}
	});

    $('button').click(function(){
        $(this).next().stop().slideToggle();
    });
  
  });