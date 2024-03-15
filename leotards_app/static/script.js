function navbar() {
  var header = document.getElementById('header')
  if (window.innerWidth >= 768) {
    header.innerHTML = '<div class="container">' +
      '<header class="d-flex justify-content-center py-3">' +
      '<ul class="nav nav-pills">' +
      '<li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>' +
      '<li class="nav-item"><a href="#" class="nav-link">Features</a></li>' +
      '<li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>' +
      '</ul>' +
      '</header>' +
      '</div>'
  } else {
    header.innerHTML = '<div class="container">' +
      '<header class="py-3 d-flex justify-content-between align-items-center">' +
      '<a class="cormorant text-black text-decoration-none" href="/">Che Leotards</a>' +
      '<button class="navbar-btn" data-bs-toggle="collapse" data-bs-target="#navbar"></button>' +
      '</header>' +
      '</div>' +
      '<div class="collapse container" id="navbar">' +
      '<ul class="list-unstyled">' +
      '<li class="mb-3"><a class="text-black text-decoration-none" href="#"><small>Галерея</small></a></li>' +
      '<li class="mb-3"><a class="text-black text-decoration-none" href="/conditions"><small>Дистанционное сотрудничсетво</small></a></li>' +
      '<li class="mb-3"><a class="text-black text-decoration-none" href="/contact"><small>Контакты</small></a></li>' +
      '</ul>' +
      '</div>'
  }
}
const fullHeight = () => {
  const el = document.getElementById('bg-img')
  const el_ = document.getElementById('full-nfooter') 
  el.style.height = `${window.innerHeight}px`
}

navbar()
fullHeight()
window.addEventListener("resize", navbar);
