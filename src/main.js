import {getRandomNumber} from './modules/util.js';
import getFilterElement from './modules/make-filter.js';
import getCardElement from './modules/make-card.js';
import getRelatedCardElement from './modules/make-related-card.js';

const filters = [
  {
    caption: `All movies`,
    link: `all`
  },
  {
    caption: `Watchlist`,
    link: `watchlist`
  },
  {
    caption: `History`,
    link: `history`
  },
  {
    caption: `Favorites`,
    link: `favorites`
  },
  {
    caption: `Stats`,
    link: `stats`
  }
];

const filtersContainer = document.querySelector(`.main-navigation`);
const cardsRatedContainer = document.querySelector(`.films-list--extra-rated .films-list__container`);
const cardsCommentedContainer = document.querySelector(`.films-list--extra-commented .films-list__container`);

const getFilterTemplate = ()=> {
  let fragment = ``;

  filters.forEach((item, index) => {
    fragment += getFilterElement(item.caption, item.link, index === 0 ? `` : getRandomNumber(), index === 0 ? true : ``);
  });

  filtersContainer.innerHTML = fragment;
};

const getCardsTemplate = (count)=> {
  const cardsContainer = document.querySelector(`.films-list--main .films-list__container`);
  let fragment = ``;

  for (let i = 0; i < count; i++) {
    fragment += getCardElement();
  }

  cardsContainer.innerHTML = fragment;
};

const getRelatedCardsTemplate = (container, count)=> {
  let fragment = ``;

  for (let i = 0; i < count; i++) {
    fragment += getRelatedCardElement();
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
    getCardsTemplate(getRandomNumber());
    setActiveFilter(event);
  }
};

getFilterTemplate();
getCardsTemplate(7);
getRelatedCardsTemplate(cardsRatedContainer, 2);
getRelatedCardsTemplate(cardsCommentedContainer, 2);

filtersContainer.addEventListener(`click`, handleFilterClick);
