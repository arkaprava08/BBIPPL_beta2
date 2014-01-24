$(function() {
    $("#dynamic_menu").load("headerpage.html");
});

var stickyHeaderTop = $('#megamenu').offset().top;

var height = $('#megamenu').height();

$(window).scroll(function() {
    if ($(window).scrollTop() > stickyHeaderTop) {
        $('#megamenu').css({position: 'fixed', top: '0px'});
        $('#padsafe').css({height: height + 'px'});
    } else {
        $('#megamenu').css({position: 'static', top: '0px'});
        $('#padsafe').css({height: '0'});
    }
});
