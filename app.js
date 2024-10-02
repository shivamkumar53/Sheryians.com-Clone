let isMenuShown = false;

function preventScroll(event) {
    event.preventDefault();
}

function disableScroll() {
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
}

function enableScroll() {
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
}

function navbarAnimation1() {
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    void line1.offsetWidth;
    void line2.offsetWidth;
    line1.classList.toggle('decreaseWidthRightToLeft');
    line2.classList.toggle('decreaseWidthLeftToRight');
}

function showMenu() {
    const menuPanel = document.querySelector(".menu-panel");
    if (!isMenuShown) {
        navbarAnimation1();
        menuPanel.classList.add("menu-show");
        menuPanel.classList.remove("close-menu");
        growanimation();
        disableScroll();
        isMenuShown = true;
    }
}

function hideMenu() {
    const menuPanel = document.querySelector(".menu-panel");
    menuPanel.classList.remove("menu-show");
    menuPanel.classList.add("close-menu");
    navbarAnimation1();
    resetGrowAnimation();
    enableScroll();
    isMenuShown = false;
}

function growanimation() {
    const closeLine = document.querySelector('.close-line');
    const closeLine2 = document.querySelector('.close-line-2');
    if (closeLine && closeLine2) {
        setTimeout(() => {
            void closeLine.offsetWidth;
            void closeLine2.offsetWidth;
            closeLine.classList.add('growanimation');
            closeLine2.classList.add('growanimation');
        }, 500);
    }
}

function resetGrowAnimation() {
    const closeLine = document.querySelector('.close-line');
    const closeLine2 = document.querySelector('.close-line-2');
    if (closeLine && closeLine2) {
        setTimeout(() => {
            closeLine.classList.remove('growanimation');
            closeLine2.classList.remove('growanimation');
            void closeLine.offsetWidth;
            void closeLine2.offsetWidth;
        }, 1000);
    }
}


let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down, hide the navbar
    navbar.style.top = '-100px'; 
  } else {
    // Scrolling up, show the navbar
    navbar.style.top = '0'; 
  }

  lastScrollTop = currentScrollTop;
});
