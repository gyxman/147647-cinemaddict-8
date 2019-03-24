import {getCommentsString, getFormatedDuration, createElement} from './util';

export class Movie {
  constructor(data) {
    // this._id = data.id;
    this._title = data.title;
    this._poster = data.poster;
    this._description = data.description;
    this._rating = data.rating;
    this._year = data.year;
    this._duration = data.duration;
    this._genre = data.genre;
    this._commentsCount = data.commentsCount;

    this._onClick = null;
    this._onCommentsButtonClick = this._onCommentsButtonClick.bind(this);
  }

  _onCommentsButtonClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  get element() {
    return this._element;
  }

  get template() {
    return `
      <article class="film-card">
        <h3 class="film-card__title">${this._title}</h3>
        <p class="film-card__rating">${this._rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${this._year}</span>
          <span class="film-card__duration">${getFormatedDuration(this._duration)}</span>
          <span class="film-card__genre">${this._genre}</span>
        </p>
        <img src="./images/posters/${this._poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${this._description}</p>
        <button class="film-card__comments">${getCommentsString(this._commentsCount)}</button>
  
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
        </form>
      </article>`.trim();
  }

  set onClick(fn) {
    this._onClick = fn;
  }

  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

  unrender() {
    this.unbind();
    this._element = null;
  }

  bind() {
    this._element.querySelector(`.film-card__comments`)
      .addEventListener(`click`, this._onCommentsButtonClick);
  }

  unbind() {
    this._element.querySelector(`.film-card__comments`)
      .removeEventListener(`click`, this._onCommentsButtonClick);
  }
}
