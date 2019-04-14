import Component from './component';
import getCommentsElement from './parts/make-movie-comment';
import getRatingElement from './parts/make-movie-rating';
import moment from "moment";

class MovieDetails extends Component {
  constructor(data) {
    super();

    this._title = data.title;
    this._alternativeTitle = data.alternativeTitle;
    this._poster = data.poster;
    this._description = data.description;
    this._personalRating = data.personalRating;
    this._totalRating = data.totalRating;
    this._ageRating = data.ageRating;
    this._duration = data.duration;
    this._release = {
      date: data.release.date,
      country: data.release.country,
    };
    this._director = data.director;
    this._genre = data.genre;
    this._writers = data.writers;
    this._actors = data.actors;
    this._comments = data.comments;
    this._isInWatchList = data.isInWatchList;
    this._isWatched = data.isWatched;
    this._isFavorite = data.isFavorite;

    this._onComment = null;
    this._onCommentDelete = null;

    this._onEscKeydown = this._onEscKeydown.bind(this);
    this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
    this._onCommentTextareaKeydown = this._onCommentTextareaKeydown.bind(this);
    this._onCommentRemoveButtonClick = this._onCommentRemoveButtonClick.bind(this);
    this._onRatingButtonClick = this._onRatingButtonClick.bind(this);
    this._onAddToWatchListButtonClick = this._onAddToWatchListButtonClick.bind(this);
    this._onMarkAsWatchedButtonClick = this._onMarkAsWatchedButtonClick.bind(this);
    this._onAddToFavoriteListButtonClick = this._onAddToFavoriteListButtonClick.bind(this);
  }

  _processForm(formData) {
    const entry = {
      personalRating: ``,
      comment: {
        comment: ``,
        author: `User`,
        emotion: ``,
        date: Date.now(),
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

  _onEscKeydown(evt) {
    if (evt.keyCode === 27) {
      if (typeof this._onClick === `function`) {
        this._onClick();
      }
    }
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

  _onCommentRemoveButtonClick() {
    if (typeof this._onCommentDelete === `function`) {
      const newData = this._getPopupData();
      this._onCommentDelete(newData, true);
    }
  }

  _onRatingButtonClick() {
    if (typeof this._onRating === `function`) {
      const newData = this._getPopupData();
      this._onRating(newData);
    }
  }

  _onAddToWatchListButtonClick() {
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

  _onAddToFavoriteListButtonClick() {
    if (typeof this._onAddToFavoriteList === `function`) {
      this._onAddToFavoriteList(this);
    }
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
              <img class="film-details__poster-img" src="${this._poster}" alt="${this._title}">
      
              <p class="film-details__age">${this._ageRating}+</p>
            </div>
      
            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${this._title}</h3>
                  <p class="film-details__title-original">Original: ${this._alternativeTitle}</p>
                </div>
      
                <div class="film-details__rating">
                  <p class="film-details__total-rating">${this._totalRating}</p>
                  <p class="film-details__user-rating">Your rate ${this._personalRating}</p>
                </div>
              </div>
      
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${this._director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${this._writers}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${this._actors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${moment(this._release.date).format(`DD MMMM YYYY`)} (USA)</td>
                  </tr>
                  <tr class="film-details__row">
                    <td class="film-details__term">Runtime</td>
                    <td class="film-details__cell">${this._duration} min</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${this._release.country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    ${this._genre.map((it) => `<span class="film-details__genre">${it}</span>`).join(``)}
                </tr>
              </table>
      
              <p class="film-details__film-description">
                ${this._description}
              </p>
            </div>
          </div>
      
          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._isInWatchList ? `checked` : ``}>
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._isWatched ? `checked` : ``}>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
      
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._isFavorite ? `checked` : ``}>
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
              <span class="film-details__watched-status film-details__watched-status--active"></span>
              <button class="film-details__watched-reset visually-hidden" type="button">undo</button>
            </div>
      
            <div class="film-details__user-score">
              <div class="film-details__user-rating-poster">
                <img src="images/posters/blackmail.jpg" alt="film-poster" class="film-details__user-rating-img">
              </div>
      
              <section class="film-details__user-rating-inner">
                <h3 class="film-details__user-rating-title">${this._title}</h3>
      
                <p class="film-details__user-rating-feelings">How you feel it?</p>
      
                <div class="film-details__user-rating-score">
                  ${getRatingElement(this._personalRating)}
                </div>
              </section>
            </div>
          </section>
        </form>
      </section>`.trim();
  }

  set onComment(fn) {
    this._onComment = fn;
  }

  set onCommentDelete(fn) {
    this._onCommentDelete = fn;
  }

  set onRating(fn) {
    this._onRating = fn;
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

  updateRating(data) {
    this._personalRating = data.personalRating;

    this._element.querySelector(`.film-details__user-rating`).textContent = `Your rate ${this._personalRating}`;
    const ratingRadio = this._element.querySelectorAll(`.film-details__user-rating-input`);
    ratingRadio.forEach((it) => {
      if (it.value === this._personalRating) {
        it.checked = true;
      } else {
        it.checked = false;
      }
    });
  }

  blockRating() {
    const ratingRadio = this._element.querySelectorAll(`.film-details__user-rating-input`);
    ratingRadio.forEach((it) => {
      it.disabled = true;
    });
  }

  unblockRating() {
    const ratingRadio = this._element.querySelectorAll(`.film-details__user-rating-input`);
    ratingRadio.forEach((it) => {
      it.disabled = false;
    });
  }

  shakeRating() {
    this._element.querySelector(`.film-details__user-rating-input:checked`).classList.add(`film-details__user-rating-input_error`);
    this._element.querySelector(`.film-details__user-score`).classList.add(`shake`);
  }

  unshakeRating() {
    this._element.querySelector(`.film-details__user-rating-input_error`).classList.remove(`film-details__user-rating-input_error`);
    this._element.querySelector(`.film-details__user-score`).classList.remove(`shake`);
  }

  updateComments(data, isDelete = false) {
    this._comments = data.comments;

    const commentStatus = this._element.querySelector(`.film-details__watched-status`);
    const resetButton = this._element.querySelector(`.film-details__watched-reset`);
    const commentInput = this._element.querySelector(`.film-details__comment-input`);
    const commentsContainer = this._element.querySelector(`.film-details__comments-list`);
    const commentsCount = this._element.querySelector(`.film-details__comments-count`);

    if (isDelete) {
      commentStatus.textContent = `Comment deleted`;
      resetButton.classList.add(`visually-hidden`);
    } else {
      commentStatus.textContent = `Comment added`;
      resetButton.classList.remove(`visually-hidden`);
    }
    commentInput.value = ``;
    commentsContainer.innerHTML = getCommentsElement(this._comments);
    commentsCount.innerHTML = this._comments.length;
  }

  blockComments() {
    const commentTextarea = this._element.querySelector(`.film-details__comment-input`);
    commentTextarea.disabled = true;
  }

  unblockComments() {
    const commentTextarea = this._element.querySelector(`.film-details__comment-input`);
    commentTextarea.disabled = false;
  }

  shakeComments() {
    this._element.querySelector(`.film-details__comment-input`).classList.add(`film-details__comment-input_error`);
    this._element.querySelector(`.film-details__comments-wrap`).classList.add(`shake`);
  }

  unshakeComments() {
    this._element.querySelector(`.film-details__comment-input`).classList.remove(`film-details__comment-input_error`);
    this._element.querySelector(`.film-details__comments-wrap`).classList.remove(`shake`);
  }

  blockControls() {
    const controlButtons = this._element.querySelectorAll(`.film-details__control-input`);
    controlButtons.forEach((it) => {
      it.disabled = true;
    });
  }

  unblockControls() {
    const controlButtons = this._element.querySelectorAll(`.film-details__control-input`);
    controlButtons.forEach((it) => {
      it.disabled = false;
    });
  }

  shakeControls() {
    this._element.querySelector(`.film-details__controls`).classList.add(`shake`);
  }

  unshakeControls() {
    this._element.querySelector(`.film-details__controls`).classList.remove(`shake`);
  }

  createListeners() {
    document.addEventListener(`keydown`, this._onEscKeydown);
    this._element.querySelector(`.film-details__close-btn`)
      .addEventListener(`click`, this._onCloseButtonClick);
    this._element.querySelector(`.film-details__comment-input`)
      .addEventListener(`keydown`, this._onCommentTextareaKeydown);
    this._element.querySelector(`.film-details__watched-reset`)
      .addEventListener(`click`, this._onCommentRemoveButtonClick);
    this._element.querySelectorAll(`.film-details__user-rating-input`).forEach((it)=> {
      it.addEventListener(`change`, this._onRatingButtonClick);
    });
    this._element.querySelector(`#watchlist`)
      .addEventListener(`change`, this._onAddToWatchListButtonClick);
    this._element.querySelector(`#watched`)
      .addEventListener(`click`, this._onMarkAsWatchedButtonClick);
    this._element.querySelector(`#favorite`)
      .addEventListener(`click`, this._onAddToFavoriteListButtonClick);
  }

  removeListeners() {
    document.removeEventListener(`keydown`, this._onEscKeydown);
    this._element.querySelector(`.film-details__close-btn`)
      .removeEventListener(`click`, this._onCloseButtonClick);
    this._element.querySelector(`.film-details__comment-input`)
      .removeEventListener(`keydown`, this._onCommentTextareaKeydown);
    this._element.querySelector(`.film-details__watched-reset`)
      .removeEventListener(`click`, this._onCommentRemoveButtonClick);
    this._element.querySelectorAll(`.film-details__user-rating-input`).forEach((it)=> {
      it.removeEventListener(`change`, this._onRatingButtonClick);
    });
  }

  static createMapper(target) {
    return {
      'comment-emoji': (value) => {
        target.comment.emotion = value;
      },
      'comment': (value) => {
        target.comment.comment = value;
      },
      'score': (value) => {
        target.personalRating = value;
      }
    };
  }
}

export default MovieDetails;
