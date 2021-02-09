import refs from "../../utils/refs.js";

function addParticipants(event) {
  event.preventDefault();
  const inputParticipants = refs.inputParticipants;
  refs.participantsBlock.classList.toggle("is-open");
  refs.participantsBlock.addEventListener('click', addParticipant);

  function addParticipant(e) {
    e.preventDefault();
    
    if (inputParticipants.value.indexOf(e.target.textContent) == -1) {
      refs.participantsBlock.classList.remove("is-open");
      inputParticipants.value += ` ${e.target.textContent}`;
      refs.participantsBlock.removeEventListener('click', addParticipant);
    }
   else {
     alert(`${e.target.textContent} already added`);
   }
  }
}




export default addParticipants;