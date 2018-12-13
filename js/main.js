/* TYPING */
  
  var str = "이지현의 포트폴리오입니다.",
    arr = str.split(""),
    timer;
  
  function typing() {
    if (arr.length > 0) {
        document.getElementById('typing').innerHTML += arr.shift();
    } else {
        clearTimeout(timer);
    }
    timer = setTimeout(typing,
        200);
  }
  typing();
  
// /**SKILL BAR **/
// jQuery(document).ready(function(){
//     jQuery('.skillbar').each(function(){
//         jQuery(this).find('.skillbar-bar').animate({
//             width:jQuery(this).attr('data-percent')
//         },3000);
//     });
// });
