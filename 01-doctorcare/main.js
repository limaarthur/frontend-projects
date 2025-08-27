const navigation = document.getElementById('navigation')
const openMenuButton = document.querySelector('.open-menu')
const closeMenuButton = document.querySelector('.close-menu')
const backToTopButton = document.querySelector('#backToTopButton')

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  if (window.scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  /* console.log(scrollY) -> Mostra a posição atual do scroll em pixels */
  if (window.scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', onScroll)

// Funções do menu
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

// Liga os botões às funções
openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)