import refs from "../../utils/refs.js";

refs.bntOpenPopupAddEvent.addEventListener('click', openPopup);

function openPopup(event) {
    event.preventDefault();
    refs.popup.classList.add('is-open');
}
