$(function() {
    $(window).scroll(function() {

        $('.icon').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("jackInTheBox");
            }
        });

        $('.mainForm').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("zoomInUp");

            }
        });
    });
})
