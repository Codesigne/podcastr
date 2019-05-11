// to solves issue of window height in mobile after scroll 
function setVh() {
    console.log("setVh :");
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
// Setting responsive font size            
function setResponsiveFont(argument) {
    $("html").css('fontSize', 12.88);
    if ($(document).width() <= 600) {
        $("html").css('fontSize', $(document).width() / 37.5); // width of viewport which used is by designer 
    }
}
jQuery(document).ready(function($) {
    setVh()
    setResponsiveFont()
});
$(window).on('resize', function(argument) {
    setVh()
    setResponsiveFont()
}).on('offline', function(event) {
    $('html').css({
        'filter': 'grayscale(1)',
        'pointer-events': 'none'
    });
}).on('online', function(event) {
    $('html').css({
        'filter': 'none',
        'pointer-events': 'auto'
    });
});
var seekbar = new Seekbar.Seekbar({
    negativeColor: `#e64b7d`,
    thumbColor: 'rgb(80, 227, 194)',
    value: 4,
    thumbSize: 1,
    renderTo: "#demo"
});