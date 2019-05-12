//FOR SEARCH BAR
function toggleSearch() {
    if (arguments[0] == 1) {
        $('.search-bar').parents('header').addClass('is-open');

    } else if (arguments[0] == 0) {
        $('.search-bar').parents('header').removeClass('is-open');
    }
    $('.search-bar').parents('header').toggleClass('is-open')
}
$('.j-search').on('click', function(event) {
    event.preventDefault();
    toggleSearch();
});



// FOR MORE TAGS
$('.j-more-tags').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('body').toggleClass('j-tabs--is-open j-tabs--is-close');
    // $('.l-more-tags').toggleClass('d-none');
    // if (! $('.search-bar').parents('header').hasClass('is-open') && $('.j-tabs--is-close').length()) {
    toggleSearch(0);
    // }
});
$('.l-more-tags .tag').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('body').toggleClass('j-tabs--is-open j-tabs--is-close');
    // $('.l-more-tags').toggleClass('d-none');
    // if (! $('.search-bar').parents('header').hasClass('is-open') && $('.j-tabs--is-close').length()) {
    toggleSearch(1);
    // }
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

$('.tag-list').on('click', '.tag:not([disabled])', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).toggleClass('tag--is-active');
});

$('.j-select-album').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $(this).toggleClass('icon--add icon--added');
});