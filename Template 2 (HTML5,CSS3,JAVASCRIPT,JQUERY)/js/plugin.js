$(function() {
    
    "use strict";
    
    // Put Height to Cover
    
    var cover = $(".cover");
    
    cover.height($(window).height());
    
    $(window).on("resize",function(){
       
       cover.height($(window).height());
       
    });
    
    // Put Links To Nav
    
    var li = $(".cover nav ul li");
    
    $(li).click(function(){
        
        $(this).addClass("navactive").siblings().removeClass("navactive");
        
    });
    
    // Put The BXSlider To Work
    
    $('.bxslider').bxSlider({
        pager: false
    });
    
    // Put Smooth Scroll
    
    $(".cover nav ul li a").click(function(){
        
        var id = $(this).attr("href");
        
        $("html , body").animate({
            
            scrollTop: $(id).offset().top
            
        },3000);
        
    });
    
    // Put Pic Active
    
    $(".pic ul li").click(function(){
        
        $(this).find(".over").css("display","block");
        $(this).siblings().find(".over").css("display","none");
    });
    
    // Put Slider Code
    
    setInterval(function(){
        
        $(".slider .active").each(function(){
            
            if(! $(this).is(':last-child') )
            {
                $(this).fadeOut(1000,function(){
                    
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                
                });
            }
            else
            {
                $(this).fadeOut(1000,function(){
                    
                    $(this).removeClass("active");
                    $(".slider div:first-child").addClass("active").fadeIn();
                    
                });
            }
            
        });
                   
    },3000); // it will take 3s then perform that code
    
    //Another Code For The Slider
    
    /*
    (function autoSlider(){
        
        $(".slider .active").each(function() {
            
            if(! $(this).is(":last-child") )
            {
                $(this).delay(3000).fadeOut(1000,function() {
                    
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoSlider();
                    
                });
            }
            
            else
            {
                $(this).delay(3000).fadeOut(1000,function() {
                    
                    $(this).removeClass("active");
                    $(".slider div:first-child").addClass("active").fadeIn();
                    autoSlider();
                    
                });
            }
            
        });
        
    }());
    */
    
    // Trigger MixitUp (Shuffle Plugin)
    
    $("#Container").mixItUp();
    
    // Add class type-active to the selected li
    
    $(".shuffle li").click(function(){
        
       $(this).addClass("type-active").siblings().removeClass("type-active");
        
    });
    
    // Put (Trigger) Scroll Plugin
    
    $("html").niceScroll({
        
        cursorcolor: "#1ABB9A",
        
        cursorborder: "1px solid #1ABB9A"
    });
    
});