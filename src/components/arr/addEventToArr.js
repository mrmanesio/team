import addEventToTable from '../table/addEvent.js';

function addEventToArr (arr, day, time, participants, event)   {
    const indexDay = arr.findIndex((item)=>item.day==day);
    const indexTime = arr[indexDay].time.findIndex((item)=>item.hour==time);
  
    const objectTime=arr[indexDay].time[indexTime];
    objectTime.busy=true;
    objectTime.event=event;
    objectTime.participants=participants.split (' ');
    console.log(arr);
    addEventToTable(indexDay, indexTime, event);
}

export default addEventToArr;
