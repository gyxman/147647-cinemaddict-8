import {filters as filtersData} from './data/filters.js';
import {movies as moviesData} from './data/movies.js';
import Movie from './modules/movie.js';
import MovieDetails from "./modules/movie-details";
import Filter from "./modules/filter";
import {getHashUrl} from "./modules/util";
import Statistic from "./modules/statistic";

const pageContainer = document.querySelector(`body`);
const filtersContainer = document.querySelector(`.main-navigation`);
const moviesWrapper = document.querySelector(`.films`);
const moviesContainer = document.querySelector(`.films-list--main .films-list__container`);
const moviesRatedContainer = document.querySelector(`.films-list--extra-rated .films-list__container`);
const moviesCommentedContainer = document.querySelector(`.films-list--extra-commented .films-list__container`);
const statisticContainer = document.querySelector(`.statistic`);

const getCurrentFilter = () => {
  const filters = filtersContainer.querySelectorAll(`.main-navigation__item`);
  filters.forEach((it) => {
    if (it.hash === getHashUrl()) {
      it.classList.add(`main-navigation__item--active`);
    } else {
      it.classList.remove(`main-navigation__item--active`);
    }
  });
};

const filterMovies = (movies, filterName) => {
  switch (filterName) {
    case `All movies`:
      return movies;

    case `Watchlist`:
      return movies.filter((it) => it.isInWatchList);

    case `History`:
      return movies.filter((it) => it.isWatched);
  }

  return null;
};

const getFiltersTemplate = (filters, movies) => {
  filtersContainer.innerHTML = ``;

  filters.forEach((filter) => {
    const filterComponent = new Filter(filter);

    filterComponent.onFilter = () => {
      if (filterComponent.element.hash === `#stats`) {
        showStatistic();
      } else {
        const filteredMovies = filterMovies(movies, filter.name);
        moviesContainer.innerHTML = ``;
        // TODO разобраться почему меняется со второго клика
        getCurrentFilter();
        getMoviesTemplate(moviesContainer, filteredMovies, filteredMovies.length, false);
      }
    };

    filtersContainer.appendChild(filterComponent.render());
  });
};

const getMoviesTemplate = (container, movies, count, isRelated)=> {
  container.innerHTML = ``;
  moviesWrapper.classList.remove(`visually-hidden`);
  statisticContainer.classList.add(`visually-hidden`);

  for (let i = 0; i < count; i++) {
    const movieComponent = new Movie(movies[i], isRelated);
    const movieDetailsComponent = new MovieDetails(movies[i]);
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

const showStatistic = ()=> {
  statisticContainer.innerHTML = ``;
  moviesWrapper.classList.add(`visually-hidden`);
  statisticContainer.classList.remove(`visually-hidden`);

  const statisticComponent = new Statistic(moviesData);
  statisticComponent._partialUpdate();
  statisticContainer.appendChild(statisticComponent.render());
  statisticComponent.createCharts();
};

getCurrentFilter();
getFiltersTemplate(filtersData, moviesData);
getMoviesTemplate(moviesContainer, moviesData, 7, false);
getMoviesTemplate(moviesRatedContainer, moviesData, 2, true);
getMoviesTemplate(moviesCommentedContainer, moviesData, 2, true);
