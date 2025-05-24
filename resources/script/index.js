document.addEventListener('DOMContentLoaded', () => {
    var mobileButton = document.querySelector('.mobilemenubutton');
    var mobileButtonHeader = document.querySelector('.mobileheader');
    var navMenu = document.querySelector('.mobilenav');

    mobileButton.addEventListener('click', () => {
        if (navMenu.style.display === 'none' || !navMenu.style.display) {
            mobileButtonHeader.classList.toggle('active');
            navMenu.classList.toggle('active');
        }
    })

    function checkWidth() {
        if (window.innerWidth > 880) {
            mobileButtonHeader.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }

    window.addEventListener('resize', checkWidth);

})

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active-collapsible");
        var content = this.nextElementSibling;
        if (content.classList.contains("active-collapsible")) {
            content.classList.remove("active-collapsible");
        } else {
            content.classList.add("active-collapsible");
        }
    });
}

var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        0: {
          slidesPerView: 1,

        },
        720: {
          slidesPerView: 2,

        },
        1120: {
          slidesPerView: 3,
 
        },
      },
});