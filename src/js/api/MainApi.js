export default class MainApi {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  makeFetch(url, method = 'GET', body = undefined) {
    if (body) JSON.stringify(body);
    return fetch(`${this.baseUrl}/${url}`, {
      method,
      headers: this.headers,
      body
    })
      .then(res => res.json())
      .catch(e => {
        console.log('Message Error: ', {
          message: e.message,
          statuseCode: e.statuseCode,
        });
      });
  }

  signup() {
    return this.makeFetch('/signup', 'POST', {
      name, email, password
    })
  }

  signin() {
    return this.makeFetch('/signin', 'POST', {
      name, email
    })
  } //аутентифицирует пользователя на основе почты и пароля;

  getUserData() {
    return this.makeFetch('users/me');
  }

  getArticles() {
    return this.makeFetch('/articles');
  }

  createArticle({ keyword, title, text, date, source, link, image }) {
    return this.makeFetch('/articles', 'POST', {
      keyword, title, text, date, source, link, image
    })
  }

  removeArticle(id) {
    return this.makeFetch(`/articles/${id}`, 'DELETE');
  }
}