import Form from '../components/Form.js'
import AuthTemplate from '../constants/Templates/AuthTemplate.js'
import SigninTemplate from '../constants/Templates/SigninTemplate.js'
import ERROR_MESSAGES from '../constants/Errors/ERROR_MESSAGES.js'

const defaultContainer = document.querySelector('.popup__content');

export default class Popup {
  constructor(item, _container = defaultContainer) {
    this.item = item;
    this._container = _container;
    this._container.addEventListener('click', (e) => {
      const btn = this._container.querySelector('.popup__close');
      const wrapper = this.item.querySelector('.popup__wrapper');

      if (e.target.classList.contains('popup__auth_link')) {
        this.clearContent();
        this.setContent(AuthTemplate);
        const form = this._container.querySelector('form');

        const validateForm = new Form(form, ERROR_MESSAGES)
        validateForm._validateForm();

      } else if (e.target.classList.contains('popup__sign_link')) {
        this.clearContent();
        this.setContent(SigninTemplate);

        const form = this._container.querySelector('form');
        const validateForm = new Form(form, ERROR_MESSAGES)
        validateForm._validateForm();
      }

      wrapper.addEventListener('click', () => this.close());
      btn.addEventListener('click', () => this.close());

    });
  }

  setContent(content) {
    this.clearContent();
    this._container.insertAdjacentHTML('afterbegin', content);
    return this._container;
  }

  clearContent() {
    while (this._container.firstChild) {
      this._container.removeChild(this._container.firstChild)
    }
  }

  open() {
    this.clearContent();
    this.setContent(SigninTemplate);
    this.item.classList.add('_is-opened');
    return this._container;
  }

  close() {
    this.item.classList.remove('_is-opened');
  }
}