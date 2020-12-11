export const CardTemplate = (card) => {
 return  `
          <article class="results__news__card">
            <div class="results__news__card_top">
              <div class="results__news__card_top_buttons">
                <div class="top__buttons_container">
                  <div class="top__buttons_btn btn-wishlist">
                    <!--<img
                      src="./assets/icons/save.svg"
                      alt=""
                    /> -->
                  </div>
                  <div class="top__buttons_text">
                    Войдите, чтобы сохранять статьи
                  </div>
                </div>
              </div>
              <img
                src="${card.urlToImage}"
                alt="Превью карточки"
                class="results__news__card_img"
              />
            </div>
            <div class="results__news__card__content">
              <p class="results__news__card__content_date">
                ${card.publishedAt}
              </p>
              <h2 class="results__news__card__content_title">${card.title}</h2>
              <p class="results__news__card__content_text">
                ${card.description}
              </p>
              <a href="${card.url}" class="results__news__card__content_source"
                >${card.source.name}</a
              >
            </div>
          </article>
`
}