import {getFormatedDuration, getCommentsString} from '../modules/util.js';

export default (movie) => {
  return `
    <article class="film-card">
      <h3 class="film-card__title">${movie.title}</h3>
      <p class="film-card__rating">${movie.rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${movie.year}</span>
        <span class="film-card__duration">${getFormatedDuration(movie.duration)}</span>
        <span class="film-card__genre">${movie.genre}</span>
      </p>
      <img src="./images/posters/${movie.poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${movie.description}</p>
      <button class="film-card__comments">${getCommentsString(movie.commentsCount)}</button>

      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
    </article>
  `;
};
