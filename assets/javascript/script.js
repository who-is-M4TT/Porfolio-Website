// Typing Text Js
$(document).on('DOMContentLoaded', function () {
    window.ityped.init(document.querySelector('.ityped'), {
        strings: ['HI THERE!', 'I’M MATT', 'Cloud & Infra Tech'],
        loop: true
    });
});
/*------------------------------------- Whole Page Scrolling Animation -------------------------------------*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            target.classList.add('show');
            observer.unobserve(target);
        }
    });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down');

document.addEventListener('DOMContentLoaded', () => {
    hiddenElements.forEach((el) => observer.observe(el));
});
/*------------------------------------- Preloader -------------------------------------*/
(function ($) {
    $(window).on('load', function () {
        const svg = document.getElementById("loade-svg");
        const tl = gsap.timeline();

        const shapes = {
            start: "M0 502S175 272 500 272s500 230 500 230V0H0Z",
            end: "M0 2S175 1 500 1s500 1 500 1V0H0Z"
        };

        tl.to(".loading", {
            delay: 0.3,
            y: -50,
            opacity: 0,
            duration: 0.4
        })
            .to(svg, {
                duration: 0.4,
                attr: { d: shapes.start },
                ease: "power1.easeIn"
            })
            .to(svg, {
                duration: 0.4,
                attr: { d: shapes.end },
                ease: "power1.easeOut"
            })
            .to(".preloader", {
                y: -1000,
                duration: 0.5
            })
            .set(".preloader", {
                zIndex: -1,
                display: "none"
            });
    });
}(jQuery));
/*------------------------------------- Menu Toggle -------------------------------------*/
$(document).ready(function () {
    const $menuToggle = $('#menu-toggle');
    const $sideMenu = $('.side-menu-main');
    const $hamburger = $('.hamburger');

    $(document).on('click', '.menu-list-main li', function (e) {
        e.preventDefault();

        const $link = $(this).find('a');
        const targetId = $link.attr('href') ? $link.attr('href').substring(1) : null;

        if (targetId && $('#' + targetId).length) {
            $('#' + targetId)[0].scrollIntoView({ behavior: 'smooth' });
        }

        $sideMenu.removeClass('show');
        $hamburger.removeClass('is-active');
    });

    $menuToggle.on('click', function () {
        $sideMenu.toggleClass('show');
        $hamburger.toggleClass('is-active', $sideMenu.hasClass('show'));
    });

    new MutationObserver(() => {
        if (!$sideMenu.hasClass('show')) {
            $hamburger.removeClass('is-active');
        }
    }).observe($sideMenu[0], { attributes: true, attributeFilter: ['class'] });
});

/*------------------------------------- Scroll counter -------------------------------------*/
var counted = 0;
$(window).on('scroll', function () {
    var oTop = $('.counter').offset()?.top - window.innerHeight;
    if (counted === 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 800,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });
        counted = 1;
    }
});

/*------------------------------------- Bottom To Top Button -------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.bottom-top-button');
    window.addEventListener('scroll', () => {
        button.style.display = window.pageYOffset > 100 ? 'block' : 'none';
    });
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

/*------------------------------------- Fix Header Add Class -------------------------------------*/
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/*------------------------------------- Menu active button  -------------------------------------*/
const li = document.querySelectorAll(".menu-btn");
const sec = document.querySelectorAll(".active_menus");

function activeMenu() {
    let len = sec.length;
    while (len--) {
        if (window.scrollY + 97 >= sec[len].offsetTop) {
            li.forEach(ltx => ltx.classList.remove("active"));
            li[len].classList.add("active");
            break;
        }
    }
}
activeMenu();
window.addEventListener("scroll", activeMenu);

/*------------------------------------- Footer year -------------------------------------*/
document.getElementById('year').textContent = new Date().getFullYear();
