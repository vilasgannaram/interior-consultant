const menu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');
const logo = document.getElementById('logo');

// container => wraps only main and footer sections
const container = document.getElementById('container');

const bar_1 = document.getElementById('bar-1');
const bar_2 = document.getElementById('bar-2');
const bar_3 = document.getElementById('bar-3');

let isVisible = true;

menu.addEventListener('click', (e) => {
  if (isVisible) {
    isVisible = false;
    bar_2.style.display = 'none';
    bar_1.classList.add('rotate-45');
    bar_3.classList.add('-rotate-45');

    container.classList.add('hidden');
    logo.classList.add('opacity-0');
    mobileNav.classList.remove('hidden');
  } else {
    isVisible = true;
    bar_2.style.display = 'block';
    bar_1.classList.remove('rotate-45');
    bar_3.classList.remove('-rotate-45');

    container.classList.remove('hidden');
    logo.classList.remove('opacity-0');
    mobileNav.classList.add('hidden');
  }
});
