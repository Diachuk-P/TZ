$(".nav").on("click", "a", function(event) {
    event.preventDefault();
    var anchorId  = $(this).attr("href");
    scrollingDistance = $(anchorId).offset().top - $(".nav").height();
    $("html, body").animate({scrollTop: scrollingDistance}, 800);
});