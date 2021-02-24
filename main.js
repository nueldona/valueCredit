let marker = document.querySelector('#marker');
let links = document.querySelectorAll('nav .link');
const menuBtn = document.querySelector('.header__menu-btn');
const mobileLayer = document.querySelector('.mobile-navigations')
let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
  if (!menuOpen) {
    menuBtn.classList.add('open')
    mobileLayer.classList.add('show')
    menuOpen = true
  } else {
    menuBtn.classList.remove('open')
    mobileLayer.classList.remove('show')
    menuOpen = false
  }
})


let btn = document.getElementsByClassName('btn');
let slide = document.getElementById('slide');

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (let i = 0; i < 4; i++) {
    btn[i].classList.remove('active')
  }
  this.classList.add('active')
}

btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (let i = 0; i < 4; i++) {
    btn[i].classList.remove('active')
  }
  this.classList.add('active')
}

btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  for (let i = 0; i < 4; i++) {
    btn[i].classList.remove('active')
  }
  this.classList.add('active')
}

btn[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";
  for (let i = 0; i < 4; i++) {
    btn[i].classList.remove('active')
  }
  this.classList.add('active')
}

