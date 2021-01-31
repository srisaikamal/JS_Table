const tableGenerator = () => {
  let wrap = document.getElementById("wrap");

  function generateTable() {
    let newTable = document.createElement("table"),
      tBody = newTable.createTBody(),
      nOfColumns = 1000,
      nOfRows = 400,
      row = generateRow(nOfColumns);

    for (let i = 0; i < nOfRows; i++) {
      tBody.appendChild(row.cloneNode(true));
    }

    (wrap.hasChildNodes() ? wrap.replaceChild : wrap.appendChild).call(
      wrap,
      newTable,
      wrap.children[0]
    );
  }

  function generateRow(n) {
    let row = document.createElement("tr"),
      text = document.createTextNode("Demo");

    for (let i = 0; i < n; i++) {
      row.insertCell().appendChild(text.cloneNode(true));
    }

    return row.cloneNode(true);
  }

  generateTable();
};

tableGenerator();
