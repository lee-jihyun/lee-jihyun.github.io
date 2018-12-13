$(document).ready(function(){
    
  
  //메뉴
  
  function closeAll(){
    $('.on').removeClass('close');
  }
  function open(a){
    a.addClass('close');
  }
    closeAll();
  $('.navBtn').click(function(){
      open($('nav'));
  });
 
  $('.btn-close').click(function(){
      closeAll();
  });
  
  
  //메인슬라이드
  
   $('.slideBox').bxSlider({
    auto: true,
    autoControls: true,
    captions: true,
    mode:'fade',
    randomStart:true,
     controls: false
  });
  
  
    
   $(window).scroll(function(){
       if($(this).scrollTop() >= $('#photo').offset().top-900){
           $('#photo').find('.khj').addClass('animated fadeInRight');
           $('#photo').find('.blackBox').addClass('animated fadeInDown');
       }
       
       if($(this).scrollTop() >= $('#hotnews').offset().top-700){
           $('#hotnews').find('.title').addClass('animated15 slideInUp');
       $('#hotnews').find('.text').addClass('animated15 slideInUp');
       }
        if($(this).scrollTop() >= $('#actors').offset().top-1000){
            $('#actors').find('.scroll').addClass('scroll-info fadeIn animated15');
        }
       
       
   });

  
  function mainOn() {
    if($('.mainsoop').width() > 0) {
      
      $(window).scroll(function(){
    
    if($(this).scrollTop() >= $('.n1').offset().top-900){
            $('.nnpWrap').find('.n1').addClass('slideInDown22 animated15');
        }
       if($(this).scrollTop() >= $('.n2').offset().top-900){
            $('.nnpWrap').find('.n2').addClass('slideInDown22 animated2');
        }
       if($(this).scrollTop() >= $('.n3').offset().top-900){
            $('.nnpWrap').find('.n3').addClass('slideInDown22 animated');
        }
  });
      
    }
     
  }
 
if($(window).width() > 1280){
  mainOn();
}
  
  
  
 //vod 
    $('.moreWrap').bxSlider({
    auto: true,
      mode:'fade',
    pagerCustom: 'n'
  });
    
  $('.iframe').bxSlider({
    auto: true,
      mode:'fade',
    pagerCustom: 'n'
  });

 
    
    
    //artists
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        nav:true,
        margin:20,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },            
            1280:{
                items:5
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
    
    
});