//
// ---------------- burger menu
//
const body = document.querySelector('body');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.header__menu-link');
const logo = document.querySelector('.header__logo');
const headerBtn = document.querySelector('.header__btn');
const socialLinks = document.querySelectorAll('.header__social-link');
const links = [...menuLinks, logo, headerBtn, ...socialLinks];
const header = document.querySelector('.header');
const wrapper = document.querySelector('.wrapper');

if (burgerMenu) {

    burgerMenu.classList.add('toggled');
    burgerMenu.addEventListener('click', (e) => {
        burgerMenu.classList.toggle('active');
        burgerMenu.classList.toggle('toggled');
        body.classList.toggle('fixed');
        nav.classList.toggle('active');
        header.classList.toggle('active');
    });
}
if (links) {

    function closeBurgerMenu() {
        links.forEach((item) => {
            if (item != null) {
                item.addEventListener('click', () => {
                    burgerMenu.classList.remove('active');
                    burgerMenu.classList.add('toggled');
                    body.classList.remove('fixed');
                    nav.classList.remove('active');
                    header.classList.remove('active');
                });
            }
        });

    }
    closeBurgerMenu()
}

// ---------------- THE END

document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-box')) {
        if (langSelect) {
            langSelect.classList.remove('active');
        }
    }

})


// Переключение языков

const lang = document.querySelector('.lang');
const langSelect = document.querySelector('.lang-select');
const languages = document.querySelectorAll('.lang-select__option');

if (lang) {
    lang.addEventListener('click', () => {
        langSelect.classList.add('active');
        if (languages) {
            languages.forEach(item => {
                item.addEventListener('click', (e) => {
                    const dataLang = e.currentTarget.dataset.lang;

                    if (dataLang !== lang.dataset.lang) {
                        lang.dataset.lang = dataLang;
                        lang.querySelector('span').textContent = e.currentTarget.querySelector('span').textContent;
                    }

                    langSelect.classList.remove('active');
                })
            })
        }
    })
}


//
// ---------------------------------------------------------------- slider swiper
//


const swiper = new Swiper('.slider-swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    // autoplay: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoHeight: true,

    // Количество слайдов для показа
    slidesPerView: 1,
    // Отступ между слайдами
    spaceBetween: 30,
    // Количество пролистываемых слайдов
    slidesPerGroup: 1,

    // Отключение функционала, если слайдов меньше чем нужно
    // watchOverflow: true,
    // Пролистование слайдов с помощью scroll
    // mousewheel: {
    //     sensitivity: 1,
    //     eventTarget: ".newsgame__item"
    // },
    breakpoints: {
        385: {
            slidesPerView: 1.25,
            slidesPerGroup: 1,
        },
        540: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
        },
        750: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        900: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
        },
        1100: {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },

    }

});


//
// ----------------------------------------------------------------   GSAP
//


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();


tl.fromTo('.wrapper', { opacity: 0 }, { opacity: 1, duration: 1 })
    .fromTo('.hero__title', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, 1.5)
    .fromTo('.hero__text', { opacity: 0 }, { opacity: 1, duration: 2 }, 2)
    .fromTo('.hero__btn-game', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5 }, 2.2)
    .fromTo('.hero__btn-info', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5 }, 2.4)
    .fromTo('.hero__img-wrapper', { opacity: 0, x: '100%' }, { opacity: 1, x: 0, duration: 1 }, 2.6)
    .fromTo('.hero-monitoring__title', { opacity: 0, x: '-100%' }, { opacity: 1, x: 0, duration: 0.5 }, 3.5)
    .fromTo('.hero-monitoring__desc', { opacity: 0, x: '-200%' }, { opacity: 1, x: 0, duration: 0.5 }, '-=0.5')
    .fromTo('.hero-monitoring__item-1', { opacity: 0, x: '-100%' }, { opacity: 1, x: 0, duration: 0.5 })
    .fromTo('.hero-monitoring__item-2', { opacity: 0, x: '100%' }, { opacity: 1, x: 0, duration: 0.5 }, '-=0.5')


//  hero scroll animation

gsap.fromTo('.hero__img-wrapper', {
    opacity: 1,
}, {
    scrollTrigger: {
        trigger: '.hero',
        // markers: true,
        start: 'top top',
        scrub: true,
    },
    xPercent: 20,
    yPercent: 10,
    scale: 0.8,
    opacity: 0.5,
})

gsap.to('.hero__content', {
    scrollTrigger: {
        trigger: '.hero',
        // markers: true,
        start: 'top top',
        scrub: 1,
    },
    yPercent: -15,
})


//  why scroll animation

gsap.from('.why__title', {
    scrollTrigger: {
        trigger: '.why__title',
        // markers: true,
        start: '-300px center',
        end: '+=300px',
    },
    scale: 0,
})

gsap.from('.why__item-1 .why__info', {
    scrollTrigger: {
        trigger: '.why__item-1',
        start: '-100px center',
        end: '+=300px',
    },
    xPercent: -100,
    opacity: 0,
    ease: Back.easeOut.config(1.7),
    duration: 1.2,
})
gsap.from('.why__item-1 .why__images', {
    scrollTrigger: {
        trigger: '.why__item-1',
        start: '-100px center',
        end: '+=300px',
    },
    xPercent: 50,
    opacity: 0,
    ease: Back.easeOut.config(1.7),
    duration: 1.2,
})

gsap.from('.why__item-3 .why__info', {
    scrollTrigger: {
        trigger: '.why__item-3',
        start: '-100px center',
        end: '+=300px',
    },
    xPercent: -100,
    opacity: 0,
    ease: Back.easeOut.config(1.7),
    duration: 1.2,
})
gsap.from('.why__item-3 .why__images', {
    scrollTrigger: {
        trigger: '.why__item-3',
        start: '-100px center',
        end: '+=300px',
    },
    xPercent: 50,
    opacity: 0,
    ease: Back.easeOut.config(1.7),
    duration: 1.2,
})

if (window.innerWidth > 1100) {
    gsap.from('.why__item-2 .why__info', {
        scrollTrigger: {
            trigger: '.why__item-2',
            start: '-100px center',
            end: '+=300px',
        },
        xPercent: 100,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
    })
    gsap.from('.why__item-2 .why__images', {
        scrollTrigger: {
            trigger: '.why__item-2',
            start: '-100px center',
            end: '+=300px',
        },
        xPercent: -50,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
    })
    gsap.from('.why__item-4 .why__info', {
        scrollTrigger: {
            trigger: '.why__item-4',
            start: '-100px center',
            end: '+=300px',
        },
        xPercent: 100,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
    })
    gsap.from('.why__item-4 .why__images', {
        scrollTrigger: {
            trigger: '.why__item-4',
            start: '-100px center',
            end: '+=300px',
        },
        xPercent: -50,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
    })
} else {
    gsap.from('.why__item-2 .why__info', {
        scrollTrigger: {
            trigger: '.why__item-2',
            start: '-100px center',
            end: '+=300px',
        },
        xPercent: -100,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
    })
    gsap.from('.why__item-2 .why__images', {
        scrollTrigger: {
            trigger: '.why__item-2',
            start: '-100px center',
            end: '+=300px',
        },
        xPercent: 50,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
    })
    gsap.from('.why__item-4 .why__info', {
        scrollTrigger: {
            trigger: '.why__item-4',
            start: '-100px center',
            end: '+=300px',
        },
        xPercent: -100,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
    })
    gsap.from('.why__item-4 .why__images', {
        scrollTrigger: {
            trigger: '.why__item-4',
            start: '-100px center',
            end: '+=300px',
        },
        xPercent: 50,
        opacity: 0,
        ease: Back.easeOut.config(1.7),
        duration: 1.2,
    })
}


// download animation

gsap.from('.download__title', {
    scrollTrigger: {
        trigger: '.download__title',
        // markers: true,
        start: '-300px center',
        end: '+=300px',
    },
    scale: 0,
})

gsap.from('.download__item', {
    scrollTrigger: {
        trigger: '.download__list',
        start: '-100px center',
        end: '+=300px',
    },
    x: -20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.25,
})
gsap.from('.download__img', {
    scrollTrigger: {
        trigger: '.download__img',
        start: '-10px center',
        end: '+=300px',
    },
    opacity: 0,
    duration: 1,
})
gsap.from('.download__btn', {
    scrollTrigger: {
        trigger: '.download__buttons',
        start: '-10px center',
        end: '+=300px',
    },
    opacity: 0,
    y: 50,
    stagger: 0.25,
})
gsap.from('.download__link', {
    scrollTrigger: {
        trigger: '.download__link',
        start: '-10px center',
        end: '+=300px',
    },
    opacity: 0,
    y: 50,
})
gsap.from('.download__text-decor', {
    scrollTrigger: {
        trigger: '.download__text-decor',
        start: '-10px center',
        end: '+=300px',
    },
    opacity: 0,
    y: 50,
})


// news animation

gsap.from('.newsgame__title', {
    scrollTrigger: {
        trigger: '.newsgame__title',
        start: '-100px center',
        end: '+=300px',
    },
    scale: 0,
})
gsap.from('.slider-swiper', {
    scrollTrigger: {
        trigger: '.slider-swiper',
        start: '-100px center',
        end: '+=300px',
    },
    opacity: 0,
    duration: 3,
})
gsap.from('.swiper__btn', {
    scrollTrigger: {
        trigger: '.slider-swiper',
        start: '-100px center',
        end: '+=300px',
    },
    opacity: 0,
    duration: 3,
})
// screenshotgame__titleanimation

gsap.from('.screenshotgame__title', {
    scrollTrigger: {
        trigger: '.screenshotgame__title',
        start: '-150px center',
        end: '+=300px',
    },
    scale: 0,
})

gsap.from('.screenshotgame__item-img', {
    scrollTrigger: {
        trigger: '.screenshotgame__items',
        start: '10px center',
        end: '+=300px',
    },
    opacity: 0,
    x: -50,
    stagger: 0.25,
    duration: 0.8,
})