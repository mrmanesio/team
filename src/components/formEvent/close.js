import refs from "../../utils/refs.js";
import clearForm from '../formEvent/clearForm.js';

function closePopup(event) {
    
  if (event) {
    event.preventDefault();
  }
    refs.popup.classList.remove('is-open');
    clearForm(refs.form);
}

export default closePopup; 