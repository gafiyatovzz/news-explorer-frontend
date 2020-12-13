export const CardTemplate = (card, date) => {
  card.urlToImage
    ? (card = {
        title: card.title,
        text: card.description,
        date: card.publishedAt,
        source: card.source.name,
        link: card.url,
        image: card.urlToImage,
        ico: `<svg class="wishlist-ico" width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.38218 12.7137L1 16.9425V1L13 1V16.9425L7.61782 12.7137L7 12.2283L6.38218 12.7137Z" stroke-width="2"/>
              </svg>`,
      })
    : (card = {
        title: card.title,
        text: card.text,
        date: card.date,
        source: card.source,
        link: card.link,
        image: card.image,
        id: card._id,
        ico: `<svg class="trash-ico" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3H9V5H3V7H21V5H15V3ZM5 9V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V9H17V20H7V9H5ZM9 9L9 18H11L11 9H9ZM13 9V18H15V9H13Z" fill="#1A1B22"/>
              </svg>`,
      });

  return `
          <article class="results__news__card" id="${card.id}">
            <div class="results__news__card_top">
              <div class="results__news__card_top_buttons">
                <div class="top__buttons_container">
                  <div class="top__buttons_btn btn-wishlist">
                    ${card.ico}

                  </div>
                  <div class="top__buttons_text hidden">
                    Войдите, чтобы сохранять статьи
                  </div>
                </div>
              </div>
              <img
                src="${card.image}"
                alt="Превью карточки"
                class="results__news__card_img"
              />
            </div>
            <div class="results__news__card__content">
              <p class="results__news__card__content_date">
                ${date}
              </p>
              <h2 class="results__news__card__content_title">${card.title}</h2>
              <p class="results__news__card__content_text">
                ${card.text}
              </p>
              <a href="${card.link}" class="results__news__card__content_source"
                >${card.source}</a
              >
            </div>
          </article>
`;
};
