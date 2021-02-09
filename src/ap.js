
import calendarArr from "./utils/date.js";
import createTableCells from "./components/table/createTableCells.js";
import refs from "./utils/refs.js";
import "./components/formEvent/open.js";
import closePopup from './components/formEvent/close';
import "./components/formEvent/getFormDate.js";
import removeEvent from './components/table/removeEvent.js';
import addParticipants from './components/formEvent/addParticipants.js';
import filterMember from './components/arr/filterMember.js';
import removeParticipants from './components/formEvent/removeParticipants.js';



createTableCells(calendarArr, refs.rowsTime);
refs.btnClosePopupAddEvent.addEventListener('click', closePopup);
refs.btnCancelAddEvent.addEventListener('click', closePopup);
refs.table.addEventListener('click', removeEvent);
refs.bntAddParticipants.addEventListener('click', addParticipants);
refs.bntRemoveParticipants.addEventListener('click', removeParticipants);
refs.filterParticipants.addEventListener('change', filterMember);
refs.popup.addEventListener('click', e => {
   if (e.target.classList.contains('popup-event')) {
     closePopup();
   }
})