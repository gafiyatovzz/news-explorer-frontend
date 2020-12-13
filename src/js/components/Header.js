export default class Header {
  constructor(user) {
    this.user = user;
    this.btnsAuth = document.querySelectorAll(".button__auth > span");
  }

  isLogged() {
    return Boolean(localStorage.getItem("isLogged"));
    // if (Boolean(localStorage.getItem('isLogged')) === true) {
    //   this.btnsAuth.forEach(btn => {
    //     btn.textContent = this.user.name;
    //   })
    //   this.render();
    //   return true
    // } else {
    //   this.btnsAuth.forEach(btn => {
    //     btn.textContent = 'Авторизоваться';
    //   })
    //   return false
    // }
  }

  _getSelector(elem) {
    return elem.closest("li").className;
  }

  render() {
    if (this.isLogged()) {
      this.btnsAuth.forEach((btn) => {
        btn.textContent = this.user.name;
        btn.closest("li").insertAdjacentHTML(
          "beforebegin",
          `
            <li class="${this._getSelector(btn)}">
              <a class="menu__elem_link" href="./saved-news.html">
                Сохраненные статьи
              </a>
            </li>
          `
        );
      });
    } else {
      this.btnsAuth.forEach((btn) => {
        btn.textContent = "Авторизоваться";
      });
    }
  }
}

// props = {
// isLoggedIn: false,
// userName: 'Zak';
// }
