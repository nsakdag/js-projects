const makearray = (array) => {
    const table = document.createElement('table')
    array.forEach(element => {
        const parts = element.split(', ')
        const rows = document.createElement('tr')
        parts.forEach(item => {
            const cell = document.createElement('td')
            cell.textContent = item
            rows.appendChild = cell
        }) 
        table.appendChild = rows
    });

    return table
}
