export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  renderResults(res) {

  } //принимает массив экземпляров карточек и отрисовывает их;

  renderLoader() {} //отвечает за отрисовку лоудера;

  renderError(err) {

  } //принимает объект ошибки и показывает ошибку в интерфейсе;

  showMore() {} //отвечает за функциональность кнопки «Показать ещё»;

  addCard(card) {
    this.container.append(card);

  } //принимает экземпляр карточки и добавляет её в список.
}