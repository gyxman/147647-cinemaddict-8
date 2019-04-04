import Chart from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as _ from 'lodash';
import Component from './component';

class Statistic extends Component {
  constructor(films) {
    super();

    this._data = films;
    this._statisticChart = null;
    this._onShowStatistic = null;
    this._watchedFilms = 0;
    this._totalDuration = 0;
    this._topGenge = ``;

    this._onShowStatisticButtonClick = this._onShowStatisticButtonClick.bind(this);
    this._onUpdateStatistic = this._onUpdateStatistic.bind(this);
  }

  _onShowStatisticButtonClick() {
    if (typeof this._onShowStatistic === `function`) {
      this._onShowStatistic();
    }
  }

  _onUpdateStatistic() {
    this._statisticChart.destroy();
    this.createCharts();
  }

  _partialUpdate() {
    this._watchedFilms = (this._data.filter((it) => it.isWatched)).length;
    const duration = this._data.map((it) => it.duration);
    this._totalDuration = duration.reduce((it, currentValue) => it + currentValue);
    const genres = this._data.map((it) => it.genre);
    const uniqueGenres = _.countBy(genres);
    this._topGenge = Object.keys(uniqueGenres).reduce((a, b) => uniqueGenres[a] > uniqueGenres[b] ? a : b);
  }

  _getGenreData() {
    const data = {};
    const genres = this._data.map((it) => it.genre);
    const uniqueGenres = _.countBy(genres);

    data.labels = Object.entries(uniqueGenres).map((it) => it[0]);
    data.value = Object.values(uniqueGenres);

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

  set onShowStatistic(fn) {
    this._onShowStatistic = fn;
  }

  get template() {
    return `
      <div>
        <p class="statistic__rank">Your rank <span class="statistic__rank-label">Sci-Fighter</span></p>
    
        <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters visually-hidden">
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
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">You watched</h4>
            <p class="statistic__item-text">${this._watchedFilms} <span class="statistic__item-description">movies</span></p>
          </li>
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">Total duration</h4>
            <p class="statistic__item-text">${Math.floor(this._totalDuration / 60)} <span class="statistic__item-description">h</span> ${this._totalDuration - (Math.floor(this._totalDuration / 60) * 60)} <span class="statistic__item-description">m</span></p>
          </li>
          <li class="statistic__text-item">
            <h4 class="statistic__item-title">Top genre</h4>
            <p class="statistic__item-text">${this._topGenge}</p>
          </li>
        </ul>
    
        <div class="statistic__chart-wrap">
          <canvas class="statistic__chart" width="1000"></canvas>
        </div>

      </div>`.trim();
  }

  createCharts() {
    const statisticCtx = this._element.querySelector(`.statistic__chart`);
    const statisticData = this._getGenreData();
    const BAR_HEIGHT = 50;
    statisticCtx.height = BAR_HEIGHT * statisticData.labels.length;

    this._statisticChart = new Chart(statisticCtx, this._getChartSettings(statisticData.labels, statisticData.value));
  }

  createListeners() {}

  removeListeners() {}
}

export default Statistic;
