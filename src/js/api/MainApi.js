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
      credentials: "include",
      mode: 'cors',
      sameSite: 'none',
      secure: true,
      headers: {
        "Content-Type": "application/json",
      },
       body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then(d => {
        console.log(d);
        if (d.token) {
          localStorage.setItem('isLogged', true)
          localStorage.setItem('token', d.token)
          this.getUserData();
          console.log('Ты авторизовался')
        }
      })
      .catch((err) => {
        console.log(`Произошла ошибка авторизации - ${err}`);
      });
  } //аутентифицирует пользователя на основе почты и пароля;

  getUserData() {
    // this.makeFetch("users/me");
    fetch(`${this.baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })
    .then(res => res.json())
    .then(data => Object.values(data).forEach(el => localStorage.setItem('user', JSON.stringify(el))))
    .catch(err => console.log(err));
  }

  // getArticles() {
  //   return this.makeFetch("/articles");
  // }

  // createArticle({ keyword, title, text, date, source, link, image }) {
  //   return this.makeFetch("/articles", "POST", {
  //     keyword,
  //     title,
  //     text,
  //     date,
  //     source,
  //     link,
  //     image,
  //   });
  // }

  removeArticle(id) {
    return this.makeFetch(`/articles/${id}`, "DELETE");
  }
}
