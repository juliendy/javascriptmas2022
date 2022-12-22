function getReadyTables() {
    const readyTables = [];
    for (let i = 0; i < 2; i++) {
        readyTables.push(Math.round(Math.random() * 20) + 1);
    }
    return readyTables;
}

function displayTables(tables) {
    return tables.map((table) => `<div class="table">${table}</div>`).join("");
}

const tablesElement = document.getElementById("tables");
tablesElement.innerHTML = displayTables(getReadyTables());
