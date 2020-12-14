import "../js/script";
import "../vendor/fonts/fonts.css";
import "./saved-news.css";

import MainApi from "../js/api/MainApi.js";
import NewsCardList from "../js/components/NewsCardList";

(function () {
  const results = document.querySelector(".results");
  const resultsContainer = document.querySelector(".results__news");
  const showMoreBtn = document.querySelector(".results__button");
  const nameUser = document.querySelector(".button__auth > span").textContent;
  const titleSection = document.querySelector(".title-section__results");
  const mainApiUrl = "https://api.gz-news-explorer.students.nomoreparties.co";

  let keywords = [];

  const mainApi = new MainApi(mainApiUrl);
  const savedNews = new NewsCardList(resultsContainer);

  mainApi
    .getArticles()
    .then((res) => {
      res.data.forEach((item) => {
        keywords.push(item.keyword);
      });

      // массив с кол-вом повторений ключевых слов
      const popular = keywords.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {});

      titleSection.textContent = `${nameUser}, у вас ${res.data.length} сохранённых статей`;
      return res.data;
    })
    .then((res) => {
      savedNews.renderResults(res);
      savedNews.showMore(showMoreBtn, results);
    })
    .then(()=> {
      const trashBtns = document.querySelectorAll(".btn-wishlist");
      trashBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const idCard = e.target.closest('.results__news__card').getAttribute('id');
          console.log('idcard', idCard);
          mainApi.removeArticle(idCard)
          e.target.closest('.results__news__card').remove()
        });
      });

    })
    .catch((e) => console.log("Ошибка при подгрузке сохраненных новостей ", e));

  showMoreBtn.addEventListener("click", () => {
    savedNews.showMoreNews();
    resultCards = document.querySelectorAll(".results__news__card");
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
