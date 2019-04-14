import filtersData from './data/filters.js';
// import {movies as moviesData} from './data/movies.js';
import Movie from './modules/movie.js';
import MovieDetails from "./modules/movie-details";
import Filter from "./modules/filter";
import {getHashUrl} from "./modules/util";
import Statistic from "./modules/statistic";
import API from "./modules/api";
import Search from "./modules/search";
import * as _ from 'lodash';

const pageContainer = document.querySelector(`body`);
const filtersContainer = document.querySelector(`.main-navigation`);
const moviesWrapper = document.querySelector(`.films`);
const moviesContainer = document.querySelector(`.films-list--main .films-list__container`);
const moviesRatedContainer = document.querySelector(`.films-list--extra-rated .films-list__container`);
const moviesCommentedContainer = document.querySelector(`.films-list--extra-commented .films-list__container`);
const showMoreButton = document.querySelector(`.films-list__show-more`);
const statisticContainer = document.querySelector(`.statistic`);
const searchContainer = document.querySelector(`.header__search`);
const footerStatistic = document.querySelector(`.footer__statistics-count`);
const profileRating = document.querySelector(`.profile__rating`);
const AUTHORIZATION = `Basic lT2LMSQGFTKYBS72vZ5`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle/`;
const api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});
const COUNTOFSHOWMOVIES = 5;
const COUNTOFSHOWRELATEDMOVIES = 2;
let numberOfLoad = 0;
let movies = [];

const getProfileRating = (count) => {
  if (count > 20) {
    return `movie buff`;
  } else if (count > 10 && count <= 20) {
    return `fan`;
  } else {
    return `novice`;
  }
};

const getCurrentMovies = (items) => {
  const countMovies = numberOfLoad * COUNTOFSHOWMOVIES;

  if (countMovies + COUNTOFSHOWMOVIES >= items.length) {
    showMoreButton.classList.add(`visually-hidden`);
  } else {
    showMoreButton.classList.remove(`visually-hidden`);
  }

  const filteredMovies = items.slice(countMovies, countMovies + COUNTOFSHOWMOVIES);
  numberOfLoad++;
  return filteredMovies;
};

const getRelatedRatedMovies = (items) => {
  const tempItems = [...items];
  const sortedMovies = tempItems.sort((a, b) => b.totalRating - a.totalRating);
  const filteredMovies = sortedMovies.slice(0, COUNTOFSHOWRELATEDMOVIES);

  return filteredMovies;
};

const getRelatedCommentedMovies = (items) => {
  const tempItems = [...items];
  const sortedMovies = tempItems.sort((a, b) => b.comments.length - a.comments.length);
  const filteredMovies = sortedMovies.slice(0, COUNTOFSHOWRELATEDMOVIES);

  return filteredMovies;
};

const getCurrentFilter = (hash) => {
  const filtersElements = filtersContainer.querySelectorAll(`.main-navigation__item`);
  filtersElements.forEach((it) => {
    if (it.hash === hash) {
      it.classList.add(`main-navigation__item--active`);
    } else {
      it.classList.remove(`main-navigation__item--active`);
    }
  });
};

const getCurrentPage = (filters, items) => {
  const hash = getHashUrl();
  const filterIndex = filters.findIndex((it) => it.link === hash.slice(1));
  const name = filters[filterIndex].name;
  const filteredMovies = filterMovies(items, name);
  getCurrentFilter(hash);
  if (hash === `#stats`) {
    showStatistic();
  } else {
    showMovies(moviesContainer, getCurrentMovies(filteredMovies), false, true);
  }
};

const filterMovies = (items, filterName) => {
  switch (filterName) {
    case `All movies`:
      return items;

    case `Watchlist`:
      return items.filter((it) => it.isInWatchList);

    case `History`:
      return items.filter((it) => it.isWatched);

    case `Favorites`:
      return items.filter((it) => it.isFavorite);
  }

  return null;
};

const getFiltersTemplate = (filters, items) => {
  filtersContainer.innerHTML = ``;
  let filteredMovies = items;

  filters.forEach((filter) => {
    const filterComponent = new Filter(filter);

    filterComponent.onFilter = () => {
      searchContainer.querySelector(`.search__field`).value = ``;
      filtersContainer.querySelectorAll(`.main-navigation__item`).forEach((it) => it.classList.remove(`main-navigation__item--active`));
      filterComponent.element.classList.add(`main-navigation__item--active`);

      if (filterComponent.element.hash === `#stats`) {
        showStatistic();
      } else {
        filteredMovies = filterMovies(items, filter.name);
        numberOfLoad = 0;
        showMovies(moviesContainer, getCurrentMovies(filteredMovies), false, true);
      }
    };

    filtersContainer.appendChild(filterComponent.render());
  });

  getFiltersCountMovies(filters, items);

  showMoreButton.addEventListener(`click`, () => {
    showMovies(moviesContainer, getCurrentMovies(filteredMovies));
  });
};

const getFiltersCountMovies = (filters, items) => {
  const filtersElements = document.querySelectorAll(`.main-navigation__item`);
  for (let filter of filtersElements) {
    const hash = filter.hash;
    if (hash === `#all` || hash === `#stats`) {
      filter.querySelector(`.main-navigation__item-count`).classList.add(`visually-hidden`);
      continue;
    }
    const filterIndex = filters.findIndex((it) => it.link === hash.slice(1));
    const name = filters[filterIndex].name;
    const count = filterMovies(items, name).length;
    filter.querySelector(`.main-navigation__item-count`).textContent = count;
  }
};

const showMovies = (container, items, isRelated = false, isClear = false) => {
  if (isClear) {
    container.innerHTML = ``;
  }

  moviesWrapper.classList.remove(`visually-hidden`);
  statisticContainer.classList.add(`visually-hidden`);

  for (const movie of items) {
    const movieComponent = new Movie(movie, isRelated);
    const movieDetailsComponent = new MovieDetails(movie);
    container.appendChild(movieComponent.render());

    movieComponent.onClick = () => {
      movieDetailsComponent.render();
      pageContainer.appendChild(movieDetailsComponent.element);
    };

    movieComponent.onAddToWatchList = () => {
      movieComponent.addToWatchList();
    };

    movieComponent.onMarkAsWatched = () => {
      movieComponent.markAsWatched();
    };

    movieComponent.onAddToFavoriteList = () => {
      movieComponent.addToFavoriteList();
    };

    movieDetailsComponent.onClick = () => {
      pageContainer.removeChild(movieDetailsComponent.element);
      movieDetailsComponent.unrender();
    };

    const updateMovieComments = (newObject, isDelete = false) => {
      // TODO проверить необходимость использования переменных old
      const oldComments = movie.comments;

      if (isDelete) {
        movie.comments.pop();
      } else {
        if (newObject.comment.comment.length) {
          movie.comments.push(newObject.comment);
        }
      }

      movieDetailsComponent.blockComments();

      api.updateMovie({id: movie.id, data: movie.toRAW()})
        .then((newMovie) => {
          movieDetailsComponent.updateComments(newMovie, isDelete);
          movieComponent.updateCommentCount(newMovie);
          movieDetailsComponent.unblockComments();
        }).catch(() => {
          movieDetailsComponent.shakeComments();
          setTimeout(() => {
            movie.comment = oldComments;
            movieDetailsComponent.unshakeComments();
            movieDetailsComponent.unblockComments();
          }, 300);
        });
    };

    const updateMovieRating = (newObject) => {
      const oldPersonalRating = movie.personalRating;
      movie.personalRating = newObject.personalRating;

      movieDetailsComponent.blockRating();

      api.updateMovie({id: movie.id, data: movie.toRAW()})
        .then((newMovie) => {
          movieDetailsComponent.updateRating(newMovie);
          movieDetailsComponent.unblockRating();
        }).catch(() => {
          movieDetailsComponent.shakeRating();
          setTimeout(() => {
            movie.personalRating = oldPersonalRating;
            movieDetailsComponent.updateRating(movie);
            movieDetailsComponent.unshakeRating();
            movieDetailsComponent.unblockRating();
          }, 300);
        });
    };

    movieDetailsComponent.onComment = updateMovieComments;
    movieDetailsComponent.onCommentDelete = updateMovieComments;
    movieDetailsComponent.onRating = updateMovieRating;
  }
};

const showStatistic = ()=> {
  statisticContainer.innerHTML = ``;
  moviesWrapper.classList.add(`visually-hidden`);
  statisticContainer.classList.remove(`visually-hidden`);

  const statisticComponent = new Statistic(movies);
  statisticComponent.onClick = () => {
    statisticComponent.destroyCharts();
    statisticComponent.createCharts();
  };
  statisticContainer.appendChild(statisticComponent.render());
  statisticComponent.createCharts();
};

const filterSearchMovies = (items, searchPhrase) => {
  return items.filter((it) => _.includes(it.title, searchPhrase));
};

const activeSearch = (items) => {
  const searchComponent = new Search();
  searchContainer.innerHTML = ``;
  searchContainer.appendChild(searchComponent.render());
  searchComponent.onSearch = () => {
    const searchPhrase = searchComponent.element.querySelector(`.search__field`).value;
    const filteredMovies = filterSearchMovies(items, searchPhrase);
    numberOfLoad = 0;
    showMovies(moviesContainer, getCurrentMovies(filteredMovies), false, true);
  };
};

moviesContainer.textContent = `Loading movies...`;

api.getMovies()
  .then((items) => {
    movies = items;
    profileRating.textContent = getProfileRating(movies.length);
    footerStatistic.textContent = movies.length;
    // showMovies(moviesContainer, getCurrentMovies(movies), false, true);
    showMovies(moviesRatedContainer, getRelatedRatedMovies(movies), true, true);
    showMovies(moviesCommentedContainer, getRelatedCommentedMovies(movies), true, true);
    activeSearch(movies);

    getFiltersTemplate(filtersData, movies);
    getCurrentPage(filtersData, movies);

  }).catch(() => {
    moviesContainer.textContent = `Something went wrong while loading your tasks. Check your connection or try again later`;
  });
