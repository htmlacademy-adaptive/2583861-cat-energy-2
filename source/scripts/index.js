document.querySelector('.navigation').classList.remove('navigation--nojs');
document.querySelector('.contacts').classList.remove('contacts--nojs');

const menuToggle = document.querySelector('.navigation__toggle');
const navigationList = document.querySelector('.navigation__list');

menuToggle.addEventListener ('click', () => {
  navigationList.classList.toggle('navigation__list--opened');
  menuToggle.classList.toggle('navigation__toggle--active');
});
