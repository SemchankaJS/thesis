'use strict';

import modalWindow from './modules/modalWindow';
import slider from './modules/slider';
import SliderCarousel from "./modules/SliderCarousel";
import scrolls from './modules/scrolls';
import sendForm from './modules/sendForm';
import accordeon from './modules/accordeon';
import maskPhone from './modules/maskPhone';
import modalWindow2 from './modules/modalWindow2';



const carousel = new SliderCarousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    next: '.arrow-right',
    prev: '.arrow-left',
    slidesToShow: 3,
    infinity: true,
    responsive: [{
      breakpoint: 1024, 
      slidesToShow: 3,
    },
    {
      breakpoint: 768, 
      slidesToShow: 2,
    },
    {
      breakpoint: 576, 
      slidesToShow: 1,
    },
    ]
  });
  carousel.init();

// Модальное окно и подложка
   
modalWindow();

// Главный слайдер
  
slider();

// Карусель

carousel();

// Прокрутка страницы

scrolls();

// Отправка данных
sendForm();

// Аккордион
accordeon();

maskPhone('.tel');

modalWindow2();