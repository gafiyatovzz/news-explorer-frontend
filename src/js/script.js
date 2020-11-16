export default (function () {
  const btnSignin = document.querySelector(".button__auth");

  /* ******** POPUP SIGNIN INIT ******** */
  const popup = document.querySelector(".popup");
  const btnSignLink = popupSignin.querySelector(".popup__sign_link");
  const inputSignEmail = popupSignin.querySelector(".popup__input-email");
  const inputSignPassword = popupSignin.querySelector(".popup__input-password");
  const errorSignName = popupSignin.querySelector(".popup__input-email ~ span");
  const errorSignPassword = popupSignin.querySelector(
    ".popup__input-password ~ span"
  );

  const newPopup = new Popup(popup);
  const formValidation = new Form(popup, ERROR_MESSAGES);

  btnSignin.addEventListener("click", () => {
    newPopup.open();

    btnSignLink.addEventListener("click", () => {
      const authPopup = document.querySelector("");
      //const authValidate = new from(, ERROR_MESSAGES)
    });
  });

  window.popup = newPopup;
})();
