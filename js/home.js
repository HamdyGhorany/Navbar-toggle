$(document).ready(function(){
    $("h1").click(function(){
        $("ul").toggle();
    })
})

if ($(window).width() == 768) {
    $("h1").click(function() {
        $("nav").toggle(1000)
    })
}