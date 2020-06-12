const showGift = () => {
  const isValid = document.getElementsByClassName('formInput')[0].value.length >= 7;

  isValid ? sendGift() : errorGift()
}

const sendGift = () => {
  alert('На ваш номер отправлен подарок')
}

const errorGift = () => {
  alert('Номер телефона должен состоять из 7 и более символов');
}

let currentSlide = 1;


const checkCurrentSlide = (number) => {
  if (currentSlide !== number) {
    currentSlide = number;
    const slides = document.getElementsByClassName('sliderImage');
    const dots = document.getElementsByClassName('dot');

    for (let i = 0; i < slides.length; i++) {
      if (number === i + 1) {
        slides[i].classList.remove('sliderImage-unactive');
        dots[i].classList.add('dotAcitve');
      } else {
        slides[i].classList.add('sliderImage-unactive');
        dots[i].classList.remove('dotAcitve');
      }
    }
  }

}

function checkImagesSize() {
  const slides = document.getElementsByClassName('sliderImage');
  const dots = document.getElementsByClassName('dot');
  const slidesNotHidden = [];

  for (let i = 0; i < slides.length; i++) {
    if (checkWidth(i)) {
      slides[i].classList.add('hide');
      dots[i].classList.add('hide')
    } else {
      slidesNotHidden.push(i + 1);
      slides[i].classList.remove('hide');
      dots[i].classList.remove('hide')
    }
  }

  if (slidesNotHidden.length !== 0) {
    checkCurrentSlide(slidesNotHidden[0]);
    showSlider()
  } else {
    hideSlider();
  }
}

const hideSlider = () => {
  if (document.getElementsByClassName('sliderImage hide').length === document.getElementsByClassName('sliderImage').length) {
    document.getElementsByClassName('sectionSlider')[0].classList.add('hide');
  }
}

const showSlider = () => {
  document.getElementsByClassName('sectionSlider')[0].classList.remove('hide');
}

window.addEventListener('resize', checkImagesSize);

const checkWidth = (id) => {
  const image = document.getElementsByClassName('sliderImage')[id];

  return image.naturalWidth > document.documentElement.clientWidth ? true : false
}

const changeWindow = (id) => {
  const windows = document.getElementsByClassName('calculatorWindow');
  const names = document.getElementsByClassName('windowItem-text');
  
  for(let i = 0; i < windows.length; i++) {
    if (id === i + 1) {
      windows[i].classList.remove('hide');
      names[i].classList.add('windowItem-text_active');
    } else {
      windows[i].classList.add('hide');
      names[i].classList.remove('windowItem-text_active');
    }
  }
}

checkImagesSize();