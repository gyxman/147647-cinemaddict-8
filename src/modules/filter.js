import Component from './component.js';

class Filter extends Component {
  constructor(data) {
    super();

    this._name = data.name;
    this._link = data.link;

    this._onFilter = null;
    this._onFilterClick = this._onFilterClick.bind(this);
  }

  _onFilterClick() {
    if (typeof this._onFilter === `function`) {
      this._onFilter();
    }
  }

  get template() {
    return `
      <a href="#${this._link}" class="main-navigation__item ${this._link === `stats` ? `main-navigation__item--additional` : ``}">
        ${this._name} <span class="main-navigation__item-count"></span>
      </a>`.trim();
  }

  set onFilter(fn) {
    this._onFilter = fn;
  }

  createListeners() {
    this._element.addEventListener(`click`, this._onFilterClick);
  }

  removeListeners() {
    this._element.removeEventListener(`click`, this._onFilterClick);
  }
}

export default Filter;
