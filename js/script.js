$(document).ready(function () {
    $('#fullpage').fullpage({
        verticalCentered: true,
        navigation: true,
        navigationPosition: 'right',
        autoScrolling: false,
        responsiveWidth: 970,
        fitToSection: false,
        anchors: ['accueil', 'le-grood-cest', 'comment-ca-marche', 'rejoignez-nous', 'contact-nous'],
        navigationTooltips: ['Accueil', 'Le Grood', 'Comment ça marche', 'Rejoignez-nous', 'Contact-nous'],
        scrollingSpeed: 1000,
        afterResize: function () {
            if ($(window).outerWidth() < 768) {
                $.fn.fullpage.setfitToSection(false);
            } else {
                $.fn.fullpage.setfitToSection(true);
            }
        },

        onLeave: function (index, nextIndex, direction) {
            var header = $(".header");
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();

                if (scroll >= 700) {
                    header.removeClass('header').addClass("header-hover");

                } else {
                    header.removeClass("header-hover").addClass('header');
                }
            });


        }
    });
});

var slideIndex = 0;
showSlides();

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-iphone");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    window.onload = function () {
        setInterval(function () {
            showSlides();
        }, 10000);
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide-iphone");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";


}

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function popModal() {
    // code to pop up modal dialog
}

function popModal() {
    // code to pop up modal dialog
}

var hash = window.location.hash;
if (hash.substring(1) == 'modal1') {
    popModal();
}
jQuery(function($) {

      $('#background-video').YTPlayer({
        fitToBackground: true,
        videoId: 'k0i12s_eYvg',
        pauseOnScroll: false,
        rel:1,
          modestbranding: 0,
          autoplay: 1,
          controls: 0,
          showinfo: 0,
          branding: 0,
          rel: 0,
          autohide: 1
      });

      var videoCallbackEvents = function() {
        var player = $('#background-video').data('ytPlayer').player;

        player.addEventListener('onStateChange', function(event){
            console.log("Player State Change", event);

            // OnStateChange Data
            if (event.data === 0) {
                console.log('video ended');
            }
            else if (event.data === 2) {
              console.log('paused');
            }
        });
      }
    });