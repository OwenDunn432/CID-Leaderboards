// Runs script on loading
fetchSheet();
console.log("Running script");

function fetchSheet() {
    const tbody = document.querySelector(".tbody")

    const url = "https://docs.google.com/spreadsheets/d/1NfkJEPKOBWTya8gBT3RMu-FFPKEEdFinqF9cF7A1WzA/gviz/tq?sheet=most_expensive_taxi"

    fetch(url).then(response => response.text()).then(data => {
        const jsonPart = data.split("setResponse(")[1];
        const jsonText = jsonPart.slice(0, jsonPart.length - 2)
        const toJson = JSON.parse(jsonText);
        console.log(toJson);
    }).catch(error => console.log(error))
}