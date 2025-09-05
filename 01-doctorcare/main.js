const navigation = document.getElementById('navigation')
const openMenuButton = document.querySelector('.open-menu')
const closeMenuButton = document.querySelector('.close-menu')
const backToTopButton = document.querySelector('#backToTopButton')

// Seleciona todas as seções dentro do <main> que possuem um atributo id
const sections = document.querySelectorAll('section[id]')

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  sections.forEach(section => {
    activateMenuAtCurrentSection(section)
  })
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // Verifica se a seção passou da linha
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // Verefica se a base está abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // Limites da seção
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href="#${sectionId}"]`)

  if (!menuElement) return // evita erro se o link não for encontrado

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
/* Até aqui */

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