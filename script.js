//Toggle navigation menu on mobile
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('is-active');
    navMenu.classList.toggle('open');
})

// Put navigation menu under navbar when navbar is open on small screen
const pageHeaderHeight = document.getElementById('page-header').offsetHeight;
navMenu.style.setProperty('--page-header-height', `${pageHeaderHeight}px`);