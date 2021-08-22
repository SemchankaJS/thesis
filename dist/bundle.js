(()=>{"use strict";function e(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw a}}}}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function n(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var r,i,a,l,c;i=document.querySelector(".modal-callback"),a=document.querySelector(".modal-overlay"),l=document.querySelectorAll("a")[5],c=document.querySelector(".modal-close>img"),l.addEventListener("click",(function(){i.style.display="block",a.style.display="block"})),c.addEventListener("click",(function(){i.style.display="none",a.style.display="none",document.querySelectorAll("input").forEach((function(e){"text"!==e.type&&"tel"!==e.type||(e.value="")}))})),a.addEventListener("click",(function(){i.style.display="none",a.style.display="none"})),function(){var e=1,t=document.querySelectorAll(".item"),n=document.querySelectorAll(".table");n.forEach((function(e){e.classList.add("table")}));var o=function(o){o>t.length&&(e=1),o<1&&(e=t.length),t.forEach((function(e){e.classList.add("animated"),e.style.display="none"})),t[e-1].style.display="block",n.forEach((function(e){e.classList.remove("active")}))};o(e),setInterval((function(){o(e+=1),t[e-1].classList.remove("fadeIn"),t[e-1].classList.add("fadeIn"),setTimeout((function(){return n[e-1].classList.add("active")}),30),setTimeout((function(){return n[e-1].classList.remove("active")}),2550)}),3e3)}(),r=function(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}},function(){new(function(){function e(t){var n=t.main,o=t.wrap,r=t.next,i=t.prev,a=t.position,l=void 0===a?0:a,c=t.slidesToShow,s=void 0===c?3:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&o||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"!'),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=s,this.options={position:l,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow}}var t,n;return t=e,(n=[{key:"init",value:function(){this.addClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider()}},{key:"addClass",value:function(){this.main.classList.add("slider"),this.wrap.classList.add("slider__wrap");var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.id="sliderCarousel-style",e.textContent="\n        .slider{\n          overflow: hidden !important;\n        }\n        .slider__wrap{\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .slider__item{\n          display: flex !important;\n          align-items: center;\n          justify-content: center;\n          flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n          margin: auto 0 !important;\n        }\n      "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){this.prev=document.querySelector(".arrow-left"),this.next=document.querySelector(".arrow-right")}}])&&r(t.prototype,n),e}())({main:".services-elements",wrap:".services-carousel",prev:"#test-left",next:".arrow-right",slidesToShow:3}).init();var e=document.querySelectorAll(".element");[e[0],e[1],e[2],e[3],e[4],e[5]].forEach((function(e){e.addEventListener("click",(function(){var e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),n=document.querySelector(".modal-close>img");e.style.display="block",t.style.display="block",n.addEventListener("click",(function(){e.style.display="none",t.style.display="none",document.querySelectorAll("input").forEach((function(e){"text"!==e.type&&"tel"!==e.type||(e.value="")}))})),t.addEventListener("click",(function(){e.style.display="none",t.style.display="none"}))}))}))}(),function(){var e,t=document.querySelector(".up");(e=document.createElement("style")).textContent="\n      .up {\n        display: none;\n      }  \n      .up-active {\n        display: block !important;\n      }\n      ",document.head.appendChild(e);var n=function(){var e=window.pageYOffset;e>=503&&t.classList.add("up-active"),0===e&&t.classList.remove("up-active")};n(),t.addEventListener("click",(function(){window.pageYOffset>0&&window.scrollTo(window.pageYOffset,0)})),document.addEventListener("scroll",n)}(),function(){var e=document.querySelectorAll("input"),t=document.getElementsByName("fio")[0],n=document.createElement("div");n.style.cssText="\n    font-size: 2rem;\n    color: black;\n    text-align: center;\n  ",document.addEventListener("input",(function(e){"Ваше имя"===e.target.placeholder&&(e.target.value=e.target.value.replace(/[^а-яё\s]/gi,""))})),e.forEach((function(e){e.addEventListener("blur",(function(){t.value=t.value.replace(/([а-яё])([а-яё]+)/gi,(function(e,t,n){return t.toUpperCase()+n}))}))}));var o=!1;document.addEventListener("input",(function(e){"Ваше имя"===e.target.placeholder&&/^[а-яё]{3,20}$/i.test(e.target.value)?o=!0:(o=!1,o="Телефон*"===e.target.placeholder&&18===e.target.value.length)})),document.addEventListener("submit",(function(t){t.preventDefault();var r=t.target;if(!0===o){r.appendChild(n),n.textContent="Загрузка...";var i=new FormData(r),a={};i.forEach((function(e,t){a[t]=e})),e.forEach((function(e){e.value=""})),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(a).then((function(e){if(200!==e.status)throw new Error("Status network not 200");n.textContent="Спасибо! Мы скоро с вами свяжемся!",document.querySelector(".feedback").value="отправлено",setTimeout((function(){document.querySelector(".feedback").value="отправить",n.textContent=""}),5e3)})).catch((function(e){n.textContent="Что-то пошло не так...",console.error(e),document.querySelector(".feedback").value="отправляется",setTimeout((function(){document.querySelector(".feedback").value="отправить",n.textContent=""}),5e3)})),o=!1}}))}(),function(){var t,n=document.querySelector(".accordeon").querySelectorAll(".element");(t=document.createElement("style")).textContent="\n      .accordeon .element.active .element-content {\n        display: block !important;\n      }\n      .accordeon .element-content {\n        display: none !important;\n      }\n    ",document.head.appendChild(t);var o,r=e(n);try{for(r.s();!(o=r.n()).done;)o.value.addEventListener("click",(function(){if(this.classList.contains("active"))this.classList.remove("active");else{var t,o=e(n);try{for(o.s();!(t=o.n()).done;)t.value.classList.remove("active")}catch(e){o.e(e)}finally{o.f()}this.classList.add("active")}}))}catch(e){r.e(e)}finally{r.f()}}(),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",o=document.querySelectorAll(e);function r(e){var n=e.keyCode,o=t,r=o.replace(/\D/g,""),i=this.value.replace(/\D/g,""),a=0,l=o.replace(/[_\d]/g,(function(e){return a<i.length?i.charAt(a++)||r.charAt(a):e}));-1!==(a=l.indexOf("_"))&&(l=l.slice(0,a));var c=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"===e.type&&this.value.length<5&&(this.value="")}var i,a=n(o);try{for(a.s();!(i=a.n()).done;){var l=i.value;l.addEventListener("input",r),l.addEventListener("focus",r),l.addEventListener("blur",r)}}catch(e){a.e(e)}finally{a.f()}}(".tel"),function(){var e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),n=document.querySelectorAll("a")[15],o=document.querySelector(".modal-close>img");n.addEventListener("click",(function(){e.style.display="block",t.style.display="block"})),o.addEventListener("click",(function(){e.style.display="none",t.style.display="none",document.querySelectorAll("input").forEach((function(e){"text"!==e.type&&"tel"!==e.type||(e.value="")}))})),t.addEventListener("click",(function(){e.style.display="none",t.style.display="none"}))}()})();