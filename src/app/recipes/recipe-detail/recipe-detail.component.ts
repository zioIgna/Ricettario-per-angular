import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addToShoppingList(){
    this.slService.addToShoppingList(this.recipe.ingredients);
    console.log(this.recipe.ingredients);
  }
}
