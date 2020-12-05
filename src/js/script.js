import Popup from './components/Popup.js'
import MainApi from './api/MainApi.js'
import Form from './components/Form.js'
import ERROR_MESSAGES from './constants/Errors/ERROR_MESSAGES.js'
import AuthTemplate from './constants/Templates/AuthTemplate.js'
import SigninTemplate from './constants/Templates/SigninTemplate.js'

(function () {
  const btnSignin = document.querySelector(".button__auth");
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileNav = document.querySelector('.nav__mobile-wrapper');
  const mobileNavHead = document.querySelector('.nav__mobile-wrapper_head');
  const navClose = mobileNavHead.querySelector('.close');

  /* ******** POPUP SIGNIN INIT ******** */
  const popup = document.querySelector(".popup");
  const btnSignLink = popup.querySelector(".popup__sign_link");
  const popupWrapper = popup.querySelector('.popup__wrapper');
  const errorSignName = popup.querySelector(".popup__input-email ~ span");
  const errorSignPassword = popup.querySelector(
    ".popup__input-password ~ span"
  );

  const tokenMainApi = '';
  const tokenApiNews = '';

  const mainApiUrl = 'https://api.gz-news-explorer.students.nomoreparties.co/';
  const newsApiUrl = '';

  // const mainApi = new MainApi({
  //   baseUrl: mainApiUrl,
  //   headers: {
  //     authorization: tokenMainApi, // 59deab8e-005f-42bb-a977-41ac03302afc token from Mesto project
  //     'content-type': 'application/json'
  //   }
  // });

  // Promise.all([
  //   mainApi.makeFetch(),
  // ])

  const newPopup = new Popup(popup, SigninTemplate);

  btnSignin.addEventListener('click', (e) => {
    newPopup.open();
    const form = popup.querySelector('form');
    const contentPopup = document.querySelector('.popup__content')
    new Form(form, ERROR_MESSAGES)

    contentPopup.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup__auth_link')) {
        const authPopup = new Popup(popup, AuthTemplate)
        authPopup.open();
        const form = popup.querySelector('form');
        new Form(form, ERROR_MESSAGES)
      }
      if (e.target.classList.contains('popup__sign_link')) {
        newPopup.open();

        const form = popup.querySelector('form');
        new Form(form, ERROR_MESSAGES)
      }
      if (e.target.closest('.popup__close')) {
        newPopup.close();
      }
    })
  })

  popupWrapper.addEventListener('click', newPopup.close());

  burgerMenu.addEventListener('click', () => {
    const navMobileWrapper = document.querySelector('.nav__mobile-wrapper')
    const btnSign = navMobileWrapper.querySelector(".button__auth");
    mobileNav.classList.remove('hidden');

    btnSign.addEventListener('click', (e) => {
      newPopup.open();
      const form = popup.querySelector('form');
      const contentPopup = document.querySelector('.popup__content')
      new Form(form, ERROR_MESSAGES)

      contentPopup.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup__auth_link')) {
          const authPopup = new Popup(popup, AuthTemplate)
          authPopup.open();
          const form = popup.querySelector('form');
          new Form(form, ERROR_MESSAGES)
        }
        if (e.target.classList.contains('popup__sign_link')) {
          newPopup.open();

          const form = popup.querySelector('form');
          new Form(form, ERROR_MESSAGES)
        }
        if (e.target.closest('.popup__close')) {
          newPopup.close();
        }
      })

      navClose.addEventListener('click', () => mobileNav.classList.add('hidden'))
    })
  });


  // btnSignin.forEach(btn => {
  //   btn.addEventListener("click", (e) => {
  //     if (e.target.closest('.nav__mobile-wrapper_menu_elem')) {
  //       mobileNav.classList.add('hidden');
  //       newPopup.open();
  //       const form = popup.querySelector('form');
  //       const formValidation = new Form(form, ERROR_MESSAGES)

  //       formValidation._validateForm();
  //     } else {
  //       newPopup.open();
  //       const form = popup.querySelector('form');
  //       const formValidation = new Form(form, ERROR_MESSAGES)

  //       formValidation._validateForm();
  //     }

  //   });
  // });
})()
