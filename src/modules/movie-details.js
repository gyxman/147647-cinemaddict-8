import {getFormatedDuration} from './util';
import {Component} from './component';
import getCommentsElement from './parts/make-movie-comment';
import {reactions} from '../data/reactions';
import moment from "moment";

export class MovieDetails extends Component {
  constructor(data) {
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

    this._onComment = null;

    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
    this._onCommentTextareaKeydown = this._onCommentTextareaKeydown.bind(this);
    this._onRatingButtonClick = this._onRatingButtonClick.bind(this);
  }

  _processForm(formData) {
    const entry = {
      rating: ``,
      comment: {
        text: ``,
        author: `Me`,
        reaction: ``,
        date: new Date(),
      },
    };

    const movieDetailsMapper = MovieDetails.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      if (movieDetailsMapper[property]) {
        movieDetailsMapper[property](value);
      }
    }

    return entry;
  }

  _getPopupData() {
    const formData = new FormData(this._element.querySelector(`.film-details__inner`));
    const newData = this._processForm(formData);

    return newData;
  }

  _onCloseButtonClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  _onCommentTextareaKeydown(evt) {
    if (evt.ctrlKey && evt.keyCode === 13) {
      if (typeof this._onComment === `function`) {
        const newData = this._getPopupData();
        this._onComment(newData);
      }
    }
  }

  _onRatingButtonClick() {
    if (typeof this._onRating === `function`) {
      const newData = this._getPopupData();
      this._onRating(newData);
    }
  }

  set onComment(fn) {
    this._onComment = fn;
  }

  set onRating(fn) {
    this._onRating = fn;
  }

  get template() {
    return `
      <section class="film-details">
        <form class="film-details__inner" action="" method="get">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./images/posters/${this._poster}" alt="${this._title}">
      
              <p class="film-details__age">18+</p>
            </div>
      
            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${this._title}</h3>
                  <p class="film-details__title-original">Original: Невероятная семейка</p>
                </div>
      
                <div class="film-details__rating">
                  <p class="film-details__total-rating">${this._rating}</p>
                  <p class="film-details__user-rating">Your rate 8</p>
                </div>
              </div>
      
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">Brad Bird</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">Brad Bird</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">Samuel L. Jackson, Catherine Keener, Sophia Bush</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${moment(this._date).format(`D MMMM YYYY`)} (USA)</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <!-- TODO здесь нужно выводить в минутах через moment.js -->
                    <td class="film-details__cell">${getFormatedDuration(this._duration)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">USA</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    <span class="film-details__genre">Animation</span>
                    <span class="film-details__genre">Action</span>
                    <span class="film-details__genre">Adventure</span></td>
                </tr>
              </table>
      
              <p class="film-details__film-description">
                ${this._description}
              </p>
            </div>
          </div>
      
          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" checked>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
      
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments.length}</span></h3>
      
            <ul class="film-details__comments-list">
              ${getCommentsElement(this._comments)}
            </ul>
      
            <div class="film-details__new-comment">
              <div>
                <label for="add-emoji" class="film-details__add-emoji-label">😐</label>
                <input type="checkbox" class="film-details__add-emoji visually-hidden" id="add-emoji">
      
                <div class="film-details__emoji-list">
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                  <label class="film-details__emoji-label" for="emoji-sleeping">😴</label>
      
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-neutral-face" value="neutral-face" checked>
                  <label class="film-details__emoji-label" for="emoji-neutral-face">😐</label>
      
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-grinning" value="grinning">
                  <label class="film-details__emoji-label" for="emoji-grinning">😀</label>
                </div>
              </div>
              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="← Select reaction, add comment here" name="comment"></textarea>
              </label>
            </div>
          </section>
      
          <section class="film-details__user-rating-wrap">
            <div class="film-details__user-rating-controls">
              <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
              <button class="film-details__watched-reset" type="button">undo</button>
            </div>
      
            <div class="film-details__user-score">
              <div class="film-details__user-rating-poster">
                <img src="images/posters/blackmail.jpg" alt="film-poster" class="film-details__user-rating-img">
              </div>
      
              <section class="film-details__user-rating-inner">
                <h3 class="film-details__user-rating-title">${this._title}</h3>
      
                <p class="film-details__user-rating-feelings">How you feel it?</p>
      
                <div class="film-details__user-rating-score">
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="1" id="rating-1">
                  <label class="film-details__user-rating-label" for="rating-1">1</label>
      
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="2" id="rating-2">
                  <label class="film-details__user-rating-label" for="rating-2">2</label>
      
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="3" id="rating-3">
                  <label class="film-details__user-rating-label" for="rating-3">3</label>
      
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="4" id="rating-4">
                  <label class="film-details__user-rating-label" for="rating-4">4</label>
      
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="5" id="rating-5" checked>
                  <label class="film-details__user-rating-label" for="rating-5">5</label>
      
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="6" id="rating-6">
                  <label class="film-details__user-rating-label" for="rating-6">6</label>
      
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="7" id="rating-7">
                  <label class="film-details__user-rating-label" for="rating-7">7</label>
      
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="8" id="rating-8">
                  <label class="film-details__user-rating-label" for="rating-8">8</label>
      
                  <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="9" id="rating-9">
                  <label class="film-details__user-rating-label" for="rating-9">9</label>
      
                </div>
              </section>
            </div>
          </section>
        </form>
      </section>`.trim();
  }

  createListeners() {
    this._element.querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, this._onCloseButtonClick);
    this._element.querySelector(`.film-details__comment-input`)
      .addEventListener(`keydown`, this._onCommentTextareaKeydown);
    this._element.querySelectorAll(`.film-details__user-rating-input`).forEach((it)=> {
      it.addEventListener(`change`, this._onRatingButtonClick);
    });
  }

  removeListeners() {
    this._element.querySelector(`.film-details__close-btn`)
      .removeEventListener(`click`, this._onCloseButtonClick);
    this._element.querySelector(`.film-details__comment-input`)
      .removeEventListener(`keydown`, this._onCommentTextareaKeydown);
    this._element.querySelectorAll(`.film-details__user-rating-input`).forEach((it)=> {
      it.removeEventListener(`change`, this._onRatingButtonClick);
    });
  }

  static createMapper(target) {
    return {
      'comment-emoji': (value) => {
        target.comment.reaction = reactions[value];
      },
      'comment': (value) => {
        target.comment.text = value;
      },
      'score': (value) => {
        target.rating = value;
      }
    };
  }
}
