import "../js/script";
import "../vendor/fonts/fonts.css";
import "./saved-news.css";

import MainApi from "../js/api/MainApi.js";
import NewsCardList from "../js/components/NewsCardList";
import {mainApiConfig, newsApiConfig} from '../js/constants/Config/Config.js';

(function () {
  const results = document.querySelector(".results");
  const resultsContainer = document.querySelector(".results__news");
  const showMoreBtn = document.querySelector(".results__button");
  const nameUser = document.querySelector(".button__auth > span").textContent;
  const titleSection = document.querySelector(".title-section__results");

  let keywords = [];

  const mainApi = new MainApi(mainApiConfig.url);
  const savedNews = new NewsCardList(resultsContainer);

  mainApi
    .getArticles()
    .then((res) => {
      savedNews.renderResults(res.data);
      savedNews.showMore(showMoreBtn, results);
      return res.data
    })
    .then((data) => {
      data.forEach((item) => {
        keywords.push(item.keyword);
      });

      // массив с кол-вом повторений ключевых слов
      const popular = keywords.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {});

      titleSection.textContent = `${nameUser}, у вас ${data.length} сохранённых статей`;
      return data;
    })
    .then(()=> {
      const trashBtns = document.querySelectorAll(".btn-wishlist");
      trashBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const idCard = e.target.closest('.results__news__card').getAttribute('id');
          mainApi.removeArticle(idCard)
          e.target.closest('.results__news__card').remove()
        });
      });

    })
    .catch((e) => console.log("Ошибка при подгрузке сохраненных новостей ", e));

  showMoreBtn.addEventListener("click", () => {
    savedNews.showMoreNews();
    // const resultCards = document.querySelectorAll(".results__news__card");
    savedNews.showMore(showMoreBtn, results);

    const trashBtns = document.querySelectorAll(".btn-wishlist");
      trashBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const idCard = e.target.closest('.results__news__card').getAttribute('id');
          console.log('idcard', idCard);
          mainApi.removeArticle(idCard)
          e.target.closest('.results__news__card').remove()
        });
      });
  });
})();
