
$(function() {

    /*megamenu*/

    var str = '<ul class="title-area">' +
            '<li class="name">' +
            '</li>' +
            '<li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>' +
            '</ul>' +
            '<section class="top-bar-section contain-to-grid">' +
            '<ul class="left">' +
            '<li class="has-dropdown"><a href="#">OFFERINGS</a>' +
            '<ul class="dropdown left">' +
            '<li class="has-dropdown"><a href="#">SERVICES</a>' +
            '<ul class="dropdown left">' +
            ' <li class="has-dropdown"><a href="#">Information Technology</a>' +
            '<ul class="dropdown left">' +
            '<li><a href="software_application_development.html">>Software Application Development</a></li>' +
            '<li><a href="mobility.html">>Mobility</a></li>' +
            '<li><a href="user_experience_design.html">>User Experience Design</a></li>' +
            '<li><a href="sap.html">>ERP(SAP)</a></li>' +
            '<li><a href="digital_marketing.html">>Digital Marketing</a></li>' +
            ' </ul>' +
            '</li>' +
            ' <li class="has-dropdown"><a href="#">Integrated Engineering</a>' +
            '<ul class="dropdown left">' +
            '<li><a href="mechanical_engineering.html">>Integrated Mechanical Services</a></li>' +
            '<li><a href="embedded_systems.html">>Integrated Embedded Services</a></li>' +
            ' </ul>' +
            '</li>' +
            ' <li><a href="renewable_energy.html">Renewable Energy</a></li>' +
            ' <li><a href="enterprise_integration.html">Enterprise Integration</a></li>' +
            ' <li class="has-dropdown"><a href="#">Contract Manufacturing</a>' +
            '<ul class="dropdown left">' +
            '<li><a href="mechanical.html">>Mechanical Manufacturing</a></li>' +
            '<li><a href="electronic.html">>Electronic Manufacturing</a></li>' +
            ' </ul>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '<li class="has-dropdown"><a href="#">SECTORS</a>' +
            '<ul class="dropdown left">' +
            '<li><a href="aerospace_aviation.html">>Aerospace and aviation</a></li>' +
            '<li><a href="automotive.html">>Automotive</a></li>' +
            '<li><a href="consumer_electronics.html">>Consumer Electronics</a></li>' +
            '<li><a href="defense.html">>Defense</a></li>' +
            '<li><a href="energy&utilities.html">>Energy & Utilities</a></li>' +
            '<li><a href="engineering.html">>Engineering</a></li>' +
            '<li><a href="government.html">>Government</a></li>' +
            '<li><a href="healthcare.html">>Health care</a></li>' +
            '<li><a href="information_technology_solutions.html">>Information Technology</a></li>' +
            '<li><a href="infrastructure.html">>Infrastructure</a></li>' +
            '<li><a href="insurance.html">>Insurance</a></li>' +
            '<li><a href="manufacturing.html">>Manufacturing</a></li>' +
            '<li><a href="pharmaceutical.html">>Pharmaceutical</a></li>' +
            '<li><a href="public_sector.html">>Public Sector</a></li>' +
            '<li><a href="retail.html">>Retail</a></li>' +
            '<li><a href="semiconductor.html">>Semiconductor</a></li>' +
            '<li><a href="transport&toll.html">>Transport & Toll</a></li>' +
            '<li><a href="telecom.html">>Telecom</a></li>' +
            '</ul>' +
            '</li>' +
            '<li class="has-dropdown"><a href="#">SOLUTIONS</a>' +
            '<ul class="dropdown left">' +
            ' <li class="has-dropdown"><a href="#">Software/IT Solutions</a>' +
            '<ul class="dropdown left">' +
            '<li><a href="solution_accelerators.html">>Solutions Accelerator</a></li>' +
            '<li><a href="healthcare_solutions.html">>Healthcare</a></li>' +
            '<li><a href="herald_logic.html">>Channel Management (Retail)</a></li>' +
            '<li><a href="soa_facility_management.html">>SOA Facility Management</a></li>' +
            '<li><a href="soa_cms.html">>SOA CMS</a></li>' +
            ' </ul>' +
            '</li>' +
            ' <li class="has-dropdown"><a href="#">Internet Of Things</a>' +
            '<ul class="dropdown left">' +
            '<li><a href="machine_to_machine.html">>Machine To Machine(M2M)</a></li>' +
            '<li><a href="smart_utilities.html">>Smart Utilities</a></li>' +
            '<li><a href="transport_and_toll_solutions.html">>Transport & Toll</a></li>' +
            '<li><a href="hand_held_terminal.html.html">>Hand Held Terminal</a></li>' +
            ' </ul>' +
            '</li>' +
            '<li><a href="mobile_solution.html">Mobile Solution</a></li>' +
            '<li><a href="manufactured_products.html">Manufactured Products</a></li>' +
            '<li><a href="renewable_energy_solutions.html">Renewable Energy</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</li>' +
            '   <li class="has-dropdown"><a href="#">COMPANY</a>' +
            '<ul class="dropdown">' +
            '<li class="has-dropdown"><a href="#">ABOUT US</a>' +
            '<ul class="dropdown">' +
            '<li><a href="who_we_are.html">>Who We are</a></li>' +
            '<li><a href="core_team.html">>Core Team</a></li>' +
            '<li><a href="methodology.html">>Methodology</a></li>' +
            '<li><a href="clients_page.html">>Clients</a></li>' +
            '<li><a href="collaborations.html">>Collaborations</a></li>' +
            '<li><a href="corporate_social_responsibility.html">>Corporate Social Responsibility</a></li>' +
            '</ul>' +
            '</li>' +
            '<li class="has-dropdown"><a href="#">INFRASTRUCTURE</a>'+
            '<ul class="dropdown">' +
            '<li><a href="center_of_excellence.html">>Center Of Excellence</a></li>' +
            '<li><a href="facilities.html">>Facilities</a></li>' +
            '</ul>' +
            '</li>' +
            '<li><a href="#">BLOG</a></li>' +
            '</ul>' +
            '</li>' +
            '<li class="has-dropdown"><a href="#">RESOURCES</a>' +
            '<ul class="dropdown">' +
            '<li><a href="case_studies.html">CASE STUDIES</a></li>' +
            '<li><a href="brochures.html">BROCHURES</a></li>' +
            '<li><a href="gallery.html">GALLERY</a></li>' +
            '</ul>' +
            '</li>' +
            '<li  class="has-dropdown"><a href="#">CONTACT US</a>'+
            '<ul class="dropdown">' +
            '<li><a href="careers.html">CAREERS</a></li>' +
            '<li><a href="contact_us.html">CONTACT US</a></li>' +
            '</ul>' +
            '</li>' +
            '</ul>' +
            '</section>';
    $("#megamenu").before("<nav class='top-bar row show-for-small-only' id='megamenu_mob' data-topbar>" + str + "</nav>");

    //$("#megamenu_mob").load("megamenu_mob.html");

    $("#megamenu").load("megamenu.html");

    /*headerpage*/
    $("#headerpage").load("headerpage.html");

    /*footerpage*/
    $("#footerpage").load("footerpage.html");

    /*rightbar*/
    $("#rightbar").load("rightbar.html");

    /*headerpage load*/
    $("#dynamic_menu").load("headerpage.html");

});
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
    $('.dropdown_container').css({display: 'none'});

    setTimeout(refresh, 500);
});

function refresh() {
    $('.dropdown_container').css({display: ''});
}

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
    }
    );

    /*carousel tweak*/
    $(document).foundation({
        orbit: {
            animation: 'slide', // Sets the type of animation used for transitioning between slides, can also be 'fade'
            timer_speed: 7000, // Sets the amount of time in milliseconds before transitioning a slide
            pause_on_hover: true, // Pauses on the current slide while hovering
            resume_on_mouseout: true, // If pause on hover is set to true, this setting resumes playback after mousing out of slide
            slide_number: false,
            bullets: false,
            animation_speed: 700
        }
    });
}



$.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-53086d7076bd2303", function() {

    addthis.layers({
        'theme': 'transparent',
        'share': {
            'position': 'right',
            'numPreferredServices': 3
        },
        'follow': {
            'services': []
        }
    });
    // Here you can use anything you defined in the loaded script
});

