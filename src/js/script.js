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

  const mainApiUrl = "https://api.gz-news-explorer.students.nomoreparties.co";
  const mainApi = new MainApi(mainApiUrl);

  /* ******** POPUP SIGNIN INIT ******** */
  const popup = document.querySelector(".popup");
  const popupWrapper = popup.querySelector(".popup__wrapper");

  const logout = document.querySelector(".ico-logout");

  const user = JSON.parse(localStorage.getItem("user"));
  const header = new Header(user);
  header.render();

  const newPopup = new Popup(popup, SigninTemplate);

  btnSignin.addEventListener("click", (e) => {
    newPopup.open();
    const formSignin = popup.querySelector("form");
    const btnSig = popup.querySelector(".popup__button");

    const contentPopup = document.querySelector(".popup__content");

    const f = new Form(formSignin, ERROR_MESSAGES);

    formSignin.addEventListener("submit", (e) => {
      btnSig.addEventListener("click", () => {
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
        const btnSign = popup.querySelector(".popup__button");
        const form = popup.querySelector("form");
        const formSign = new Form(form, ERROR_MESSAGES);
        form.addEventListener("submit", (e) => {
          btnSign.addEventListener("click", () => {
            mainApi.signin(formSign._getInfo());
            newPopup.close();
            const user = JSON.parse(localStorage.getItem("user"));
            const header = new Header(user);
            header.isLogged();
          });
        });
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
      const popupBtn = popup.querySelector(".popup__button");
      const form = popup.querySelector("form");
      const contentPopup = document.querySelector(".popup__content");
      const f = new Form(form, ERROR_MESSAGES);

      form.addEventListener("submit", (e) => {
        e.preventDefault()
        popupBtn.addEventListener("click", () => {
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
          const form = popup.querySelector("form");
          const btnAuth = popup.querySelector(".popup__button");

          const formSignup = new Form(form, ERROR_MESSAGES);

          form.addEventListener("submit", (e) => {
            btnAuth.addEventListener("click", () => {
              console.log('clcik');
              mainApi.signup(formSignup._getInfo());
              authPopup.close();
            });
          });
        }
        if (e.target.classList.contains("popup__sign_link")) {
          console.log('auth');
          newPopup.open();
          const popBtn = popup.querySelector(".popup__button");
          const form = popup.querySelector("form");
          const formSign = new Form(form, ERROR_MESSAGES);

          form.addEventListener("submit", () => {
            popBtn.addEventListener("click", () => {
              const user = JSON.parse(localStorage.getItem("user"));
              const header = new Header(user);

              mainApi.signin(formSign._getInfo());
              newPopup.close();
              header.isLogged();
            });
          });
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

  logout.addEventListener("click", mainApi.logout());

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
