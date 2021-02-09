import refs from '../../utils/refs.js';
import calendarArr from '../../utils/date.js';
import addEventToArr from '../arr/addEventToArr.js';
import clearForm from '../formEvent/clearForm.js';

refs.btnEddEvent.addEventListener('click', getFormDate);

function getFormDate(event) {
    event.preventDefault();
    const formDate = new FormData(refs.form);
    const date = {};

    formDate.forEach((value, name) => {
        date[name] = value;
    });

    let indexDay =calendarArr.findIndex((item)=>item.day==date.day);
    let indexTime = calendarArr[indexDay].time.findIndex((item)=>item.hour==date.time);


    if(!calendarArr[indexDay].time[indexTime].busy) {
        addEventToArr(calendarArr, date.day, date.time, date.participants, date.event);
        refs.popup.classList.remove('is-open');

        clearForm(refs.form);
    }
    else {
        alert  ("Failed to create an event. Time slot is already booked");
        return;
    }

}
