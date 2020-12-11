export default class NewsApi {
  constructor(url, option) {
    this.url = url;
    this.option = option;
    this.str = this.url + this._concatOption();
  }

  _concatOption() {
    return Object.values(this.option).join('&');
  }

  getNews() {
    return fetch(this.str,
      {
        "Content-Type": "application/json",
      })
      .then(res => res.json())
      .then(data => data.articles)
      .catch(err => console.log(`Ошибка при запросе к ${this.url} :`, err));
  } //возвращает список новостей на основе запроса.
}