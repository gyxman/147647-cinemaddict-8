import {getRandomNumber} from './modules/util.js';
import getFilterElement from './modules/make-filter.js';
import getCardElement from './modules/make-movie.js';
import getRelatedCardElement from './modules/make-related-movie.js';
import {filters} from './data/filters.js';
import {movies} from './data/movies.js';

const filtersContainer = document.querySelector(`.main-navigation`);
const cardsContainer = document.querySelector(`.films-list--main .films-list__container`);
const cardsRatedContainer = document.querySelector(`.films-list--extra-rated .films-list__container`);
const cardsCommentedContainer = document.querySelector(`.films-list--extra-commented .films-list__container`);

const getFilterTemplate = ()=> {
  let fragment = ``;

  filters.forEach((item, index) => {
    fragment += getFilterElement(item.caption, item.link, index === 0 ? `` : getRandomNumber(), index === 0 ? true : ``);
  });

  filtersContainer.innerHTML = fragment;
};

const getCardsTemplate = (container, count)=> {
  let fragment = ``;

  for (let i = 0; i < count; i++) {
    fragment += getCardElement(movies[getRandomNumber(0, movies.length - 1)]);
  }

  cardsContainer.innerHTML = fragment;
};

const getRelatedCardsTemplate = (container, count)=> {
  let fragment = ``;

  for (let i = 0; i < count; i++) {
    fragment += getRelatedCardElement(movies[getRandomNumber(0, movies.length - 1)]);
  }

  container.innerHTML = fragment;
};

const setActiveFilter = (element) => {
  const parent = element.target.parentElement.nodeName === `NAV` ? element.target : element.target.parentElement;

  parent.parentElement.querySelector(`.main-navigation__item--active`).classList.remove(`main-navigation__item--active`);
  parent.classList.add(`main-navigation__item--active`);
};

const handleFilterClick = (event) => {
  if (event.target.tagName === `A` || event.target.parentNode.nodeName === `A`) {
    getCardsTemplate(cardsContainer, getRandomNumber());
    setActiveFilter(event);
  }
};

getFilterTemplate();
getCardsTemplate(cardsContainer, 7);
getRelatedCardsTemplate(cardsRatedContainer, 2);
getRelatedCardsTemplate(cardsCommentedContainer, 2);

filtersContainer.addEventListener(`click`, handleFilterClick);
