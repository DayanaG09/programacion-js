const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const dictionaryTable = document.getElementById("dictionaryTable");
const resultContainer = document.getElementById("resultContainer");

searchBtn.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let matchCount = 0;

  const rows = dictionaryTable.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let rowMatches = false;

    for (const cell of cells) {
      if (cell.textContent.toLowerCase().includes(searchTerm)) {
        rowMatches = true;
        matchCount++;
        cell.classList.add("highlight");
      } else {
        cell.classList.remove("highlight");
      }
    }

    rows[i].style.display = rowMatches ? "" : "none";
  }

  resultContainer.textContent = `Resultados: ${matchCount} coincidencia(s)`;
});
