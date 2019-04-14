import filtersData from './data/filters.js';
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
const COUNT_OF_SHOW_MOVIES = 5;
const COUNT_OF_SHOW_RELATED_MOVIES = 2;
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

const updateProfileRating = () => {
  profileRating.textContent = getProfileRating(movies.filter((it) => it.isWatched).length);
};

const getCurrentMovies = (items) => {
  const countMovies = numberOfLoad * COUNT_OF_SHOW_MOVIES;

  if (countMovies + COUNT_OF_SHOW_MOVIES >= items.length) {
    showMoreButton.classList.add(`visually-hidden`);
  } else {
    showMoreButton.classList.remove(`visually-hidden`);
  }

  const filteredMovies = items.slice(countMovies, countMovies + COUNT_OF_SHOW_MOVIES);
  numberOfLoad++;
  return filteredMovies;
};

const getRatedRelatedMovies = (items) => {
  const sortedMovies = [...items].sort((a, b) => b.totalRating - a.totalRating);
  const filteredMovies = sortedMovies.slice(0, COUNT_OF_SHOW_RELATED_MOVIES);

  return filteredMovies;
};

const getCommentedRelatedMovies = (items) => {
  const sortedMovies = [...items].sort((a, b) => b.comments.length - a.comments.length);
  const filteredMovies = sortedMovies.slice(0, COUNT_OF_SHOW_RELATED_MOVIES);

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

  setCountFilteredMovies(filters, items);

  showMoreButton.addEventListener(`click`, () => {
    showMovies(moviesContainer, getCurrentMovies(filteredMovies));
  });
};

const setCountFilteredMovies = (filters, items) => {
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

    const updateWatchlistMovies = (component) => {
      component.blockControls();
      movie.isInWatchList = movieComponent.addToWatchList();
      movieDetailsComponent.addToWatchList();
      api.updateMovie({id: movie.id, data: movie.toRAW()})
        .then(() => {
          setCountFilteredMovies(filtersData, movies);
          component.unblockControls();
        }).catch(() => {
          component.shakeControls();
          movie.isInWatchList = movieComponent.addToWatchList();
          movieDetailsComponent.addToWatchList();
          setTimeout(() => {
            component.unshakeControls();
            component.unblockControls();
          }, 300);
        });
    };

    const updateWatchedMovies = (component) => {
      component.blockControls();
      movie.isWatched = movieComponent.markAsWatched();
      movieDetailsComponent.markAsWatched();
      api.updateMovie({id: movie.id, data: movie.toRAW()})
        .then(() => {
          setCountFilteredMovies(filtersData, movies);
          updateProfileRating();
          component.unblockControls();
        }).catch(() => {
          component.shakeControls();
          movie.isWatched = movieComponent.markAsWatched();
          movieDetailsComponent.markAsWatched();
          setTimeout(() => {
            component.unshakeControls();
            component.unblockControls();
          }, 300);
        });
    };

    const updateFavoriteListMovies = (component) => {
      component.blockControls();
      movie.isFavorite = movieComponent.addToFavoriteList();
      movieDetailsComponent.addToFavoriteList();
      api.updateMovie({id: movie.id, data: movie.toRAW()})
        .then(() => {
          setCountFilteredMovies(filtersData, movies);
          component.unblockControls();
        }).catch(() => {
          component.shakeControls();
          movie.isFavorite = movieComponent.addToFavoriteList();
          movieDetailsComponent.addToFavoriteList();
          setTimeout(() => {
            component.unshakeControls();
            component.unblockControls();
          }, 300);
        });
    };

    const updateCommentsMovieDetails = (newObject, isDelete = false) => {
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

    const updateRatingMovieDetails = (newObject) => {
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

    movieComponent.onAddToWatchList = updateWatchlistMovies;
    movieComponent.onMarkAsWatched = updateWatchedMovies;
    movieComponent.onAddToFavoriteList = updateFavoriteListMovies;
    movieDetailsComponent.onAddToWatchList = updateWatchlistMovies;
    movieDetailsComponent.onMarkAsWatched = updateWatchedMovies;
    movieDetailsComponent.onAddToFavoriteList = updateFavoriteListMovies;
    movieDetailsComponent.onComment = updateCommentsMovieDetails;
    movieDetailsComponent.onCommentDelete = updateCommentsMovieDetails;
    movieDetailsComponent.onRating = updateRatingMovieDetails;
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
    updateProfileRating();
    footerStatistic.textContent = `${movies.length}`;
    showMovies(moviesRatedContainer, getRatedRelatedMovies(movies), true, true);
    showMovies(moviesCommentedContainer, getCommentedRelatedMovies(movies), true, true);
    activeSearch(movies);

    getFiltersTemplate(filtersData, movies);
    getCurrentPage(filtersData, movies);

  }).catch(() => {
    moviesContainer.textContent = `Something went wrong while loading your tasks. Check your connection or try again later`;
  });
