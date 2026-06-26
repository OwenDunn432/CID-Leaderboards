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

    console.log(table.rows[2].c[0]);

    //table.rows[1].c[0].v
    //table.rows[2].c[0]
}