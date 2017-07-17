/**
 * Created by dfi on 17.07.17.
 */
$("#wrapper").click( function() {
    $(".nav_sidebar").toggleClass("sidebarClosed");
    $(".menu").toggleClass("close");
});

    //media query api
    var mq = window.matchMedia("(min-width: 1400px)");
    mq.addListener(WidthChange);
    WidthChange(mq);


// media query change

function WidthChange(mq) {
    if (mq.matches) {
        // window width is at least 1400xp


        if($(".nav_sidebar").hasClass("sidebarClosed")){
        //sidebar is closed
            $("#wrapper").trigger("click");

        }

        //todo change hamburger

    } else {
        // window width is less than 1400px

    if(!(($(".nav_sidebar").hasClass("sidebarClosed")))){
            //sidebar is closed
            $("#wrapper").trigger("click");

        }
    }

}
