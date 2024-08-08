import { RecipeDataModel, RecipeModel } from "./recipeDataModel";

const renderTable = (recipeData: RecipeDataModel): void => {
  const tableBody = document.getElementById("table-body") as HTMLTableElement;
  const tableContainer = document.getElementById("myTable") as HTMLTableElement;

  // Clear any existing rows in the table body

  tableBody.innerHTML = "";
  tableContainer.style.display = "table";

  // Loop through the data to create table rows
  for (let i: number = 1; i <= 20; i++) {
    const ingredient: string | null =
      recipeData.meals[0][`strIngredient${i}` as keyof RecipeModel];
    const measurement: string | null =
      recipeData.meals[0][`strMeasure${i}` as keyof RecipeModel];

    if (ingredient) {
      const row = document.createElement("tr") as HTMLTableRowElement;
      const ingredientCell: HTMLTableCellElement = document.createElement(
        "td"
      ) as HTMLTableCellElement;
      const measurementCell: HTMLTableCellElement = document.createElement(
        "td"
      ) as HTMLTableCellElement;

      if (
        (ingredient && measurement !== undefined) ||
        (ingredient && measurement !== null)
      ) {
        ingredientCell.textContent = ingredient;
        measurementCell.textContent = measurement;
      }
      row.appendChild(ingredientCell);
      row.appendChild(measurementCell);
      tableBody.appendChild(row);
    }
  }
  // return recipeData;
};
export default renderTable;
