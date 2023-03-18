let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__row__nav');
let menuLinks = document.querySelectorAll('.header__list__item__link');

burger.addEventListener('click', 
function() {
    burger.classList.toggle('burgerActive');
    menu.classList.toggle('header__row__navActive');
    document.body.classList.toggle('stopScroll');
})

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burgerActive');
        menu.classList.remove('header__row__navActive');
        document.body.classList.remove('stopScroll');
    })
})


let tabsBtn = document. querySelectorAll('.tabs__nav__button');
let tabsItem = document.querySelectorAll('.tabs__item');
                    
tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    tabsBtn.forEach(function(btn) {btn.classList.remove('tabs__nav__buttonActive')});
    e.currentTarget.classList.add('tabs__nav__buttonActive');
    tabsItem.forEach(function(element) {element.classList.remove('tabs__itemActive')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__itemActive');
  });
});



const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});


new Accordion ('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__trigger',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});


document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('openSearch__form').addEventListener('click', (e) => {
    document.getElementById('searchForm').classList.add('searchForm__show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('searchForm').classList.remove('searchForm__show')
  })

  document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault()
    
  })
})