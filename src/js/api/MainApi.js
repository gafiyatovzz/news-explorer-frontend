export default class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.headers = {
      "content-type": "application/json",
      authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmNiYjY4ODI1ZGE4MmQ4Zjk4YWRiYjkiLCJpYXQiOjE2MDcxODYxNzYsImV4cCI6MTYwNzc5MDk3Nn0.m82mYbWLTfbH-RiuBeZ9tsm2Ib5TvTKY7UfEsDIus48",
    };
    console.log("base ", this.baseUrl);
  }

  signup(data) {
    //this.makeFetch('/signup', 'POST', data)
    fetch(`${this.baseUrl}/signup`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((d) => localStorage.setItem("data", JSON.stringify(d)))
      .catch((e) => localStorage.setItem("error", e));
  }

  signin(data) {
    fetch(`${this.baseUrl}/signin`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        if (d.token) {
          localStorage.setItem("isLogged", true);
          localStorage.setItem("token", d.token);
          this.getUserData();
          console.log("Ты авторизовался");
        }
      })
      .catch((err) => {
        console.log(`Произошла ошибка авторизации - ${err}`);
      });
  } //аутентифицирует пользователя на основе почты и пароля;

  getUserData() {
    fetch(`${this.baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) =>
        Object.values(data).forEach((el) =>
          localStorage.setItem("user", JSON.stringify(el))
        )
      )
      .catch((err) => console.log(err));
  }

  getArticles() {
    return fetch(`${this.baseUrl}/articles`,{
      headers: {
        "Content-Type": "application/json",
        'Authorization': localStorage.getItem("token"),
      },
    })
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log('Ошибка при получении новостей', e));
  }

  createArticle(article, keyword) {
    console.log(article.publishedAt);
    return fetch(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': localStorage.getItem("token"),
      },
      body: JSON.stringify({
        keyword: keyword,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage,
      }),
    })
    .then(res => res.json())
    .then(d => {
      return d;
    })
    .catch(e => console.log('Ошибка при сохранении карточки', e));
  }

  logout() {
    // localStorage.clear();
  }

  removeArticle(id) {
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': localStorage.getItem("token"),
      },
      // body: JSON.stringify({
      //   _id: id,
      // })
    })
    .then(res => console.log(res))
    .then(d => console.log(d))
    .catch(e => console.log('Ошибка при удалении карточки', e));
  }
}
