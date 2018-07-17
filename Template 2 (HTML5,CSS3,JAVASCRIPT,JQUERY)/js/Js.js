//                     Start Head


// Set the .head width and height

var head = document.getElementsByClassName("head")[0],
    width = window.innerWidth,
    height = window.innerHeight;

head.style.width = width+"px";
head.style.height = height+"px";


// If the window is resizing

window.onresize = function(){
    
    // Set the .head width and height onresize event
    
    width = window.innerWidth;
    height = window.innerHeight;
    
    head.style.width = width+"px";
    head.style.height = height+"px";
    
    // Center the bxslider
    
    var nav = document.querySelector(".head nav"),
    bxslider = document.querySelector(".head header");
    
    // here clientHeight is equal to offsetHeight
    bxslider.style.top = (window.innerHeight - bxslider.offsetHeight) / 2 - nav.offsetHeight + "px";
    // we subtract nav.offsetHeight because we will not make top to bxslider from the start of the head the top will be made from after the nav
};

// Add .active to the selected li



function liActive()
{
    var li = document.querySelectorAll(".head nav ul li"),
    i;
    
    for(i=0; i<li.length; i++)
    {
        if(li[i].classList.contains("active"))
        {
            li[i].classList.remove("active");
        }
    }
    this.classList.add("active");
    
    
// Smooth Scroll
    
    var id = this.dataset.value;
    
    var element = document.getElementById(id);
    
    var i = setInterval(function(){
        
        if(window.scrollY < element.offsetTop && window.scrollY < (document.documentElement.scrollHeight - document.documentElement.clientHeight)) // scrollMaxY that property is depricated(still work) so instead we use
        {
            window.scrollBy(0,5);
        }
        else
        {
            clearInterval(i);
        }
        
    },10);
    
}

var li = document.querySelectorAll(".head nav ul li"),
    i;

for(i=0; i<li.length; i++)
{
    li[i].addEventListener("click",liActive);
}


// Trigger the bxslider (make it work)

$('.bxslider').bxSlider({
    
    pager: false // disable circles
    
});

// Center the bxslider

var nav = document.querySelector(".head nav"),
bxslider = document.querySelector(".head header");

// here clientHeight is equal to offsetHeight
bxslider.style.top = (window.innerHeight - bxslider.offsetHeight) / 2 - nav.offsetHeight + "px";
// we subtract nav.offsetHeight because we will not make top of the bxslider from the start of the head the top will be made from after the nav


// Center the button

var button = document.querySelector(".head button");

button.style.left = (window.innerWidth - button.offsetWidth) / 2 + "px";
button.style.bottom = window.innerHeight * 0.10 + "px";

//                    End Head


//                    Start Our-Team

// overit pictures

function over(){
    this.children[1].classList.add("overit"); // this means the element that will call that function when the event of that element is triggered
}

var element = document.querySelectorAll(".our-team section .img");


for(var i=0; i<element.length; i++)
{
    element[i].addEventListener("mouseleave",function(){this.children[1].classList.remove("overit");});
    element[i].addEventListener("mouseenter",over);
}

//                    End Our-Team


//                    Start TestiMonials

// Slider

// look at Notice 1 in FullBom.js in setInterval lesson
// the inner setInterval of the opacity will take 300 for the first start then it will take 3000 to be end so it take 3300 to finish as soon as it finishies
// the outer setInterval will be executed to remove class show and add it to another div

window.onload = setInterval(function(){
    
    var ele = document.querySelector(".testi .show");
    
    var i = setInterval(function(){
        
        if(!ele.style.opacity)
        {
            ele.style.opacity = 1;
        }
        if(ele.style.opacity > 0)
        {
            ele.style.opacity -= 0.1;
        }
        else
        {
            clearInterval(i);
        }
    },300);
    
    
    ele.classList.remove("show");
    
    if(ele.nextElementSibling != null)
    {
        ele = ele.nextElementSibling;
        ele.classList.add("show");
        ele.style.opacity = 1;
    }
    else
    {
        ele = document.querySelector(".testi section");
        ele.classList.add("show");
        ele.style.opacity = 1;
    }
    
},3300);


//                    End TestiMonials

//                    Start Portfolio

// Trigger Mixitup shuffle plugin

$('#Container').mixItUp();

function clickli(){
    
    document.querySelector(".port ul .select").classList.remove("select");
    this.classList.add("select"); // the element that will trigger that function by click event
}

var ele = document.querySelectorAll(".port ul li");

for(var c=0; c<ele.length; c++)
{
    ele[c].addEventListener("click",clickli);
}

//                    End Portfolio



// Put (Trigger) Scroll Plugin

$("html").niceScroll({
    
    cursorcolor: "#1ABB9A",
    
    cursorborder: "1px solid #1ABB9A"
});