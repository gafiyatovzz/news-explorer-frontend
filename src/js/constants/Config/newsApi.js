import SetDate from "../../components/SetDate.js";

const date = new SetDate();

const newsApiConfig = {
  url: "https://nomoreparties.co/news/v2/everything?",
  apiKey: "4a49cc35604e457ca1790c1d9689955e",
  pageSize: 100,
};

newsApiConfig.options = {
  language: "language=ru",
  from: `from=${date.getIso()}`,
  to: `to=${date.getNow()}`,
  pageSize: `pageSize=${newsApiConfig.pageSize}`,
  apiKey: `apiKey=${newsApiConfig.apiKey}`,
};

export default newsApiConfig;
