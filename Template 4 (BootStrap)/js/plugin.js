$(function(){
    
// NiceScroll
    
    $("html").niceScroll();
    

// Set body padding top
    
    $("body").css("paddingTop",$("nav").height());
    
    
// Set caption in the mid of carousel
    
    var bottom = ($(".carousel-inner").height() - $(".carousel-caption").innerHeight()) / 2;
    $(".carousel-caption").css("bottom",bottom);
    
    $(window).on("resize", function(){
        
        var bottom = ($(".carousel-inner").height() - $(".carousel-caption").innerHeight()) / 2;
        $(".carousel-caption").css("bottom",bottom);
        
    });
    
    
// Screen Loading
    
    // .load event has been removed in jquery 3 { https://www.w3schools.com/jquery/event_load.asp } ,, but it still works
    // to make the .load work fine we should do refresh with removing the cache (ctrl+f5) also should use the on
    // we also instead of .load we can use setTimeOut() and specify a number of seconds
    
    $(window).on("load",function(){
        
        
        $(".myscreen, .lds-dual-ring").delay(500).fadeOut(500, function(){
            
            $("body").css("overflow","auto");
        });
    
    });
    
    
// ScrollTop    
    
    $(window).scroll(function(){
        
        $(this).scrollTop() > 900 ? $(".myscrolltop").fadeIn() : $(".myscrolltop").fadeOut();
        
    });
    
     $(".myscrolltop").click(function(){
         
         $("html, body").animate( { scrollTop: 0 } );
         
     });
    
    
    
// FAQ Page
    
// Our Made Accordin
    
    
    $(".myquest h4").click(function(){
                    
        if($(this).parent().is(".active")) // if we click on the opened question again
        {
            $(this).parent().removeClass("active");
            $(this).css("textDecoration","none");
            $(this).next().slideToggle(500);
        }
        else
        {
            $(this).parent().siblings(".myquest").removeClass("active");
            $(this).parent().siblings(".myquest").find(".myanswer").slideUp();
            $(this).parent().siblings(".myquest").find("h4").css("textDecoration","none");

            $(this).parent().addClass("active");
            $(this).next().slideToggle(500);
            $(this).css("textDecoration","underline");
        }
    });
    

// Change Color from color option
    
    $("nav .myoption span").click(function(){
        
        if($(this).hasClass("red"))
        {
            $("<link rel=\"stylesheet\" href=\"css/red-theme.css\">").insertAfter("link[href='css/style.css']");
        }
        else
        {
            $("link[href='css/red-theme.css']").remove();
        }
        
    });
    
    
});