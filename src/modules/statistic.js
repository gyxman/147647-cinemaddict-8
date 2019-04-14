import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as _ from 'lodash';
import Component from './component';
import moment from "moment";
import "moment-duration-format";
import getStatisticElement from "./parts/make-statistic-info";

const lastWeekThisDay = moment().startOf(`day`).subtract(1, `week`);
const lastMonthThisDay = moment().startOf(`day`).subtract(1, `month`);
const lastYearThisDay = moment().startOf(`day`).subtract(1, `year`);

class Statistic extends Component {
  constructor(films) {
    super();

    this._data = films;
    this._statisticChart = null;
    this._watchedFilms = [];
    this._watchedFilmsCount = 0;
    this._totalDuration = 0;
    this._topGenre = ``;
    this._uniqueGenres = null;

    this._onUpdateStatistic = this._onUpdateStatistic.bind(this);
    this._onStatisticPeriodLabelClick = this._onStatisticPeriodLabelClick.bind(this);
  }

  _onUpdateStatistic() {
    this._statisticChart.destroy();
    this.createCharts();
  }

  _onStatisticPeriodLabelClick() {
    if (typeof this._onClick === `function`) {
      this._onClick();
    }
  }

  _getFilteredData(data, periodName) {
    switch (periodName) {
      case `all-time`:
        return data;

      case `today`:
        return data.filter((it) => moment(it.watchingDate).format(`D MMMM YYYY`) === moment().format(`D MMMM YYYY`));

      case `week`:
        return data.filter((it) => it.watchingDate > lastWeekThisDay);

      case `month`:
        return data.filter((it) => it.watchingDate > lastMonthThisDay);

      case `year`:
        return data.filter((it) => it.watchingDate > lastYearThisDay);
    }

    return null;
  }

  _partialUpdate(periodName) {
    this._watchedFilms = (this._data.filter((it) => it.isWatched));
    const filteredData = this._getFilteredData(this._watchedFilms, periodName);
    this._watchedFilmsCount = filteredData.length;
    const duration = filteredData.map((it) => it.duration);
    this._totalDuration = duration.reduce((it, currentValue) => it + currentValue);
    const genres = filteredData.map((it) => {
      if (!it.genre.length) {
        it.genre = [`Без жанра`];
      }

      return it.genre;
    });
    const uniqueGenres = _.countBy([].concat(...genres));
    this._uniqueGenres = Object.entries(uniqueGenres);
    this._uniqueGenres.sort((a, b) => b[1] > a[1] ? 1 : -1);
    this._topGenre = Object.keys(uniqueGenres).reduce((a, b) => uniqueGenres[a] > uniqueGenres[b] ? a : b);

    const statisticInfoContainer = this._element.querySelector(`.statistic__text-list`);
    statisticInfoContainer.innerHTML = ``;
    statisticInfoContainer.innerHTML = getStatisticElement(this._watchedFilmsCount, this._totalDuration, this._topGenre);
  }

  _getGenreData() {
    const data = {};

    data.labels = this._uniqueGenres.map((it) => it[0]);
    data.value = this._uniqueGenres.map((it) => it[1]);

    return data;
  }

  _getChartSettings(labelsArray, dataArray) {
    return {
      plugins: [ChartDataLabels],
      type: `horizontalBar`,
      data: {
        labels: labelsArray,
        datasets: [{
          data: dataArray,
          backgroundColor: `#ffe800`,
          hoverBackgroundColor: `#ffe800`,
          anchor: `start`
        }]
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 20
            },
            color: `#ffffff`,
            anchor: `start`,
            align: `start`,
            offset: 40,
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: `#ffffff`,
              padding: 100,
              fontSize: 20
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
            barThickness: 24
          }],
          xAxes: [{
            ticks: {
              display: false,
              beginAtZero: true
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    };
  }

  _getActivePeriod() {
    return this._element.querySelector(`.statistic__filters-input:checked`).value;
  }

  get template() {
    return `
      <div>
        <p class="statistic__rank">Your rank <span class="statistic__rank-label">Sci-Fighter</span></p>
    
        <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
          <p class="statistic__filters-description">Show stats:</p>
    
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
          <label for="statistic-all-time" class="statistic__filters-label">All time</label>
    
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
          <label for="statistic-today" class="statistic__filters-label">Today</label>
    
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
          <label for="statistic-week" class="statistic__filters-label">Week</label>
    
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
          <label for="statistic-month" class="statistic__filters-label">Month</label>
    
          <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
          <label for="statistic-year" class="statistic__filters-label">Year</label>
        </form>
    
        <ul class="statistic__text-list">
            
        </ul>
    
        <div class="statistic__chart-wrap">
          <canvas class="statistic__chart" width="1000"></canvas>
        </div>

      </div>`.trim();
  }

  destroyCharts() {
    this._statisticChart.destroy();
  }

  createCharts() {
    this._partialUpdate(this._getActivePeriod());
    const statisticCtx = this._element.querySelector(`.statistic__chart`);
    const statisticData = this._getGenreData();
    const BAR_HEIGHT = 50;
    statisticCtx.height = BAR_HEIGHT * statisticData.labels.length;

    this._statisticChart = new Chart(statisticCtx, this._getChartSettings(statisticData.labels, statisticData.value));
  }

  createListeners() {
    this._element.querySelectorAll(`.statistic__filters-input`).forEach((it) => {
      it.addEventListener(`change`, this._onStatisticPeriodLabelClick);
    });
  }

  removeListeners() {
    this._element.querySelectorAll(`.statistic__filters-input`).forEach((it) => {
      it.removeEventListener(`change`, this._onStatisticPeriodLabelClick);
    });
  }
}

export default Statistic;
