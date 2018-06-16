import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false')
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}