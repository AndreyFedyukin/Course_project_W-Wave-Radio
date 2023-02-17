

/*header bottom play buttons*/
document.querySelector('.header-bottom__playing-later').addEventListener('click', function () {
  document.querySelector('.header-bottom__playing-later .passive').classList.toggle('btn-active');
});

document.querySelector('.header-bottom__playing-now').addEventListener('click', function () {
  document.querySelector('.header-bottom__playing-now .passive').classList.toggle('btn-active');
});



/*кнопка play-podcasts*/
const buttons = document.querySelectorAll('.podcasts__svg-button')

for (let button of buttons) {
  button.addEventListener("click", e => {
    let activeBtn = document.querySelector('pause')
    if (activeBtn && activeBtn !== e.target) {
      activeBtn.classList.remove('pause')
    }
    button.classList.toggle('pause')
  });
}


/*кнопка Еще подкасты*/
document.querySelector('.podcasts__more-button').addEventListener('click', function () {
  var elements = document.getElementsByClassName('podcasts-item');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("podcasts-item--active");
  }
});

document.querySelector('.podcasts__more-button').addEventListener('click', function () {
  document.querySelector('.podcasts__more-button').classList.toggle('podcasts__more-button--passive')
});



/*selects*/
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});


/*accordion*/
$(".accordion-list").accordion({
  icons: false,
  heightStyle: "content",
  collapsible: true,
  active: true,
});



/*tabs*/
document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });

    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});



/*плавный скролл по якорям*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


/*слайдер*/
let swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  rewind: true,

navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

breakpoints: {

  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },



  992: {
    slidesPerView: 2,
    spaceBetween: 30,
  },

  1200: {
    spaceBetween: 30,
    slidesPerView: 4,
  },
},
});


/*бургер-меню*/
document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('right__block-burger_active')
  document.querySelector('.header__middle-nav').classList.toggle('header__middle-nav_active')
  document.querySelector('.header').classList.toggle('header_active')
  document.querySelector('.header-bottom__nav').classList.toggle('header-bottom__nav_active')
});


/*блок "Что в эфире?"*/
document.querySelector('.header-bottom__btns-mobile').addEventListener('click', function () {
  document.querySelector('.bottom-btns').classList.toggle('header-bottom__playing_active')
  document.querySelector('.header-bottom__btns-mobile').classList.toggle('header-bottom__btns-mobile_active')
  document.querySelector('.header__bottom').classList.toggle('header__bottom_active')
});


/*подключение модального окна*/
const modal = new GraphModal();

/* валидация формы */
new JustValidate('.about-form', {

  colorWrong: 'var(--color-red)',

  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 35
    },

    mail: {
      required: true,
      email: true,
    },

  },
  messages: {
    name: {
      required: 'Ошибка',
      minLength: 'Ошибка',
      maxLength: 'Ошибка'
    },

    mail: {
      required: 'Ошибка',
      email: 'Ошибка'
    },
  },
});