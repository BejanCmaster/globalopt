jQuery(document).ready(function(){
      $("nav a").mPageScroll2id();
      offset:60


      // Modal

      $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function() {
            $('.overlay, #consultation').fadeOut('slow');
      });

      // PageUp

      $(window).scroll(function() {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
      });

      $("a[href^='#']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
        new WOW().init();  
});