import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else do you need to say?',
            'http://www.bbq4all.it/wp-content/uploads/2017/04/bacon-cheese-burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    getRecipes(){
        return this.recipes.slice();
    }
}