export default (caption, link, amount = 0, isChecked = false) => {
  return `
    <a href="#${link}" class="main-navigation__item ${isChecked ? `main-navigation__item--active` : ``}">
        ${caption} ${amount ? `<span class="main-navigation__item-count">${amount}</span>` : ``}
    </a>
  `;
};
