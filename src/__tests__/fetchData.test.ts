import { describe, expect, test } from "@jest/globals";
import { fetchData } from "../functions-ts/fetchData";
import { RecipeDataModel } from "../functions-ts/recipeDataModel";
import { json } from "stream/consumers";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

describe("FetchData Output", () => {
  test("Fetching the Random Recipe", async () => {
    const recipe: RecipeDataModel = await fetchData(API_URL);
    // console.log(recipe);
    expect(recipe).toBeDefined();
    // expect(recipe.meals).toBeDefined();
    // expect(recipe.meals).toBeInstanceOf(Array);
    expect(recipe.meals).toContain(recipe.meals[0]);
    expect(recipe.meals.length).toBeGreaterThan(0);
  });
});
