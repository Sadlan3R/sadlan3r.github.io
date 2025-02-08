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

    var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    var manualNav = function(manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');

            btns.forEach((btn) => {
                btn.classList.remove('active');
            })
        })

        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            manualNav(i);
            currentSlide = i;
        })
    })
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
