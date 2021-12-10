//mobile menu
const burgericon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgericon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active');
});
