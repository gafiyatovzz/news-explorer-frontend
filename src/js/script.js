import Popup from "./components/Popup.js";
import MainApi from "./api/MainApi.js";
import Form from "./components/Form.js";
import ERROR_MESSAGES from "./constants/Errors/ERROR_MESSAGES.js";
import AuthTemplate from "./constants/Templates/AuthTemplate.js";
import SigninTemplate from "./constants/Templates/SigninTemplate.js";
import Header from "./components/Header.js";

(function () {
  const btnSignin = document.querySelector(".button__auth");
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileNav = document.querySelector(".nav__mobile-wrapper");
  const mobileNavHead = document.querySelector(".nav__mobile-wrapper_head");

  /* ******** POPUP SIGNIN INIT ******** */
  const popup = document.querySelector(".popup");
  const popupWrapper = popup.querySelector(".popup__wrapper");

  const mainApiUrl = "https://api.gz-news-explorer.students.nomoreparties.co";
  const newsApiUrl = "";

  const mainApi = new MainApi(mainApiUrl);

  // Promise.all([
  //   mainApi.makeFetch(),
  // ])

  const user = JSON.parse(localStorage.getItem("user"));
  const header = new Header(user);
  header.isLogged();
  header.render();

  const newPopup = new Popup(popup, SigninTemplate);

  btnSignin.addEventListener("click", (e) => {
    newPopup.open();
    const formSignin = popup.querySelector("form");
    const btnSignin = popup.querySelector(".popup__button");

    const contentPopup = document.querySelector(".popup__content");

    const f = new Form(formSignin, ERROR_MESSAGES);

    formSignin.addEventListener("submit", (e) => {
      btnSignin.addEventListener("click", () => {
        mainApi.signin(f._getInfo());
        newPopup.close();
        const user = JSON.parse(localStorage.getItem("user"));
        const header = new Header(user);
        header.isLogged();
      });
    });

    contentPopup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup__auth_link")) {
        const authPopup = new Popup(popup, AuthTemplate);
        authPopup.open();

        const formAuth = popup.querySelector("form");
        const btnAuth = popup.querySelector(".popup__button");
        const formSignup = new Form(formAuth, ERROR_MESSAGES);

        formAuth.addEventListener("submit", (e) => {
          btnAuth.addEventListener("click", () => {
            mainApi.signup(formSignup._getInfo());
            authPopup.close();
          });
        });
      }
      if (e.target.classList.contains("popup__sign_link")) {
        newPopup.open();

        const form = popup.querySelector("form");
        new Form(form, ERROR_MESSAGES);
      }
      if (e.target.closest(".popup__close")) {
        newPopup.close();
      }
    });
  });


  popupWrapper.addEventListener("click", newPopup.close());

  burgerMenu.addEventListener("click", () => {
    const navMobileWrapper = document.querySelector(".nav__mobile-wrapper");
    const btnSign = navMobileWrapper.querySelector(".button__auth");
    mobileNav.classList.remove("hidden");

    btnSign.addEventListener("click", (e) => {
      newPopup.open();
      const form = popup.querySelector("form");
      const contentPopup = document.querySelector(".popup__content");
      new Form(form, ERROR_MESSAGES);

      contentPopup.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup__auth_link")) {
          const authPopup = new Popup(popup, AuthTemplate);
          authPopup.open();
          const form = popup.querySelector("form");
          new Form(form, ERROR_MESSAGES);
        }
        if (e.target.classList.contains("popup__sign_link")) {
          newPopup.open();

          const form = popup.querySelector("form");
          new Form(form, ERROR_MESSAGES);
        }
        if (e.target.closest(".popup__close")) {
          newPopup.close();
        }
      });
    });
    mobileNav.addEventListener("click", () => {
      navMobileWrapper.classList.add("hidden");
    });
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
})();
