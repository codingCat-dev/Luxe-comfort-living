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

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
});

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section-hidden');
});
