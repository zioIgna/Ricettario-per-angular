import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

Ingredient
export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes',10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addToShoppingList(ingredients: Ingredient[]){
        this.ingredients.push.apply(ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}