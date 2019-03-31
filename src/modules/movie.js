import {getCommentsString, getFormatedDuration} from './util';
import {Component} from './component';
import moment from "moment";

export class Movie extends Component {
  constructor(data, isRelated) {
    super();
    // this._id = data.id;
    this._title = data.title;
    this._poster = data.poster;
    this._description = data.description;
    this._rating = data.rating;
    this._date = data.date;
    this._duration = data.duration;
    this._genre = data.genre;
    this._comments = data.comments;
    this._isRelated = isRelated;

    this._onCommentsButtonClick = this._onCommentsButtonClick.bind(this);
  }

  _onCommentsButtonClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  get template() {
    return `
      <article class="film-card ${this._isRelated && `film-card--no-controls`}">
          <h3 class="film-card__title">${this._title}</h3>
        <p class="film-card__rating">${this._rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${moment(this._date).format(`YYYY`)}</span>
          <!-- TODO здесь нужно выводить в часах и минутах через moment.js -->
            <span class="film-card__duration">${getFormatedDuration(this._duration)}</span>
          <span class="film-card__genre">${this._genre}</span>
        </p>
        <img src="./images/posters/${this._poster}" alt="" class="film-card__poster">
        ${!this._isRelated && `<p class="film-card__description">${this._description}</p>`}
        <button class="film-card__comments">${getCommentsString(this._comments.length)}</button>
  
        ${!this._isRelated && `<form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
        </form>`}
      </article>`.trim();
  }

  updateCommentCount() {
    this._element.querySelector(`.film-card__comments`).textContent = `${this._comments.length} comments`;
  }

  update(data) {
    this._rating = data.rating;
    this._comments = data.comments;
  }

  createListeners() {
    this._element.querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._onCommentsButtonClick);
  }

  removeListeners() {
    this._element.querySelector(`.film-card__comments`)
      .removeEventListener(`click`, this._onCommentsButtonClick);
  }
}
