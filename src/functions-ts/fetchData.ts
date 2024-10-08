// fetch data function
import { RecipeDataModel } from "./recipeDataModel";

let storedData: RecipeDataModel | null;

const fetchData = async (url: string): Promise<RecipeDataModel> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: RecipeDataModel = await response.json();
    storedData = data;
    console.log(storedData);

    if (storedData.meals.length === 0) {
      throw new Error("No meals found");
    }
    return storedData;
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};
const clearData = (): void => {
  storedData = null;
  console.log(storedData);
};
export { fetchData, clearData };
