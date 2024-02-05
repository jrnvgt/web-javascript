'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const navbarBurger = document.getElementById('navbar-burger');
  navbarBurger.addEventListener('click', navbarBurgerHandler);
});

function navbarBurgerHandler(event) {
  const hamburger = event.currentTarget;
  const menu = document.getElementById('navbar-menu');

  hamburger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
}
