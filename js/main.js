(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

const yearBtns = document.querySelectorAll('.year-btn');

yearBtns.forEach((btn) => {
  btn.addEventListener('mouseenter', () => {
    btn.querySelector('.month-list').style.display = 'block';
  });

  btn.addEventListener('mouseleave', () => {
    btn.querySelector('.month-list').style.display = 'none';
  });
});
var dropdownBtn = document.querySelector('.dropdown-btn');
var dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', function() {
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});
function selectButton(button) {
    // Remove the "selected" class from all buttons
    var buttons = document.getElementsByClassName("year-btn");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("selected");
    }
  
    // Add the "selected" class to the clicked button
    button.classList.add("selected");
    
  }
  function filterByYear(button) {
    var yearButtons = document.getElementsByClassName('year-btn');
    for (var i = 0; i < yearButtons.length; i++) {
      yearButtons[i].classList.remove('active');
    }
    button.classList.add('active');
    
    var selectedYear = button.getAttribute('data-year');
    
    var newsItems = document.getElementsByClassName('news-item');
    for (var i = 0; i < newsItems.length; i++) {
      var newsYear = newsItems[i].getAttribute('data-year');
      
      if (selectedYear === 'latest') {
        if (newsYear === '2020' || newsYear === '2021') {
          newsItems[i].style.display = 'none';
        } else {
          newsItems[i].style.display = 'block';
        }
      } else if (newsYear === selectedYear) {
        newsItems[i].style.display = 'block';
      } else {
        newsItems[i].style.display = 'none';
      }
    }
  }
  