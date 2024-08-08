// fetch data function
import { RecipeDataModel } from "./recipeDataModel";

let storedData: null | RecipeDataModel | [] | string | {};

const fetchData = async (url: string): Promise<RecipeDataModel> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: { meals: RecipeDataModel[] } = await response.json();
    storedData = data;
    console.log(storedData);
    if (data.meals.length === 0) {
      throw new Error("No meals found");
    }
    return data.meals[0];
  } catch (error) {
    console.log("Error fetching data: ", error);
    throw error;
  }
};
const clearData = () => {
  storedData = null;
  // console.log(storedData);
};
export { fetchData, clearData };
