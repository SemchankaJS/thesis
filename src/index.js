// Модальное окно и подложка
    const modalWindow = () => {
        const callback = document.querySelector('.modal-callback');
        const modalOverlay = document.querySelector('.modal-overlay');
        const modalBtn = document.querySelectorAll('a')[5];
        const modalClose = document.querySelector('.modal-close>img');

        modalBtn.addEventListener('click', () => {
            callback.style.display = 'block';
            modalOverlay.style.display = 'block';
        });

        modalClose.addEventListener('click', () => {
            callback.style.display = 'none';
            modalOverlay.style.display = 'none';

            document.querySelectorAll('input').forEach(item => {
                if (item.type === 'text' || item.type === 'tel') {
                    item.value = '';
                }
            });
        });

        modalOverlay.addEventListener('click', () => {
            callback.style.display = 'none';
            modalOverlay.style.display = 'none';
        });
    };
modalWindow();

// Главный слайдер
 const slider = () => {
    let indexSlider = 1;
    const sliderItem = document.querySelectorAll('.item');
    const table = document.querySelectorAll('.table');
  
    table.forEach(item => {
      item.classList.add('table');
    });
  
    const showSlides = (n) => {
      if (n > sliderItem.length) {
        indexSlider = 1;
      }
      if (n < 1) {
        indexSlider = sliderItem.length;
      }
      sliderItem.forEach(item => {
        item.classList.add('animated');
        item.style.display = 'none';
      });
      sliderItem[indexSlider - 1].style.display = 'block';
      table.forEach(item => {
        item.classList.remove('active');
      });
    };
  
  
    showSlides(indexSlider);
  
    const nextSlides = (n) => {
      showSlides(indexSlider += n);
    };
  
    setInterval(() => {
      nextSlides(1);
      sliderItem[indexSlider - 1].classList.remove('fadeIn');
      sliderItem[indexSlider - 1].classList.add('fadeIn');
      setTimeout(() => {
        return table[indexSlider - 1].classList.add('active');
      }, 30);
      setTimeout(() => {
        return table[indexSlider - 1].classList.remove('active');
      }, 2550);
    }, 3000);
};
  
slider();