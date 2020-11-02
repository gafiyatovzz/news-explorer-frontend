export default class Popup {
  constructor(item, content) {
    this.item = item;
    this.content = content;
    this.container = this.item.querySelector('.popup__content');
    this.item.querySelector('.popup__close').addEventListener('click', () => this.close());
  }

  #setContent() {
    this.container.insertAdjacentElement('afterBegin', this.content);
  }

  #clearContent() {
    while(this.container.firstChild) {
      this.container.removeChild(this.container.firstChild)
    }
  }

  open() {
    this.popup.classList.add('._is-opened')
  }

  close() {
    this.popup.classList.remove('._is-opened')
  }
}