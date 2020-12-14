export default class NewsCard {
  renderIcon(etarget) {
    if (etarget.closest('svg').classList.contains("wishlist-ico")) {
      etarget.closest('svg').classList.add("wishlist-ico_saved");
      etarget.closest('svg').classList.remove("wishlist-ico");
    } else {
      etarget.closest('svg').classList.add("wishlist-ico");
      etarget.closest('svg').classList.remove("wishlist-ico_saved");
    }
  } //отвечает за отрисовку иконки карточки. У этой иконки три состояния: иконка незалогиненного пользователя, активная иконка залогиненного, неактивная иконка залогиненного.
}
