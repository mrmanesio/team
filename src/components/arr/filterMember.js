import refs from '../../utils/refs.js';
import date from '../../utils/date.js';

function filterMember(e) {
    const searchValue = e.target.value;
    const events = document.querySelectorAll('.js-card-event');
    showAllEvents(events);

    if (searchValue == 'All members') {
        return;
    }

    events.forEach((item) => {
        const cellEvent = item.parentElement;
        const indexDay = cellEvent.getAttribute('index-day');
        const indexTime = cellEvent.getAttribute('index-time');
        const arrParticipants = date[indexDay].time[indexTime].participants;
        if (!arrParticipants.includes(searchValue)) {
            item.style.opacity = '0';
        }
        else {
            return;
        }
    });
}


function showAllEvents(events) {
    events.forEach((item) => {
        item.style.opacity = '1';
    });
}

export default filterMember;