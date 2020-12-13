import { CardTemplate } from "../constants/Templates/CardTemlate.js";

export default class NewsCardList {
  constructor(container) {
    this.container = container;
    this.results = [];
  }

  dateForamated(published) {
    const date = new Date(published)
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return date.toLocaleDateString("ru-RU", options);
  }

  renderResults(cards) {
    this._clearResults();
    this.results = cards;
    cards.forEach((card, i) => {
      if (i < 3) {
        this.container.insertAdjacentHTML("beforeend", CardTemplate(card, this.dateForamated(card.publishedAt)));
      }
    });
  } //принимает массив экземпляров карточек и отрисовывает их;

  renderLoader() {} //отвечает за отрисовку лоудера;

  renderError(err) {} //принимает объект ошибки и показывает ошибку в интерфейсе;

  _clearResults() {
    if (this.container.firstChild) {
      while (this.container.firstChild) {
        this.container.firstChild.remove();
      }
    }
  }

  showMoreNews() {
    let qty = this.container.childElementCount + 2;

    // this.renderResults(this.results);
    this.results.forEach((card, i) => {
      if (i >= this.container.childElementCount && i <= qty) {
        this.container.insertAdjacentHTML("beforeend", CardTemplate(card, this.dateForamated(card.publishedAt)));
      }
    });
  }

  showMore(btn, cont = '') {
    if (this.container.hasChildNodes()) {
      btn.classList.remove("hidden");
      console.log('LOL', this.results.length);
      console.log('LOOL', this.container.childElementCount);
      cont ? cont.classList.remove('hidden') : console.log(123);;
    } else if (this.container.childElementCount === this.results.length) {
      btn.classList.add("hidden");
    }
  } //отвечает за функциональность кнопки «Показать ещё»;

  addCard(card) {
    this.container.append(card);
  } //принимает экземпляр карточки и добавляет её в список.
}
