import removeDateEventInArr from '../arr/removeEventinArr';

function removeEvent(event) {
    if (event.target.classList.contains('js-remove')) {
        const nameEvent = event.target.previousElementSibling.innerText;
        if (confirm(`Are you sure you want to delete ${nameEvent} event`)) {
            const blockEvent = event.target.parentElement;
            const cellEvent = blockEvent.parentElement;
            const indexDay = cellEvent.getAttribute('index-day');
            const indexTime = cellEvent.getAttribute('index-time');
            removeDateEventInArr(indexDay, indexTime);
            blockEvent.remove();
        }
    }
}


export default removeEvent;