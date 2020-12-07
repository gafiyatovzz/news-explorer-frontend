const AuthTemplate = `
    <h2 class="popup__title">Регистрация</h2>
    <form
      class="form popup__form"
      type="submit"
      name="signup"
      novalidate
    >
    <div class="input__container">
        <label for="name" class="popup__form_label">Имя</label>
        <input
          type="text"
          class="popup__form_input"
          id="name"
          minlength="2"
          maxlength="30"
          placeholder="Введите своё имя"
          required
        />
        <span id="error-name" class="error-message"></span>
      </div>
      <div class="input__container">
        <label for="email" class="popup__form_label">Email</label>
        <input
          type="email"
          class="popup__form_input"
          id="email"
          placeholder="Введите email"
          required
        />
        <span id="error-email" class="error-message"></span>
      </div>
      <div class="input__container">
        <label for="password" class="popup__form_label">Пароль</label>
        <input
          type="password"
          class="popup__form_input"
          id="password"
          minlength="2"
          maxlength="30"
          placeholder="Введите пароль"
          required
        />
        <span id="error-password" class="error-message"></span>
      </div>
      <button type="submit" class="button popup__button _disabled" disabled>
        Зарегистрироваться
      </button>
    </form>
    <p class="popup__sign">
      или <a class="popup__sign_link" href="#">Войти</a>
    </p>
    <div class="popup__close">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.3566 20L31.1781 28.8215L28.8211 31.1786L18.3497 20.7072C17.9592 20.3166 17.9592 19.6835 18.3497 19.2929L28.8211 8.82153L31.1781 11.1786L22.3566 20Z"
          fill="white"
        />
        <path
          d="M18.1307 20L9.30919 28.8215L11.6662 31.1786L22.1376 20.7072C22.5281 20.3166 22.5281 19.6835 22.1376 19.2929L11.6662 8.82153L9.30919 11.1786L18.1307 20Z"
          fill="white"
        />
      </svg>
    </div>
`;

export default AuthTemplate;
