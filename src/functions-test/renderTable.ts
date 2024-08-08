import { RecipeDataModel } from "./recipeDataModel";

const renderTable = (recipeData: RecipeDataModel): RecipeDataModel => {
  const tableBody = document.getElementById("table-body") as HTMLTableElement;
  const tableContainer = document.getElementById("myTable") as HTMLTableElement;

  // Clear any existing rows in the table body

  tableBody.innerHTML = "";
  tableContainer.style.display = "table";

  // Loop through the data to create table rows
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeData.meals[0][`strIngredient${i}`];
    const measurement = recipeData.meals[0][`strMeasure${i}`];

    if (ingredient) {
      const row = document.createElement("tr") as HTMLTableRowElement;
      const ingredientCell = document.createElement(
        "td"
      ) as HTMLTableCellElement;
      const measurementCell = document.createElement(
        "td"
      ) as HTMLTableCellElement;

      if (ingredient && measurement !== undefined) {
        ingredientCell.textContent = ingredient;
        measurementCell.textContent = measurement;
      }
      row.appendChild(ingredientCell);
      row.appendChild(measurementCell);
      tableBody.appendChild(row);
    }
  }
  return recipeData;
};
export default renderTable;
