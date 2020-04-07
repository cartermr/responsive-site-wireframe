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