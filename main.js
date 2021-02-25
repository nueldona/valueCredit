// nav open and close

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

// navigation


//Carousel   

// let btn = document.getElementsByClassName('btn');
// let slide = document.getElementById('slide');

// btn[0].onclick = function () {
//   slide.style.transform = "translateX(0px)";
//   for (let i = 0; i < 4; i++) {
//     btn[i].classList.remove('active')
//   }
//   this.classList.add('active')
// }

// btn[1].onclick = function () {
//   slide.style.transform = "translateX(-800px)";
//   for (let i = 0; i < 4; i++) {
//     btn[i].classList.remove('active')
//   }
//   this.classList.add('active')
// }

// btn[2].onclick = function () {
//   slide.style.transform = "translateX(-1600px)";
//   for (let i = 0; i < 4; i++) {
//     btn[i].classList.remove('active')
//   }
//   this.classList.add('active')
// }

// btn[3].onclick = function () {
//   slide.style.transform = "translateX(-2400px)";
//   for (let i = 0; i < 4; i++) {
//     btn[i].classList.remove('active')
//   }
//   this.classList.add('active')
// }

// Carousel End

// Range slides 
const slideValues = document.querySelectorAll("#sliderValue")
const sliderValuesN = document.querySelectorAll('#sliderValueN');
const amountRange = document.querySelector('.amount__range span')
const dayRange = document.querySelector('.days__range span')
const secondRange = document.querySelector('#secondRange');
const firstRange = document.querySelector('#firstRange');
const TotalAmount = document.querySelector('#TotalAmount');



firstRange.oninput = (() => {
  let FValue = firstRange.value;
  
  amountRange.textContent = FValue
  
  slideValues.forEach((slideValue) => {
    slideValue.innerHTML = `<span>&#8358;</span> ${FValue},000`;
  });
});

secondRange.oninput = (() => {
  let SValue = secondRange.value;
  
  dayRange.textContent = SValue

  sliderValuesN.forEach((sliderValueN) => {
    sliderValueN.innerHTML = `${SValue} days`;
  });
});


// const inputSliders = document.querySelectorAll('.field input');
// inputSliders.forEach((inputSlider)=> {
//   console.log(inputSlider)
//   // inputSlider[1].oninput = (() => {
//   //   console.log(inputSlider[0].value)
//   // })

//   // inputSlider.oninput = (()=> {
//   //   // console.log(inputSlider.value)
//   //   let value = inputSlider.value;
//   //   slideValues.forEach((slideValue) => {
//   //     slideValue.textContent = value ;
//   //   })
//   // })
// })


