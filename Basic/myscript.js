$(document).ready(function() {

    //Basic 1	
    $(".box").on("click", function() {
        $(this).html("#output").text("You clicked on the Giftbox");
    });

    $(".santa").on("click", function() {
        $(this).html("#output").text("You clicked on the Santa Claus");
    });

    $(".bell").on("click", function() {
        $(this).html("#output").text("You clicked on the Belle");
    });


    //Basic 2


    $(".santa2").on("click", function() {
        $(this).hide();
    });


});