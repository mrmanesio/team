
function  addEventToTable (indexDay, indexTime, event) { 
  
    let cell = document.querySelector(`[index-day="${indexDay}"][index-time="${indexTime}"]`);
       const eventBlock = `
       <div class="calendar_cell js-card-event"  draggable=true>
       <div class="calendar_cell--name">${event}</div>
       <div class="calendar_cell--close js-remove">x</div>
       </div>
      `;
 
    cell.insertAdjacentHTML('beforeend', eventBlock);  
  }

export default  addEventToTable;  