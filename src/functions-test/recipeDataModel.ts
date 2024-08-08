export interface RecipeDataModel {
  meals: {
    [key: string]: string | undefined;
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
  }[];
}
