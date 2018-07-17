$(function(){
    
    /*global $, window*/
    
//                              Start Header
    
    // 1.1- Give the header the height of the window page
    
    var header = $("header");
    
    header.height($(window).height());
    
    // 1.2- Give the header the height of the window page while resizing
    
    $(window).resize(function(){
        
        header.height($(window).height());
        
    });
    
    
    // 2.1- Set .head in the middle of the page
    
    var head = $("header .head");
    var top = ($(window).height()-head.height()) / 2 - $("header nav").height(); // we subtract nav height because .head top will move from the bottom of nav not the the start of the page
    
    head.css("top",top);
    
    // 2.2- Set .head in the middle of the page while resizing
    
    $(window).resize(function(){
        
        var top = ($(window).height()-head.height()) / 2 - $("header nav").height();
        
        head.css("top",top);
        
    });
    
    // 3.1- Set span on the bottom of the page
    
    var span = $("header .container > span");

    var bottom = $(window).height() * 0.05,
        left = ($(window).width() - span.width()) / 2;
    
    span.css({"bottom":bottom, "left":left});
    
    // 3.2- Set span on the bottom of the page while resizing
    
    $(window).resize(function(){
        
        var bottom = $(window).height() * 0.05,
        left = ($(window).width() - span.width()) / 2;
    
        span.css({"bottom":bottom, "left":left});
        
    });
    
    // 4- Associate the arrow (i) and the buttons click with the page
    
    $("header span i").click(function(){
        
        $("html,body").animate({scrollTop: $(".features").offset().top},1000);
    });
    
    $("header .head button:eq(1)").click(function(){
        
        $("html,body").animate({scrollTop: $(".our-work").offset().top},1000);
    });
    
    $("header .head button:eq(0)").click(function(){
        
        $("html,body").animate({scrollTop: $(".contact").offset().top},1000);
    });
    
//                      End Header
    
    //////////////////////////////////////////////////////
    
//                      Start OurWork
    
    // using with .our-work section hover
    
//    var section = $(".our-work .work section");
//    section.hover(function(){
//        
//        $(this).find("div").removeClass("inactive");
//    }, function(){
//        
//        $(this).find("div").addClass("inactive");
//    });
    
    // show more button click 
    
    $(".our-work button").click(function(){
        
        $(".our-work .work section.inactive").fadeIn();
    });
    
//                      End OurWork
    
    //////////////////////////////////////////////////////
    
//                      Start Testimoniales    
    
    // Make Slider
    
    var right = $(".testi i:eq(0)"),
        left = $(".testi i:eq(1)");
    
    // My Solution
    
 /*   
    right.click(function(){
        
        // if the current shown element is the before of the last element(the next section is the last) then we show the last element and hide the right arrow
        if($(".testi section").not(".inactive").next().is(":last-of-type")) // == $(".testi section:not(.inactive)");
        {
            $(".testi section").not(".inactive").fadeOut(500,function(){
                
                $(this).addClass("inactive");
                
                $(".testi section:last-of-type").fadeIn(function(){
                
                    $(this).removeClass("inactive");
                });
                
            });
            
            right.fadeOut();
            return;
        }
        
        $(".testi section").not(".inactive").fadeOut(500,function(){
            
            $(this).addClass("inactive");
            
            $(this).next().fadeIn(function(){
                
                $(this).removeClass("inactive");
                
                // if the previous of the current shown element is the first then we show the left arrow
                if($(".testi section").not(".inactive").prev().is(":first-of-type"))
                {
                    left.fadeIn();
                }
            });
            
        });
        
    });
    
    left.click(function(){
        
        // if the current shown section is the last section then we will show the previous to it and show the right arrow
        if($(".testi section").not(".inactive").is(":last-of-type"))
        {
            $(".testi section").not(".inactive").fadeOut(500,function(){
                
                $(this).addClass("inactive");
                
                $(this).prev().fadeIn(function(){
                    
                    $(this).removeClass("inactive");
                });
                
            });
            
            right.fadeIn();
            return;
        }
        
        $(".testi section").not(".inactive").fadeOut(500,function(){
            
            $(this).addClass("inactive");
                
            $(this).prev().fadeIn(function(){

                $(this).removeClass("inactive");
                
                // after we show the element as we have done in the previous line we check if that element is the first section we hide the left arrow
                if($(".testi section").not(".inactive").is(":first-of-type"))
                {
                    left.fadeOut();
                }
            });
            
        });
        
    });
 */
    
    // Course Video Solution
    
    function check(){
        
        $(".testi section").not(".inactive").is(":first-of-type")? left.fadeOut() : left.fadeIn();
        $(".testi section").not(".inactive").is(":last-of-type")? right.fadeOut() : right.fadeIn();
    }
    
    $(".testi i").click(function(){
        
        if($(this).hasClass("fa-chevron-right"))
        {
            $(".testi section").not(".inactive").fadeOut(500,function(){
                
                $(this).addClass("inactive").next().fadeIn().removeClass("inactive");
                check();
            });
        }
        else
        {
            $(".testi section").not(".inactive").fadeOut(500,function(){
                
                $(this).addClass("inactive").prev().fadeIn().removeClass("inactive");
                check();
            });
        }
        
    })
    
    
//                      End Testimoniales    

    //////////////////////////////////////////////////////
    
//                      Start OurTeam
    
    // hover the .members sections
    $(".our-team .members section").hover(function(){
        
        $(this).find("h2,p").css("color","#443d3d").end().find(".img div").css("display","none").end().find(".img img").css({cursor:"pointer", borderBottom:"5px solid #ea5a0c", borderRadius: "15px"});
        $(this).find("i").eq(0).css("backgroundColor","#4040db");
        $(this).find("i").eq(1).css("backgroundColor","deepskyblue");
        $(this).find("i").eq(2).css("backgroundColor","red");
        $(this).find("i").css("cursor","pointer");
        
    },function(){
        
        
        $(this).find("h2,p").css("color","#afafaf").end().find("i").css("backgroundColor","#afafaf").end().find(".img div").css("display","block");
        $(this).find(".img img").css({borderRadius: "0px", border: "none"});
    });
    
//                      End OurTeam
    
    //////////////////////////////////////////////////////
    
//                      Trigger nicescroll plugin
    
    $("html").niceScroll({
        
        cursorcolor: "#ea5a0c"
        
    });
    
});