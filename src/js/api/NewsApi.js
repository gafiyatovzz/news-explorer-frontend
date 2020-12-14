export default class NewsApi {
  constructor(url, option) {
    this.url = url;
    this.option = option;
    this.str = this.url + this._concatOption();
  }

  _concatOption() {
    return Object.values(this.option).join("&");
  }

  getNews() {
    return fetch(this.str, {
      "Content-Type": "application/json",
    })
      .then((res) => {
        if (!res.ok) {
          throw res
        }
        return res.json();
      })
      .then((data) => {
        return data.articles;
      })
  } //возвращает список новостей на основе запроса.
}
