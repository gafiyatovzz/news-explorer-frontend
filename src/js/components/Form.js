class Form {
  constructor(item, message) {
    this.form = item.querySelector('.popup__form');
    this.item = item;
    this.message = message;
    this._validateForm();
  }

  setServerError() {

  } // добавляет форме ошибку, пришедшую с сервера;

  _validateInputElement(input, error) {
    for (let key in this.message) {
      if (input.validity[key]) return error.textContent = this.message[key]
    } return error.textContent = '';
  } //валидирует переданный в качестве аргумента инпут;

  _validateForm() {
    this.form.addEventListener('input', (e) => {
      this._validateInputElement(e.target, e.target.closest('div').querySelector('.error-message'));
    })
  } //валидирует всю форму;

  _clear() { } //вспомогательный метод, очищает поля формы;

  _getInfo() { } //вспомогательный метод, возвращает данные формы.
}