const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
shoppingCartIcon.addEventListener('click',toggleShoppingCartAside)

function toggleDesktopMenu() {

    const isAsideOpen = !aside.classList.contains('inactive')

    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive')
    

    if (isAsideOpen) {
        aside.classList.add('inactive')

    }

    mobileMenu.classList.toggle('inactive')

}

function toggleShoppingCartAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive')
   
    
    if (isMobileMenuOpen ) {
        mobileMenu.classList.add('inactive')

    } else if (isdesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    } 

    aside.classList.toggle('inactive')
    
}
