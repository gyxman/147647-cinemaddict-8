import {getRandomNumber} from './modules/util.js';
import getFilterElement from './modules/make-filter.js';
import {filters} from './data/filters.js';
import {movies} from './data/movies.js';
import {Movie} from './modules/movie.js';
import {MovieDetails} from "./modules/movie-details";

const pageContainer = document.querySelector(`body`);
const filtersContainer = document.querySelector(`.main-navigation`);
const moviesContainer = document.querySelector(`.films-list--main .films-list__container`);
const moviesRatedContainer = document.querySelector(`.films-list--extra-rated .films-list__container`);
const moviesCommentedContainer = document.querySelector(`.films-list--extra-commented .films-list__container`);

const getFilterTemplate = ()=> {
  let fragment = ``;

  filters.forEach((item, index) => {
    fragment += getFilterElement(item.caption, item.link, index === 0 ? `` : getRandomNumber(), index === 0 ? true : ``);
  });

  filtersContainer.innerHTML = fragment;
};

const getMoviesTemplate = (container, count, isRelated)=> {
  container.innerHTML = ``;

  for (let i = 0; i < count; i++) {
    const movieComponent = new Movie(movies[i], isRelated);
    const movieDetailsComponent = new MovieDetails(movies[i]);
    container.appendChild(movieComponent.render());

    movieComponent.onClick = () => {
      movieDetailsComponent.render();
      pageContainer.appendChild(movieDetailsComponent.element);
    };

    movieDetailsComponent.onClick = () => {
      pageContainer.removeChild(movieDetailsComponent.element);
      movieDetailsComponent.unrender();
    };
    const updateMovie = (newObject) => {
      movies[i].rating = newObject.rating;
      movies[i].comments.push(newObject.comment);

      movieComponent.update(movies[i]);
      movieComponent.updateCommentCount();
      pageContainer.removeChild(movieDetailsComponent.element);
      movieDetailsComponent.unrender();
    };

    movieDetailsComponent.onComment = updateMovie;
    movieDetailsComponent.onRating = updateMovie;
  }
};

const setActiveFilter = (element) => {
  const parent = element.target.parentElement.nodeName === `NAV` ? element.target : element.target.parentElement;

  parent.parentElement.querySelector(`.main-navigation__item--active`).classList.remove(`main-navigation__item--active`);
  parent.classList.add(`main-navigation__item--active`);
};

const handleFilterClick = (event) => {
  if (event.target.tagName === `A` || event.target.parentNode.nodeName === `A`) {
    getMoviesTemplate(moviesContainer, getRandomNumber(0, movies.length - 1));
    setActiveFilter(event);
  }
};

getFilterTemplate();
getMoviesTemplate(moviesContainer, 7, false);
getMoviesTemplate(moviesRatedContainer, 2, true);
getMoviesTemplate(moviesCommentedContainer, 2, true);

filtersContainer.addEventListener(`click`, handleFilterClick);
