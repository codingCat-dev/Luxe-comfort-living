'use strict';
// STICKY NAVIGATION
const navbar = document.querySelector('.nav');

const navbarScrollingFunction = () => {
  if (window.scrollY != 0) {
    navbar.classList.add('nav-small');
  } else {
    navbar.classList.remove('nav-small');
  }
};
document.addEventListener('scroll', navbarScrollingFunction);

const readMoreArticle = document.querySelector('.hidden-article');

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
});
