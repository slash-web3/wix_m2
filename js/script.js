$(document).ready(function(){
    $(`.slider1`).slick({
        slidesToShow: 5,
    });
    $(`.slider2`).slick({
        draggable: false,
        variableWidth: true,
        centerMode: true,
    });
});
