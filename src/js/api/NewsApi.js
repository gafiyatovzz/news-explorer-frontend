export default class NewsApi {
  constructor(option, fetch) {
    this.fetch = fetch;
    this.option = option;
  }

  getNews() {
    this.fetch.makeFetch('url news', 'GET', this.option);
  } //возвращает список новостей на основе запроса.
}