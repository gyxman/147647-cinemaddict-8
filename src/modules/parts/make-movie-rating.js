const getRatingElement = (personalRating, index) => {
  const currentIndex = ++index;

  return `<input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="${currentIndex}" id="rating-${currentIndex}" ${+personalRating === currentIndex ? `checked` : ``}>
          <label class="film-details__user-rating-label" for="rating-${currentIndex}">${currentIndex}</label>`.trim();
};

export default (personalRating, count = 9) => {
  let ratingElement = ``;

  for (let i = 0; i < count; i++) {
    ratingElement += getRatingElement(personalRating, i);
  }

  return ratingElement;
};
