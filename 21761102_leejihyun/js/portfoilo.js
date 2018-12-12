$(document).ready(function(){
    
    
    /*menu*/
    $('.navBtn').click(animation);
    function animation() {
        if ($('.navBtn .bar').hasClass('active')) {
            $('.navBtn .bar').removeClass('active');
            $('.navBtn .bar').addClass('notActive');
        } else {
            $('.navBtn .bar').removeClass('notActive');
            $('.navBtn .bar').addClass('active');
        }
    }
    
    $('.navBtn').click(function(){
        $('.nav.on').slideToggle(400);
        
        
    });
    
    /*nav-inner*/
    $('.nav').find('a:eq(0)').click(function(){
        $('.nav.on').slideToggle(400);
        
        
        if ($('.navBtn .bar').hasClass('active')) {
            $('.navBtn .bar').removeClass('active');
            $('.navBtn .bar').addClass('notActive');
        } else {
            $('.navBtn .bar').removeClass('notActive');
            $('.navBtn .bar').addClass('active');
        }
        
    });
    
    $('.nav').find('a:eq(1)').click(function(){
        $('.nav.on').slideToggle(400);
        
         if ($('.navBtn .bar').hasClass('active')) {
            $('.navBtn .bar').removeClass('active');
            $('.navBtn .bar').addClass('notActive');
        } else {
            $('.navBtn .bar').removeClass('notActive');
            $('.navBtn .bar').addClass('active');
        }
       
    });
    
    $('.nav').find('a:eq(2)').click(function(){
        $('.nav.on').slideToggle(400);
        
         if ($('.navBtn .bar').hasClass('active')) {
            $('.navBtn .bar').removeClass('active');
            $('.navBtn .bar').addClass('notActive');
        } else {
            $('.navBtn .bar').removeClass('notActive');
            $('.navBtn .bar').addClass('active');
        }
        
    });
    
    
    
    /*banner*/
    var bannerText = $('.banner').find('.bigText');
    bannerText.find('div').addClass('fadeInLeft');
    
    /*mobile, tablet*/
    var bText = $('.banner').find('.smalText.tablet');
    var bTextPc = $('.banner').find('.smalText.pc');
    
    bText.addClass('fadeInTop').css({'animation-delay':'.3s'});
    bTextPc.addClass('fadeInTop').css({'animation-delay':'.3s'});
    bTextPc.find('.textPc2').addClass('fadeInTop').css({'animation-delay':'.6s'});

    
    
    
    /*scroll*/
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        
        /*nav - menu*/
        if (wScroll > 120){
            $('.navWrap').css({'box-shadow':'0 0 10px 0 rgba(0, 0, 0, 0.5)'});
            
        }else if (wScroll == 0){
            $('.navWrap').css({'box-shadow':'0 0 0px 0 rgba(0, 0, 0, 0)'});

        }
        
        
        /*---------- contents ----------*/
        /*web*/
        var m = $('.web').find('.muji');     /*MUJI*/
        var cjw = $('.web').find('.cjw'); /*cjw*/
        var k = $('.web').find('.krispy'); /*krispy*/
        var c = $('.web').find('.child');   /*child*/
        
        
        
        /*muji*/
        if(wScroll >= m.offset().top-$(window).height()/1){
            m.find('.backgroundText').addClass('fadeInTop');
            
            m.find('h2').addClass('fadeInTop').css({'animation-delay':'.3s'});
            m.find('.mouckup').addClass('fadeInTop').css({'animation-delay':'.5s'});
            
            /*text*/
            m.find('.mujiText1').addClass('fadeInTop').css({'animation-delay':'.7s'});
            m.find('.mujiText2').addClass('fadeInTop').css({'animation-delay':'.9s'});
            m.find('.view').addClass('fadeInTop').css({'animation-delay':'1.1s'});
        }
        
        
        
        /*krispy*/
        if(wScroll >= cjw.offset().top-$(window).height()/1){
            
            cjw.find('h2').addClass('fadeInTop');
            cjw.find('.mouckup').addClass('fadeInTop').css({'animation-delay':'.3s'});
            
            /*text*/
            cjw.find('.cjwText1').addClass('fadeInTop').css({'animation-delay':'.5s'});
            cjw.find('.cjwText2').addClass('fadeInTop').css({'animation-delay':'.7s'});
            cjw.find('.view').addClass('fadeInTop').css({'animation-delay':'.9s'});
        }
        
        
        
        
        
        
        
        /*krispy*/
        if(wScroll >= k.offset().top-$(window).height()/1){
            
            k.find('h2').addClass('fadeInTop');
            k.find('.mouckup').addClass('fadeInTop').css({'animation-delay':'.3s'});
            
            /*text*/
            k.find('.krispyText1').addClass('fadeInTop').css({'animation-delay':'.5s'});
            k.find('.krispyText2').addClass('fadeInTop').css({'animation-delay':'.7s'});
            k.find('.view').addClass('fadeInTop').css({'animation-delay':'.9s'});
        }
        
        /*child*/
        if(wScroll >= c.offset().top-$(window).height()/1){
            
            c.find('h2').addClass('fadeInTop');
            c.find('.mouckup').addClass('fadeInTop').css({'animation-delay':'.3s'});
            
            /*text*/
            c.find('.childText1').addClass('fadeInTop').css({'animation-delay':'.5s'});
            c.find('.childText2').addClass('fadeInTop').css({'animation-delay':'.7s'});
            c.find('.view').addClass('fadeInTop').css({'animation-delay':'.9s'});
        }
        
        /*profile*/
        var profile = $('.profile');
        
        if(wScroll >= profile.offset().top-$(window).height()/1){
            
            profile.find('h2').addClass('fadeInTop');
            
            profile.find('.text1').addClass('fadeInTop').css({'animation-delay':'.3s'});
            profile.find('.text2').addClass('fadeInTop').css({'animation-delay':'.3s'});
            
            
            
            
        }
        
        
        
        
        
        
        
    
    });
    
    
});












