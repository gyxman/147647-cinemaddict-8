import Component from './component.js';

class Search extends Component {
  constructor() {
    super();

    this._onSearch = null;
    this._onSearchKeyDown = this._onSearchKeyDown.bind(this);
  }

  _onSearchKeyDown() {
    if (typeof this._onSearch === `function`) {
      this._onSearch();
    }
  }

  get template() {
    return `
      <div>
        <input type="text" name="search" class="search__field" placeholder="Search">
        <button type="submit" class="visually-hidden">Search</button>
      </div>`.trim();
  }

  set onSearch(fn) {
    this._onSearch = fn;
  }

  createListeners() {
    this._element.querySelector(`.search__field`)
      .addEventListener(`keyup`, this._onSearchKeyDown);
  }

  removeListeners() {
    this._element.querySelector(`.search__field`)
      .addEventListener(`keyup`, this._onSearchKeyDown);
  }
}

export default Search;
