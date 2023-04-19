function createTable() {
    //Write your code here
    const rows = parseInt(prompt("Input number of rows"));

    // Prompt for number of columns
    const cols = parseInt(prompt("Input number of columns"));

    // Get the table element
    const table = document.getElementById("myTable");

    // Create rows and cells
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell(j);
            cell.innerHTML = `Row-${i} Column-${j}`;
        }
    }

}