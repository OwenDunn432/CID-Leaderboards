const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT-DiaJKyIt1rkk0a571PV_8THVtJh58VFDNckPhJmwPzR2MTSnAh8ubJmro8ioME8uGggjfMkeaj7a/pub?gid=108731431&single=true&output=csv"

async function loadSheetData() {
  const response = await fetch(csvUrl);
  const csvText = await response.text();

  console.log(csvText);

  const rows = csvText
    .trim()
    .split("\n")
    .map(row => row.split(","));

  const table = document.getElementById("sheetTable");
  const thead = table.querySelector("thead");
  const tbody = table.querySelector("tbody");

  // Create header row
  const headers = rows[0];
  thead.innerHTML = `
    <tr>
      ${headers.map(h => `<th>${h}</th>`).join("")}
    </tr>
  `;

  // Create data rows
  rows.slice(1).forEach(row => {
    const tr = document.createElement("tr");

    tr.innerHTML = row
      .map(cell => `<td>${cell.trim()}</td>`)
      .join("");

    tbody.appendChild(tr);
  });
}

loadSheetData();