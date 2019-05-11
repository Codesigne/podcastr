//FOR SEARCH BAR
$('.j-search').on('click', function(event) {
    event.preventDefault();
    $('.search-bar').addClass('is-open')
});

//FOR TRACKLIST


$('.j-tracklist-btn').on('click', function(event) {
    event.preventDefault();
    if ($('body').hasClass('j-track-list--is-open')) {
        $('body').toggleClass('j-track-list--is-open j-track-list--is-close')
        $(this).removeClass('is-active')
        $('.j-track-list, .j-coverimg').toggleClass('is-open is-close');

    } else {
        $('body').toggleClass('j-track-list--is-open j-track-list--is-close')
        $(this).addClass('is-active')
        $('.j-track-list, .j-coverimg').toggleClass('is-open is-close')
    }
});

//FOR QUEUE

$('.j-queue-btn').on('click', function(event) {
    event.preventDefault();
    if ($('body').hasClass('j-queue-list--is-open')) {
        $('body').toggleClass('j-queue-list--is-open j-queue-list--is-close')
        $(this).removeClass('is-active')
        $('.j-queue-list, .j-coverimg').toggleClass('is-open is-close');

    } else {
        $('body').toggleClass('j-queue-list--is-open j-queue-list--is-close')
        $(this).addClass('is-active')
        $('.j-queue-list, .j-coverimg').toggleClass('is-open is-close')
    }
});