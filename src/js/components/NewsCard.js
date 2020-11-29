export default class NewsCard {
  constructor(container, api, card) {
    this.container = container;
    this.api = api;
    this.card = card;
  }

  createCard() {
    this.container.insertAdjacentHTML('beforeend', `
      <article class="results__news__card">
        <img
          src="${card.img}"
          alt="Превью карточки"
          class="results__news__card_img"
        />
        <div class="results__news__card__content">
          <p class="results__news__card__content_date">${card.date}</p>
          <h2 class="results__news__card__content_title">
            ${card.title}
          </h2>
          <p class="results__news__card__content_text">
            ${card.text}
          </p>
          <a href="${card.link}" class="results__news__card__content_source">${card.owner}</a>
        </div>
      </article>
    `)
  }

  renderIcon() { } //отвечает за отрисовку иконки карточки. У этой иконки три состояния: иконка незалогиненного пользователя, активная иконка залогиненного, неактивная иконка залогиненного.
}

