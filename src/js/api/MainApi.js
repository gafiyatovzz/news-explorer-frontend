export default class MainApi {
  constructor(baseUrl, header) {
    this.baseUrl = baseUrl;
    this.header = {
      'content-type': 'application/json'
    };
  }

  makeFetch(url, method = 'GET', body = undefined) {
    body ? JSON.stringify(body) :
      fetch(`${this.baseUrl}/${url}`, {
        method,
        headers: this.header.authorization = token,
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

  signin(email, password) {
    return this.makeFetch('/signin', 'POST', { email, password })
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