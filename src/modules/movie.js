import {getCommentsString, getDescriptionString, getFormatedDuration} from './util';
import Component from './component';
import moment from "moment";

class Movie extends Component {
  constructor(data, isRelated) {
    super();
    this._title = data.title;
    this._poster = data.poster;
    this._description = data.description;
    this._totalRating = data.totalRating;
    this._date = data.date;
    this._duration = data.duration;
    this._comments = data.comments;
    this._isInWatchList = data.isInWatchList;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;

    this._isRelated = isRelated;

    this._onAddToWatchList = null;
    this._onMarkAsWatched = null;

    this._onCommentsButtonClick = this._onCommentsButtonClick.bind(this);
    this._onAddToWatchListButtonClick = this._onAddToWatchListButtonClick.bind(this);
    this._onMarkAsWatchedButtonClick = this._onMarkAsWatchedButtonClick.bind(this);
    this._onAddToFavoriteListButtonClick = this._onAddToFavoriteListButtonClick.bind(this);
  }

  _onCommentsButtonClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  _onAddToWatchListButtonClick(evt) {
    evt.preventDefault();
    if (typeof this._onAddToWatchList === `function`) {
      this._onAddToWatchList(this);
    }
  }

  _onMarkAsWatchedButtonClick(evt) {
    evt.preventDefault();
    if (typeof this._onMarkAsWatched === `function`) {
      this._onMarkAsWatched(this);
    }
  }

  _onAddToFavoriteListButtonClick(evt) {
    evt.preventDefault();
    if (typeof this._onAddToFavoriteList === `function`) {
      this._onAddToFavoriteList(this);
    }
  }

  get template() {
    return `
      <article class="film-card ${this._isRelated ? `film-card--no-controls` : ``}">
          <h3 class="film-card__title">${this._title}</h3>
        <p class="film-card__rating">${this._totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${moment(this._date).format(`YYYY`)}</span>
          <span class="film-card__duration">${getFormatedDuration(this._duration)}</span>
        </p>
        <img src="${this._poster}" alt="" class="film-card__poster">
        ${!this._isRelated ? `<p class="film-card__description">${getDescriptionString(this._description)}</p>` : ``}
        <button class="film-card__comments">${getCommentsString(this._comments.length)}</button>
  
        ${!this._isRelated ? `<form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
        </form>` : ``}
      </article>`.trim();
  }

  set onAddToWatchList(fn) {
    this._onAddToWatchList = fn;
  }

  set onMarkAsWatched(fn) {
    this._onMarkAsWatched = fn;
  }

  set onAddToFavoriteList(fn) {
    this._onAddToFavoriteList = fn;
  }

  addToWatchList() {
    this._isInWatchList = !this._isInWatchList;
    return this._isInWatchList;
  }

  markAsWatched() {
    this._isWatched = !this._isWatched;
    return this._isWatched;
  }

  addToFavoriteList() {
    this._isFavorite = !this._isFavorite;
    return this._isFavorite;
  }

  blockControls() {
    const controlButtons = this._element.querySelectorAll(`.film-card__controls-item`);
    controlButtons.forEach((it) => {
      it.disabled = true;
    });
  }

  unblockControls() {
    const controlButtons = this._element.querySelectorAll(`.film-card__controls-item`);
    controlButtons.forEach((it) => {
      it.disabled = false;
    });
  }

  shakeControls() {
    this._element.querySelector(`.film-card__controls`).classList.add(`shake`);
  }

  unshakeControls() {
    this._element.querySelector(`.film-card__controls`).classList.remove(`shake`);
  }

  updateCommentCount() {
    this._element.querySelector(`.film-card__comments`).textContent = `${this._comments.length} comments`;
  }

  createListeners() {
    this._element.querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._onCommentsButtonClick);
    if (!this._isRelated) {
      this._element.querySelector(`.film-card__controls-item--add-to-watchlist`)
        .addEventListener(`click`, this._onAddToWatchListButtonClick);
      this._element.querySelector(`.film-card__controls-item--mark-as-watched`)
        .addEventListener(`click`, this._onMarkAsWatchedButtonClick);
      this._element.querySelector(`.film-card__controls-item--favorite`)
        .addEventListener(`click`, this._onAddToFavoriteListButtonClick);
    }
  }

  removeListeners() {
    this._element.querySelector(`.film-card__comments`)
      .removeEventListener(`click`, this._onCommentsButtonClick);
    if (!this._isRelated) {
      this._element.querySelector(`.film-card__controls-item--add-to-watchlist`)
        .removeEventListener(`click`, this._onAddToWatchListButtonClick);
      this._element.querySelector(`.film-card__controls-item--mark-as-watched`)
        .removeEventListener(`click`, this._onMarkAsWatchedButtonClick);
      this._element.querySelector(`.film-card__controls-item--favorite`)
        .removeEventListener(`click`, this._onAddToFavoriteListButtonClick);
    }
  }
}

export default Movie;
