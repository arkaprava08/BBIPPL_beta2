
/*headerpage*/
$(function() {
    $("#headerpage").load("headerpage.html");
});

/*megamenu*/
$(function() {
    $("#megamenu").load("megamenu.html");

});

/*footerpage*/
$(function() {
    $("#footerpage").load("footerpage.html");
});

/*rightbar*/
$(function() {
    $("#rightbar").load("rightbar.html");
});

/*carousel tweak*/
$(document).foundation({
    orbit: {
        animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
        timer_speed: 5000, // Sets the amount of time in milliseconds before transitioning a slide
        pause_on_hover: true, // Pauses on the current slide while hovering
        resume_on_mouseout: true, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
        slide_number: false,
        bullets: false,
        animation_speed: 700
    }
});


/*headerpage load*/
$(function() {
    $("#dynamic_menu").load("headerpage.html");
});


/*stickynavigation code*/
function load()
{
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
}


/*accordion tweak*/
$('.accordion > dd > a').click(function(event)
{
    $('.accordion  .accordion-active').removeClass('accordion-active');
});

function accordion_tweak() {


    if ($('.accordion .active').parent().children()[0])
    {
        $('.accordion .active').parent().children().first().addClass('accordion-active');
    }
}


/*improvement*/
 $(window).scroll(function(event)
 {
 $('.dropdowncontent').css({display: 'none'});
 
 setTimeout(refresh, 500);
 });
 
 function refresh() {
 $('.dropdowncontent').css({display: ''});
 }

