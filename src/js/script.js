import Popup from './components/Popup.js'
import MainApi from './api/MainApi.js'
import Form from './components/Form.js'
import ERROR_MESSAGES from './constants/Errors/ERROR_MESSAGES.js'
import AuthTemplate from './constants/Templates/AuthTemplate.js'

(function () {
  const btnSignin = document.querySelector(".button__auth");

  /* ******** POPUP SIGNIN INIT ******** */
  const popup = document.querySelector(".popup");
  const btnSignLink = popup.querySelector(".popup__sign_link");
  const errorSignName = popup.querySelector(".popup__input-email ~ span");
  const errorSignPassword = popup.querySelector(
    ".popup__input-password ~ span"
  );

  const tokenMainApi = '';
  const tokenApiNews = '';

  const mainApiUrl = 'https://api.gz-news-explorer.students.nomoreparties.co/';
  const newsApiUrl = '';

  const mainApi = new MainApi({
    baseUrl: '',
    headers: {
      authorization: tokenMainApi, // 59deab8e-005f-42bb-a977-41ac03302afc token from Mesto project
      'content-type': 'application/json'
    }
  });

  Promise.all([
    mainApi.makeFetch(),
  ])

  const newPopup = new Popup(popup);

  btnSignin.addEventListener("click", () => {
    newPopup.open();
    const form = popup.querySelector('form');
    const formValidation = new Form(form, ERROR_MESSAGES)

    formValidation._validateForm();

    popup.querySelector('form').addEventListener('submit', (e) => {
console.log(e.target);

      const inputSignEmail = popup.querySelector(".popup__input-email");
      const inputSignPassword = popup.querySelector(".popup__input-password");


    })
    // if (popup.classList.contains('.popup__signin')) {
    //   const signinForm = document.querySelector('.popup__signin > form[name="signin"]');
    //   const popupBtn = document.querySelector('.popup__button');

    //   signinForm.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     popupBtn.addEventListener('click', (e) => {
    //       const data = {
    //         email: signinForm.email.value,
    //         password: signinForm.password.value,
    //       };

    //       mainApi.signin(data);
    //     })
    //   })
    // } else if (popup.classList.contains('.popup__signup')) {
    //   //btnSignLink.addEventListener("click", () => {
    //   const authPopup = document.querySelector("");
    //   //const authValidate = new from(, ERROR_MESSAGES)
    // }
  });
})()
