export default class Header {
  constructor(props) {
    this.props = props;
    this.loggedData = [
      {
        elem: 'Главная',
        link: '/',
      },
      {
        elem: 'Сохраненные статьи',
        link: '/saved-news',
      },
      {
        ico: {
          link: '',
          alt: '',
        }
      }
    ]
  }

  isLogged() {
    if (this.props.isLoggedIn) {
      const btnAuth = document.querySelector('.button__auth');
      const btnAuthIco = btnAuth.querySelector('.ico');
      const savedNews = document.querySelector('.saved-news');

      btnAuth.textContent = this.props.userName;


    } else {
      document.querySelector('.button__auth').textContent = 'Авторизоваться'
    }
  }

  render() { //при вызове перерисовывает шапку в зависимости от переданного аргумента — объекта props
    return `
          <li class="menu__elem is-active">
            <a href="/" className="menu__elem_link">
              Главная
            </a>
          </li>
          <li class="menu__elem saved-news">Сохраненные статьи</li>
          <li class="menu__elem">
            <button class="button button__auth">
              <span>${this.isLogged()}</span>
              <img
                class="ico ico-logout"
                src="assets/images/svg/icons/logout.svg"
                alt="Иконка выхода"
              />
            </button>
          </li>
         `
  }
}

// props = {
  // isLoggedIn: false,
  // userName: 'Zak';
// }