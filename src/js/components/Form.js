import MainApi from "../api/MainApi";

export default class Form {
  constructor(form, message) {
    this.form = form;
    this.message = message;
    this.inputs = [...this.form.querySelectorAll("input")];
    this.button = this.form.querySelector(".popup__button");
    this.data = {};
    this._validateForm();
  }

  setServerError() {
    this._getInfo()
    this._clear();
  } // добавляет форме ошибку, пришедшую с сервера;

  _validateInputElement(input, error) {
    for (const key in this.message) {
      input.validity[key] ? (error.textContent = this.message[key]) : error.textContent = "";
    }
    return error.textContent;
  }

  _validateForm() {
    this.form.addEventListener("input", (e) => {
      this._validateInputElement(
        e.target,
        e.target.closest("div").querySelector(".error-message")
      );
      this.button.disabled = !this.form.checkValidity();
      this._writeUserData(e);
    });
  }

  _clear() {
    this.inputs.forEach((input) => {
      input.value = "";
    });
  } //вспомогательный метод, очищает поля формы;

  _writeUserData(event) {
    this.inputs.forEach((input) => {
      if (event.target.id === input.id){
        this.data[input.getAttribute("id")] = event.target.value
      }
    });
  }

  _getInfo() {
    return this.data;
  }
}