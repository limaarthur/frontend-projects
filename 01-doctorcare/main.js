const navigation = document.getElementById('navigation')

function onScroll() {
  if (window.scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

window.addEventListener('scroll', onScroll)