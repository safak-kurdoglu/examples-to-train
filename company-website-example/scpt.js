$(document).ready(function() {
	var nav = $(".navbar");
    var toggler = $(".navbar-toggler");

    $(window).scroll(function() {
       if($(this).scrollTop() > 100) { 
           nav.addClass('scrolled');

           nav.css("height", "80px");
           $("#navbarNav").css("margin-bottom", "-30px");	


           toggler.addClass('nav-item-slide2');

           if($(this).width() < 992) {
               
                $(".navbar-brand").addClass('nav-item-slide');
           }

       } else {
           nav.removeClass('scrolled');

           nav.css("height", "100px");

           $(".navbar-brand").removeClass('nav-item-slide');
           toggler.removeClass('nav-item-slide2');

       }
    });

    var indexToggler = $("#index-toggler");

    indexToggler.click(function() {
        $(".menu-toggle").toggleClass("active");
        $(".index-ul").toggleClass("unclicked");
        $(".index-ul").toggleClass("clicked");

    });

    $(".index-header-1").mouseenter(function() {
        $(".index-header-1").addClass("hovered");
        $(".index-text-1").addClass("hovered");
    });

    $(".index-header-1").mouseleave(function() {
        $(".index-header-1").removeClass("hovered");
        $(".index-text-1").removeClass("hovered");
    });

    $("#index-guvenlik").mouseenter(function() {
        $(".index-header-1").addClass("hovered");
        $(".index-text-1").addClass("hovered");
    });

    $("#index-guvenlik").mouseleave(function() {
        $(".index-header-1").removeClass("hovered");
        $(".index-text-1").removeClass("hovered");
    });

    $("#index-gıda").mouseenter(function() {
        $(".index-header-2").addClass("hovered");
        $(".index-text-2").addClass("hovered");
    });

    $(".index-header-2").mouseenter(function() {
        $(".index-header-2").addClass("hovered");
        $(".index-text-2").addClass("hovered");
    });

    $(".index-header-2").mouseleave(function() {
        $(".index-header-2").removeClass("hovered");
        $(".index-text-2").removeClass("hovered");
    });


    $("#index-gıda").mouseleave(function() {
        $(".index-header-2").removeClass("hovered");
        $(".index-text-2").removeClass("hovered");
    });

    $("#index-insan").mouseenter(function() {
        $(".index-header-3").addClass("hovered");
        $(".index-text-3").addClass("hovered");
    });

    $(".index-header-3").mouseenter(function() {
        $(".index-header-3").addClass("hovered");
        $(".index-text-3").addClass("hovered");
    });

    $(".index-header-3").mouseleave(function() {
        $(".index-header-3").removeClass("hovered");
        $(".index-text-3").removeClass("hovered");
    });


    $("#index-insan").mouseleave(function() {
        $(".index-header-3").removeClass("hovered");
        $(".index-text-3").removeClass("hovered");
    });

    $("#index-temizlik").mouseenter(function() {
        $(".index-header-4").addClass("hovered");
        $(".index-text-4").addClass("hovered");
    });

    $(".index-header-4").mouseenter(function() {
        $(".index-header-4").addClass("hovered");
        $(".index-text-4").addClass("hovered");
    });

    $(".index-header-4").mouseleave(function() {
        $(".index-header-4").removeClass("hovered");
        $(".index-text-4").removeClass("hovered");
    });


    $("#index-temizlik").mouseleave(function() {
        $(".index-header-4").removeClass("hovered");
        $(".index-text-4").removeClass("hovered");
    });

    toggler.click(function() {
        if($(window).scrollTop() > 100) {
        	nav.toggleClass("scrolled");
        }
    });

    toggler.click(function() {
    	$(".menu-toggle").toggleClass("active");


    });

    $(window).resize(function() {
    	if($(this).width() > 992) {
           $(".navbar-brand").removeClass('nav-item-slide');
           toggler.removeClass('nav-item-slide2');

    	} else if($(this).scrollTop() > 100) {


    	}

    });

    //index-slide

    
});

