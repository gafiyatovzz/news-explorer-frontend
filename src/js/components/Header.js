export default class Header {
  constructor(user) {
    this.user = user;
    this.btnsAuth = document.querySelectorAll('.button__auth > span');
  }

  isLogged() {
    if (Boolean(localStorage.getItem('isLogged')) === true) {
      this.btnsAuth.forEach(btn => {
        btn.textContent = this.user.name;
      })
    } else {
      this.btnsAuth.forEach(btn => {
        btn.textContent = 'Авторизоваться';
      })
    }
  }

  _getSelector(elem) {
    return elem.closest('li').className;
  }

  render() { //при вызове перерисовывает шапку в зависимости от переданного аргумента — объекта props
    this.btnsAuth.forEach(btn => {
      btn.closest('li').insertAdjacentHTML('beforebegin',
        `
          <li class="${this._getSelector(btn)}">
            <a class="menu__elem_link" href="./saved-news.html">
              Сохраненные статьи
            </a>
          </li>
        `
      )
    });

  }
}

// props = {
  // isLoggedIn: false,
  // userName: 'Zak';
// }