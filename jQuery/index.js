

$("h1").on("mouseenter", function() {
    $("h1").addClass("big-title");
})
$("h1").on("click", function() {
    $("h1").removeClass("big-title");
})

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})
