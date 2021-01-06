import "../js/script.js";
import "../vendor/fonts/fonts.css";
import "./main-page.css";
import { mainApiConfig, newsApiConfig } from "../js/constants/Config/Config.js";

import MainApi from "../js/api/MainApi.js";
import NewsApi from "../js/api/NewsApi.js";
import NewsCardList from "../js/components/NewsCardList.js";
import NewsCard from "../js/components/NewsCard.js";

(function () {
  const mainApi = new MainApi(mainApiConfig.url);

  const results = document.querySelector(".results");
  const searchForm = document.querySelector(".banner__content__form");
  const searchBtn = document.querySelector(".banner__content__form_btn");
  const showMoreBtn = document.querySelector(".results__button");
  const errorApi = document.querySelector(".api-error");

  let resultCards = [];
  let resultsApi = [];
  let keywords = [];
  let keyWord = "";

  const news = new NewsCardList(document.querySelector(".results__news"));
  news.showMore(showMoreBtn, results);

  searchForm.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      searchForm.querySelector("button").setAttribute("disabled", "disabled");
      e.target.closest("div").querySelector(".error-message").textContent =
        "Миниммум 2 символа";
    } else {
      e.target.closest("div").querySelector(".error-message").textContent = "";
      searchForm.querySelector("button").removeAttribute("disabled");
      keyWord = e.target.value;
    }
  });

  searchBtn.addEventListener("click", (e) => {
    keywords.push(keyWord);
    newsApiConfig.options.keyword = `q=${keyWord}`;

    const newsApi = new NewsApi(newsApiConfig.url, newsApiConfig.options);
    const newsCard = new NewsCard();

    newsApi
      .getNews()
      .then((res) => {
        resultsApi = res;
        results.classList.remove("hidden");
        news.renderResults(res);
      })
      .then(() => {
        document.querySelectorAll(".results__news__card")
        .forEach((card) => {
          card.addEventListener("click", (e) => {
            if (e.target.closest("svg").classList.contains("wishlist-ico")) {

              const title = e.target
                .closest(".results__news__card")
                .querySelector(".results__news__card__content_title")
                .textContent;

              resultsApi.forEach((card) => {
                if (card.title === title) {
                  mainApi
                    .createArticle(card, keywords[keywords.length - 1])
                    .then((res) => {
                      e.target
                        .closest(".results__news__card")
                        .setAttribute("id", res.data._id);
                    })
                    .catch((e) => console.log("Произошла ошибка", e));
                  newsCard.renderIcon(e.target);
                }
              });
            } else if (
              e.target.closest("svg").classList.contains("wishlist-ico_saved")
            ) {
              const idCard = e.target
                .closest(".results__news__card")
                .getAttribute("id");
              mainApi.removeArticle(idCard);
              newsCard.renderIcon(e.target);
            }
          });
        });
      })
      .catch((e) => errorApi.insertAdjacentHTML("beforeend", e))
      .finally(() => {
        news.showMore(showMoreBtn);
      });
  });
  showMoreBtn.addEventListener("click", () => {
    news.showMoreNews();
    const newsCard = new NewsCard();

    document.querySelectorAll(".results__news__card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("svg").classList.contains("wishlist-ico")) {
          const title = e.target
            .closest(".results__news__card")
            .querySelector(".results__news__card__content_title").textContent;
          resultsApi.forEach((card) => {
            if (card.title === title) {
              mainApi
                .createArticle(card, keywords[keywords.length - 1])
                .then((res) => {
                  e.target
                    .closest(".results__news__card")
                    .setAttribute("id", res.data._id);
                })
                .catch((e) => console.log("Произошла ошибка", e));
              newsCard.renderIcon(e.target);
            }
          });
        } else if (
          e.target.closest("svg").classList.contains("wishlist-ico_saved")
        ) {
          const idCard = e.target
            .closest(".results__news__card")
            .getAttribute("id");
          mainApi.removeArticle(idCard);
          newsCard.renderIcon(e.target);
        }
      });
    });
  });
})();
