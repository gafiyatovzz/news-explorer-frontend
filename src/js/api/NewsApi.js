export default class NewsApi {
  constructor(option) {
    this.fetch = fetch;
    this.option = option;
  }

  getNews() {
    this.fetch('url news', 'GET', this.option);
  } //возвращает список новостей на основе запроса.
}