class Popup {
  constructor(item) {
    this.item = item;
    this._container = this.item.querySelector('.popup__content');
    this._container.addEventListener('click', (e) => {
      const btn = this._container.querySelector('.popup__close');

      if (e.target.classList.contains('popup__auth_link')) {
        this.clearContent();
        this.setContent(AuthTemplate);
      } else if (e.target.classList.contains('popup__sign_link')) {
        this.clearContent();
        this.setContent(SigninTemplate);
      }

      btn.addEventListener('click', () => this.close())
    });
  }

  setContent(content) {
    this.clearContent();
    this._container.insertAdjacentHTML('afterBegin', content);
  }

  clearContent() {
    while(this._container.firstChild) {
      this._container.removeChild(this._container.firstChild)
    }
  }

  open() {
    this.item.classList.add('_is-opened');
  }

  close() {
    this.item.classList.remove('_is-opened');
  }
}