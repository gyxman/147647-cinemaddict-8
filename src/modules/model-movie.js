class ModelMovie {
  constructor(data) {
    this.id = data[`id`];
    this.title = data[`film_info`][`title`] || ``;
    this.alternativeTitle = data[`film_info`][`alternative_title`] || ``;
    this.description = data[`film_info`][`description`] || ``;
    this.poster = data[`film_info`][`poster`] || ``;
    this.totalRating = data[`film_info`][`total_rating`] || ``;
    this.ageRating = data[`film_info`][`age_rating`] || ``;
    this.duration = data[`film_info`][`runtime`] || ``;
    this.release = {
      date: data[`film_info`][`release`][`date`] || ``,
      country: data[`film_info`][`release`][`release_country`] || ``,
    };
    this.director = data[`film_info`][`director`] || ``;
    this.genre = data[`film_info`][`genre`] || [];
    this.writers = data[`film_info`][`writers`] || [];
    this.actors = data[`film_info`][`actors`] || [];
    this.personalRating = data[`user_details`][`personal_rating`] || ``;
    this.watchingDate = data[`user_details`][`watching_date`] || ``;
    this.isWatched = Boolean(data[`user_details`][`already_watched`]);
    this.isFavorite = Boolean(data[`user_details`][`favorite`]);
    this.isInWatchList = Boolean(data[`user_details`][`watchlist`]);
    this.comments = data[`comments`] || [];
  }

  toRAW() {
    return {
      'id': this.id,
      'film_info': {
        'title': this.title,
        'alternative_title': this.alternativeTitle,
        'description': this.description,
        'poster': this.poster,
        'total_rating': this.totalRating,
        'age_rating': this.ageRating,
        'runtime': this.duration,
        'release': this.release,
        'director': this.director,
        'genre': this.genre,
        'writers': this.writers,
        'actors': this.actors,
      },
      'user_details': {
        'personal_rating': this.personalRating,
        'watching_date': this.watchingDate,
        'already_watched': this.isWatched,
        'favorite': this.isFavorite,
        'watchlist': this.isInWatchList,
      },
      'comments': this.comments,
    };
  }

  static parseMovie(data) {
    return new ModelMovie(data);
  }

  static parseMovies(data) {
    return data.map(ModelMovie.parseMovie);
  }
}

export default ModelMovie;
