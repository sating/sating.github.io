$(function(){
	$(".nav-about").click(function() {
    $('html, body').animate({
        scrollTop: $(".about-warp").offset().top
    }, 500);
    return false;
	});
	$(".nav-portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $(".portfolio-warp").offset().top
    }, 500);
    return false;
	});
	$(".nav-ability").click(function() {
    $('html, body').animate({
        scrollTop: $(".ability-warp").offset().top
    }, 500);
    return false;
	});
	$(".nav-experience").click(function() {
    $('html, body').animate({
        scrollTop: $(".experience-warp").offset().top
    }, 500);
    return false;
	});
	$(".go-top").click(function() {
    $('html, body').animate({scrollTop: 0}, 500);
    return false;
	});
  $(window).scroll(function() {
      if ( $(this).scrollTop() > 300){ //就是用來取得目前的位置距離網頁頂端有多遠，若大於 300px 就會將按鈕顯示出來，小於就會隱藏。
          $('.go-top').fadeIn("fast");
          $('.nav-m').addClass('sticky');
      } else {
          $('.go-top').stop().fadeOut("fast");
          $('.nav-m').removeClass('sticky');
      }
  });

  // var stickyNavTop = $('.nav').offset().top;
  // var stickyNav = function(){
  //   var scrollTop = $(window).scrollTop();
  //   if (scrollTop > stickyNavTop) {
  //     $('.nav').addClass('sticky');
  //   } else {
  //     $('.nav').removeClass('sticky');
  //   }
  // };
  // stickyNav();
  // $(window).scroll(function() {
  //   stickyNav();
  // });
});


