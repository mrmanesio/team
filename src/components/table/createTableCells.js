
function createTableCells(calendarArr, rowArr) {
    rowArr.forEach((row, indexTime) => {
      calendarArr.forEach ((day, indexDay) => {
              let td = document.createElement('td');  
                  td.classList.add('js-cell')
                  td.setAttribute('Index-Day', indexDay);
                  td.setAttribute('Index-Time', indexTime);
                  row.appendChild(td);
          });
      });
  }


  export default createTableCells;