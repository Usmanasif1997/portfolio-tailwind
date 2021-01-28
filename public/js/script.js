
// Typed Js
var typed = new Typed('.element', {
    strings: ['Digital Marketing Expert', 'Full Stack Developer', 'Designer'],
    typeSpeed: 100,
    backDelay: 3000,
    backSpeed: 50,
    loop: true
});


//  WOW Js
new WOW().init();

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
dots:false,
// animateOut: 'fadeOut',
touchDrag:true,
mouseDrag:true,
autoplay:true,
 smartSpeed: 1000,
// autoplayHoverPause: true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
