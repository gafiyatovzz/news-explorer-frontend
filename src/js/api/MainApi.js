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

  makeFetch(url, method = "GET", body = undefined) {
    localStorage.setItem("errors", body);
    // body
    // // ? (body = JSON.stringify(body))
    // :
   fetch(`${this.baseUrl}${url}`, {
          method,
          headers: {
            "content-type": "application/json",
          },
          body,
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("token", JSON.stringify(data)))
          .catch((e) => {
            console.log("Message Error: ", {
              message: e.message,
              statuseCode: e.statuseCode,
            });
          });
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
      .then(d => localStorage.setItem("data", JSON.stringify(d)))
      .catch((e) => localStorage.setItem("error", e));
  }

  signin(data) {
    fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => localStorage.setItem("response", JSON.stringify(res)))
      .then((d) => {
        localStorage.setItem("datatoken", JSON.stringify(d));
      })
      .catch((err) => {
        console.log(`Произошла ошибка авторизации - ${err}`);
      });
  } //аутентифицирует пользователя на основе почты и пароля;

  getUserData() {
    return this.makeFetch("users/me");
  }

  getArticles() {
    return this.makeFetch("/articles");
  }

  createArticle({ keyword, title, text, date, source, link, image }) {
    return this.makeFetch("/articles", "POST", {
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
    });
  }

  removeArticle(id) {
    return this.makeFetch(`/articles/${id}`, "DELETE");
  }
}
