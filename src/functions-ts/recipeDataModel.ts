export interface RecipeDataModel {
  meals: RecipeModel[];
}
[];

export interface RecipeModel {
  [key: string]: string | null;
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
}

// meals: {
//   [key: string]: string | undefined;
//   idMeal: string;
//   strMeal: string;
//   strInstructions: string;
//   strMealThumb: string;
// }[];
