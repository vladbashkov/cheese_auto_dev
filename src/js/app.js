const bodyUA = document.querySelector('.body-ua');
const bodyRU = document.querySelector('.body-ru');

import * as flsFunctions from "./modules/functions.js";
import toggle from "./modules/burgerMenu.js";
import servicesList from "./modules/servicesList.js";
import serviceListRu from "./modules/servicesList-ru.js";
import slider from "./modules/gallerySlider.js";
import toTopButton from "./modules/toTopButton.js";
import PopUp from "./modules/popUp.js";
import popUpForm from "./modules/popUpForm.js";

flsFunctions.isWebp();
toggle();

if(bodyUA) {
    servicesList();
}

if(bodyRU) {
    serviceListRu();
}

slider();
toTopButton();
document.addEventListener('DOMContentLoaded', PopUp);
popUpForm();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/