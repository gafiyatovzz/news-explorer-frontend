import { CardTemplate } from "../constants/Templates/CardTemlate.js";

export default class NewsCardList {
  constructor(container) {
    this.container = container;
    this.results = [];
  }

  renderResults(cards) {
    this._clearResults();
    this.results = cards;
    cards.forEach((card, i) => {
      if (i < 3) {
        this.container.insertAdjacentHTML("beforeend", CardTemplate(card));
      }
    });
    console.log("Длина контейнера ", this.container.children);

  } //принимает массив экземпляров карточек и отрисовывает их;

  renderLoader() {} //отвечает за отрисовку лоудера;

  renderError(err) {} //принимает объект ошибки и показывает ошибку в интерфейсе;

  _clearResults() {
    while (this.container.firstChild) {
      this.container.firstChild.remove();
    }
  }

  showMoreNews() {
    let qty = this.container.childElementCount + 3;

    this.renderResults(this.results);
    this.results.forEach((card, i) => {
      if (i > this.container.childElementCount && i < qty) {
        this.container.insertAdjacentHTML("beforeend", CardTemplate(card));
      }
    });
  }

  showMore(btn) {
    if (this.container.hasChildNodes()) {
      btn.classList.remove("hidden")
    } else if (this.container.childElementCount === 100){
      btn.classList.add("hidden")
    }
  } //отвечает за функциональность кнопки «Показать ещё»;

  addCard(card) {
    this.container.append(card);
  } //принимает экземпляр карточки и добавляет её в список.
}
