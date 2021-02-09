const refs = {
popup: document.querySelector('.js_eventPopup'), 
form:  document.querySelector('.js-event_form'),  

bntOpenPopupAddEvent: document.querySelector('.js-open-eventPopup'), 
btnClosePopupAddEvent: document.querySelector('.js-close-eventPopup'),
btnEddEvent: document.querySelector('.js-add-event'), 
btnCancelAddEvent: document.querySelector('.ja-cancel-addEvent'), 

table: document.getElementById('calendar'),
rowsTime: document.querySelectorAll('.calendar-time'),
cellEvent:document.querySelectorAll('.js-cell'),

inputParticipants: document.querySelector('.js-input-participants'),
bntAddParticipants: document.querySelector('.js-add_participants'),
bntRemoveParticipants: document.querySelector('.js-remove_participants'),
participantsBlock: document.querySelector('.js_participants-block'),

filterParticipants:document.querySelector('.js-filterParticipants'),

};

export default refs;