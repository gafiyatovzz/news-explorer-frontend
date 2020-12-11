export default class NewsCardList {
  constructor(container) {
    this.container = container;
  }

  renderResults(cards) {
    console.log(cards);
    cards.forEach((card) => {
      this.container.insertAdjacentHTML(
        "beforeend",
        `
      <article class="results__news__card">
        <img
          src="${card.urlToImage}"
          alt="Превью карточки"
          class="results__news__card_img"
        />
        <div class="results__news__card__content">
          <p class="results__news__card__content_date">${card.publishedAt}</p>
          <h2 class="results__news__card__content_title">
            ${card.title}
          </h2>
          <p class="results__news__card__content_text">
            ${card.description}
          </p>
          <a href="${card.url}" class="results__news__card__content_source">${card.source.name}</a>
        </div>
      </article>
    `
      );
    });
  } //принимает массив экземпляров карточек и отрисовывает их;

  renderLoader() {

  } //отвечает за отрисовку лоудера;

  renderError(err) {

  } //принимает объект ошибки и показывает ошибку в интерфейсе;

  showMore() {

  } //отвечает за функциональность кнопки «Показать ещё»;

  addCard(card) {
    this.container.append(card);

  } //принимает экземпляр карточки и добавляет её в список.
}