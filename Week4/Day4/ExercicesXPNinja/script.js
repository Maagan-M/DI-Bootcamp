function createCalendar(year, month) {
    // Create a table element
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';

    // Create table header with the days of the week
    let daysOfWeek = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    
    daysOfWeek.forEach(day => {
        let th = document.createElement('th');
        th.textContent = day;
        th.style.border = '1px solid black';
        th.style.padding = '3px 5px';
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the body of the calendar
    let tbody = document.createElement('tbody');

    // Get the first day of the month and number of days in the month
    let firstDay = new Date(year, month - 1, 1).getDay();
    let daysInMonth = new Date(year, month, 0).getDate();

    // Adjust firstDay to make Monday the first day of the week
    if (firstDay === 0) firstDay = 7;
    firstDay--;

    // Create the calendar rows and cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td');
            cell.style.border = '1px solid black';
            cell.style.padding = '3px 5px';

            if (i === 0 && j < firstDay) {
                cell.textContent = '.';
            } else if (date > daysInMonth) {
                cell.textContent = '.';
            } else {
                cell.textContent = date;
                date++;
            }

            row.appendChild(cell);
        }

        tbody.appendChild(row);

        // Break the loop if the last date is added
        if (date > daysInMonth) break;
    }

    table.appendChild(tbody);

    // Append the table to the body (or any specific container)
    document.body.appendChild(table);
}
createCalendar(2012, 9);
