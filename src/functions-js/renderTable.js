const renderTable = (recipeData) => {
  const tableBody = document.getElementById("table-body");
  const tableContainer = document.getElementById("myTable");

  // Clear any existing rows in the table body
  tableBody.innerHTML = "";
  tableContainer.style.display = "table";

  // Loop through the data to create table rows
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeData.meals[0][`strIngredient${i}`];
    const measurement = recipeData.meals[0][`strMeasure${i}`];

    if (ingredient) {
      const row = document.createElement("tr");
      const ingredientCell = document.createElement("td");
      const measurementCell = document.createElement("td");

      ingredientCell.textContent = ingredient;
      measurementCell.textContent = measurement;

      row.appendChild(ingredientCell);
      row.appendChild(measurementCell);
      tableBody.appendChild(row);
    }
  }
};
export default renderTable;
