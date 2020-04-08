function openMobileNav () {
  // get nav-list element from HTML document
  let navList = document.querySelector('nav ul')
  // get hamburger element from HTML document
  let hamburger = document.querySelector('.hamburger')

  // toggle class to show nav mobile
  navList.classList.toggle('show-mobile-nav')
  // toggle class to show hamburger close when nav open
  hamburger.classList.toggle('hamburger-close')
}

let adjustNavSizeOnScroll = () => {
  let navbar = document.querySelector('nav.navigation')
  if (window.scrollY > 100) {
    navbar.classList.add('scroll-nav')
  } else {
    navbar.classList.remove('scroll-nav')
  }
}
window.addEventListener('scroll', adjustNavSizeOnScroll)

// create an eventlistener for scroll
// in function, get navbar element
// window scrollY
// if scrollY > pixel, add class => scroll-nav
// else remove scroll-nav
// create scroll-nav class, change height of nav
// adjust font size of .logo elements and list-items
