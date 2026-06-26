function fetchSheet(id) {
    console.log("Running fetchSheet() script");

    const tbody = document.querySelector(".tbody")

    const url = "https://docs.google.com/spreadsheets/d/1NfkJEPKOBWTya8gBT3RMu-FFPKEEdFinqF9cF7A1WzA/gviz/tq?gid=" + id;

    fetch(url).then(response => response.text()).then(data => {
        const jsonPart = data.split("setResponse(")[1];
        const jsonText = jsonPart.slice(0, jsonPart.length - 2)
        const toJson = JSON.parse(jsonText);
        console.log(toJson);
    }).catch(error => console.log(error))

    makeTable(toJson);
}

function makeTable(json) {
    const rows = json.table.rows;
    const tbody = document.querySelector(".tbody");

    rows.forEach(row => {
        const tr = document.createElement("tr");

        const name = row.c[0]?.v ?? "";
        const cost = row.c[1]?.v ?? "";

        tr.innerHTML = `
            <td>${name}</td>
            <td>${cost}</td>
        `;

        tbody.appendChild(tr);
    });
}   