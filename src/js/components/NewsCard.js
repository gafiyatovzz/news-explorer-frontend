export default class NewsCard {
  constructor(container, api, cards) {
    this.container = container;
    this.api = api;
    this.cards = cards;
  }

  renderIcon() {} //отвечает за отрисовку иконки карточки. У этой иконки три состояния: иконка незалогиненного пользователя, активная иконка залогиненного, неактивная иконка залогиненного.
}
