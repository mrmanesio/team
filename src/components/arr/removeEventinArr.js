import calendarArr from '../../utils/date.js';

function removeDateEventInArr(indexDay, indexTime) {
    const infoEvent = calendarArr[indexDay].time[indexTime];
    infoEvent.participants = [];
    infoEvent.event = '';
    infoEvent.busy=false;
}

export default removeDateEventInArr;
