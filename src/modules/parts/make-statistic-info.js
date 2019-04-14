import moment from "moment";

const getStatisticElement = (watchedFilmsCount, totalDuration, topGenre) => {
  return `<li class="statistic__text-item">
            <h4 class="statistic__item-title">You watched</h4>
            <p class="statistic__item-text">${watchedFilmsCount} <span class="statistic__item-description">movies</span></p>
          </li>
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">Total duration</h4>
            <p class="statistic__item-text">
              ${moment.duration(totalDuration, `minutes`).format(`hh`)} 
              <span class="statistic__item-description">h</span> 
              ${moment.duration(totalDuration, `minutes`).minutes() ? `${moment.duration(totalDuration, `minutes`).minutes()} <span class="statistic__item-description">m</span>` : ``}
            </p>
          </li>
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">Top genre</h4>
            <p class="statistic__item-text">${topGenre}</p>
          </li>`.trim();
};

export default getStatisticElement;
