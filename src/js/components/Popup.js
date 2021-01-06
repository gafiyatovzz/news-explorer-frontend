const defaultContainer = document.querySelector(".popup__content");

export default class Popup {
  constructor(item, template, _container = defaultContainer) {
    this.item = item;
    this._container = _container;
    this.template = template;
  }

  setContent() {
    this.clearContent();
    this._container.insertAdjacentHTML("afterbegin", this.template);
    return this._container;
  }

  clearContent() {
    while (this._container.firstChild) {
      this._container.removeChild(this._container.firstChild);
    }
  }

  open() {
    if (Boolean(localStorage.getItem("isLogged")) === true) {
      console.log('Ты уже авторизован');
    } else {
      this.clearContent();
      this.setContent();
      this.item.classList.add("_is-opened");
      return this._container;
    }
  }

  close() {
    this.item.classList.remove("_is-opened");
  }
}
